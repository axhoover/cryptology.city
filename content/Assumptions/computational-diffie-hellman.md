---
type: assumption
status: draft
aliases:
  - CDH
  - Computational Diffie-Hellman
title: Computational Diffie-Hellman
id: cdh
---

# Computational Diffie-Hellman

The _Computational Diffie-Hellman (CDH)_ is a central assumption in cryptography. It is a natural strengthening of the [[decisional-diffie-hellman|DDH]] assumption. In other words, an adversary which can solve the CDH problem can also solve [[decisional-diffie-hellman|DDH]] in the same group.

## Assumption

Informally, the CDH assumption concerns a cyclic group generation algorithm
$\GrGen,$ which takes as input a security parameter $1^{\secpar}$ and outputs
a succinct[^1] description of a cyclic group $(\GG,g,p),$ where $\GG$ is the group
set, $g$ is a generator for the group, and $p$ is the order of the group.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{cdh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$
\State $x \getsr [p]$ ; $y \getsr [p]$
\State $X \gets g^x$ ; $Y \gets g^y$
\State $\hat{Z} \gets \calA(1^\secpar, \GG, g, p, X, Y)$
\Return $[\hat{Z} = g^{xy}]$
\end{algorithmic}
\end{algorithm}
```

We say that **CDH is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA,$

$$
\Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{cdh}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

## Known Results

- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[no-ggm-to-cdh-sho97|No free reduction from GGM to CDH]]

# Variations

In the above definition, we implicitly allow $\GrGen$ to choose a _random_
generator $g$ for the group $\GG$. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected
deterministically.

[^1]:
    Succinct means that the tuple $(\GG,g,p)$ is at most
    $\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$

<!-- BEGIN GENERATED participates-in 2823d6b232cf -->
## Participates in

**Builds on Computational Diffie-Hellman**

- [[cdh-to-bdh|CDH ⇒ BDH]]
- [[cdh-to-ddh|CDH ⇒ DDH]]
- [[cdh-to-dlog|CDH ⇒ DLOG]]

**Produces Computational Diffie-Hellman**

- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]

**Barriers**

- [[no-ggm-to-cdh-sho97|No free reduction from GGM to CDH]]
<!-- END GENERATED participates-in -->
