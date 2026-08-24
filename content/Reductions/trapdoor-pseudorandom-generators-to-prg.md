---
type: reduction
status: stub
title: "Trapdoor pseudorandom generators ⇔ PRG"
aliases: []
id: red-trapdoor-pseudorandom-generators-to-prg
kind: equivalence
hypotheses: [trapdoor-pseudorandom-generator]
conclusion: prg
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Trapdoor pseudorandom generators ⇔ PRG

[[pseudorandom-generator#trapdoor-pseudorandom-generators|Trapdoor pseudorandom generators]] is equivalent to [[pseudorandom-generator|PRG]].

## Statement

Migrated verbatim from [[pseudorandom-generator]] § Trapdoor pseudorandom generators:

> The pseudorandomness of a trapdoor PRG is equivalent to the pseudorandomness
> of $(\Gen,\Eval)$ treated as a PRG with
> keyspace $(\calK\times \calT).$ Beyond that, a trapdoor PRG should be

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Equivalence is between the pseudorandomness PROPERTIES, not the objects ('the pseudorandomness of a trapdoor PRG is equivalent to the pseudorandomness of (Gen,Eval) treated as a PRG with keyspace K x T') — property-level equivalence needs its own encoding.
- No citation.
- 'trapdoor-pseudorandom-generator' has no page.
