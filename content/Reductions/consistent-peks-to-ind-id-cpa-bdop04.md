---
type: reduction
status: draft
title: "Perfectly consistent PEKS ⇒ IBE (BDOP04)"
aliases: []
id: red-consistent-peks-to-ind-id-cpa-bdop04
kind: implication
hypotheses: [perfectly-consistent-peks]
conclusion: ind-id-cpa
class: fully-black-box
model: standard
source:
  - "[[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]"
security-loss: ""
rationale:
  class: "The IBE calls the PEKS algorithms only as oracles, and the reduction runs the IBE adversary only as an oracle, forwarding its extraction queries as trapdoor queries."
---

# Perfectly consistent PEKS ⇒ IBE (BDOP04)

## Statement

A [[public-key-encryption-with-keyword-search#perfect-consistency|perfectly consistent]] [[public-key-encryption-with-keyword-search|PEKS]] scheme yields an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] scheme — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]. In the definition of [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]], $\mathsf{Test}$ rejects every non-matching keyword, which is perfect consistency — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]].

## Sketch

For one-bit messages: $\Setup := \KeyGen$; $\Extract(\sk, \mathit{id}) := (\pk, \mathsf{Trapdoor}(\sk, \mathit{id} \| 1))$; $\Enc(\pk, \mathit{id}, \beta) := \mathsf{PEKS}(\pk, \mathit{id} \| \beta)$; and decryption with $(\pk, T)$ outputs $\mathsf{Test}(\pk, S, T)$. Correctness of the PEKS bounds the decryption error for $\beta = 1$, and perfect consistency makes decryption of $\beta = 0$ error-free for every identity. An extraction query on $\mathit{id} \ne \mathit{id}^*$ is a trapdoor query on $\mathit{id} \| 1 \notin \{\mathit{id}^* \| 0, \mathit{id}^* \| 1\}$, and the challenge on the messages $0, 1$ is the IND-CKA challenge on $(\mathit{id}^* \| 0, \mathit{id}^* \| 1)$; longer messages are encrypted bit by bit, with a hybrid argument over the bits.

## Notes

- For identities in $\bits^\secpar$, [[public-key-encryption-with-keyword-search#consistency|computational consistency]] against [[uniform-and-non-uniform-adversaries|non-uniform]] adversaries also suffices: the decryption error on $\mathit{id}$ for $\beta = 0$ is the advantage of the consistency adversary that outputs $(\mathit{id} \| 0, \mathit{id} \| 1)$, and a non-uniform adversary hard-wires, for each $\secpar$, an identity that maximizes it — standard.
