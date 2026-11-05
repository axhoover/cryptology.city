---
type: primitive
status: draft
aliases:
  - PEKS
  - Public key encryption with keyword search
title: Public-key encryption with keyword search
id: peks
variants:
  consistent-peks: "#consistency"
---

# Public-key encryption with keyword search

A public-key encryption with keyword search (PEKS) scheme lets anyone holding a receiver's public key encrypt a keyword $W$, and lets the receiver issue a trapdoor $T_W$ with which a third party tests whether an encrypted keyword is $W$, learning nothing else about encrypted keywords for which it holds no trapdoor.

## Syntax

A PEKS scheme is a tuple of efficient algorithms $\Pi = (\KeyGen, \mathsf{PEKS}, \mathsf{Trapdoor}, \mathsf{Test})$ with keyword space $\calW = \bits^*$ — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]:

- $\KeyGen(1^\secpar) \to (\pk, \sk)$, a randomized algorithm outputting a public key $\pk$ and a secret key $\sk$.
- $\mathsf{PEKS}(\pk, W) \to S$, a randomized algorithm outputting a searchable encryption $S$ of a keyword $W \in \calW$.
- $\mathsf{Trapdoor}(\sk, W) \to T_W$, an algorithm outputting a trapdoor for $W \in \calW$.
- $\mathsf{Test}(\pk, S, T_W) \to \beta$, a deterministic algorithm outputting $\beta = 1$ if it judges that $S$ encrypts $W$, and $\beta = 0$ otherwise.

## Properties

### Correctness

A PEKS scheme $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$ and $W \in \calW$,

$$
\Pr\!\left[\mathsf{Test}(\pk, \mathsf{PEKS}(\pk, W), \mathsf{Trapdoor}(\sk, W)) = 1\right] \ge 1 - \varepsilon,
$$

over $(\pk, \sk) \gets \KeyGen(1^\secpar)$ and the randomness of $\mathsf{PEKS}$ and $\mathsf{Trapdoor}$. When $\varepsilon = 0$, we say $\Pi$ is **perfectly correct**.

### Consistency

Correctness constrains $\mathsf{Test}$ on matching keywords; consistency constrains it on distinct ones. The adversary picks two distinct keywords and wins if the trapdoor for the second accepts an encryption of the first — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{consist}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar)$
\State $(W, W') \gets \calA(1^\secpar, \pk)$
\State $S \gets \mathsf{PEKS}(\pk, W)$; $T_{W'} \gets \mathsf{Trapdoor}(\sk, W')$
\Return $[W \ne W' \wedge \mathsf{Test}(\pk, S, T_{W'}) = 1]$
\end{algorithmic}
\end{algorithm}
```

A PEKS scheme $\Pi$ is **computationally consistent** if for all efficient $\calA$,

$$
\Adv^{\mathrm{consist}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{consist}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible. ABC+05 also define **statistical** consistency, which asks the same of computationally unbounded adversaries, and **perfect** consistency, which asks that the advantage be $0$; the definition of BDOP04, in which $\mathsf{Test}$ outputs $0$ on every non-matching keyword, amounts to perfect consistency — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]]. As an object, consistent PEKS denotes a correct, IND-CKA-secure and computationally consistent scheme.

### Security against chosen-keyword attacks

The adversary obtains trapdoors for keywords of its choice, names two keywords for which it holds no trapdoor, and tries to tell which one the challenge encrypts. [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]] call the notion semantic security against an adaptive chosen keyword attack.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ind\text{-}cka}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{td}}(W) := \mathsf{Trapdoor}(\sk, W)$
\State $(W_0, W_1, \stA) \gets \calA^{\calO_{\mathrm{td}}}(1^\secpar, \pk)$
\Comment{$\calA$ may not query $\calO_{\mathrm{td}}$ on $W_0$ or $W_1$}
\State $S^* \gets \mathsf{PEKS}(\pk, W_b)$
\State $b' \gets \calA^{\calO_{\mathrm{td}}}(S^*, \stA)$
\Comment{$\calA$ may not query $\calO_{\mathrm{td}}$ on $W_0$ or $W_1$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PEKS scheme $\Pi$ is **IND-CKA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ind\text{-}cka}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ind\text{-}cka}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The restriction is necessary: with $T_{W_0}$, $\calA$ wins against every correct and consistent scheme by computing $\mathsf{Test}(\pk, S^*, T_{W_0})$. As an object, PEKS denotes a correct and IND-CKA-secure scheme. Without consistency the object exists unconditionally: the scheme with $\mathsf{PEKS}(\pk, W) := \bot$, $\mathsf{Trapdoor}(\sk, W) := \bot$ and $\mathsf{Test}(\pk, S, T_W) := 1$ is perfectly correct, and its IND-CKA advantage is $0$ since $S^*$ does not depend on $b$.

# Variations

## Temporary and identity-based keyword search

In public-key encryption with temporary keyword search (PETKS), a trapdoor for $W$ is issued for an interval of time periods and lets its holder test only encryptions of $W$ made in that interval; in identity-based encryption with keyword search (IBEKS), keywords are encrypted under the receiver's identity in place of a public key — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]].

# Other results

- Under the [[bilinear-map-assumptions|bilinear Diffie–Hellman assumption]], BDOP04's pairing-based scheme is IND-CKA-secure in the [[random-oracle-model|random oracle model]] ([[bdh-to-consistent-peks-bdop04|BDH ⇒ PEKS]]) — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]]; it is also computationally consistent in the random oracle model — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]].
- An [[identity-based-encryption#anonymous-ibe|anonymous IBE]] gives a consistent PEKS by encrypting a random string under the keyword as identity and appending that string ([[anonymous-ibe-to-consistent-peks-abc05|anonymous IBE ⇒ PEKS]]) — [[ABC+05 - Searchable Encryption Revisited Consistency Properties, Relation to Anonymous IBE, and Extensions|ABC+05]]; conversely, a consistent PEKS gives an [[identity-based-encryption|IBE]] ([[consistent-peks-to-ind-id-cpa-bdop04|PEKS ⇒ IBE]]) — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]].
- A sender appends $\mathsf{PEKS}(\pk, W_1), \ldots, \mathsf{PEKS}(\pk, W_k)$ for the keywords of a message to a [[public-key-encryption|PKE]] encryption of the message, and a gateway holding $T_W$ routes the messages whose appended encryptions pass $\mathsf{Test}$ with $T_W$ — [[BDOP04 - Public Key Encryption with Keyword Search|BDOP04]].
- $\mathsf{Test}$ is public, so a holder of $T_W$ tests a guess $W'$ by computing $\mathsf{Test}(\pk, \mathsf{PEKS}(\pk, W'), T_W)$; for a perfectly correct and consistent scheme the result is $1$ for $W' = W$ and, except with negligible probability, $0$ for each fixed $W' \ne W$, so a trapdoor reveals its keyword whenever the keywords in use range over a set of polynomial size — standard. IND-CKA does not exclude this: the adversary holds no trapdoor for $W_0$ or $W_1$.

<!-- BEGIN GENERATED participates-in a8c641cc0a62 -->

## Participates in

**Builds on Public-key encryption with keyword search**

- [[consistent-peks-to-ind-id-cpa-bdop04|Consistent PEKS ⇒ IBE (BDOP04)]] (via [[public-key-encryption-with-keyword-search#consistency|Consistency]])
- [[consistent-peks-to-peks|Consistent PEKS ⇒ PEKS]] (via [[public-key-encryption-with-keyword-search#consistency|Consistency]])

**Produces Public-key encryption with keyword search**

- [[anonymous-ibe-to-consistent-peks-abc05|Anonymous IBE ⇒ PEKS (ABC+05)]] (via [[public-key-encryption-with-keyword-search#consistency|Consistency]])
- [[bdh-to-consistent-peks-bdop04|BDH ⇒ PEKS (random oracle model)]] (via [[public-key-encryption-with-keyword-search#consistency|Consistency]])
- [[consistent-peks-to-peks|Consistent PEKS ⇒ PEKS]]

<!-- END GENERATED participates-in -->
