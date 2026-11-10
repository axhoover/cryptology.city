---
type: reference
status: stub
title: "BCS16"
source: https://eprint.iacr.org/2016/116
authors: Eli Ben-Sasson, Alessandro Chiesa, Nicholas Spooner
venue: TCC 2016-B
published: 2016
aliases:
  - BCS16
cryptobib_key: TCC:BenChiSpo16
---

# [BCS16] Interactive Oracle Proofs

**Authors:** Eli Ben-Sasson, Alessandro Chiesa, Nicholas Spooner | **Venue:** TCC 2016-B | [Source](https://eprint.iacr.org/2016/116)

## Abstract

We initiate the study of a proof system model that naturally combines two well-known models: interactive proofs (IPs) and probabilistically-checkable proofs (PCPs). An _interactive oracle proof_ (IOP) is an interactive proof in which the verifier is not required to read the prover's messages in their entirety; rather, the verifier has oracle access to the prover's messages, and may probabilistically query them.

IOPs simultaneously generalize IPs and PCPs. Thus, IOPs retain the expressiveness of PCPs, capturing NEXP rather than only PSPACE, and also the flexibility of IPs, allowing multiple rounds of communication with the prover. These degrees of freedom allow for more efficient "PCP-like" interactive protocols, because the prover does not have to compute the parts of a PCP that are not requested by the verifier.

As a first investigation into IOPs, we offer two main technical contributions. First, we give a compiler that maps any public-coin IOP into a non-interactive proof in the random oracle model. We prove that the soundness of the resulting proof is tightly characterized by the soundness of the IOP against _state restoration attacks_, a class of rewinding attacks on the IOP verifier. Our compiler preserves zero knowledge, proof of knowledge, and time complexity of the underlying IOP. As an application, we obtain blackbox unconditional ZK proofs in the random oracle model with quasilinear prover and polylogarithmic verifier, improving on the result of Ishai et al. (2015).

Second, we study the notion of state-restoration soundness of an IOP: we prove tight upper and lower bounds in terms of the IOP's (standard) soundness and round complexity; and describe a simple adversarial strategy that is optimal across all state restoration attacks.

Our compiler can be viewed as a generalization of the Fiat--Shamir paradigm for public-coin IPs (CRYPTO '86), and of the "CS proof" constructions of Micali (FOCS '94) and Valiant (TCC '08) for PCPs. Our analysis of the compiler gives, in particular, a unified understanding of all of these constructions, and also motivates the study of state restoration attacks, not only for IOPs, but also for IPs and PCPs.
