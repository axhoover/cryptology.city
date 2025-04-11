---
aliases:
  - CDH
---
# Computational Diffie-Hellman
The *Computational Diffie-Hellman (CDH)* is a central assumption in cryptography. It is a natural strengthening of the [[Decisional Diffie-Hellman|DDH]] assumption. In other words, an adversary which can solve the CDH problem can also solve [[Decisional Diffie-Hellman|DDH]] in the same group.

## Assumption
Informally, the CDH assumption concerns a cyclic group $\mathbb{G}$ and a generator $g$. The assumption is that given any group elements $g^x$ and $g^y$ (where $x$ and $y$ were chosen uniformly and independently from $\{0, \cdots, |\mathbb{G} - 1|\}$), it is hard to compute the group element $g^{xy}$.

Formally, consider a family of cyclic groups $\{\mathbb{G}_{\lambda}\}_{\lambda \in \mathbb{N}}$. Define the *CDH-advantage* of an adversary $\mathcal{A}$ as $$\text{Adv}^{\text{cdh}}_{\mathcal{A}}(\lambda) = \Pr[\mathcal{A}(1^{\lambda},g,g^x, g^y)=g^{xy}],$$ where $g$ is the generator for $\mathbb{G}_{\lambda}$ and $x$ and $y$ are selected uniformly at random from the set $\{0, 1, \cdots, |\mathbb{G}_{\lambda}| - 1\}$.

We say that *CDH is hard* for some group family $\{\mathbb{G}_{\lambda}\}_{\lambda \in \mathbb{N}}$ if there exists a negligible function $\nu$ such that for all efficient adversaries $\mathcal{A}$, $$\text{Adv}^{\text{cdh}}_{\mathcal{A}}(\lambda) \le \nu(\lambda).$$

### Variations
In the above definition, we implicitly assume that $\mathbb{G}_{\lambda}$ has a fixed generator. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected among many random generators.

## Related results
- It is easy to see that if $\mathcal{A}$ can compute $g^{xy}$, then $\mathcal{A}$ can easily distinguish between $g^{xy}$ and a random group element. This establishes that CDH is not easier than [[Decisional Diffie-Hellman|DDH]].
- In the [[Generic Group Model]], $\text{Adv}^{\text{cdh}}_{\mathcal{A}}(\lambda) \le \frac{q^2}{|\mathbb{G}_{\lambda}|}$, where $q$ is the number of queries that $\mathcal{A}$ issues — [[Shoup97 - Lower Bounds for Discrete Logarithms and Related Problems|Shoup97]]

## Attacks
