---
type: reduction
status: draft
title: "DCR ⇒ HE"
aliases: []
id: red-dcr-to-he-pai99
kind: implication
hypotheses: [dcr]
conclusion: he
class: unstated
model: standard
source:
  - "[[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]"
security-loss: ""
---

# DCR ⇒ HE

[[decisional-composite-residuosity|DCR]] implies [[homomorphic-encryption|HE]].

## Statement

Migrated verbatim from [[decisional-composite-residuosity]] § Decisional composite residuosity assumption:

> The _decisional composite residuosity (DCR) assumption_ states that it is computationally hard to distinguish a random $n$-th power residue modulo $n^2$ from a uniformly random element of $\ZZ_{n^2}^*$, where $n = pq$ is an RSA modulus. Introduced by Paillier as the hardness basis for an additively homomorphic encryption scheme — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]].

Migrated verbatim from [[decisional-composite-residuosity]] § Known Results:

> - DCR implies the Paillier cryptosystem, which achieves additive homomorphism: given $\Enc(m_1)$ and $\Enc(m_2)$, one can compute $\Enc(m_1 + m_2 \bmod n)$ without decryption — [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]

Migrated verbatim from [[decisional-composite-residuosity]] § Known Results:

> - DCR → threshold encryption (via Paillier with distributed key generation) — standard

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Historical framing (introduced as the hardness basis for) rather than a stated reduction.
- Overlaps the Known Results bullets at lines 29 and 32.
- Conclusion named as a scheme (the Paillier cryptosystem) rather than a primitive; nearest slug is homomorphic-encryption.
- Overlaps the bullet at line 32 (DCR to CPA-secure PKE with additive homomorphism), same citation.
- The conclusion node homomorphic-encryption is far coarser than 'additively (linearly) homomorphic PKE'; the wiki has no page for the linear-homomorphism sub-object.
- Duplicates lines 29 and 32 of the same page, which already record DCR yields additively homomorphic PKE with a Pai99 citation.
- Uncited on this sub-edge, while the parent carries only a '- standard' folklore label.
- via Paillier with distributed key generation chains two construction steps.
- Marked standard where Fouque-Poupard-Stern / Damgard-Jurik are attributable.
- threshold-encryption and distributed-key-generation have no pages.
