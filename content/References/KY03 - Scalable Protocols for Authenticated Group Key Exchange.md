---
type: reference
status: stub
title: "KY03"
source: https://eprint.iacr.org/2003/171
authors: Jonathan Katz, Moti Yung
venue: CRYPTO 2003
published: 2003
aliases:
  - KY03
cryptobib_key: C:KatYun03
---

# [KY03] Scalable Protocols for Authenticated Group Key Exchange

**Authors:** Jonathan Katz, Moti Yung | **Venue:** CRYPTO 2003 | [Source](https://eprint.iacr.org/2003/171)

## Abstract

We consider the fundamental problem of authenticated group key
exchange among $n$ parties within a larger and insecure public
network. A number of solutions to this problem have been proposed;
however, all provably-secure solutions thus far are not scalable and,
in particular, require $O(n)$ rounds. Our main contribution is the
first _scalable_ protocol for this problem along with a rigorous
proof of security in the standard model under the DDH assumption;
our protocol uses a constant number of rounds and requires only $O(1)$
“full” modular exponentiations per user. Toward this goal and of
independent interest, we first present a scalable compiler that
transforms any group key-exchange protocol secure against a passive
eavesdropper to an _authenticated_ protocol which is secure
against an active adversary who controls all communication in the
network. This compiler adds only one round and $O(1)$ communication
(per user) to the original scheme. We then prove secure — against a
passive adversary — a variant of the two-round group key-exchange
protocol of Burmester and Desmedt. Applying our compiler to this
protocol results in a provably-secure three-round protocol for
_authenticated_ group key exchange which also achieves
forward secrecy.
