---
type: reduction
status: draft
title: "Length-preserving PRF ⇒ PRP on bit strings"
aliases: []
id: red-prf-to-prp-lr88
kind: implication
hypotheses: [length-preserving-prf]
conclusion: bit-string-prp
class: fully-black-box
model: standard
source:
  - "[[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]"
via:
  - "[[switching-lemma|Switching Lemma]]"
security-loss: "sum of the round PRF advantages plus additive $O(q^2/2^n)$ for $q$ queries"
rationale:
  class: "The Feistel network calls the round PRFs only as oracles, each hybrid's reduction runs the distinguisher only as an oracle, and the random-function core is bounded information-theoretically."
---

# Length-preserving PRF ⇒ PRP on bit strings

## Statement

If $\PRF$ is a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] with domain and range $\bits^n$, where $n = n(\secpar) = \omega(\log \secpar)$ is polynomially bounded and computable from $1^\secpar$ in polynomial time, the three-round Feistel network $\Psi[\Eval(k_1,\cdot), \Eval(k_2,\cdot), \Eval(k_3,\cdot)]$ with independent keys $k_i \gets \KeyGen(1^\secpar)$ is a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]] with domain $\bits^{2n}$ — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]. Round $i$ maps $(L_{i-1}, R_{i-1})$ to $(L_i, R_i) = (R_{i-1},\ L_{i-1} \oplus \Eval(k_i, R_{i-1}))$; with $\Invert$ running the rounds backwards, $(L_{i-1}, R_{i-1}) = (R_i \oplus \Eval(k_i, L_i),\ L_i)$, the network is correct, and its block length $2n$ is again at least $1$, polynomially bounded, computable from $1^\secpar$ in polynomial time and $\omega(\log \secpar)$ — standard.

## Sketch

Hybrids replace the round functions one at a time by independent uniformly random functions $f_1, f_2, f_3$, each hop a PRF distinguisher $\calB_i$ making at most $q$ queries. With the $f_i$ sampled lazily, a new query $(L_0, R_0)$ has round-2 input $R_1 = L_0 \oplus f_1(R_0)$, round-3 input $R_2 = R_0 \oplus f_2(R_1)$ and answer $(R_2,\ R_1 \oplus f_3(R_2))$, which is uniform and independent of all earlier answers whenever $R_1$ is a new input to $f_2$ and $R_2$ a new input to $f_3$; so the network answers as a uniformly random function until the bad event, a collision among the round-2 inputs or among the round-3 inputs of the $q$ queries. In the game that answers uniformly throughout, the answers are independent of $f_1$, so two queries share a round-2 input with probability at most $2^{-n}$ (never when they share $R_0$), and the round-3 inputs are the left halves of independent uniform answers; each kind of collision has probability at most $q(q-1)/2^{n+1}$. With the [[switching-lemma|switching lemma]] on $\bits^{2n}$, every $\calA$ making $q$ distinct queries has $\Adv^{\mathrm{prp}}_{\Psi,\calA}(\secpar) \le \sum_{i=1}^{3} \Adv^{\mathrm{prf}}_{\PRF,\calB_i}(\secpar) + q(q-1)/2^n + q(q-1)/2^{2n+1}$ — standard.

## Notes

- The birthday term $O(q^2/2^n)$ makes the bound negligible only when $2^n$ is superpolynomial in $\secpar$ — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].
- Four rounds give a strong PRP ([[prf-to-strong-pseudorandom-permutation-lr88|Length-preserving PRF ⇒ Strong PRP on bit strings]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]; three rounds do not, since two forward queries and one inverse query distinguish them ([[no-prf-to-strong-pseudorandom-permutation-three-round-feistel|No fixed-construction reduction from length-preserving PRF to Strong PRP on bit strings (three-round Feistel)]]) — folklore. Two rounds are not a PRP ([[no-prf-to-prp-two-round-feistel|No fixed-construction reduction from length-preserving PRF to PRP on bit strings (two-round Feistel)]]) — folklore.
- Efficiency: each round evaluates the PRF once on $n$ bits, so a $2n$-bit block costs three PRF calls, or four for a strong PRP; with pairwise-independent permutations in place of the outer rounds, two PRF calls suffice — [[NR99 - On the Construction of Pseudorandom Permutations Luby-Rackoff Revisited|NR99]].
