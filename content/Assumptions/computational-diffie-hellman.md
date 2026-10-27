---
type: assumption
status: draft
aliases:
  - CDH
  - Computational Diffie-Hellman
title: Computational Diffie-Hellman
id: cdh
variants:
  prime-order-cdh: "#cdh-in-prime-order-groups"
---

# Computational Diffie-Hellman

The _Computational Diffie-Hellman (CDH)_ is a central assumption in cryptography. It is implied by the [[decisional-diffie-hellman|DDH]] assumption: an adversary which can solve the CDH problem can also solve [[decisional-diffie-hellman|DDH]] in the same group — folklore.

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
- [[ggm-to-cdh-sho97|GGM ⇒ CDH]]
- In the [[generic-group-model|Generic Group Model]], for groups of prime order $p$, $\Adv^{\text{cdh}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]

# Variations

In the above definition, we implicitly allow $\GrGen$ to choose a _random_
generator $g$ for the group $\GG$. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected
deterministically.

## CDH in prime-order groups

**CDH is hard in prime-order groups** for $\GrGen$ if every group $\GrGen$ outputs has prime order $p$ and CDH is hard for $\GrGen$. Exponents then form the field $\ZZ_p$, so a reduction may divide by any nonzero exponent.

[^1]:
    Succinct means that the tuple $(\GG,g,p)$ is at most
    $\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$

<!-- BEGIN GENERATED participates-in 36f9b1b5ca30 -->

## Participates in

**Builds on Computational Diffie-Hellman**

- [[cdh-to-dlog|CDH ⇒ DLOG]]
- [[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]]
- [[cdh-to-non-interactive-key-exchange-dh76|CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)]]
- [[cdh-to-uc-ot-dghmw20|CDH ⇒ UC-secure OT (DGHMW)]]
- [[prime-order-cdh-to-cdh|Prime-order CDH ⇒ CDH]] (via [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH in prime-order groups]])
- [[prime-order-cdh-to-edl-signature-gj03|Prime-order CDH ⇒ EDL signatures]] (via [[computational-diffie-hellman#cdh-in-prime-order-groups|CDH in prime-order groups]])
- [[type-1-pairing-and-cdh-to-ds-wat05|Type 1 pairing + CDH ⇒ DS (Waters)]]
- [[type-1-pairing-and-cdh-to-multi-signature-kosk-bol03|Type 1 pairing + CDH ⇒ Multi-signatures in the KOSK model (Boldyreva)]]
- [[type-1-pairing-and-cdh-to-multi-signature-pop-ry07|Type 1 pairing + CDH ⇒ Multi-signatures with proofs of possession]]

**Produces Computational Diffie-Hellman**

- [[cdh-to-bdh|BDH ⇒ CDH]]
- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]
- [[ggm-to-cdh-sho97|GGM ⇒ CDH]]
- [[prime-order-cdh-to-cdh|Prime-order CDH ⇒ CDH]]

**Barriers**

- [[no-cdh-to-ddh-jn03|No fixed-construction reduction from CDH to DDH]]

<!-- END GENERATED participates-in -->
