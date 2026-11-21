---
type: barrier
status: draft
title: "No fixed-construction reduction from PRF to Strong PRP (three-round Feistel)"
aliases: []
id: bar-prf-to-strong-pseudorandom-permutation-three-round-feistel
hypotheses: [prf]
conclusion: strong-pseudorandom-permutation
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [prf]
circumvented-by: [red-prf-to-strong-pseudorandom-permutation-lr88]
source: folklore
rationale:
  strength: "The distinguisher refutes the construction instantiated with a PRF, so the barrier assumes one exists; without one the implication holds vacuously."
  class: "The attack refutes the three-round Feistel network on keyed round functions and does not rule out building a strong PRP from a PRF otherwise, as four rounds do."
---

# No fixed-construction reduction from PRF to Strong PRP (three-round Feistel)

## Statement

If a [[pseudorandom-function|PRF]] $\PRF$ with domain and range $\bits^n$ exists, the three-round Feistel network $\Psi[\Eval(k_1, \cdot), \Eval(k_2, \cdot), \Eval(k_3, \cdot)]$ with independent keys, a [[pseudorandom-permutation|PRP]] by [[prf-to-prp-lr88|PRF ⇒ PRP]], is not a [[pseudorandom-permutation#strong-security|strong PRP]] on $\bits^{2n}$. The adversary that queries the forward oracle at $(L, R)$ and $(L', R)$ with $L \ne L'$, receiving $(S, T)$ and $(S', T')$, queries the inverse oracle at $(S',\ T' \oplus L \oplus L')$, and outputs $b' = 0$ iff the right half of the answer is $R \oplus S \oplus S'$ has advantage $\Adv^{\mathrm{sprp}} \ge 1 - 2^{1-n}$ for $n \ge 2$, whatever the round functions — folklore.

## Sketch

With $f_i := \Eval(k_i, \cdot)$, write $a := L \oplus f_1(R)$ and $a' := L' \oplus f_1(R)$ for the round-2 inputs, so $a \oplus a' = L \oplus L'$, $S = R \oplus f_2(a)$, $T = a \oplus f_3(S)$, and likewise $S' = R \oplus f_2(a')$, $T' = a' \oplus f_3(S')$. Undoing round 3 on $(S', T' \oplus L \oplus L')$ gives $(a, S')$, and undoing round 2 gives left half $S' \oplus f_2(a) = R \oplus S \oplus S'$, which undoing round 1 moves to the right half of the answer, for all $f_1, f_2, f_3$. For a uniform permutation the inverse query is the first answer $(S, T)$ with probability $1/(2^{2n} - 1)$, and otherwise a fresh point whose preimage is uniform over $2^{2n} - 2$ values, at most $2^n$ of them with right half $R \oplus S \oplus S'$; the test passes with probability at most $(2^n + 1)/(2^{2n} - 2) \le 2^{1-n}$ for $n \ge 2$.

## Notes

- Four rounds give a strong PRP ([[prf-to-strong-pseudorandom-permutation-lr88|PRF ⇒ Strong PRP]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].
- One and two rounds are not even PRPs ([[no-prf-to-prp-two-round-feistel|No fixed-construction reduction from PRF to PRP (two-round Feistel)]]) — folklore.
