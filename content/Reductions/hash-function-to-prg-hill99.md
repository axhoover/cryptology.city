---
type: reduction
status: draft
title: "Hash function ⇒ PRG"
aliases: []
id: red-hash-function-to-prg-hill99
kind: implication
hypotheses: [hash-function]
conclusion: prg
class: unstated
model: standard
source:
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
  - "[[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]"
security-loss: ""
---

# Hash function ⇒ PRG

[[hash-function|Hash function]] implies [[pseudorandom-generator|PRG]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

Migrated verbatim from [[commitment-scheme]] § Other results:

> - COM from [[pseudorandom-generator|PRG]] (and hence from [[hash-function|OWF]]): Naor's construction uses a PRG to commit to a single bit in a statistically binding, computationally hiding scheme — [[Naor91 - Bit commitment using pseudorandomness|Naor91]]

Migrated verbatim from [[distributed-point-function]] § Other results:

> - DPFs can be constructed from [[hash-function|OWFs]] (concretely, from PRGs) with key size $O(\secpar \log N)$ — [[GI14 - Distributed Point Functions and Their Applications|GI14]]

Migrated verbatim from [[hash-function]] § Other results:

> - If one-way functions exist, then many "Minicrypt" primitives exist, via the chain OWF → PRG ([[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]) → PRF ([[GGM86 - How to construct random functions|GGM86]]):
>   - [[symmetric-key-encryption|Symmetric Key Encryption]]
>   - [[pseudorandom-function|Pseudorandom Functions]]
>   - [[pseudorandom-permutation|Pseudorandom Permutations]]
>   - [[message-authentication-code|Message Authentication Codes]]
>   - [[digital-signature|Digital Signatures]] (via Lamport one-time signatures [[Lam79 - Constructing digital signatures from a one way function|Lam79]] + Merkle trees [[Mer89 - A Certified Digital Signature|Mer89]])

Migrated verbatim from [[hash-function]] § Other results:

> - [[symmetric-key-encryption|Symmetric Key Encryption]]

Migrated verbatim from [[hash-function]] § Other results:

> - [[pseudorandom-function|Pseudorandom Functions]]

Migrated verbatim from [[hash-function]] § Other results:

> - [[pseudorandom-permutation|Pseudorandom Permutations]]

Migrated verbatim from [[hash-function]] § Other results:

> - [[message-authentication-code|Message Authentication Codes]]

Migrated verbatim from [[pseudorandom-function]] § Other results:

> - [[hash-function|OWF]]s imply PRFs via a two-step construction: OWF → PRG ([[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]) → PRF via the GGM binary-tree construction ([[GGM86 - How to construct random functions|GGM86]])
>   - The GGM tree construction: given a length-doubling PRG $G : \bits^n \to \bits^{2n}$, define $\Eval(k, x_1\cdots x_\ell)$ by starting from $k$ and at each bit $x_i$ applying either the left or right half of $G$

Migrated verbatim from [[pseudorandom-generator]] § Other results:

> - [[hash-function|OWF]]s imply PRGs, via the Goldreich-Levin hard-core predicate — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]

Migrated verbatim from [[symmetric-key-encryption]] § Other results:

> - CPA-secure SKE from [[hash-function|OWF]]: the stream cipher $\Enc(k,m) = \PRF(k,r) \oplus m$ (using a fresh nonce $r$) is CPA-secure whenever $\PRF$ is a PRF. Since OWFs imply PRFs via HILL+GGM, SKE follows — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[GGM86 - How to construct random functions|GGM86]]

## Notes

This relation is stated on 11 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- DISJUNCTIVE BUNDLE: "OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures" is five separate one-hypothesis reductions; this record isolates OWF => PRG. Must not be stored as one hyperedge with five conclusions.
- No citation on the clause — the canonical sources (HILL99 for OWF=>PRG, GGM86 for PRG=>PRF, Rom90/NY89 for OWF=>signatures) are absent. GKM+00 is cited earlier in the paragraph but for a different claim.
- None of the five conclusions is wikilinked here — they are bare abbreviations in prose.
- Hypothesis OWF is only reachable via the hash-function page alias.
- UNCITED WHILE THE PARENT IS CITED: Naor91 covers only PRG => COM; the OWF => PRG step is HILL99 and appears nowhere on this bullet.
- The hypothesis slug hash-function is the merged OWF/CRHF page, so OWF and collision-resistant hashing are one node site-wide.
- Class inferred from the standard HILL construction; the page states none.
- COMPOSITE: the parenthetical '(and hence from OWF)' silently chains OWF => PRG, whose citation (HILL99) is not on this bullet.
- `[[hash-function|OWF]]` resolves to the merged hash-function page, which conflates OWF and CRHF as one node — a recurring modeling problem across this chunk.
- Naor's commitment is interactive (the receiver sends a random string first); the bullet presents it as a plain non-interactive scheme matching the page's $(\Gen, \Com, \Open)$ syntax.
- UNCITED WHILE THE PARENT IS CITED: GI14 covers only PRG => DPF; the OWF => PRG step is HILL99 and is not on this bullet.
- hash-function is the merged OWF/CRHF node.
- PRG is written in bare prose here although content/Primitives/pseudorandom-generator.md exists; only the OWF end is linked.
- COMPOSITE: 'from OWFs (concretely, from PRGs)' chains OWF => PRG (HILL99, uncited here) with PRG => DPF (GI14).
- `[[pseudorandom-generator]]` exists but PRG is written in bare prose here; only the OWF end is wikilinked, and it points at the merged hash-function page.
- Citing GL89 alongside HILL99 for one arrow conflates two constructions: GL89 gives a hard-core predicate (PRG from a one-way permutation / regular OWF), HILL99 gives the general OWF => PRG.
- hash-function is the merged OWF/CRHF page, so this hypothesis node also owns collision resistance.
- MOST COMPOSITE BULLET IN THE CHUNK: one bullet plus five sub-bullets encoding at least seven distinct reductions. Must be split.
- The conclusion 'many "Minicrypt" primitives' is not a single object; Minicrypt is an Impagliazzo world, with no page in content/.
- GL89 is the hard-core-predicate result used for the OWP/regular-OWF route to PRGs; the general OWF => PRG construction is HILL99. Citing both for one arrow conflates two different constructions.
- The Digital Signatures sub-bullet does NOT go through the PRG → PRF chain the parent asserts (it goes OWF => one-time signature => signature), so the parent's 'via the chain' framing is wrong for that item.
- PRF => PRP is uncited: the Luby-Rackoff result (LR88) has no reference page in content/References/.
- Citations live on the parent bullet, not this sub-bullet; GL89 and HILL99 are conflated as in the parent.
- Duplicate of the sub-edges of the parent bullet record Primitives/hash-function.md:97; migration must dedupe or the same reduction is imported many times.
- The sub-bullet carries no citation of its own; its provenance is inherited from the parent bullet's chain.
- The final step PRF => SKE (encrypt as $(r, \Eval(k,r) \oplus m)$) is uncited and unflagged folklore.
- Citations (HILL99, GL89) live on the parent bullet only; the two are conflated as one arrow.
- Citations live on the parent bullet only (HILL99/GL89 for OWF => PRG, GGM86 for PRG => PRF).
- This is the canonical two-link chain the target model's split rule is meant to handle.
- Citations live on the parent bullet only.
- MISSING CITATION for the final link: PRF => PRP is the Luby-Rackoff / Feistel result (LR88), which has no reference page and is not cited anywhere on this page.
- The parent bullet's chain stops at PRF, so this sub-bullet silently adds a fourth link.
- Final link PRF => MAC is uncited and unflagged folklore.
- hash-function is the merged OWF/CRHF page, so the OWF hypothesis node also owns collision resistance.
- Duplicates Primitives/hash-function.md:97 sub-edge 0 (which additionally cites GL89) — migration must dedupe.
- COMPOSITE: explicitly a two-step chain (OWF -> PRG -> PRF) with one citation per step; must be split into two reductions.
- OWF resolves to `[[hash-function]]` (shared page with CRHF) — conflation risk.
- The GGM step needs a length-doubling PRG (stated only in the sub-bullet sketch, and on pseudorandom-generator.md line 88).
- Two citations for ONE reduction (HILL99 is the construction; GL89 supplies the hard-core predicate) — not a conjunction of hypotheses.
- OWF resolves to `[[hash-function]]` (shared with CRHF) — conflation risk.
- Slight imprecision: HILL99 does not go 'via the Goldreich-Levin hard-core predicate' alone; GL89 gives PRG from a one-way PERMUTATION, the general OWF case needs the HILL machinery. Recorded, not fixed.
- hash-function is the merged OWF/CRHF page — the OWF node and the CRHF node are one page site-wide, which corrupts any graph built from these edges.
- Duplicates Primitives/hash-function.md:97 sub-edge 0 and Primitives/pseudorandom-function.md:115 sub-edge 0.
- TEXTBOOK COMPOSITE: this single bullet chains OWF => PRG (HILL99) => PRF (GGM86) => CPA-secure SKE (uncited, folklore). Must be split into three reductions; the third link carries no citation and no folklore label.
- `[[hash-function|OWF]]` points at content/Primitives/hash-function.md, the page that also owns CRH/collision-resistance — the OWF node and the CRHF node are the same page site-wide, which will corrupt any graph built from these edges.
- The construction says 'fresh nonce $r$' but writes $\Enc(k,m) = \PRF(k,r) \oplus m$ without stating that $r$ is output as part of the ciphertext; as literally written the scheme is not decryptable. Minor, reported not fixed.
