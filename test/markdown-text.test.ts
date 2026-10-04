import test from "node:test";
import assert from "node:assert";
import prettier from "prettier";
import {
  inlineSegments,
  hasMath,
  headingText,
  headingsByAnchor,
  headingAt,
  dollarWikilinks,
  escapeOutsideMath,
  link,
  // @ts-ignore — plain ESM helper shared with scripts/generate-relations.mjs
} from "../scripts/markdown-text.mjs";

const kinds = (s: string) =>
  inlineSegments(s).map((g: { kind: string; raw: string }) => [g.kind, g.raw]);

test("math spans pair as micromark pairs them", () => {
  assert.deepEqual(kinds("$k$-Linear"), [
    ["math", "$k$"],
    ["text", "-Linear"],
  ]);
  // A lone dollar is text; a run closes only at a run of the same length.
  assert.deepEqual(kinds("IND$-CPA"), [["text", "IND$-CPA"]]);
  assert.deepEqual(kinds("$$a$b$$"), [["math", "$$a$b$$"]]);
  // An escaped dollar opens nothing; a code span wins where it starts first.
  assert.deepEqual(kinds("\\$x$"), [["text", "\\$x$"]]);
  assert.deepEqual(kinds("`$` and $x$"), [
    ["code", "`$`"],
    ["text", " and "],
    ["math", "$x$"],
  ]);
  assert.equal(hasMath("IND$-CPA Security"), false);
  assert.equal(hasMath("Honest majority ($t < n/2$)"), true);
});

test("heading text: markdown removed, math kept for display, TeX source for the id", () => {
  assert.deepEqual(
    headingText("[[collision-resistance|Collision resistance]]"),
    { title: "Collision resistance", slugText: "Collision resistance" },
  );
  assert.deepEqual(headingText("Honest majority ($t < n/2$)"), {
    title: "Honest majority ($t < n/2$)",
    slugText: "Honest majority (t < n/2)",
  });
  assert.equal(
    headingText("**Strong** _unforgeability_").title,
    "Strong unforgeability",
  );
  assert.equal(headingText("`zk-SNARK` [FRI](fri)").title, "zk-SNARK FRI");
  // Only paired markers are emphasis; an escape is its character.
  assert.equal(headingText("MIP* and MIP").title, "MIP* and MIP");
  assert.equal(headingText("IND\\$-CPA Security").title, "IND$-CPA Security");
  assert.equal(
    headingText("$\\mathrm{GapSVP}_\\gamma$ in snake_case").title,
    "$\\mathrm{GapSVP}_\\gamma$ in snake_case",
  );
});

test("headings by the id the site gives them", () => {
  const body = [
    "# Title",
    "## Security",
    "```",
    "## Not a heading",
    "```",
    "### Security",
    "## Φ-Hiding",
    "### Honest majority ($t < n/2$)",
    "## IND$-CPA Security ##",
  ].join("\n");
  const h = headingsByAnchor(body);
  assert.deepEqual(
    [...h.keys()],
    [
      "title",
      "security",
      "security-1",
      "φ-hiding",
      "honest-majority-t--n2",
      "ind-cpa-security",
    ],
  );
  assert.equal(h.get("honest-majority-t--n2"), "Honest majority ($t < n/2$)");
  assert.equal(h.get("ind-cpa-security"), "IND$-CPA Security");
});

test("an anchor finds its heading as a link to it resolves", () => {
  const h = headingsByAnchor(
    ["## Φ-Hiding", "### Honest majority ($t < n/2$)", "## Strong RSA"].join(
      "\n",
    ),
  );
  assert.equal(headingAt(h, "#φ-hiding"), "Φ-Hiding");
  // A link's anchor is slugged before it is matched.
  assert.equal(headingAt(h, "#Φ-Hiding"), "Φ-Hiding");
  assert.equal(headingAt(h, "#Strong RSA"), "Strong RSA");
  assert.equal(
    headingAt(h, "#honest-majority-t--n2"),
    "Honest majority ($t < n/2$)",
  );
  // Anchors an ad-hoc slugger produced, which no heading id matches.
  assert.equal(headingAt(h, "#-hiding"), undefined);
  assert.equal(headingAt(h, "#honest-majority-t-n2"), undefined);
});

test("wikilinks with an unescaped dollar are found outside code", () => {
  const body = [
    "See [[a#k-lin|$k$-Lin]] and [[b|plain]], [[c|IND\\$-CPA]], $[[d]]$.",
    "![[e|IND$-CPA]] and [[f\\\\$]]",
    "`[[g|$x$]]` and [$k$](h)",
    "```",
    "[[i|$x$]]",
    "```",
    "[[j]]",
  ].join("\n");
  const hits = dollarWikilinks(body);
  assert.deepEqual(
    hits.map((x: { raw: string; target: string; text: string }) => [
      x.raw,
      x.target,
      x.text,
    ]),
    [
      ["[[a#k-lin|$k$-Lin]]", "a#k-lin", "$k$-Lin"],
      ["![[e|IND$-CPA]]", "e", "IND$-CPA"],
      ["[[f\\\\$]]", "f\\\\$", "f\\\\$"],
    ],
  );
  for (const x of hits) assert.equal(body.slice(x.index).indexOf(x.raw), 0);
});

test("link text with a dollar becomes a markdown link that shows exactly the text", () => {
  assert.equal(link("factoring", "Factoring"), "[[factoring|Factoring]]");
  assert.equal(
    link(
      "bilinear-map-assumptions#k-linear-assumption",
      "$k$-Linear assumption",
    ),
    "[$k$-Linear assumption](bilinear-map-assumptions#k-linear-assumption)",
  );
  // A lone dollar is escaped, so it cannot pair with one later on the line.
  assert.equal(
    link(
      "ind-dollar-cpa-security-to-cpa-security",
      "IND$-CPA Security ⇒ CPA Security",
    ),
    "[IND\\$-CPA Security ⇒ CPA Security](ind-dollar-cpa-security-to-cpa-security)",
  );
  assert.equal(link("A B", "$x$"), "[$x$](<A B>)");
  assert.equal(escapeOutsideMath("$[B]$ [b] \\$"), "$[B]$ \\[b\\] \\$");
});

test("generated link lines are left unchanged by Prettier, so checksums survive formatting", async () => {
  const md = [
    "- [Honest majority ($t < n/2$) ⇒ MPC](honest-majority-t-lt-n-over-2-to-mpc-rb89) (via [Honest majority ($t < n/2$)](secure-multi-party-computation#honest-majority-t--n2))",
    "- [IND\\$-CPA Security ⇒ CPA Security](ind-dollar-cpa-security-to-cpa-security) (via [IND\\$-CPA Security](symmetric-key-encryption#ind-cpa-security))",
    "- [[hiding-to-cpir|Φ-Hiding ⇒ cPIR]] (via [[rsa-assumption#φ-hiding|Φ-Hiding]])",
    "",
  ].join("\n");
  assert.equal(await prettier.format(md, { parser: "markdown" }), md);
});
