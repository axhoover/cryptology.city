#!/usr/bin/env node
// microcrypt-sync.mjs
//
// Deterministic ingestion of sattath/microcrypt-zoo's `microcrypt.gv` into
// cryptology.city. This script does NOT write prose. It parses the graph,
// applies a human-curated name/citation mapping, diffs against committed
// state, and emits a structured PLAN of *only the new things to add*. A
// prompt-driven bot lane (see .orchestrator/prompts/microcrypt-sync.md) consumes
// the plan and writes the actual Markdown, following CLAUDE.md conventions.
//
// Design goals:
//   * Idempotent. Re-running with no upstream change produces an empty plan.
//   * No duplication. Anything already mapped or already synced is skipped.
//   * Conservative on math. Implications are parsed directionally.
//     Separations are emitted as DIRECTION-UNRESOLVED and flagged for the
//     skeptical-checker, never asserted as a directional claim by this tool.
//
// Usage:
//   node scripts/microcrypt-sync.mjs --gv path/to/microcrypt.gv \
//        --map .orchestrator/microcrypt-map.json \
//        --state .orchestrator/state/microcrypt-sync.json \
//        --content content \
//        [--microcrypt-commit <sha>] [--plan-out plan.json] [--write-state]
//
// Exit code 0 always (an empty plan is not an error); non-zero only on
// malformed input or unreadable files.

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// Argument parsing (tiny, no deps)
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const out = {
    gv: null,
    map: ".orchestrator/microcrypt-map.json",
    state: ".orchestrator/state/microcrypt-sync.json",
    content: "content",
    microcryptCommit: null,
    planOut: null,
    writeState: false,
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i];
    if (a === "--gv") out.gv = next();
    else if (a === "--map") out.map = next();
    else if (a === "--state") out.state = next();
    else if (a === "--content") out.content = next();
    else if (a === "--microcrypt-commit") out.microcryptCommit = next();
    else if (a === "--plan-out") out.planOut = next();
    else if (a === "--write-state") out.writeState = true;
    else throw new Error(`Unknown argument: ${a}`);
  }
  if (!out.gv) throw new Error("--gv <path to microcrypt.gv> is required");
  return out;
}

// ---------------------------------------------------------------------------
// Quote-aware tokenizer for the GraphViz DOT subset used by microcrypt.gv
// ---------------------------------------------------------------------------

// Strip `//` line comments, `/* */` block comments, and `#` preprocessor /
// separator lines (GraphViz discards lines whose first non-blank char is `#`),
// WITHOUT touching `//` that occurs inside a double-quoted string (URLs
// contain `https://`). `atLineStart` tracks whether only whitespace has been
// seen since the last newline, so a `#` mid-token is preserved.
function stripComments(src) {
  let out = "";
  let inStr = false;
  let atLineStart = true;
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    const c2 = src[i + 1];
    if (inStr) {
      out += c;
      if (c === "\\" && c2 !== undefined) {
        out += c2;
        i += 2;
        continue;
      }
      if (c === '"') inStr = false;
      i++;
      continue;
    }
    if (c === '"') {
      inStr = true;
      atLineStart = false;
      out += c;
      i++;
      continue;
    }
    if (atLineStart && c === "#") {
      while (i < src.length && src[i] !== "\n") i++;
      continue; // line dropped; newline handled next iteration
    }
    if (c === "/" && c2 === "/") {
      while (i < src.length && src[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && c2 === "*") {
      i += 2;
      while (i < src.length && !(src[i] === "*" && src[i + 1] === "/")) i++;
      i += 2;
      continue;
    }
    if (c === "\n") atLineStart = true;
    else if (!/\s/.test(c)) atLineStart = false;
    out += c;
    i++;
  }
  return out;
}

// Split a comment-free body into statements. DOT makes the trailing `;`
// optional, so statements are also separated by newlines at bracket-depth 0
// (outside any quoted string). Tooltips in this file keep `\n` as a literal
// two-char escape on a single physical line, so a real newline at depth 0 is
// always a genuine statement boundary here.
function splitStatements(body) {
  const stmts = [];
  let cur = "";
  let inStr = false;
  let depth = 0;
  const flush = () => {
    const t = cur.trim();
    if (t) stmts.push(t);
    cur = "";
  };
  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    if (inStr) {
      cur += c;
      if (c === "\\" && i + 1 < body.length) {
        cur += body[++i];
        continue;
      }
      if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') {
      inStr = true;
      cur += c;
      continue;
    }
    if (c === "[") depth++;
    if (c === "]") depth--;
    if (depth === 0 && (c === ";" || c === "\n")) {
      flush();
      continue;
    }
    if (c === "{" || c === "}") {
      flush();
      continue;
    }
    cur += c;
  }
  flush();
  return stmts;
}

// Parse a `[ key=value key="value" ... ]` attribute list into an object.
function parseAttrs(attrText) {
  const attrs = {};
  let i = 0;
  const s = attrText;
  while (i < s.length) {
    while (i < s.length && /[\s,]/.test(s[i])) i++;
    if (i >= s.length) break;
    let key = "";
    while (i < s.length && /[A-Za-z0-9_]/.test(s[i])) key += s[i++];
    while (i < s.length && /\s/.test(s[i])) i++;
    if (s[i] !== "=") {
      // bare attribute (e.g. `dashed`) — record presence and ensure we
      // always make progress even on an unexpected leading character.
      if (key) attrs[key.toLowerCase()] = true;
      else i++; // no key consumed and no '=': skip the stray char
      continue;
    }
    i++; // consume '='
    while (i < s.length && /\s/.test(s[i])) i++;
    let val = "";
    if (s[i] === '"') {
      i++;
      while (i < s.length && s[i] !== '"') {
        if (s[i] === "\\" && i + 1 < s.length) {
          val += s[i + 1] === "n" ? "\n" : s[i + 1];
          i += 2;
          continue;
        }
        val += s[i++];
      }
      i++; // closing quote
    } else {
      while (i < s.length && !/[\s,]/.test(s[i])) val += s[i++];
    }
    if (key) attrs[key.toLowerCase()] = val;
  }
  return attrs;
}

function unquoteId(tok) {
  tok = tok.trim();
  if (tok.startsWith('"') && tok.endsWith('"')) {
    return tok
      .slice(1, -1)
      .replace(/\\"/g, '"')
      .replace(/\\n/g, "\n")
      .trim();
  }
  return tok;
}

// ---------------------------------------------------------------------------
// Graph model
// ---------------------------------------------------------------------------

function parseGraph(gvSource) {
  const body = stripComments(gvSource);
  const stmts = splitStatements(body);

  const nodes = new Map(); // name -> { tooltip }
  const edges = []; // { src, dst, kind, citeKey, citeTooltip, citeUrl }

  // "current edge attributes" — DOT semantics: an `edge [ ... ]` statement
  // sets defaults for subsequently-declared edges. We track label/tooltip/URL
  // (citation) and whether we are in the dashed/back "separation" region.
  let curCite = { label: "", tooltip: "", url: "" };
  let separationMode = false;

  const edgeStmt = /^(.+?)->(.+?)$/s;

  for (const raw of stmts) {
    const stmt = raw.trim();
    if (!stmt || stmt === "digraph microcrypt" || stmt.startsWith("digraph"))
      continue;

    // `edge [ ... ]` — update current citation / style context.
    const edgeAttrMatch = stmt.match(/^edge\s*\[(.*)\]$/s);
    if (edgeAttrMatch) {
      const a = parseAttrs(edgeAttrMatch[1]);
      if ("label" in a) curCite.label = String(a.label || "");
      if ("tooltip" in a) curCite.tooltip = String(a.tooltip || "");
      if ("url" in a) curCite.url = String(a.url || "");
      if ("style" in a)
        separationMode = String(a.style).includes("dashed") || separationMode;
      if ("dir" in a) separationMode = a.dir === "back" ? true : separationMode;
      // The file never turns separation mode back off; once the dashed/back
      // block starts, every later edge is a separation. If a future revision
      // adds `edge [style=solid dir=forward]`, honor it:
      if (a.style === "solid" || a.dir === "forward") separationMode = false;
      continue;
    }

    // `graph [ ... ]` / `node [ ... ]` defaults — irrelevant to ingestion.
    if (/^(graph|node)\s*\[/.test(stmt)) continue;

    // Edge statement: `A -> B [attrs]`
    if (edgeStmt.test(stmt)) {
      const m = stmt.match(edgeStmt);
      let lhs = m[1].trim();
      let rhsFull = m[2].trim();

      // optional inline attribute list on the edge itself
      let inlineAttrs = {};
      const inlineMatch = rhsFull.match(/^(.*?)\s*\[(.*)\]\s*$/s);
      if (inlineMatch) {
        rhsFull = inlineMatch[1].trim();
        inlineAttrs = parseAttrs(inlineMatch[2]);
      }
      const src = unquoteId(lhs);
      const dst = unquoteId(rhsFull);

      const citeKey = String(inlineAttrs.label ?? curCite.label ?? "").trim();
      const citeTooltip = String(
        inlineAttrs.tooltip ?? curCite.tooltip ?? "",
      ).trim();
      const citeUrl = String(inlineAttrs.url ?? curCite.url ?? "").trim();

      edges.push({
        src,
        dst,
        kind: separationMode ? "separation" : "implication",
        citeKey,
        citeTooltip,
        citeUrl,
      });
      if (!nodes.has(src)) nodes.set(src, { tooltip: "" });
      if (!nodes.has(dst)) nodes.set(dst, { tooltip: "" });
      continue;
    }

    // Node declaration: `IDENT [attrs]` (no `->`)
    const nodeMatch = stmt.match(/^("(?:[^"\\]|\\.)*"|[^\s\[]+)\s*\[(.*)\]$/s);
    if (nodeMatch) {
      const name = unquoteId(nodeMatch[1]);
      const a = parseAttrs(nodeMatch[2]);
      const prev = nodes.get(name) || { tooltip: "" };
      if (a.tooltip) prev.tooltip = String(a.tooltip).trim();
      nodes.set(name, prev);
      continue;
    }
    // Bare node reference, no attrs — ensure it exists.
    const bare = unquoteId(stmt);
    if (bare && !/[\[\]]/.test(bare) && !nodes.has(bare))
      nodes.set(bare, { tooltip: "" });
  }

  return { nodes, edges };
}

// ---------------------------------------------------------------------------
// Citation tooltip -> structured reference
// ---------------------------------------------------------------------------

function parseCitation(key, tooltip, url) {
  // Tooltips look like: "Authors.\n Title.\n Venue. "
  const parts = tooltip
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const authors = (parts[0] || "").replace(/\.$/, "").trim();
  const title = (parts[1] || "").replace(/\.$/, "").trim();
  const venue = (parts[2] || "").replace(/\.$/, "").trim();
  return { key, authors, title, venue, url: canonicalizeUrl(url) };
}

// Normalize to the canonical forms CLAUDE.md requires.
function canonicalizeUrl(u) {
  if (!u) return "";
  u = u.trim();
  let m;
  if ((m = u.match(/eprint\.iacr\.org\/(\d{4})\/(\d+)/)))
    return `https://eprint.iacr.org/${m[1]}/${m[2]}`;
  if ((m = u.match(/arxiv\.org\/(?:abs|pdf)\/([0-9.]+)/)))
    return `https://arxiv.org/abs/${m[1].replace(/\.pdf$/, "")}`;
  if ((m = u.match(/doi\.org\/(.+)$/))) return `https://doi.org/${m[1]}`;
  if ((m = u.match(/dx\.doi\.org\/(.+)$/))) return `https://doi.org/${m[1]}`;
  return u; // dagstuhl / springer / eccc etc. — leave as-is, bot will note.
}

// ---------------------------------------------------------------------------
// Mapping + state + dedup
// ---------------------------------------------------------------------------

function readJson(path, fallback) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

// Stable identity for an edge so re-runs don't re-propose it.
function edgeHash(e) {
  return createHash("sha256")
    .update(`${e.kind}|${e.src}=>${e.dst}|${e.citeKey}`)
    .digest("hex")
    .slice(0, 16);
}

// Scan committed Markdown so we never duplicate a bullet a human already
// wrote by hand. For each bullet line inside a "# Other results" section we
// record the endpoint-slug pair together with BOTH forms of the citation
// identifier that can appear in `[[ref-slug|CITEKEY]]` — the short display
// key and the long reference-page slug — so the diff side matches whichever
// form it has.
function indexExistingResults(contentDir) {
  const found = new Set(); // `${slugA}|${slugB}|${citeToken}` (slugs sorted)
  const dirs = ["Primitives", "Assumptions", "Complexity"];
  for (const d of dirs) {
    const full = join(contentDir, d);
    if (!existsSync(full)) continue;
    for (const f of readdirSync(full)) {
      if (!f.endsWith(".md")) continue;
      const text = readFileSync(join(full, f), "utf8");
      const idx = text.search(/^#+\s*Other results/im);
      if (idx === -1) continue;
      const section = text.slice(idx);
      // Capture target and optional display: [[target|display]] or [[target]]
      const re = /\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]/g;
      for (const line of section.split("\n")) {
        if (!line.trim().startsWith("-")) continue;
        const links = [];
        let mm;
        while ((mm = re.exec(line)))
          links.push({
            target: mm[1].trim().toLowerCase(),
            display: (mm[2] || "").trim().toLowerCase(),
          });
        re.lastIndex = 0;
        if (links.length < 2) continue;
        // Heuristic: the last wikilink on a result bullet is the citation;
        // the rest are primitive/assumption endpoints.
        const cite = links[links.length - 1];
        const citeTokens = new Set(
          [cite.target, cite.display].filter(Boolean),
        );
        const endpoints = links.slice(0, -1).map((l) => l.target);
        for (let i = 0; i < endpoints.length; i++) {
          for (let j = i + 1; j < endpoints.length; j++) {
            const pair = [endpoints[i], endpoints[j]].sort();
            for (const tok of citeTokens)
              found.add(`${pair[0]}|${pair[1]}|${tok}`);
          }
        }
      }
    }
  }
  return found;
}

function main() {
  const args = parseArgs(process.argv);
  const gvSource = readFileSync(args.gv, "utf8");
  const { nodes, edges } = parseGraph(gvSource);

  const map = readJson(args.map, { nodes: {}, citations: {}, config: {} });
  map.nodes ||= {};
  map.citations ||= {};
  map.config ||= {};
  const autostub = map.config.autostub_new_primitives === true;

  const state = readJson(args.state, {
    microcrypt_commit: null,
    microcrypt_gv_sha256: null,
    synced_edges: {},
    last_run: null,
  });
  state.synced_edges ||= {};

  const gvHash = createHash("sha256").update(gvSource).digest("hex");

  const existingResults = indexExistingResults(args.content);

  // ---- Resolve node -> slug ------------------------------------------------
  function resolveNode(name) {
    const e = map.nodes[name];
    if (!e) return { name, status: "unmapped", slug: null };
    return { name, status: e.status || "unmapped", slug: e.slug || null };
  }

  const plan = {
    generated_at: new Date().toISOString(),
    microcrypt_commit: args.microcryptCommit || null,
    microcrypt_gv_sha256: gvHash,
    upstream_changed: state.microcrypt_gv_sha256 !== gvHash,
    new_references: [],
    new_primitive_stubs: [],
    new_implications: [],
    flagged_separations: [],
    unmapped_nodes: [],
    unmapped_citations: [],
    notes: [],
  };

  // ---- Unmapped nodes (need human curation before they create pages) ------
  for (const [name, meta] of nodes) {
    const r = resolveNode(name);
    if (r.status === "unmapped") {
      plan.unmapped_nodes.push({
        source_name: name,
        tooltip: meta.tooltip || "",
        suggestion:
          "Add to .orchestrator/microcrypt-map.json with status 'mapped' (point at " +
          "an existing slug) or 'new' (create a stub) or 'ignore'.",
      });
    } else if (r.status === "new" && autostub) {
      plan.new_primitive_stubs.push({
        source_name: name,
        slug: r.slug,
        intro_seed: meta.tooltip || "",
      });
    }
  }

  // ---- Citations -> reference stubs ---------------------------------------
  const seenKeys = new Set();
  for (const e of edges) {
    if (!e.citeKey || seenKeys.has(e.citeKey)) continue;
    seenKeys.add(e.citeKey);
    const cm = map.citations[e.citeKey];
    if (!cm) {
      plan.unmapped_citations.push({
        source_key: e.citeKey,
        parsed: parseCitation(e.citeKey, e.citeTooltip, e.citeUrl),
        suggestion:
          "Add to microcrypt-map.json citations{} with the cryptology.city " +
          "citation key and reference page slug, or status 'new'.",
      });
      continue;
    }
    if ((cm.status || "new") === "new" && !cm.ref_exists) {
      plan.new_references.push({
        source_key: e.citeKey,
        city_key: cm.key || e.citeKey,
        ref_slug:
          cm.ref_slug ||
          `${cm.key || e.citeKey} - ${parseCitation(e.citeKey, e.citeTooltip, e.citeUrl).title}`,
        cryptobib_key: cm.cryptobib_key || null,
        ...parseCitation(e.citeKey, e.citeTooltip, e.citeUrl),
      });
    }
  }

  // ---- Edges -> implication bullets / flagged separations -----------------
  for (const e of edges) {
    const h = edgeHash(e);
    if (state.synced_edges[h]) continue; // already applied in a prior run

    const s = resolveNode(e.src);
    const d = resolveNode(e.dst);
    const cm = map.citations[e.citeKey];
    const cityKey = cm ? cm.key || e.citeKey : e.citeKey;
    const refSlug = cm
      ? cm.ref_slug ||
        `${cityKey} - ${parseCitation(e.citeKey, e.citeTooltip, e.citeUrl).title}`
      : null;

    // Skip if either endpoint isn't resolvable to a page yet — it'll come
    // back next run once the human maps it (no silent duplicates).
    if (!s.slug || !d.slug || s.status === "ignore" || d.status === "ignore") {
      plan.notes.push(
        `Deferred ${e.kind} ${e.src}->${e.dst} [${e.citeKey}]: ` +
          `endpoint not yet mapped to a slug.`,
      );
      continue;
    }

    if (e.kind === "implication") {
      const pair = [s.slug.toLowerCase(), d.slug.toLowerCase()].sort();
      const tokens = [
        (cityKey || "").toLowerCase(),
        (refSlug || "").toLowerCase(),
      ].filter(Boolean);
      const already = tokens.some((tok) =>
        existingResults.has(`${pair[0]}|${pair[1]}|${tok}`),
      );
      if (already) {
        // A human (or earlier pass) already wrote this bullet.
        state.synced_edges[h] = {
          ...e,
          applied: "preexisting",
          at: plan.generated_at,
        };
        continue;
      }
      plan.new_implications.push({
        hash: h,
        // CLAUDE.md "Other results" format. Bullet goes on the *target*
        // primitive's page (the thing being constructed).
        target_page_slug: d.slug,
        bullet:
          `- [[${s.slug}|${e.src}]] implies [[${d.slug}|${e.dst}]]` +
          (cityKey ? ` — [[${refSlug}|${cityKey}]]` : " — *citation TODO*"),
        src_slug: s.slug,
        dst_slug: d.slug,
        cite_key: cityKey,
        ref_slug: refSlug,
      });
    } else {
      // SEPARATION. The .gv encodes "B cannot be constructed from A" with a
      // dir="back" hack; the on-page direction is exactly the kind of claim
      // the skeptical-checker exists to verify. This tool refuses to assert
      // a direction. It emits both endpoints + the paper and forces review.
      plan.flagged_separations.push({
        hash: h,
        endpoint_a_slug: s.slug,
        endpoint_a: e.src,
        endpoint_b_slug: d.slug,
        endpoint_b: e.dst,
        cite_key: cityKey,
        ref_slug: refSlug,
        paper_url: parseCitation(e.citeKey, e.citeTooltip, e.citeUrl).url,
        instruction:
          "Direction UNRESOLVED. Read the cited paper, phrase the " +
          "separation precisely, set the .fact-check queue entry to " +
          "'bot_flagged', and add a TODO_SUMMARY.md line for human review.",
      });
    }
  }

  // ---- Emit ---------------------------------------------------------------
  const json = JSON.stringify(plan, null, 2);
  if (args.planOut) writeFileSync(args.planOut, json + "\n");
  else process.stdout.write(json + "\n");

  if (args.writeState) {
    // Mark only implications the bot is expected to apply this run; the bot
    // confirms application by re-invoking with --write-state after editing,
    // OR the orchestrator commits state once the PR lands. Here we record
    // preexisting/skipped edges immediately (safe) and leave actionable
    // edges for post-apply confirmation.
    state.microcrypt_commit = args.microcryptCommit || state.microcrypt_commit;
    state.microcrypt_gv_sha256 = gvHash;
    state.last_run = plan.generated_at;
    writeFileSync(args.state, JSON.stringify(state, null, 2) + "\n");
  }

  const total =
    plan.new_references.length +
    plan.new_primitive_stubs.length +
    plan.new_implications.length +
    plan.flagged_separations.length;
  process.stderr.write(
    `microcrypt-sync: ${total} actionable item(s); ` +
      `${plan.unmapped_nodes.length} unmapped node(s), ` +
      `${plan.unmapped_citations.length} unmapped citation(s).\n`,
  );
}

try {
  main();
} catch (err) {
  process.stderr.write(`microcrypt-sync FAILED: ${err.stack || err}\n`);
  process.exit(2);
}
