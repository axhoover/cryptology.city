---
type: reduction
status: draft
title: "MAC + SKE ⇒ CCA Security"
aliases: []
id: red-mac-and-ske-to-cca-security
kind: implication
hypotheses: [mac, ske]
conclusion: cca-secure-symmetric-key-encryption
class: fully-black-box
model: standard
source:
  - "[[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]"
security-loss: ""
---

# MAC + SKE ⇒ CCA Security

A strongly unforgeable [[message-authentication-code|MAC]] together with a CPA-secure [[symmetric-key-encryption|SKE]] scheme implies [[symmetric-key-encryption#cca-security|CCA Security]], via encrypt-then-MAC.

## Statement

Let $\SKE$ be a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme and $\MAC$ a strongly unforgeable (SUF-CMA) [[message-authentication-code|MAC]]. Encrypt-then-MAC — encrypt under an SKE key, then tag the ciphertext under an independent MAC key — is a [[symmetric-key-encryption#cca-security|CCA-secure]] SKE scheme. With a merely UF-CMA MAC the composition can fail CCA security — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

## Sketch

Decryption returns $\bot$ unless $\Vrfy(k_m, c, t) = 1$. Strong unforgeability of $\MAC$ ensures every decryption query $(c, t)$ not returned by the encryption oracle is rejected except with negligible probability, so the reduction to CPA security of $\SKE$ answers all fresh decryption queries with $\bot$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Enc'((k_e, k_m), m)$}
\begin{algorithmic}
\State $c \gets \Enc(k_e, m)$
\State $t \gets \Tag(k_m, c)$
\Return $(c, t)$
\end{algorithmic}
\end{algorithm}
```

## Notes

`class: fully-black-box`: Encrypt-then-MAC is one fixed construction invoking the SKE scheme's $\Enc$/$\Dec$ and the MAC's $\Tag$/$\Vrfy$ only as oracles; the security reduction runs any CCA adversary as an oracle, answering decryption queries by rejecting every ciphertext-tag pair not produced by the encryption oracle and outputting an accepted fresh pair as a MAC forgery.

- Independently and concurrently: ciphertext unforgeability plus CPA security implies CCA security for symmetric encryption — [[KY00 - Unforgeable Encryption and Chosen Ciphertext Secure Modes of Operation|KY00]].
