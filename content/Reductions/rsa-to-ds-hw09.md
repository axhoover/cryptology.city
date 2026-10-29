---
type: reduction
status: draft
title: "RSA ⇒ DS (Hohenberger–Waters, short and stateless)"
aliases: []
id: red-rsa-to-ds-hw09
kind: implication
hypotheses: [rsa]
conclusion: ds
class: unstated
model: standard
source:
  - "[[HW09 - Short and Stateless Signatures from the RSA Assumption|HW09]]"
security-loss: ""
---

# RSA ⇒ DS (Hohenberger–Waters, short and stateless)

## Statement

If [[rsa-assumption|RSA]] is hard, there is a stateless [[digital-signature|signature scheme]] that is [[digital-signature#existential-unforgeability|EUF-CMA]] in the standard model and whose signatures consist of one element of $\ZZ_N^*$ and one integer — [[HW09 - Short and Stateless Signatures from the RSA Assumption|HW09]]. The scheme is first shown weakly secure, by a technique in which the simulator predicts a prefix of the message the adversary will forge on, and then made fully secure with a chameleon hash — [[HW09 - Short and Stateless Signatures from the RSA Assumption|HW09]].

## Notes

- Efficiency: the public key is the modulus $N$, one element of $\ZZ_N^*$, one integer and one PRF seed. Earlier short standard-model signatures in the RSA setting needed a stronger assumption such as strong RSA, or a stateful signer — [[HW09 - Short and Stateless Signatures from the RSA Assumption|HW09]].
