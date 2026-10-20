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
security-loss: "factor $q_D$ in the MAC term: a CCA adversary making $q_E$ encryption and $q_D$ decryption queries has advantage at most the CPA advantage of an adversary making $q_E$ encryption queries plus $2q_D$ times the SUF-CMA advantage of a forger making $q_E$ tag queries"
rationale:
  class: "Encrypt-then-MAC calls the SKE and MAC algorithms only as oracles, and both reductions run any CCA adversary as an oracle and reject its decryption queries, the forger outputting a uniformly chosen one of them."
  security-loss: "Ciphertext integrity with CPA security bounds the CCA advantage by the CPA advantage plus twice the integrity advantage, and since the SUF-CMA game takes one final forgery and has no verification oracle, the forger guesses which of the $q_D$ decryption queries carries a valid tag."
---

# SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE

## Statement

Let $\SKE$ be a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme and $\MAC$ a [[message-authentication-code#strong-unforgeability|strongly unforgeable]] (SUF-CMA) [[message-authentication-code|MAC]]. Encrypt-then-MAC under an $\SKE$ key $k_e$ and an independent $\MAC$ key $k_m$ — encrypt $m$ to $c \gets \Enc(k_e, m)$, output $(c, \Tag(k_m, c))$, and decrypt $(c, t)$ to $\Dec(k_e, c)$ if $\Vrfy(k_m, c, t) = 1$ and to $\bot$ otherwise — is a [[symmetric-key-encryption#cca-security|CCA-secure]] SKE scheme, and with a MAC that is only UF-CMA it can fail CCA security — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

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

- With strong unforgeability defined through a verification oracle, the forger forwards every decryption query, and the bound is the CPA advantage plus twice the SUF-CMA advantage at $q_D$ verification queries — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]; passing from that notion to the single-forgery one costs the factor $q_D$ — [[BGM04 - The Power of Verification Queries in Message Authentication and Authenticated Encryption|BGM04]].
- Concurrently and independently, [[KY00 - Unforgeable Encryption and Chosen Ciphertext Secure Modes of Operation|KY00]] prove that unforgeability of ciphertexts together with CPA security implies CCA security.
