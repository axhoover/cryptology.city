---
type: reduction
status: stub
title: "Ideal PRC ⇒ PRC"
aliases: []
id: red-ideal-prc-to-prc
kind: implication
hypotheses: [ideal-prc]
conclusion: prc
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Ideal PRC ⇒ PRC

[[pseudorandom-error-correcting-code#ideal-prc|Ideal PRC]] implies [[pseudorandom-error-correcting-code|PRC]].

## Statement

Migrated verbatim from [[pseudorandom-error-correcting-code]] § Ideal PRC:

> An **ideal PRC** additionally requires that codewords are indistinguishable from uniformly random strings even to an adversary who holds the decoding key $k$. That is, the joint distribution $(k, \Enc_k(m))$ is computationally indistinguishable from $(k, U_n)$ where $U_n$ is a uniformly random $n$-bit string. This is strictly stronger than pseudorandomness (which only requires indistinguishability without the key). Ideal PRCs support watermarking schemes where even a user who knows the watermarking key cannot detect whether a given string is a codeword.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'This is strictly stronger than pseudorandomness' asserts BOTH an implication (ideal PRC => PRC) and a separation (PRC does not imply ideal PRC); the separation half is uncited and should be migrated as a distinct claim.
- No citation.
- 'ideal-prc' has no page.
