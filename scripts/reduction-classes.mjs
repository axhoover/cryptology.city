// The reduction-class partial order, and the one rule that reads it.
//
// Shared by scripts/lint.mjs and test/reduction-classes.test.ts, because the
// direction of the order is the single easiest thing in this system to get
// backwards, and a backwards contradiction check is worse than none: it would
// reject correct pages and pass the ones that actually conflict.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

export function loadClasses(root) {
  const file = path.join(root, "schema", "reduction-classes.yaml");
  const doc = yaml.load(fs.readFileSync(file, "utf8"));
  const classes = doc.classes ?? {};
  for (const [name, def] of Object.entries(classes)) {
    for (const next of def.implies ?? []) {
      if (!classes[next])
        throw new Error(
          `schema/reduction-classes.yaml: class "${name}" implies "${next}", which is not a defined class.`,
        );
    }
  }
  for (const name of Object.keys(classes)) {
    if (closure(classes, name).has(name))
      throw new Error(
        `schema/reduction-classes.yaml: the "implies" graph has a cycle through "${name}"; the partial order must be acyclic.`,
      );
  }
  return {
    classes,
    sentinels: doc.sentinels ?? {},
    rejected: doc.rejected ?? {},
  };
}

/** Everything a `name`-reduction also is. Narrower -> broader. */
export function closure(classes, name, seen = new Set()) {
  for (const next of classes[name]?.implies ?? []) {
    if (!seen.has(next)) {
      seen.add(next);
      closure(classes, next, seen);
    }
  }
  return seen;
}

/**
 * Does a barrier ruling out `barrierClass` bite a reduction claiming
 * `reductionClass` on the same hyperedge?
 *
 * True iff every `reductionClass` reduction is also a `barrierClass` reduction,
 * i.e. iff reductionClass implies* barrierClass.
 *
 *   barrier rules out `relativizing`, reduction claims `fully-black-box`
 *     -> bites. This is the Impagliazzo-Rudich argument.
 *   barrier rules out `fully-black-box`, reduction claims `free`
 *     -> does NOT bite. A barrier against a narrower class than the reduction
 *        claims is not a contradiction.
 *
 * Anything outside the order (`unstated`, an unknown value) bites nothing and is
 * bitten by nothing.
 */
export function bites(classes, reductionClass, barrierClass) {
  if (!classes[reductionClass] || !classes[barrierClass]) return false;
  if (reductionClass === barrierClass) return true;
  return closure(classes, reductionClass).has(barrierClass);
}
