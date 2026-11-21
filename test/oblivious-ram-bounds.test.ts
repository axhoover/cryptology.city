import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

test("Path ORAM's parameter sets keep each variant's own bandwidth and storage", () => {
  // SDS+13, blocks of X log N bits with a recursive position map. One stash
  // per level on the client: bandwidth O(log^2 N / log X), client storage
  // O(log^2 N / log X)·ω(1) (arXiv v2 Table 1, v3 §4.2(i)). One stash shared
  // by all levels on the client: the same bandwidth with O(log N)·ω(1) client
  // blocks (v3 §4.2(ii), §5.7). Stashes on the server, downloaded with the
  // rest of the client state for each access: O(1) client blocks between
  // operations at an extra ω(1) bandwidth factor (v2 §3.3, §4.2). Each row
  // pairs the bounds of one parameter set; a row mixing two is not a theorem.
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
    .filter((l) => /^\s*\| on the (client|server)[ ,]/.test(l))
    .map((l) =>
      l
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim()),
    );
  assert.deepEqual(rows, [
    [
      "on the client, one per level",
      "$O(\\log^2 N_1 / \\log X)$",
      "$O(\\log^2 N_1 / \\log X) \\cdot \\omega(1)$",
    ],
    [
      "on the client, one shared by all levels",
      "$O(\\log^2 N_1 / \\log X)$",
      "$O(\\log N_1) \\cdot \\omega(1)$",
    ],
    [
      "on the server, one per level",
      "$O(\\log^2 N_1 / \\log X) \\cdot \\omega(1)$",
      "$O(1)$",
    ],
  ]);
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
