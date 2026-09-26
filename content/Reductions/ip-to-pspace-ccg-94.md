---
type: reduction
status: draft
title: "IP ⊆ PSPACE"
aliases: []
id: red-ip-to-pspace-ccg-94
kind: inclusion
hypotheses: [ip]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# IP ⊆ PSPACE

[[interactive-proof-systems|IP]] is contained in [[polynomial-space|PSPACE]].

## Statement

$\classIP \subseteq \classPSPACE$: for every [[interactive-proof-systems|IP]] verifier, the maximum acceptance probability over all prover strategies is computable in [[polynomial-space|PSPACE]] by recursion over the interaction tree — folklore.

## Sketch

Fix the verifier. The optimal acceptance probability of a partial transcript is the maximum over the prover's next message at prover moves and the average over the verifier's coins at verifier moves. Depth-first evaluation of this recursion over the polynomial-depth interaction tree uses polynomial space; accept iff the value at the root is at least $2/3$.

## Notes

`class: free`: proven complexity-class containment; the reduction-class axis does not discriminate.

- The relativized separation $\classIP^A \neq \classPSPACE^A$ for almost all oracles $A$ ([[CCG+94 - The random oracle hypothesis is false|CCG+94]]) is a distinct statement, recorded at [[no-rom-to-roh-ccg-94]].
