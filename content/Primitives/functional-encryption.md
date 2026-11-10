---
type: primitive
status: draft
aliases:
  - FE
  - Functional encryption
title: Functional encryption
id: functional-encryption
variants:
  fe-selective-security: "#selective-security"
  bounded-collusion-fe: "#bounded-collusion-fe"
  compact-fe: "#compactness"
  sim-secure-fe: "#simulation-based-security"
---

# Functional encryption

A public-key encryption scheme in which a master secret key issues functional keys $\sk_f$, and a holder of $\sk_f$ learns $f(m)$ from an encryption of $m$ and nothing more.

## Syntax

An FE scheme for a class $\calF$ of functions $f : \calM \to \calY$ is a tuple of efficient algorithms $\mathsf{FE} = (\Setup, \KeyGen, \Enc, \Dec)$:

- $\Setup(1^\secpar) \to (\pp, \msk)$, a randomized algorithm that outputs public parameters $\pp$ and a master secret key $\msk$,
- $\KeyGen(\msk, f) \to \sk_f$, a randomized algorithm that takes $\msk$ and the description of a function $f \in \calF$, such as a circuit, and outputs a functional key $\sk_f$,
- $\Enc(\pp, m) \to c$, a randomized algorithm that takes $\pp$ and a message $m \in \calM$ and outputs a ciphertext $c$,
- $\Dec(\sk_f, c) \to y$, a deterministic algorithm that outputs $y \in \calY$ or $\bot$.

[[BSW11 - Functional Encryption Definitions and Challenges|BSW11]] phrase the functionality as a map $F : \calK \times \calM \to \calY$ with one functional key per $k \in \calK$, where $\calK$ contains an _empty key_ whose value on $m$, typically $|m|$, is what a ciphertext is allowed to reveal by itself.

## Properties

### Correctness

$\mathsf{FE}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $f \in \calF$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(\KeyGen(\msk, f), \Enc(\pp, m)) = f(m)\right] \ge 1 - \varepsilon,
$$

over $(\pp, \msk) \gets \Setup(1^\secpar)$ and the randomness of $\KeyGen$ and $\Enc$. When $\varepsilon = 0$, $\mathsf{FE}$ is **perfectly correct**.

### Indistinguishability-based security

The adversary requests functional keys before and after the challenge. It is admissible if $|m_0| = |m_1|$ and $f(m_0) = f(m_1)$ for every $f$ it queries. The constraint is necessary: a key for $f$ with $f(m_0) \ne f(m_1)$ decrypts $c^*$ to a value that determines $b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ind}}_{\mathsf{FE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(f) := \KeyGen(\msk, f)$
\State $(m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}}(1^\secpar, \pp)$
\Comment{$|m_0| = |m_1|$ and $f(m_0) = f(m_1)$ for every $f$ queried so far}
\State $c^* \gets \Enc(\pp, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(c^*, \stA)$
\Comment{$\calA$ may query $\calO_{\mathrm{key}}(f)$ only if $f(m_0) = f(m_1)$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{FE}$ is **IND-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ind}}_{\mathsf{FE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ind}}_{\mathsf{FE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[BSW11 - Functional Encryption Definitions and Challenges|BSW11]].

# Variations

## Selective security

The adversary announces $(m_0, m_1)$ before $\Setup$ runs; admissibility is as in the IND game.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sel}}_{\mathsf{FE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(m_0, m_1, \stA) \gets \calA(1^\secpar)$
\Comment{$\calA$ commits to the challenge messages before seeing $\pp$}
\State $(\pp, \msk) \gets \Setup(1^\secpar)$; $b \getsr \bits$
\State $\calO_{\mathrm{key}}(f) := \KeyGen(\msk, f)$
\State $c^* \gets \Enc(\pp, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}}(\pp, c^*, \stA)$
\Comment{$\calA$ may query $\calO_{\mathrm{key}}(f)$ only if $f(m_0) = f(m_1)$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{FE}$ is **selectively IND-secure** if for all efficient admissible $\calA$, $\Adv^{\mathrm{sel}}_{\mathsf{FE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sel}}_{\mathsf{FE},\calA}(\secpar) = 1\right] - 1\right|$ is negligible. Every IND-secure scheme is selectively IND-secure — standard.

## Bounded-collusion FE

For a bound $q$ given to $\Setup$, the adversary in the IND game makes at most $q$ key queries; $q = 1$ is **single-key** FE — [[GVW12 - Functional Encryption with Bounded Collusions via Multi-Party Computation|GVW12]].

## Compactness

Let $\calF$ consist of circuits of size at most $s$ on $n$-bit inputs. $\mathsf{FE}$ is **compact** if $\Enc$ runs in time $\poly(\secpar, n)$, independent of $s$ and of the output length — [[AJ15 - Indistinguishability Obfuscation from Compact Functional Encryption|AJ15]] — and **weakly compact** if it runs in time $s^{1-\varepsilon} \cdot \poly(\secpar, n)$ for a constant $\varepsilon > 0$ — [[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]]. $\mathsf{FE}$ is **sub-exponentially secure** if there is a constant $\delta > 0$ such that every admissible adversary of size at most $2^{\secpar^{\delta}}$ has advantage at most $2^{-\secpar^{\delta}}$.

## Simulation-based security

$\mathsf{FE}$ is **simulation-secure** if for every efficient adversary there is an efficient simulator that, given only the values $f(m)$ for the keys $f$ requested and the empty key's value on $m$, produces the challenge ciphertext and the requested keys so that the adversary's view is computationally indistinguishable from its view in the real game; in the non-adaptive form every key query precedes the challenge — [[BSW11 - Functional Encryption Definitions and Challenges|BSW11]], [[ONe10 - Definitional Issues in Functional Encryption|ONe10]]. Adaptive simulation security is impossible in the standard model already for [[identity-based-encryption|IBE]], against an adversary that receives encryptions of many messages before requesting a key: the simulator fixes the ciphertexts before learning the messages, and a key shorter than the messages cannot then decrypt them to arbitrary values — [[BSW11 - Functional Encryption Definitions and Challenges|BSW11]]. For some function classes, non-adaptive simulation security cannot hold against an unbounded number of key queries: the ciphertext length must grow linearly with the number of key queries — [[AGVW13 - Functional Encryption New Perspectives and Lower Bounds|AGVW13]].

## Special cases

In _predicate encryption with public index_, a message is a pair $(x, \mu)$, the key for a predicate $P$ decrypts it to $\mu$ if $P(x) = 1$ and to $\bot$ otherwise, and the empty key reveals $x$ and $|\mu|$; equality predicates give [[identity-based-encryption|IBE]] and Boolean access policies give [[attribute-based-encryption|ABE]] — [[BSW11 - Functional Encryption Definitions and Challenges|BSW11]]. In _predicate encryption_ the index $x$ is hidden as well; [[inner-product-predicate-encryption|IPPE]] and [[hidden-vector-encryption|HVE]] are instances — [[BSW11 - Functional Encryption Definitions and Challenges|BSW11]].

# Other results

- [[fe-to-io|Compact FE ⇒ iO]]: single-key, sub-exponentially secure FE for $\classPpoly$ gives [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits when it is compact — [[AJ15 - Indistinguishability Obfuscation from Compact Functional Encryption|AJ15]] — and already when it is weakly compact — [[BV15 - Indistinguishability Obfuscation from Functional Encryption|BV15]].
- [[hash-function-and-io-to-fe-sw14|iO + PKE + SS-NIZK ⇒ FE]]: selectively IND-secure FE for all polynomial-size circuits from iO, a perfectly correct IND-CPA-secure PKE and a statistically simulation-sound NIZK proof system for $\classNP$ — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]].
- [[owf-and-io-to-fe-wat15|OWF + iO ⇒ FE]]: IND-secure FE for all polynomial-size circuits from iO and one-way functions, with a polynomial security loss — [[Wat15 - A Punctured Programming Approach to Adaptively Secure Functional Encryption|Wat15]].
- Single-key FE for all circuits of depth $d$ from [[learning-with-errors|LWE]], whose ciphertexts grow with $d$ and the output length but not with the circuit size; security extends to an a priori bounded number of keys. A ciphertext holds an [[homomorphic-encryption|FHE]] encryption $\psi$ of $m$, a [[garbled-circuit|garbled circuit]] for FHE decryption, and [[attribute-based-encryption|ABE]] encryptions of its input labels with attribute $\psi$; the key for $f$ releases, for each bit of the homomorphic evaluation of $f$ on $\psi$, the label matching that bit — [[GKPVZ13a - Reusable Garbled Circuits and Succinct Functional Encryption|GKPVZ13a]].
- For every bound $q$ fixed at setup, $q$-bounded-collusion FE for all polynomial-size circuits from semantically secure [[public-key-encryption|PKE]] and [[pseudorandom-generator|PRGs]] computable by low-depth circuits, secure under an adaptive [[functional-encryption#simulation-based-security|simulation-based]] definition; for predicate encryption with public index, semantically secure PKE alone suffices — [[GVW12 - Functional Encryption with Bounded Collusions via Multi-Party Computation|GVW12]].

<!-- BEGIN GENERATED participates-in 0d3b790286e7 -->

## Participates in

**Builds on Functional encryption**

- [[fe-to-io|Compact FE ⇒ iO]] (via [[functional-encryption#compactness|Compactness]])

**Produces Functional encryption**

- [[hash-function-and-io-to-fe-sw14|iO + PKE + SS-NIZK ⇒ FE]] (via [[functional-encryption#selective-security|Selective security]])
- [[owf-and-io-to-fe-wat15|OWF + iO ⇒ FE]]

<!-- END GENERATED participates-in -->
