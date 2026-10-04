// Inline markdown as text, and text as inline markdown, the way the site's
// parser reads it. Shared by scripts/generate-relations.mjs (variant titles),
// scripts/participates-in.mjs (link text) and scripts/lint.mjs (variant
// anchors, math inside wikilinks), and pinned by test/markdown-text.test.ts.
//
// The site parses `$…$` with micromark-extension-math (remark-math) before
// ObsidianFlavoredMarkdown resolves wikilinks, so a wikilink whose display text
// holds math is split by the math span and renders as raw `[[…]]`. A markdown
// link's text is parsed as inline content, so `[$k$-Linear](target)` renders
// the math and CrawlLinks resolves the target exactly as it resolves a
// wikilink's. `link()` below picks the form.
//
// quartz/plugins/transformers/relationMeta.ts keeps its own copy of
// `escapeOutsideMath` and the link rule; change both together.

import GithubSlugger, { slug as slugAnchor } from "github-slugger";

const ASCII_PUNCT = /[!-/:-@[-`{-~]/;

/** The index just past the run of `ch` that starts at `i`. */
const runEnd = (s, i, ch) => {
  let j = i;
  while (s[j] === ch) j++;
  return j;
};

/** Index of the next run of exactly `n` copies of `ch` at or after `from`, or -1. */
function closingRun(s, from, ch, n) {
  for (let j = from; j < s.length; ) {
    if (s[j] !== ch) {
      j++;
      continue;
    }
    const end = runEnd(s, j, ch);
    if (end - j === n) return j;
    j = end;
  }
  return -1;
}

/**
 * Splits one line of inline markdown into segments, as micromark tokenizes it:
 * `math` (a run of n dollars up to the next run of exactly n, delimiters
 * included), `code` (the same rule for backticks; code wins where it starts
 * first, so `` `$` `` is no math) and `text` (everything else, backslash
 * escapes included). A dollar or backtick run with no closing run is text.
 */
export function inlineSegments(s) {
  const out = [];
  let text = "";
  const flush = () => {
    if (text) out.push({ kind: "text", raw: text });
    text = "";
  };
  for (let i = 0; i < s.length; ) {
    const c = s[i];
    if (c === "\\" && i + 1 < s.length && ASCII_PUNCT.test(s[i + 1])) {
      text += s.slice(i, i + 2);
      i += 2;
      continue;
    }
    if (c === "$" || c === "`") {
      const end = runEnd(s, i, c);
      const close = closingRun(s, end, c, end - i);
      if (close < 0) {
        text += s.slice(i, end);
        i = end;
        continue;
      }
      flush();
      const stop = close + (end - i);
      out.push({ kind: c === "$" ? "math" : "code", raw: s.slice(i, stop) });
      i = stop;
      continue;
    }
    text += c;
    i++;
  }
  flush();
  return out;
}

/** True when `s`, read as inline markdown, contains a `$…$` math span. */
export const hasMath = (s) =>
  inlineSegments(String(s)).some((g) => g.kind === "math");

// The display text of a wikilink, as ObsidianFlavoredMarkdown shows it: the
// alias, else the heading, else the target.
const WIKILINK_TEXT =
  /!?\[\[([^[\]|#\\]+)?(#+[^[\]|#\\]+)?(?:\\?\|([^[\]#]*))?\]\]/g;
const wikilinkText = (_m, fp, header, alias) =>
  alias ?? header?.replace(/^#+/, "") ?? fp ?? "";

/** Plain text of a text segment: links, emphasis, HTML and escapes removed. */
// Only paired emphasis markers are removed: a lone `*` (MIP*) is text, as it
// is when rendered.
const plainText = (raw) =>
  raw
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/(?<!\\)(\*\*|__|~~)(?=\S)(.+?)(?<=\S)(?<!\\)\1/g, "$2")
    .replace(/(?<![\\*])\*(?=[^\s*])(.+?)(?<=[^\s\\*])\*(?!\*)/g, "$1")
    .replace(
      /(?<![\\\p{L}\p{N}_])_(?=[^\s_])(.+?)(?<=[^\s\\_])_(?![\p{L}\p{N}_])/gu,
      "$1",
    )
    .replace(/\\([!-/:-@[-`{-~])/g, "$1");

/**
 * A heading's text, two ways: `title` for display, with markdown removed and
 * math kept as `$…$`; and `slugText`, what rehype-slug reads to build the
 * heading's id (math by its TeX source, without delimiters).
 */
export function headingText(raw) {
  const segments = inlineSegments(raw.replace(WIKILINK_TEXT, wikilinkText));
  let title = "";
  let slugText = "";
  for (const g of segments) {
    if (g.kind === "text") {
      const t = plainText(g.raw);
      title += t;
      slugText += t;
    } else {
      const n = runEnd(g.raw, 0, g.raw[0]);
      const inner = g.raw.slice(n, g.raw.length - n);
      title += g.kind === "math" ? g.raw : inner;
      slugText += inner;
    }
  }
  const oneLine = (s) => s.replace(/\s+/g, " ").trim();
  return { title: oneLine(title), slugText: oneLine(slugText) };
}

const FENCE = /^ {0,3}(`{3,}|~{3,})/;
const ATX = /^ {0,3}#{1,6}[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/;

/**
 * The ATX headings of a page body (frontmatter already removed), keyed by the
 * id the site gives each: github-slugger over the heading text in document
 * order, so a repeated heading gets `-1`, `-2` as rehype-slug gives it.
 * Fenced code is skipped. Values are display titles (`headingText().title`).
 */
export function headingsByAnchor(body) {
  const slugger = new GithubSlugger();
  const out = new Map();
  let fence = null;
  for (const line of String(body).split(/\r?\n/)) {
    const f = FENCE.exec(line);
    if (f) {
      if (fence === null) fence = f[1];
      else if (f[1][0] === fence[0] && f[1].length >= fence.length)
        fence = null;
      continue;
    }
    if (fence !== null) continue;
    const h = ATX.exec(line);
    if (!h) continue;
    const { title, slugText } = headingText(h[1]);
    const id = slugger.slug(slugText);
    if (title && !out.has(id)) out.set(id, title);
  }
  return out;
}

/**
 * The heading `anchor` (`#id`, as a link or a `variants` entry writes it)
 * points at, from `headingsByAnchor`, or undefined. The anchor is slugged
 * first, as a link to it resolves (OFM and CrawlLinks pass it through
 * github-slugger), so `#Φ-Hiding` finds `## Φ-Hiding` and `#-hiding` finds
 * nothing.
 */
export const headingAt = (headings, anchor) =>
  headings.get(slugAnchor(String(anchor).replace(/^#/, "")));

/**
 * The wikilinks of a page body with an unescaped `$` between their brackets,
 * fenced and inline code skipped: `{ index, raw, target, text }`, `index` the
 * offset of `raw` in `body` and `text` the display text (the target when there
 * is none). remark-math reads `$…$` before ObsidianFlavoredMarkdown resolves
 * wikilinks, so a math span splits such a link and it renders as raw `[[…]]`,
 * and a lone `$` pairs with the next one in the paragraph.
 */
export function dollarWikilinks(body) {
  const scan = String(body)
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/`[^`\n]*`/g, (m) => " ".repeat(m.length));
  const out = [];
  for (const m of scan.matchAll(/!?\[\[([^[\]\n]*)\]\]/g)) {
    if (!/(^|[^\\])(\\\\)*\$/.test(m[1])) continue;
    const bar = m[1].indexOf("|");
    const target = (bar < 0 ? m[1] : m[1].slice(0, bar)).trim();
    const text = bar < 0 ? target : m[1].slice(bar + 1).trim();
    out.push({ index: m.index, raw: m[0], target, text });
  }
  return out;
}

/**
 * `text` as markdown that shows `text` and nothing else: math spans kept, and
 * outside them every `$`, `[` and `]` escaped, so a lone dollar (IND$-CPA)
 * cannot pair with a dollar elsewhere on the line and a bracket cannot close
 * the link around it.
 */
export function escapeOutsideMath(text) {
  return inlineSegments(String(text))
    .map((g) =>
      g.kind === "text"
        ? g.raw.replace(/\\[!-/:-@[-`{-~]|[$[\]]/g, (m) =>
            m.length === 2 ? m : `\\${m}`,
          )
        : g.raw,
    )
    .join("");
}

/**
 * A link to `target` (a wikilink target: slug, optional `#anchor`) showing
 * `text`. Text with a `$` is written as a markdown link, `[text](target)`,
 * escaped by `escapeOutsideMath`; any other text as `[[target|text]]`. The
 * destination is bare unless it needs `<…>` (a space or parenthesis), which is
 * the form Prettier keeps, so formatting never changes a generated region.
 */
export function link(target, text) {
  const t = String(text).trim();
  if (!t.includes("$")) return `[[${target}|${t}]]`;
  const dest = /^[^\s()<>\\]+$/.test(target) ? target : `<${target}>`;
  return `[${escapeOutsideMath(t)}](${dest})`;
}
