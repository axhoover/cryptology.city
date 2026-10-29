---
type: barrier
status: draft
title: "No tight simple reduction from non-interactive assumptions to Waters signatures"
aliases: []
id: bar-non-interactive-assumption-to-waters-signature-hjk12
hypotheses: [non-interactive-assumption]
conclusion: waters-signature
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: conditional
conditional-on: [non-interactive-assumption]
circumvented-by:
  - red-type-1-pairing-and-cdh-to-ds-wat05
source:
  - "[[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]]"
rationale:
  class: "HJK12's meta-reduction rules out simple reductions, which invoke the forger only as straight-line instances run one after another, losing less than a factor of order q_S, and the vocabulary has neither a tightness class nor a class of simple reductions."
  strength: "The meta-reduction turns any such reduction into an efficient algorithm breaking the assumption, so the barrier rules a reduction out exactly when the assumption holds; no further assumption is used."
---

# No tight simple reduction from non-interactive assumptions to Waters signatures

## Statement

Let $\Pi$ be a [[falsifiable-assumptions#non-interactive-assumptions|non-interactive assumption]]. Every simple reduction from $\Pi$ to the [[digital-signature#existential-unforgeability|EUF-CMA]] security of [[digital-signature#waters-signatures|Waters signatures]] loses a factor $\Omega(q_S)$, for $q_S$ signing queries, unless $\Pi$ is false. The meta-reduction is stated for black-box reductions to signature schemes with efficiently re-randomizable signatures, and Waters signatures re-randomize publicly — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]]. A reduction is simple if it invokes the forger only as straight-line instances, run one after another; Coron's meta-reduction and its extensions rule out only simple reductions — [[MP18 - On the Security Loss of Unique Signatures|MP18]].

## Notes

- Waters's reduction from [[computational-diffie-hellman|CDH]] in a symmetric bilinear group ([[type-1-pairing-and-cdh-to-ds-wat05|Type 1 pairing + CDH ⇒ Waters signatures]]) loses a factor $O(n q_S)$ for $n$-bit messages — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]]; recasting its hash as a programmable hash function improves the loss to $O(\sqrt{n}\, q_S)$ — [[HK08 - Programmable Hash Functions and Their Applications|HK08]]. Waters signatures on messages encoded so that any two encodings are far apart in Hamming distance are EUF-CMA under CDH with loss $O(q_S)$, which the bound shows optimal up to a constant factor among simple reductions — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]].
- Coron's earlier meta-reduction, stated for schemes with unique signatures, gives the bound for [[digital-signature#bls-signatures|BLS signatures]] ([[no-tight-non-interactive-assumption-to-boneh-lynn-shacham-signature-cor02|the barrier for BLS signatures]]) — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]].
- In the random-oracle model the meta-reduction does not capture every scheme with unique, hence re-randomizable, signatures: a reduction from CDH for the chain-based unique signature scheme loses at most $n \cdot q_H^{1/n}$ for $q_H$ hash queries — [[GCS+17 - Optimal Security Reductions for Unique Signatures Bypassing Impossibilities with a Counterexample|GCS+17]].
