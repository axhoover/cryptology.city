---
type: primitive
status: draft
aliases:
  - PSI
  - Private set intersection
title: Private set intersection
id: psi
variants:
  malicious-psi: "#malicious-security"
---

# Private set intersection

A private set intersection (PSI) protocol is a two-party protocol in which a sender holding a set $X$ and a receiver holding a set $Y$, each of bounded size, securely compute the functionality $\calF_{\mathrm{PSI}}$: the receiver learns $X \cap Y$, each party learns the size of the other's set, and neither learns anything more.

## Syntax

A PSI protocol for a universe $U = \bits^{\ell}$ and size bounds $n_S$ and $n_R$, with $\ell = \ell(\secpar)$, $n_S = n_S(\secpar)$ and $n_R = n_R(\secpar)$ polynomials, is a [[interactive-protocol|two-party protocol]] $\Pi = (\Setup, S, R)$:

- $\Setup(1^\secpar) \to \pp$, a randomized algorithm generating public parameters, with $\pp = 1^\secpar$ in the plain model,
- $S$ (the sender) and $R$ (the receiver) are stateful interactive algorithms with:
  - $S$ input: a set $X \subseteq U$ with $|X| \le n_S$,
  - $R$ input: a set $Y \subseteq U$ with $|Y| \le n_R$,
  - $S$ output: an integer $s$,
  - $R$ output: a set $Z \subseteq U$ and an integer $s'$.

We write $\langle S(\pp, X), R(\pp, Y) \rangle \to (s, (Z, s'))$. The ideal functionality $\calF_{\mathrm{PSI}}$ receives $X$ from $S$ and $Y$ from $R$, replaces an input that is not a subset of $U$ of at most $n_S$ (respectively $n_R$) elements by $\emptyset$, and hands each party its component of

$$
f_{\mathrm{PSI}}(X, Y) := \big(|Y|,\ (X \cap Y, |X|)\big).
$$

The sizes $|X|$ and $|Y|$ are the functionality's leakage. With sets encoded as strings of a fixed length, $f_{\mathrm{PSI}}$ is a two-party functionality in the sense of [[secure-multi-party-computation#syntax|MPC]].

## Properties

### Correctness

A PSI protocol $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$ and all $X, Y \subseteq U$ with $|X| \le n_S$ and $|Y| \le n_R$,

$$
\Pr\!\left[(s, (Z, s')) = f_{\mathrm{PSI}}(X, Y)\right] \ge 1 - \varepsilon,
$$

where $\pp \gets \Setup(1^\secpar)$ and $(s, (Z, s')) \gets \langle S(\pp, X), R(\pp, Y) \rangle$. When $\varepsilon = 0$, $\Pi$ is **perfectly correct**.

### Semi-honest security

The corrupted party $P \in \{S, R\}$ is fixed in advance and runs $\Pi$ honestly, and the adversary chooses both sets after seeing the reference string. In world $0$ it receives $P$'s [[interactive-protocol#view|view]] of a real execution together with the honest party's output; in world $1$ it receives the simulator's output on $P$'s input and $P$'s component of $f_{\mathrm{PSI}}(X, Y)$, together with the honest party's component. In world $1$ the simulator also produces the reference string, as in [[secure-multi-party-computation#semi-honest-security|semi-honest MPC]]; in the plain model this is immaterial.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sh}}_{\Pi,P,\Sim,\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $\pp_0 \gets \Setup(1^\secpar)$; $\pp_1 \gets \Sim(1^\secpar)$
\Comment{$P \in \{S, R\}$ is the corrupted party; $\Sim$ is stateful}
\State $(X, Y, \stA) \gets \calA(1^\secpar, \pp_b)$
\Comment{Admissible: $X, Y \subseteq U$, $|X| \le n_S$, $|Y| \le n_R$}
\State Run $\langle S(\pp_0, X), R(\pp_0, Y) \rangle \to (s, (Z, s'))$; let $\View_P$ be $P$'s view
\If{$P = S$}
\State $\mathit{out}_0 := (\View_S, (Z, s'))$; $\mathit{out}_1 := (\Sim(X, |Y|), (X \cap Y, |X|))$
\Else
\State $\mathit{out}_0 := (\View_R, s)$; $\mathit{out}_1 := (\Sim(Y, X \cap Y, |X|), |Y|)$
\EndIf
\State $b' \gets \calA(\stA, \mathit{out}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PSI protocol $\Pi$ is **semi-honest secure** if for each $P \in \{S, R\}$ there is an efficient $\Sim$ such that for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{sh}}_{\Pi,P,\Sim,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sh}}_{\Pi,P,\Sim,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. This is [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest two-party computation]] of $f_{\mathrm{PSI}}$.

### Malicious security

A PSI protocol $\Pi$ has **malicious security** if it securely computes $f_{\mathrm{PSI}}$ with abort against $t = 1$ corruptions, in the sense of [[secure-multi-party-computation#security-with-abort|security with abort]] for $n = 2$ ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]): for all efficient $\calA$ corrupting at most one party and deviating arbitrarily there is an efficient $\Sim$ such that for all efficient $\calD$, $\Adv^{\mathrm{mpc}}_{\Pi,f_{\mathrm{PSI}},\calA,\Sim,\calD}(\secpar)$ is negligible. In the ideal execution a corrupted sender hands the trusted party a set $X' \subseteq U$ with $|X'| \le n_S$ of the simulator's choice and receives $|Y|$, and a corrupted receiver hands it a set $Y' \subseteq U$ with $|Y'| \le n_R$ of the simulator's choice and receives $(X \cap Y', |X|)$; in either case the simulator may then make the honest party output $\bot$. The bound on the substituted set is what protects the honest sender: a corrupted receiver allowed to submit $Y' = U$ would learn $X$.

# Variations

## Two-sided PSI

In **two-sided** (or mutual) PSI both parties learn the intersection: the functionality hands $(X \cap Y, |Y|)$ to $S$ and $(X \cap Y, |X|)$ to $R$. Semi-honest and malicious security are defined as above for this functionality; with abort, the corrupted party receives the intersection before the simulator decides whether the honest party receives it.

## PSI cardinality

In **PSI cardinality** the receiver learns the size of the intersection and not its elements: the functionality hands $|Y|$ to $S$ and $(|X \cap Y|, |X|)$ to $R$.

## Size-hiding PSI

In **size-hiding** PSI one party's set has no a priori polynomial bound on its size, and the functionality does not reveal that size to the other party. Against semi-honest adversaries, if [[homomorphic-encryption#fully-homomorphic-encryption-fhe|fully homomorphic encryption]] exists, every function can be securely computed while hiding the input size of one party when both parties receive output, or when the party not receiving output learns the size of the output, so in particular two-sided PSI can; some functions cannot be securely computed while hiding the input sizes of both parties — [[LNO13 - Hiding the Input-Size in Secure Two-Party Computation|LNO13]].

# Other results

- The general protocol run on $f_{\mathrm{PSI}}$ is a semi-honest secure PSI protocol when it comes from [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] ([[semi-honest-two-party-computation-to-psi|semi-honest 2PC ⇒ PSI]]) and one with malicious security when it comes from [[secure-multi-party-computation#two-party-computation-2pc|2PC]] ([[two-party-computation-to-malicious-psi|2PC ⇒ malicious PSI]]) — folklore.
- A semi-honest secure [[oblivious-prf|OPRF]] with a range of super-polynomial size gives semi-honest PSI: the sender sends the PRF values of its elements under its key, and the receiver obtains the PRF value of each of its elements from one OPRF execution and keeps the elements whose values were sent ([[oprf-to-psi|OPRF ⇒ PSI]]) — folklore.
- Semi-honest PSI gives semi-honest [[oblivious-transfer|OT]]: with sender set $\{(0, x_0), (1, x_1)\}$ and receiver set $\{(c, 0)\}$, the intersection reveals $x_c$ and nothing about $x_{1-c}$, and the sender learns nothing about $c$ ([[psi-to-ot|PSI ⇒ OT]]) — folklore.
- [[FNP04 - Efficient Private Matching and Set Intersection|FNP04]] compute set intersection with an [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic]] encryption scheme, such as Paillier's: the receiver encrypts under its own key the coefficients of $Q(z) = \prod_{y \in Y} (z - y)$; for each $x \in X$ the sender computes from them an encryption of $r_x Q(x) + x$ for a uniform $r_x$; and the receiver decrypts and outputs the plaintexts that lie in $Y$. The protocol is secure against semi-honest adversaries in the standard model, and a variant is secure against malicious adversaries in the random oracle model; with balanced allocation hashing, sets of size $k$ cost $O(k)$ communication and $O(k \ln \ln k)$ computation.
- [[HL08 - Efficient Protocols for Set Intersection and Pattern Matching with Security Against Malicious and Covert Adversaries|HL08]] base set intersection on secure evaluation of a pseudorandom function rather than on polynomials. One of their protocols is secure against malicious adversaries under a relaxed definition, simulatable when one party is corrupted and only private, in an indistinguishability sense, when the other is; another is fully simulatable against covert adversaries, which may cheat but are then caught with good probability.
- [[JL09 - Efficient Oblivious Pseudorandom Function with Applications to Adaptive OT and Secure Computation of Set Intersection|JL09]] obtain secure computation of set intersection against malicious adversaries from an [[oblivious-prf|OPRF]] for the Dodis–Yampolskiy PRF $x \mapsto g^{1/(k + x)}$.
- [[KKRT16 - Efficient Batched Oblivious PRF with Applications to Private Set Intersection|KKRT16]] build a batched, related-key OPRF, which gives the receiver the values at inputs of its choice of many PRF instances with related keys, from 1-out-of-2 [[oblivious-transfer#ot-extension|OT extension]], secure against semi-honest adversaries; with cuckoo hashing it gives semi-honest PSI whose cost does not depend on the bit length of the elements.

<!-- BEGIN GENERATED participates-in 1038cb36a8e5 -->

## Participates in

**Builds on Private set intersection**

- [[psi-to-ot|PSI ⇒ OT]]

**Produces Private set intersection**

- [[oprf-to-psi|OPRF ⇒ PSI]]
- [[semi-honest-two-party-computation-to-psi|Semi-honest 2PC ⇒ PSI]]
- [[two-party-computation-to-malicious-psi|2PC ⇒ Malicious PSI]] (via [[private-set-intersection#malicious-security|Malicious security]])

<!-- END GENERATED participates-in -->
