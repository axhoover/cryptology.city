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
security-loss: "factor $e(q_S+1)$ in advantage for $q_S$ signing queries"
rationale:
  class: "The construction is fixed and uses only group, hash and pairing operations; the reduction runs the forger once as an oracle, programs its random oracle, and extracts a co-CDH solution from the forgery."
  model: "The reduction programs the hash-to-group function as a random oracle to embed the challenge and to answer signing queries."
---

# co-CDH ⇒ DS

## Statement

[[digital-signature#bls-signatures|BLS signatures]]: in a bilinear group pair $(\GG_1, \GG_2)$ of prime order $p$ with pairing $e : \GG_1 \times \GG_2 \to \GG_T$, an efficiently computable isomorphism $\psi : \GG_2 \to \GG_1$ and hash $H : \bits^* \to \GG_1$, $\sk = x \getsr \ZZ_p$, $\pk = g_2^x$ for a generator $g_2$ of $\GG_2$, $\Sign(\sk, m) = H(m)^x$, and $\Vrfy$ accepts $(m, \sigma)$ iff $e(\sigma, g_2) = e(H(m), \pk)$. With $H$ a random oracle, the scheme is EUF-CMA secure if [[co-computational-diffie-hellman|co-CDH]] is hard in $(\GG_1, \GG_2)$ — [[BLS01 - Short Signatures from the Weil Pairing|BLS01]]. The journal version states the theorem in the general co-GDH framework, with the asymmetric-pairing formulation of co-CDH and an explicit loss — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].

## Sketch

The reduction receives a co-CDH challenge $(g_2^a, h)$ with $h \in \GG_1$, sets $\pk = g_2^a$, and answers each new $H$-query by $\psi(g_2)^{r}$ for a fresh known $r$, except with probability $1/(q_S+1)$ by $h \cdot \psi(g_2)^{r}$. It signs a point of the first kind as $\psi(g_2^a)^{r}$, and a forgery $\sigma$ on a point of the second kind yields $h^a = \sigma / \psi(g_2^a)^{r}$.

## Notes

- A forger with advantage $\varepsilon$ making $q_H$ hash and $q_S$ signing queries yields a co-CDH solver with advantage $\varepsilon/(e(q_S+1))$, $e$ here Euler's number, using $O(q_H + q_S)$ extra group operations — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].
