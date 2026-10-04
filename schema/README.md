# `schema/` — the machine-readable vocabulary

These files are read by `scripts/lint.mjs` and by the `relations.json` emitter.
They are the single source of truth for the values a `reduction` or `barrier`
page may use, and this README is the contract for those pages: their fields,
and what their body may say (§ Reduction and barrier pages). Editing a page is
cheap; editing these files changes what the whole wiki is allowed to say, so
change them deliberately.

| File                     | Holds                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `reduction-classes.yaml` | the reduction-class vocabulary, as a partial order of generality                             |
| `propositions.yaml`      | proposition-typed nodes (`p-neq-np`, …) that barriers point at but that are not wiki objects |

## The data model in one paragraph

A **reduction** is a hyperedge: a _set_ of hypotheses implying _one_ conclusion,
of some reduction class.

```
{A_1, ..., A_n}  ==>  B     of class C
```

A **barrier** generalises separations. It states that a reduction of a given
class, on a given hyperedge, would have a consequence:

```
(exists a reduction of class C from {A_i} to B)  ==>  Q
```

A classical black-box separation is the case `Q = contradiction`.
Impagliazzo–Rudich is the general case (`Q = P != NP`). Same theorem shape, same
type, one page each.

### What the hyperedge asserts: `kind`

`kind` is required on every reduction, because implicit typing is exactly how the
prose lost information. "AM[k] = AM[2] = AM" and "QIP = PSPACE" are _equalities_;
split into hyperedges without a `kind`, both read as one-way implications.

| `kind`        | Means                                                     | Hypotheses  |
| ------------- | --------------------------------------------------------- | ----------- |
| `implication` | the hypotheses jointly imply the conclusion               | one or more |
| `inclusion`   | the conclusion contains the hypothesis (`IP ⊆ PSPACE`)    | exactly one |
| `equivalence` | hypothesis and conclusion are equivalent, both directions | exactly one |

`inclusion` and `equivalence` relate exactly two objects, so they take exactly
one hypothesis; a conjunction of hypotheses is always an `implication`. There
is no completeness kind: "local Hamiltonian is QMA-complete" is an `inclusion`
of the problem in the class (`notable-problems-to-qma`), and its hardness half
stays in the Statement.

Two further rules follow, and the lint enforces both:

- **Disjunction and conjunction must stay distinguishable.** Several
  assumptions each independently sufficient — LWE ⇒ PKE, DDH ⇒ PKE — are
  _separate_ reduction pages with one hypothesis each. Several assumptions
  jointly required are _one_ page with several hypotheses. Disjunction is never
  encoded inside a single page.
- **Composite chains are split.** "OWF → PRG (HILL99) → PRF via GGM (GGM86)" is
  two reduction pages, each with its own source — never one OWF ⇒ PRF page.
  The rule targets pages whose proof is the chain, not direct results that a
  chain also implies: `p-to-bpp` stays beside P ⊆ ZPP ⊆ RP ⊆ BPP, and a
  sourced direct result such as MA ⊆ AM (BM88) is kept whatever else implies
  it. `generate-relations.mjs --redundant` reports such edges and never
  deletes them.

### What a hypothesis is: `hypotheses` and `via`

`hypotheses` lists only what the theorem assumes: assumptions, primitives,
complexity classes, and the algebraic setting a construction is instantiated in
(a bilinear group). A transform or proof technique the construction applies —
Fiat–Shamir, arithmetization — goes in `via`, the field for the lemma or
technique a proof uses, as a wikilink:

```yaml
# Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)
hypotheses: [schnorr-identification-protocol]
model: rom
via: ["[[fiat-shamir-heuristic|Fiat–Shamir]]"]
```

Listed as a hypothesis, the transform makes a one-assumption result read as a
two-assumption conjunction. A technique node stays a hypothesis in two cases:
when it is the only hypothesis, since a hyperedge needs one; and on a barrier,
where the named transform is what the barrier rules out — dropping
`fiat-shamir` from `no-fiat-shamir-and-hash-function-to-ds-gk03` would leave
the false "no reduction from hash functions to DS". Idealised models follow the
same pattern on the `model` axis (§ Which model to record). The technique's own
page lists the reductions whose `via` links to it under **Used via** in its
generated "Participates in" section.

### Candidates: `heuristic`

`heuristic: true` marks a reduction page recording a candidate construction
whose source gives no security reduction — GGHRSW13's iO from multilinear maps,
HPS98's NTRU encryption. The page keeps the construction linked from both
endpoints, but the edge is not a theorem: `relations.json` carries the flag,
`generate-relations.mjs --derive` and `--redundant` never fire the edge, and a
consumer deriving consequences should skip it. There is no reduction to
classify, so such a page records `class: unstated`; its Statement says that the
source gives no security reduction, and `rationale.heuristic` may say what is
missing. The key is optional (absent means `false`); the lint requires a
boolean and allows it only on reductions.

### Provenance: `source`

`source` lists every paper whose theorem the page's Statement asserts, or the
bare token `folklore`. A paper that only introduced the notion, or proved a
weaker precursor, is cited in the Statement or Notes, not in `source`:
`relations.json` attributes the edge to its `source`.

### How strong a barrier is: `strength`

| `strength`      | Means                                                                                  |
| --------------- | -------------------------------------------------------------------------------------- |
| `conditional`   | the barrier theorem assumes an unproven hardness assumption, named in `conditional-on` |
| `unconditional` | the barrier theorem assumes none                                                       |

An oracle separation is `unconditional`: its oracle is carried by
`class: relativizing` and described in `oracle`, not listed in
`conditional-on`. A barrier's `consequences` are what it concludes, never what
it assumes. Each `conditional-on` entry is an object id where the wiki has a
node (`[owf]`, `[pke-cpa-security]`), free text only for an assumption with
none (GW11's sub-exponentially hard subset-membership problem); a property of
the scheme the barrier is about is not an assumption and stays in the
Statement. The lint warns on an entry that is neither an id nor multi-word free
text (`barrier-conditional-on`).

A barrier carries no `security-loss`: it rules a reduction out and has no loss
of its own. The cost of the attack or counterexample it gives goes in a Notes
bullet, and the lint rejects the key on a barrier (`barrier-security-loss`).

### Getting around a barrier: `circumvented-by`

A barrier rules out one class of reduction on one hyperedge. A reduction that
reaches the conclusion anyway, by a class the barrier does not rule out or by a
technique outside its scope, is listed on the barrier in the optional
`circumvented-by`, by reduction id:

```yaml
# content/Barriers/no-oihf-to-ot-bh26.md
class: fully-black-box
circumvented-by: [red-oihf-to-ot-bh26] # BH26's non-black-box OIHF ⇒ OT
```

The lint allows the key only on barriers and requires each entry to be the `id`
of a reduction page. `relations.json` carries it as `circumventedBy`, and the
generated "Participates in" sections name the circumventing reduction beside
the barrier. The circumventing reduction's hypotheses may differ from the
barrier's: `no-zkp-to-argument-systems` (hypotheses `[zkp]`) lists Bar01's
`{crhf} ⇒ constant-round-zk-argument`. A circumvention with no reduction page
yet stays in the barrier's Statement or Notes until the page exists.

### Refutations are attacks, not barriers

A refutation of an assumption or of one of its variants — the counterexamples
to private-coin and circular evasive LWE (BUW24, AMYY25) — goes in the
assumption page's `# Attacks` section with its citation. It is never a barrier
from the variant to the assumption, nor a self-loop: a barrier says which
reductions between two objects can exist, and a refutation says that one object
fails.

## Object ids

Every object page carries an `id` in its frontmatter that is independent of its
slug, because renaming a file must never break a link from the formalization
repo. A page may also declare `variants`: named sub-objects that live inside it
as sections.

```yaml
# content/Assumptions/learning-with-errors.md
id: lwe
variants:
  ring-lwe: "#ring-lwe"
  module-lwe: "#module-lwe"
```

A hyperedge endpoint resolves against, in order:

1. a page `id`,
2. a `variants` key on any page,
3. a key in `propositions.yaml` (barrier consequences only).

A barrier consequence's `target` resolves by its `kind`: `object` against 1–2,
`complexity` against 3, and `reduction` against the `id` of a page under
`content/Reductions/`. The lint rejects a target that does not resolve for its
kind.

Each variant is its own section. Hyperedges are keyed by id, so two variant ids
on one anchor are two nodes: a barrier on one never meets a reduction on the
other, and the contradiction check stays silent. Synonyms keep one id; distinct
notions sharing a section get a heading each. The lint warns on a shared anchor
(`variant-shared-anchor`).

`id` and `variants` declare node _identity_, not edges, which is why they are
allowed on object pages when relation fields (`implies`, `implied-by`, …) are
not. Relations on object pages are always generated, never hand-authored — an
edge list cannot express `{DDH, CRHF} ⇒ B` without misrepresenting each
hypothesis.

`variants` is also the forward-compatibility seam for formal definitions. A
variant is a named security notion or syntax already, so when the Lean/EasyCrypt
repo lands, a variant entry gains a second key pointing at the formal definition
rather than needing a new mechanism:

```yaml
variants:
  ring-lwe:
    anchor: "#ring-lwe"
    formal: "CryptoCity.Assumptions.RLWE" # reserved; not yet consumed
```

Both the string form and the mapping form are accepted, so nothing has to be
rewritten later.

An edge on a variant is listed in the generated "Participates in" section of
the page declaring the variant, under the same headings as an edge on the
page's `id`, with the variant named by the heading its anchor points at:
`(via [[learning-with-errors#ring-lwe|Ring LWE]])`. The anchor is the id the
site gives that heading (github-slugger over the heading text, math by its TeX
source: `## Honest majority ($t < n/2$)` is `#honest-majority-t--n2`); the lint
rejects an anchor that matches no heading (`variant-anchor`). A title or
heading with `$…$` math is linked as a markdown link,
`[$k$-Linear assumption](bilinear-map-assumptions#k-linear-assumption)`,
because a wikilink whose display text holds math renders as raw `[[…]]`
(`wikilink-math`).

A reduction or barrier slug's paper suffix records the page's origin; `source`
is authoritative. When the two disagree on a page that still states the same
theorem, keep the filename (a live URL) and the `id` (`relations.json` and the
formalization repo join on it). The Statement cites the real source, and the
body says nothing about the slug. An id names one theorem and never changes
while the page states it. A page rewritten to state a different theorem
(reversed direction, different conclusion, or a different source theorem)
retires its id and takes `red-<hypotheses>-to-<conclusion>[-<source>]`
(`bar-…` on a barrier), while the filename stays; refining a node on the same
theorem keeps the id. The commit that retires an id names it
(`docs/relations-json.md` § Stability contract).

## Reduction classes

`reduction-classes.yaml` follows Reingold–Trevisan–Vadhan, _Notions of
Reducibility between Cryptographic Primitives_ (TCC 2004), using the formal
restatement and hierarchy diagram of Baecher–Brzuska–Fischlin, _Notions of
Black-Box Reductions, Revisited_ (Asiacrypt 2013,
[eprint 2013/101](https://eprint.iacr.org/2013/101)), Figure 1(a) and Figure 3.
RTV04 is not on ePrint; cite the wiki's reference page.
`content/Glossary/reduction-classes.md` defines each class for readers, one
section per class, and states the order; the class shown under a reduction or
barrier page's title links to its section.

`implies` points from the **narrower** (more restrictive, harder to achieve)
notion to the **broader** one, and means set containment on reductions:
`reductions(X) ⊆ reductions(Y)` for every `Y` in `X.implies`.

```
fully-black-box ──→ semi-black-box ──→ weakly-black-box ──────┐
      │                    │                  │               ↓
      └──→ relativizing ──→ ∀∃-semi-black-box ─→ ∀∃-weakly ──→ free
                                                              ↑
                                     fixed-construction ──────┘
```

`fixed-construction` is this wiki's addition; RTV04 have no such class. The
construction is the one named on the page — the identity map on schemes, or a
named transform such as Fiat–Shamir — and the security proof is unrestricted.
It exists for barriers that refute one construction: "selective security of a
HIBE does not give its adaptive security" rules out the identity map, not every
way of building an adaptively secure HIBE from a selectively secure one, so
recording it as `free` would assert an open problem, and on edges such as
CPA-secure SKE ⇒ IND$-CPA-secure SKE a false one. It implies only `free`, so a
barrier against it bites only a reduction that claims the same named
construction. Title such a barrier "No fixed-construction reduction from A to
B".

**The contradiction rule**, stated in one direction only so it cannot be
misread: a barrier ruling out class `B` contradicts a reduction of class `C` on
the same hyperedge **iff `C implies* B`** — iff every `C`-reduction is also a
`B`-reduction.

- Barrier rules out `relativizing`, reduction claims `fully-black-box`:
  `fully-black-box implies* relativizing`, so it **fires**. This is exactly the
  Impagliazzo–Rudich argument.
- Barrier rules out `fully-black-box`, reduction claims `free`: `free` does not
  imply `fully-black-box`, so it **must not fire**. A barrier against a narrower
  class than the reduction claims is not a contradiction.

`unstated` is a sentinel, not a class: it is comparable to nothing, so the
contradiction check never fires on it. It is the honest value when the source
does not say and the proof shape does not justify a class (below), and it buys
no protection. A reduction and a barrier on one hyperedge with either class
`unstated` may conflict without the check noticing, so the lint warns
(`barrier-conflict-unstated`) unless the barrier lists the reduction in
`circumvented-by` or the reduction is `heuristic`.

Idealised computation models are the **`model`** axis, never `class`. A
generic-group lower bound is a reduction `{ggm} ⇒ X` with
`class: free, model: generic-group` — it is proved for every algorithm in that
model, which is the `free` class scoped by the model (§ Which model to record).

### Which model to record

`model` is the model in which the cited theorem is proved. The model's page
lists the reductions proved in it under **Proved in the …** in its generated
"Participates in" section, except those already under Builds on or Produces:
`rom`, `generic-group` and `algebraic-group` map to the pages with ids `rom`,
`ggm` and `agm` (`MODEL_PAGES` in `scripts/participates-in.mjs`); the other
models have no page.

- **Model only, not also a hypothesis.** An idealised model the proof relies
  on is recorded in `model` and named in the Statement, never also listed in
  `hypotheses`: DLOG ⇒ Schnorr signatures is `hypotheses: [dlog], model: rom`,
  not `[dlog, rom]`, so one theorem always yields one hyperedge. Two
  exceptions keep the model's node as a hypothesis. When it is the only
  hypothesis, since a hyperedge needs one, `{model} ⇒ X` reads "X holds in the
  model": `{rom} ⇒ oblivious-interactive-hash-function`
  (`rom-to-oihf-bh26`), `{agm} ⇒ kea` (`agm-to-kea`). On a barrier, which has
  no `model` field, the model's node is the hypothesis, and the barrier says X
  fails in the model: `{rom} ⇏ ke` (`no-rom-to-ke-hmo-19`). A lower bound on
  attacks in an idealised model is therefore a reduction, never a barrier: Sho97's
  generic-group bound is `{ggm} ⇒ dlog` with `model: generic-group`
  (`ggm-to-dlog-sho97`), while a barrier on that hyperedge would say DLOG is
  not hard for generic algorithms.
- **One model per edge.** `model` is single-valued. A proof using both a
  random oracle and a trusted structured reference string takes `model: rom`,
  with the SRS named in the Statement. A group model combined with a random
  oracle records the group model and names the random oracle in the Statement:
  `dlog-to-bls-signatures-fkl18` is `model: algebraic-group`. A list-valued
  `model` would change the `relations.json` interface, so it waits until
  multi-model edges are common.
- **`quantum`** applies when the reduction, the construction or the adversary
  is quantum, or when either endpoint is a quantum complexity class. The
  classically proved containments BPP ⊆ BQP and BQP ⊆ PP are therefore
  `model: quantum`.
- **Hybrid models.** An ideal-functionality hybrid (a UC proof with an OT or
  commitment functionality) counts as `standard`, even when the source
  instantiates a functionality in the random-oracle model; `rationale.model`
  records the instantiation, as on
  `ot-extension-to-mpc-with-preprocessing-spdz-etc`.

### Which class to record

- **The source states a class:** record it.
- **The source is silent:** record `fully-black-box` when the proof shape
  justifies it — one fixed construction that uses the hypotheses only as
  oracles, and one fixed reduction that uses the adversary only as an oracle
  and works for every adversary — and say so in `rationale.class`. When a
  hypothesis is a hardness assumption, its problem plays the primitive's role:
  the construction uses only its public sampler (a group or modulus
  generator), and the reduction turns any adversary into a solver for it. An
  assumption-to-assumption edge has no construction component; the shape is a
  reduction that uses an arbitrary solver for the conclusion only as an oracle
  (`content/Reductions/sivp-to-lwe-reg05.md`). Otherwise record `unstated`.
- **The construction uses a hypothesis scheme's code** (bootstrapping
  evaluates the scheme's own decryption circuit; recursive SNARKs prove
  statements about the scheme's own verifier): record `free`. The construction
  depends on the scheme's code, so no black-box class applies; `free` records
  only that the implication is proved.

### Recording why: `rationale.class`

Why a page records its class is frontmatter data, `rationale.class` (§ Why a
field holds its value), never a paragraph of the body. Two cases are stock and
get no entry:

- `class: unstated` when the source is silent and nothing more is known;
- `class: free` on an `inclusion` or `equivalence` between complexity classes,
  or of a problem in a class (DLOG ∈ NP), where the reduction-class axis does
  not apply.

Every other case gets one sentence. A recorded class (`fully-black-box`,
`relativizing`, `free`, `fixed-construction`) gets the reason from the proof
shape or the source:

```yaml
class: fully-black-box
rationale:
  class: "The reduction calls the factoring algorithm once as an oracle and never uses its code."
```

An `unstated` class gets one when the source states a notion outside the
vocabulary (a query bound, non-adaptivity, a UC hybrid model), or when there is
a substantive reason no class is recorded (a formalization-dependent claim, an
efficiency requirement outside the RTV04 axes, a proof scoped to an idealised
model that no source classifies). The sentence gives that reason alone: "BL13
rule out black-box reductions of constant query complexity, and the vocabulary
has no query-bounded class." The lint warns when a class other than `unstated`
has no `rationale.class`, the stock `free` case excepted
(`edge-rationale-class`).

## Reduction and barrier pages

A reduction page states the reduction, cites it, and, for a simple reduction,
gives the idea of the proof. A barrier page does the same for the barrier. Why a
field holds its value is frontmatter data. The site renders the relation fields
(a reduction's kind, class and model; a barrier's strength and class) and the
sources in one line under the H1, so the body does not restate them. `content/Templates/Reduction.md` and
`content/Templates/Barrier.md` are the starting points; `CONTRIBUTING.md` has a
worked example of each.

### The page body

In this order:

1. **`# <title>`**, the H1, identical to frontmatter `title`. Nothing sits
   between it and `## Statement`: no intro sentence restating the edge.
2. **`## Statement`**, required. The theorem, precisely, in the wiki's
   notation: quantifiers matching the formal definitions (for all efficient
   $\calA$), the parameter regime, and the hypothesis and conclusion linked on
   first mention to their canonical page or anchor. Every result is cited
   inline where it is stated (`[[KEY - Full Title|KEY]]`, or _— folklore_ /
   _— standard_), so the Statement cites every `source` entry. With several
   sources, each is cited for its contribution; a later work that made the
   result concrete, tight or more general gets one short sentence with its
   citation. A barrier's Statement says which reductions (class, hypotheses,
   conclusion) cannot exist unless its consequence holds; an oracle separation
   names its oracle, and a fixed-construction barrier names the construction.
3. **`## Sketch`**, optional. Only for a simple or standard argument that can
   be stated correctly without the paper: one to three sentences, a pseudocode
   block following `CLAUDE.md` § Pseudocode Blocks, or both. No sketch for a
   complex result, and never a paraphrase of the paper's abstract.
4. **`## Notes`**, optional. Reader-facing mathematical remarks, each cited or
   flagged folklore: the converse (known, open, false); tightness or security
   loss in words; parameter caveats; the relation to a neighbouring result; an
   attribution fact a cryptographer needs ("ElGamal85 predates the DDH
   assumption; TY98 prove IND-CPA under DDH"). The heading is omitted when
   there is nothing to say.
5. A `<!-- BEGIN GENERATED … -->` region, if the page has one, stays untouched.

### Why a field holds its value: `rationale`

`rationale` is an optional mapping on reduction and barrier pages. Each key
names a frontmatter field the page sets, one of the typing decisions below;
each value is one sentence, a single-line string with no TODO, saying why that
value was recorded. Stock sentences get no entry (§ Recording why:
`rationale.class`), and neither does history, a review label or a note on what
was read or checked: the body's rules for those (`body-sourcing-pass`,
`body-page-history`, `body-slug-history`, `body-reported-not-fixed`,
`body-suspected-error`, `body-machine-label`, `body-reading-notes`) apply to
each value. The endpoints, `consequences` and `circumvented-by` take no
rationale; a remark about them a reader needs is a Notes bullet, and a
modelling gap goes to `TODO_SUMMARY.md`. The lint checks all of this
(`edge-rationale`) and rejects the key on any other page type.

| Page type   | Keys                                                                    |
| ----------- | ----------------------------------------------------------------------- |
| `reduction` | `kind`, `class`, `model`, `source`, `via`, `heuristic`, `security-loss` |
| `barrier`   | `class`, `strength`, `conditional-on`, `oracle`, `source`               |

```yaml
model: rom
rationale:
  model: "The reduction programs the random oracle to simulate signatures and rewinds the forger to extract the discrete logarithm."
```

`relations.json` carries the mapping on each reduction and barrier as
`rationale`, keyed by the record's own field names (`securityLoss`,
`conditionalOn`; `docs/relations-json.md`). It is data for
consumers; the page body does not repeat it.

### What stays out of the body

The lint rejects each of these on a reduction or barrier page, under the rule
named after it:

- **Field justifications** (`body-field-justification`): a paragraph or bullet
  opening with a frontmatter field in backticks, `` `class: …`: ``,
  `` `model: …` — ``, `` `heuristic: true` because ``. A substantive reason
  becomes `rationale.<field>`; a stock sentence is dropped; mathematics a
  reader needs (a converse, a loss, a parameter caveat) moves to the Notes.
- **Maintenance history** (`body-sourcing-pass`, `body-page-history`,
  `body-slug-history`): sourcing passes, migrations, what the page used to
  record, slug, filename and id history. Git keeps it.
- **Notes about the wiki rather than the mathematics** (`body-wiki-state`,
  `body-suspected-error`, `body-reported-not-fixed`): repository files and the
  schema; wiki pages, their sections and their state (a stub, a missing page,
  an uncited or over-claimed statement on another page); the review process
  (the fact-check queue, the skeptical-checker, an instruction to change the
  conclusion); how the graph records the result (nodes, ids, "this edge",
  "the flat hypothesis", the target model, modelling gaps); anything in
  backticks, which on these pages is always an id or a field value — name the
  object and link it instead; suspected errors on other pages; review labels
  such as "(reported, not fixed)".
- **Reading notes** (`body-reading-notes`): what was or was not checked, what
  an abstract says.
- **Machine-style labels** (`body-machine-label`): GENUINELY CONJUNCTIVE,
  COLLIDING IDENTIFIERS, and the same labels in sentence case ("Conjunctive:").

A preamble is reported once, as `body-preamble`, and not scanned again. Any of
these that names work still to do goes to `TODO_SUMMARY.md` or the review
queue; pure history is dropped. The structure itself is checked by
`body-h1` (one H1, equal to `title`), `body-preamble` (nothing before the
Statement), `body-statement`, `body-sections` (only Statement, Sketch, Notes,
once each, in order, none empty) and `body-statement-source` (the Statement
cites every `source` entry).

## Adding to these files

- A new **class** needs a `title`, a `summary`, its `implies` edges, and a
  `defined_in` citation. Adding one changes the contradiction check for every
  existing page, so justify the partial-order placement in the commit message.
  It also needs a section on `content/Glossary/reduction-classes.md` whose
  heading's id is the class name, and a row in that page's order table: the
  line under a reduction or barrier page's title links each class to
  `reduction-classes#<class>`, and `test/reduction-classes.test.ts` checks
  every class has its section.
- A new **proposition** needs a `title`, a `believed` flag, and a `page` when
  the wiki has one. `believed: false` is what makes the lint's soft flag fire
  ("this would be a major result — confirm the class"). A barrier whose
  `complexity` consequence is `believed: true` draws a warning
  (`barrier-believed-consequence`): forcing something proved or expected rules
  nothing out, so such a page is usually a reduction `{A} ⇒ Q` or a proved
  fact. It stands only when the target is an open problem whose proof would
  itself be a major result, as `p-neq-np` is for Impagliazzo–Rudich.
- A **rejected** value is how the vocabulary teaches. Prefer adding a rejection
  with a good message over silently accepting a vague value.
