import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const read = (f: string) =>
  JSON.parse(fs.readFileSync(path.join(ROOT, ".reductions", f), "utf8"));

test("every suspected error's affectsEdges names a current reduction or barrier", () => {
  // The skeptical-checker joins a suspected error to the page that now carries
  // the claim through these ids. A deleted page, or a pre-migration id, leaves
  // the error pointing at nothing.
  const relations = read("relations.json");
  const ids = new Set(
    [...relations.reductions, ...relations.barriers].map(
      (e: { id: string }) => e.id,
    ),
  );
  const { entries } = read("suspected-errors.json");
  const dangling = entries.flatMap(
    (e: { file: string; line: number; affectsEdges: string[] }) =>
      (e.affectsEdges ?? [])
        .filter((id) => !ids.has(id))
        .map((id) => `${e.file}:${e.line} -> ${id}`),
  );
  assert.deepEqual(
    dangling,
    [],
    "rewrite each id to the current page id, or drop it if the page was deleted",
  );
});
