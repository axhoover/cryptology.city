---
type: reduction
status: draft
title: "IT-PIR ⇒ Computational Multi-server PIR"
aliases: []
id: red-it-pir-to-computational-multi-server-pir
kind: implication
hypotheses: [it-pir]
conclusion: computational-multi-server-pir
class: fully-black-box
model: standard
source: folklore
security-loss: "tight (distinguishing advantage is $0$)"
---

# IT-PIR ⇒ Computational Multi-server PIR

[[multi-server-private-information-retrieval|IT-PIR]] implies [[multi-server-private-information-retrieval#computational-multi-server-pir|Computational Multi-server PIR]].

## Statement

Every [[multi-server-private-information-retrieval|IT-PIR]] scheme is a [[multi-server-private-information-retrieval#computational-multi-server-pir|computational multi-server PIR]]: per-server query distributions that are identical for every pair of indices are in particular computationally indistinguishable — folklore.

## Sketch

The construction is the identity. A distinguisher between the queries sent to server $s$ for indices $i$ and $j$ sees identical distributions, so its advantage is $0$.

## Notes

`class: fully-black-box`: identity construction, using the IT-PIR scheme only as an oracle; the reduction forwards the adversary unchanged.
