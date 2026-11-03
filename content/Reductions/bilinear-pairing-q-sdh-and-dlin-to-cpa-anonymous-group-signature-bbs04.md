---
type: reduction
status: draft
title: "Bilinear pairing + q-SDH + DLIN ⇒ CPA-anonymous group signatures (Boneh–Boyen–Shacham)"
aliases:
  - BBS group signature
  - Short group signature
id: red-bilinear-pairing-q-sdh-and-dlin-to-cpa-anonymous-group-signature-bbs04
kind: implication
hypotheses: [bilinear-pairing, q-strong-diffie-hellman, decisional-linear]
conclusion: cpa-anonymous-group-signature
class: unstated
model: rom
source:
  - "[[BBS04 - Short Group Signatures|BBS04]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: ""
rationale:
  model: "A signature carries a Fiat–Shamir proof of knowledge, and both security proofs model its hash as a random oracle."
---

# Bilinear pairing + q-SDH + DLIN ⇒ CPA-anonymous group signatures (Boneh–Boyen–Shacham)

## Statement

Let $(\GG_1, \GG_2)$ be a [[pairings|bilinear group]] pair of prime order $p$, with pairing $e : \GG_1 \times \GG_2 \to \GG_T$, generators $g_2$ of $\GG_2$ and $g_1 = \psi(g_2)$ for an efficiently computable isomorphism $\psi : \GG_2 \to \GG_1$, and let $H$ be a random oracle. In the BBS [[group-signature|group signature]], the opener holds $\mathsf{gmsk} = (\xi_1, \xi_2)$ with $u^{\xi_1} = v^{\xi_2} = h$ for $u, v, h \in \GG_1$ in $\mathsf{gpk}$, and member $i$ holds a pair $(A_i, x_i)$ with $A_i^{\gamma + x_i} = g_1$, where $w = g_2^{\gamma}$ is in $\mathsf{gpk}$. A signature on $m$ is a [[decisional-linear-to-pke-bbs04|Linear Encryption]] $(T_1, T_2, T_3) = (u^{\alpha}, v^{\beta}, A_i h^{\alpha + \beta})$ of $A_i$ under $(u, v, h)$, for $\alpha, \beta \getsr \ZZ_p$, together with a [[fiat-shamir-heuristic|Fiat–Shamir]] proof of knowledge, with $m$ in the hash input, of a pair $(A, x)$ with $A^{\gamma + x} = g_1$ and $A$ encrypted in $(T_1, T_2, T_3)$; $\Open$ decrypts $A = T_3 / (T_1^{\xi_1} T_2^{\xi_2})$ and outputs the member holding it. In the random-oracle model the scheme is [[group-signature#cpa-full-anonymity|CPA-fully anonymous]] if the [[decisional-diffie-hellman#dlin|decision linear assumption]] holds in $\GG_1$, and [[group-signature#full-traceability|fully traceable]] if [$q$-SDH](q-strong-diffie-hellman) is hard in $(\GG_1, \GG_2)$ for every polynomial $q$ — [[BBS04 - Short Group Signatures|BBS04]].

## Notes

- A signature is three elements of $\GG_1$ and six elements of $\ZZ_p$, approximately the size of an RSA signature at the same security level — [[BBS04 - Short Group Signatures|BBS04]].
- The $q$-SDH problem is the form of [[BB04a - Short Signatures Without Random Oracles|BB04a]]: given $(g_1, g_2, g_2^{\gamma}, \ldots, g_2^{\gamma^q})$, output $(g_1^{1/(\gamma + x)}, x)$ — [[BBS04 - Short Group Signatures|BBS04]].
- A member key $(A_i, x_i)$ is a weak [[bilinear-pairing-and-q-sdh-to-ds-bb04a|Boneh–Boyen signature]] $A_i = g_1^{1/(\gamma + x_i)}$ on $x_i$ under the key $w = g_2^{\gamma}$ — standard.
