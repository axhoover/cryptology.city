---
type: reduction
status: stub
title: PRF ⇒ CPA-secure SKE
aliases: []
id: red-prf-to-ske
hypotheses: [prf]
conclusion: ske
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PRF ⇒ CPA-secure SKE

A [[pseudorandom-function|PRF]] implies a CPA-secure
[[symmetric-key-encryption|SKE]].

## Construction

Migrated verbatim from [[pseudorandom-function|PRF]] § Other results:

> PRF implies CPA-secure [[symmetric-key-encryption|SKE]]: CTR-mode encryption $\Enc(k, m_1 \cdots m_\ell) = \PRF(k,1)\|{\cdots}\|\PRF(k,\ell) \oplus m_1\|{\cdots}\|m_\ell$

## Notes

`status: stub` and `source: folklore`: the claim carried no citation on the page
it was migrated from, and none was invented.

**Suspected error in the migrated sketch, recorded and not fixed.** As written
the construction is deterministic — the counter sequence starts at $1$ for every
message, so encrypting the same message twice repeats the ciphertext and the
scheme cannot be CPA-secure. CTR mode samples a fresh nonce per encryption,
which the formula omits. Compare
[[symmetric-key-encryption|SKE]] § Other results, which states the same
construction _with_ a fresh nonce $r$. The parenthesisation is also ambiguous:
the $\oplus$ appears to bind only the last $\PRF$ block.
