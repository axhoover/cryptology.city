---
type: barrier
status: draft
title: "No fixed-construction reduction from PRF to PRP (two-round Feistel)"
aliases: []
id: bar-prf-to-prp-two-round-feistel
hypotheses: [prf]
conclusion: prp
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [prf]
circumvented-by: [red-prf-to-prp-lr88]
source: folklore
rationale:
  strength: "The distinguisher refutes the construction instantiated with a PRF, so the barrier assumes one exists; without one the implication holds vacuously."
  class: "The attack refutes the two-round Feistel network on keyed round functions and does not rule out building a PRP from a PRF otherwise, as three rounds do."
---

# No fixed-construction reduction from PRF to PRP (two-round Feistel)

## Statement

If a [[pseudorandom-function|PRF]] $\PRF$ with domain and range $\bits^n$ exists, the two-round Feistel network $\Psi[\Eval(k_1, \cdot), \Eval(k_2, \cdot)]$ with independent keys, which maps $(L_0, R_0)$ to $(L_2, R_2)$ with $(L_i, R_i) = (R_{i-1},\ L_{i-1} \oplus \Eval(k_i, R_{i-1}))$, is not a [[pseudorandom-permutation|PRP]] on $\bits^{2n}$: the adversary that queries $(L, R)$ and $(L', R)$ with $L \ne L'$ and outputs $b' = 0$ iff the left halves of the two answers XOR to $L \oplus L'$ has advantage $\Adv^{\mathrm{prp}} = 1 - 2^n/(2^{2n} - 1)$, whatever the round functions — folklore.

## Sketch

With $f_i := \Eval(k_i, \cdot)$, two rounds map $(L_0, R_0)$ to $\big(L_0 \oplus f_1(R_0),\ R_0 \oplus f_2(L_0 \oplus f_1(R_0))\big)$, so two inputs with the same right half $R$ have left output halves XORing to $L \oplus L'$ for all $f_1, f_2$. A uniform permutation maps the two distinct inputs to a uniform pair of distinct outputs; given the first, exactly $2^n$ of the $2^{2n} - 1$ values left for the second have left half differing from the first's by the fixed nonzero $L \oplus L'$.

## Notes

- One round fails with one query: $(L, R) \mapsto (R,\ L \oplus f_1(R))$ puts the right half of the input on the left, which a uniform permutation of $\bits^{2n}$ does with probability $2^{-n}$, an advantage of $1 - 2^{-n}$ — folklore.
- Three rounds give a PRP ([[prf-to-prp-lr88|PRF ⇒ PRP]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]] — but not a strong PRP ([[no-prf-to-strong-pseudorandom-permutation-three-round-feistel|No fixed-construction reduction from PRF to Strong PRP (three-round Feistel)]]) — folklore.
