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

`class: free`: the separation is an explicit counterexample, not a restriction on proof technique: from any CPA-secure scheme, appending a constant bit to every ciphertext yields a scheme that is still CPA-secure and trivially distinguishable from uniform. That rules out the implication itself, which is `free` by the repo's convention for barriers.
