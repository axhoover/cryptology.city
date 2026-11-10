---
type: reference
status: stub
title: "KPTZ13"
source: https://eprint.iacr.org/2013/379
authors: Aggelos Kiayias, Stavros Papadopoulos, Nikos Triandopoulos, Thomas Zacharias
venue: CCS 2013
published: 2013
aliases:
  - KPTZ13
cryptobib_key: CCS:KPTZ13
---

# [KPTZ13] Delegatable Pseudorandom Functions and Applications

**Authors:** Aggelos Kiayias, Stavros Papadopoulos, Nikos Triandopoulos, Thomas Zacharias | **Venue:** CCS 2013 | [Source](https://eprint.iacr.org/2013/379)

## Abstract

We put forth the problem of delegating the evaluation of a
pseudorandom function (PRF) to an untrusted proxy. A _delegatable PRF_, or DPRF for short, is a new primitive that enables a proxy to evaluate a PRF on a strict subset of its domain using a trapdoor derived from the DPRF secret-key. PRF delegation is
_policy-based_: the trapdoor is constructed with respect to a
certain policy that determines the subset of input values which the
proxy is allowed to compute. Interesting DPRFs should achieve
_low-bandwidth delegation_: Enabling the proxy to compute the PRF values that conform to the policy should be more efficient than simply providing the proxy with the sequence of all such values precomputed.
The main challenge in constructing DPRFs is in maintaining the
pseudorandomness of unknown values in the face of an attacker that
adaptively controls proxy servers. A DPRF may be optionally equipped
with an additional property we call _policy privacy_, where any
two delegation predicates remain indistinguishable in the view of a
DPRF-querying proxy: Achieving this raises new design challenges as
policy privacy and efficiency are seemingly conflicting goals.

For the important class of policies described as (1-dimensional)
_ranges_, we devise two DPRF constructions and rigorously prove
their security. Built upon the well-known tree-based GGM PRF
family [GGM86], our constructions are generic and feature only
logarithmic delegation size in the number of values conforming to the
policy predicate. At only a constant-factor efficiency reduction, we
show that our second construction is also policy private. As we
finally describe, their new security and efficiency properties render
our delegated PRF schemes particularly useful in numerous security
applications, including RFID, symmetric searchable encryption, and
broadcast encryption.
