import test, { describe } from "node:test";
import assert from "node:assert";
import { aliasRedirects, AliasSource } from "./aliases";
import { FullSlug } from "../../util/path";

const s = (x: string) => x as FullSlug;
const page = (slug: string, ...aliases: string[]): AliasSource => ({
  slug: s(slug),
  aliases: aliases.map(s),
});
const slugsOf = (files: AliasSource[]) => [
  ...files.map((f) => f.slug),
  ...files.flatMap((f) => f.aliases),
];
const written = (files: AliasSource[], extra: string[] = []) =>
  Object.fromEntries(
    aliasRedirects(files, [...slugsOf(files), ...extra.map(s)]).map((r) => [
      r.slug,
      r.target,
    ]),
  );

describe("aliasRedirects", () => {
  test("writes each alias at its own slug and its lowercase slug", () => {
    const prf = page("Primitives/pseudorandom-function", "PRF", "iPRF");
    assert.deepStrictEqual(written([prf]), {
      PRF: "Primitives/pseudorandom-function",
      iPRF: "Primitives/pseudorandom-function",
      prf: "Primitives/pseudorandom-function",
      iprf: "Primitives/pseudorandom-function",
    });
  });

  test("an already-lowercase alias is written once", () => {
    const r = aliasRedirects([page("Complexity/sharp-p", "sharpp")], []);
    assert.deepStrictEqual(r, [
      { slug: "sharpp", target: "Complexity/sharp-p" },
    ]);
  });

  test("two aliases of one page that fold together share one lowercase copy", () => {
    const r = aliasRedirects(
      [page("Assumptions/noisy-k-lin", "Noisy-k-LIN", "noisy-k-LIN")],
      [],
    );
    assert.deepStrictEqual(
      r.filter((x) => x.slug === "noisy-k-lin"),
      [{ slug: "noisy-k-lin", target: "Assumptions/noisy-k-lin" }],
    );
  });

  test("never shadows a page or another alias", () => {
    const files = [page("Complexity/polynomial-time", "P")];
    assert.strictEqual(written(files, ["p"]).p, undefined);
  });

  test("a lowercase form claimed by two pages goes to neither", () => {
    const files = [page("A/one", "Ab"), page("B/two", "AB")];
    const w = written(files);
    assert.strictEqual(w.ab, undefined);
    assert.strictEqual(w.Ab, "A/one");
    assert.strictEqual(w.AB, "B/two");
  });
});
