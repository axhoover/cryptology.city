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

The class of decision problems for which a "yes" answer can be verified by an _interactive proof_ — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]]: a probabilistic polynomial-time verifier exchanges polynomially many messages with a computationally unbounded prover, such that

1. if the answer is "yes," some prover strategy makes the verifier accept with probability at least $2/3$ over the verifier's random bits;
2. if the answer is "no," then for every prover strategy the verifier rejects with probability at least $2/3$.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:I#ip).

## Known relationships

- $\classIP = \classPSPACE$: [[pspace-to-ip-sha90|PSPACE ⊆ IP]] — [[Sha90 - IP = PSPACE|Sha90]]; [[ip-to-pspace-ccg-94|IP ⊆ PSPACE]] — folklore.
- For almost all oracles $A$, $\classIP^A \neq \classPSPACE^A$, which refutes the [[random-oracle-hypothesis|random oracle hypothesis]] — [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

<!-- BEGIN GENERATED participates-in e7dfbed0b14e -->

## Participates in

**Builds on Interactive Proof Systems**

- [[czk-to-ip-bgg-90|Non-uniform OWF + IP ⇒ CZK]]
- [[ip-to-pspace-ccg-94|IP ⊆ PSPACE]]
- [[ip-to-qip|IP ⊆ QIP]]

**Produces Interactive Proof Systems**

- [[czk-to-ip|CZK ⊆ IP]]
- [[pspace-to-ip-sha90|PSPACE ⊆ IP]]
- [[szk-to-ip|SZK ⊆ IP]]

**Barriers**

- [[no-ip-to-am-sha90|IP ⊆ AM collapses the polynomial hierarchy]]

<!-- END GENERATED participates-in -->
