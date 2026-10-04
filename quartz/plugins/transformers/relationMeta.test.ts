import test, { describe } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkRehype from "remark-rehype";
import { Root as HtmlRoot, Element } from "hast";
import { visit } from "unist-util-visit";
import { VFile } from "vfile";
import {
  headingsBySlug,
  insertUnderH1,
  ObjectIndex,
  readFrontmatter,
  RelationMeta,
  relationMetaParts,
  renderSource,
  SEPARATOR,
  variantDisplay,
} from "./relationMeta";
import { Description } from "./description";
import { BuildCtx } from "../../util/ctx";

const objects: ObjectIndex = new Map([
  [
    "fac",
    {
      id: "fac",
      kind: "object",
      type: "assumption",
      slug: "factoring",
      title: "Factoring",
    },
  ],
  [
    "ip",
    {
      id: "ip",
      kind: "object",
      type: "complexity-class",
      slug: "interactive-proofs",
      title: "IP",
    },
  ],
  [
    "owf",
    {
      id: "owf",
      kind: "variant",
      type: "primitive",
      slug: "hash-function",
      graphSlug: "Primitives/hash-function",
      anchor: "#preimage-resistance-one-wayness",
      title: "owf",
    },
  ],
]);

// Written with " · " below; the real separator has a no-break space first.
const line = (fm: Record<string, unknown>) =>
  relationMetaParts(fm, objects).join(" · ");

const CLASS = "black-box-separations#types-of-black-box-reductions";
const DLO24 = "[[DLO24 - Breaking RSA Generically|DLO24]]";

describe("relationMetaParts: reductions", () => {
  test("kind, class, model, sources in order; implication and unstated omitted", () => {
    assert.strictEqual(
      line({
        type: "reduction",
        kind: "equivalence",
        class: "free",
        model: "other",
        conclusion: "fac",
        source: [DLO24],
      }),
      `Equivalence · [[${CLASS}|free reduction]] · non-standard model · ${DLO24}`,
    );
    assert.strictEqual(
      line({
        type: "reduction",
        kind: "implication",
        class: "unstated",
        model: "standard",
        source: ["folklore"],
      }),
      "Standard model · folklore",
    );
  });

  test("idealised models link to their pages; others are text", () => {
    const fm = { type: "reduction", kind: "implication", class: "unstated" };
    assert.strictEqual(
      line({ ...fm, model: "rom" }),
      "[[random-oracle-model|Random oracle model]]",
    );
    assert.strictEqual(
      line({ ...fm, model: "generic-group" }),
      "[[generic-group-model|Generic group model]]",
    );
    assert.strictEqual(
      line({ ...fm, model: "algebraic-group" }),
      "[[algebraic-group-model|Algebraic group model]]",
    );
    assert.strictEqual(line({ ...fm, model: "crs" }), "CRS model");
  });

  test("the class phrase is written attributively, as in page titles", () => {
    const fm = { type: "reduction", kind: "implication", model: "standard" };
    assert.match(
      line({ ...fm, class: "fully-black-box" }),
      /^\[\[[^|]+\|Fully-black-box reduction\]\] · standard model$/,
    );
    assert.match(
      line({ ...fm, class: "forall-exists-semi-black-box" }),
      /\|∀∃-semi-black-box reduction\]\]/,
    );
  });

  test("heuristic, via, then sources, then security loss with its math intact", () => {
    assert.strictEqual(
      line({
        type: "reduction",
        kind: "implication",
        class: "fully-black-box",
        model: "standard",
        heuristic: true,
        via: ["[[switching-lemma|Switching Lemma]]"],
        source: ["[[BKR94 - The Security of CBC|BKR94]]", "folklore"],
        "security-loss": "additive\n  $q(q-1)/(2|\\calD|)$ for $q$ queries",
      }),
      `[[${CLASS}|Fully-black-box reduction]] · standard model · heuristic candidate · ` +
        "via [[switching-lemma|Switching Lemma]] · [[BKR94 - The Security of CBC|BKR94]], folklore · " +
        "security loss: additive $q(q-1)/(2|\\calD|)$ for $q$ queries",
    );
  });

  test("a containment of complexity classes drops the class and standard-model axes", () => {
    const fm = {
      type: "reduction",
      kind: "inclusion",
      class: "free",
      conclusion: "ip",
      source: ["folklore"],
    };
    assert.strictEqual(
      line({ ...fm, model: "standard" }),
      "Inclusion · folklore",
    );
    assert.strictEqual(
      line({ ...fm, model: "quantum" }),
      "Inclusion · quantum · folklore",
    );
    // An equivalence of assumptions keeps them.
    assert.match(
      line({
        ...fm,
        kind: "equivalence",
        conclusion: "fac",
        model: "standard",
      }),
      /free reduction\]\] · standard model/,
    );
  });

  test("malformed fields are omitted, never thrown on or printed as objects", () => {
    const fm = { type: "reduction", kind: "implication", class: "unstated" };
    // Inherited keys are not model names.
    assert.strictEqual(
      line({ ...fm, model: "constructor" }),
      "Constructor model",
    );
    assert.strictEqual(line({ ...fm, model: "__proto__" }), "__proto__ model");
    assert.strictEqual(
      line({
        type: "reduction",
        kind: { a: 1 },
        class: ["a", "b"],
        model: null,
        via: { a: 1 },
        source: [["x"], { k: 1 }, "", "  "],
        "security-loss": ["a"],
        rationale: { class: "Calls the oracle once." },
      }),
      "",
    );
    assert.strictEqual(
      line({ type: "barrier", strength: true, "conditional-on": { a: 1 } }),
      "",
    );
  });

  test("empty security loss and missing fields are omitted", () => {
    assert.strictEqual(
      line({
        type: "reduction",
        kind: "implication",
        class: "unstated",
        "security-loss": "",
      }),
      "",
    );
  });
});

describe("relationMetaParts: barriers", () => {
  test("strength, class ruled out, conditional-on, sources", () => {
    assert.strictEqual(
      line({
        type: "barrier",
        strength: "conditional",
        class: "fixed-construction",
        "conditional-on": ["owf", "fac", "no-such-id"],
        source: [
          "[[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]",
        ],
      }),
      `Conditional · against [[${CLASS}|fixed-construction reductions]] · ` +
        "assuming [[hash-function#preimage-resistance-one-wayness|owf]], [[factoring|Factoring]], no-such-id · " +
        "[[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]",
    );
  });

  test("a title with math is linked as a markdown link, so the math renders", () => {
    const withMath: ObjectIndex = new Map([
      [
        "q-sdh",
        {
          id: "q-sdh",
          kind: "object",
          slug: "q-strong-diffie-hellman",
          title: "$q$-Strong Diffie-Hellman assumption",
        },
      ],
      [
        "abs",
        {
          id: "abs",
          kind: "variant",
          slug: "x",
          anchor: "#bounded",
          title: "$|x| \\le [B]$-bounded",
        },
      ],
    ]);
    assert.deepStrictEqual(
      relationMetaParts(
        {
          type: "barrier",
          strength: "conditional",
          "conditional-on": ["q-sdh", "abs"],
        },
        withMath,
      ),
      [
        "Conditional",
        "assuming [$q$-Strong Diffie-Hellman assumption](<q-strong-diffie-hellman>), " +
          "[$|x| \\le [B]$-bounded](<x#bounded>)",
      ],
    );
  });

  test("free-text conditional-on stays text; unstated class is omitted", () => {
    assert.strictEqual(
      line({
        type: "barrier",
        strength: "conditional",
        class: "unstated",
        "conditional-on": [
          "a sub-exponentially hard subset-membership problem",
        ],
        source: [DLO24],
      }),
      `Conditional · assuming a sub-exponentially hard subset-membership problem · ${DLO24}`,
    );
  });

  test("other page types get no line", () => {
    assert.deepStrictEqual(
      relationMetaParts({ type: "primitive" }, objects),
      [],
    );
  });
});

test("a wrapped line never starts with a separator", () => {
  assert.strictEqual(SEPARATOR, "\u00a0· ");
});

test("renderSource shows the citation key", () => {
  assert.strictEqual(
    renderSource("[[RSA78 - A method for obtaining digital signatures]]"),
    "[[RSA78 - A method for obtaining digital signatures|RSA78]]",
  );
  assert.strictEqual(renderSource(DLO24), DLO24);
  assert.strictEqual(renderSource("folklore"), "folklore");
});

describe("variant display", () => {
  test("headings by anchor slug, skipping frontmatter comments and fences", () => {
    const src = [
      "---",
      "# not a heading: a YAML comment",
      "variants:",
      '  owf: "#preimage-resistance-one-wayness"',
      "---",
      "",
      "# Hash functions",
      "```",
      "## Inside a fence",
      "```",
      "### Preimage resistance (one-wayness)",
      "### [[collision-resistance|Collision resistance]] ##",
    ].join("\n");
    const h = headingsBySlug(src);
    assert.strictEqual(
      h.get("preimage-resistance-one-wayness"),
      "Preimage resistance (one-wayness)",
    );
    assert.strictEqual(h.get("collision-resistance"), "Collision resistance");
    assert.strictEqual(h.get("inside-a-fence"), undefined);
    assert.strictEqual(h.get("not-a-heading-a-yaml-comment"), undefined);
    // CRLF files, and frontmatter whose YAML does not parse.
    const crlf = headingsBySlug("---\r\n# c: [\r\n---\r\n### CPA Security\r\n");
    assert.strictEqual(crlf.get("cpa-security"), "CPA Security");
    assert.strictEqual(crlf.get("c"), undefined);
  });

  test("an ordinary capitalised heading is lower-cased; an acronym is kept", () => {
    assert.strictEqual(
      variantDisplay("Collision resistance"),
      "collision resistance",
    );
    assert.strictEqual(variantDisplay("CCA1 Security"), "CCA1 Security");
    assert.strictEqual(variantDisplay("IND-CPA security"), "IND-CPA security");
  });
});

describe("insertUnderH1", () => {
  const fmBlock = "---\ntype: reduction\n---\n";

  test("directly under the H1, as its own paragraph", () => {
    const src = `${fmBlock}\n# A ⇒ B\n## Statement\n\nText.`;
    const out = insertUnderH1(src, fmBlock.length, "LINE");
    assert.strictEqual(
      out,
      `${fmBlock}\n# A ⇒ B\n\nLINE\n\n## Statement\n\nText.`,
    );
  });

  test("does not merge with a paragraph that follows the H1 without a blank line", () => {
    const src = `${fmBlock}# T\nIntro.`;
    assert.strictEqual(
      insertUnderH1(src, fmBlock.length, "LINE"),
      `${fmBlock}# T\n\nLINE\n\nIntro.`,
    );
  });

  test("ignores # lines inside fenced code", () => {
    const src = `${fmBlock}\`\`\`sh\n# not a heading\n\`\`\`\n# Title\n`;
    const out = insertUnderH1(src, fmBlock.length, "LINE");
    assert.ok(out.includes("# Title\n\nLINE\n"));
    assert.ok(out.includes("# not a heading\n```"));
  });

  test("leads the body when there is no H1", () => {
    const src = `${fmBlock}\n## Statement`;
    assert.strictEqual(
      insertUnderH1(src, fmBlock.length, "LINE"),
      `${fmBlock}\nLINE\n\n## Statement`,
    );
  });
});

test("readFrontmatter parses YAML and finds the body", () => {
  const src = "---\ntype: barrier\nsource: [folklore]\n---\n# T";
  const fm = readFrontmatter(src)!;
  assert.deepStrictEqual(fm.data, { type: "barrier", source: ["folklore"] });
  assert.strictEqual(src.slice(fm.end), "# T");
  assert.strictEqual(readFrontmatter("# no frontmatter"), null);
});

test("pipeline: class on the paragraph, marker gone, description starts at the Statement", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "relation-meta-"));
  fs.mkdirSync(path.join(dir, "content"));
  fs.mkdirSync(path.join(dir, ".reductions"));
  fs.writeFileSync(
    path.join(dir, ".reductions", "relations.json"),
    JSON.stringify({ objects: [...objects.values()] }),
  );
  fs.mkdirSync(path.join(dir, "content", "Primitives"));
  fs.writeFileSync(
    path.join(dir, "content", "Primitives", "hash-function.md"),
    "---\ntitle: Hash functions\n---\n\n# Hash functions\n\n### Preimage resistance (one-wayness)\n",
  );
  const ctx = {
    argv: { directory: path.join(dir, "content") },
  } as unknown as BuildCtx;
  const plugin = RelationMeta();
  const src = [
    "---",
    "type: barrier",
    "strength: conditional",
    "class: fully-black-box",
    "conditional-on: [owf]",
    'source: ["[[GW11 - Separating SNARGs|GW11]]"]',
    "---",
    "",
    "# No fully-black-box reduction from X to SNARK",
    "",
    "## Statement",
    "",
    "No SNARG for a hard language has a black-box proof of soundness.",
  ].join("\n");
  const transformed = plugin.textTransform!(ctx, src);
  assert.match(
    transformed,
    /# No fully-black-box reduction from X to SNARK\n\nConditional\u00a0· /,
  );
  // A variant is named by the heading its anchor points at, not by its id.
  assert.ok(
    transformed.includes(
      "assuming [[hash-function#preimage-resistance-one-wayness|preimage resistance (one-wayness)]]",
    ),
  );

  const file = new VFile(transformed);
  file.data.frontmatter = { ...readFrontmatter(transformed)!.data, title: "T" };
  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(plugin.markdownPlugins!(ctx))
    .use(remarkRehype)
    .use(Description().htmlPlugins!(ctx));
  const tree = (await processor.run(processor.parse(file), file)) as HtmlRoot;

  const meta: Element[] = [];
  visit(tree, "element", (el) => {
    if (
      (el.properties.className as string[] | undefined)?.includes(
        "relation-meta",
      )
    )
      meta.push(el);
  });
  assert.strictEqual(meta.length, 1);
  assert.strictEqual(meta[0].tagName, "p");
  let raw = false;
  visit(meta[0], (n) => {
    if (n.type === "raw" || n.type === "comment") raw = true;
  });
  assert.strictEqual(raw, false, "the marker comment is removed");
  assert.strictEqual(
    file.data.description,
    "No SNARG for a hard language has a black-box proof of soundness.",
  );
  assert.match(String(file.data.text), /Conditional\u00a0· against/);
  fs.rmSync(dir, { recursive: true, force: true });
});
