---
type: barrier
status: draft
title: "No fixed-construction reduction from CPA Security to IND$-CPA Security"
aliases: []
id: bar-cpa-security-to-ind-cpa-security
hypotheses: [cpa-security]
conclusion: ind-dollar-cpa-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: unconditional
source: folklore
rationale:
  class: "The construction is the identity map, so the counterexample refutes only the claim that every CPA-secure scheme is itself IND$-CPA-secure; building some other IND$-CPA-secure scheme from a CPA-secure one is not ruled out."
---

# No fixed-construction reduction from CPA Security to IND$-CPA Security

## Statement

The identity map is not a reduction from [[symmetric-key-encryption#cpa-security|CPA security]] to [[symmetric-key-encryption#ind-cpa-security|IND\$-CPA security]] of [[symmetric-key-encryption|SKE]]: appending a constant bit to every ciphertext of a CPA-secure $\SKE$, so that the ciphertext space becomes $\calC \times \bits$, preserves CPA security, while an IND\$-CPA adversary that checks the bit on one query has advantage $1/2$ — folklore.

## Sketch

The appended bit is independent of the message, so a CPA adversary against the modified scheme yields one against the original; a uniform ciphertext carries the constant bit only with probability $1/2$.

## Notes

- The converse holds: IND\$-CPA security implies CPA security, with a factor-2 loss ([[ind-dollar-cpa-security-to-cpa-security|IND\$-CPA ⇒ CPA]]) — standard.
