---
type: reduction
status: draft
title: "DDH ⇒ Universal-2 HPS"
aliases: []
id: red-prime-order-ddh-to-universal2-hash-proof-system-cs02
kind: implication
hypotheses: [prime-order-ddh]
conclusion: universal2-hash-proof-system
class: fully-black-box
model: standard
source:
  - "[[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]"
security-loss: "the subset-membership advantage is at most the DDH advantage plus 1/q; the smooth component is perfectly smooth"
rationale:
  class: "The hash proof system uses only the group operations, and the reduction maps a DDH instance to a subset-membership instance and runs any distinguisher once as an oracle."
---

# DDH ⇒ Universal-2 HPS

## Statement

Let $\GrGen$ output groups $(\GG, g_1, q)$ of prime order $q$ for which [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH]] is hard, and let the instance be $\Lambda = (\GG, q, g_1, g_2)$ with $g_2$ a uniformly random generator of $\GG$. The subset membership problem with $X = \GG^2$, $L = \{(g_1^r, g_2^r) : r \in \ZZ_q\}$ and witness $r$ is hard, and it has a [[hash-proof-system#universal-2-hash-proof-systems|universal-2 hash proof system]] — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]:

- smooth: $k = (k_1, k_2) \in \ZZ_q^2$, $\alpha(k) = g_1^{k_1} g_2^{k_2}$, $H_k(u_1, u_2) = u_1^{k_1} u_2^{k_2}$, so $H_k(g_1^r, g_2^r) = \alpha(k)^r$;
- extended universal-2 for tags $e$: a hash proof system for the same language whose hash takes $(u_1, u_2, e)$ as input; it handles tags of any length with more key components, so no hash function is needed.

## Sketch

Hardness: with $g_2 = g_1^a$, a DDH challenge $(g_1, g_1^a, g_1^r, g_1^{ar'})$ gives the element $(g_1^r, g_1^{ar'})$, which lies in $L$ when $r' = r$ and is uniform in $X \setminus L$ when $r'$ is uniform conditioned on $r' \neq r$, which is $1/q$-close to uniform. Smoothness: for $(u_1, u_2) = (g_1^r, g_2^{r'})$ with $r' \ne r$, the exponents of $\alpha(k)$ and $H_k(u_1, u_2)$ in base $g_1$ are $k_1 + a k_2$ and $r k_1 + a r' k_2$, linearly independent functions of $k$, so $H_k(u_1, u_2)$ is uniform given $\alpha(k)$.

## Notes

- The [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup cryptosystem]], with $h = g_1^{z_1} g_2^{z_2}$ in place of $h = g_1^{z}$ and decryption by $e / (u_1^{z_1} u_2^{z_2})$, is a variant of the generic CCA construction ([[universal2-hash-proof-system-to-pke-cca2-security-cs02|Universal-2 HPS ⇒ CCA-secure PKE]]) over this language, with the input of the universal-2 component compressed to $t = \hash(u_1, u_2, e) \in \ZZ_q$ by a [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash function]] $\hash$ and the validity tag $u_1^{x_1 + t y_1} u_2^{x_2 + t y_2}$ for the universal-2 key $(x_1, x_2, y_1, y_2) \in \ZZ_q^4$ — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
- [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]] give a DDH- and [$d$-Linear](bilinear-map-assumptions#k-linear-assumption)-based hash proof system whose IND-CPA-secure encryption scheme tolerates leakage of a $(1-o(1))$ fraction of the bits of its secret key: [[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]], [[k-linear-assumption-to-leakage-resilient-pke-ns09|d-Linear ⇒ LR-PKE]].
