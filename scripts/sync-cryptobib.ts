#!/usr/bin/env tsx
// Validate `content/References/*.md` against the vendored cryptobib database.
//
// Usage:
//   npm run sync-cryptobib            # check mode (default)
//   npm run sync-cryptobib check      # explicit
//   npm run sync-cryptobib rewrite    # stub: would auto-update frontmatter

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  BibDatabase,
  BibEntry,
  parseBib,
  normalizeAuthors,
  normalizeForCompare,
} from "../quartz/util/cryptobib";

const REPO_ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
);
const REFS_DIR = path.join(REPO_ROOT, "content", "References");
const CRYPTOBIB_DIR = path.join(REPO_ROOT, "vendor", "cryptobib");

const COLOR = process.stdout.isTTY;
const c = (code: string, s: string) => (COLOR ? `\x1b[${code}m${s}\x1b[0m` : s);
const red = (s: string) => c("31", s);
const yellow = (s: string) => c("33", s);
const dim = (s: string) => c("2", s);
const bold = (s: string) => c("1", s);

type RefPage = {
  filePath: string;
  data: Record<string, any>;
};

function loadDb(): BibDatabase {
  const abbrevPath = path.join(CRYPTOBIB_DIR, "abbrev0.bib");
  const cryptoPath = path.join(CRYPTOBIB_DIR, "crypto.bib");
  if (!fs.existsSync(cryptoPath)) {
    console.error(
      red(
        `crypto.bib not found at ${cryptoPath}. ` +
          `Run \`git submodule update --init --recursive\` first.`,
      ),
    );
    process.exit(2);
  }
  const db = fs.existsSync(abbrevPath)
    ? parseBib(fs.readFileSync(abbrevPath, "utf8"))
    : undefined;
  return parseBib(fs.readFileSync(cryptoPath, "utf8"), db);
}

function loadRefPages(): RefPage[] {
  const out: RefPage[] = [];
  for (const name of fs.readdirSync(REFS_DIR)) {
    if (!name.endsWith(".md")) continue;
    const filePath = path.join(REFS_DIR, name);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    out.push({ filePath, data });
  }
  return out;
}

function relPath(p: string): string {
  return path.relative(REPO_ROOT, p);
}

function getYear(data: Record<string, any>): string | undefined {
  const v = data.published ?? data["publish date"] ?? data.publishDate;
  if (v === undefined || v === null) return undefined;
  const s = String(v);
  const m = s.match(/(\d{4})/);
  return m?.[1];
}

type Drift = {
  field: "title" | "authors" | "year" | "venue";
  local: string;
  cryptobib: string;
};

function compareEntry(page: RefPage, entry: BibEntry): Drift[] {
  const drifts: Drift[] = [];
  const localTitle = String(page.data.title ?? "").trim();
  const cbTitle = entry.fields.title ?? "";
  if (
    localTitle &&
    cbTitle &&
    normalizeForCompare(localTitle) !== normalizeForCompare(cbTitle)
  ) {
    drifts.push({ field: "title", local: localTitle, cryptobib: cbTitle });
  }

  const localAuthors = String(page.data.authors ?? "").trim();
  const cbAuthors = entry.fields.author
    ? normalizeAuthors(entry.fields.author)
    : "";
  if (
    localAuthors &&
    cbAuthors &&
    normalizeForCompare(localAuthors) !== normalizeForCompare(cbAuthors)
  ) {
    drifts.push({
      field: "authors",
      local: localAuthors,
      cryptobib: cbAuthors,
    });
  }

  const localYear = getYear(page.data);
  const cbYear = entry.fields.year;
  if (localYear && cbYear && localYear !== cbYear) {
    drifts.push({ field: "year", local: localYear, cryptobib: cbYear });
  }

  const localVenue = String(page.data.venue ?? "").trim();
  const cbVenue = entry.fields.booktitle ?? entry.fields.journal ?? "";
  if (
    localVenue &&
    cbVenue &&
    !normalizeForCompare(cbVenue).includes(normalizeForCompare(localVenue)) &&
    !normalizeForCompare(localVenue).includes(normalizeForCompare(cbVenue))
  ) {
    drifts.push({ field: "venue", local: localVenue, cryptobib: cbVenue });
  }

  return drifts;
}

function checkMode() {
  const db = loadDb();
  const pages = loadRefPages();

  let withKey = 0;
  let withInline = 0;
  let neither = 0;
  const missingInDb: RefPage[] = [];
  const driftReports: { page: RefPage; drifts: Drift[] }[] = [];
  const fieldNameInconsistencies: RefPage[] = [];
  const bothFields: RefPage[] = [];

  for (const page of pages) {
    const cryptobibKey: string | undefined =
      page.data.cryptobib_key ?? page.data.cryptobibKey;
    const inlineBibtex: string | undefined = page.data.bibtex;
    if (cryptobibKey && inlineBibtex) bothFields.push(page);

    if (cryptobibKey) {
      withKey++;
      const entry = db.entries.get(cryptobibKey);
      if (!entry) {
        missingInDb.push(page);
        continue;
      }
      const drifts = compareEntry(page, entry);
      if (drifts.length > 0) driftReports.push({ page, drifts });
    } else if (inlineBibtex) {
      withInline++;
    } else {
      neither++;
    }

    if (
      page.data.URL !== undefined ||
      page.data["publish date"] !== undefined
    ) {
      fieldNameInconsistencies.push(page);
    }
  }

  console.log(bold("Cryptobib sync report"));
  console.log(
    `  ${pages.length} reference pages — ${withKey} with cryptobib_key, ` +
      `${withInline} with inline bibtex, ${neither} with neither.`,
  );
  console.log(`  cryptobib database: ${db.entries.size} entries.`);
  console.log();

  if (missingInDb.length) {
    console.log(
      red(`✗ ${missingInDb.length} cryptobib_key(s) not in cryptobib:`),
    );
    for (const p of missingInDb) {
      console.log(
        `    ${relPath(p.filePath)}  ${dim("→")} key=${p.data.cryptobib_key}`,
      );
    }
    console.log();
  }

  if (driftReports.length) {
    console.log(
      yellow(`⚠ ${driftReports.length} page(s) drift from cryptobib:`),
    );
    for (const { page, drifts } of driftReports) {
      console.log(`    ${relPath(page.filePath)}`);
      for (const d of drifts) {
        console.log(
          `      ${d.field}:  local=${JSON.stringify(d.local)}  ` +
            `cryptobib=${JSON.stringify(d.cryptobib)}`,
        );
      }
    }
    console.log();
  }

  if (bothFields.length) {
    console.log(
      yellow(
        `⚠ ${bothFields.length} page(s) have both cryptobib_key and bibtex (cryptobib_key wins):`,
      ),
    );
    for (const p of bothFields) console.log(`    ${relPath(p.filePath)}`);
    console.log();
  }

  if (fieldNameInconsistencies.length) {
    console.log(
      dim(
        `i ${fieldNameInconsistencies.length} page(s) use legacy frontmatter field names ` +
          `(URL→source, publish date→published):`,
      ),
    );
    for (const p of fieldNameInconsistencies.slice(0, 10)) {
      console.log(`    ${relPath(p.filePath)}`);
    }
    if (fieldNameInconsistencies.length > 10) {
      console.log(`    ... and ${fieldNameInconsistencies.length - 10} more`);
    }
    console.log();
  }

  if (
    !missingInDb.length &&
    !driftReports.length &&
    !bothFields.length &&
    !fieldNameInconsistencies.length
  ) {
    console.log("All checks passed.");
  }

  process.exit(missingInDb.length > 0 ? 1 : 0);
}

function rewriteMode() {
  const db = loadDb();
  const pages = loadRefPages();
  let candidates = 0;
  for (const page of pages) {
    const key: string | undefined =
      page.data.cryptobib_key ?? page.data.cryptobibKey;
    if (!key) continue;
    const entry = db.entries.get(key);
    if (!entry) continue;
    const drifts = compareEntry(page, entry);
    if (drifts.length > 0) candidates++;
  }
  console.log(
    yellow(
      `rewrite mode: not yet implemented — would update ${candidates} page(s) ` +
        `from cryptobib. Run \`npm run sync-cryptobib check\` for the drift report.`,
    ),
  );
  // TODO(rewrite): for each drifting page:
  //   - re-read the file as text (preserve markdown body)
  //   - merge cryptobib values into the YAML frontmatter (title, authors, venue,
  //     published year)
  //   - write it back, leaving the body untouched
  // The compareEntry() output already gives us the field-by-field diff to apply.
  process.exit(0);
}

const mode = process.argv[2] ?? "check";
if (mode === "check") checkMode();
else if (mode === "rewrite") rewriteMode();
else {
  console.error(`unknown mode: ${mode} (expected: check | rewrite)`);
  process.exit(2);
}
