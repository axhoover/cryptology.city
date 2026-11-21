---
type: reduction
status: draft
title: "DDH ⇒ PRE (Blaze–Bleumer–Strauss scheme)"
aliases: []
id: red-prime-order-ddh-to-pre
kind: implication
hypotheses: [prime-order-ddh]
conclusion: pre
class: fully-black-box
model: standard
source: folklore
security-loss: "tight up to a factor 2: one run of the CPA adversary gives $\\Adv^{\\mathrm{pre\\text{-}cpa}} \\le \\frac{2q}{q-1}\\Adv^{\\text{ddh}} + \\frac{1}{q-1}$, the additive term from the event that $Q^u$ is the identity"
rationale:
  class: "The scheme uses only the group sampler and group operations, and the reduction runs the PRE adversary once as an oracle on keys and a challenge built from its DDH tuple."
---

# DDH ⇒ PRE (Blaze–Bleumer–Strauss scheme)

## Statement

If [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH is hard in prime-order groups]], the following bidirectional, multi-hop scheme of [[BBS98 - Divertible Protocols and Atomic Proxy Cryptography|BBS98]] is a [[proxy-re-encryption#cpa-security|CPA-secure]] [[proxy-re-encryption|PRE]] scheme with message space $\GG$ — folklore. $\Setup(1^\secpar)$ outputs $(\GG, g, q) \gets \GrGen(1^\secpar)$, a group $\GG$ of prime order $q$ with generator $g$, where $\GrGen$ is the group generator for which DDH is assumed hard; user $i$ has $\sk_i = a_i \getsr \ZZ_q^*$ and $\pk_i = g^{a_i}$; $\Enc(\pk_i, m) = (m g^k, \pk_i^k)$ for $k \getsr \ZZ_q$; $\Dec(a_i, (c_1, c_2)) = c_1 / c_2^{1/a_i}$; the re-encryption key is $\mathit{rk}_{i \to j} = a_j / a_i$, computed from both secret keys, and $\mathsf{ReEnc}(\mathit{rk}_{i \to j}, (c_1, c_2)) = (c_1, c_2^{\mathit{rk}_{i \to j}})$ — [[BBS98 - Divertible Protocols and Atomic Proxy Cryptography|BBS98]].

## Sketch

Given $(Q, Q^u, Q^v, Q^w)$, the reduction keeps $g = Q$, gives each uncorrupted user $\pk_i = (Q^u)^{t_i}$ for $t_i \getsr \ZZ_q^*$, so that $a_i = u t_i$ and $\mathit{rk}_{i \to j} = t_j / t_i$ between uncorrupted users, samples the keys of corrupted users itself, and answers the challenge for $i^*$ with $(m_b Q^v, (Q^w)^{t_{i^*}})$. If $w = uv$ this is an encryption of $m_b$ with $k = v$; if $Q^w$ is uniform, $Q^v$ appears only in the first component, which is then uniform and independent of $b$.

## Notes

- A delegatee holding $a_j$ and the proxy's $\mathit{rk}_{i \to j}$ recovers $a_i = a_j / \mathit{rk}_{i \to j}$, so the scheme is not [[proxy-re-encryption#collusion-resistance|collusion resistant]]; and $\mathit{rk}_{j \to i} = 1 / \mathit{rk}_{i \to j}$, so it is bidirectional — folklore.
