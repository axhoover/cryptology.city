---
type: reduction
status: draft
title: "LWE ⇒ DEPIR"
aliases: []
id: red-lwe-to-depir-lmw23
kind: implication
hypotheses: [lwe]
conclusion: depir
class: unstated
model: standard
source:
  - "[[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]"
security-loss: ""
---

# LWE ⇒ DEPIR

[[learning-with-errors|LWE]] implies [[doubly-efficient-pir|DEPIR]].

## Statement

Migrated verbatim from [[doubly-efficient-pir]] § Other results:

> - Unkeyed DEPIR can be built with server storage $O(N^{1+\varepsilon})$ and online computation and bandwidth $O(\log^{1/\varepsilon}(n))$ from [[learning-with-errors#ring-lwe|Ring LWE]] — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]

Migrated verbatim from [[homomorphic-encryption]] § Other results:

> - FHE + [[doubly-efficient-pir|DEPIR]]: doubly-efficient PIR and RAM computation from Ring-LWE — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Hypothesis is the Ring-LWE variant, a section of `[[learning-with-errors]]` rather than a node of its own; the anchor is written lowercase-hyphenated ('#ring-lwe') while the heading is '## Ring LWE' and other pages in the repo use the verbatim-heading form — style inconsistency, likely still resolving.
- Notational inconsistency in the efficiency claim: database size is $N$ in the storage bound but $n$ in the online bound (and $n$ in this page's syntax).
- Bullet prefix 'FHE + DEPIR:' reads as a conjunction of hypotheses, but the actual claim is Ring-LWE => (DEPIR and FHE RAM). The prefix is a topic label, not a hypothesis set - easy to mis-migrate.
- No wiki page for Ring-LWE; the LWE page carries an 'RLWE' alias, so Ring-LWE is conflated with plain LWE site-wide.
- Second conclusion (fully homomorphic RAM computation) has no object identifier.
