---
type: reference
status: stub
title: "LLM07"
source: https://eprint.iacr.org/2006/073
authors: Brian A. LaMacchia, Kristin Lauter, Anton Mityagin
venue: ProvSec 2007
published: 2007
aliases:
  - LLM07
cryptobib_key: PROVSEC:LaMLauMit07
---

# [LLM07] Stronger Security of Authenticated Key Exchange

**Authors:** Brian A. LaMacchia, Kristin Lauter, Anton Mityagin | **Venue:** ProvSec 2007 | [Source](https://eprint.iacr.org/2006/073)

## Abstract

In this paper we study security definitions for authenticated key
exchange (AKE) protocols. We observe that there are several
families of attacks on AKE protocols that lie outside the boundary
of the current class of security definitions. In an attempt to
bring these attacks within the scope of analysis we extend the AKE
security definition to provide greater powers to the adversary. We
provide a general framework for defining AKE security, which we call
strong AKE security, such that existing security definitions
occur as instances of the framework. We then introduce NAXOS, a new
two-pass AKE protocol, and prove that it is secure in this stronger
definition.

In addition, we formulate a notion of ephemeral secret key which
captures all ephemeral information used in session establishment. We
demonstrate the importance of this formulation by showing that a
secure AKE protocol SIG-DH can become vulnerable when instantiated
with signature schemes which are insecure against revelation of the
secret random bits used in the signature generation.
