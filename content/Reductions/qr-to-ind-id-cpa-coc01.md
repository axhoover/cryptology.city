---
type: reduction
status: draft
title: "QR ⇒ IBE (Cocks, random oracle model)"
aliases:
  - Cocks IBE
id: red-qr-to-ind-id-cpa-coc01
kind: implication
hypotheses: [qr]
conclusion: ind-id-cpa
class: unstated
model: rom
source:
  - "[[Coc01 - An Identity Based Encryption Scheme Based on Quadratic Residues|Coc01]]"
rationale:
  model: "Coc01's security argument models the hash from identities to $\\J_N$ as a random oracle."
---

# QR ⇒ IBE (Cocks, random oracle model)

## Statement

Let $N = pq$ be a Blum integer and $H$ a hash function from identities to $\J_N$, the units of Jacobi symbol $+1$. In Cocks's scheme $\pp = (N, H)$ and $\msk = (p, q)$. Since $-1 \in \J_N \setminus \QR_N$, exactly one of $\pm a$ is a square for $a = H(\mathit{id})$, and the key of $\mathit{id}$ is a square root $r$ of it, computed with $(p, q)$. A bit $x \in \{+1, -1\}$ is encrypted as $(s, \bar s) = (t + a t^{-1},\ \bar t - a \bar t^{-1}) \bmod N$ for independent uniform $t, \bar t \in \ZZ_N^*$ of Jacobi symbol $x$, and decrypted as the Jacobi symbol of $s + 2r$ if $r^2 = a$ and of $\bar s + 2r$ if $r^2 = -a$. If [[quadratic-residuosity|QR]] is hard and $H$ is modelled as a [[random-oracle-model|random oracle]], the scheme is an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] — [[Coc01 - An Identity Based Encryption Scheme Based on Quadratic Residues|Coc01]].

## Notes

- Decryption is correct because $s + 2r = (t + r)^2 t^{-1}$ when $r^2 = a$, and $\bar s + 2r = (\bar t + r)^2 \bar t^{-1}$ when $r^2 = -a$, so each has the Jacobi symbol of $t$, respectively $\bar t$, unless $\gcd(t + r, N) > 1$, respectively $\gcd(\bar t + r, N) > 1$, which happens with negligible probability — [[Coc01 - An Identity Based Encryption Scheme Based on Quadratic Residues|Coc01]].
- Each plaintext bit costs two elements of $\ZZ_N$, one for each sign of $a$, since the sender does not know which of $\pm a$ is a square — [[Coc01 - An Identity Based Encryption Scheme Based on Quadratic Residues|Coc01]].
- Quadratic residuosity also gives a space-efficient IBE in the random-oracle model, whose ciphertext on an $\ell$-bit message is one element of $\ZZ_N$ and $\ell + 1$ bits — [[BGH07 - Space-Efficient Identity Based Encryption Without Pairings|BGH07]].
