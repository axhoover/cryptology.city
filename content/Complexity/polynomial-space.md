---
type: complexity-class
status: stub
aliases:
  - PSPACE
  - Polynomial-Space
title: Polynomial-Space
id: pspace
---

# Polynomial-Space

The class of decision problems solvable by a deterministic Turing machine in space $\poly(n)$ on inputs of length $n$.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:P#pspace).

## Known relationships

- [[np-to-pspace|NP ⊆ PSPACE]] and [[pspace-to-exp|PSPACE ⊆ EXP]] — folklore. $\mathbf{PH} \subseteq \classPSPACE$, where $\mathbf{PH}$ is the [[polynomial-time-hierarchy|polynomial hierarchy]] — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]].
- Nondeterministic polynomial space equals $\classPSPACE$: $\mathbf{NSPACE}(s) \subseteq \mathbf{DSPACE}(O(s^2))$ for every space-constructible $s(n) \ge \log n$ — [[Sav70 - Relationships between nondeterministic and deterministic tape complexities|Sav70]].
- $\classIP = \classPSPACE$: [[pspace-to-ip-sha90|PSPACE ⊆ IP]] — [[Sha90 - IP = PSPACE|Sha90]]; [[ip-to-pspace-ccg-94|IP ⊆ PSPACE]] — folklore.
- For almost all oracles $A$, $\classIP^A \neq \classPSPACE^A$, which with $\classIP = \classPSPACE$ refutes the [[random-oracle-hypothesis|random oracle hypothesis]] — [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

## Notable problems

- **TQBF**: deciding whether a quantified Boolean formula, with any number of quantifier alternations, is true is $\classPSPACE$-complete under polynomial-time many-one reductions — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]].

<!-- BEGIN GENERATED participates-in 03a5b1a0e096 -->

## Participates in

**Builds on Polynomial-Space**

- [[pspace-to-exp|PSPACE ⊆ EXP]]
- [[pspace-to-ip-sha90|PSPACE ⊆ IP]]

**Produces Polynomial-Space**

- [[bpp-to-pspace|BPP ⊆ PSPACE]]
- [[conp-to-pspace|coNP ⊆ PSPACE]]
- [[ip-to-pspace-ccg-94|IP ⊆ PSPACE]]
- [[np-to-pspace|NP ⊆ PSPACE]]
- [[pp-to-pspace|PP ⊆ PSPACE]]
- [[qip-to-pspace|QIP = PSPACE]]

<!-- END GENERATED participates-in -->
