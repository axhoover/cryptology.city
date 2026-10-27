---
type: barrier
status: draft
title: "No tight simple reduction from non-interactive assumptions to BLS signatures"
aliases: []
id: bar-non-interactive-assumption-to-boneh-lynn-shacham-signature-cor02
hypotheses: [non-interactive-assumption]
conclusion: boneh-lynn-shacham-signature
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: conditional
conditional-on: [non-interactive-assumption]
circumvented-by:
  - red-co-cdh-to-ds
  - red-dlog-to-bls-signatures-fkl18
source:
  - "[[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]]"
  - "[[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]]"
rationale:
  class: "Cor02 rules out simple reductions, which invoke the forger only as straight-line instances run one after another, losing less than about q_S, and the vocabulary has neither a tightness class nor a class of simple reductions."
  strength: "The meta-reduction turns any such reduction into an efficient algorithm breaking the assumption, so the barrier rules a reduction out exactly when the assumption holds; no further assumption is used."
---

# No tight simple reduction from non-interactive assumptions to BLS signatures

## Statement

Let $\Pi$ be a [[falsifiable-assumptions#non-interactive-assumptions|non-interactive assumption]]. Every simple reduction from $\Pi$ to the [[digital-signature#existential-unforgeability|EUF-CMA]] security of [[digital-signature#bls-signatures|BLS signatures]] in the [[random-oracle-model|random-oracle model]] loses a factor of about $q_S$, the number of the forger's signing queries: a simple reduction that loses less yields an efficient algorithm breaking $\Pi$ — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]], [[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]]. A reduction is simple if it invokes the forger only as straight-line instances, run one after another; Coron's meta-reduction and its extensions rule out only simple reductions — [[MP18 - On the Security Loss of Unique Signatures|MP18]].

Coron stated his meta-reduction for signature schemes with unique signatures and applied it to full-domain hash and the Gennaro–Halevi–Rabin scheme — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]]. It needs the public key that the reduction hands the forger to be efficiently recognizable as correctly formed, so the bound holds for full-domain hash only over a certified trapdoor permutation, and not for RSA full-domain hash at practical parameters — [[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]]. BLS signatures have certified keys: every element of $\GG_2$ is a public key, and under each one exactly one $\sigma \in \GG_1$ verifies on each message — standard. The loss of BLS signatures, linear in $q_S$, cannot be avoided with current proof techniques — [[BW24 - Tightly Secure Non-interactive BLS Multi-signatures|BW24]].

## Notes

- The reduction from [[co-computational-diffie-hellman|co-CDH]] ([[co-cdh-to-ds|co-CDH ⇒ BLS signatures]]) loses a factor $e(q_S + 1)$, which matches the bound up to a constant factor — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].
- For algebraic forgers in the [[algebraic-group-model|algebraic group model]], EUF-CMA security of BLS signatures reduces tightly to [[discrete-logarithm|DLOG]] ([[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]) — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].
- Without certified keys the bound can fail: RSA full-domain hash with a small prime exponent is tightly EUF-CMA under [[rsa-assumption#φ-hiding|Φ-hiding]] ([[phi-hiding-to-ds-kk12|Φ-Hiding ⇒ DS]]) — [[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]].
- The meta-reduction is extended to schemes with efficiently re-randomizable signatures, among them Waters signatures ([[no-tight-non-interactive-assumption-to-waters-signature-hjk12|the barrier for Waters signatures]]) — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]]. A simpler meta-reduction gives better bounds and rules out tight reductions from a very general class of non-interactive assumptions — [[BJLS16 - On the Impossibility of Tight Cryptographic Reductions|BJLS16]].
- Without the restrictions to simple reductions and to non-interactive assumptions: if a black-box reduction whose security loss is bounded by a polynomial fixed in advance bases the security of a unique signature scheme on a [[falsifiable-assumptions#bounded-round-assumptions|bounded-round assumption]], the assumption can be broken in polynomial time — [[MP18 - On the Security Loss of Unique Signatures|MP18]].
- Coron's meta-reduction does not cover every scheme with unique signatures in the random-oracle model. For the chain-based unique signature scheme, whose signature is $n$ BLS signatures computed in sequence, a reduction from CDH loses at most $n \cdot q_H^{1/n}$ for $q_H$ hash queries, and the meta-reductions of Cor02, HJK12 and BJLS16 do not capture it — [[GCS+17 - Optimal Security Reductions for Unique Signatures Bypassing Impossibilities with a Counterexample|GCS+17]]. A simple reduction for that scheme from a non-interactive assumption loses at least a factor $q_S^{1/n}$ for $q_S$ signing queries unless the assumption is false, and a reduction from CDH losing $4 q_S^{1/n}$ attains it up to a constant factor — [[GS22 - Optimal Tightness for Chain-Based Unique Signatures|GS22]].
