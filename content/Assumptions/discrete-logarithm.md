---
type: assumption
status: draft
aliases:
  - DLOG
  - Discrete logarithm
title: Discrete logarithm
id: dlog
---

# Discrete logarithm

The _discrete logarithm (DLOG)_ assumption is used throughout cryptography. It is a natural strengthening of the [[computational-diffie-hellman|CDH]] assumption. In other words, an adversary which can solve the DLOG problem can also solve [[computational-diffie-hellman|CDH]] in the same group.

## Assumption

Informally, the DLOG assumption concerns a cyclic group
generation algorithm
$\GrGen,$ which takes as input a security parameter $1^{\secpar}$ and outputs
a succinct description of a cyclic group $(\GG,g,p),$ where $\GG$ is the group
set, $g$ is a generator for the group, and $p$ is the order of the group.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{dl}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$
\State $x \getsr [p]$
\State $X \gets g^x$
\State $\hat{x} \gets \calA(1^\secpar, \GG, g, p, X)$
\Return $[\hat{x} = x]$
\end{algorithmic}
\end{algorithm}
```

We say that **DLOG is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA,$

$$
\Adv^{\text{dl}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{dl}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

## Related results

- [[cdh-to-dlog|CDH ⇒ DLOG]]
- [[no-ggm-to-dlog-sho97|No free reduction from GGM to DLOG]]

## Attacks

- The _Baby-step Giant-step_ is a generic attack which works in all groups and requires space $S$ and time $T$ with $S\cdot T \ge p$. Therefore, this is optimal in the [[generic-group-model|GGM]] — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]
- **Index calculus**: sub-exponential attack on DLOG in $\FF_p^*$ (multiplicative group of a finite field) and in the Jacobians of hyperelliptic curves of high genus. Does **not** apply to generic elliptic curve groups, which is why ECDLP is believed harder than DLOG in $\FF_p^*$.
- **Pohlig-Hellman**: reduces DLOG in a group of composite order $n = \prod p_i^{e_i}$ to DLOG in groups of prime order $p_i$ via the Chinese Remainder Theorem. Effective when $n$ is smooth; neutralized by using prime-order groups.
- **Number Field Sieve (NFS)**: sub-exponential algorithm for DLOG in $\FF_p^*$; best known algorithm with complexity $L_p[1/3, (64/9)^{1/3}]$.

# Variations

## One-more Discrete Logarithm

In some works, it is important to consider adversaries

```pseudocode
\begin{algorithm}
% oracle-split: 40
\algname{Game}
\caption{$\Game^{\text{om-dl}}_{\GrGen,\calA, \ell}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$ ; $q \gets 0$
\For{$i = 1,\ldots,\ell+1$}
\State $x_i \getsr [p]$
\State $X_i \gets g^{x_i}$
\EndFor
\State $(\hat{x}_i)_{i\in [\ell+1]} \gets \calA^{\calO_{\text{dl}}}(1^\secpar, \GG, g, p, (X_i)_{i\in [\ell+1]})$
\Return $\big[q \le \ell \land \forall_{i\in [\ell+1]}~~x_i = \hat{x}_i\big]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\text{dl}}(Z)$}
\begin{algorithmic}
\State $q \gets q + 1$
\State $z \gets \mathrm{dlog}_g(Z)$
\Return $z$
\end{algorithmic}
\end{algorithm}
```

We say that **OM-DL is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA$,

$$
\Adv^{\text{om-dl}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{om-dl}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

[^1]:
    Succinct means that the tuple $(\GG,g,p)$ is at most
    $\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$

<!-- BEGIN GENERATED participates-in bc81cdd4c197 -->
## Participates in

**Builds on Discrete logarithm**

- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG + ROM ⇒ Schnorr signatures]]
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]
- [[dlog-to-ddh-fkl18|DLOG ⇒ DDH]]
- [[dlog-to-ds-sch91|DLOG ⇒ DS]]
- [[dlog-to-pcs|DLOG ⇒ PCS]]
- [[dlog-to-prg-bm84|DLOG ⇒ PRG]]
- [[dlog-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]
- [[dlog-to-tdp|DLOG ⇒ TDP]]
- [[dlog-to-zkp|DLOG ⇒ ZKP]]

**Produces Discrete logarithm**

- [[cdh-to-dlog|CDH ⇒ DLOG]]

**Barriers**

- [[no-ggm-to-dlog-sho97|No free reduction from GGM to DLOG]]
- [[no-the-structured-ggm-to-dlog-chw26|No free reduction from The Structured GGM to DLOG]]
<!-- END GENERATED participates-in -->
