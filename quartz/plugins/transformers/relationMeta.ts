import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { slug as slugAnchor } from "github-slugger";
import { Root, Paragraph, Heading } from "mdast";
import { toString } from "mdast-util-to-string";
import { QuartzTransformerPlugin } from "../types";
import { NO_DESCRIPTION_CLASS } from "./description";

// The metadata line under the H1 of every reduction and barrier page.
//
//   # RSA ⇔ FAC
//   Equivalence · free reduction · non-standard model · DLO24
//
// The line is built from the page's frontmatter (the relation fields the lint
// validates) and spliced into the markdown source right after the H1, as an
// ordinary paragraph. It is a text transform, and it runs before
// ObsidianFlavoredMarkdown, so the inserted wikilinks and `$…$` math go through
// exactly the stages body text does: OFM's wikilink pre-pass and link
// resolution, CrawlLinks, remark-math and KaTeX, popovers. Building HTML here
// instead would mean re-implementing link resolution and math rendering, and
// drifting from them.
//
// The paragraph carries a trailing marker comment; this plugin's markdown stage
// removes it and gives the paragraph the `relation-meta` class (styled in
// quartz/styles/relation-meta.scss). The paragraph, the H1 and the
// `## Statement` heading also get Description's `no-description` class, so
// meta descriptions and RSS start with the Statement text, not with this line.

export const RELATION_META_CLASS = "relation-meta";
const MARKER = "<!-- relation-meta -->";

export interface Options {
  /** Wikilink target that defines reduction classes. */
  classPage: string;
  /** Wikilink target per idealised model; models without one render as text. */
  modelPages: Record<string, string>;
  /** Display text per model value. */
  modelNames: Record<string, string>;
  /** Path to relations.json, relative to the content directory. */
  relationsJson: string;
}

const defaultOptions: Options = {
  // RTV04's taxonomy as the wiki states it. The page has no per-class anchors,
  // so every class links to the section.
  classPage: "black-box-separations#types-of-black-box-reductions",
  // The pages carrying the ids that MODEL_PAGES in scripts/participates-in.mjs
  // maps these models to (rom, ggm, agm). No other model has a page yet.
  modelPages: {
    rom: "random-oracle-model",
    "generic-group": "generic-group-model",
    "algebraic-group": "algebraic-group-model",
  },
  modelNames: {
    standard: "standard model",
    rom: "random oracle model",
    crs: "CRS model",
    "generic-group": "generic group model",
    "algebraic-group": "algebraic group model",
    quantum: "quantum",
    other: "non-standard model",
  },
  relationsJson: "../.reductions/relations.json",
};

// ------------------------------------------------------------ resolution ----

export interface ObjectRef {
  id: string;
  kind: "object" | "variant";
  type?: string;
  slug: string;
  /** The page's path under the content directory, without `.md`. */
  graphSlug?: string;
  anchor?: string;
  title: string;
}

/** What the line needs from relations.json: objects by id. */
export type ObjectIndex = Map<string, ObjectRef>;

// Read once per build process, and again when the file changes (`--serve`).
let cachedIndex: { file: string; mtime: number; index: ObjectIndex } | null =
  null;
let warnedMissing = false;

function loadObjectIndex(file: string): ObjectIndex {
  let mtime = -1;
  try {
    mtime = fs.statSync(file).mtimeMs;
  } catch {}
  if (cachedIndex?.file === file && cachedIndex.mtime === mtime)
    return cachedIndex.index;
  const index: ObjectIndex = new Map();
  try {
    const json = JSON.parse(fs.readFileSync(file, "utf8"));
    const str = (v: unknown) => (typeof v === "string" ? v : undefined);
    for (const o of json.objects ?? []) {
      if (!o || typeof o.id !== "string" || typeof o.slug !== "string")
        continue;
      // Only the fields the line reads, each a string, so a malformed entry
      // degrades to its id instead of throwing.
      index.set(o.id, {
        id: o.id,
        kind: o.kind === "variant" ? "variant" : "object",
        type: str(o.type),
        slug: o.slug,
        graphSlug: str(o.graphSlug),
        anchor: str(o.anchor),
        title: str(o.title) || o.id,
      });
    }
  } catch {
    if (!warnedMissing) {
      console.warn(
        `RelationMeta: cannot read ${file}; conditional-on ids render as plain text. Run \`node scripts/generate-relations.mjs\`.`,
      );
      warnedMissing = true;
    }
  }
  cachedIndex = { file, mtime, index };
  return index;
}

// A variant's relations.json title is its id (`pke-cca1-security`), which is
// not reader-facing text. The line names a variant by the heading its anchor
// points at instead, read from the host page.
const headingCache = new Map<
  string,
  { mtime: number; headings: Map<string, string> }
>();

/** Heading text that a `[[page#heading]]` link would show. */
export function headingText(raw: string): string {
  return oneLine(
    raw
      .replace(/\[\[([^\]|]+)\|([^\]]*)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/(\*\*|__|`)/g, ""),
  );
}

/** Headings of a markdown file by anchor slug, frontmatter and fences skipped. */
export function headingsBySlug(src: string): Map<string, string> {
  const headings = new Map<string, string>();
  // The frontmatter block is skipped even when its YAML does not parse.
  const bodyStart = FRONTMATTER.exec(src)?.[0].length ?? 0;
  let fence: string | null = null;
  for (const l of src.slice(bodyStart).split(/\r?\n/)) {
    const f = /^ {0,3}(`{3,}|~{3,})/.exec(l);
    if (f) {
      if (fence === null) fence = f[1];
      else if (f[1][0] === fence[0] && f[1].length >= fence.length)
        fence = null;
      continue;
    }
    if (fence !== null) continue;
    const h = /^ {0,3}#{1,6}[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/.exec(l);
    if (!h) continue;
    const text = headingText(h[1]);
    const key = slugAnchor(text);
    if (text && !headings.has(key)) headings.set(key, text);
  }
  return headings;
}

function variantHeading(contentDir: string, o: ObjectRef): string | undefined {
  if (!o.anchor || !o.graphSlug) return undefined;
  const file = path.join(contentDir, `${o.graphSlug}.md`);
  try {
    const mtime = fs.statSync(file).mtimeMs;
    let entry = headingCache.get(file);
    if (!entry || entry.mtime !== mtime) {
      const headings = headingsBySlug(fs.readFileSync(file, "utf8"));
      entry = { mtime, headings };
      headingCache.set(file, entry);
    }
    return entry.headings.get(o.anchor.replace(/^#/, "").toLowerCase());
  } catch {
    // A missing or unreadable host page: the variant keeps its id.
    return undefined;
  }
}

/**
 * Display text for a variant whose title is only its id: the heading its
 * anchor names, lower-cased when it starts with an ordinary capitalised word
 * ("Collision resistance" → "collision resistance", "CCA1 Security" kept).
 */
export const variantDisplay = (heading: string) =>
  /^\p{Lu}\p{Ll}/u.test(heading)
    ? heading.charAt(0).toLowerCase() + heading.slice(1)
    : heading;

/** `objects`, with reader-facing titles for the variant ids in `ids`. */
function withVariantTitles(
  objects: ObjectIndex,
  ids: string[],
  contentDir: string,
): ObjectIndex {
  let out: ObjectIndex | null = null;
  for (const id of ids) {
    const o = objects.get(id);
    if (!o || o.kind !== "variant" || (o.title && o.title !== o.id)) continue;
    const heading = variantHeading(contentDir, o);
    if (!heading) continue;
    out ??= new Map(objects);
    out.set(id, { ...o, title: variantDisplay(heading) });
  }
  return out ?? objects;
}

// --------------------------------------------------------------- the line ----

type Frontmatter = Record<string, unknown>;

/** Collapses YAML line folding and stray whitespace to single spaces. */
const oneLine = (s: string) => s.replace(/\s+/g, " ").trim();

/**
 * A scalar field as one line of text. Mappings, lists, booleans and null read
 * as empty, so a field the lint would reject is omitted from the line rather
 * than printed as "[object Object]".
 */
const scalar = (v: unknown): string =>
  typeof v === "string"
    ? oneLine(v)
    : typeof v === "number" && Number.isFinite(v)
      ? String(v)
      : "";

/** A list field (or a lone scalar) as its non-empty scalar entries. */
const asList = (v: unknown): string[] =>
  (Array.isArray(v) ? v : [v]).map(scalar).filter(Boolean);

/** `rec[key]` when `key` is its own entry, so "constructor" is no model name. */
const own = <T>(rec: Record<string, T>, key: string): T | undefined =>
  Object.hasOwn(rec, key) ? rec[key] : undefined;

/** Wikilink display text cannot contain `|`, `[` or `]`. */
const linkText = (s: string) => s.replace(/[|[\]]/g, " ").trim();

/**
 * A link to `target` showing `text`. Display text with `$…$` math is written
 * as a markdown link: remark-math splits a wikilink whose alias holds math
 * before ObsidianFlavoredMarkdown sees it, which leaves the `[[…]]` raw, while
 * a markdown link's text is parsed as inline content, so the math renders.
 * CrawlLinks resolves both forms alike. Brackets and bars inside the math are
 * left alone: a math span binds tighter than link brackets, as a code span does.
 */
const wikilink = (target: string, text: string) =>
  text.includes("$")
    ? `[${text.trim()}](<${target}>)`
    : `[[${target}|${linkText(text)}]]`;

const WIKILINK = /^\[\[([^\]|]+?)(\|[^\]]*)?\]\]$/;

/**
 * One `source` entry: a wikilink to a reference page, shown by its citation
 * key, or the bare token `folklore`. A wikilink without display text gets the
 * key from the filename (`KEY - Title`).
 */
export function renderSource(entry: string): string {
  const s = oneLine(entry);
  const m = WIKILINK.exec(s);
  if (!m) return s;
  if (m[2] && m[2].length > 1) return s;
  const target = m[1].trim();
  const base = target.split("/").pop()!.split("#")[0];
  const key = base.split(" - ")[0].trim();
  return wikilink(target, key || base);
}

/** Class id as written attributively in page titles ("fully-black-box"). */
export const classPhrase = (cls: string) =>
  cls.replace(/^forall-exists-/, "∀∃-");

/** An object or variant id, linked the way the generated sections link it. */
export function renderObject(id: string, objects: ObjectIndex): string {
  const o = objects.get(id);
  if (!o) return id;
  return o.kind === "variant"
    ? wikilink(`${o.slug}${o.anchor ?? ""}`, o.title || id)
    : wikilink(o.slug, o.title || id);
}

/**
 * A containment or equality between complexity classes (or of a problem in a
 * class) is recorded `class: free`, and the schema's stock note says the
 * reduction-class axis does not apply to it; nor does the standard/idealised
 * model axis. The line omits both rather than print "free reduction · standard
 * model" under "IP ⊆ PSPACE". A `quantum` model is still shown.
 */
function isComplexityContainment(fm: Frontmatter, objects: ObjectIndex) {
  const kind = scalar(fm.kind);
  if (!kind || kind === "implication") return false;
  if (scalar(fm.class) !== "free") return false;
  const type = objects.get(scalar(fm.conclusion))?.type;
  return type ? type === "complexity-class" : kind === "inclusion";
}

function capitalizeFirst(md: string): string {
  const link = /^\[\[[^\]|]*\|/.exec(md);
  const at = link ? link[0].length : 0;
  const ch = md.charAt(at);
  if (!/\p{Ll}/u.test(ch)) return md;
  return md.slice(0, at) + ch.toUpperCase() + md.slice(at + 1);
}

/**
 * The parts of the line, as markdown, in display order. Empty parts are
 * omitted, so the result may be empty.
 */
export function relationMetaParts(
  fm: Frontmatter,
  objects: ObjectIndex,
  options: Partial<Options> = {},
): string[] {
  const opts = { ...defaultOptions, ...options };
  const parts: string[] = [];
  const cls = scalar(fm.class);
  const classLink = (noun: string) =>
    wikilink(opts.classPage, `${classPhrase(cls)} ${noun}`);
  const sources = asList(fm.source).map(renderSource);

  if (fm.type === "reduction") {
    const containment = isComplexityContainment(fm, objects);
    const kind = scalar(fm.kind);
    if (kind && kind !== "implication") parts.push(kind);
    if (cls && cls !== "unstated" && !containment)
      parts.push(classLink("reduction"));
    const model = scalar(fm.model);
    if (model && !(containment && model === "standard")) {
      const name = own(opts.modelNames, model) ?? `${model} model`;
      const page = own(opts.modelPages, model);
      parts.push(page ? wikilink(page, name) : name);
    }
    if (fm.heuristic === true) parts.push("heuristic candidate");
    const via = asList(fm.via);
    if (via.length) parts.push(`via ${via.join(", ")}`);
    if (sources.length) parts.push(sources.join(", "));
    const loss = scalar(fm["security-loss"]);
    if (loss) parts.push(`security loss: ${loss}`);
  } else if (fm.type === "barrier") {
    const strength = scalar(fm.strength);
    if (strength) parts.push(strength);
    if (cls && cls !== "unstated")
      parts.push(`against ${classLink("reductions")}`);
    const assumed = asList(fm["conditional-on"]).map((x) =>
      renderObject(x, objects),
    );
    if (assumed.length) parts.push(`assuming ${assumed.join(", ")}`);
    if (sources.length) parts.push(sources.join(", "));
  }
  if (parts.length) parts[0] = capitalizeFirst(parts[0]);
  return parts;
}

// A no-break space before the dot keeps it on the line of the item it follows,
// so a wrapped line never starts with a separator.
export const SEPARATOR = "\u00a0· ";

// ------------------------------------------------------------- splicing ----

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n(?:---|\.\.\.)[ \t]*(?:\r?\n|$)/;

/** Parses the YAML frontmatter the way the FrontMatter plugin does. */
export function readFrontmatter(
  src: string,
): { data: Frontmatter; end: number } | null {
  const m = FRONTMATTER.exec(src);
  if (!m) return null;
  try {
    const data = yaml.load(m[1], { schema: yaml.JSON_SCHEMA });
    if (!data || typeof data !== "object" || Array.isArray(data)) return null;
    return { data: data as Frontmatter, end: m[0].length };
  } catch {
    return null;
  }
}

/**
 * Inserts `line` as its own paragraph directly under the first ATX H1 of the
 * body that starts at `bodyStart`, skipping fenced code; at the top of the
 * body when there is no H1.
 */
export function insertUnderH1(
  src: string,
  bodyStart: number,
  line: string,
): string {
  const head = src.slice(0, bodyStart);
  const lines = src.slice(bodyStart).split("\n");
  let fence: string | null = null;
  let at = -1;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const f = /^ {0,3}(`{3,}|~{3,})/.exec(l);
    if (f) {
      if (fence === null) fence = f[1];
      else if (f[1][0] === fence[0] && f[1].length >= fence.length)
        fence = null;
      continue;
    }
    if (fence === null && /^ {0,3}#(?:[ \t\r]|$)/.test(l)) {
      at = i + 1;
      break;
    }
  }
  if (at < 0) {
    // No H1: lead the body, after any blank lines the frontmatter left.
    at = 0;
    while (at < lines.length && lines[at].trim() === "") at++;
    lines.splice(at, 0, line, "");
  } else {
    lines.splice(at, 0, "", line, "");
  }
  return head + lines.join("\n");
}

// --------------------------------------------------------------- plugin ----

function addClasses(node: Paragraph | Heading, classes: string[]) {
  const data = (node.data ??= {});
  const props = (data.hProperties ??= {}) as Record<string, unknown>;
  const existing = props.className;
  const current = Array.isArray(existing)
    ? existing.map(String)
    : existing
      ? String(existing).split(/\s+/)
      : [];
  props.className = [...new Set([...current, ...classes])];
}

const isRelationPage = (fm: Frontmatter | undefined) =>
  fm?.type === "reduction" || fm?.type === "barrier";

export const RelationMeta: QuartzTransformerPlugin<Partial<Options>> = (
  userOpts,
) => {
  const opts = { ...defaultOptions, ...userOpts };
  return {
    name: "RelationMeta",
    textTransform(ctx, src) {
      const fm = readFrontmatter(src);
      if (!fm || !isRelationPage(fm.data)) return src;
      const contentDir = path.resolve(ctx.argv.directory);
      const objects = withVariantTitles(
        loadObjectIndex(path.resolve(contentDir, opts.relationsJson)),
        asList(fm.data["conditional-on"]),
        contentDir,
      );
      const parts = relationMetaParts(fm.data, objects, opts);
      if (!parts.length) return src;
      return insertUnderH1(src, fm.end, `${parts.join(SEPARATOR)} ${MARKER}`);
    },
    markdownPlugins() {
      return [
        () => (tree: Root, file) => {
          const fm = file.data.frontmatter as Frontmatter | undefined;
          if (!isRelationPage(fm)) return;
          let sawH1 = false;
          let sawStatement = false;
          for (const node of tree.children) {
            if (node.type === "heading" && node.depth === 1 && !sawH1) {
              // The description starts with the Statement, so the title
              // (already the page's <title> and og:title) is skipped too.
              sawH1 = true;
              addClasses(node, [NO_DESCRIPTION_CLASS]);
            } else if (
              node.type === "heading" &&
              node.depth === 2 &&
              !sawStatement &&
              toString(node).trim() === "Statement"
            ) {
              sawStatement = true;
              addClasses(node, [NO_DESCRIPTION_CLASS]);
            } else if (node.type === "paragraph") {
              const last = node.children.at(-1);
              if (last?.type !== "html" || last.value.trim() !== MARKER)
                continue;
              node.children.pop();
              const prev = node.children.at(-1);
              if (prev?.type === "text") prev.value = prev.value.trimEnd();
              addClasses(node, [RELATION_META_CLASS, NO_DESCRIPTION_CLASS]);
            }
          }
        },
      ];
    },
  };
};
