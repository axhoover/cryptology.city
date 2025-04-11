---
aliases:
  - DLOG
---
# Discrete logarithm
The *discrete logarithm (DLOG)* assumption is used throughout cryptography. It is a natural strengthening of the [[Computational Diffie-Hellman|CDH]] assumption. In other words, an adversary which can solve the DLOG problem can also solve [[Computational Diffie-Hellman|CDH]] in the same group.

## Assumption
Informally, the CDH assumption concerns a cyclic group $\mathbb{G}$ and a generator $g$. The assumption is that given any group element $g^x$ (where $x$ was chosen uniformly from $\{0, \cdots, |\mathbb{G} - 1|\}$), it is hard to compute $x$.

Formally, consider a family of cyclic groups $\{\mathbb{G}_{\lambda}\}_{\lambda \in \mathbb{N}}$. Define the *DLOG-advantage* of an adversary $\mathcal{A}$ as $$\text{Adv}^{\text{dlog}}_{\mathcal{A}}(\lambda) = \Pr[\mathcal{A}(1^{\lambda},g,g^x)=x],$$ where $g$ is the generator for $\mathbb{G}_{\lambda}$ and $x$ is selected uniformly at random from the set $\{0, 1, \cdots, |\mathbb{G}_{\lambda}| - 1\}$.

We say that *DLOG is hard* for some group family $\{\mathbb{G}_{\lambda}\}_{\lambda \in \mathbb{N}}$ if there exists a negligible function $\nu$ such that for all efficient adversaries $\mathcal{A}$, $$\text{Adv}^{\text{dlog}}_{\mathcal{A}}(\lambda) \le \nu(\lambda).$$
### Variations
In the above definition, we implicitly assume that $\mathbb{G}_{\lambda}$ has a fixed generator. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected among many random generators.


## Related results
- It is easy to see that if $\mathcal{A}$ can compute $x$ for a random $g^x$, then $\mathcal{A}$ can compute both $x$ and $y$ from $g^{x}$ and $g^{y}$ and find $g^{xy}$ easily. This establishes that DLOG is not easier than [[Computational Diffie-Hellman|CDH]].
- In the [[Generic Group Model]], $\text{Adv}^{\text{dlog}}_{\mathcal{A}}(\lambda) \le \frac{q^2}{|\mathbb{G}_{\lambda}|}$, where $q$ is the number of queries that $\mathcal{A}$ issues — [[Shoup97 - Lower Bounds for Discrete Logarithms and Related Problems|Shoup97]]


## Attacks
- The *Baby-step Giant-step* is a generic attack which works in all groups and requires space $S$ and time $T$ with $S\cdot T \ge |\mathbb{G}_{\lambda}|$. Therefore, this is optimal in the [[Generic Group Model|GGM]] — TODO citation
