---
type: complexity-class
status: draft
aliases:
  - IP
  - Interactive Proof Systems
title: Interactive Proof Systems
id: ip
---

# Interactive Proof Systems

The class of decision problems for which a "yes" answer can be verified by an *interactive proof*. Here a probabilistic polynomial-time verifier sends messages back and forth with an all-powerful prover. They can have polynomially many rounds of interaction. Given the verifier's algorithm, at the end:

1. If the answer is "yes," the prover must be able to behave in such a way that the verifier accepts with probability at least 2/3 (over the choice of the verifier's random bits).
2. If the answer is "no," then however the prover behaves the verifier must reject with probability at least 2/3.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:I#ip).

## Known relationships

- $\classIP = \classPSPACE$ — [[Sha90 - IP = PSPACE|Sha90]]; the $\subseteq$ direction is folklore ([[ip-to-pspace-ccg-94]])
- $\classIP \neq \classPSPACE$ relative in the [[random-oracle-model|ROM]] — [[CCG+94 - The random oracle hypothesis is false|CCG+94]]

<!-- BEGIN GENERATED participates-in ff06d4cca17b -->

## Participates in

**Builds on Interactive Proof Systems**

- [[czk-to-ip-bgg-90|OWF + IP ⇒ CZK]]
- [[ip-to-pspace-ccg-94|IP ⊆ PSPACE]]
- [[ip-to-qip|IP ⊆ QIP]]

**Produces Interactive Proof Systems**

- [[czk-to-ip|CZK ⊆ IP]]
- [[pspace-to-ip-sha90|PSPACE ⊆ IP]]
- [[szk-to-ip|SZK ⊆ IP]]

**Barriers**

- [[no-ip-to-am-sha90|IP ⊆ AM collapses the polynomial hierarchy]]

<!-- END GENERATED participates-in -->
