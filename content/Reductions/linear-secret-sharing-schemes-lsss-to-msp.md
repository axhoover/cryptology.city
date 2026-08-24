---
type: reduction
status: stub
title: "Linear secret sharing schemes (LSSS) ⇔ MSP"
aliases: []
id: red-linear-secret-sharing-schemes-lsss-to-msp
kind: equivalence
hypotheses: [linear-secret-sharing-scheme]
conclusion: monotone-span-program
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Linear secret sharing schemes (LSSS) ⇔ MSP

[[secret-sharing#linear-secret-sharing-schemes-lsss|Linear secret sharing schemes (LSSS)]] is equivalent to [[monotone-span-program|MSP]].

## Statement

Migrated verbatim from [[secret-sharing]]:

> A secret sharing scheme is linear if the shares are linear functions of the secret and randomness. Equivalent to monotone span programs over $\FF$.

Migrated verbatim from [[secret-sharing]] § Other results:

> - LSSS is equivalent to monotone span programs, which characterize the class of access structures realizable by linear schemes — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Uncited equivalence; duplicates the '# Other results' bullet on line 65 (which carries the '— standard' folklore label).
- Neither 'linear-secret-sharing-scheme' nor 'monotone-span-program' has a page.
- Uncited, carries the '— standard' folklore label; duplicates line 57.
- Neither object has a page.
- The second clause ('which characterize the class of access structures realizable by linear schemes') is a separate characterization claim bundled in.
