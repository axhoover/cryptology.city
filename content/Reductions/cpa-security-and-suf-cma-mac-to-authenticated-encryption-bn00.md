---
type: reduction
status: draft
title: "CPA-secure SKE + SUF-CMA MAC ⇒ AE (Encrypt-then-MAC)"
aliases: []
id: red-cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00
kind: implication
hypotheses: [cpa-security, suf-cma-mac]
conclusion: authenticated-encryption
class: fully-black-box
model: standard
source:
  - "[[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]"
security-loss: "none in the privacy term; factor $q_V$ in the integrity term: an INT-CTXT adversary making $q_E$ encryption and $q_V$ verification queries has advantage at most $q_V$ times the SUF-CMA advantage of a forger making $q_E$ tag queries"
rationale:
  class: "Encrypt-then-MAC calls the SKE and MAC algorithms only as oracles; the CPA reduction runs any adversary as an oracle and tags ciphertexts under a key it samples, and the forger runs it as an oracle and outputs a uniformly chosen one of its verification queries."
  security-loss: "The SUF-CMA game takes one final forgery and has no verification oracle, so the forger answers verification queries on outputs of the encryption oracle by decrypting under the SKE key it samples and all others with 0, and guesses which query is the first valid one the encryption oracle did not output."
---

# CPA-secure SKE + SUF-CMA MAC ⇒ AE (Encrypt-then-MAC)

## Statement

Let $\SKE = (\KeyGen, \Enc, \Dec)$ be a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme and $\MAC = (\KeyGen, \Tag, \Vrfy)$ a [[message-authentication-code#strong-unforgeability|SUF-CMA-secure]] [[message-authentication-code|MAC]]. Encrypt-then-MAC under an $\SKE$ key $k_e$ and an independent $\MAC$ key $k_m$, which encrypts $m$ to $(c, \Tag(k_m, c))$ for $c \gets \Enc(k_e, m)$ and decrypts $(c, t)$ to $\Dec(k_e, c)$ if $\Vrfy(k_m, c, t) = 1$ and to $\bot$ otherwise, is an [[authenticated-encryption|authenticated encryption]] scheme: it is [[authenticated-encryption#privacy|CPA-secure]] and [[authenticated-encryption#integrity-of-ciphertexts|INT-CTXT-secure]] — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

## Sketch

A CPA adversary against $\SKE$ samples $k_m$ and tags the ciphertexts it receives. A pair $(c, t)$ that verifies and was not output by the encryption oracle is a message–tag pair that the tag oracle never returned, which is a strong forgery.

## Notes

- With strong unforgeability defined through a verification oracle, as in [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]], the forger forwards every verification query and the factor $q_V$ disappears.
- With a MAC that is only [[message-authentication-code#unforgeability|UF-CMA-secure]], Encrypt-then-MAC can fail INT-CTXT security and CCA security — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].
