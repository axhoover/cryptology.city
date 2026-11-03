---
type: reduction
status: draft
title: "DDH ⇒ Key-hiding PKE (ElGamal)"
aliases: []
id: red-ddh-to-anonymous-public-key-encryption-bbdp01
kind: implication
hypotheses: [ddh]
conclusion: anonymous-public-key-encryption
class: fully-black-box
model: standard
source:
  - "[[BBDP01 - Key-Privacy in Public-Key Encryption|BBDP01]]"
  - "[[TY98 - On the Security of ElGamal Based Encryption|TY98]]"
rationale:
  class: "ElGamal uses only the operations of the common group, and the reduction embeds its DDH challenge in one public key and the challenge ciphertext and runs any IK-CPA adversary once as an oracle."
---

# DDH ⇒ Key-hiding PKE (ElGamal)

## Statement

Let all users share common parameters $(\GG, g, p) \gets \GrGen(1^\secpar)$, and let ElGamal over $\GG$ have $\sk = x \getsr \ZZ_p$, $\pk = g^x$, and $\Enc(\pk, m) = (g^r, m \cdot \pk^r)$ for $m \in \GG$ and $r \getsr \ZZ_p$. If [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$, ElGamal is [[public-key-encryption#key-hiding|IK-CPA-secure]] — [[BBDP01 - Key-Privacy in Public-Key Encryption|BBDP01]] — and [[public-key-encryption#cpa-security|CPA-secure]] — [[TY98 - On the Security of ElGamal Based Encryption|TY98]] — so it is a [[public-key-encryption#key-hiding|key-hiding]] [[public-key-encryption|PKE]].

## Sketch

On a DDH challenge $(X, Y, Z)$, the reduction sets $\pk_b := X$, samples the other key pair itself, and answers the challenge query with $(Y, m \cdot Z)$. For $Z = g^{xy}$ this is the IK-CPA game with that $b$; for uniform $Z$ the challenge is a uniform pair independent of both keys. Two such hybrids, one for each $b$, bound the IK-CPA advantage by twice the DDH advantage — standard.

## Notes

- BBDP01 also prove that the [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup scheme]] over a common group is [[public-key-encryption#key-hiding|IK-CCA-secure]] if DDH is hard — [[BBDP01 - Key-Privacy in Public-Key Encryption|BBDP01]].
