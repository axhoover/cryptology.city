// Pragmatic BibTeX parser tailored to cryptobib's machine-generated `crypto.bib`
// and `abbrev*.bib` files. Not a general-purpose BibTeX parser — assumes
// well-formed input as produced by cryptobib's `gen.py`.

export type BibFields = Record<string, string>;

export type BibEntry = {
  type: string;
  key: string;
  fields: BibFields;
};

export type BibDatabase = {
  strings: Map<string, string>;
  entries: Map<string, BibEntry>;
};

const newDatabase = (): BibDatabase => ({
  strings: new Map(),
  entries: new Map(),
});

// Walk the input character by character, skipping comments and whitespace,
// and collect `@string{...}` and `@Type{key, ...}` blocks.
export function parseBib(text: string, into?: BibDatabase): BibDatabase {
  const db = into ?? newDatabase();
  const len = text.length;
  let i = 0;

  while (i < len) {
    const ch = text[i];
    if (ch === "%") {
      // line comment
      while (i < len && text[i] !== "\n") i++;
      continue;
    }
    if (ch === "@") {
      const blockStart = i;
      i++;
      const typeStart = i;
      while (i < len && /[A-Za-z]/.test(text[i])) i++;
      const type = text.slice(typeStart, i).toLowerCase();
      // skip whitespace
      while (i < len && /\s/.test(text[i])) i++;
      if (text[i] !== "{" && text[i] !== "(") {
        // malformed; advance and continue
        continue;
      }
      const opener = text[i];
      const closer = opener === "{" ? "}" : ")";
      i++; // past opener
      const bodyStart = i;
      const bodyEnd = findMatchingClose(text, i, opener, closer);
      if (bodyEnd === -1) break;
      const body = text.slice(bodyStart, bodyEnd);
      i = bodyEnd + 1;
      if (type === "string") {
        parseStringBlock(body, db.strings);
      } else if (type === "comment" || type === "preamble") {
        // ignore
      } else {
        const entry = parseEntryBlock(type, body, db.strings);
        if (entry) db.entries.set(entry.key, entry);
      }
      void blockStart;
      continue;
    }
    i++;
  }

  return db;
}

// Returns the index of the matching closer, accounting for nested `{...}`
// and "..." string boundaries inside.
function findMatchingClose(
  text: string,
  start: number,
  opener: string,
  closer: string,
): number {
  let i = start;
  const len = text.length;
  while (i < len) {
    const ch = text[i];
    if (ch === "\\" && i + 1 < len) {
      i += 2;
      continue;
    }
    if (ch === '"') {
      // skip quoted string, respecting brace depth inside (BibTeX allows {..} inside "..")
      i++;
      while (i < len) {
        if (text[i] === "\\" && i + 1 < len) {
          i += 2;
          continue;
        }
        if (text[i] === "{") {
          const inner = findMatchingClose(text, i + 1, "{", "}");
          if (inner === -1) return -1;
          i = inner + 1;
          continue;
        }
        if (text[i] === '"') {
          i++;
          break;
        }
        i++;
      }
      continue;
    }
    if (ch === opener || ch === "{") {
      const inner = findMatchingClose(text, i + 1, "{", "}");
      if (inner === -1) return -1;
      i = inner + 1;
      continue;
    }
    if (ch === closer) return i;
    i++;
  }
  return -1;
}

// `key = value` (single pair). value is stored expanded.
function parseStringBlock(body: string, strings: Map<string, string>) {
  const eq = body.indexOf("=");
  if (eq === -1) return;
  const key = body.slice(0, eq).trim().toLowerCase();
  const valueText = body
    .slice(eq + 1)
    .trim()
    .replace(/,$/, "");
  const value = parseFieldValue(valueText, strings);
  if (key) strings.set(key, value);
}

function parseEntryBlock(
  type: string,
  body: string,
  strings: Map<string, string>,
): BibEntry | null {
  // First token (up to first comma at top level) is the citation key.
  const commaIdx = findTopLevelComma(body, 0);
  if (commaIdx === -1) return null;
  const key = body.slice(0, commaIdx).trim();
  if (!key) return null;
  const fields: BibFields = {};
  let i = commaIdx + 1;
  const len = body.length;
  while (i < len) {
    while (i < len && /[\s,]/.test(body[i])) i++;
    if (i >= len) break;
    const nameStart = i;
    while (i < len && /[A-Za-z0-9_:-]/.test(body[i])) i++;
    const fieldName = body.slice(nameStart, i).toLowerCase();
    while (i < len && /\s/.test(body[i])) i++;
    if (body[i] !== "=") {
      // unparseable trailing junk; skip rest
      break;
    }
    i++; // past =
    while (i < len && /\s/.test(body[i])) i++;
    const valueEnd = findTopLevelComma(body, i);
    const valueText = body.slice(i, valueEnd === -1 ? len : valueEnd).trim();
    if (fieldName) fields[fieldName] = parseFieldValue(valueText, strings);
    if (valueEnd === -1) break;
    i = valueEnd + 1;
  }
  return { type, key, fields };
}

function findTopLevelComma(text: string, start: number): number {
  let i = start;
  const len = text.length;
  while (i < len) {
    const ch = text[i];
    if (ch === "\\" && i + 1 < len) {
      i += 2;
      continue;
    }
    if (ch === "{") {
      const close = findMatchingClose(text, i + 1, "{", "}");
      if (close === -1) return -1;
      i = close + 1;
      continue;
    }
    if (ch === '"') {
      i++;
      while (i < len) {
        if (text[i] === "\\" && i + 1 < len) {
          i += 2;
          continue;
        }
        if (text[i] === "{") {
          const close = findMatchingClose(text, i + 1, "{", "}");
          if (close === -1) return -1;
          i = close + 1;
          continue;
        }
        if (text[i] === '"') {
          i++;
          break;
        }
        i++;
      }
      continue;
    }
    if (ch === ",") return i;
    i++;
  }
  return -1;
}

// Parse a field value (possibly with `#` concatenation and `@string` macros)
// into a single string. Strips outer quotes/braces from each segment.
function parseFieldValue(text: string, strings: Map<string, string>): string {
  const segments: string[] = [];
  let i = 0;
  const len = text.length;
  while (i < len) {
    while (i < len && /\s/.test(text[i])) i++;
    if (i >= len) break;
    const ch = text[i];
    if (ch === '"') {
      i++;
      let buf = "";
      while (i < len) {
        if (text[i] === "\\" && i + 1 < len) {
          buf += text[i] + text[i + 1];
          i += 2;
          continue;
        }
        if (text[i] === "{") {
          const close = findMatchingClose(text, i + 1, "{", "}");
          if (close === -1) {
            buf += text.slice(i);
            i = len;
            break;
          }
          buf += text.slice(i, close + 1);
          i = close + 1;
          continue;
        }
        if (text[i] === '"') {
          i++;
          break;
        }
        buf += text[i];
        i++;
      }
      segments.push(buf);
    } else if (ch === "{") {
      const close = findMatchingClose(text, i + 1, "{", "}");
      if (close === -1) {
        segments.push(text.slice(i + 1));
        i = len;
      } else {
        segments.push(text.slice(i + 1, close));
        i = close + 1;
      }
    } else if (/[0-9]/.test(ch)) {
      const start = i;
      while (i < len && /[0-9]/.test(text[i])) i++;
      segments.push(text.slice(start, i));
    } else if (/[A-Za-z_]/.test(ch)) {
      const start = i;
      while (i < len && /[A-Za-z0-9_]/.test(text[i])) i++;
      const name = text.slice(start, i).toLowerCase();
      const expanded = strings.get(name);
      segments.push(expanded ?? name);
    } else {
      // skip stray punctuation (typically `#`)
      i++;
    }
  }
  return segments.join("");
}

// Render an entry as a self-contained BibTeX block, suitable for paste into
// a user's .bib file. All `@string` macros are already expanded.
export function formatBibtex(entry: BibEntry): string {
  const fieldOrder = [
    "author",
    "title",
    "pages",
    "editor",
    "booktitle",
    "journal",
    "volume",
    "number",
    "series",
    "address",
    "month",
    "publisher",
    "year",
    "doi",
    "url",
    "note",
    "howpublished",
    "school",
    "institution",
  ];
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const name of fieldOrder) {
    if (entry.fields[name] !== undefined) {
      ordered.push(name);
      seen.add(name);
    }
  }
  for (const name of Object.keys(entry.fields)) {
    if (!seen.has(name)) ordered.push(name);
  }
  const lines = [`@${capitalize(entry.type)}{${entry.key},`];
  for (const name of ordered) {
    const value = entry.fields[name]
      .replace(/\s+/g, " ")
      .trim()
      .replace(/,$/, "");
    lines.push(`  ${name} = {${value}},`);
  }
  lines.push("}");
  return lines.join("\n");
}

function capitalize(s: string): string {
  if (!s) return s;
  return s[0].toUpperCase() + s.slice(1);
}

// Strip BibTeX brace-protection from a title (e.g., "{Weil} Pairing" -> "Weil Pairing")
// for display/comparison purposes only; never used in the copyable BibTeX.
export function stripBibBraces(s: string): string {
  return s.replace(/\\([&%$#_{}~^])/g, "$1").replace(/[{}]/g, "");
}

// Normalize for fuzzy comparison: lowercase, remove punctuation, collapse whitespace.
export function normalizeForCompare(s: string): string {
  return stripBibBraces(s)
    .toLowerCase()
    .replace(/[\p{P}\p{S}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Convert a BibTeX author field ("First Last and First Last and ...") into a
// comma-separated "First Last, First Last" string for comparison with
// frontmatter authors.
export function normalizeAuthors(bibtexAuthor: string): string {
  return bibtexAuthor
    .split(/\s+and\s+/)
    .map((a) => stripBibBraces(a).replace(/\s+/g, " ").trim())
    .map((a) => {
      // "Last, First" -> "First Last"
      const parts = a.split(",");
      if (parts.length === 2) {
        return `${parts[1].trim()} ${parts[0].trim()}`;
      }
      return a;
    })
    .join(", ");
}
