import test from "node:test";
import assert from "node:assert";
import {
  makeParticipatesIn,
  MODEL_PAGES,
  // @ts-ignore — plain ESM helper shared with scripts/generate-relations.mjs
} from "../scripts/participates-in.mjs";

type Obj = Record<string, unknown> & { id: string };
const obj = (id: string, slug: string, title: string, aliases: string[] = []) =>
  ({ id, kind: "object", slug, title, aliases }) as Obj;
const variant = (id: string, of: string, slug: string, anchor: string) =>
  ({ id, kind: "variant", of, slug, anchor, title: id, aliases: [] }) as Obj;
const red = (id: string, fm: Record<string, unknown>) => ({
  id: `red-${id}`,
  slug: id,
  title: id,
  hypotheses: [],
  model: "standard",
  via: [],
  ...fm,
});
const bar = (id: string, fm: Record<string, unknown>) => ({
  id: `bar-${id}`,
  slug: id,
  title: id,
  hypotheses: [],
  circumventedBy: [],
  ...fm,
});

const objects = new Map(
  [
    obj("pke", "public-key-encryption", "Public-key encryption"),
    variant("pke-cpa", "pke", "public-key-encryption", "#cpa-security"),
    variant("pke-cca1", "pke", "public-key-encryption", "#cca1-security"),
    variant("pke-cca2", "pke", "public-key-encryption", "#cca-security"),
    obj("lwe", "learning-with-errors", "Learning with errors"),
    obj("ot", "oblivious-transfer", "Oblivious transfer"),
    obj("rom", "random-oracle-model", "Random Oracle Model", ["ROM"]),
    obj("ggm", "generic-group-model", "Generic Group Model"),
    obj("fiat-shamir", "fiat-shamir-heuristic", "Fiat-Shamir Heuristic", [
      "Fiat-Shamir",
    ]),
    obj("ds", "digital-signature", "Digital signature"),
    obj("lonely", "lonely", "Lonely"),
  ].map((o) => [o.id, o]),
);

const reductions = [
  red("lwe-to-pke", { hypotheses: ["lwe"], conclusion: "pke" }),
  red("lwe-to-pke-cca", { hypotheses: ["lwe"], conclusion: "pke-cca2" }),
  red("cca1-to-cpa", { hypotheses: ["pke-cca1"], conclusion: "pke-cpa" }),
  red("pke-and-cpa-to-ot", {
    hypotheses: ["pke-cpa", "pke"],
    conclusion: "ot",
  }),
  red("pke-to-ot", { hypotheses: ["pke"], conclusion: "ot" }),
  red("rom-to-x", { hypotheses: ["rom"], conclusion: "ot", model: "rom" }),
  red("lwe-to-ds-rom", { hypotheses: ["lwe"], conclusion: "ds", model: "rom" }),
  red("id-to-ds", {
    hypotheses: ["pke"],
    conclusion: "ds",
    model: "rom",
    via: ["[[fiat-shamir-heuristic|Fiat–Shamir]]"],
  }),
  red("id-to-ds-alias", {
    hypotheses: ["lwe"],
    conclusion: "ds",
    via: ["[[Fiat-Shamir#the-transform|FS]]"],
  }),
  red("lwe-to-ds-crs", { hypotheses: ["lwe"], conclusion: "ds", model: "crs" }),
];
const barriers = [
  bar("no-cpa-to-cca1", { hypotheses: ["pke-cpa"], conclusion: "pke-cca1" }),
  bar("no-pke-to-ot", {
    hypotheses: ["pke"],
    conclusion: "ot",
    circumventedBy: ["red-pke-to-ot"],
  }),
];

const render = makeParticipatesIn({ objects, reductions, barriers });

// The bullets under one bold heading, or null when the heading is absent.
const under = (out: string, heading: string) => {
  const blocks = out.split(/\n(?=\*\*)/);
  const block = blocks.find((b) => b.startsWith(`**${heading}**`));
  return block
    ? block
        .split("\n")
        .filter((l) => l.startsWith("- "))
        .map((l) => l.slice(2))
    : null;
};

test("an edge on the page's own id is listed with no annotation", () => {
  const out = render("pke");
  assert.ok(out.startsWith("## Participates in\n"));
  assert.ok(
    under(out, "Produces Public-key encryption")?.includes(
      "[[lwe-to-pke|lwe-to-pke]]",
    ),
  );
  // The page's own id is also a hypothesis beside a variant: no "via".
  assert.ok(
    under(out, "Builds on Public-key encryption")?.includes(
      "[[pke-and-cpa-to-ot|pke-and-cpa-to-ot]]",
    ),
  );
});

test("an edge reached only through a variant is listed and names the variant", () => {
  const out = render("pke");
  assert.deepEqual(under(out, "Builds on Public-key encryption"), [
    "[[cca1-to-cpa|cca1-to-cpa]] (via [[public-key-encryption#cca1-security|pke-cca1]])",
    "[[id-to-ds|id-to-ds]]",
    "[[pke-and-cpa-to-ot|pke-and-cpa-to-ot]]",
    "[[pke-to-ot|pke-to-ot]]",
  ]);
  assert.deepEqual(under(out, "Produces Public-key encryption"), [
    "[[cca1-to-cpa|cca1-to-cpa]] (via [[public-key-encryption#cpa-security|pke-cpa]])",
    "[[lwe-to-pke|lwe-to-pke]]",
    "[[lwe-to-pke-cca|lwe-to-pke-cca]] (via [[public-key-encryption#cca-security|pke-cca2]])",
  ]);
});

test("a barrier between two variants names both, sorted, before any circumvention", () => {
  assert.deepEqual(under(render("pke"), "Barriers"), [
    "[[no-cpa-to-cca1|no-cpa-to-cca1]] (via [[public-key-encryption#cca1-security|pke-cca1]], [[public-key-encryption#cpa-security|pke-cpa]])",
    "[[no-pke-to-ot|no-pke-to-ot]] — circumvented by [[pke-to-ot|pke-to-ot]]",
  ]);
});

test("Proved in: reductions whose model is defined on the page, not repeated from Builds on", () => {
  assert.equal(MODEL_PAGES.rom, "rom");
  assert.equal(MODEL_PAGES["generic-group"], "ggm");
  assert.equal(MODEL_PAGES["algebraic-group"], "agm");
  const out = render("rom");
  assert.deepEqual(under(out, "Builds on Random Oracle Model"), [
    "[[rom-to-x|rom-to-x]]",
  ]);
  assert.deepEqual(under(out, "Proved in the Random Oracle Model"), [
    "[[id-to-ds|id-to-ds]]",
    "[[lwe-to-ds-rom|lwe-to-ds-rom]]",
  ]);
  // A model with no page of its own (crs) adds no heading anywhere, and a
  // model page with no edges in its model gets no section.
  for (const id of objects.keys())
    assert.ok(!(render(id) ?? "").includes("**Proved in the Learning"));
  assert.equal(render("ggm"), null);
});

test("Used via: reductions whose via links to the page, by slug or alias, with or without an anchor", () => {
  const out = render("fiat-shamir");
  assert.deepEqual(under(out, "Used via Fiat-Shamir Heuristic"), [
    "[[id-to-ds|id-to-ds]]",
    "[[id-to-ds-alias|id-to-ds-alias]]",
  ]);
  assert.equal(under(out, "Builds on Fiat-Shamir Heuristic"), null);
});

test("no reduction is listed twice in one region: Used via skips what Proved in lists", () => {
  const out = makeParticipatesIn({
    objects,
    reductions: [
      red("rom-via-rom", {
        hypotheses: ["lwe"],
        conclusion: "ds",
        model: "rom",
        via: ["[[random-oracle-model]]"],
      }),
    ],
    barriers: [],
  })("rom");
  assert.deepEqual(under(out, "Proved in the Random Oracle Model"), [
    "[[rom-via-rom|rom-via-rom]]",
  ]);
  assert.equal(under(out, "Used via Random Oracle Model"), null);
});

test("headings come in a fixed order and a page with no edges gets no section", () => {
  const out = render("pke");
  const headings = [...out.matchAll(/^\*\*(.+)\*\*$/gm)].map((m) => m[1]);
  assert.deepEqual(headings, [
    "Builds on Public-key encryption",
    "Produces Public-key encryption",
    "Barriers",
  ]);
  const rom = [...render("rom").matchAll(/^\*\*(.+)\*\*$/gm)].map((m) => m[1]);
  assert.deepEqual(rom, [
    "Builds on Random Oracle Model",
    "Proved in the Random Oracle Model",
  ]);
  assert.equal(render("lonely"), null);
});

test("the output depends on the graph, not on the order it was loaded in", () => {
  const shuffled = makeParticipatesIn({
    objects: new Map([...objects].reverse()),
    reductions: [...reductions].reverse(),
    barriers: [...barriers].reverse(),
  });
  for (const id of objects.keys()) assert.equal(shuffled(id), render(id));
});
