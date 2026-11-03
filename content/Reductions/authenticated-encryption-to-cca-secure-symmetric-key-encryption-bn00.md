---
type: reduction
status: draft
title: "AE ⇒ CCA-secure SKE"
aliases: []
id: red-authenticated-encryption-to-cca-secure-symmetric-key-encryption-bn00
kind: implication
hypotheses: [authenticated-encryption]
conclusion: cca-secure-symmetric-key-encryption
class: fully-black-box
model: standard
source:
  - "[[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]"
  - "[[KY00 - Unforgeable Encryption and Chosen Ciphertext Secure Modes of Operation|KY00]]"
security-loss: "factor 2 in the integrity term: the CCA advantage is at most the CPA advantage plus twice the INT-CTXT advantage, at the same numbers of encryption and decryption queries"
rationale:
  class: "The construction is the scheme itself, and both reductions run any CCA adversary as an oracle and answer its decryption queries with ⊥, the INT-CTXT adversary also forwarding each of them to its verification oracle."
---

# AE ⇒ CCA-secure SKE

## Statement

Let $\mathsf{AE}$ be an [[authenticated-encryption|authenticated encryption]] scheme, a [[symmetric-key-encryption|SKE]] scheme that is [[authenticated-encryption#privacy|CPA-secure]] and [[authenticated-encryption#integrity-of-ciphertexts|INT-CTXT-secure]]. Then $\mathsf{AE}$ is [[symmetric-key-encryption#cca-security|CCA-secure]]: for every admissible CCA adversary $\calA$ making $q_E$ encryption and $q_D$ decryption queries there are adversaries $\calB$ and $\calC$, running in about the time of $\calA$, with

$$
\Adv^{\mathrm{cca}}_{\mathsf{AE},\calA}(\secpar) \le \Adv^{\mathrm{cpa}}_{\mathsf{AE},\calB}(\secpar) + 2\Adv^{\mathrm{int\text{-}ctxt}}_{\mathsf{AE},\calC}(\secpar),
$$

where $\calB$ makes $q_E$ encryption queries and $\calC$ makes $q_E$ encryption and $q_D$ verification queries — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]. Concurrently and independently, [[KY00 - Unforgeable Encryption and Chosen Ciphertext Secure Modes of Operation|KY00]] prove that CPA security and unforgeability of ciphertexts together imply CCA security.

## Sketch

Answer every decryption query with $\bot$. An admissible adversary never queries an output of the encryption oracle, so this changes its view only once it submits a valid ciphertext that the encryption oracle did not output, which $\calC$ detects by forwarding the query to its verification oracle $\calV$; the modified game is the CPA game, played by $\calB$.

## Notes

- INT-PTXT security does not suffice in place of INT-CTXT security, assuming CPA-secure SKE schemes and SUF-CMA-secure MACs exist: some instance of MAC-then-Encrypt is CPA-secure and INT-PTXT-secure but not CCA-secure — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].
