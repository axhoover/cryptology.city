---
type: reduction
status: draft
title: "DLOG ⇒ Chameleon hash (Krawczyk–Rabin)"
aliases: []
id: red-prime-order-dlog-to-chameleon-hash-function-kr00
kind: implication
hypotheses: [prime-order-dlog]
conclusion: chameleon-hash-function
class: fully-black-box
model: standard
source:
  - "[[KR00 - Chameleon Signatures|KR00]]"
security-loss: "tight: on DLOG challenge $X = 1$ the reduction outputs $0$, and otherwise it sets $h = X$, distributed as in $\\KeyGen$, and turns one collision into $\\log_g X$"
rationale:
  class: "The construction uses only the group sampler and group operations, and the reduction calls the collision finder once, as an oracle, on its DLOG challenge."
---

# DLOG ⇒ Chameleon hash (Krawczyk–Rabin)

## Statement

If [[discrete-logarithm#dlog-in-prime-order-groups|DLOG is hard in prime-order groups]] for $\GrGen$, the following is a collision-resistant, uniform [[chameleon-hash-function|chameleon hash function]] with message and randomness space $\ZZ_p$ and range $\GG$ — [[KR00 - Chameleon Signatures|KR00]]. $\KeyGen(1^\secpar)$ samples $(\GG, g, p) \gets \GrGen(1^\secpar)$ and $x \getsr \ZZ_p^*$ and outputs $\mathit{hk} = (\GG, g, p, h)$ with $h = g^x$ and $\td = x$; $\mathsf{CH}(\mathit{hk}, m; r) = g^m h^r$; $\mathsf{TCol}(x, m, r, m') = r + (m - m')/x \bmod p$.

## Sketch

A collision $g^m h^r = g^{m'} h^{r'}$ with $m \ne m'$ gives $m + xr \equiv m' + xr' \pmod p$, so $r \ne r'$ and $x = (m - m')/(r' - r) \bmod p$: on DLOG challenge $X$ the reduction outputs $0$ if $X = 1$, and otherwise sets $h = X$, distributed as in $\KeyGen$, so a collision finder yields $\log_g X$. Uniformity holds because $h^r$ is uniform in $\GG$ for uniform $r$ when $x \ne 0$.

## Notes

- The function $(m, r) \mapsto g^m h^r$ is the [[dlog-to-com-ped91|Pedersen commitment]] to $m$ with randomness $r$, a [[commitment-scheme|commitment scheme]] — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]].
- Any published collision reveals $x$ by the same computation, so the trapdoor holder cannot exhibit a collision without exposing the trapdoor; chameleon hashes avoiding this are studied by [[AdM04 - On the Key Exposure Problem in Chameleon Hashes|AdM04]].
