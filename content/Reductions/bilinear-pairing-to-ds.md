---
type: reduction
status: stub
title: "Bilinear pairing ⇒ DS"
aliases: []
id: red-bilinear-pairing-to-ds
kind: implication
hypotheses: [bilinear-pairing]
conclusion: ds
class: unstated
model: rom
source: folklore
security-loss: ""
---

# Bilinear pairing ⇒ DS

[[pairings|Bilinear pairing]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § BLS signatures:

> BLS signatures (Boneh-Lynn-Shacham) use a bilinear pairing $e: \GG_1 \times \GG_2 \to \GG_T$ to achieve **unique, deterministic, and aggregatable** signatures. To sign $m$: output $\sigma = H(m)^{\sk} \in \GG_1$ (where $H: \bits^* \to \GG_1$ is a hash-to-curve function). Verification checks $e(\sigma, g_2) = e(H(m), \pk)$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation — the BLS paper (Boneh-Lynn-Shacham, Asiacrypt 2001) has no reference page in content/References/.
- `[[pairings]]` (glossary) exists but is not wikilinked; 'pairings' as a hypothesis is a structure, not a hardness assumption (the assumption, co-CDH, is stated separately at line 153).
