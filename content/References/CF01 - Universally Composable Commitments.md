---
type: reference
status: stub
title: "CF01"
source: https://eprint.iacr.org/2001/055
authors: Ran Canetti, Marc Fischlin
venue: CRYPTO 2001
published: 2001
aliases:
  - CF01
cryptobib_key: C:CanFis01
---

# [CF01] Universally Composable Commitments

**Authors:** Ran Canetti, Marc Fischlin | **Venue:** CRYPTO 2001 | [Source](https://eprint.iacr.org/2001/055)

## Abstract

We propose a new security measure for commitment protocols, called
/universally composable/ (UC) Commitment. The measure
guarantees that commitment protocols behave like an "ideal commitment
service," even when concurrently composed with an arbitrary set of
protocols. This is a strong guarantee: it implies that security is
maintained even when an unbounded number of copies of the scheme are
running concurrently, it implies non-malleability (not only with
respect to other copies of the same protocol but even with respect
to other protocols), it provides resilience to selective
decommitment, and more.

Unfortunately two-party UC commitment protocols do not exist in
the plain model. However, we construct two-party UC commitment
protocols, based on general complexity assumptions, in the
/common reference string model/ where all parties have
access to a common string taken from a predetermined distribution.
The protocols are non-interactive, in the sense that both the
commitment and the opening phases consist of a single message
from the committer to the receiver.
