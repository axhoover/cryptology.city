import test from "node:test";
import assert from "node:assert";
import path from "node:path";
// @ts-ignore — plain ESM helpers shared with scripts/lint.mjs
import { loadClasses } from "../scripts/reduction-classes.mjs";
import {
  hyperKey,
  undecidedConflicts,
  sharedVariantAnchors,
  unresolvedConsequenceTargets,
  believedConsequences,
  // @ts-ignore
} from "../scripts/lint-edges.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const { classes } = loadClasses(ROOT);

const page = (file: string, fm: Record<string, unknown>) => ({ file, fm });
const reduction = (id: string, fm: Record<string, unknown>) =>
  page(`content/Reductions/${id}.md`, { type: "reduction", id, ...fm });
const barrier = (id: string, fm: Record<string, unknown>) =>
  page(`content/Barriers/${id}.md`, { type: "barrier", id, ...fm });
const contradiction = (cls: string) => [
  { kind: "contradiction", target: "", class: cls },
];

test("the hyperedge key is the hypothesis set, not the list", () => {
  assert.equal(
    hyperKey({ hypotheses: ["ddh", "crhf"], conclusion: "pke" }),
    hyperKey({ hypotheses: ["crhf", "ddh"], conclusion: "pke" }),
  );
  assert.notEqual(
    hyperKey({ hypotheses: ["pke"], conclusion: "ot" }),
    hyperKey({ hypotheses: ["ot"], conclusion: "pke" }),
  );
});

test("barrier-conflict-unstated: an unstated class on a shared hyperedge is reported", () => {
  // The pke-to-ot / no-pke-to-ot-gkm-00 shape: a reduction with no class next
  // to a fully-black-box barrier passed the contradiction check silently.
  const r = reduction("red-pke-to-ot", {
    hypotheses: ["pke"],
    conclusion: "ot",
    class: "unstated",
  });
  const b = barrier("bar-pke-to-ot-gkm-00", {
    hypotheses: ["pke"],
    conclusion: "ot",
    class: "fully-black-box",
    consequences: contradiction("fully-black-box"),
  });
  const found = undecidedConflicts([r, b], classes);
  assert.equal(found.length, 1);
  assert.equal(found[0].reduction, r);
  assert.equal(found[0].barrier, b);
  assert.deepEqual(found[0].ruledOut, ["fully-black-box"]);

  // The other side unstated: a classed reduction next to an unstated barrier.
  const r2 = reduction("red-x-to-y", {
    hypotheses: ["x"],
    conclusion: "y",
    class: "fully-black-box",
  });
  const b2 = barrier("bar-x-to-y", {
    hypotheses: ["x"],
    conclusion: "y",
    class: "unstated",
    consequences: [{ kind: "contradiction", target: "" }],
  });
  assert.equal(undecidedConflicts([r2, b2], classes).length, 1);
});

test("barrier-conflict-unstated: decided, reconciled and unrelated pairs are not reported", () => {
  const b = barrier("bar-oihf-to-ot", {
    hypotheses: ["oihf"],
    conclusion: "ot",
    class: "fully-black-box",
    consequences: contradiction("fully-black-box"),
  });
  // Both classes stated: the contradiction check decides this pair.
  const decided = reduction("red-oihf-to-ot", {
    hypotheses: ["oihf"],
    conclusion: "ot",
    class: "free",
  });
  assert.deepEqual(undecidedConflicts([decided, b], classes), []);

  // Listed in circumvented-by: the barrier already says how they coexist.
  const circumventing = reduction("red-oihf-to-ot-nbb", {
    hypotheses: ["oihf"],
    conclusion: "ot",
    class: "unstated",
  });
  const b2 = {
    ...b,
    fm: { ...b.fm, "circumvented-by": ["red-oihf-to-ot-nbb"] },
  };
  assert.deepEqual(undecidedConflicts([circumventing, b2], classes), []);

  // A heuristic candidate is no theorem, so no barrier can contradict it.
  const candidate = reduction("red-oihf-to-ot-candidate", {
    hypotheses: ["oihf"],
    conclusion: "ot",
    class: "unstated",
    heuristic: true,
  });
  assert.deepEqual(undecidedConflicts([candidate, b], classes), []);

  // A different hyperedge is never compared.
  const elsewhere = reduction("red-oihf-to-pke", {
    hypotheses: ["oihf"],
    conclusion: "pke",
    class: "unstated",
  });
  assert.deepEqual(undecidedConflicts([elsewhere, b], classes), []);
});

test("variant-shared-anchor: two variant ids on one anchor are reported once", () => {
  const p = page("content/Assumptions/evasive-lwe.md", {
    type: "assumption",
    id: "evasive-lwe",
    variants: {
      "private-coin-evasive-lwe": "#private-coin-evasive-lwe",
      "evasive-lwe-private-coin": { anchor: "#Private-Coin-Evasive-LWE" },
      "circular-evasive-lwe": "#circular-evasive-lwe",
    },
  });
  const found = sharedVariantAnchors([p]);
  assert.equal(found.length, 1);
  assert.deepEqual(found[0].ids, [
    "private-coin-evasive-lwe",
    "evasive-lwe-private-coin",
  ]);

  const distinct = page("content/Assumptions/lwe.md", {
    type: "assumption",
    id: "lwe",
    variants: { "ring-lwe": "#ring-lwe", "module-lwe": "#module-lwe" },
  });
  assert.deepEqual(sharedVariantAnchors([distinct]), []);
  // The same anchor on two different pages is two sections, not a synonym.
  const other = page("content/Assumptions/other.md", {
    type: "assumption",
    id: "other",
    variants: { "other-ring-lwe": "#ring-lwe" },
  });
  assert.deepEqual(sharedVariantAnchors([distinct, other]), []);
});

test("consequence targets resolve for their kind", () => {
  const objectIds = new Set(["ot", "oblivious-interactive-hash-function"]);
  const variantIds = new Set(["ring-lwe"]);
  const objects = new Set([...objectIds, ...variantIds]);
  const reductionIds = new Set(["red-oihf-to-ot-bh26"]);

  // The no-oihf-to-ot-bh26 shape: a `kind: reduction` target naming no page.
  const bad = barrier("bar-oihf-to-ot-bh26", {
    hypotheses: ["oblivious-interactive-hash-function"],
    conclusion: "ot",
    consequences: [
      { kind: "reduction", target: "ot-from-oihf-non-black-box" },
      { kind: "object", target: "no-such-object" },
      { kind: "reduction", target: "ot" }, // an object id is not a reduction id
    ],
  });
  const found = unresolvedConsequenceTargets([bad], objects, reductionIds);
  assert.deepEqual(
    found.map((f: { index: number; kind: string; target: string }) => [
      f.index,
      f.kind,
      f.target,
    ]),
    [
      [0, "reduction", "ot-from-oihf-non-black-box"],
      [1, "object", "no-such-object"],
      [2, "reduction", "ot"],
    ],
  );

  const good = barrier("bar-good", {
    hypotheses: ["ot"],
    conclusion: "ring-lwe",
    consequences: [
      { kind: "reduction", target: "red-oihf-to-ot-bh26" },
      { kind: "object", target: "ot" },
      { kind: "object", target: "ring-lwe" }, // a variant id resolves
      { kind: "contradiction", target: "" },
      { kind: "complexity", target: "p-neq-np" }, // checked elsewhere
    ],
  });
  assert.deepEqual(
    unresolvedConsequenceTargets([good], objects, reductionIds),
    [],
  );
});

test("barrier-believed-consequence: a believed-true complexity target is reported", () => {
  const propositions = {
    "szk-neq-bpp": { title: "SZK != BPP", believed: true },
    "np-complete-in-szk": {
      title: "Some NP-complete problem lies in SZK",
      believed: false,
    },
  };
  // The no-he-to-szk-bl13 shape before its fix.
  const b = barrier("bar-he-to-szk-bl13", {
    hypotheses: ["np"],
    conclusion: "he",
    consequences: [
      { kind: "complexity", target: "np-complete-in-szk", class: "unstated" },
      { kind: "complexity", target: "szk-neq-bpp", class: "unstated" },
    ],
  });
  const found = believedConsequences([b], propositions);
  assert.equal(found.length, 1);
  assert.equal(found[0].index, 1);
  assert.equal(found[0].target, "szk-neq-bpp");

  // Believed-false targets, contradictions and unknown keys are not this
  // check's business.
  const fine = barrier("bar-fine", {
    hypotheses: ["np"],
    conclusion: "he",
    consequences: [
      { kind: "complexity", target: "np-complete-in-szk" },
      { kind: "contradiction", target: "" },
      { kind: "complexity", target: "constructor" },
    ],
  });
  assert.deepEqual(believedConsequences([fine], propositions), []);
});
