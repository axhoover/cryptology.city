# `schema/` — the machine-readable vocabulary

These files are read by `scripts/lint.mjs` and by the `relations.json` emitter.
They are the single source of truth for the values a `reduction` or `barrier`
page may use. Editing a page is cheap; editing these files changes what the
whole wiki is allowed to say, so change them deliberately.

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
one hypothesis; a conjunction of hypotheses is always an `implication`.

Two further rules follow, and the lint enforces both:

- **Disjunction and conjunction must stay distinguishable.** Several
  assumptions each independently sufficient — LWE ⇒ PKE, DDH ⇒ PKE — are
  _separate_ reduction pages with one hypothesis each. Several assumptions
  jointly required are _one_ page with several hypotheses. Disjunction is never
  encoded inside a single page.
- **Composite chains are split.** "OWF → PRG (HILL99) → PRF via GGM (GGM86)" is
  two reduction pages, each with its own source — never one OWF ⇒ PRF page.

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

## Reduction classes

`reduction-classes.yaml` follows Reingold–Trevisan–Vadhan, _Notions of
Reducibility between Cryptographic Primitives_ (TCC 2004), using the formal
restatement and hierarchy diagram of Baecher–Brzuska–Fischlin, _Notions of
Black-Box Reductions, Revisited_ (Asiacrypt 2013,
[eprint 2013/101](https://eprint.iacr.org/2013/101)), Figure 1(a) and Figure 3.
RTV04 is not on ePrint; cite the wiki's reference page.

`implies` points from the **narrower** (more restrictive, harder to achieve)
notion to the **broader** one, and means set containment on reductions:
`reductions(X) ⊆ reductions(Y)` for every `Y` in `X.implies`.

```
fully-black-box ──→ semi-black-box ──→ weakly-black-box ──────┐
      │                    │                  │               ↓
      └──→ relativizing ──→ ∀∃-semi-black-box ─→ ∀∃-weakly ──→ free
```

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
does not say, and it buys no protection.

Idealised computation models are the **`model`** axis, never `class`. A
generic-group lower bound is `class: free, model: generic-group` — it rules out
every algorithm in that model, which is the `free` class scoped by the model.

## Adding to these files

- A new **class** needs a `title`, a `summary`, its `implies` edges, and a
  `defined_in` citation. Adding one changes the contradiction check for every
  existing page, so justify the partial-order placement in the commit message.
- A new **proposition** needs a `title`, a `believed` flag, and a `page` when
  the wiki has one. `believed: false` is what makes the lint's soft flag fire
  ("this would be a major result — confirm the class").
- A **rejected** value is how the vocabulary teaches. Prefer adding a rejection
  with a good message over silently accepting a vague value.
