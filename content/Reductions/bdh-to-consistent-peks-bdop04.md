---
type: reduction
status: draft
title: "BDH ⇒ PEKS (random oracle model)"
aliases: []
id: red-bdh-to-consistent-peks-bdop04
kind: implication
hypotheses: [bdh]
conclusion: consistent-peks
class: fully-black-box
model: rom
source:
  - "[[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]"
  - "[[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]]"
security-loss: ""
rationale:
  class: "The construction is one fixed scheme over the pairing group, and the reduction runs the PEKS adversary only as an oracle to solve BDH."
  model: "The reduction programs the scheme's two hash functions, modelled as random oracles."
---

# BDH ⇒ PEKS (random oracle model)

## Statement

Let $e : \GG \times \GG \to \GG_T$ be a pairing on groups of prime order $p$ with generator $g$, and let $H_1 : \bits^* \to \GG$ and $H_2 : \GG_T \to \bits^{\log p}$ be hash functions. The scheme

- $\KeyGen$: sample $\alpha \getsr \ZZ_p^*$, output $\pk = (g, h = g^\alpha)$ and $\sk = \alpha$;
- $\mathsf{PEKS}(\pk, W)$: sample $r \getsr \ZZ_p^*$, output $(g^r, H_2(e(H_1(W), h^r)))$;
- $\mathsf{Trapdoor}(\sk, W) := H_1(W)^\alpha$;
- $\mathsf{Test}(\pk, (A, B), T_W) := [H_2(e(T_W, A)) = B]$

is an [[public-key-encryption-with-keyword-search#security-against-chosen-keyword-attacks|IND-CKA-secure]] [[public-key-encryption-with-keyword-search|PEKS]] if the computational [[bilinear-map-assumptions|BDH]] assumption holds and $H_1, H_2$ are modelled as [[random-oracle-model|random oracles]] — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]. In the random oracle model it is also [[public-key-encryption-with-keyword-search#consistency|computationally consistent]] — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]].

## Sketch

Correctness holds since $e(H_1(W)^\alpha, g^r) = e(H_1(W), h^r)$. Given a BDH instance $(g^a, g^b, g^c)$, the reduction sets $h := g^a$ and the challenge's first component to $g^b$, embeds $g^c$ in the $H_1$ values of a guessed set of keywords, and sets every other $H_1$ value to $g^x$ with known $x$, so that it answers trapdoor queries on those keywords as $(g^a)^x$. An adversary with non-negligible advantage must query $H_2$ at a value from which the reduction computes $e(g, g)^{abc}$; it picks that value from its list of $H_2$ queries — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]].

## Notes

- The scheme is a variant of the Boneh–Franklin IBE ([[bdh-to-ibe-bf01|BDH ⇒ IBE]]), with the keyword as identity and $\mathsf{Trapdoor}$ as key extraction — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]].
