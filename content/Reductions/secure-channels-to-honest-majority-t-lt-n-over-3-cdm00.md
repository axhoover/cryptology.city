---
type: reduction
status: draft
title: "Secure channels ⇒ MPC with honest majority ($t < n/3$) from linear secret sharing (Cramer–Damgård–Maurer)"
aliases: []
id: red-secure-channels-to-honest-majority-t-lt-n-over-3-cdm00
kind: implication
hypotheses: [secure-channels]
conclusion: honest-majority-t-lt-n-over-3
class: free
model: standard
source:
  - "[[CDM00 - General Secure Multi-party Computation from any Linear Secret-Sharing Scheme|CDM00]]"
security-loss: ""
rationale:
  class: "The theorem is unconditional and information-theoretic in the secure-channels model, so there is no hardness assumption for a black-box reduction to break."
---

# Secure channels ⇒ MPC with honest majority ($t < n/3$) from linear secret sharing (Cramer–Damgård–Maurer)

## Statement

[[secret-sharing#verifiable-secret-sharing-vss|Verifiable secret sharing]] and secure multi-party computation can be based efficiently on any [[secret-sharing#linear-secret-sharing-schemes-lsss|linear secret-sharing scheme]] (LSSS) for the parties, provided its access structure allows VSS or MPC at all, through a generic construction of a multiplicative LSSS for the same access structure and a generic construction that builds verifiability into any LSSS; the approach applies to the information-theoretic and to the cryptographic setting — [[CDM00 - General Secure Multi-party Computation from any Linear Secret-Sharing Scheme|CDM00]]. In the information-theoretic setting over [[interactive-protocol#secure-channels|secure point-to-point channels]], applied to the threshold structure with $t < n/3$ and [[secret-sharing#shamir-secret-sharing|Shamir's scheme]], this gives MPC with [[secure-multi-party-computation#honest-majority-t--n3|guaranteed output delivery]] against a malicious adversary corrupting any $t < n/3$ of the parties — [[CDM00 - General Secure Multi-party Computation from any Linear Secret-Sharing Scheme|CDM00]]. The LSSS is a parameter of the construction: Shamir's scheme exists unconditionally — [[Sha79 - How to share a secret|Sha79]].

## Notes

- The protocols are polynomial in the size of the LSSS — [[CDM00 - General Secure Multi-party Computation from any Linear Secret-Sharing Scheme|CDM00]].
- For a general adversary structure, perfectly secure MPC exists against active adversaries if and only if no three corruptible sets cover all parties, and against passive adversaries if and only if no two do — [[HM97 - Complete Characterization of Adversaries Tolerable in Secure Multi-Party Computation|HM97]]. For some adversary structures the LSSS-based protocols are polynomial in $n$, while every earlier approach to MPC for non-threshold adversaries is provably super-polynomial — [[CDM00 - General Secure Multi-party Computation from any Linear Secret-Sharing Scheme|CDM00]].
