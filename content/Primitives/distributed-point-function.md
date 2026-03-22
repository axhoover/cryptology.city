---
aliases:
  - DPF
  - DPFs
  - Distributed Point Functions
  - Distributed Point Functions
title: Distributed Point Functions
---

# Distributed Point Functions

A _Distributed Point function_ allows one to generate a pair of keys which can be used to evaluate two functions which are equal everywhere except on one specific point. It was introduced in [[GI14 - Distributed Point Functions and Their Applications|GI14]]. Security requires that given one of the keys, an adversary cannot tell which point the accompanying key differs on.

TODO: generalized by [[BGI15 - Function Secret Sharing|BGI15]] and [[BGI16 - Function Secret Sharing Improvements and Extensions|BGI16]] into Function secret sharing more generally

## Definition

### Variations

## Other results

- Distributed point functions can be built from [[hash-function|OWFs]] — [[GI14 - Distributed Point Functions and Their Applications|GI14]]
- [[multi-server-private-information-retrieval#Computational Multi-server PIR|Computational multi-server PIR]] can be built from distributed point functions — [[GI14 - Distributed Point Functions and Their Applications|GI14]]
