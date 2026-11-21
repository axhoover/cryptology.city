---
type: reference
status: stub
title: "Parno15"
source: https://eprint.iacr.org/2015/437
authors: Bryan Parno
venue: preprint
published: 2015
aliases:
  - Parno15
cryptobib_key: EPRINT:Parno15
---

# [Parno15] A Note on the Unsoundness of vnTinyRAM's SNARK

**Authors:** Bryan Parno | **Venue:** preprint | [Source](https://eprint.iacr.org/2015/437)

## Abstract

Gennaro, Gentry, Parno, and Raykova (GGPR) introduced Quadratic Arithmetic Programs (QAPs) as a way of representing arithmetic circuits in a form amendable to highly efficient cryptographic protocols (EUROCRYPT 2013), particularly for verifiable computation and succinct non-interactive arguments. Subsequently, Parno, Gentry, Howell, and Raykova introduced an improved cryptographic protocol (and implementation), which they dubbed Pinocchio (IEEE S&P 2013).

Ben-Sasson et al. then introduced a lightly modified version of the Pinocchio protocol and implemented it as part of their libsnark distribution. Later work by the same authors employed this protocol, as did a few works by others. Many of these works cite the version of the paper which was published at USENIX Security. However, the protocol does not appear in that peer-reviewed paper; instead, it appears only in a technical report, where it is justified via a lemma that lacks a proof. Unfortunately, the lemma is incorrect, and the modified protocol is unsound. With probability one, an adversary can submit false statements and proofs that the verifier will accept. We demonstrate this theoretically, as well as with concrete examples in which the protocol's implementation in libsnark accepts invalid statements.

Fixing this problem requires different performance tradeoffs, indicating that the performance results reported by papers building on this protocol (USENIX Security 2013, CRYPTO 2014, NDSS 2014, EUROCRYPT 2015, IEEE S&P 2014, IEEE S&P 2015) are, to a greater or lesser extent, inaccurate.
