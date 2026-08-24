---
type: reduction
status: stub
title: "Invertible PRFs ⇒ PRF"
aliases: []
id: red-invertible-prfs-to-prf
kind: implication
hypotheses: [invertible-prf]
conclusion: prf
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Invertible PRFs ⇒ PRF

[[pseudorandom-function#invertible-prfs|Invertible PRFs]] implies [[pseudorandom-function|PRF]].

## Statement

Migrated verbatim from [[pseudorandom-function]] § Invertible PRFs:

> An **invertible PRF (iPRF)** extends the PRF with an inversion algorithm, allowing recovery of all inputs that map to a given output. An $\mathsf{iPRF} = (\KeyGen, \Eval, \Invert)$ adds:
>
> - $\Invert(k, y) \to X,$ is a deterministic function that
>   returns the preimage set $X = \{x \in \calD : \Eval(k, x) = y\}$
>
> Note that for domains much larger than the range, $\Invert$ may return exponentially many preimages, so efficiency is only meaningful when $|\calD|$ is reasonable relative to $|\calR|$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Definitional 'extends' relation (an iPRF is a PRF plus Invert); no citation, and 'invertible-prf'/'iPRF' is an alias of THIS page rather than a distinct object, so the relation is self-referential in the current slug scheme.
