---
type: reduction
status: draft
title: "Anonymous IBE ⇒ PEKS (ABC+05)"
aliases: []
id: red-anonymous-ibe-to-consistent-peks-abc05
kind: implication
hypotheses: [anonymous-ibe]
conclusion: consistent-peks
class: fully-black-box
model: standard
source:
  - "[[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]]"
security-loss: ""
rationale:
  class: "The PEKS calls the IBE's algorithms only as oracles, and each reduction runs the PEKS adversary only as an oracle against the IBE."
---

# Anonymous IBE ⇒ PEKS (ABC+05)

## Statement

Let $\IBE = (\Setup, \Extract, \Enc, \Dec)$ be an [[identity-based-encryption#anonymous-ibe|anonymous IBE]], IND-ID-CPA-secure and ANO-ID-CPA-secure, whose identity space contains the keywords and whose message space contains $\bits^\secpar$. The PEKS with

- $\KeyGen := \Setup$, so that $\pk = \pp$ and $\sk = \msk$;
- $\mathsf{PEKS}(\pk, W)$: sample $R \getsr \bits^\secpar$, output $(R, \Enc(\pp, W, R))$;
- $\mathsf{Trapdoor}(\sk, W) := \Extract(\msk, W)$;
- $\mathsf{Test}(\pk, (R, C), T_W) := [\Dec(T_W, C) = R]$

is [[public-key-encryption-with-keyword-search#security-against-chosen-keyword-attacks|IND-CKA-secure]] and [[public-key-encryption-with-keyword-search#consistency|computationally consistent]] — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]].

## Sketch

Trapdoor queries are extraction queries, and an IND-CKA challenge on $(W_0, W_1)$ is an anonymity challenge on $(W_0, W_1, R)$ for a fresh uniform $R$, so ANO-ID-CPA security gives IND-CKA security. For consistency, an adversary that names $W \ne W'$ with $\Dec(\sk_{W'}, \Enc(\pp, W, R)) = R$ yields an IND-ID-CPA adversary that challenges on identity $W$ with messages $R_0, R_1$, extracts $\sk_{W'}$, and checks whether the challenge decrypts to $R_0$; when $R_1$ was encrypted, $R_0$ is independent of its view and the check passes with probability $2^{-\secpar}$.

## Notes

- [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]] observe earlier that an IBE whose ciphertexts hide the identity gives a PEKS; their transform need not yield a consistent PEKS, which the transform above guarantees — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]].
