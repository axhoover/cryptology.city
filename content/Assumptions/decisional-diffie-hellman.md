---
aliases:
  - DDH
  - Decisional Diffie-Hellman
title: Decisional Diffie-Hellman
---

# Decisional Diffie-Hellman

The _Decisional Diffie-Hellman (DDH)_ assumption is a central assumption in cryptography, and one of the first used to construct key exchange [[DH76 - New Directions in Cryptography|DH76]]. It is implied by the [[computational-diffie-hellman|CDH]] assumption. In other words, an adversary which can solve the CDH problem can also solve DDH in the same group.

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
if for all efficient $\calA,$

$$
\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) := \left|2 \cdot \Pr\!\left[\Game^{\text{ddh}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Known Results

- It is easy to see that if $\calA$ can compute $g^{xy}$, then $\calA$ can easily distinguish between $g^{xy}$ and a random group element. This establishes that [[computational-diffie-hellman|CDH]] is not easier than DDH.
- In the [[generic-group-model|Generic Group Model]], $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Shoup97]]
- DDH implies [[public-key-encryption|PKE]] via the ElGamal encryption scheme: encrypt $m$ under public key $y = g^x$ as $(g^r, m \cdot y^r)$; decryption uses $x$ to compute $y^r$ and recover $m$ — [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]
- DDH implies [[pseudorandom-function|PRF]]s via the Naor-Reingold construction, which maps inputs in $\{0,1\}^n$ to group elements using a secret exponent vector — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]
- DDH is easy in groups that admit efficient bilinear pairings (e.g., certain supersingular elliptic curves): given $(g^x, g^y, g^z)$, check whether $e(g^x, g^y) = e(g, g^z)$

## Attacks

- **Baby-step giant-step**: a generic algorithm for the underlying discrete logarithm problem. Given $X = g^x$, it finds $x$ in $O(\sqrt{p})$ time and $O(\sqrt{p})$ space by writing $x = im + j$ (where $m = \lceil\sqrt{p}\rceil$) and matching $g^{im} = X \cdot g^{-j}$ across a hash table. Since DDH reduces to DLOG, this attack applies: any DDH distinguisher that computes $g^{xy}$ by solving DLOG runs in $O(\sqrt{p})$.
- **DDH is easy in groups with efficient pairings**: in groups $\GG$ that admit an efficient bilinear pairing $e: \GG \times \GG \to \GG_T$ (symmetric/Type-1 pairings, e.g., certain supersingular elliptic curves), DDH is trivially broken. Given $(g^x, g^y, g^z)$, check whether $e(g^x, g^y) = e(g, g^z)$; this holds iff $z = xy$. DDH is therefore **not** a reasonable assumption in Type-1 pairing groups — see [[bilinear-map-assumptions|bilinear map assumptions]].
- **Pohlig-Hellman**: if the group order $p$ is smooth (factors into small primes), discrete log (and hence DDH) is easy via the Chinese Remainder Theorem on the prime-order subgroups. This is why DDH is only assumed in **prime-order** groups or carefully chosen subgroups.

# Variations

In the above definition, we implicitly allow $\GrGen$ to choose a _random_
generator $g$ for the group $\GG$. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected
deterministically.

## DLIN

TODO

## k-Lin

TODO

## Matrix Diffie-Hellman

TODO

[^1]: Succinct means that the tuple $(\GG,g,p)$ is at most
    $\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$
