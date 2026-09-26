---
type: barrier
status: draft
title: "No reduction from CPA Security to IND$-CPA Security"
aliases: []
id: bar-cpa-security-to-ind-cpa-security
hypotheses: [cpa-security]
conclusion: ind-dollar-cpa-security
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source: folklore
---

# No reduction from CPA Security to IND$-CPA Security

A reduction of class `free` from [[symmetric-key-encryption#cpa-security|CPA Security]] to [[symmetric-key-encryption#ind-cpa-security|IND$-CPA Security]] would imply a contradiction.

## Statement

[[symmetric-key-encryption#ind-cpa-security|IND\$-CPA security]] is strictly stronger than [[symmetric-key-encryption#cpa-security|CPA security]]: appending a constant bit to every ciphertext of a CPA-secure $\SKE$ preserves CPA security, while an IND\$-CPA adversary that checks the bit on one query has advantage $1/2$ — folklore.

## Sketch

The appended bit is independent of the message, so a CPA adversary against the modified scheme yields one against the original; a uniform ciphertext carries the constant bit only with probability $1/2$.

## Notes

`class: free`: the separation is a counterexample, not a restriction on proof technique, so it rules out the implication itself.
