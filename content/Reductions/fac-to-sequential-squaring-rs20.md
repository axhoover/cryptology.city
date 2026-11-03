---
type: reduction
status: draft
title: "FAC ⇒ Sequential squaring (generic ring model)"
aliases: []
id: red-fac-to-sequential-squaring-rs20
kind: implication
hypotheses: [fac]
conclusion: sequential-squaring
class: free
model: other
source:
  - "[[RS20b - Generically Speeding-Up Repeated Squaring Is Equivalent to Factoring Sharp Thresholds for All Generic-Ring Delay Functions|RS20b]]"
security-loss: ""
rationale:
  class: "RS20b's theorem covers every generic-ring algorithm with preprocessing and polynomially many parallel processors, restricting only its access to the ring and not its technique, which is the free class scoped by the model."
  model: "The theorem is proved for generic-ring algorithms, which is none of the named models and differs from the generic group model."
---

# FAC ⇒ Sequential squaring (generic ring model)

## Statement

If [[factoring|factoring]] $N$ is hard, then no algorithm that treats $\ZZ_N$ as a generic ring computes $x^{2^T} \bmod N$ faster than $T$ sequential squarings, even after a preprocessing stage and with polynomially many parallel processors: generically speeding up repeated squaring is equivalent to factoring — [[RS20b - Generically Speeding-Up Repeated Squaring Is Equivalent to Factoring Sharp Thresholds for All Generic-Ring Delay Functions|RS20b]]. Against generic-ring algorithms this gives [[sequential-squaring|sequential squaring]] with every gap $\varepsilon \in (0, 1)$. Algorithms that use the representation of ring elements are not covered.

## Notes

- RS20b prove more generally that every generic-ring delay function relative to an RSA modulus has a sharp sequentiality threshold, given by its sequentiality depth, assuming factoring is hard in the standard model — [[RS20b - Generically Speeding-Up Repeated Squaring Is Equivalent to Factoring Sharp Thresholds for All Generic-Ring Delay Functions|RS20b]].
- The converse holds in the standard model: factoring $N$ gives $x^{2^T}$ in time $\poly(\secpar, \log T)$ ([[sequential-squaring-to-fac-rsw96|Sequential squaring ⇒ FAC]]) — [[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]].
- In cyclic groups of known order no generic-group delay function exists — [[RSS20 - Generic-Group Delay Functions Require Hidden-Order Groups|RSS20]].
