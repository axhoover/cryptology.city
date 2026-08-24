---
type: reduction
status: draft
title: "DDH ⇒ PKE"
aliases: []
id: red-ddh-to-pke-elgamal85
kind: implication
hypotheses: [ddh]
conclusion: pke
class: unstated
model: standard
source:
  - "[[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]"
  - "[[DH76 - New Directions in Cryptography|DH76]]"
security-loss: ""
---

# DDH ⇒ PKE

[[decisional-diffie-hellman|DDH]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[decisional-diffie-hellman]] § Known Results:

> - DDH implies [[public-key-encryption|PKE]] via the ElGamal encryption scheme: encrypt $m$ under public key $y = g^x$ as $(g^r, m \cdot y^r)$; decryption uses $x$ to compute $y^r$ and recover $m$ — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]

Migrated verbatim from [[public-key-encryption]] § Other results:

> - PKE from [[decisional-diffie-hellman|DDH]]: the ElGamal scheme encrypts $m$ as $(g^r, m \cdot y^r)$ under public key $y = g^x$, and is CPA-secure under DDH — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]] (see also [[DH76 - New Directions in Cryptography|DH76]] for the underlying key-exchange)

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- ElGamal85 predates the DDH assumption and does not contain the DDH-based IND-CPA proof; the citation attaches to the scheme, not to the reduction.
- Security notion (IND-CPA) not stated in the bullet.
- Two citations, one primary (ElGamal85) and one 'see also' (DH76 for the underlying key exchange) — the second is background, not a second hypothesis or a second step.
- Conclusion qualified as CPA-secure PKE; the security notion is part of the conclusion object.
