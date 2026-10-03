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

// Combining marks for the TeX accent commands. Symbol accents (\'e) take their
// argument directly; letter-named accents (\c c, \v{z}) need a non-letter after
// the command name. \tilde, \hat, \bar are the math-mode spellings.
const SYMBOL_ACCENTS: Record<string, string> = {
  "`": "\u0300",
  "'": "\u0301",
  "^": "\u0302",
  "~": "\u0303",
  "=": "\u0304",
  ".": "\u0307",
  '"': "\u0308",
};
const WORD_ACCENTS: Record<string, string> = {
  u: "\u0306",
  r: "\u030A",
  H: "\u030B",
  v: "\u030C",
  d: "\u0323",
  textcommabelow: "\u0326",
  c: "\u0327",
  k: "\u0328",
  b: "\u0331",
  tilde: "\u0303",
  widetilde: "\u0303",
  hat: "\u0302",
  widehat: "\u0302",
  bar: "\u0304",
  dot: "\u0307",
  ddot: "\u0308",
};
// Letters TeX spells as control words (\aa, \o, \ss, ...).
const TEX_LETTERS: Record<string, string> = {
  aa: "å",
  AA: "Å",
  ae: "æ",
  AE: "Æ",
  oe: "œ",
  OE: "Œ",
  o: "ø",
  O: "Ø",
  ss: "ß",
  l: "ł",
  L: "Ł",
  i: "ı",
  j: "ȷ",
};
// Math and text symbols that a reference page may write as the Unicode
// character itself (e.g. "NP ∩ coNP" for "{NP} $\cap$ {coNP}").
const TEX_SYMBOLS: Record<string, string> = {
  cap: "∩",
  cup: "∪",
  neq: "≠",
  ne: "≠",
  leq: "≤",
  le: "≤",
  geq: "≥",
  ge: "≥",
  times: "×",
  texttimes: "×",
  cdot: "·",
  infty: "∞",
  to: "→",
  rightarrow: "→",
  leftarrow: "←",
  pm: "±",
  star: "⋆",
  ast: "∗",
  in: "∈",
  notin: "∉",
  subset: "⊂",
  subseteq: "⊆",
  equiv: "≡",
  approx: "≈",
  sim: "∼",
  oplus: "⊕",
  otimes: "⊗",
  sqrt: "√",
  langle: "⟨",
  rangle: "⟩",
  ell: "ℓ",
  emptyset: "∅",
  forall: "∀",
  exists: "∃",
  neg: "¬",
  wedge: "∧",
  vee: "∨",
  ldots: "…",
  dots: "…",
  cdots: "⋯",
  textendash: "–",
  textemdash: "—",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  varepsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  pi: "π",
  rho: "ρ",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  varphi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  Gamma: "Γ",
  Delta: "Δ",
  Theta: "Θ",
  Lambda: "Λ",
  Xi: "Ξ",
  Pi: "Π",
  Sigma: "Σ",
  varSigma: "Σ",
  Upsilon: "Υ",
  Phi: "Φ",
  Psi: "Ψ",
  Omega: "Ω",
};
// Font and box commands: dropped, their argument kept.
const TEX_FORMATTING = new Set([
  "mathsf",
  "mathrm",
  "mathbf",
  "mathit",
  "mathcal",
  "mathbb",
  "mathfrak",
  "mathtt",
  "mathscr",
  "text",
  "textsf",
  "textrm",
  "textbf",
  "textit",
  "texttt",
  "textsc",
  "textup",
  "textnormal",
  "textsuperscript",
  "textsubscript",
  "emph",
  "mbox",
  "hbox",
  "operatorname",
  "boldsymbol",
  "bm",
  "ensuremath",
]);
const TEX_SPACING = new Set(["quad", "qquad"]);

// The accent argument: one letter, optionally braced, or a dotless \i / \j
// (which TeX uses under accents and Unicode spells as a plain i / j).
const ACCENT_ARG = String.raw`(?:\{\s*(\\[ij](?![A-Za-z])|[A-Za-z])\s*\}|(\\[ij](?![A-Za-z])|[A-Za-z]))`;
const SYMBOL_ACCENT_RE = new RegExp(
  String.raw`\\([\x60'^~=."])\s*` + ACCENT_ARG,
  "g",
);
const WORD_ACCENT_RE = new RegExp(
  String.raw`\\(${Object.keys(WORD_ACCENTS).join("|")})(?![A-Za-z])\s*` +
    ACCENT_ARG,
  "g",
);
const TEX_LETTER_RE = new RegExp(
  String.raw`\\(${Object.keys(TEX_LETTERS)
    .sort((a, b) => b.length - a.length)
    .join("|")})(?![A-Za-z])\s*`,
  "g",
);

function applyAccent(mark: string, braced?: string, bare?: string): string {
  const arg = braced ?? bare ?? "";
  const base = arg === "\\i" ? "i" : arg === "\\j" ? "j" : arg;
  return (base + mark).normalize("NFC");
}

// Decode TeX accents, special letters and common math symbols to Unicode, so
// "Stehl{\'e}", "Damg{\aa}rd" and "{NP} $\cap$ {coNP}" read as "Stehlé",
// "Damgård" and "NP ∩ coNP". Braces, `$` and escaped punctuation are left for
// stripBibBraces / normalizeForCompare; unknown commands are left as is.
export function decodeBibTeX(s: string): string {
  return s
    .replace(/\\\\/g, " ")
    .replace(
      SYMBOL_ACCENT_RE,
      (_m, acc: string, braced?: string, bare?: string) =>
        applyAccent(SYMBOL_ACCENTS[acc], braced, bare),
    )
    .replace(
      WORD_ACCENT_RE,
      (_m, acc: string, braced?: string, bare?: string) =>
        applyAccent(WORD_ACCENTS[acc], braced, bare),
    )
    .replace(TEX_LETTER_RE, (_m, name: string) => TEX_LETTERS[name])
    .replace(/\\([A-Za-z]+)(\s*)/g, (m, name: string, space: string) => {
      if (Object.hasOwn(TEX_SYMBOLS, name)) return TEX_SYMBOLS[name] + space;
      if (TEX_FORMATTING.has(name)) return "";
      if (TEX_SPACING.has(name)) return " ";
      return m;
    })
    .replace(/\\[,;: ]/g, " ")
    .replace(/\\[!/-]/g, "");
}

// Letters that Unicode decomposition leaves alone but that a reader treats as
// a base letter with a diacritic (ø = o, ł = l, ß = ss, ...).
const FOLD_LETTERS: Record<string, string> = {
  ø: "o",
  Ø: "O",
  ł: "l",
  Ł: "L",
  ß: "ss",
  æ: "ae",
  Æ: "AE",
  œ: "oe",
  Œ: "OE",
  ı: "i",
  ȷ: "j",
  đ: "d",
  Đ: "D",
  ð: "d",
  Ð: "D",
  þ: "th",
  Þ: "Th",
};

// Strip diacritics: compatibility-decompose (NFKD, which also maps "²" to
// "2" and "ℓ" to "l"), drop combining marks, then fold the letters above.
export function foldDiacritics(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .replace(/[øØłŁßæÆœŒıȷđĐðÐþÞ]/g, (ch) => FOLD_LETTERS[ch]);
}

// Normalize for fuzzy comparison: decode TeX, strip braces and diacritics,
// lowercase, remove punctuation, collapse whitespace. Both sides of a
// comparison go through this, so "Stehlé" and "Stehl\'e" compare equal.
export function normalizeForCompare(s: string): string {
  return foldDiacritics(stripBibBraces(decodeBibTeX(s)))
    .toLowerCase()
    .replace(/[\p{P}\p{S}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Convert a BibTeX author field ("First Last and First Last and ...") into a
// comma-separated "First Last, First Last" string for comparison with
// frontmatter authors. TeX accents are decoded ("H{\aa}stad" -> "Håstad").
export function normalizeAuthors(bibtexAuthor: string): string {
  return bibtexAuthor
    .split(/\s+and\s+/)
    .map((a) => stripBibBraces(decodeBibTeX(a)).replace(/\s+/g, " ").trim())
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

// Venue series that cryptobib encodes in the key prefix ("C:BonFra01" is
// CRYPTO 2001, "FOCS:AhaReg04" is FOCS 2004). `aliases` are word sequences,
// in normalizeForCompare form, that a reference page's `venue` may use for
// the series. EPRINT is deliberately absent: an ePrint key on a page whose
// `venue` names the published version is a choice, not drift.
export const KEY_PREFIX_VENUES: Record<
  string,
  { name: string; aliases: string[] }
> = {
  C: { name: "CRYPTO", aliases: ["crypto"] },
  EC: { name: "EUROCRYPT", aliases: ["eurocrypt"] },
  AC: { name: "ASIACRYPT", aliases: ["asiacrypt"] },
  TCC: { name: "TCC", aliases: ["tcc", "theory of cryptography"] },
  PKC: { name: "PKC", aliases: ["pkc", "public key cryptography"] },
  STOC: {
    name: "STOC",
    aliases: ["stoc", "symposium on theory of computing"],
  },
  FOCS: {
    name: "FOCS",
    aliases: ["focs", "foundations of computer science"],
  },
  ITCS: {
    name: "ITCS",
    aliases: ["itcs", "innovations in theoretical computer science"],
  },
  ICALP: {
    name: "ICALP",
    aliases: ["icalp", "automata languages and programming"],
  },
  JACM: {
    name: "Journal of the ACM",
    aliases: ["journal of the acm", "jacm", "j acm"],
  },
  JC: {
    name: "Journal of Cryptology",
    aliases: ["journal of cryptology", "j cryptology", "j cryptol", "joc"],
  },
  CCS: {
    name: "ACM CCS",
    aliases: ["ccs", "computer and communications security"],
  },
  SP: {
    name: "IEEE S&P",
    aliases: ["s p", "security and privacy", "oakland"],
  },
  EUROSP: {
    name: "IEEE EuroS&P",
    aliases: ["euros p", "european symposium on security and privacy"],
  },
  USENIX: { name: "USENIX Security", aliases: ["usenix"] },
  CHES: {
    name: "CHES",
    aliases: ["ches", "cryptographic hardware and embedded systems"],
  },
  TCHES: {
    name: "TCHES",
    aliases: [
      "tches",
      "transactions on cryptographic hardware and embedded systems",
    ],
  },
  FSE: { name: "FSE", aliases: ["fse", "fast software encryption"] },
  CiC: { name: "IACR CiC", aliases: ["cic", "communications in cryptology"] },
  PQCRYPTO: {
    name: "PQCrypto",
    aliases: ["pqcrypto", "post quantum cryptography"],
  },
  RSA: { name: "CT-RSA", aliases: ["ct rsa"] },
  PROVSEC: { name: "ProvSec", aliases: ["provsec", "provable security"] },
  INDOCRYPT: { name: "INDOCRYPT", aliases: ["indocrypt"] },
  AFRICACRYPT: { name: "AFRICACRYPT", aliases: ["africacrypt"] },
  IMA: {
    name: "IMA Cryptography and Coding",
    aliases: ["cryptography and coding"],
  },
  ESORICS: { name: "ESORICS", aliases: ["esorics"] },
  FC: {
    name: "Financial Cryptography",
    aliases: ["fc", "financial cryptography"],
  },
  ITC: {
    name: "ITC",
    aliases: ["itc", "information theoretic cryptography"],
  },
  ISTCS: { name: "ISTCS", aliases: ["istcs"] },
  DCC: {
    name: "Designs, Codes and Cryptography",
    aliases: ["designs codes and cryptography", "dcc"],
  },
  SIAMJC: {
    name: "SIAM Journal on Computing",
    aliases: ["siam journal on computing", "siam j comput", "sicomp"],
  },
};

// Standard abbreviations for journals that cryptobib files under prefix-less
// keys ("GolMicWig91" is a Journal of the ACM article), keyed by the
// normalizeForCompare form of cryptobib's `journal` field.
export const JOURNAL_ALIASES: Record<string, string[]> = {
  "journal of the acm": ["jacm", "j acm"],
  "siam journal on computing": ["sicomp", "siam j comput"],
  "communications of the association for computing machinery": [
    "communications of the acm",
    "cacm",
  ],
  "ieee transactions on information theory": [
    "ieee trans inf theory",
    "ieee tit",
  ],
  "journal of computer and system sciences": ["jcss"],
};

// The year cryptobib encodes in a key's two-digit suffix: the conference year
// for proceedings, the volume year for journals. It can differ from the
// entry's `year`, which for older LNCS volumes is the publication year
// (C:ImpRud88, CRYPTO '88, has year 1990).
export function keyYear(key: string): string | undefined {
  const m = key.match(/(\d{2})[a-z]?$/);
  if (!m) return undefined;
  const yy = parseInt(m[1], 10);
  return String(yy >= 70 ? 1900 + yy : 2000 + yy);
}

function containsWords(haystack: string[], needle: string[]): boolean {
  if (needle.length === 0) return false;
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    if (needle.every((w, j) => haystack[i + j] === w)) return true;
  }
  return false;
}

// Whether a reference page's `venue` names the venue a cryptobib key encodes:
// the series acronym from the key prefix and, when the local venue carries a
// four-digit year, the key year. "STOC 2008, JACM 2015" matches STOC:...08.
// Returns undefined for a key whose prefix is not in KEY_PREFIX_VENUES.
export function venueMatchesKey(
  localVenue: string,
  key: string,
): { matches: boolean; expected: string } | undefined {
  const prefix = key.includes(":") ? key.slice(0, key.indexOf(":")) : "";
  const series = Object.hasOwn(KEY_PREFIX_VENUES, prefix)
    ? KEY_PREFIX_VENUES[prefix]
    : undefined;
  if (!series) return undefined;
  const year = keyYear(key);
  const words = normalizeForCompare(localVenue).split(" ");
  const named = series.aliases.some((a) => containsWords(words, a.split(" ")));
  const years = words.filter((w) => /^(19|20)\d{2}$/.test(w));
  const dated = years.length === 0 || !year || years.includes(year);
  return {
    matches: named && dated,
    expected: year ? `${series.name} ${year}` : series.name,
  };
}

const VENUE_STOPWORDS = new Set(["of", "the", "on", "in", "and", "for"]);

// Fallback for keys without a known prefix: does the local venue name the
// entry's booktitle/journal? Years and volume numbers are ignored on both
// sides. Accepts a substring either way, a standard journal abbreviation, or
// a local venue of two or more words of which at least three quarters occur
// in cryptobib's ("Structure in Complexity Theory" for "Proceedings of
// Structures in Complexity Theory").
export function venueMatchesName(localVenue: string, cbVenue: string): boolean {
  const words = (v: string) =>
    normalizeForCompare(v)
      .split(" ")
      .filter((w) => w && !/^\d+$/.test(w));
  const localWords = words(localVenue);
  const cbWords = words(cbVenue);
  const local = localWords.join(" ");
  const cb = cbWords.join(" ");
  if (!local || !cb) return true;
  if (cb.includes(local) || local.includes(cb)) return true;
  if (
    (Object.hasOwn(JOURNAL_ALIASES, cb) ? JOURNAL_ALIASES[cb] : []).some((a) =>
      containsWords(localWords, a.split(" ")),
    )
  ) {
    return true;
  }
  const stem = (w: string) => (w.length > 3 ? w.replace(/s$/, "") : w);
  const cbStems = new Set(cbWords.map(stem));
  const significant = localWords.filter((w) => !VENUE_STOPWORDS.has(w));
  const hits = significant.filter((w) => cbStems.has(stem(w))).length;
  return significant.length >= 2 && hits * 4 >= significant.length * 3;
}
