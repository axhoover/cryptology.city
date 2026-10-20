---
type: reduction
status: draft
title: WE + PRG ⇒ PKE (GGSW)
aliases: []
id: red-witness-encryption-and-prg-to-pke-ggsw13
kind: implication
hypotheses: [witness-encryption, prg]
conclusion: pke
class: free
model: standard
source:
  - "[[GGSW13 - Witness encryption and its applications|GGSW13]]"
security-loss: "additive: the PKE advantage is at most twice the PRG advantage plus the witness-encryption advantage plus 2^{-λ}"
rationale:
  class: "Ciphertexts are witness encryptions under the statement that the public key lies in the image of the generator, an NP relation containing the generator's circuit, so the construction uses the PRG's code; the security proof uses the adversary only as an oracle."
---

# WE + PRG ⇒ PKE (GGSW)

## Statement

[[witness-encryption|Witness encryption]] for $\classNP$ and a length-doubling [[pseudorandom-generator|PRG]] $G$ yield an [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme: the secret key is a seed $s$, the public key is $G(s)$, a ciphertext is $\Enc(1^\secpar, x = G(s), m)$ for the statement "$x$ is in the image of $G$", and $s$ is the decryption witness — [[GGSW13 - Witness encryption and its applications|GGSW13]].

## Sketch

Replace the public key by a uniform string $u$, which the adversary cannot notice by PRG security. With probability at least $1 - 2^{-\secpar}$, $u$ is outside the image of $G$, a false statement, so soundness security of the witness encryption hides the message — [[GGSW13 - Witness encryption and its applications|GGSW13]].
