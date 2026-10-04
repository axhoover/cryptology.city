import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  selectPages,
  rotationSlice,
  parseNameStatus,
  batches,
  isCorpusPath,
  frontmatter,
  // @ts-ignore — plain ESM helper, scripts/review/select-pages.mjs
} from "../scripts/review/select-pages.mjs";

const PLACEHOLDER = "<set when this branch merges to main>";

function repo() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "select-pages-"));
  const git = (...args: string[]) =>
    execFileSync("git", args, { cwd: dir, encoding: "utf8" }).trim();
  git("init", "-q");
  git("config", "user.email", "test@example.com");
  git("config", "user.name", "test");
  git("config", "commit.gpgsign", "false");
  git("checkout", "-q", "-b", "main");
  const write = (rel: string, text: string) => {
    fs.mkdirSync(path.dirname(path.join(dir, rel)), { recursive: true });
    fs.writeFileSync(path.join(dir, rel), text);
  };
  const commit = (msg: string) => {
    git("add", "-A");
    git("commit", "-q", "-m", msg);
    return git("rev-parse", "HEAD");
  };
  return { dir, git, write, commit };
}

const page = (title: string, body = "Body.") =>
  `---\ntype: reduction\nstatus: draft\ntitle: ${title}\naliases: []\n---\n\n# ${title}\n\n${body}\n`;
const ref = (key: string, venue: string, body = "TODO — abstract.") =>
  `---\ntype: reference\nstatus: stub\ntitle: "${key}"\nvenue: ${venue}\naliases: [${key}]\n---\n\n# [${key}] Title\n\n## Abstract\n\n${body}\n`;

function fixture() {
  const r = repo();
  r.write("content/index.md", page("Home"));
  r.write("content/Reductions/a-to-b.md", page("A ⇒ B"));
  r.write("content/Reductions/c-to-d.md", page("C ⇒ D"));
  r.write(
    "content/Reductions/old-name.md",
    page(
      "Old",
      "A long enough body so the rename is detected as a rename by git.",
    ),
  );
  r.write("content/Reductions/gone.md", "x\n".repeat(40));
  r.write("content/Primitives/prf.md", page("PRF"));
  r.write("content/References/AB20 - One.md", ref("AB20", "CRYPTO"));
  r.write("content/References/CD21 - Two.md", ref("CD21", "EUROCRYPT"));
  r.write("content/Templates/Reduction.md", page("Template"));
  r.write("content/Files/x.png", "png");
  const base = r.commit("base");
  r.write("content/Reductions/a-to-b.md", page("A ⇒ B", "Changed body."));
  r.write("content/Primitives/prg.md", page("PRG"));
  r.git(
    "mv",
    "content/Reductions/old-name.md",
    "content/Reductions/new-name.md",
  );
  r.git("rm", "-q", "content/Reductions/gone.md");
  r.write(
    "content/References/AB20 - One.md",
    ref("AB20", "CRYPTO", "A new abstract."),
  );
  r.write("content/References/CD21 - Two.md", ref("CD21", "EUROCRYPT 2021"));
  r.write("content/References/EF22 - Three.md", ref("EF22", "TCC"));
  r.write("content/Templates/Reduction.md", page("Template", "Changed."));
  const head = r.commit("changes");
  return { ...r, base, head };
}

test("corpus paths: the auditable directories and root notes only", () => {
  assert.ok(isCorpusPath("content/Reductions/x.md"));
  assert.ok(isCorpusPath("content/index.md"));
  assert.ok(isCorpusPath("content/Folklore/x.md"));
  assert.ok(!isCorpusPath("content/References/X - Y.md"));
  assert.ok(!isCorpusPath("content/Templates/Reduction.md"));
  assert.ok(!isCorpusPath("content/Files/x.png"));
  assert.ok(!isCorpusPath("scripts/lint.mjs"));
});

test("name-status lines: renames and copies keep both paths", () => {
  assert.deepEqual(
    parseNameStatus(
      "M\tcontent/a.md\nR087\tcontent/b.md\tcontent/c.md\nD\tcontent/d.md\n",
    ),
    [
      { status: "M", path: "content/a.md", old: "content/a.md" },
      { status: "R", path: "content/c.md", old: "content/b.md" },
      { status: "D", path: "content/d.md", old: "content/d.md" },
    ],
  );
});

test("name-status -z output: NUL-separated, paths unquoted", () => {
  assert.deepEqual(
    parseNameStatus(
      "M\0content/References/AB20 - Gödel.md\0R087\0content/b.md\0content/c\td.md\0D\0content/d.md\0",
    ),
    [
      {
        status: "M",
        path: "content/References/AB20 - Gödel.md",
        old: "content/References/AB20 - Gödel.md",
      },
      { status: "R", path: "content/c\td.md", old: "content/b.md" },
      { status: "D", path: "content/d.md", old: "content/d.md" },
    ],
  );
});

test("frontmatter is parsed, and a page without it has none", () => {
  assert.deepEqual(frontmatter("---\ntitle: x\n---\nbody"), { title: "x" });
  assert.equal(frontmatter("# no frontmatter"), null);
});

test("the rotation wraps, and the slice covers the corpus in three rounds", () => {
  const corpus = Array.from({ length: 10 }, (_, i) => `p${i}`);
  const r = rotationSlice(corpus, { cursor: 8, slice: 4 });
  assert.deepEqual(r.pages, ["p8", "p9", "p0", "p1"]);
  assert.equal(r.rotation.cursor_after, 2);
  assert.equal(r.rotation.wrapped, true);
  // a stored slice too small for three-round coverage is raised to ceil(n/3)
  const small = rotationSlice(corpus, { cursor: 0, slice: 1 });
  assert.equal(small.rotation.slice, 4);
  assert.equal(small.rotation.slice_stored, 1);
  // a cursor past the end (the corpus shrank) is taken modulo its size
  assert.equal(
    rotationSlice(corpus, { cursor: 23, slice: 4 }).rotation.cursor_before,
    3,
  );
  // never more than the corpus
  assert.equal(
    rotationSlice(corpus, { cursor: 0, slice: 50 }).pages.length,
    10,
  );
  // three consecutive rounds see every page
  let cursor = 0;
  const seen = new Set();
  for (let k = 0; k < 3; k++) {
    const s = rotationSlice(corpus, { cursor, slice: 0 });
    s.pages.forEach((p: string) => seen.add(p));
    cursor = s.rotation.cursor_after;
  }
  assert.equal(seen.size, 10);
  assert.deepEqual(rotationSlice([], { cursor: 3, slice: 5 }).pages, []);
});

test("the rotation starts at the stored page, so additions and deletions before it do not shift it", () => {
  const corpus = ["a", "b", "c", "d", "e", "f"];
  const first = rotationSlice(corpus, { cursor: 0, slice: 2 });
  assert.deepEqual(first.pages, ["a", "b"]);
  assert.equal(first.rotation.next_after, "c");
  // "a" is deleted and "0" added: the index 2 would now point at "d" (or "b")
  const later = ["0", "b", "c", "d", "e", "f"];
  const next = { cursor: 2, slice: 2, next: "c" };
  assert.deepEqual(rotationSlice(later, next).pages, ["c", "d"]);
  // the stored page itself was deleted: start at the first page after it
  assert.deepEqual(rotationSlice(["a", "b", "d", "e", "f"], next).pages, [
    "d",
    "e",
  ]);
  // every page after it was deleted: wrap to the start
  const tail = rotationSlice(["a", "b"], { cursor: 5, slice: 1, next: "z" });
  assert.deepEqual(tail.pages, ["a"]);
  assert.equal(tail.rotation.cursor_before, 0);
  // wrapping past the end hands the next round the right page
  const wrap = rotationSlice(corpus, { slice: 2, next: "e" });
  assert.deepEqual(wrap.pages, ["e", "f"]);
  assert.equal(wrap.rotation.wrapped, false);
  assert.equal(wrap.rotation.next_after, "a");
  const over = rotationSlice(corpus, { slice: 3, next: "e" });
  assert.deepEqual(over.pages, ["e", "f", "a"]);
  assert.equal(over.rotation.wrapped, true);
  assert.equal(over.rotation.next_after, "b");
  assert.equal(rotationSlice([], { next: "a" }).rotation.next_after, "");
  // a missing rotation reads as cursor 0
  assert.deepEqual(rotationSlice(corpus, null).pages, ["a", "b"]);
});

test("batches keep order and size", () => {
  const b = batches(["a", "b", "c", "d", "e"], 2);
  assert.deepEqual(b, [
    { batch: "b01", pages: ["a", "b"] },
    { batch: "b02", pages: ["c", "d"] },
    { batch: "b03", pages: ["e"] },
  ]);
  assert.deepEqual(batches([], 8), []);
  assert.throws(() => batches(["a"], 0), /positive integer/);
  assert.throws(() => batches(["a"], Number("x")), /positive integer/);
});

test("changed pages: modified, added, renamed; references only on a frontmatter change", () => {
  const r = fixture();
  const out = selectPages({
    root: r.dir,
    state: { last_audited_commit: r.base, rotation: { cursor: 0, slice: 0 } },
    mainRef: "main",
  });
  assert.equal(out.baseline, "ok");
  assert.equal(out.main, r.head);
  assert.deepEqual(out.changed, [
    "content/Primitives/prg.md",
    "content/Reductions/a-to-b.md",
    "content/Reductions/new-name.md",
    "content/References/CD21 - Two.md",
    "content/References/EF22 - Three.md",
  ]);
  assert.deepEqual(out.references_skipped, [
    "content/References/AB20 - One.md",
  ]);
  assert.deepEqual(out.deleted, ["content/Reductions/gone.md"]);
  assert.deepEqual(out.renamed, [
    {
      from: "content/Reductions/old-name.md",
      to: "content/Reductions/new-name.md",
    },
  ]);
  // the corpus: index, 3 reductions, 2 primitives (references and templates excluded)
  assert.equal(out.rotation.corpus, 6);
  assert.equal(out.rotation.slice, 2);
  assert.ok(
    out.pages.every((p: string) => !p.startsWith("content/Templates/")),
  );
  const why = Object.fromEntries(
    out.pages_why.map((w: { path: string; why: string }) => [w.path, w.why]),
  );
  // byte order puts content/Primitives/ first, so the slice of 2 is prf, prg
  assert.equal(why["content/Reductions/a-to-b.md"], "changed");
  assert.equal(why["content/Primitives/prf.md"], "rotation");
  assert.equal(why["content/Primitives/prg.md"], "changed+rotation");
  assert.equal(why["content/index.md"], undefined);
  assert.equal(out.pages.length, 6);
  assert.deepEqual(
    out.batches.flatMap((b: { pages: string[] }) => b.pages),
    out.pages,
  );
});

test("a page both changed and in the slice is listed once", () => {
  const r = fixture();
  // sorted corpus: Primitives/prf, Primitives/prg, Reductions/a-to-b, …
  const out = selectPages({
    root: r.dir,
    state: { last_audited_commit: r.base, rotation: { cursor: 1, slice: 2 } },
    mainRef: "main",
  });
  assert.deepEqual(out.rotation_pages, [
    "content/Primitives/prg.md",
    "content/Reductions/a-to-b.md",
  ]);
  const why = Object.fromEntries(
    out.pages_why.map((w: { path: string; why: string }) => [w.path, w.why]),
  );
  assert.equal(why["content/Reductions/a-to-b.md"], "changed+rotation");
  assert.equal(new Set(out.pages).size, out.pages.length);
});

test("the placeholder baseline audits the rotation slice only", () => {
  const r = fixture();
  const out = selectPages({
    root: r.dir,
    state: {
      last_audited_commit: PLACEHOLDER,
      rotation: { cursor: 5, slice: 2 },
    },
    mainRef: "main",
  });
  assert.equal(out.baseline, "placeholder");
  assert.equal(out.since, null);
  assert.deepEqual(out.changed, []);
  assert.deepEqual(out.pages, [
    "content/Primitives/prf.md",
    "content/index.md",
  ]);
  assert.equal(out.rotation.cursor_after, 1);
  assert.match(out.notes.join(" "), /rotation slice only/);
});

test("an unknown baseline commit and a missing main ref fall back with a note", () => {
  const r = fixture();
  const out = selectPages({
    root: r.dir,
    state: {
      last_audited_commit: "0123456789abcdef0123456789abcdef01234567",
      rotation: { cursor: 0, slice: 1 },
    },
    mainRef: "origin/main",
  });
  assert.equal(out.baseline, "unknown-commit");
  assert.deepEqual(out.changed, []);
  assert.equal(out.main_ref, "main");
  assert.equal(out.main, r.head);
  assert.match(out.notes.join(" "), /origin\/main does not resolve/);
});

test("a page changed on main but deleted on the working branch is skipped", () => {
  const r = fixture();
  fs.rmSync(path.join(r.dir, "content/Reductions/a-to-b.md"));
  const out = selectPages({
    root: r.dir,
    state: { last_audited_commit: r.base, rotation: { cursor: 0, slice: 0 } },
    mainRef: "main",
  });
  assert.ok(!out.changed.includes("content/Reductions/a-to-b.md"));
  assert.match(
    out.notes.join(" "),
    /a-to-b\.md changed on main but is not in the working tree/,
  );
});

test("pages a failed audit batch left are carried into the next selection", () => {
  const r = fixture();
  const out = selectPages({
    root: r.dir,
    state: {
      last_audited_commit: PLACEHOLDER,
      rotation: { cursor: 0, slice: 2 },
      audit_carry: [
        "content/Reductions/c-to-d.md",
        "content/Reductions/gone.md",
      ],
    },
    mainRef: "main",
  });
  assert.deepEqual(out.carried, ["content/Reductions/c-to-d.md"]);
  assert.ok(out.pages.includes("content/Reductions/c-to-d.md"));
  const why = Object.fromEntries(
    out.pages_why.map((w: { path: string; why: string }) => [w.path, w.why]),
  );
  assert.equal(why["content/Reductions/c-to-d.md"], "carried");
  assert.match(
    out.notes.join(" "),
    /gone\.md was carried from the last round but is no longer in the corpus/,
  );
});

test("a reference with a non-ASCII name, and a page renamed out of the corpus", () => {
  const r = fixture();
  r.write("content/References/GH23 - Gödel.md", ref("GH23", "STOC"));
  r.write(
    "content/Reductions/to-template.md",
    page("Moving", "A long enough body so the rename is detected by git."),
  );
  const base = r.commit("more");
  r.write("content/References/GH23 - Gödel.md", ref("GH23", "STOC 2023"));
  r.git(
    "mv",
    "content/Reductions/to-template.md",
    "content/Templates/to-template.md",
  );
  r.commit("rename out");
  const out = selectPages({
    root: r.dir,
    state: { last_audited_commit: base, rotation: { cursor: 0, slice: 0 } },
    mainRef: "main",
  });
  assert.deepEqual(out.changed, ["content/References/GH23 - Gödel.md"]);
  assert.deepEqual(out.deleted, ["content/Reductions/to-template.md"]);
  assert.deepEqual(out.renamed, []);
  assert.ok(!out.pages.includes("content/Templates/to-template.md"));
});
