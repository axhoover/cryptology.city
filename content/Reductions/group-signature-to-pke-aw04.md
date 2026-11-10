---
type: reduction
status: draft
title: "Group signatures ⇒ PKE"
aliases: []
id: red-group-signature-to-pke-aw04
kind: implication
hypotheses: [group-signature]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source:
  - "[[AW04 - On the Minimal Assumptions of Group Signature Schemes|AW04]]"
security-loss: ""
rationale:
  class: "The construction calls the group signature's key generation (for two members), signing and opening algorithms only as oracles, and the fixed reduction runs any IND-CPA adversary as an oracle, as a CPA-full-anonymity adversary that receives every signing key."
---

# Group signatures ⇒ PKE

## Statement

If a [[group-signature|group signature scheme]] that is [[group-signature#full-anonymity|fully anonymous]] and [[group-signature#full-traceability|fully traceable]] exists, then an [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] scheme exists — [[AW04 - On the Minimal Assumptions of Group Signature Schemes|AW04]].

## Sketch

For a group of two members, let the public key be $(\mathsf{gpk}, \mathsf{gsk}[1], \mathsf{gsk}[2])$ and the secret key $\mathsf{gmsk}$, encrypt a bit $\beta$ as a signature by member $\beta + 1$ on a fixed message $m_0$, and decrypt with $\Open$; longer messages are encrypted bit by bit. Correctness of opening gives correct decryption, and an IND-CPA adversary against one bit becomes, with the same advantage, a [[group-signature#cpa-full-anonymity|CPA-full-anonymity]] adversary that challenges on members $1, 2$ and $m_0$, since that game gives it every signing key — standard.

## Notes

- With the opening oracle of full anonymity as the decryption oracle, the one-bit scheme is [[public-key-encryption#cca-security|IND-CCA2-secure]], since a decryption query on $\sigma \ne \sigma^*$ is an opening query on $(m_0, \sigma) \ne (m_0, \sigma^*)$ — standard.
- [[digital-signature|Digital signatures]], by contrast, follow from one-way functions ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
