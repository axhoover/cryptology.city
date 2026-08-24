---
type: reduction
status: stub
title: "Fiat-Shamir + Schnorr signatures ⇒ DS"
aliases: []
id: red-fiat-shamir-and-schnorr-signatures-to-ds
kind: implication
hypotheses: [fiat-shamir, schnorr-identification-protocol]
conclusion: ds
class: unstated
model: rom
source: folklore
security-loss: ""
---

# Fiat-Shamir + Schnorr signatures ⇒ DS

[[fiat-shamir-heuristic|Fiat-Shamir]] together with [[digital-signature#schnorr-signatures|Schnorr signatures]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § Schnorr signatures:

> Schnorr signatures are built from the **Schnorr identification protocol** — a three-message sigma protocol for proving knowledge of a discrete logarithm — compiled to a signature via the Fiat-Shamir transform. To sign $m$ with secret key $x$ (where $\pk = g^x$): sample $r \getsr \ZZ_p$, compute $R = g^r$, $c = H(R \| m)$, $s = r + cx \mod p$; the signature is $(R, s)$. Verification checks $g^s = R \cdot \pk^c$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on this paragraph (Sch91/FS86 appear only in the next paragraph).
- One hypothesis (Fiat-Shamir) is a TRANSFORM, not an object — the target model needs transforms as edges/techniques, not hypothesis nodes. `[[fiat-shamir-heuristic]]` exists as a page but is not wikilinked.
- 'Schnorr identification protocol' has no page or slug.
- The ROM is implicit in $H$ but never stated in this paragraph.
