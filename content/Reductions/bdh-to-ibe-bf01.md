---
type: reduction
status: draft
title: "BDH ⇒ IBE (random oracle model)"
aliases: []
id: red-bdh-to-ibe-bf01
kind: implication
hypotheses: [bdh]
conclusion: ibe
class: fully-black-box
model: rom
source:
  - "[[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]"
security-loss: "factor $O(q_E q_{H_2})$ for BasicIdent with $q_E$ key queries and $q_{H_2}$ queries to $H_2$: IND-ID-CPA advantage $\\varepsilon$ gives BDH advantage at least $\\varepsilon/(\\mathrm{e}(1+q_E)q_{H_2})$"
rationale:
  class: "The construction is one fixed scheme over the pairing group, and the reduction runs the IBE adversary only as an oracle to solve BDH."
  model: "The reduction programs the scheme's hash functions, modelled as random oracles."
  security-loss: "The reduction embeds the BDH challenge in each $H_1$ value with Coron's biased coin, so that it answers every key query and holds the challenge at the target identity with probability $1/(\\mathrm{e}(1+q_E))$, and outputs a random one of the $q_{H_2}$ queries to $H_2$."
---

# BDH ⇒ IBE (random oracle model)

## Statement

If the computational [[bilinear-map-assumptions|BDH]] assumption holds and the hash functions are modelled as [[random-oracle-model|random oracles]], the Boneh–Franklin scheme FullIdent is an [[identity-based-encryption#ind-id-cca-security|IND-ID-CCA-secure]] [[identity-based-encryption|IBE]] and BasicIdent is [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].

## Sketch

In BasicIdent the master public key is $g^s$, the key of $\mathit{id}$ is $H_1(\mathit{id})^s$, and $m$ encrypts to $(g^r, m \oplus H_2(e(H_1(\mathit{id}), g^s)^r))$. The reduction embeds a BDH instance $(g^a, g^b, g^c)$ as $g^s := g^a$, the challenge's $g^r := g^b$ and $H_1(\mathit{id}^*) := g^c$ for a guessed target identity, programming $H_1(\mathit{id}) := g^{x}$ with known $x$ elsewhere so that it can answer key queries. An adversary with non-negligible advantage must query $H_2$ at $e(g,g)^{abc}$, which the reduction picks from its list of $H_2$ queries; FullIdent adds the Fujisaki–Okamoto transform for chosen-ciphertext security — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].

## Notes

- A BasicIdent ciphertext on an $n$-bit message is one element of $\GG$ and an $n$-bit string, and FullIdent adds a second $n$-bit string; decryption computes one pairing — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].
