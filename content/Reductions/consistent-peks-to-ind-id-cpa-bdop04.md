---
type: reduction
status: draft
title: "Consistent PEKS ⇒ IBE (BDOP04)"
aliases: []
id: red-consistent-peks-to-ind-id-cpa-bdop04
kind: implication
hypotheses: [consistent-peks]
conclusion: ind-id-cpa
class: fully-black-box
model: standard
source:
  - "[[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]"
security-loss: ""
rationale:
  class: "The IBE calls the PEKS algorithms only as oracles, and the reduction runs the IBE adversary only as an oracle, forwarding its extraction queries as trapdoor queries."
---

# Consistent PEKS ⇒ IBE (BDOP04)

## Statement

A [[public-key-encryption-with-keyword-search#consistency|consistent]] [[public-key-encryption-with-keyword-search|PEKS]] scheme yields an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] scheme — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]. In the syntax of [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]], $\mathsf{Test}$ rejects every non-matching keyword, which amounts to perfect consistency — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]]; for identities in $\bits^\secpar$, computational consistency against non-uniform adversaries suffices — standard.

## Sketch

For one-bit messages: $\Setup := \KeyGen$; $\Extract(\sk, \mathit{id}) := (\pk, \mathsf{Trapdoor}(\sk, \mathit{id} \| 1))$; $\Enc(\pk, \mathit{id}, \beta) := \mathsf{PEKS}(\pk, \mathit{id} \| \beta)$; and decryption with $(\pk, T)$ outputs $\mathsf{Test}(\pk, S, T)$. Correctness bounds the decryption error for $\beta = 1$; for $\beta = 0$ the error on $\mathit{id}$ is the advantage of the consistency adversary that outputs $(\mathit{id} \| 0, \mathit{id} \| 1)$, so its maximum over $\mathit{id} \in \bits^\secpar$ is negligible when consistency holds against non-uniform adversaries. An extraction query on $\mathit{id} \ne \mathit{id}^*$ is a trapdoor query on $\mathit{id} \| 1 \notin \{\mathit{id}^* \| 0, \mathit{id}^* \| 1\}$, and the challenge on the messages $0, 1$ is the IND-CKA challenge on $(\mathit{id}^* \| 0, \mathit{id}^* \| 1)$; longer messages are encrypted bit by bit, with a hybrid argument over the bits.
