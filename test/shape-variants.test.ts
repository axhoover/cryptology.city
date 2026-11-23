import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
// @ts-ignore — plain ESM helpers shared with scripts/generate-relations.mjs
import { closure } from "../scripts/closure.mjs";
// @ts-ignore
import * as rc from "../scripts/reduction-classes.mjs";

// Constructions that fix a block width, a digest width or a compression ratio
// must take a hypothesis node that guarantees that shape. The generic prf, prp,
// mac and hash nodes admit instances (a one-bit-range PRF, a MAC on short
// messages, a constant hash) that break them.

const ROOT = path.resolve(import.meta.dirname, "..");
const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, ".reductions", "relations.json"), "utf8"),
);
const { classes } = rc.loadClasses(ROOT);
const relativizes = (cls: string) =>
  cls === "relativizing" ||
  (classes[cls] !== undefined && rc.closure(classes, cls).has("relativizing"));
const reductions = manifest.reductions.concat(manifest.hybridReductions ?? []);
const byId = new Map<string, any>(
  manifest.reductions
    .concat(manifest.barriers ?? [])
    .map((r: any) => [r.id, r]),
);
const edge = (id: string) => {
  const r = byId.get(id);
  assert.ok(r, `${id} is in the manifest`);
  return r;
};
const reaches = (seed: string[], target: string) =>
  closure(reductions, seed, { relativizes }).scopes.has(target);

test("block-cipher constructions take a length-preserving PRF or a PRP on bit strings", () => {
  const prfBlock = [
    "red-prf-to-arbitrary-length-suf-cma-mac-br05",
    "red-prf-to-mac-bkr94",
    "red-prf-to-ske",
    "red-prf-to-mac",
    "red-prf-to-nonce-based-mac",
    "red-prf-to-prp-lr88",
    "red-prf-to-strong-pseudorandom-permutation-lr88",
  ];
  for (const id of prfBlock)
    assert.deepStrictEqual(edge(id).hypotheses, ["length-preserving-prf"], id);

  const prpBlock = [
    "red-prp-to-arbitrary-length-suf-cma-mac-br05",
    "red-prp-to-cpa-security-bdjr97",
    "red-prp-to-small-domain-prp-br02",
    "red-prp-to-tweakable-block-cipher-lrw02",
  ];
  for (const id of prpBlock)
    assert.deepStrictEqual(edge(id).hypotheses, ["bit-string-prp"], id);
  assert.deepStrictEqual(
    edge(
      "red-strong-pseudorandom-permutation-to-strong-tweakable-block-cipher-lrw02",
    ).hypotheses,
    ["strong-bit-string-prp"],
  );

  // No edge from the generic prf node lands directly on an arbitrary-length
  // MAC: a one-bit-output PRF must not instantiate ECBC.
  for (const r of manifest.reductions)
    if (r.conclusion === "arbitrary-length-suf-cma-mac")
      assert.ok(!r.hypotheses.includes("prf"), r.id);
});

test("the NMAC generalization composes only at a compatible digest width", () => {
  const nmac = edge(
    "red-suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96",
  );
  assert.deepStrictEqual([...nmac.hypotheses].sort(), [
    "arbitrary-length-weakly-collision-resistant-hash",
    "fixed-length-suf-cma-mac",
  ]);
  // A MAC with only a superpolynomial message space and a union-shaped weakly
  // collision-resistant family do not give an arbitrary-length MAC.
  assert.ok(
    !reaches(
      ["suf-cma-mac", "weakly-collision-resistant-hash"],
      "arbitrary-length-suf-cma-mac",
    ),
  );
  assert.ok(
    reaches(
      [
        "fixed-length-suf-cma-mac",
        "arbitrary-length-weakly-collision-resistant-hash",
      ],
      "arbitrary-length-suf-cma-mac",
    ),
  );
});

test("XMSS requires second-preimage resistance, not a bare hash function", () => {
  const xmss = edge("red-hash-function-to-hash-based-signatures");
  assert.ok(!xmss.hypotheses.includes("hash-function"));
  assert.ok(
    xmss.hypotheses.includes("length-halving-second-preimage-resistance"),
  );
  assert.strictEqual(xmss.conclusion, "bounded-stateful-ds");
});
