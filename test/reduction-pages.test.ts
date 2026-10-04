import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
// @ts-ignore — plain ESM helper shared with scripts/lint.mjs
import { loadClasses } from "../scripts/reduction-classes.mjs";
import {
  bodyContract,
  rationaleProblems,
  rationaleRecord,
  RATIONALE_FIELDS,
  unjustifiedClasses,
  // @ts-ignore — plain ESM helpers shared with scripts/lint.mjs and scripts/generate-relations.mjs
} from "../scripts/lint-edges.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");

type Finding = { rule: string; line: number; problem?: string; match?: string };
const rules = (body: string, fm: Record<string, unknown> = FM) =>
  (bodyContract(body, fm) as Finding[]).map((x) =>
    x.problem ? `${x.rule}:${x.problem}` : x.rule,
  );

const SOURCE = "[[GGM86 - How to construct random functions|GGM86]]";
const FM = { type: "reduction", title: "PRG ⇒ PRF (GGM)", source: [SOURCE] };
const page = (...sections: string[]) =>
  ["", "# PRG ⇒ PRF (GGM)", "", ...sections].join("\n");
const STATEMENT = `## Statement\n\nA length-doubling [[pseudorandom-generator|PRG]] yields a [[pseudorandom-function|PRF]] — ${SOURCE}.\n`;
const SKETCH = `## Sketch\n\nA hybrid over the $\\ell$ tree levels loses a factor $q\\ell$ — standard.\n`;
const NOTES = (line: string) => `## Notes\n\n${line}\n`;

// ------------------------------------------------------------ structure ----

test("a final-form body passes", () => {
  assert.deepEqual(
    rules(page(STATEMENT, SKETCH, NOTES("- A remark — folklore."))),
    [],
  );
  assert.deepEqual(rules(page(STATEMENT)), []);
});

test("body-h1: exactly one H1, equal to the title up to markdown escapes", () => {
  assert.deepEqual(rules(`\n${STATEMENT}`), ["body-h1:missing"]);
  assert.deepEqual(rules(page(STATEMENT, "# Variations\n\nMore.\n")), [
    "body-h1:extra",
  ]);
  assert.deepEqual(rules(page(STATEMENT), { ...FM, title: "PRG ⇒ PRF" }), [
    "body-h1:title",
  ]);
  const mip = { ...FM, title: "No free reduction from MIP* to MIP" };
  assert.deepEqual(
    rules(`# No free reduction from MIP\\* to MIP\n\n${STATEMENT}`, mip),
    [],
  );
});

test("body-preamble: nothing between the H1 and the Statement", () => {
  const intro =
    "A length-doubling [[pseudorandom-generator|PRG]] implies a [[pseudorandom-function|PRF]].\n";
  const found = bodyContract(page(intro, STATEMENT), FM) as Finding[];
  assert.deepEqual(
    found.map((x) => x.rule),
    ["body-preamble"],
  );
  assert.equal(found[0].line, 4);
  assert.deepEqual(rules(`Stray text.\n\n# PRG ⇒ PRF (GGM)\n\n${STATEMENT}`), [
    "body-preamble",
  ]);
  // An HTML comment is not prose.
  assert.deepEqual(rules(page("<!-- note to self -->\n", STATEMENT)), []);
  // A preamble is reported once, not again for the scaffolding it carries.
  assert.deepEqual(
    rules(
      page(
        "A reduction of class `free`, migrated from the [[prf]] page.\n",
        STATEMENT,
      ),
    ),
    ["body-preamble"],
  );
});

test("body-statement and body-sections: only Statement, Sketch, Notes, once, in order, non-empty", () => {
  assert.deepEqual(rules(page(SKETCH)), ["body-statement"]);
  assert.deepEqual(
    rules(page(STATEMENT, "## Construction\n\nThe GGM tree.\n")),
    ["body-sections:unknown"],
  );
  assert.deepEqual(rules(page(STATEMENT, NOTES("- x — folklore."), SKETCH)), [
    "body-sections:order",
  ]);
  assert.deepEqual(rules(page(STATEMENT, SKETCH, SKETCH)), [
    "body-sections:duplicate",
  ]);
  assert.deepEqual(rules(page(STATEMENT, "## Notes\n\n")), [
    "body-sections:empty",
  ]);
});

test("generated regions, code fences and comments do not count as sections", () => {
  const region =
    "<!-- BEGIN GENERATED participates-in 0123456789ab -->\n\n## Participates in\n\n- x\n\n<!-- END GENERATED participates-in -->\n";
  assert.deepEqual(rules(page(STATEMENT, region)), []);
  const fence =
    "```pseudocode\n## not a heading\n\\State `class: free`: x\n```\n";
  assert.deepEqual(rules(page(STATEMENT, `## Sketch\n\n${fence}`)), []);
  // A Notes heading followed only by the generated region is empty.
  assert.deepEqual(rules(page(STATEMENT, "## Notes\n\n" + region)), [
    "body-sections:empty",
  ]);
});

test("body-statement-source: the Statement cites every source entry", () => {
  const two = {
    ...FM,
    source: [SOURCE, "[[Gol01 - Foundations of Cryptography I|Gol01]]"],
  };
  const found = bodyContract(page(STATEMENT), two) as (Finding & {
    entry: string;
  })[];
  assert.deepEqual(
    found.map((x) => [x.rule, x.entry]),
    [
      [
        "body-statement-source",
        "[[Gol01 - Foundations of Cryptography I|Gol01]]",
      ],
    ],
  );
  // A citation only in the Notes does not count.
  assert.deepEqual(
    rules(page("## Statement\n\nA PRG yields a PRF.\n", NOTES(`- ${SOURCE}`))),
    ["body-statement-source"],
  );
  const folk = { ...FM, source: ["folklore"] };
  assert.deepEqual(rules(page("## Statement\n\nA PRG yields a PRF.\n"), folk), [
    "body-statement-source",
  ]);
  for (const flag of ["— folklore.", "— standard."])
    assert.deepEqual(
      rules(page(`## Statement\n\nA PRG yields a PRF ${flag}\n`), folk),
      [],
    );
});

// ---------------------------------------------------------- scaffolding ----

// Lines taken from pages before the cleanup, one or more per rule.
const SCAFFOLDING: [string, string][] = [
  [
    "body-field-justification",
    "`class: fully-black-box`: The construction invokes the PRG only as an oracle.",
  ],
  [
    "body-field-justification",
    "`class: unstated`: the source does not state which notion of reduction is meant.",
  ],
  [
    "body-field-justification",
    "- `heuristic: true`: a candidate construction, not a theorem.",
  ],
  [
    "body-field-justification",
    "`circumvented-by`: BH26's [[oihf-to-ot-bh26|OIHF ⇒ OT]] is non-black-box.",
  ],
  [
    "body-sourcing-pass",
    "- Sourcing pass (2026-09): the hypothesis was an IND-CPA KEM.",
  ],
  [
    "body-page-history",
    "- The migrated formula omitted the per-encryption random starting counter $r$.",
  ],
  ["body-page-history", '- This file used to record "CDH ⇒ BDH".'],
  [
    "body-page-history",
    "- Hypothesis changed from `lwe` to `ring-lwe`, with title and H1 to match.",
  ],
  [
    "body-slug-history",
    "- The `-gs86` slug suffix is historical; the containment is folklore.",
  ],
  [
    "body-slug-history",
    "- The filename is kept because filenames are live URLs.",
  ],
  [
    "body-reported-not-fixed",
    "- The DPF page states the bound for two servers (reported, not fixed).",
  ],
  [
    "body-suspected-error",
    "- Suspected error on [[key-exchange]]: the page calls the setting information-theoretic.",
  ],
  [
    "body-machine-label",
    "- GENUINELY CONJUNCTIVE: sparse LPN and the linearly homomorphic encryption are both needed.",
  ],
  [
    "body-machine-label",
    "- COLLIDING IDENTIFIERS: hypothesis and conclusion both link into one page.",
  ],
  [
    "body-wiki-state",
    "- learning-subspace-with-noise.md exists only as an unlisted stub (alias LSN).",
  ],
  [
    "body-wiki-state",
    "- `function-secret-sharing` has no page; FSS is defined only in the DPF page.",
  ],
  [
    "body-wiki-state",
    "- The construction is 2-server; the conclusion node does not record the server count.",
  ],
  [
    "body-wiki-state",
    "- Given the counterexample, the schema has no marker for a refuted hypothesis.",
  ],
  [
    "body-wiki-state",
    "- BH26's reduction is non-black-box (`class: free`), outside the class this barrier rules out.",
  ],
  [
    "body-field-justification",
    "- `class: free` because the construction runs the scheme's own decryption circuit.",
  ],
  [
    "body-machine-label",
    "- Conjunctive: the theorem needs both hypotheses, so the edge must not be split.",
  ],
  // Notes about other pages, the review process and the graph's modelling,
  // each a line that survived the first version of the rules.
  [
    "body-wiki-state",
    "- `d-th-composite-residuosity` is a section of [[decisional-composite-residuosity|DCR]], not its own page.",
  ],
  [
    "body-wiki-state",
    "- The IR89 oracle world also contains collision-resistant hash functions, so the separation covers `crhf` too — standard.",
  ],
  [
    "body-wiki-state",
    "- The [[hidden-vector-encryption|HVE]] page's 'strictly implies' also asserts the separation, uncited there.",
  ],
  [
    "body-wiki-state",
    "- The unscoped claim on both parent pages is flagged in the fact-check queue.",
  ],
  [
    "body-wiki-state",
    "- The gloss fails without the padding coin above. Flagged for the skeptical-checker.",
  ],
  [
    "body-wiki-state",
    "- 'Security relies only on collision-resistant hash functions' on succinct-argument over-claims.",
  ],
  [
    "body-wiki-state",
    "- The target model has no parameter fields; the regime survives only in the statement text — a modelling gap.",
  ],
  [
    "body-wiki-state",
    "- These classes have no nodes, so that separation is not recorded as an edge.",
  ],
  [
    "body-wiki-state",
    "- The conclusion is a stateful many-time scheme, so the edge reads as plain digital signatures.",
  ],
  ["body-wiki-state", "- XMSS names a concrete scheme, not a model object."],
  [
    "body-wiki-state",
    "- DGI+19's TDH has rate and correctness-error constraints the edge cannot record.",
  ],
  [
    "body-wiki-state",
    "- The construction factors through Pedersen commitments; split this edge if a Pedersen-commitment node is added.",
  ],
  [
    "body-wiki-state",
    "- The scheme commits to a single bit; length extension is not part of this edge.",
  ],
  [
    "body-wiki-state",
    "- The noise rate and quasi-polynomial hardness are not captured by the flat hypothesis.",
  ],
  [
    "body-wiki-state",
    "- Commitment flavour is not part of the conclusion identifier.",
  ],
  [
    "body-wiki-state",
    "- If that game is generalized to arbitrary primes, change the conclusion to factoring.",
  ],
  [
    "body-wiki-state",
    "- The KP-ABE analogue needs a KP-ABE adaptive-security variant, which does not exist yet.",
  ],
  [
    "body-wiki-state",
    "- The LPN-based and LSN-based constructions are two single-hypothesis reductions (disjunction, not conjunction).",
  ],
  ["body-reading-notes", "- Wee25's abstract names only succinct LWE."],
  [
    "body-reading-notes",
    "- The full text has not been checked for an explicit statement.",
  ],
];

for (const [rule, line] of SCAFFOLDING)
  test(`${rule}: ${line.slice(0, 60)}`, () => {
    const found = (
      bodyContract(page(STATEMENT, NOTES(line)), FM) as Finding[]
    ).filter((x) => x.rule === rule);
    assert.equal(found.length, 1, `expected ${rule} on: ${line}`);
    assert.equal(found[0].line, 10);
  });

test("no scaffolding rule fires on mathematics", () => {
  // Sentences a cryptographer writes, chosen to sit next to each pattern.
  const legit = [
    "A forger yields either a hash collision at a tree node or a one-time forgery.",
    "The IND-CPA KEM and IND-CCA DEM give an IND-CCA PKE; RSAES-OAEP is the RSA instance.",
    "A hybrid replaces $\\Eval(k, \\cdot)$ by a truly random function.",
    "The reduction is generic: it works in any abstract group $\\GG$ of prime order.",
    "First stated in the STOC 1991 extended abstract — [[BRS95 - PP is Closed under Intersection|BRS95]].",
    "The scheme of [[XYZ20 - Migration-Resilient Keys and the Slug Lemma|XYZ20]] is tight.",
    "Merkle's puzzles are described on [Wikipedia](https://en.wikipedia.org/wiki/Merkle%27s_Puzzles).",
    "The receiver aborts when the tag does not verify; otherwise it outputs $m$.",
    "Proved at USENIX SECURITY 2022 for the honest-majority setting.",
    "The converse is open; $\\classPSPACE$-hardness would follow from $\\classAM \\subseteq \\classcoAM$.",
    "Tightness: the loss is a factor $q$ in the number of signing queries, and Coron's bound shows it is optimal.",
    "In the CPA game, the oracle $\\calO_b$ previously sampled $r$; it is reused.",
    "The verifier checks $e(\\sigma, g) = e(H(m), \\pk)$.",
    // Lazy sampling, graph arguments, trees, and the language of literature.
    "On a repeated query the random oracle returns the previously recorded answer.",
    "The table used to record the queries has $q$ rows.",
    "Updatable encryption supports key migration without decrypting.",
    "The verifier picks a random edge; the edge must carry distinct colors, and a simulator guesses the challenged edge.",
    "A non-3-colorable graph has a monochromatic edge.",
    "Standard-model OIHFs are known only from Cryptomania assumptions, so this edge does not by itself place OT in Minicrypt.",
    "Each node of the GGM tree holds a seed, and a leaf node holds the output.",
    "The result is stated in the Abstract Cryptography framework of Maurer and Renner.",
    "No construction from LWE exists yet; the converse is open.",
    "Bulletproofs halve the communication of the inner-product argument.",
    "Recording a stronger class would overstate the result.",
    "The claim was retracted by the authors; only the non-adaptive result stands.",
    "Theorem 4.2 on page 17 of the full version gives the tight bound.",
  ];
  for (const line of legit)
    assert.deepEqual(rules(page(STATEMENT, NOTES(`- ${line}`))), [], line);
  // Inline math and code fences are not prose.
  assert.deepEqual(
    rules(
      page(
        STATEMENT,
        NOTES("- The map $\\mathsf{MIGRATE KEYS}$ is linear — folklore."),
      ),
    ),
    [],
  );
});

// ------------------------------------------------------- final-form docs ----

const parse = (src: string) => matter(src);

for (const t of ["Reduction", "Barrier"])
  test(`content/Templates/${t}.md is in final form`, () => {
    const file = path.join(ROOT, "content", "Templates", `${t}.md`);
    const { data, content } = parse(fs.readFileSync(file, "utf8"));
    assert.equal(data.type, t.toLowerCase());
    assert.deepEqual(bodyContract(content, data), []);
    assert.deepEqual(rationaleProblems(data), []);
  });

test("CONTRIBUTING.md's reduction and barrier examples are in final form", () => {
  const doc = fs.readFileSync(path.join(ROOT, "CONTRIBUTING.md"), "utf8");
  const blocks = [...doc.matchAll(/^(`{3,})markdown\n([\s\S]*?)^\1$/gm)]
    .map((m) => parse(m[2]))
    .filter((b) => b.data.type === "reduction" || b.data.type === "barrier");
  assert.deepEqual(blocks.map((b) => b.data.type).sort(), [
    "barrier",
    "reduction",
  ]);
  for (const b of blocks) {
    assert.deepEqual(bodyContract(b.content, b.data), [], b.data.title);
    assert.deepEqual(rationaleProblems(b.data), [], b.data.title);
    assert.ok(b.data.rationale, `${b.data.title} shows a rationale`);
  }
});

// ------------------------------------------------------------ rationale ----

const codes = (fm: Record<string, unknown>) =>
  (rationaleProblems(fm) as { code: string; field?: string }[]).map((p) =>
    p.field ? `${p.code}:${p.field}` : p.code,
  );
const RED = {
  type: "reduction",
  class: "fully-black-box",
  model: "rom",
  "security-loss": "",
};

test("rationale: a mapping from fields the page sets to one-line sentences", () => {
  assert.deepEqual(codes(RED), []);
  assert.deepEqual(
    codes({
      ...RED,
      rationale: {
        class: "The reduction runs the adversary only as an oracle.",
        "security-loss": "The hybrid has one step per query.",
      },
    }),
    [],
  );
  assert.deepEqual(codes({ ...RED, rationale: "because" }), ["not-mapping"]);
  assert.deepEqual(codes({ ...RED, rationale: ["class"] }), ["not-mapping"]);
  assert.deepEqual(codes({ ...RED, rationale: {} }), ["empty-mapping"]);
  assert.deepEqual(codes({ type: "primitive", rationale: { class: "x" } }), [
    "wrong-type",
  ]);
});

test("rationale: keys name a field of this page type that the page sets", () => {
  assert.deepEqual(codes({ ...RED, rationale: { strength: "x." } }), [
    "unknown-field:strength",
  ]);
  assert.deepEqual(codes({ ...RED, rationale: { id: "x." } }), [
    "unknown-field:id",
  ]);
  // The endpoints take no rationale, even though the page sets them: a remark
  // about them a reader needs is a Notes bullet.
  assert.deepEqual(
    codes({ ...RED, hypotheses: ["prg"], rationale: { hypotheses: "x." } }),
    ["unknown-field:hypotheses"],
  );
  assert.deepEqual(codes({ ...RED, rationale: { via: "x." } }), [
    "absent-field:via",
  ]);
  // `via:` with no value parses as null and counts as absent.
  assert.deepEqual(codes({ ...RED, via: null, rationale: { via: "x." } }), [
    "absent-field:via",
  ]);
  const bar = {
    type: "barrier",
    class: "relativizing",
    strength: "unconditional",
  };
  assert.deepEqual(codes({ ...bar, rationale: { model: "x." } }), [
    "unknown-field:model",
  ]);
  assert.deepEqual(
    codes({
      ...bar,
      "circumvented-by": ["red-oihf-to-ot-bh26"],
      rationale: { "circumvented-by": "x." },
    }),
    ["unknown-field:circumvented-by"],
  );
  assert.deepEqual(
    codes({ ...bar, rationale: { strength: "No assumption." } }),
    [],
  );
});

test("rationale: values are non-empty, single-line, TODO-free, never stock", () => {
  const r = (v: unknown) => codes({ ...RED, rationale: { class: v } });
  assert.deepEqual(r(""), ["empty:class"]);
  assert.deepEqual(r("  "), ["empty:class"]);
  assert.deepEqual(r(3), ["not-string:class"]);
  assert.deepEqual(r("One line.\nAnother line."), ["multiline:class"]);
  assert.deepEqual(r("TODO: check the proof."), ["todo:class"]);
  assert.deepEqual(
    r("The source does not state which notion of reduction is meant."),
    ["stock:class"],
  );
  assert.deepEqual(
    r(
      "An unconditional containment between complexity classes; the reduction-class axis does not apply.",
    ),
    ["stock:class"],
  );
  // History, review labels and reading notes do not move into a rationale.
  assert.deepEqual(
    r("Sourcing pass (2026-09): the class was fully-black-box."),
    ["scaffolding:class"],
  );
  assert.deepEqual(r("The full text could not be checked."), [
    "scaffolding:class",
  ]);
  assert.deepEqual(r("The -gs86 slug suffix is historical."), [
    "scaffolding:class",
  ]);
  // Describing the graph is what a rationale is for.
  assert.deepEqual(
    r(
      "STARKs are a variant of the succinct-argument node, and BBHR18's proof runs any prover only as an oracle.",
    ),
    [],
  );
});

test("rationaleRecord: record field names, record order, omitted when absent", () => {
  assert.equal(rationaleRecord(RED), undefined);
  assert.equal(rationaleRecord({ ...RED, rationale: {} }), undefined);
  const rec = rationaleRecord({
    ...RED,
    rationale: {
      "security-loss": "  One hybrid per query. ",
      model: "Programs the oracle.",
      class: "Oracle use only.",
    },
  });
  assert.deepEqual(rec, {
    class: "Oracle use only.",
    model: "Programs the oracle.",
    securityLoss: "One hybrid per query.",
  });
  assert.deepEqual(Object.keys(rec), ["class", "model", "securityLoss"]);
  const bar = rationaleRecord({
    type: "barrier",
    rationale: { source: "x", "conditional-on": "y", oracle: "z" },
  });
  assert.deepEqual(Object.keys(bar), ["conditionalOn", "oracle", "source"]);
  // The keys are the contract's typing fields, never an endpoint or the id.
  assert.deepEqual(Object.keys(RATIONALE_FIELDS.reduction), [
    "kind",
    "class",
    "model",
    "source",
    "via",
    "heuristic",
    "security-loss",
  ]);
  assert.deepEqual(Object.keys(RATIONALE_FIELDS.barrier), [
    "class",
    "strength",
    "conditional-on",
    "oracle",
    "source",
  ]);
});

test("edge-rationale-class: a recorded class says why, except the stock free containment", () => {
  const { classes } = loadClasses(ROOT);
  const types: Record<string, string> = {
    ip: "complexity-class",
    pspace: "complexity-class",
    dlog: "assumption",
    np: "complexity-class",
    prg: "primitive",
    prf: "primitive",
  };
  const edge = (id: string, fm: Record<string, unknown>) => ({
    file: `content/Reductions/${id}.md`,
    fm: { type: "reduction", kind: "implication", id, ...fm },
  });
  const pages = [
    edge("ggm", {
      hypotheses: ["prg"],
      conclusion: "prf",
      class: "fully-black-box",
    }),
    edge("ggm-why", {
      hypotheses: ["prg"],
      conclusion: "prf",
      class: "fully-black-box",
      rationale: { class: "Oracle use only." },
    }),
    edge("unstated", {
      hypotheses: ["prg"],
      conclusion: "prf",
      class: "unstated",
    }),
    edge("ip-pspace", {
      kind: "inclusion",
      hypotheses: ["ip"],
      conclusion: "pspace",
      class: "free",
    }),
    edge("dlog-np", {
      kind: "inclusion",
      hypotheses: ["dlog"],
      conclusion: "np",
      class: "free",
    }),
    edge("bootstrapping", {
      hypotheses: ["prg"],
      conclusion: "prf",
      class: "free",
    }),
    {
      file: "content/Barriers/b.md",
      fm: {
        type: "barrier",
        hypotheses: ["prg"],
        conclusion: "prf",
        class: "relativizing",
      },
    },
  ];
  const found = (
    unjustifiedClasses(pages, classes, (id: string) => types[id]) as {
      page: { fm: { id?: string; type: string } };
      class: string;
    }[]
  ).map((x) => `${x.page.fm.id ?? x.page.fm.type}:${x.class}`);
  assert.deepEqual(found, [
    "ggm:fully-black-box",
    "bootstrapping:free",
    "barrier:relativizing",
  ]);
});

test("relations.json carries each page's rationale, and only that", () => {
  const relations = JSON.parse(
    fs.readFileSync(path.join(ROOT, ".reductions", "relations.json"), "utf8"),
  );
  const byPage = new Map<string, Record<string, unknown>>();
  for (const e of [...relations.reductions, ...relations.barriers])
    byPage.set(e.page, e);
  for (const dir of ["Reductions", "Barriers"])
    for (const f of fs.readdirSync(path.join(ROOT, "content", dir))) {
      if (!f.endsWith(".md")) continue;
      const rel = `content/${dir}/${f}`;
      const { data } = parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
      const record = byPage.get(rel);
      assert.ok(record, `${rel} is in relations.json`);
      const want = rationaleRecord(data);
      if (want === undefined)
        assert.ok(!("rationale" in record!), `${rel}: no rationale key`);
      else assert.deepEqual(record!.rationale, want, rel);
    }
});
