#!/usr/bin/env node
// Prints the pages a review round audits, as JSON:
//
//   node scripts/review/select-pages.mjs [--main origin/main] [--batch 8] [--state .review/state.json]
//
// 1. Every content page changed on `main` since state.last_audited_commit
//    (added, modified, or renamed; References only when their frontmatter
//    changed). With no usable baseline (the placeholder, or a commit this
//    clone does not have) nothing counts as changed and only the rotation
//    slice is audited.
// 2. The next `slice` pages of the sorted auditable corpus, from
//    state.rotation.next (the first page at or after it, so pages added or
//    deleted before it do not shift the rotation; state.rotation.cursor, an
//    index, when `next` is absent), wrapping. The slice is at least a third
//    of the corpus, so every page is audited at least once every three rounds.
// 3. Pages a failed audit batch left unaudited last round
//    (state.audit_carry, written by round.mjs record).
//
// The auditable corpus is every .md page in the working tree under
// Reductions, Barriers, Primitives, Assumptions, Complexity, Glossary,
// Folklore, and the root notes (content/*.md).
//
// Output: main (sha audited against), since, baseline, changed, carried, deleted,
// renamed [{from, to}], references_skipped, rotation {corpus, cursor_before,
// cursor_after, next_after, slice, slice_stored, wrapped}, rotation_pages,
// pages (the union, sorted), pages_why [{path, why}], batches [{batch, pages}],
// notes.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

const ROOT_DEFAULT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
  "..",
);

export const CORPUS_DIRS = [
  "Reductions",
  "Barriers",
  "Primitives",
  "Assumptions",
  "Complexity",
  "Glossary",
  "Folklore",
];

const byteOrder = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

export function isCorpusPath(p) {
  if (!p.startsWith("content/") || !p.endsWith(".md")) return false;
  const rest = p.slice("content/".length).split("/");
  if (rest.length === 1) return true; // root note
  return rest.length === 2 && CORPUS_DIRS.includes(rest[0]);
}

const isReference = (p) => /^content\/References\/[^/]+\.md$/.test(p);

export function listCorpus(root) {
  const out = [];
  const content = path.join(root, "content");
  if (!fs.existsSync(content)) return out;
  for (const f of fs.readdirSync(content))
    if (f.endsWith(".md") && fs.statSync(path.join(content, f)).isFile())
      out.push(`content/${f}`);
  for (const d of CORPUS_DIRS) {
    const dir = path.join(content, d);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir))
      if (f.endsWith(".md") && fs.statSync(path.join(dir, f)).isFile())
        out.push(`content/${d}/${f}`);
  }
  return out.sort(byteOrder);
}

export function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text || "");
  if (!m) return null;
  try {
    return yaml.load(m[1]);
  } catch {
    return { __unparsed: m[1] };
  }
}

// `git diff --name-status -M` output → [{status, path, old}]. With `-z` (what
// selectPages runs) fields are NUL-separated and paths are not quoted, so a
// file name with non-ASCII characters or a tab reads back as it is; without
// it, one tab-separated line per file.
export function parseNameStatus(text) {
  const out = [];
  const push = (st, a, b) => {
    const s = st[0];
    if (s === "R" || s === "C") out.push({ status: s, path: b, old: a });
    else out.push({ status: s, path: a, old: a });
  };
  const str = String(text || "");
  if (str.includes("\0")) {
    const f = str.split("\0");
    for (let i = 0; i < f.length; ) {
      const st = f[i++];
      if (!st) continue;
      const a = f[i++];
      const b = st[0] === "R" || st[0] === "C" ? f[i++] : undefined;
      push(st, a, b);
    }
    return out;
  }
  for (const line of str.split("\n")) {
    if (!line.trim()) continue;
    const [st, a, b] = line.split("\t");
    push(st, a, b);
  }
  return out;
}

// corpus: sorted in byte order. rotation.next, when set, is the page the
// slice starts at (or the first page after it, if it is gone); otherwise the
// index rotation.cursor, taken modulo the corpus size.
export function rotationSlice(corpus, rotation = {}) {
  rotation = rotation || {};
  const n = corpus.length;
  const stored = Number(rotation.slice) || 0;
  const slice = n ? Math.min(n, Math.max(stored, Math.ceil(n / 3))) : 0;
  let before = 0;
  if (n && typeof rotation.next === "string" && rotation.next) {
    const i = corpus.findIndex((p) => byteOrder(p, rotation.next) >= 0);
    before = i < 0 ? 0 : i;
  } else if (n)
    before = (((Math.trunc(Number(rotation.cursor)) || 0) % n) + n) % n;
  const pages = [];
  for (let k = 0; k < slice; k++) pages.push(corpus[(before + k) % n]);
  const after = n ? (before + slice) % n : 0;
  return {
    pages,
    rotation: {
      corpus: n,
      cursor_before: before,
      cursor_after: after,
      next_after: n ? corpus[after] : "",
      slice,
      slice_stored: stored,
      wrapped: before + slice > n,
    },
  };
}

export function batches(pages, size = 8) {
  if (!Number.isInteger(size) || size < 1)
    throw new Error(`batch size must be a positive integer, not ${size}`);
  const out = [];
  for (let i = 0; i < pages.length; i += size)
    out.push({
      batch: `b${String(out.length + 1).padStart(2, "0")}`,
      pages: pages.slice(i, i + size),
    });
  return out;
}

export function selectPages({
  root = ROOT_DEFAULT,
  state,
  mainRef = "origin/main",
  batch = 8,
} = {}) {
  const git = (args) =>
    execFileSync("git", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  const tryGit = (args) => {
    try {
      return git(args).trim();
    } catch {
      return null;
    }
  };
  const notes = [];
  let ref = mainRef;
  let main = tryGit(["rev-parse", "--verify", "--quiet", `${ref}^{commit}`]);
  for (const alt of ["origin/main", "main", "HEAD"]) {
    if (main) break;
    notes.push(`${ref} does not resolve; using ${alt}`);
    ref = alt;
    main = tryGit(["rev-parse", "--verify", "--quiet", `${ref}^{commit}`]);
  }
  const since =
    state && state.last_audited_commit ? String(state.last_audited_commit) : "";
  let baseline = "ok";
  let sinceSha = null;
  if (!since || since.startsWith("<")) baseline = "placeholder";
  else {
    sinceSha = tryGit([
      "rev-parse",
      "--verify",
      "--quiet",
      `${since}^{commit}`,
    ]);
    if (!sinceSha) baseline = "unknown-commit";
  }
  if (baseline !== "ok")
    notes.push(
      baseline === "placeholder"
        ? "last_audited_commit is the placeholder: no page counts as changed; auditing the rotation slice only"
        : `last_audited_commit ${since} is not in this clone: auditing the rotation slice only (fetch it, or set it to a commit on main)`,
    );

  const corpus = listCorpus(root);
  const inTree = new Set(corpus);
  const changed = [];
  const deleted = [];
  const renamed = [];
  const referencesSkipped = [];
  if (baseline === "ok" && main) {
    const diff = parseNameStatus(
      git([
        "diff",
        "--name-status",
        "-z",
        "-M",
        sinceSha,
        main,
        "--",
        "content",
      ]),
    );
    for (const d of diff) {
      if (d.status === "D") {
        if (isCorpusPath(d.path)) deleted.push(d.path);
        continue;
      }
      if (d.status === "R" && isCorpusPath(d.old)) {
        // a corpus page renamed out of the corpus is gone from it
        if (isCorpusPath(d.path)) renamed.push({ from: d.old, to: d.path });
        else deleted.push(d.old);
      }
      if (isCorpusPath(d.path)) {
        if (inTree.has(d.path)) changed.push(d.path);
        else
          notes.push(
            `${d.path} changed on main but is not in the working tree (deleted or renamed on this branch); skipped`,
          );
        continue;
      }
      if (isReference(d.path)) {
        if (!fs.existsSync(path.join(root, d.path))) continue;
        const before =
          d.status === "A"
            ? null
            : frontmatter(tryGit(["show", `${sinceSha}:${d.old}`]));
        const after = frontmatter(tryGit(["show", `${main}:${d.path}`]));
        if (JSON.stringify(before) !== JSON.stringify(after))
          changed.push(d.path);
        else referencesSkipped.push(d.path);
      }
    }
  }
  const { pages: rot, rotation } = rotationSlice(
    corpus,
    state && state.rotation,
  );
  // pages a failed audit batch left unaudited last round
  const carried = ((state && state.audit_carry) || []).filter((p) => {
    if (inTree.has(p) || (isReference(p) && fs.existsSync(path.join(root, p))))
      return true;
    notes.push(
      `${p} was carried from the last round but is no longer in the corpus; skipped`,
    );
    return false;
  });
  const why = new Map();
  for (const p of carried) why.set(p, "carried");
  for (const p of changed)
    why.set(p, why.has(p) ? `${why.get(p)}+changed` : "changed");
  for (const p of rot)
    why.set(p, why.has(p) ? `${why.get(p)}+rotation` : "rotation");
  const pages = [...why.keys()].sort(byteOrder);
  return {
    main: main || "",
    main_ref: ref,
    since: sinceSha,
    baseline,
    changed: changed.sort(byteOrder),
    carried: carried.sort(byteOrder),
    deleted: deleted.sort(byteOrder),
    renamed: renamed.sort((a, b) => byteOrder(a.to, b.to)),
    references_skipped: referencesSkipped.sort(byteOrder),
    rotation,
    rotation_pages: rot,
    pages,
    pages_why: pages.map((p) => ({ path: p, why: why.get(p) })),
    batches: batches(pages, batch),
    notes,
  };
}

function main(argv) {
  const arg = (name) => {
    const i = argv.indexOf(`--${name}`);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  const root = arg("root") || ROOT_DEFAULT;
  const stateFile = arg("state") || path.join(root, ".review", "state.json");
  const state = JSON.parse(fs.readFileSync(stateFile, "utf8"));
  const out = selectPages({
    root,
    state,
    mainRef: arg("main") || "origin/main",
    batch: arg("batch") ? Number(arg("batch")) : 8,
  });
  console.log(JSON.stringify(out, null, 1));
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === new URL(import.meta.url).pathname
)
  main(process.argv.slice(2));
