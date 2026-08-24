---
type: reduction
status: stub
title: "DDH ⇒ CDH"
aliases: []
id: red-ddh-to-cdh
kind: implication
hypotheses: [ddh]
conclusion: cdh
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DDH ⇒ CDH

[[decisional-diffie-hellman|DDH]] implies [[computational-diffie-hellman|CDH]].

## Statement

Migrated verbatim from [[computational-diffie-hellman]] § Computational Diffie-Hellman:

> The _Computational Diffie-Hellman (CDH)_ is a central assumption in cryptography. It is a natural strengthening of the [[decisional-diffie-hellman|DDH]] assumption. In other words, an adversary which can solve the CDH problem can also solve [[decisional-diffie-hellman|DDH]] in the same group.

Migrated verbatim from [[computational-diffie-hellman]] § Known Results:

> - It is easy to see that if $\calA$ can compute $g^{xy}$, then $\calA$ can easily distinguish between $g^{xy}$ and a random group element. This establishes that CDH is not easier than [[decisional-diffie-hellman|DDH]].

Migrated verbatim from [[decisional-diffie-hellman]] § Known Results:

> - It is easy to see that if $\calA$ can compute $g^{xy}$, then $\calA$ can easily distinguish between $g^{xy}$ and a random group element. This establishes that [[computational-diffie-hellman|CDH]] is not easier than DDH.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED DIRECTION CONFUSION: the text calls CDH a natural strengthening of the DDH assumption, but DDH is the stronger assumption (DDH hard implies CDH hard). The gloss that follows (an adversary solving CDH also solves DDH) is correct and describes the opposite framing.
- Uncited and not flagged folklore or standard.
- decisional-diffie-hellman.md line 12 states the mirrored version of the same relation, so the two pages disagree in wording.
- CDH is not easier than DDH mixes problem-hardness ordering with assumption-strength ordering.
- Duplicate of the intro claim at line 12 and of decisional-diffie-hellman.md line 48 (identical wording).
- Duplicate of computational-diffie-hellman.md line 46 (identical wording).
- CDH is not easier than DDH conflates problem hardness with assumption strength.
