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
  const fromFully = closure(classes, "fully-black-box");
  assert.equal(
    fromFully.size,
    Object.keys(classes).length - 1,
    "fully-black-box is the narrowest class: every other class is above it",
  );
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
