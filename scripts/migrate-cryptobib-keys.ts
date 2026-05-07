#!/usr/bin/env tsx
// One-shot migration: scan content/References/*.md, fuzzy-match each title
// against the vendored cryptobib database, and inject `cryptobib_key:` into
// the frontmatter of confident matches. Pages with `cryptobib_key` already
// set are skipped.
//
// Usage:
//   npm run migrate-cryptobib-keys              # dry run, prints summary
//   npm run migrate-cryptobib-keys -- --apply   # actually writes to files

import fs from "node:fs";
import path from "node:path";
import {
  BibDatabase,
  BibEntry,
  parseBib,
  normalizeForCompare,
} from "../quartz/util/cryptobib";

const REPO_ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
);
const REFS_DIR = path.join(REPO_ROOT, "content", "References");
const CRYPTOBIB_DIR = path.join(REPO_ROOT, "vendor", "cryptobib");

const APPLY = process.argv.includes("--apply");

function loadDb(): BibDatabase {
  const abbrev = path.join(CRYPTOBIB_DIR, "abbrev0.bib");
  const main = path.join(CRYPTOBIB_DIR, "crypto.bib");
  const db = fs.existsSync(abbrev)
    ? parseBib(fs.readFileSync(abbrev, "utf8"))
    : undefined;
  return parseBib(fs.readFileSync(main, "utf8"), db);
}

// Build an index from normalized title -> list of cryptobib entries.
function indexByTitle(db: BibDatabase): Map<string, BibEntry[]> {
  const idx = new Map<string, BibEntry[]>();
  for (const entry of db.entries.values()) {
    const t = entry.fields.title;
    if (!t) continue;
    const norm = normalizeForCompare(t);
    if (!norm) continue;
    const bucket = idx.get(norm) ?? [];
    bucket.push(entry);
    idx.set(norm, bucket);
  }
  return idx;
}

// Quality ranking for cryptobib entries: prefer peer-reviewed conferences and
// journals over EPRINT (which is the cryptobib bucket for unpublished
// preprints). Within ties, prefer entries with full bibliographic detail.
function venuePriority(entry: BibEntry): number {
  const key = entry.key;
  if (key.startsWith("EPRINT:")) return 0;
  if (entry.type === "techreport" || entry.type === "misc") return 1;
  if (entry.type === "phdthesis" || entry.type === "mastersthesis") return 2;
  if (entry.type === "article") return 4; // journal
  if (entry.type === "inproceedings") return 5; // conference
  if (entry.type === "incollection" || entry.type === "book") return 3;
  return 1;
}

function pickBest(entries: BibEntry[]): BibEntry {
  return entries.slice().sort((a, b) => {
    const pa = venuePriority(a);
    const pb = venuePriority(b);
    if (pa !== pb) return pb - pa;
    // Among same priority, prefer entries with `pages` (a sign of full
    // publication metadata).
    const ap = a.fields.pages ? 1 : 0;
    const bp = b.fields.pages ? 1 : 0;
    if (ap !== bp) return bp - ap;
    // Tiebreak: most recent year wins (more likely the canonical version).
    const ya = parseInt(a.fields.year ?? "0", 10);
    const yb = parseInt(b.fields.year ?? "0", 10);
    return yb - ya;
  })[0];
}

// Extract the "real" title from a reference filename like
// "Wat09 - Dual System Encryption Realizing Fully Secure IBE.md".
// Returns the part after the first " - ", with .md stripped.
function titleFromFilename(filename: string): string {
  const base = filename.replace(/\.md$/, "");
  const idx = base.indexOf(" - ");
  return idx >= 0 ? base.slice(idx + 3) : base;
}

// Read a markdown file and split into (frontmatterText, body). Returns null
// if the file has no YAML frontmatter.
function splitFrontmatter(
  content: string,
): { fm: string; body: string; rawHeader: string; rawFooter: string } | null {
  const m = content.match(/^(---\r?\n)([\s\S]*?)(\r?\n---\r?\n)/);
  if (!m) return null;
  return {
    rawHeader: m[1],
    fm: m[2],
    rawFooter: m[3],
    body: content.slice(m[0].length),
  };
}

function frontmatterHas(fm: string, key: string): boolean {
  const re = new RegExp(`^${key}\\s*:`, "m");
  return re.test(fm);
}

function injectCryptobibKey(fm: string, key: string): string {
  // Append at the end of the frontmatter block. Keep a trailing newline so
  // the closing --- stays on its own line.
  const trimmed = fm.replace(/\s+$/, "");
  return `${trimmed}\ncryptobib_key: ${key}\n`;
}

type MatchResult =
  | { status: "skip-has-key"; file: string }
  | {
      status: "matched";
      file: string;
      key: string;
      entry: BibEntry;
      alternates: BibEntry[];
    }
  | { status: "no-match"; file: string; title: string };

function migrate(): MatchResult[] {
  const db = loadDb();
  const idx = indexByTitle(db);

  const results: MatchResult[] = [];
  for (const filename of fs.readdirSync(REFS_DIR).sort()) {
    if (!filename.endsWith(".md")) continue;
    const filePath = path.join(REFS_DIR, filename);
    const content = fs.readFileSync(filePath, "utf8");
    const split = splitFrontmatter(content);
    if (!split) {
      results.push({ status: "no-match", file: filename, title: filename });
      continue;
    }
    if (frontmatterHas(split.fm, "cryptobib_key")) {
      results.push({ status: "skip-has-key", file: filename });
      continue;
    }
    const title = titleFromFilename(filename);
    const norm = normalizeForCompare(title);
    const candidates = idx.get(norm) ?? [];

    if (candidates.length === 0) {
      results.push({ status: "no-match", file: filename, title });
      continue;
    }

    // If we have multiple candidates, pick the highest-priority one (prefer
    // published venues over EPRINT). Surface alternates so the user can
    // sanity-check.
    const best = pickBest(candidates);
    const alternates = candidates.filter((c) => c.key !== best.key);
    results.push({
      status: "matched",
      file: filename,
      key: best.key,
      entry: best,
      alternates,
    });

    if (APPLY) {
      const newFm = injectCryptobibKey(split.fm, best.key);
      const out = `${split.rawHeader}${newFm.replace(/\n$/, "")}${split.rawFooter}${split.body}`;
      fs.writeFileSync(filePath, out);
    }
  }
  return results;
}

function main() {
  const results = migrate();
  const matched = results.filter((r) => r.status === "matched") as Extract<
    MatchResult,
    { status: "matched" }
  >[];
  const noMatch = results.filter((r) => r.status === "no-match");
  const skipped = results.filter((r) => r.status === "skip-has-key");
  const withAlternates = matched.filter((r) => r.alternates.length > 0);

  console.log(`\nMigration summary (${APPLY ? "APPLY" : "DRY RUN"}):`);
  console.log(`  ${results.length} reference pages scanned`);
  console.log(`  ${skipped.length} skipped (already have cryptobib_key)`);
  console.log(`  ${matched.length} matched`);
  console.log(
    `  (${withAlternates.length} of those had multiple candidates; picked the published venue when possible)`,
  );
  console.log(`  ${noMatch.length} no match\n`);

  if (matched.length) {
    console.log("MATCHED:");
    for (const r of matched) {
      const venueHint =
        r.entry.fields.booktitle ?? r.entry.fields.journal ?? r.entry.type;
      console.log(`  ${r.file}`);
      console.log(`    -> ${r.key}  (${venueHint})`);
      for (const alt of r.alternates) {
        console.log(`       alt: ${alt.key}`);
      }
    }
    console.log();
  }

  if (noMatch.length) {
    console.log("NO MATCH (consider adding inline `bibtex:` block manually):");
    for (const r of noMatch as Extract<MatchResult, { status: "no-match" }>[]) {
      console.log(`  ${r.file}`);
    }
    console.log();
  }

  if (!APPLY) {
    console.log("Dry run only. Re-run with `-- --apply` to write changes.");
  }
}

main();
