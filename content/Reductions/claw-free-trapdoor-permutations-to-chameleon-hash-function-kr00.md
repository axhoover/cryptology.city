---
type: reduction
status: draft
title: "Claw-free TDP ⇒ Chameleon hash (Krawczyk–Rabin)"
aliases: []
id: red-claw-free-trapdoor-permutations-to-chameleon-hash-function-kr00
kind: implication
hypotheses: [claw-free-trapdoor-permutations]
conclusion: chameleon-hash-function
class: fully-black-box
model: standard
source:
  - "[[KR00 - Chameleon Signatures|KR00]]"
security-loss: "none"
rationale:
  class: "The construction evaluates and inverts the two permutations only as oracles, and the reduction calls the collision finder once, as an oracle, and reads a claw off its output."
---

# Claw-free TDP ⇒ Chameleon hash (Krawczyk–Rabin)

## Statement

A [[trapdoor-permutation#claw-free-trapdoor-permutations|claw-free pair of trapdoor permutations]] $(f_0, f_1)$ on a domain $\calD$ gives a collision-resistant, uniform [[chameleon-hash-function|chameleon hash function]] with a prefix-free message space $\calM \subseteq \bits^*$ and randomness space and range $\calD$ — [[KR00 - Chameleon Signatures|KR00]]. The hash key is $\mathit{hk} = (f_0, f_1)$ and the trapdoor is $\td = (\td_0, \td_1)$; for $m = m_1 \cdots m_\ell \in \calM$,

$$
\mathsf{CH}(\mathit{hk}, m; r) = f_{m_1}\!\left(f_{m_2}\!\left(\cdots f_{m_\ell}(r) \cdots\right)\right),
$$

and $\mathsf{TCol}(\td, m, r, m')$ applies $f_{m'_1}^{-1}, f_{m'_2}^{-1}, \ldots$ in turn to $\mathsf{CH}(\mathit{hk}, m; r)$.

## Sketch

Given a collision $\mathsf{CH}(\mathit{hk}, m; r) = \mathsf{CH}(\mathit{hk}, m'; r')$ with $m \ne m'$, peel the outermost permutations off both sides while the leading bits agree; since neither message is a prefix of the other, a first position $k$ with $m_k \ne m'_k$ is reached before either message ends, and the two arguments of $f_{m_k}$ and $f_{m'_k}$ there form a claw. Every composition is a permutation of $\calD$, so $\mathsf{CH}(\mathit{hk}, m; r)$ is uniform for uniform $r$, whatever $m$.

## Notes

- The composition and the prefix-free encoding are those of the GMR signature scheme — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]].
