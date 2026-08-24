---
type: primitive
status: stub
aliases:
  - IT-PIR
  - Multi-server Private Information Retrieval
title: Multi-server Private Information Retrieval
id: it-pir
variants:
  computational-multi-server-pir: "#computational-multi-server-pir"
---

# Multi-server Private Information Retrieval

Private Information Retrieval (PIR) is a primitive that allows a client to access a specific element from a public array without revealing which array element was accessed, introduced by [[CGKS98 - Private information retrieval|CGKS98]].

## Syntax

A $k$-server Private Information Retrieval (PIR) for a database of size $n$ is a tuple of efficient functions $(\Query, \Answer, \mathsf{Compute})$, with respect to randomness space $R$ such that:

- Generally, we consider the size of the initial queries to be $u$ bits each and the answers to be $d$ bits each.
- In general, we can consider the total communication of a PIR as $k(u + d)$.
- A PIR is non-trivial only so long as the communication is less than $n$.

## Properties

### Correctness

A PIR is correct if for all $D \in \bits^n$, $i \in [n]$, and $r \in R$ $$\Recon(i,a_1,\ldots,a_k ; r) = D[i]$$ where each $a_s \leftarrow \Answer(s, q_s, D)$ and $(q_1, \ldots, q_k) \leftarrow \Query(i; r)$.

### Privacy

A PIR is private if for every $i, j \in [n]$, $s \in [k]$, and $q \in \bits^u$, $$\Pr_r[\Query(i; r)[s] = q] = \Pr_r[\Query(j; r)[s] = q].$$

Intuitively, this means that each server observes the same query uploaded with the same probability.

# Variations

## Computational Multi-server PIR

Similar to the [[single-server-private-information-retrieval|PIR]], one can weaken the notion of multi-server PIR to only be private against polynomial-time non-colluding servers. In this setting, the syntax remains the same, but now the query distribution is only required to be computationally indistinguishable for any two index pairs.

- [[hash-function-to-dpf-gi14|Hash function ⇒ DPF]]
- [[dpf-to-computational-multi-server-pir-gi14|DPF ⇒ Computational Multi-server PIR]]

## Doubly-efficient Multi-server PIR

TODO

# Other results

- The typical setting is the 1-bit array (also called database), since you can build a $w$-bit PIR using just $w$ copies of a 1-bit PIR.

<!-- BEGIN GENERATED participates-in ae178bff9a3e -->
## Participates in

**Builds on Multi-server Private Information Retrieval**

- [[it-pir-to-computational-multi-server-pir|IT-PIR ⇒ Computational Multi-server PIR]]

**Produces Multi-server Private Information Retrieval**

- [[dpf-to-it-pir-gi14|DPF ⇒ IT-PIR]]
- [[spir-to-it-pir|SPIR ⇒ IT-PIR]]
- [[ss-to-it-pir-cgks98|SS ⇒ IT-PIR]]
<!-- END GENERATED participates-in -->
