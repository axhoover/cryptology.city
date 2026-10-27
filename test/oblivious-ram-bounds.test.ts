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
