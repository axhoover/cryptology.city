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

## Statement

[[interactive-proof-systems|IP]] $\subseteq$ [[polynomial-space|PSPACE]]: for every $\classIP$ verifier, the maximum acceptance probability on input $x$ over all prover strategies is computable in space polynomial in $|x|$ — folklore.

## Sketch

Fix the verifier and its $r$ coins. For a partial transcript $\tau$, let $N(\tau)$ be the maximum, over prover continuations, of the number of coin strings consistent with $\tau$ on which the verifier accepts: $N(\tau)$ is the maximum of $N(\tau m)$ over the prover's next message $m$ at prover moves and the sum of $N(\tau a)$ over the verifier's next message $a$ at verifier moves. Depth-first evaluation over the polynomial-depth interaction tree uses polynomial space; the maximum acceptance probability is $N(\varepsilon)/2^r$ for the empty transcript $\varepsilon$, and $x$ is accepted iff it is at least $2/3$.

## Notes

- The converse [[pspace-to-ip-sha90|PSPACE ⊆ IP]] holds, so $\classIP = \classPSPACE$ — [[Sha90 - IP = PSPACE|Sha90]].
- For almost all oracles $A$, $\classIP^A \neq \classPSPACE^A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]]; see [[random-oracle-hypothesis#refutation|the refutation of the random oracle hypothesis]].
