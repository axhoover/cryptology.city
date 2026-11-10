---
type: reference
status: stub
title: "Cor02"
source: https://eprint.iacr.org/2001/062
authors: Jean-Sébastien Coron
venue: EUROCRYPT 2002
published: 2002
aliases:
  - Cor02
cryptobib_key: EC:Coron02
---

# [Cor02] Optimal Security Proofs for PSS and Other Signature Schemes

**Authors:** Jean-Sébastien Coron | **Venue:** EUROCRYPT 2002 | [Source](https://eprint.iacr.org/2001/062)

## Abstract

The Probabilistic Signature Scheme (PSS) designed by Bellare and
Rogaway is a signature scheme provably secure against chosen
message attacks in the random oracle model, with a security level equivalent to RSA.
In this paper, we derive a new security proof for PSS in which
a much shorter random salt is used to achieve the same security
level, namely we show that $\log_2 q_{sig}$ bits suffice, where
$q_{sig}$ is the number of signature queries made by the attacker.
When PSS is used with message recovery, a better
bandwidth is obtained because longer messages can now be
recovered. Moreover, we show that this size is optimal: if less
than $\log_2 q_{sig}$ bits of random salt are used, PSS is still
provably secure but no security proof can be tight. This result
is based on a new technique which shows that other
signature schemes such as the Full Domain Hash scheme and
Gennaro-Halevi-Rabin's scheme have optimal security proofs.
