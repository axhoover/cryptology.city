---
type: reduction
status: draft
title: "Type 1 pairing + CDH ⇒ DS (Waters)"
aliases:
  - Waters signature
id: red-type-1-pairing-and-cdh-to-ds-wat05
kind: implication
hypotheses: [type-1-pairing, cdh]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]]"
security-loss: "factor $O(n q_S)$ for $n$-bit messages and $q_S$ signing queries"
rationale:
  class: "The scheme uses the group only through group operations and the pairing, and the partitioning reduction runs any forger as an oracle and turns a forgery outside the partition into g^{ab}."
---

# Type 1 pairing + CDH ⇒ DS (Waters)

## Statement

Let $(\GG, \GG_T, p, g, e)$ be a [[pairings#type-1|symmetric bilinear group]] in whose group $\GG$ [[computational-diffie-hellman|CDH]] is hard. The Waters [[digital-signature|signature scheme]] for $n$-bit messages has $\vk = (g, g_1 = g^{\alpha}, g_2, u', u_1, \ldots, u_n)$ with $\alpha \getsr \ZZ_p$ and $g_2, u', u_i \getsr \GG$, and $\sk = g_2^{\alpha}$. Write $U(m) = u' \prod_{i : m_i = 1} u_i$. $\Sign(\sk, m)$ picks $r \getsr \ZZ_p$ and outputs $\sigma = (\sigma_1, \sigma_2) = (g_2^{\alpha} \cdot U(m)^r, g^r)$, and $\Vrfy(\vk, m, \sigma)$ accepts iff $e(\sigma_1, g) = e(g_1, g_2) \cdot e(U(m), \sigma_2)$. The scheme is [[digital-signature#existential-unforgeability|EUF-CMA]] in the standard model: every efficient forger yields an efficient CDH solver — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].

## Sketch

Given $(g, g^a, g^b)$, the reduction sets $g_1 = g^a$ and $g_2 = g^b$, and chooses $u', u_i$ so that $U(m) = g_2^{F(m)} g^{J(m)}$ for functions $F, J$ it knows, with $F(m) \not\equiv 0 \bmod p$ on every queried message and $F(m^*) \equiv 0$ on the forgery's message with probability $\Omega(1/(n q_S))$. It answers a query with $F(m) \not\equiv 0$ by $\sigma = (g_1^{-J(m)/F(m)} U(m)^{r'}, g_1^{-1/F(m)} g^{r'})$, a real signature with $r = r' - a/F(m)$. A forgery on $m^*$ with $F(m^*) \equiv 0$ gives $g^{ab} = \sigma_1 / \sigma_2^{J(m^*)}$.

## Notes

- The reduction loses a factor $O(n q_S)$ — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]]. Recasting $U$ as a programmable hash function improves the loss to $O(\sqrt{n}\, q_S)$ — [[HK08 - Programmable Hash Functions and Their Applications|HK08]]. A variant that encodes messages so that any two encodings are far apart in Hamming distance is EUF-CMA under CDH with loss $O(q_S)$ — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]].
- Signatures re-randomize publicly as $(\sigma_1 U(m)^t, \sigma_2 g^t)$, so the scheme is not SUF-CMA — standard. For a scheme with efficiently re-randomizable signatures, every black-box proof of EUF-CMA security from a non-interactive hardness assumption loses a factor $\Omega(q_S)$, unless the assumption is false, so the $O(q_S)$ loss of the Hamming-distance variant is optimal up to a constant factor — [[HJK12 - Waters Signatures with Optimal Security Reduction|HJK12]].
- Efficiency: a signature is two elements of $\GG$ and the verification key $n + 4$, and verification costs two pairings once $e(g_1, g_2)$ is precomputed — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].
- Messages of arbitrary length can be hashed to $n$ bits with a [[hash-function#collision-resistance|collision-resistant hash function]] before signing — standard.
- A different analysis of Waters signatures has the simulator predict a prefix of the message the forger will sign — [[HW09 - Short and Stateless Signatures from the RSA Assumption|HW09]].
- The same hash $U$ gives the Waters IBE under decisional BDH ([[dbdh-to-ibe-wat05|DBDH ⇒ IBE (Waters, standard model)]]) — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].
