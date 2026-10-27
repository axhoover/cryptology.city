import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
// @ts-ignore — plain ESM helpers shared with scripts/generate-relations.mjs
import { closure, scopeNames } from "../scripts/closure.mjs";
// @ts-ignore
import * as rc from "../scripts/reduction-classes.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const { classes } = rc.loadClasses(ROOT);
const relativizes = (cls: string) =>
  cls === "relativizing" ||
  (classes[cls] !== undefined && rc.closure(classes, cls).has("relativizing"));

type Red = {
  id: string;
  hypotheses: string[];
  conclusion: string;
  class?: string;
  model?: string;
  kind?: string;
  heuristic?: boolean;
};
const red = (
  id: string,
  hypotheses: string[],
  conclusion: string,
  extra: Partial<Red> = {},
): Red => ({
  id,
  hypotheses,
  conclusion,
  class: "fully-black-box",
  model: "standard",
  ...extra,
});

const run = (reds: Red[], seed: string[]) =>
  closure(reds, seed, { relativizes });
const scopesOf = (r: any, x: string) =>
  (r.scopes.get(x) ?? []).map((m: number) => scopeNames(m).join("+"));

const fixture = [
  red("ggm-to-cdh", ["ggm"], "cdh", { class: "free", model: "generic-group" }),
  red("cdh-to-ibe", ["cdh"], "ibe", { class: "free" }),
  red("cdh-to-pke", ["cdh"], "pke"),
  red("pke-to-owf", ["pke"], "owf", { class: "unstated" }),
  red("dlog-to-sig", ["dlog"], "sig", { model: "rom" }),
  red("sig-to-owf", ["sig"], "owf"),
];

test("a generic-group object feeds black-box edges but not non-black-box ones", () => {
  const r = run(fixture, ["ggm"]);
  assert.deepEqual(scopesOf(r, "cdh"), ["generic-group"]);
  assert.deepEqual(scopesOf(r, "pke"), ["generic-group"]);
  assert.ok(
    !r.derived.has("ibe"),
    "free CDH => IBE must not fire on generic-group CDH",
  );
  assert.ok(
    !r.derived.has("owf"),
    "unstated PKE => OWF must not fire on a scoped PKE",
  );
});

test("standard-model objects still feed every edge", () => {
  const r = run(fixture, ["cdh"]);
  assert.deepEqual(scopesOf(r, "ibe"), [""]);
  assert.deepEqual(scopesOf(r, "owf"), [""]);
});

test("an edge proved in an idealised model scopes its conclusion", () => {
  const r = run(fixture, ["dlog"]);
  assert.deepEqual(scopesOf(r, "sig"), ["rom"]);
  assert.deepEqual(scopesOf(r, "owf"), ["rom"]);
});

test("a standard derivation supersedes a scoped one", () => {
  const r = run(fixture, ["dlog", "cdh"]);
  assert.deepEqual(scopesOf(r, "owf"), [""]);
});

test("scopes of several hypotheses are joined", () => {
  const reds = [
    red("a", ["ggm"], "x", { class: "free", model: "generic-group" }),
    red("b", ["s"], "y", { model: "rom" }),
    red("c", ["x", "y"], "z"),
    red("d", ["x", "y"], "w", { class: "unstated" }),
  ];
  const r = run(reds, ["ggm", "s"]);
  assert.deepEqual(scopesOf(r, "z"), ["generic-group+rom"]);
  assert.ok(!r.derived.has("w"));
});

test("a hybrid-model scope is kept through relativizing edges", () => {
  const reds = [
    red("kil88", ["ideal-ot"], "2pc", { class: "free" }),
    red("2pc-to-mot", ["2pc"], "mot"),
    red("mot-use", ["mot"], "x", { class: "unstated" }),
    red("dealer", ["correlated-randomness"], "uc"),
    red("uc-to-mpc", ["uc"], "mpc"),
  ];
  const r = run(reds, ["ideal-ot", "correlated-randomness"]);
  assert.deepEqual(scopesOf(r, "2pc"), ["ideal-ot"]);
  assert.deepEqual(scopesOf(r, "mot"), ["ideal-ot"]);
  assert.ok(
    !r.derived.has("x"),
    "an unstated edge must not consume [ideal-ot]",
  );
  assert.deepEqual(scopesOf(r, "uc"), ["correlated-randomness"]);
  assert.deepEqual(scopesOf(r, "mpc"), ["correlated-randomness"]);
  const plain = run(reds, ["2pc"]);
  assert.deepEqual(scopesOf(plain, "mot"), [""]);
});

test("equivalences run both ways and heuristic edges never fire", () => {
  const reds = [
    red("e", ["a"], "b", { kind: "equivalence" }),
    red("h", ["b"], "c", { heuristic: true }),
  ];
  const r = run(reds, ["b"]);
  assert.ok(r.derived.has("a"));
  assert.ok(!r.derived.has("c"));
});

// Regression checks on the committed manifest.
const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, ".reductions", "relations.json"), "utf8"),
);
const live = (seed: string[]) =>
  closure(manifest.reductions, seed, { relativizes });

test("generic-group CDH does not give IBE through DG17a", () => {
  const r = live(["ggm"]);
  assert.ok(scopesOf(r, "cdh").includes("generic-group"));
  for (const x of ["ind-id-cpa", "ibe"])
    assert.ok(!r.derived.has(x), `ggm must not derive ${x}`);
});

test("standard-model CDH and DDH still give IND-ID-CPA IBE", () => {
  for (const s of ["cdh", "ddh"])
    assert.ok(
      scopesOf(live([s]), "ind-id-cpa").includes(""),
      `${s} => ind-id-cpa`,
    );
});

test("the random oracle does not give key exchange (HMO19)", () => {
  assert.ok(!live(["rom"]).derived.has("ke"));
});

test("a model outside standard, crs and quantum fails closed", () => {
  const reds = [
    red("grm", ["fac"], "rsa", { model: "other" }),
    red("use", ["rsa"], "pke", { class: "unstated" }),
    red("bb", ["rsa"], "owf"),
    red("q", ["fac"], "bqp", { model: "quantum", class: "free" }),
    red("c", ["ddh"], "nizk", { model: "crs", class: "unstated" }),
  ];
  const r = run(reds, ["fac", "ddh"]);
  assert.deepEqual(scopesOf(r, "rsa"), ["other"]);
  assert.ok(
    !r.derived.has("pke"),
    "an unstated edge must not consume rsa [other]",
  );
  assert.deepEqual(scopesOf(r, "owf"), ["other"]);
  assert.deepEqual(scopesOf(r, "bqp"), [""]);
  assert.deepEqual(scopesOf(r, "nizk"), [""]);
});

test("factoring hardness does not give unscoped RSA hardness (DLO24 is generic-ring)", () => {
  assert.ok(!scopesOf(live(["fac"]), "rsa").includes(""));
  assert.ok(
    scopesOf(live(["rsa"]), "fac").includes(""),
    "RSA => FAC stays unscoped",
  );
});

test("results from ideal resources keep their hybrid scope", () => {
  const cr = live(["correlated-randomness"]);
  assert.deepEqual(scopesOf(cr, "mpc"), ["correlated-randomness"]);
  const ips = live(["ideal-ot", "prg"]);
  assert.deepEqual(scopesOf(ips, "mpc"), ["ideal-ot"]);
  // No chain through an ideal resource yields an unscoped object.
  const prgOnly = live(["prg"]).derived;
  for (const [seed, res] of [
    [["correlated-randomness"], cr],
    [["ideal-ot"], live(["ideal-ot"])],
    [["ideal-ot", "prg"], ips],
  ] as [string[], any][])
    for (const x of res.derived) {
      if (seed.includes(x) || (seed.includes("prg") && prgOnly.has(x)))
        continue;
      assert.ok(
        !scopesOf(res, x).includes(""),
        `${seed.join(",")} => ${x} unscoped`,
      );
    }
});
