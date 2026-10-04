import test from "node:test";
import assert from "node:assert";
import path from "node:path";
// @ts-ignore — plain ESM helper shared with scripts/lint.mjs
import { loadClasses, closure, bites } from "../scripts/reduction-classes.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const { classes, sentinels } = loadClasses(ROOT);

test("the vocabulary is a valid partial order", () => {
  // loadClasses throws on a dangling `implies` target or a cycle; getting here
  // is the assertion. Re-state the two anchors so a reshuffle is caught.
  assert.ok(classes["fully-black-box"], "fully-black-box must exist");
  assert.deepEqual(
    classes["free"].implies,
    [],
    "free is the broadest class and implies nothing",
  );
  const rtv = Object.keys(classes).filter(
    (c) => classes[c].defined_in === "RTV04",
  );
  const fromFully = closure(classes, "fully-black-box");
  for (const c of rtv)
    if (c !== "fully-black-box")
      assert.ok(
        fromFully.has(c),
        `fully-black-box is the narrowest RTV04 class: ${c} must be above it`,
      );
});

test("`fixed-construction` sits beside the RTV04 chain, below `free` only", () => {
  assert.ok(classes["fixed-construction"], "fixed-construction must exist");
  assert.deepEqual(
    [...closure(classes, "fixed-construction")],
    ["free"],
    "fixed-construction implies free and nothing else",
  );
  // A barrier refuting one named construction must not bite a reduction that
  // is free to choose its construction: CPA-secure SKE => OWF => PRF =>
  // IND$-CPA SKE is legitimate even though the identity map fails.
  for (const c of Object.keys(classes))
    if (c !== "fixed-construction")
      assert.equal(
        bites(classes, c, "fixed-construction"),
        false,
        `a fixed-construction barrier must not bite a ${c} reduction`,
      );
  // It does bite a reduction claiming the same named construction.
  assert.equal(
    bites(classes, "fixed-construction", "fixed-construction"),
    true,
  );
  // And no RTV04 barrier other than `free` bites it.
  assert.equal(bites(classes, "fixed-construction", "fully-black-box"), false);
  assert.equal(bites(classes, "fixed-construction", "relativizing"), false);
});

test("a barrier bites a reduction iff the reduction's class implies the barrier's", () => {
  // The Impagliazzo-Rudich case: an oracle separation rules out relativizing
  // reductions, and every fully-black-box reduction relativizes.
  assert.equal(bites(classes, "fully-black-box", "relativizing"), true);

  // The direction that must NOT fire. A barrier against a narrower class than
  // the reduction claims says nothing about that reduction.
  assert.equal(bites(classes, "free", "fully-black-box"), false);
  assert.equal(bites(classes, "relativizing", "fully-black-box"), false);
  assert.equal(bites(classes, "weakly-black-box", "semi-black-box"), false);

  // Equal classes always bite.
  for (const c of Object.keys(classes))
    assert.equal(bites(classes, c, c), true);

  // Ruling out `free` rules out everything: no reduction of any class survives.
  for (const c of Object.keys(classes))
    assert.equal(
      bites(classes, c, "free"),
      true,
      `a barrier against "free" must bite a ${c} reduction`,
    );
});

test("`unstated` sits outside the order and is comparable to nothing", () => {
  assert.ok(sentinels["unstated"], "unstated is a sentinel, not a class");
  assert.equal(classes["unstated"], undefined);
  for (const c of Object.keys(classes)) {
    assert.equal(bites(classes, "unstated", c), false);
    assert.equal(bites(classes, c, "unstated"), false);
  }
});

test("`implies` is transitive through relativizing", () => {
  // fully-BB -> relativizing -> forall-exists-semi -> ... -> free
  const reach = closure(classes, "fully-black-box");
  assert.ok(reach.has("free"), "every class reaches free");
  assert.ok(reach.has("forall-exists-semi-black-box"));
  assert.ok(
    closure(classes, "relativizing").has("free"),
    "relativizing reaches free",
  );
  assert.ok(
    !closure(classes, "relativizing").has("fully-black-box"),
    "relativizing must not reach back down to fully-black-box",
  );
});

test("every class, and `unstated`, has its own section on the glossary page the metadata line links to", async () => {
  // @ts-ignore — plain ESM helper shared with scripts/generate-relations.mjs
  const { headingsByAnchor } = await import("../scripts/markdown-text.mjs");
  const fs = await import("node:fs");
  const { default: matter } = await import("gray-matter");
  const page = matter(
    fs.readFileSync(
      path.join(ROOT, "content", "Glossary", "reduction-classes.md"),
      "utf8",
    ),
  ).content;
  // relationMeta.ts links class `c` to `reduction-classes#c`.
  const anchors: Map<string, string> = headingsByAnchor(page);
  for (const c of [...Object.keys(classes), ...Object.keys(sentinels)])
    assert.ok(
      anchors.has(c),
      `content/Glossary/reduction-classes.md needs a heading whose id is "${c}"`,
    );
});
