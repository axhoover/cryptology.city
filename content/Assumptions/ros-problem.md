---
type: assumption
status: draft
aliases:
  - ROS
  - ROS problem
title: ROS problem
id: ros
variants:
  omdl-and-ros: "#omdl-and-ros-in-the-same-group"
---

# ROS problem

The $\ell$-ROS (Random inhomogeneities in an Overdetermined Solvable system of linear equations) problem asks, given a group $(\GG, g, p)$ of prime order $p$ output by a group generator and a random oracle $H_{\mathrm{ros}} : \ZZ_p^\ell \to \ZZ_p$, for $\ell + 1$ distinct vectors $\rho_i \in \ZZ_p^\ell$ and one vector $c \in \ZZ_p^\ell$ with $H_{\mathrm{ros}}(\rho_i) = \langle \rho_i, c \rangle$ for every $i$. The problem goes back to [[Sch01 - Security of Blind Discrete Log Signatures against Interactive Attacks|Sch01]]; this is the formulation of [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]] and [[BLLOR21 - On the (in)security of ROS|BLLOR21]].

## Assumption

The problem is parameterized by a probabilistic polynomial-time group generation algorithm $\GrGen$, whose output $(\GG, g, p)$ fixes the prime $p$, and by the number $\ell = \ell(\secpar)$ of signing sessions.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ros}}_{\GrGen,\ell,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, g, p) \gets \GrGen(1^\secpar)$
\State $H_{\mathrm{ros}} \getsr \Funcs(\ZZ_p^\ell, \ZZ_p)$
\Comment{sampled lazily}
\State $(\rho_1, \ldots, \rho_{\ell+1}, c) \gets \calA^{H_{\mathrm{ros}}}(1^\secpar, (\GG, g, p))$
\Return $\big[\rho_1, \ldots, \rho_{\ell+1} \text{ distinct} \land \forall_{i \in [\ell+1]}~H_{\mathrm{ros}}(\rho_i) = \langle \rho_i, c \rangle\big]$
\end{algorithmic}
\end{algorithm}
```

**$\ell$-ROS is hard** for $\GrGen$ if every group $(\GG, g, p)$ that $\GrGen$ outputs has prime order $p$ and for all efficient $\calA$,

$$
\Adv^{\text{ros}}_{\GrGen,\ell,\calA}(\secpar) := \Pr\!\left[\Game^{\text{ros}}_{\GrGen,\ell,\calA}(\secpar) = 1\right]
$$

is negligible. **ROS is hard** for $\GrGen$ if $\ell$-ROS is hard for $\GrGen$ for every polynomial $\ell$. Since $\GrGen$ runs in polynomial time, $\log p \le \poly(\secpar)$.

## Known Results

- In the [[algebraic-group-model|algebraic group model]] with a random oracle, blind Schnorr signatures are one-more unforgeable against $\ell$ concurrent sessions if [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] and $\ell$-ROS are hard for the same $\GrGen$ ([[omdl-and-ros-to-blind-schnorr-signature-fps20|OMDL + ROS ⇒ Blind Schnorr signatures]]) — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

# Variations

The clause variant of blind Schnorr signatures of [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]] is proved secure under a problem related to ROS that appears much harder — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

## OMDL and ROS in the same group

OMDL and ROS are hard in the same group if there is a group generation algorithm $\GrGen$ for which both [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] and ROS are hard. Each half holds for the same $\GrGen$ ([[omdl-and-ros-to-omdl|OMDL and ROS in the same group ⇒ OMDL]], [[omdl-and-ros-to-ros|OMDL and ROS in the same group ⇒ ROS]]) — folklore. The assumption fails for every $\GrGen$, since ROS does — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].

# Attacks

- **Polynomial time for $\ell > \log p$**: $\ell$-ROS is solvable in polynomial time when $\ell > \log p$, and blind Schnorr signatures are then forgeable with $\ell$ concurrent sessions. Since $\log p \le \poly(\secpar)$, some polynomial $\ell$ exceeds $\log p$, so ROS is hard for no $\GrGen$ — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].
- **Sub-exponential time for smaller $\ell$**: combining this attack with the generalized-birthday algorithm of [[Wag02 - A Generalized Birthday Problem|Wag02]] gives sub-exponential algorithms for $\ell$-ROS in every dimension $\ell$ — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].

<!-- BEGIN GENERATED participates-in 0e2425138069 -->

## Participates in

**Builds on ROS problem**

- [[omdl-and-ros-to-blind-schnorr-signature-fps20|OMDL + ROS ⇒ Blind Schnorr signatures]] (via [[ros-problem#omdl-and-ros-in-the-same-group|OMDL and ROS in the same group]])
- [[omdl-and-ros-to-omdl|OMDL and ROS in the same group ⇒ OMDL]] (via [[ros-problem#omdl-and-ros-in-the-same-group|OMDL and ROS in the same group]])
- [[omdl-and-ros-to-ros|OMDL and ROS in the same group ⇒ ROS]] (via [[ros-problem#omdl-and-ros-in-the-same-group|OMDL and ROS in the same group]])

**Produces ROS problem**

- [[omdl-and-ros-to-ros|OMDL and ROS in the same group ⇒ ROS]]

<!-- END GENERATED participates-in -->
