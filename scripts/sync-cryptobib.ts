#!/usr/bin/env tsx
// Validate `content/References/*.md` against the vendored cryptobib database.
//
// For each page with a `cryptobib_key`, compares the H1 title, `authors`,
// `published` year and `venue` with the cryptobib entry. TeX accents and math
// are decoded and diacritics stripped on both sides; `venue` is checked
// against the series and year the key prefix encodes (C: is CRYPTO, FOCS: is
// FOCS); confirmed upstream errors are listed in UPSTREAM_ERRORS below.
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
  keyYear,
  normalizeAuthors,
  normalizeForCompare,
  venueMatchesKey,
  venueMatchesName,
} from "../quartz/util/cryptobib";
import { customMacros } from "../macros";

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
  content: string;
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
    const { data, content } = matter(raw);
    out.push({ filePath, data, content });
  }
  return out;
}

function relPath(p: string): string {
  return path.relative(REPO_ROOT, p);
}

function getYear(data: Record<string, any>): string | undefined {
  const v = data.published ?? data["publish date"] ?? data.publishDate;
  if (v === undefined || v === null) return undefined;
  // gray-matter parses `published: 2025-01-01` as a UTC Date; String() would
  // render it in the local timezone (2024 west of UTC).
  if (v instanceof Date) return String(v.getUTCFullYear());
  const s = String(v);
  const m = s.match(/(\d{4})/);
  return m?.[1];
}

type DriftField = "title" | "authors" | "year" | "venue";

type Drift = {
  field: DriftField;
  local: string;
  cryptobib: string;
};

// Confirmed errors in the cryptobib entry itself. A drift on `field` whose
// cryptobib value equals `cryptobib` is not reported; once upstream fixes the
// entry the value changes, the drift (if any) shows again, and the report
// lists the allowlist entry as stale. (Venue is derived from the key prefix,
// so it has no upstream errors to allow.)
const UPSTREAM_ERRORS: {
  key: string;
  field: Exclude<DriftField, "venue">;
  cryptobib: string;
  why: string;
}[] = [
  {
    key: "EC:BarPfi97",
    field: "authors",
    cryptobib: "Niko Bari, Birgit Pfitzmann",
    why: "cryptobib drops the final ć of Barić",
  },
  {
    key: "FOCS:Watrous02",
    field: "title",
    cryptobib: "imits on the Power of Quantum Statistical Zero-Knowledge",
    why: "cryptobib drops the leading L of the title",
  },
  {
    key: "FOCS:AhaReg04",
    field: "title",
    cryptobib: "Lattice Problems in {NP} cap {coNP}",
    why: "cryptobib spells the ∩ of the title as the word cap",
  },
  {
    key: "ISTCS:OstWig93",
    field: "title",
    cryptobib: "One-Way Fuctions are Essential for Non-Trivial Zero-Knowledge",
    why: "cryptobib misspells Functions",
  },
];

function isUpstreamError(key: string, d: Drift): boolean {
  return UPSTREAM_ERRORS.some(
    (u) => u.key === key && u.field === d.field && u.cryptobib === d.cryptobib,
  );
}

// Site macros (\classP, \secpar, ...) with no arguments, longest name first,
// so an H1 like "$\poly(\mathrm{depth}, \secpar)$" reads as cryptobib's
// "$\textsf{poly}(\text{depth},\lambda)$".
const MACROS = Object.entries(customMacros)
  .filter(([, v]) => !v.includes("#"))
  .sort(([a], [b]) => b.length - a.length);

function expandSiteMacros(s: string): string {
  let out = s;
  for (let pass = 0; pass < 3; pass++) {
    let changed = false;
    for (const [name, body] of MACROS) {
      const re = new RegExp(
        name.replace(/[\\$^]/g, (ch) => "\\" + ch) + "(?![A-Za-z])",
        "g",
      );
      const next = out.replace(re, () => body);
      if (next !== out) {
        changed = true;
        out = next;
      }
    }
    if (!changed) break;
  }
  return out;
}

// The paper title as the page states it: the H1 "# [KEY] Title". Filenames
// are live URLs and never renamed, so a corrected title only reaches the H1.
// Falls back to the filename ("KEY - Title.md") for a page without an H1.
function localTitle(page: RefPage): string {
  const h1 = page.content.match(/^#[ \t]+(.+?)[ \t]*$/m)?.[1];
  if (h1) return expandSiteMacros(h1.replace(/^\[[^\]]*\][ \t]*/, ""));
  return path
    .basename(page.filePath, ".md")
    .split(" - ")
    .slice(1)
    .join(" - ")
    .trim();
}

// Same authors, in the same order, comparing each name by its first given
// name and surname: "Matthew Franklin" = "Matthew K. Franklin", but
// "Eyal Petrank" != "Erez Petrank". The local value must be in house form
// ("First Last, First Last"), so "Last, First; ..." lists and a serial
// "and" still show as drift.
function sameAuthors(local: string, cb: string): boolean {
  if (normalizeForCompare(local) === normalizeForCompare(cb)) return true;
  const ends = (name: string) => {
    const w = normalizeForCompare(name).split(" ");
    return `${w[0]} ${w[w.length - 1]}`;
  };
  const a = local.split(",").map(ends);
  const b = cb.split(",").map(ends);
  return a.length === b.length && a.every((x, i) => x === b[i]);
}

function compareEntry(page: RefPage, key: string, entry: BibEntry): Drift[] {
  const drifts: Drift[] = [];
  const title = localTitle(page);
  const cbTitle = entry.fields.title ?? "";
  // Compare titles on letters/digits only (after decoding TeX and stripping
  // diacritics), ignoring an "(extended abstract)" or "(invited talk)"
  // annotation on the cryptobib side.
  const squash = (s: string) =>
    normalizeForCompare(s)
      .replace(/[^a-z0-9]/gi, "")
      .replace(/(extendedabstract|invitedtalk|invitedpaper)$/i, "");
  if (title && cbTitle && squash(title) !== squash(cbTitle)) {
    drifts.push({ field: "title", local: title, cryptobib: cbTitle });
  }

  const localAuthors = String(page.data.authors ?? "").trim();
  const cbAuthors = entry.fields.author
    ? normalizeAuthors(entry.fields.author)
    : "";
  if (localAuthors && cbAuthors && !sameAuthors(localAuthors, cbAuthors)) {
    drifts.push({
      field: "authors",
      local: localAuthors,
      cryptobib: cbAuthors,
    });
  }

  // cryptobib's `year` is the publication year, which for older LNCS volumes
  // trails the conference year in the key (CRYPTO '87 appeared in 1988);
  // either one matches.
  const localYear = getYear(page.data);
  const cbYear = entry.fields.year;
  if (
    localYear &&
    cbYear &&
    localYear !== cbYear &&
    localYear !== keyYear(key)
  ) {
    drifts.push({ field: "year", local: localYear, cryptobib: cbYear });
  }

  // Venue: by the series acronym and year the key prefix encodes; for keys
  // without a known prefix, against the entry's booktitle/journal.
  const localVenue = String(page.data.venue ?? "").trim();
  if (localVenue) {
    const byKey = venueMatchesKey(localVenue, key);
    if (byKey) {
      if (!byKey.matches) {
        drifts.push({
          field: "venue",
          local: localVenue,
          cryptobib: byKey.expected,
        });
      }
    } else {
      const cbVenue = entry.fields.booktitle ?? entry.fields.journal ?? "";
      if (cbVenue && !venueMatchesName(localVenue, cbVenue)) {
        drifts.push({ field: "venue", local: localVenue, cryptobib: cbVenue });
      }
    }
  }

  return drifts.filter((d) => !isUpstreamError(key, d));
}

// Allowlist entries whose cryptobib value no longer matches the database:
// upstream fixed (or changed) the entry, so the entry can go.
function staleUpstreamErrors(db: BibDatabase): string[] {
  const stale: string[] = [];
  for (const u of UPSTREAM_ERRORS) {
    const entry = db.entries.get(u.key);
    const value = !entry
      ? undefined
      : u.field === "authors"
        ? entry.fields.author && normalizeAuthors(entry.fields.author)
        : entry.fields[u.field];
    if (value !== u.cryptobib) stale.push(`${u.key} ${u.field} (${u.why})`);
  }
  return stale;
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
      const drifts = compareEntry(page, cryptobibKey, entry);
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

  const stale = staleUpstreamErrors(db);
  if (stale.length) {
    console.log(
      yellow(
        `⚠ ${stale.length} UPSTREAM_ERRORS entr(ies) no longer match cryptobib ` +
          `(fixed upstream? remove from scripts/sync-cryptobib.ts):`,
      ),
    );
    for (const s of stale) console.log(`    ${s}`);
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
    !stale.length &&
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
    const drifts = compareEntry(page, key, entry);
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
