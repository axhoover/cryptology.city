---
aliases:
  - ZPP
  - Zero-error probabilistic polynomial-time
title: Zero-error probabilistic polynomial-time
---
# Zero-error probabilistic polynomial-time
The class of decision problems solvable by a probabilistic polynomial-time algorithm that always outputs the correct answer but may occasionally output "?" (i.e., a Las Vegas algorithm with expected polynomial running time). Equivalently,

$$
\classZPP = \classRP \cap \mathbf{coRP}.
$$

A machine for a ZPP problem accepts all "yes" instances with probability at least 1/2 and accepts no "no" instances (RP condition), and also rejects all "no" instances with probability at least 1/2 and rejects no "yes" instances (coRP condition). Running both machines and taking the definitive answer whenever one gives a non-"?" response yields an always-correct Las Vegas algorithm.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Z#zpp).

## Known relationships
- $\classP \subseteq \classZPP \subseteq \classRP \subseteq \classBPP$.
- If $\classP = \classBPP$ (the derandomization hypothesis), then $\classP = \classZPP = \classRP = \classBPP$.
- ZPP is closed under complement: $\classZPP = \mathbf{coZPP}$.
