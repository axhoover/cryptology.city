---
type: reduction
status: draft
title: "CRHF ⇒ Weakly collision-resistant hash"
aliases: []
id: red-crhf-to-weakly-collision-resistant-hash
kind: implication
hypotheses: [crhf]
conclusion: weakly-collision-resistant-hash
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the collision finder has the same advantage, in the time of the oracle adversary plus one evaluation of the family per query"
rationale:
  class: "The weakly collision-resistant family is the hash family itself, and the collision finder runs any oracle adversary once, answering its queries with the public key."
---

# CRHF ⇒ Weakly collision-resistant hash

## Statement

Every [[hash-function#collision-resistance|collision-resistant]] family $\hash : \calK \times \bits^n \to \bits^m$, $m < n$, is [[hash-function#weak-collision-resistance|weakly collision resistant]]. For every adversary $\calA$ that makes $q$ oracle queries, the collision finder $\calB(1^\secpar, k)$ that runs $\calA(1^\secpar)$, answers each query $x$ with $\hash(k, x)$ and outputs $\calA$'s pair has

$$
\Adv^{\mathrm{cr}}_{\hash,\calB}(\secpar) = \Adv^{\mathrm{wcr}}_{\hash,\calA}(\secpar),
$$

in the time of $\calA$ plus $q$ evaluations of $\hash(k, \cdot)$ — folklore. The same holds for a family on other finite sets read through the binary encodings of the CRHF definition.

## Notes

- [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Section 3) note that weak collision resistance is weaker than collision resistance: a collision finder for a hidden key must obtain every value of the function from the key holder.
- The same simulation applies to an arbitrary-length family ([[arbitrary-length-crhf-to-weakly-collision-resistant-hash|Arbitrary-length CRHF ⇒ Arbitrary-length weakly collision-resistant hash]]) — folklore.
