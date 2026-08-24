---
type: reduction
status: draft
title: "OT ⇒ MPC"
aliases: []
id: red-ot-to-mpc-kil88
kind: implication
hypotheses: [ot]
conclusion: mpc
class: unstated
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
  - "[[GMW87 - How to play ANY mental game|GMW87]]"
  - "[[Yao82 - Protocols for secure computations|Yao82]]"
security-loss: ""
---

# OT ⇒ MPC

[[oblivious-transfer|OT]] implies [[secure-multi-party-computation|MPC]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

Migrated verbatim from [[oblivious-transfer]] § Other results:

> - OT is complete for [[secure-multi-party-computation|secure computation]] — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]

Migrated verbatim from [[secure-multi-party-computation]]:

> With $n-1$ malicious parties, computational assumptions are necessary. [[oblivious-transfer|OT]] is sufficient and complete for this setting.

Migrated verbatim from [[secure-multi-party-computation]] § Other results:

> - MPC with computational security for any function from [[oblivious-transfer|OT]] — [[GMW87 - How to play ANY mental game|GMW87]], [[Yao82 - Protocols for secure computations|Yao82]]

Migrated verbatim from [[secure-multi-party-computation]] § Other results:

> - [[oblivious-transfer|OT]] is complete for (dishonest-majority) MPC — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]

## Notes

This relation is stated on 6 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- "OT is complete for all of MPC" has NO citation (Kilian88 / GMW87 absent from the page and, for Kilian, from content/References/).
- Completeness is a stronger, differently-typed relation than plain implication — the model needs a reduction class for "complete for".
- The wikilink is "`[[Oblivious transfer|OT]]`" (lowercase t), which matches neither alias on content/Primitives/oblivious-transfer.md ("OT", "Oblivious Transfer") — it resolves only if alias matching is case-insensitive.
- MPC is not wikilinked at all here even though content/Primitives/secure-multi-party-computation.md exists.
- Uncited here — OT-completeness is Kil88 (cited at content/Primitives/commitment-scheme.md:65) and GMW87, neither cited on this line and no folklore label.
- Class inferred from the standard (black-box, GMW/IPS-style) compilers; the page states none.
- COMPOSITE: "so Cryptomania is also the world where general secure computation is possible" chains Cryptomania(=TDP) => OT with OT => MPC; both links are uncited.
- The first link depends on the suspect TDP ≡ OT equivalence recorded above, so the chain inherits that error.
- 'complete for' is a stronger/different relation type than 'implies' — the migration should keep completeness distinguishable from a plain reduction.
- No citation here (Kil88 is cited for the same claim at line 61 — duplicate claim across sections).
- 'complete' asserts both directions (OT => MPC and MPC => OT); recorded as 'implies' since only the sufficiency direction is stated explicitly.
- Two citations on one edge: Yao82 is the 2PC result and GMW87 the n-party result — arguably two distinct reductions sharing a bullet.
- Overlaps with line 61 (OT complete for dishonest-majority MPC) and line 47.
- 'complete for' is a two-sided claim (OT suffices AND every MPC functionality yields OT); recorded as 'implies' but a completeness edge type may be wanted.
- Duplicates the sufficiency claim at line 47 and line 60.
