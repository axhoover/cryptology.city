---
type: reduction
status: stub
title: "CDH ⇒ DLOG"
aliases: []
id: red-cdh-to-dlog
kind: implication
hypotheses: [cdh]
conclusion: dlog
class: unstated
model: standard
source: folklore
security-loss: ""
---

# CDH ⇒ DLOG

[[computational-diffie-hellman|CDH]] implies [[discrete-logarithm|DLOG]].

## Statement

Migrated verbatim from [[discrete-logarithm]] § Discrete logarithm:

> The _discrete logarithm (DLOG)_ assumption is used throughout cryptography. It is a natural strengthening of the [[computational-diffie-hellman|CDH]] assumption. In other words, an adversary which can solve the DLOG problem can also solve [[computational-diffie-hellman|CDH]] in the same group.

Migrated verbatim from [[discrete-logarithm]] § Related results:

> - It is easy to see that if $\calA$ can compute $x$ for a random $g^x$, then $\calA$ can compute both $x$ and $y$ from $g^{x}$ and $g^{y}$ and find $g^{xy}$ easily. This establishes that DLOG is not easier than [[computational-diffie-hellman|CDH]].

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED DIRECTION CONFUSION: calling DLOG a natural strengthening of the CDH assumption inverts assumption strength — CDH hardness implies DLOG hardness, so the DLOG assumption is the weaker one. The following gloss (an adversary solving DLOG also solves CDH) is correct.
- Uncited and not flagged folklore or standard.
- Same pattern of wording appears in the intros of computational-diffie-hellman.md and decisional-diffie-hellman.md.
- Duplicate of the intro claim at line 12.
- The sketch silently invokes two DLOG solutions (for g^x and g^y) where one suffices.
