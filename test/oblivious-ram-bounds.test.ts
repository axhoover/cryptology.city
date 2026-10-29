import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

test("Path ORAM's parameter sets keep each variant's own bandwidth and storage", () => {
  // SDS+13 Table 1: with the stashes on the client, bandwidth
  // O(log^2 N / log X) needs O(log^2 N / log X)·ω(1) client blocks; with them
  // on the server, O(log N)·ω(1) client blocks cost an extra ω(1) bandwidth
  // factor. A row pairing the better bound of each is not a theorem.
  const page = fs.readFileSync(
    path.join(ROOT, "content", "Primitives", "oblivious-ram.md"),
    "utf8",
  );
  const start = page.indexOf("- Path ORAM is statistically secure");
  assert.ok(start >= 0, "the Path ORAM bullet is on the ORAM page");
  const rows = page
    .slice(start)
    .split("\n")
    .slice(1)
    .filter((l) => /^\s*\| on the (client|server) \|/.test(l))
    .map((l) =>
      l
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim()),
    );
  assert.deepEqual(
    rows.map((r) => r[0]),
    ["on the client", "on the server"],
  );
  const omega = (c: string) => c.includes("\\omega(1)");
  const squared = (c: string) => c.includes("\\log^2");
  for (const [where, bandwidth, storage] of rows) {
    assert.ok(omega(storage), `${where}: client storage carries ω(1)`);
    if (!squared(storage))
      assert.ok(
        omega(bandwidth),
        `${where}: O(log N)·ω(1) client storage needs the ω(1) bandwidth factor`,
      );
    if (!omega(bandwidth))
      assert.ok(
        squared(storage),
        `${where}: bandwidth without ω(1) needs O(log^2 N / log X)·ω(1) storage`,
      );
  }
});

test("BN16's sorting-circuit ORAM concludes the node whose store values are fixed in advance", () => {
  // BN16's offline programs fix every instruction, store values included, and
  // its construction relies on it. The `offline-oram` node learns each written
  // block only with its operation, so the BN16 edge must not conclude it or a
  // variant defined over it.
  const manifest = JSON.parse(
    fs.readFileSync(path.join(ROOT, ".reductions", "relations.json"), "utf8"),
  );
  const bn16 = manifest.reductions.filter((r: any) =>
    r.source.some((s: string) => s.includes("|BN16]]")),
  );
  assert.ok(bn16.length >= 1, "the BN16 edge is in the manifest");
  for (const r of bn16)
    assert.strictEqual(
      r.conclusion,
      "sublogarithmic-fixed-instruction-offline-oram",
      r.id,
    );
  const objects = new Map(manifest.objects.map((o: any) => [o.id, o]));
  assert.ok(!objects.has("sublogarithmic-offline-oram"));

  const page = fs.readFileSync(
    path.join(ROOT, "content", "Primitives", "oblivious-ram.md"),
    "utf8",
  );
  const section = (anchor: string) => {
    const lines = page.split("\n");
    const slug = (h: string) =>
      "#" +
      h
        .replace(/^#+\s*/, "")
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/ /g, "-");
    const start = lines.findIndex((l) => /^#+ /.test(l) && slug(l) === anchor);
    assert.ok(start >= 0, `a heading has anchor ${anchor}`);
    const end = lines.findIndex((l, i) => i > start && /^#+ /.test(l));
    return lines.slice(start + 1, end < 0 ? undefined : end).join("\n");
  };
  const anchorOf = (id: string) => (objects.get(id) as any).anchor;
  const fixed = section(anchorOf("fixed-instruction-offline-oram"));
  assert.ok(
    fixed.includes("written blocks included"),
    "store values known in advance",
  );
  assert.ok(
    fixed.includes("that the client sees only through its physical reads") &&
      fixed.includes(
        "M_2 \\gets (D_b[1], \\ldots, D_b[N_1], b_0, \\ldots, b_0)",
      ),
    "the initial array sits in the physical array, unknown to the client",
  );
  const online = section(anchorOf("offline-oram"));
  assert.ok(online.includes("each written block only with its operation"));
  // Client storage counted only between operations would let one round read
  // all of D and the next lay out every later answer: O(1) amortized blowup
  // with no assumption. BN16's client has O(1) registers at every step.
  const sublog = section(
    anchorOf("sublogarithmic-fixed-instruction-offline-oram"),
  );
  assert.ok(sublog.includes("a secure offline ORAM with fixed instructions"));
  assert.ok(
    sublog.includes("$O(1)$ blocks of client memory at every step"),
    "client memory is bounded at every step, not only between operations",
  );
  assert.ok(
    section("#efficiency").includes(
      "within an operation as well as between operations",
    ),
    "the per-step memory bound covers the rounds within an operation",
  );
});
