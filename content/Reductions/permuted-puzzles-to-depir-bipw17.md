---
type: reduction
status: draft
title: "Permuted puzzles ⇒ OLDC"
aliases: []
id: red-bipw17-permuted-puzzles-assumption-to-oblivious-locally-decodable-code-bipw17
kind: implication
hypotheses: [bipw17-permuted-puzzles-assumption]
conclusion: oblivious-locally-decodable-code
class: unstated
model: standard
source:
  - "[[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]"
security-loss: ""
rationale:
  class: "BIPW17 argue security directly from a conjecture about the scheme's own query distribution, so there is no reduction separate from the construction to classify."
---

# Permuted puzzles ⇒ OLDC

## Statement

Suppose the Permuted Low-Degree Polynomials Conjecture of BIPW17, an instance of the [[permuted-puzzles|permuted-puzzles assumption]], holds for a constant dimension $m \ge 3$: for a uniformly random permutation $\pi$ of $\FF^m$, $\pi$-images of $d\secpar + 1$ random points on random degree-$\secpar$ curves through chosen points are indistinguishable from $d\secpar + 1$ uniformly random points of $\FF^m$, over polynomially many samples (Conjecture 4.2). Then the $(m, d)$ Reed–Muller code, with $d = O(n^{1/m})$, $|\FF| = O(d\secpar)$ and its codeword positions permuted by a secret uniformly random $\pi$, is a perfectly correct [[oblivious-locally-decodable-code|oblivious locally decodable code]] with communication complexity $\secpar^m \cdot \tilde O(n^{1/m})$: to decode $x_i$, the decoder reads the $\pi$-images of $d\secpar + 1$ random points on a random degree-$\secpar$ curve through the $i$-th of $n$ fixed points and interpolates — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]] (Construction 4.1, Proposition 4.3). Its query sampler evaluates a degree-$\secpar$ curve at $d\secpar + 1$ points and its decoder interpolates at those points, in time $\poly(\secpar) \cdot \tilde O(n^{2/m})$, sublinear in $n$ for $m \ge 3$ — folklore.

## Notes

- BIPW17's Construction 4.1 samples $\pi$ from a pseudorandom permutation, so that the key is short, and Proposition 4.3 derives its security from Conjecture 4.2, which is stated for a uniformly random $\pi$ — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]. BIPW17 state Proposition 4.3 for every $m \ge 2$.
- The observer of an OLDC sees the positions read but neither the key nor the contents of the encoding — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]. Masking the encoding with a pad in the key gives a [[doubly-efficient-pir#passive-server-sk-depir|passive-server SK-DEPIR]] ([[oblivious-locally-decodable-code-to-passive-sk-depir|OLDC ⇒ Passive-server SK-DEPIR]]) — folklore.
- The conjecture is an instance of BIPW17's Permuted Puzzle Conjecture (Conjecture 4.5) — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]; the assumption family is formalized and studied as _permuted puzzles_ — [[BHW19 - Permuted Puzzles and Cryptographic Hardness|BHW19]].
- An attack breaks the BIPW17 _toy conjecture_, a simplified variant posed for cryptanalysis, but not the assumption underlying the construction — [[BHMW21 - On the Security of Doubly Efficient PIR|BHMW21]].
