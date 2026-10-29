import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
// @ts-ignore — plain ESM helpers shared with scripts/generate-relations.mjs
import { closure, scopeNames, protocolNodes } from "../scripts/closure.mjs";
// @ts-ignore
import { HYBRID_RESOURCES } from "../scripts/closure.mjs";
// @ts-ignore
import { bilinearNodes } from "../scripts/closure.mjs";
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
  model?: string | string[];
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
  assert.deepEqual(scopesOf(r, "cdh"), ["generic-group+no-pairing"]);
  assert.deepEqual(scopesOf(r, "pke"), ["generic-group+no-pairing"]);
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
  assert.deepEqual(scopesOf(r, "z"), ["generic-group+rom+no-pairing"]);
  assert.ok(!r.derived.has("w"));
});

test("an edge proved in several models scopes its conclusion to all of them", () => {
  const reds = [
    red("plonk", ["bilinear-pairing", "q-dlog"], "usnark", {
      model: ["algebraic-group", "rom"] as any,
    }),
    red("u-to-s", ["usnark"], "snark"),
  ];
  const r = run(reds, ["bilinear-pairing", "q-dlog"]);
  assert.deepEqual(scopesOf(r, "usnark"), ["rom+algebraic-group"]);
  assert.deepEqual(scopesOf(r, "snark"), ["rom+algebraic-group"]);
});

test("a hybrid-model scope is kept through protocol notions only", () => {
  const reds = [
    red("kil88", ["ideal-ot"], "2pc", { class: "free" }),
    red("2pc-to-mot", ["2pc"], "mot"),
    red("mot-to-com", ["mot"], "com"),
    red("mot-use", ["mot"], "x", { class: "unstated" }),
    red("dealer", ["correlated-randomness"], "uc"),
    red("uc-to-mpc", ["uc"], "mpc"),
  ];
  const r = closure(reds, ["ideal-ot", "correlated-randomness"], {
    relativizes,
    protocol: new Set(["2pc", "mot", "uc", "mpc"]),
  });
  assert.deepEqual(scopesOf(r, "2pc"), ["ideal-ot"]);
  assert.deepEqual(scopesOf(r, "mot"), ["ideal-ot"]);
  assert.ok(!r.derived.has("com"), "a non-protocol conclusion must not fire");
  assert.ok(
    !r.derived.has("x"),
    "an unstated edge must not consume [ideal-ot]",
  );
  assert.deepEqual(scopesOf(r, "uc"), ["correlated-randomness"]);
  assert.deepEqual(scopesOf(r, "mpc"), ["correlated-randomness"]);
  const plain = run(reds, ["2pc"]);
  assert.deepEqual(scopesOf(plain, "com"), [""]);
});

test("a pairing-free generic-group bound does not feed a pairing-based edge", () => {
  const reds = [
    red("ggm-to-lrsw", ["ggm"], "lrsw", {
      class: "free",
      model: "generic-group",
    }),
    red("cl04", ["type-1-pairing", "lrsw"], "ds"),
    red("lrsw-to-owf", ["lrsw"], "owf"),
    red("bb08", ["generic-bilinear-group-model"], "q-sdh", {
      class: "free",
      model: "generic-group",
    }),
    red("bb04", ["type-3-pairing", "q-sdh"], "ds2"),
    red("gro16", ["bilinear-pairing"], "snark", {
      class: "free",
      model: "generic-group",
    }),
  ];
  const r = run(reds, [
    "ggm",
    "type-1-pairing",
    "type-3-pairing",
    "generic-bilinear-group-model",
    "bilinear-pairing",
  ]);
  assert.deepEqual(scopesOf(r, "lrsw"), ["generic-group+no-pairing"]);
  assert.ok(!r.derived.has("ds"), "CL04 must not consume pairing-free LRSW");
  assert.deepEqual(scopesOf(r, "owf"), ["generic-group+no-pairing"]);
  assert.deepEqual(scopesOf(r, "ds2"), ["generic-group"]);
  assert.deepEqual(scopesOf(r, "snark"), ["generic-group"]);
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
// Both edge lists, with the hybrid rule as the manifest states it: the
// resources scope a conclusion, which feeds only the protocol objects.
const live = (seed: string[]) =>
  closure([...manifest.reductions, ...manifest.hybridReductions], seed, {
    relativizes,
    bilinear: bilinearNodes(manifest.objects),
    protocol: new Set(manifest.protocolObjects),
  });

test("generic-group CDH does not give IBE through DG17a", () => {
  const r = live(["ggm"]);
  assert.ok(scopesOf(r, "cdh").includes("generic-group+no-pairing"));
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

test("PLONK's conclusions keep both the AGM and the random oracle", () => {
  const r = live(["bilinear-pairing", "q-dlog"]);
  for (const x of ["universal-snark", "snark"])
    assert.deepEqual(scopesOf(r, x), ["rom+algebraic-group"], x);
});

test("a reader of model alone cannot take a multi-model edge for a single-model one", () => {
  // CCwiki's reader: version 1 only; standard, quantum and crs are its default
  // models, and rom, generic-group, algebraic-group and other are idealised
  // (scoped).
  const DEFAULT = ["standard", "quantum", "crs"];
  const IDEALISED = ["rom", "generic-group", "algebraic-group", "other"];
  assert.strictEqual(manifest.version, 1, "version-1 readers must still load");
  const multi = manifest.reductions.filter((r: any) => r.models.length > 1);
  assert.ok(
    multi.length >= 5,
    "PLONK, FKL18 BLS, BSW07 and the two FPS20 edges are multi-model",
  );
  for (const r of manifest.reductions)
    if (r.models.length > 1) {
      assert.strictEqual(r.model, "other", r.id);
      assert.ok(!DEFAULT.includes(r.model) && IDEALISED.includes(r.model));
    } else assert.strictEqual(r.model, r.models[0], r.id);
  const plonk = manifest.reductions.find(
    (r: any) =>
      r.id === "red-bilinear-pairing-and-q-dlog-to-universal-snark-gwc19",
  );
  assert.deepEqual(plonk.models, ["algebraic-group", "rom"]);
});

test("results from ideal resources keep their hybrid scope", () => {
  const cr = live(["correlated-randomness"]);
  assert.deepEqual(scopesOf(cr, "mpc"), ["correlated-randomness"]);
  const ips = live(["ideal-ot", "prg"]);
  assert.deepEqual(scopesOf(ips, "mpc"), ["ideal-ot"]);
  const sc = live(["secure-channels"]);
  assert.deepEqual(scopesOf(sc, "honest-majority-t-lt-n-over-3"), [
    "secure-channels",
  ]);
  // No chain through an ideal resource yields an unscoped object.
  const prgOnly = live(["prg"]).derived;
  for (const [seed, res] of [
    [["correlated-randomness"], cr],
    [["ideal-ot"], live(["ideal-ot"])],
    [["ideal-ot", "prg"], ips],
    [["secure-channels"], sc],
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

test("ideal OT gives protocols and commitments in the OT-hybrid model, not one-way functions", () => {
  const r = live(["ideal-ot"]);
  for (const x of ["two-party-computation", "malicious-ot-security", "com"])
    assert.deepEqual(scopesOf(r, x), ["ideal-ot"], `ideal OT => ${x}`);
  for (const x of ["owf", "prf", "ds"])
    assert.ok(!r.derived.has(x), `ideal OT must not derive ${x}`);
  for (const x of r.derived)
    if (x !== "ideal-ot")
      assert.ok(!scopesOf(r, x).includes(""), `ideal OT => ${x} unscoped`);
  for (const seed of ["correlated-randomness", "secure-channels"])
    for (const x of ["owf", "prg", "prf", "ds"])
      assert.ok(!live([seed]).derived.has(x), `${seed} must not derive ${x}`);
});

test("a reader of reductions alone sees no edge from an ideal resource", () => {
  // CCwiki reads only `reductions`, where standard, quantum and crs are
  // unscoped: an edge from an ideal resource there would read as a
  // standard-model theorem, and {ideal-ot} => com would feed COM => OWF.
  assert.deepEqual(manifest.hybridResources, [...HYBRID_RESOURCES].sort());
  assert.deepEqual(
    manifest.protocolObjects,
    [...protocolNodes(manifest.objects)].sort(),
  );
  const resources = new Set(manifest.hybridResources);
  for (const r of manifest.reductions)
    assert.ok(
      !r.hypotheses.some((h: string) => resources.has(h)),
      `${r.id} belongs in hybridReductions`,
    );
  for (const r of manifest.hybridReductions)
    assert.deepEqual(
      r.resources,
      r.hypotheses.filter((h: string) => resources.has(h)),
      r.id,
    );
  // Without any hybrid rule, nothing follows from a resource.
  for (const seed of manifest.hybridResources) {
    const r = closure(manifest.reductions, [seed], { relativizes });
    assert.deepEqual(
      [...r.derived].filter((x) => x !== seed),
      [],
      seed,
    );
  }
  const ids = new Set(manifest.reductions.map((r: any) => r.id));
  const hybrid = new Set(manifest.hybridReductions.map((r: any) => r.id));
  for (const b of manifest.barriers) {
    for (const id of b.circumventedBy) assert.ok(ids.has(id), `${b.id}: ${id}`);
    for (const id of b.circumventedByHybrid ?? [])
      assert.ok(hybrid.has(id), `${b.id}: ${id}`);
  }
});

test("no edge turns expected-time simulation into a strict-time protocol notion", () => {
  // Truncating an expected polynomial-time simulator at a fixed polynomial can
  // change its output by an inverse-polynomial amount, so strict-time notions
  // imply the expected-time ones by the identity map, never the reverse.
  const expected = new Set([
    "mpc-with-expected-time-simulation",
    "two-party-computation-with-expected-time-simulation",
    "malicious-ot-with-expected-time-simulation",
    "four-round-mpc",
    "five-round-two-party-computation",
    "four-round-ot",
  ]);
  const ids = new Set(manifest.objects.map((o: any) => o.id));
  for (const x of expected) assert.ok(ids.has(x), `${x} is a node`);
  const protocol = new Set(manifest.protocolObjects);
  for (const r of [...manifest.reductions, ...manifest.hybridReductions])
    if (
      protocol.has(r.conclusion) &&
      r.hypotheses.some((h: string) => expected.has(h))
    )
      assert.ok(
        expected.has(r.conclusion),
        `${r.id}: ${r.hypotheses.join(", ")} => ${r.conclusion}`,
      );
  for (const seed of [
    "four-round-ot",
    "four-round-mpc",
    "five-round-two-party-computation",
  ])
    for (const x of live([seed]).derived)
      if (protocol.has(x))
        assert.ok(expected.has(x), `${seed} reaches strict-time ${x}`);
  for (const [strict, relaxed] of [
    ["mpc", "mpc-with-expected-time-simulation"],
    [
      "two-party-computation",
      "two-party-computation-with-expected-time-simulation",
    ],
    ["malicious-ot-security", "malicious-ot-with-expected-time-simulation"],
  ])
    assert.ok(live([strict]).derived.has(relaxed), `${strict} => ${relaxed}`);
});

test("round-indexed variants are defined from the expected-time parents", () => {
  // Defining a round variant as "malicious security" (or 2PC, or security
  // with abort) asserts the strict-time parent, whatever the sentence later
  // says about the simulator's running time.
  const read = (f: string) =>
    fs.readFileSync(path.join(ROOT, "content", "Primitives", f), "utf8");
  const definition = (page: string, heading: string) => {
    const at = page.indexOf(`\n${heading}\n`);
    assert.ok(at >= 0, heading);
    const body = page.slice(at + heading.length + 2).trimStart();
    return body.split("\n\n")[0].split(". It ")[0];
  };
  const ot = read("oblivious-transfer.md");
  const mpc = read("secure-multi-party-computation.md");
  for (const [page, heading, relaxed, strict] of [
    [
      ot,
      "## Four-round OT",
      "[[#Malicious security with expected polynomial-time simulation|",
      "[[#Malicious Security|",
    ],
    [
      mpc,
      "### Five-round 2PC",
      "[[#2PC with expected polynomial-time simulation|",
      "#two-party-computation-2pc|",
    ],
    [
      mpc,
      "## Four-round MPC",
      "[[#Expected polynomial-time simulation|",
      "[[#Security with abort|",
    ],
  ]) {
    const d = definition(page, heading);
    assert.ok(d.includes(relaxed), `${heading} names its expected-time parent`);
    assert.ok(
      !d.includes(strict),
      `${heading} does not assert the strict parent`,
    );
  }
});

test("LRSW99's pairing-free GGM bound does not feed CL04 signatures", () => {
  const r = live(["ggm", "type-1-pairing"]);
  assert.deepEqual(scopesOf(r, "lrsw"), ["generic-group+no-pairing"]);
  assert.ok(
    !r.used.includes("red-type-1-pairing-and-lrsw-to-ds-cl04"),
    "LRSW99 => CL04 must not fire",
  );
  assert.ok(
    live(["lrsw", "type-1-pairing"]).used.includes(
      "red-type-1-pairing-and-lrsw-to-ds-cl04",
    ),
    "standard-model LRSW still gives CL04",
  );
});
