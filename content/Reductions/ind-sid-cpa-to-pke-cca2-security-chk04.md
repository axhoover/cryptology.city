---
type: reduction
status: draft
title: Selective-ID IBE ⇒ CCA-secure PKE (CHK)
aliases:
  - Canetti–Halevi–Katz transform
id: red-ind-sid-cpa-to-pke-cca2-security-chk04
kind: implication
hypotheses: [ind-sid-cpa]
conclusion: pke-cca2-security
class: fully-black-box
model: standard
source:
  - "[[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]]"
security-loss: "additive: the CCA advantage is at most the selective-ID IBE advantage plus the strong one-time unforgeability advantage, plus the target-collision advantage when verification keys are hashed"
rationale:
  class: "The scheme calls the IBE and the one-time signature only as oracles, and the reduction commits to the challenge's verification key as its target identity and answers decryption queries with key-extraction queries, running any CCA adversary once as an oracle."
---

# Selective-ID IBE ⇒ CCA-secure PKE (CHK)

## Statement

An [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA-secure]] [[identity-based-encryption|IBE]] scheme, combined with a strongly unforgeable [[digital-signature#one-time-signatures|one-time signature]] scheme whose verification keys, hashed into $\bits^{\secpar}$ by a target-collision-resistant hash when longer, are identities, yields an [[public-key-encryption#cca-security|IND-CCA2-secure]] PKE scheme — [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]]. The public key is the IBE master public key. To encrypt $m$, sample a one-time key pair $(\vk, \sk_{\mathrm{ots}})$, encrypt $c \gets \Enc(\mathit{mpk}, H(\vk), m)$ to the identity $H(\vk)$, with $H$ the identity map when $\vk \in \bits^\secpar$ and otherwise a target-collision-resistant hash keyed in the public key, and output $(\vk, c, \Sign(\sk_{\mathrm{ots}}, c))$; decryption verifies the signature, extracts the key for identity $H(\vk)$ and decrypts $c$.

## Sketch

The reduction samples the challenge's $\vk^*$ first and declares $H(\vk^*)$ as its selective target identity. It answers a decryption query $(\vk, c, \sigma)$ with $H(\vk) \ne H(\vk^*)$ by extracting the key for $H(\vk)$; a valid query with $\vk = \vk^*$ and $(c, \sigma)$ different from the challenge's is a strong one-time forgery, and one with $\vk \ne \vk^*$ and $H(\vk) = H(\vk^*)$ is a target collision. The challenge then embeds the IBE challenge for identity $H(\vk^*)$ — [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]].

## Notes

- The identity space must be super-polynomial: with polynomially many identities, an adversary samples one-time key pairs until one maps to the challenge identity, re-signs the challenge ciphertext and has it decrypted — standard.
- Strongly unforgeable one-time signatures exist given one-way functions, which IBE implies through [[ibe-to-pke|IBE ⇒ PKE]] — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].
- With BB04's selective-ID IBE under the decisional [[bilinear-map-assumptions|bilinear Diffie–Hellman]] assumption, the transform gives IND-CCA2 PKE from pairings without random oracles — [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]], [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]].
- Efficiency: one one-time key generation and signature per ciphertext, and the ciphertext grows by a verification key and a signature. Replacing the signature by a MAC and a commitment shortens ciphertexts — [[BCHK07 - Chosen-Ciphertext Security from Identity-Based Encryption|BCHK07]].
