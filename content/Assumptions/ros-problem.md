---
type: assumption
status: draft
aliases:
  - ROS
  - ROS problem
title: ROS problem
id: ros
variants:
  ros-with-auxiliary-input: "#ros-with-auxiliary-inputs"
  omdl-and-ros: "#omdl-and-ros-in-the-same-group"
---

# ROS problem

The $\ell$-ROS (Random inhomogeneities in an Overdetermined Solvable system of linear equations) problem asks, given a group $(\GG, g, p)$ of prime order $p$ output by a group generator and a random oracle $H_{\mathrm{ros}} : \ZZ_p^\ell \to \ZZ_p$, for $\ell + 1$ distinct vectors $\rho_i \in \ZZ_p^\ell$ and one vector $c \in \ZZ_p^\ell$ with $H_{\mathrm{ros}}(\rho_i) = \langle \rho_i, c \rangle$ for every $i$. The problem goes back to [[Sch01 - Security of Blind Discrete Log Signatures against Interactive Attacks|Sch01]]; this is the formulation of [[BLLOR21 - On the (in)security of ROS|BLLOR21]]. The blind-Schnorr theorem of [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]] uses a variant in which the oracle also takes an auxiliary input ([[#ROS with auxiliary inputs|ROS with auxiliary inputs]]).

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

- In the [[algebraic-group-model|algebraic group model]] with a random oracle, blind Schnorr signatures are one-more unforgeable against $\ell$ concurrent sessions if [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] and $\ell$-ROS [[#ROS with auxiliary inputs|with auxiliary inputs]] are hard for the same $\GrGen$ ([[omdl-and-ros-to-blind-schnorr-signature-fps20|OMDL + ROS ⇒ Blind Schnorr signatures]]) — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

# Variations

The clause variant of blind Schnorr signatures of [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]] is proved secure under a problem related to ROS that appears much harder — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

## ROS with auxiliary inputs

For a set $\Omega = \Omega_p$ of auxiliary inputs, the oracle of $\ell$-$\mathrm{ROS}_\Omega$ is a random function $H_{\mathrm{ros}} : \ZZ_p^\ell \times \Omega \to \ZZ_p$, and the adversary must output $\ell + 1$ pairwise distinct pairs $(\rho_i, \mathit{aux}_i)$ and one vector $c$ — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]] (Figure 7).

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ros}}_{\GrGen,\Omega,\ell,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, g, p) \gets \GrGen(1^\secpar)$
\State $H_{\mathrm{ros}} \getsr \Funcs(\ZZ_p^\ell \times \Omega_p, \ZZ_p)$
\Comment{sampled lazily}
\State $((\rho_1, \mathit{aux}_1), \ldots, (\rho_{\ell+1}, \mathit{aux}_{\ell+1}), c) \gets \calA^{H_{\mathrm{ros}}}(1^\secpar, (\GG, g, p))$
\Return $\big[(\rho_i, \mathit{aux}_i)_{i \in [\ell+1]} \text{ pairwise distinct} \land \forall_{i \in [\ell+1]}~H_{\mathrm{ros}}(\rho_i, \mathit{aux}_i) = \langle \rho_i, c \rangle\big]$
\end{algorithmic}
\end{algorithm}
```

**$\ell$-$\mathrm{ROS}_\Omega$ is hard** for $\GrGen$ if every group that $\GrGen$ outputs has prime order $p$ and for all efficient $\calA$ the probability that the game outputs $1$ is negligible. **ROS with auxiliary inputs is hard** for $\GrGen$ if $\ell$-$\mathrm{ROS}_\Omega$ is hard for $\GrGen$ for every polynomial $\ell$, with $\Omega_p = \ZZ_p^2 \times \bits^*$, the auxiliary space of the blind-Schnorr theorem — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]] (Theorem 2). Two solutions may share $\rho$ if their auxiliary inputs differ, which the base game does not allow; the blind-Schnorr reduction needs this, since it answers a hash query on a nonce with algebraic representation $(\gamma, \xi, \rho)$ and message $m$ by $H_{\mathrm{ros}}(\rho, (\gamma, \xi, m)) - \xi$, and distinct forgeries give distinct pairs but possibly equal $\rho$ — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].

Hardness with auxiliary inputs implies $\ell$-ROS hardness ([[ros-with-auxiliary-input-to-ros|ROS with auxiliary inputs ⇒ ROS]]): an $\ell$-ROS solver run on $H'(\rho) := H_{\mathrm{ros}}(\rho, \omega_0)$ for a fixed $\omega_0 \in \Omega_p$ outputs distinct $\rho_i$, hence distinct pairs $(\rho_i, \omega_0)$ — folklore. So the [[#Attacks|attacks]] on $\ell$-ROS solve $\ell$-$\mathrm{ROS}_\Omega$ too, and ROS with auxiliary inputs is hard for no $\GrGen$.

## OMDL and ROS in the same group

OMDL and ROS are hard in the same group if there is a group generation algorithm $\GrGen$ for which both [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] and [[#ROS with auxiliary inputs|ROS with auxiliary inputs]] are hard, the premise of the blind-Schnorr theorem — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]] (Theorem 2). OMDL and plain ROS hold for the same $\GrGen$ ([[omdl-and-ros-to-omdl|OMDL and ROS in the same group ⇒ OMDL]], [[omdl-and-ros-to-ros|OMDL and ROS in the same group ⇒ ROS]]) — folklore. The assumption fails for every $\GrGen$, since ROS with auxiliary inputs does — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].

# Attacks

- **Polynomial time for $\ell > \log p$**: $\ell$-ROS is solvable in polynomial time when $\ell > \log p$, and blind Schnorr signatures are then forgeable with $\ell$ concurrent sessions. Since $\log p \le \poly(\secpar)$, some polynomial $\ell$ exceeds $\log p$, so ROS is hard for no $\GrGen$ — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].
- **Sub-exponential time for smaller $\ell$**: combining this attack with the generalized-birthday algorithm of [[Wag02 - A Generalized Birthday Problem|Wag02]] gives sub-exponential algorithms for $\ell$-ROS in every dimension $\ell$ — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].

<!-- BEGIN GENERATED participates-in 6ebbcaf47e24 -->

## Participates in

**Builds on ROS problem**

- [[omdl-and-ros-to-blind-schnorr-signature-fps20|OMDL + ROS ⇒ Blind Schnorr signatures]] (via [[ros-problem#omdl-and-ros-in-the-same-group|OMDL and ROS in the same group]])
- [[omdl-and-ros-to-omdl|OMDL and ROS in the same group ⇒ OMDL]] (via [[ros-problem#omdl-and-ros-in-the-same-group|OMDL and ROS in the same group]])
- [[omdl-and-ros-to-ros|OMDL and ROS in the same group ⇒ ROS]] (via [[ros-problem#omdl-and-ros-in-the-same-group|OMDL and ROS in the same group]])
- [[ros-with-auxiliary-input-to-ros|ROS with auxiliary inputs ⇒ ROS]] (via [[ros-problem#ros-with-auxiliary-inputs|ROS with auxiliary inputs]])

**Produces ROS problem**

- [[omdl-and-ros-to-ros|OMDL and ROS in the same group ⇒ ROS]]
- [[ros-with-auxiliary-input-to-ros|ROS with auxiliary inputs ⇒ ROS]]

<!-- END GENERATED participates-in -->
