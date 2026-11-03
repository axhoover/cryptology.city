---
type: reduction
status: draft
title: "PEKS ⇒ IBE (BDOP04)"
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

# PEKS ⇒ IBE (BDOP04)

## Statement

A [[public-key-encryption-with-keyword-search#consistency|consistent]] [[public-key-encryption-with-keyword-search|PEKS]] scheme yields an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] scheme — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]. BDOP04's PEKS syntax requires $\mathsf{Test}$ to reject every non-matching keyword; the construction below needs only computational consistency.

## Sketch

For one-bit messages: $\Setup := \KeyGen$; $\Extract(\sk, \mathit{id}) := (\pk, \mathsf{Trapdoor}(\sk, \mathit{id} \| 1))$; $\Enc(\pk, \mathit{id}, \beta) := \mathsf{PEKS}(\pk, \mathit{id} \| \beta)$; and decryption with $(\pk, T)$ outputs $\mathsf{Test}(\pk, S, T)$. Correctness and computational consistency give decryption error negligible for $\beta = 1$ and $\beta = 0$ respectively. An extraction query on $\mathit{id} \ne \mathit{id}^*$ is a trapdoor query on $\mathit{id} \| 1 \notin \{\mathit{id}^* \| 0, \mathit{id}^* \| 1\}$, and the challenge on the messages $0, 1$ is the IND-CKA challenge on $(\mathit{id}^* \| 0, \mathit{id}^* \| 1)$. Longer messages are encrypted bit by bit, with a hybrid argument over the bits.
