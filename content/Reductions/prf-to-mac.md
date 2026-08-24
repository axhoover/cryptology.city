---
type: reduction
status: stub
title: PRF ⇒ MAC
aliases: []
id: red-prf-to-mac
hypotheses: [prf]
conclusion: mac
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PRF ⇒ MAC

A [[pseudorandom-function|PRF]] implies a
[[message-authentication-code|MAC]].

## Construction

Migrated verbatim from [[pseudorandom-function|PRF]] § Other results:

> PRF implies [[message-authentication-code|MAC]]: $\Tag(k, m) = \PRF(k, m)$ is a secure one-time MAC; extending to many messages uses standard domain-extension techniques

## Notes

`status: stub` and `source: folklore`: the claim carried no citation on the page
it was migrated from, and none was invented.

**Suspected imprecision in the migrated sketch, recorded and not fixed.**
$\Tag(k,m) = \PRF(k,m)$ is a secure many-time (EUF-CMA) fixed-length MAC, not
merely a one-time MAC; the _one-time_ qualifier understates the standard result.
The following clause also conflates message _count_ with message _length_ —
domain extension buys long messages, not more queries.
