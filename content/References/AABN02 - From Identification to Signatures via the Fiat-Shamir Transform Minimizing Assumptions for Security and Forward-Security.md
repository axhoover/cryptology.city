---
type: reference
status: stub
title: "AABN02"
source: https://eprint.iacr.org/2002/022
authors: Michel Abdalla, Jee Hea An, Mihir Bellare, Chanathip Namprempre
venue: EUROCRYPT 2002
published: 2002
aliases:
  - AABN02
cryptobib_key: EC:AABN02
---

# [AABN02] From Identification to Signatures via the Fiat-Shamir Transform: Minimizing Assumptions for Security and Forward-Security

**Authors:** Michel Abdalla, Jee Hea An, Mihir Bellare, Chanathip Namprempre | **Venue:** EUROCRYPT 2002 | [Source](https://eprint.iacr.org/2002/022)

## Abstract

The Fiat-Shamir paradigm for transforming
identification schemes into signature schemes has been popular since
its introduction because it yields efficient signature schemes, and
has been receiving renewed interest of late as the main tool in
deriving forward-secure signature schemes.
We find minimal (meaning
necessary and sufficient) conditions on the identification scheme to
ensure security of the signature scheme in the random oracle model,
in both the usual and the forward-secure cases.
Specifically we show that the signature scheme is secure
(resp. forward-secure) against chosen-message attacks in the random
oracle model if and only if the underlying identification
scheme is secure (resp. forward-secure) against impersonation under
passive (i.e.. eavesdropping only) attacks, and has its
commitments drawn at random from a large space. An extension is
proven incorporating a random seed into the Fiat-Shamir transform so
that the commitment space assumption may be removed.
