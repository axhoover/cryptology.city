---
type: reduction
status: draft
title: "Arbitrary-length CRHF ⇒ Weakly collision-resistant hash"
aliases: []
id: red-arbitrary-length-crhf-to-weakly-collision-resistant-hash
kind: implication
hypotheses: [arbitrary-length-crhf]
conclusion: weakly-collision-resistant-hash
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the collision finder has the same advantage, in the time of the oracle adversary plus one evaluation of the family per query"
rationale:
  class: "The weakly collision-resistant family is the hash family itself, and the collision finder runs any oracle adversary once, answering its queries with the public key."
---

# Arbitrary-length CRHF ⇒ Weakly collision-resistant hash

## Statement

Every [[hash-function#arbitrary-length-collision-resistance|arbitrary-length CRHF]] $\hash : \calK \times \bits^* \to \bits^m$ is [[hash-function#weak-collision-resistance|weakly collision resistant]] on $\bits^*$. For every adversary $\calA$ whose $q$ oracle queries have total length $L$, the collision finder $\calB(1^\secpar, k)$ that runs $\calA(1^\secpar)$, answers each query $x$ with $\hash(k, x)$ and outputs $\calA$'s pair has

$$
\Adv^{\mathrm{cr}}_{\hash,\calB}(\secpar) = \Adv^{\mathrm{wcr}}_{\hash,\calA}(\secpar),
$$

in the time of $\calA$ plus the $q$ evaluations of $\hash(k, \cdot)$, which take time polynomial in $\secpar$ and $L$ — folklore.

## Notes

- Merkle–Damgård iteration of a CRHF is an arbitrary-length CRHF ([[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]]) — [[Rog06 - Formalizing Human Ignorance|Rog06]]; [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] key such an iteration by a secret initial value in place of $0^m$ and require only its weak collision resistance (Definition 3.1).
