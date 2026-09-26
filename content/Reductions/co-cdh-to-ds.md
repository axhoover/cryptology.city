---
type: reduction
status: draft
title: "co-CDH ⇒ DS"
aliases: []
id: red-co-cdh-to-ds
kind: implication
hypotheses: [co-cdh]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[BLS01 - Short Signatures from the Weil Pairing|BLS01]]"
security-loss: "factor $e(q_S+1)$ over the co-CDH advantage: a forger with advantage $\\varepsilon$ making $q_S$ signing queries yields a co-CDH solver with advantage $\\varepsilon/(e(q_S+1))$ and $O(q_H + q_S)$ extra group operations"
---

# co-CDH ⇒ DS

[[co-computational-diffie-hellman|co-CDH]] implies [[digital-signature|DS]].

## Statement

[[digital-signature#bls-signatures|BLS signatures]]: in a bilinear group pair $(\GG_1, \GG_2)$ of prime order $p$ with pairing $e : \GG_1 \times \GG_2 \to \GG_T$ and hash $H : \bits^* \to \GG_1$, $\sk = x \getsr \ZZ_p$, $\pk = g_2^x$ for a generator $g_2$ of $\GG_2$, $\Sign(\sk, m) = H(m)^x$, and $\Vrfy$ accepts $(m, \sigma)$ iff $e(\sigma, g_2) = e(H(m), \pk)$. With $H$ a random oracle, the scheme is EUF-CMA secure if [[co-computational-diffie-hellman|co-CDH]] is hard in $(\GG_1, \GG_2)$ — [[BLS01 - Short Signatures from the Weil Pairing|BLS01]], [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].

## Sketch

The reduction receives a co-CDH challenge $(g_2^a, h)$ with $h \in \GG_1$, sets $\pk = g_2^a$, and programs $H$: each new query is answered by $\psi(g_2)^{r}$ with known $r$, except with probability $1/(q_S+1)$ by $h \cdot \psi(g_2)^{r}$, where $\psi : \GG_2 \to \GG_1$ is the efficiently computable isomorphism of the co-GDH definition. Signing queries on points of the first kind are answered by $\psi(g_2^a)^{r}$; a forgery $\sigma$ on a point of the second kind yields $h^a = \sigma / \psi(g_2^a)^{r}$.

## Notes

`class: fully-black-box`: Fixed construction using only group, hash, and pairing operations; the reduction runs the forger once as an oracle, programming its random oracle, and extracts a co-CDH solution from the forgery.

`model: rom`: The proof models $H$ as a programmable random oracle.

- Journal version with the general co-GDH framework, the asymmetric-pairing co-CDH formulation, and the explicit $e(q_S+1)$ loss ($e$ here Euler's number) — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]]
