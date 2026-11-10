---
type: reduction
status: draft
title: "Low-noise LPN + DDH ⇒ NIZK argument for NP"
aliases: []
id: red-lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20
kind: implication
hypotheses: [lpn-low-noise, ddh]
conclusion: nizk-argument-for-np
class: unstated
model: crs
source:
  - "[[BKM20 - NIZK from LPN and Trapdoor Hash via Correlation Intractability for Approximable Relations|BKM20]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: ""
---

# Low-noise LPN + DDH ⇒ NIZK argument for NP

## Statement

If [[learning-parity-with-noise#low-noise-lpn|low-noise LPN]] is hard and [[decisional-diffie-hellman|DDH]] holds, every language in $\classNP$ has a computational [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK argument]] in the common random string model, with adaptive soundness and adaptive zero knowledge — [[BKM20 - NIZK from LPN and Trapdoor Hash via Correlation Intractability for Approximable Relations|BKM20]]. More generally, low-noise LPN and any rate-1 [[trapdoor-hash-function|trapdoor hash function]] for constant-degree functions with an enhanced correctness property, which all existing constructions satisfy, suffice; DDH enters through the rate-1 trapdoor hash of [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]] — [[BKM20 - NIZK from LPN and Trapdoor Hash via Correlation Intractability for Approximable Relations|BKM20]].

## Notes

- The same construction gives NIZK arguments from low-noise LPN together with QR or DCR, through the trapdoor hash functions of [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]] ([[qr-to-tdh-dgi-19|QR ⇒ TDH]], [[dcr-to-tdh-dgi-19|DCR ⇒ TDH]]) — [[BKM20 - NIZK from LPN and Trapdoor Hash via Correlation Intractability for Approximable Relations|BKM20]].
- [[learning-parity-with-noise#low-noise-lpn|Low-noise LPN]] alone, at noise rate $\Theta(\log^{1+\beta}(k)/k)$ for a constant $\beta \in (0,1)$, gives trapdoor hash functions only with slightly sublinear compression, not rate 1 ([[noise-level-to-tdh-amr25|Low-noise LPN ⇒ Slightly sublinear TDH]]), and they do not appear efficient enough for this route to correlation intractability — [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].
