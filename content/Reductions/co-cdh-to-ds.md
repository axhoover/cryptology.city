---
type: reduction
status: draft
title: "co-CDH ⇒ BLS signatures"
aliases: []
id: red-co-cdh-to-ds
kind: implication
hypotheses: [co-cdh]
conclusion: boneh-lynn-shacham-signature
class: fully-black-box
model: rom
source:
  - "[[BLS01 - Short Signatures from the Weil Pairing|BLS01]]"
security-loss: "factor $e(q_S+1)$ in advantage for $q_S$ signing queries"
rationale:
  class: "The construction is fixed and uses only group, hash and pairing operations; the reduction runs the forger once as an oracle, programs its random oracle, and extracts a co-CDH solution from the forgery."
  model: "The reduction programs the hash-to-group function as a random oracle to embed the challenge and to answer signing queries."
---

# co-CDH ⇒ BLS signatures

## Statement

[[digital-signature#bls-signatures|BLS signatures]]: in a bilinear group pair $(\GG_1, \GG_2)$ of prime order $p$ with pairing $e : \GG_1 \times \GG_2 \to \GG_T$, an efficiently computable isomorphism $\psi : \GG_2 \to \GG_1$ and hash $H : \bits^* \to \GG_1$, $\sk = x \getsr \ZZ_p$, $\pk = g_2^x$ for a generator $g_2$ of $\GG_2$, $\Sign(\sk, m) = H(m)^x$, and $\Vrfy$ accepts $(m, \sigma)$ iff $e(\sigma, g_2) = e(H(m), \pk)$. With $H$ a random oracle, the scheme is EUF-CMA secure if [[co-computational-diffie-hellman|co-CDH]] is hard in $(\GG_1, \GG_2)$ — [[BLS01 - Short Signatures from the Weil Pairing|BLS01]]. The journal version states the theorem in the general co-GDH framework, with the asymmetric-pairing formulation of co-CDH and an explicit loss — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].

## Sketch

The reduction receives a co-CDH challenge $(g_2^a, h)$ with $h \in \GG_1$, sets $\pk = g_2^a$, and answers each new $H$-query by $\psi(g_2)^{r}$ for a fresh known $r$, except with probability $1/(q_S+1)$ by $h \cdot \psi(g_2)^{r}$. It signs a point of the first kind as $\psi(g_2^a)^{r}$, and a forgery $\sigma$ on a point of the second kind yields $h^a = \sigma / \psi(g_2^a)^{r}$.

## Notes

- A forger with advantage $\varepsilon$ making $q_H$ hash and $q_S$ signing queries yields a co-CDH solver with advantage $\varepsilon/(e(q_S+1))$, $e$ here Euler's number, using $O(q_H + q_S)$ extra group operations — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].
- BLS signatures are unique: for each $\pk \in \GG_2$ and $m$, exactly one $\sigma \in \GG_1$ verifies, namely $H(m)^x$, so EUF-CMA security implies SUF-CMA security — standard.
- Meta-reductions show that reductions of restricted kinds from non-interactive assumptions lose a factor of about $q_S$: Coron proved this for unique signatures — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]], and it was extended to efficiently re-randomizable signatures — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]], [[BJLS16 - On the Impossibility of Tight Cryptographic Reductions|BJLS16]]. The loss $e(q_S + 1)$ above is of that order. These bounds rule out only restricted reductions: for a chain-based unique signature scheme, whose signature is $n$ BLS signatures computed in sequence, a reduction from CDH in the random oracle model loses at most $n \cdot q_H^{1/n}$ for $q_H$ hash queries, with $n$ any integer independent of the security parameter — [[GCS+17 - Optimal Security Reductions for Unique Signatures Bypassing Impossibilities with a Counterexample|GCS+17]].
