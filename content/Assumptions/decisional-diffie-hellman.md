---
aliases:
  - DDH
title: DDH
---
# Decisional Diffie-Hellman
The *Decisional Diffie-Hellman (DDH)* assumption is a central assumption in cryptography, and one of the first used to construct key exchange [[DH76 - New Directions in Cryptography|DH76]]. It is implied by the [[Computational Diffie-Hellman|CDH]] assumption. In other words, an adversary which can solve the CDH problem can also solve DDH in the same group.

## Assumption
Informally, the DDH assumption concerns a cyclic group generation algorithm
$\GrGen,$ which takes as input a security parameter $1^{\secpar}$ and outputs
a succinct[^1] description of a cyclic group $(\GG,g,p),$ where $\GG$ is the group
set, $g$ is a generator for the group, and $p$ is the order of the group.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ddh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$
\State $x \getsr [p]$ ; $y \getsr [p]$ ; $z \getsr [p]$
\State $X \gets g^x$ ; $Y \gets g^y$
\State $b \getsr \bits$
\State $Z_0 \gets g^{xy}$ ; $Z_1 \gets g^{z}$
\State $\hat{b} \gets \calA(1^\secpar, \GG, g, p, X, Y, Z_b)$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```
We say that **DDH is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA$,

$$
\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) := \left|2 \cdot \Pr\!\left[\Game^{\text{ddh}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Known Results
- It is easy to see that if $\calA$ can compute $g^{xy}$, then $\calA$ can easily distinguish between $g^{xy}$ and a random group element. This establishes that [[Computational Diffie-Hellman|CDH]] is not easier than DDH.
- In the [[Generic Group Model]], $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le \frac{q^2}{p}$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Shoup97]]

## Attacks
- TODO — baby step, giant step
- TODO — DDH is easy in certain groups (e.g., groups of non-prime order)

# Variations
In the above definition, we implicitly allow $\GrGen$ to choose a *random*
generator $g$ for the group $\GG$. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected
deterministically.




[^1]: Succinct means that the tuple $(\GG,g,p)$ is at most
$\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$
