---
aliases:
  - DDH
---
# Decisional Diffie-Hellman
The *Decisional Diffie-Hellman (DDH)* is a central assumption in cryptography, and one of the first used to construct key exchange [[DH76 - New Directions in Cryptography|DH76]].

## Assumption
Informally, the DDH assumption concerns a cyclic group $\mathbb{G}$ and a generator $g$. The assumption is that given any group elements $g^x$ and $g^y$ (where $x$ and $y$ were chosen uniformly and independently from $\{0, \cdots, |\mathbb{G} - 1|\}$) the group element $g^{xy}$ "looks like" a random element in $\mathbb{G}$. 

Formally, consider a family of cyclic groups $\{\mathbb{G}_{\lambda}\}_{\lambda \in \mathbb{N}}$. Define the *DDH-advantage* of an adversary $\mathcal{A}$ as $$\text{Adv}^{\text{ddh}}_{\mathcal{A}}(\lambda) = \big|\Pr[\mathcal{A}(1^{\lambda},g,g^x, g^y, g^{xy})=1] - \Pr[\mathcal{A}(1^{\lambda},g,g^{x},g^{y},g^{z})=1]\big|,$$ where $g$ is the generator for $\mathbb{G}_{\lambda}$ and $x$, $y$, and $z$ are selected uniformly at random from the set $\{0, 1, \cdots, |\mathbb{G}_{\lambda}| - 1\}$.

We say that *DDH is hard* for some group family $\{\mathbb{G}_{\lambda}\}_{\lambda \in \mathbb{N}}$ if there exists a negligible function $\nu$ such that for all efficient adversaries, $$\text{Adv}^{\text{ddh}}_{\mathcal{A}}(\lambda) \le \nu(\lambda).$$

### Variations
In the above definition, we implicitly assume that $\mathbb{G}_{\lambda}$ has a fixed generator. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected among many random generators.


## Related results
- In the [[Generic Group Model]], $\text{Adv}^{\text{dlog}}_{\mathcal{A}}(\lambda) \le \frac{q^2}{|\mathbb{G}_{\lambda}|}$, where $q$ is the number of queries that $\mathcal{A}$ issues — [[Shoup97 - Lower Bounds for Discrete Logarithms and Related Problems|Shoup97]]


## Attacks
- TODO — baby step, giant step
- TODO — DH is easy in certain groups
