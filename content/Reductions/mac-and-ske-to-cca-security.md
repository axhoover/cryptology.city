---
type: reduction
status: draft
title: "SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE"
aliases: []
id: red-mac-and-ske-to-cca-security
kind: implication
hypotheses: [suf-cma-mac, cpa-security]
conclusion: cca-secure-symmetric-key-encryption
class: fully-black-box
model: standard
source:
  - "[[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]"
security-loss: ""
rationale:
  class: "Encrypt-then-MAC calls the SKE and MAC algorithms only as oracles, and the reduction runs any CCA adversary as an oracle, rejecting its decryption queries and outputting an accepted one as a MAC forgery."
---

# SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE

## Statement

Let $\SKE = (\KeyGen, \Enc, \Dec)$ be a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme and $\MAC = (\KeyGen, \Tag, \Vrfy)$ a [[message-authentication-code#strong-unforgeability|strongly unforgeable]] (SUF-CMA) [[message-authentication-code|MAC]]. Encrypt-then-MAC under independent keys $k_e, k_m$ — encrypt $m$ to $c \gets \Enc(k_e, m)$, output $(c, \Tag(k_m, c))$, and decrypt $(c, t)$ to $\bot$ unless $\Vrfy(k_m, c, t) = 1$ — is a [[symmetric-key-encryption#cca-security|CCA-secure]] SKE scheme — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]. With a MAC that is only UF-CMA the composition can fail CCA security — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

## Sketch

An admissible CCA adversary never asks to decrypt an output of the encryption oracle, so by strong unforgeability all its decryption queries are rejected except with negligible probability; answering all of them with $\bot$ leaves a CPA adversary against $\SKE$.

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

- Concurrently and independently, [[KY00 - Unforgeable Encryption and Chosen Ciphertext Secure Modes of Operation|KY00]] prove that unforgeability of ciphertexts together with CPA security implies CCA security.
