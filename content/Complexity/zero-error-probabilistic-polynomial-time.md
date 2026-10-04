---
type: complexity-class
status: draft
aliases:
  - ZPP
  - Zero-error probabilistic polynomial-time
title: Zero-error probabilistic polynomial-time
id: zpp
---

# Zero-error probabilistic polynomial-time

The class of decision problems decided by a probabilistic polynomial-time algorithm that never outputs a wrong answer and outputs "?" with probability at most 1/2 on every input; equivalently, by a zero-error algorithm with expected polynomial running time — [[Gil77 - Computational complexity of probabilistic Turing machines|Gil77]]. Equivalently,

$$
\classZPP = \classRP \cap \classcoRP.
$$

For $L \in \classRP \cap \classcoRP$, take an RP machine $M_1$ for $L$ and an RP machine $M_0$ for its complement (each accepts every instance in its language with probability at least 1/2 and accepts no instance outside it), and run both on input $x$: output "yes" if $M_1$ accepts, "no" if $M_0$ accepts, and "?" otherwise. Every non-"?" answer is correct and "?" occurs with probability at most 1/2, so this is a Las Vegas algorithm for $L$ — [[Gil77 - Computational complexity of probabilistic Turing machines|Gil77]].

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Z#zpp).

## Known relationships

- $\classP \subseteq \classZPP \subseteq \classRP \subseteq \classBPP$.
- If $\classP = \classBPP$ (the derandomization hypothesis), then $\classP = \classZPP = \classRP = \classBPP$.
- ZPP is closed under complement: $\classZPP = \mathbf{coZPP}$.

<!-- BEGIN GENERATED participates-in 5c075c6a297a -->

## Participates in

**Builds on Zero-error probabilistic polynomial-time**

- [[zpp-to-rp|ZPP ⊆ RP]]

**Produces Zero-error probabilistic polynomial-time**

- [[p-to-zpp|P ⊆ ZPP]]

<!-- END GENERATED participates-in -->
