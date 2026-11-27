import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

// Three schemes meet a naive SK-PIR definition with no assumption, and the
// `secret-key-pir` node must reject each:
//  - sk = D: a key computed from the database, an empty query, and Decode
//    returning sk[i]; rejected by KeyGen(1^λ, 1^N) taking no database;
//  - Decode := 0 with an empty query and answer; rejected by requiring
//    (1 - negl(λ)) correctness of the object, not a free ε;
//  - send-all-for-small-n; rejected by the p(λ) + s(N) online bound.
// The tests read the SK-PIR section off the single-server PIR page.

const ROOT = path.resolve(import.meta.dirname, "..");
const PAGE = path.join(
  ROOT,
  "content",
  "Primitives",
  "single-server-private-information-retrieval.md",
);
const page = fs.readFileSync(PAGE, "utf8").split("<!-- BEGIN GENERATED")[0];

const sub = (body: string, heading: string) => {
  const start = body.indexOf(`\n${heading}\n`);
  assert.ok(start >= 0, `the SK-PIR section has "${heading}"`);
  const level = /^#+/.exec(heading)![0].length;
  const rest = body.slice(start + heading.length + 2);
  const end = rest.search(new RegExp(`^#{1,${level}} `, "m"));
  return end >= 0 ? rest.slice(0, end) : rest;
};

const skpir = sub(page, "## Secret-Key PIR (SK-PIR)");

test("SK-PIR samples its key without access to the database", () => {
  const syntax = sub(skpir, "### Syntax");
  const keygen = /\$\\KeyGen\(([^)]*)\) \\to \\sk\$/.exec(syntax);
  assert.ok(keygen, "Syntax gives KeyGen's inputs");
  const inputs = keygen![1].split(",").map((x) => x.trim());
  assert.deepStrictEqual(inputs, ["1^\\secpar", "1^N"]);
  assert.match(syntax, /\$\\Setup\(\\sk, D\) \\to D'\$/);
  const game = sub(skpir, "### Security");
  assert.match(
    game,
    /\\KeyGen\(1\^\\secpar, 1\^N\)\$; \$D' \\gets \\Setup\(\\sk, D\)/,
  );
});

test("the SK-PIR object fixes negligible correctness error", () => {
  const correctness = sub(skpir, "### Correctness");
  assert.doesNotMatch(correctness, /\bTODO\b/);
  assert.match(
    correctness,
    /As an object, SK-PIR denotes a \$\(1-\\negl\(\\secpar\)\)\$-correct scheme/,
  );
  // Decode := 0 is private and meets the online bound, and fails only
  // correctness: it errs with probability 1 whenever D[i] = 1.
  assert.match(correctness, /secret-key private/);
  assert.match(correctness, /online-communication bound/);
});

test("the SK-PIR online bound is p(λ) + s(N) with s(N) = o(N)", () => {
  const comm = sub(skpir, "### Online communication");
  assert.match(comm, /at most \$p\(\\secpar\) \+ s\(N\)\$/);
  assert.match(comm, /\$s\(N\) = o\(N\)\$/);
});
