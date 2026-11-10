---
type: glossary
status: draft
aliases:
  - Complexity leveraging
title: Complexity leveraging
id: complexity-leveraging
---

# Complexity leveraging

**Complexity leveraging** derives a security notion from a super-polynomially strong form of an assumption through a reduction whose loss, in advantage or in running time, exceeds every polynomial. Typically the reduction guesses an $n$-bit value that the adversary chooses during the game and loses a factor $2^n$, which sub-exponential hardness absorbs once the security parameter is a large enough polynomial in $n$ — standard. The term is due to [[CGGM00 - Resettable Zero-Knowledge|CGGM00]], in their treatment of resettable zero knowledge in the bare public-key model.

## Guessing the challenge

Let $\Game^{\mathrm{adap}}$ be a game in which $\calA$ names a value $x^* \in X$ — a challenge identity, attribute set, input or message — at a point of its choosing, subject to admissibility constraints that refer to $x^*$ (no key query on the challenge identity, no signing query on the forged message). Let $\Game^{\mathrm{sel}}$ be the same game except that $\calA$ outputs $x^*$ before the game starts, the challenger's behaviour being otherwise the same.

From an adaptive $\calA$, the selective adversary $\calB$ samples $x' \getsr X$, outputs it as its choice, and runs $\calA$, relaying messages between $\calA$ and its own challenger. It stops as soon as $\calA$ makes a query that is inadmissible for $x'$ or names some $x^* \neq x'$, and then outputs a uniform bit in a bit-guessing game and gives up in a search game; otherwise it outputs what $\calA$ outputs. Until $\calB$ stops, $\calA$'s view is distributed as in $\Game^{\mathrm{adap}}$ and is independent of $x'$, and an admissible $\calA$ that names $x^* = x'$ makes no query inadmissible for $x'$. Hence in a bit-guessing game

$$
\Pr\!\left[\Game^{\mathrm{sel}}_{\calB}(\secpar) = 1\right] = \frac{1}{|X|} \Pr\!\left[\Game^{\mathrm{adap}}_{\calA}(\secpar) = 1\right] + \left(1 - \frac{1}{|X|}\right) \frac12,
$$

so $\Adv^{\mathrm{sel}}_{\calB}(\secpar) = \Adv^{\mathrm{adap}}_{\calA}(\secpar) / |X|$ for the advantage $\left|2\Pr[\cdot = 1] - 1\right|$, and in a search game $\Pr[\Game^{\mathrm{sel}}_{\calB}(\secpar) = 1] = \Pr[\Game^{\mathrm{adap}}_{\calA}(\secpar) = 1] / |X|$ — standard. $\calB$ runs in the time of $\calA$ plus the time to sample $x'$ and compare it with $\calA$'s queries and challenge.

For [[identity-based-encryption|IBE]], the remark that selective-identity security yields full security with a loss of the size of the identity space is due to [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]] ([[ind-sid-cpa-security-selective-to-ind-id-cpa-security|Sub-exponential IND-sID-CPA ⇒ IND-ID-CPA security]]); the [[hierarchical-identity-based-encryption|HIBE]] analogue loses the number of identity vectors ([[subexp-selective-hibe-to-adaptive-hibe|Sub-exponentially selective HIBE ⇒ adaptive HIBE]]) — folklore.

## Absorbing the loss

Let $X = \bits^n$, and suppose every selective adversary of size at most $T(\secpar)$ has advantage at most $\varepsilon(\secpar)$. Then every adaptive $\calA$ whose reduction $\calB$ has size at most $T(\secpar)$ has advantage at most $2^n \varepsilon(\secpar)$. Adaptive security against all polynomial-size adversaries follows when $T$ is super-polynomial and $2^n \varepsilon(\secpar)$ is negligible — standard.

- **Polynomial hardness does not suffice.** For $n = \omega(\log \secpar)$ a negligible $\varepsilon$ need not make $2^n \varepsilon$ negligible. For HIBE and [[attribute-based-encryption|CP-ABE]], selective security of a scheme with a super-polynomial challenge space does not imply its adaptive security ([[no-ind-shibe-cpa-security-selective-to-ind-hibe-cpa-security|No fixed-construction reduction from IND-sHIBE-CPA to IND-HIBE-CPA security]], [[no-selective-security-to-cp-abe-ind-cpa-security|No fixed-construction reduction from selective to adaptive CP-ABE security]]) — folklore.
- **Sub-exponential hardness suffices.** If $\varepsilon(\secpar) \le 2^{-\secpar^c}$ against size $T(\secpar) = 2^{\secpar^c}$ for a constant $c > 0$, then for $n \le \secpar^c / 2$ the adaptive advantage of every polynomial-size adversary is at most $2^{n - \secpar^c} \le 2^{-\secpar^c/2}$. Equivalently, a scheme with $n$-bit challenges is run at a security parameter $\secpar \ge (2n)^{1/c}$, polynomial in $n$ — standard. Sub-exponential notions on this site include [[hash-function#sub-exponential-one-wayness|sub-exponential one-wayness]], [[identity-based-encryption#sub-exponential-ind-sid-cpa-security|sub-exponential IND-sID-CPA security]] and [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure iO]].

## Guessing an index versus a value

A [[hybrid-argument|hybrid argument]] with $t$ transitions is often run by a reduction that samples the index $i \getsr [t]$ of the transition it attacks and loses a factor $t$; for $t = \poly(\secpar)$ the loss is polynomial and no leveraging is needed, and a non-uniform reduction may instead hard-wire the best index — standard. Leveraging is needed when the guessed object ranges over a super-polynomial set: a value chosen adaptively by the adversary, as above, or the index of a hybrid sequence of super-polynomial length, such as one that changes an obfuscated program on one input $x \in \bits^n$ at a time and so has $2^n$ steps — standard. The hard PPAD instances of [[subclasses-to-hash-function|Sub-exponential injective OWF + iO ⇒ PPAD hardness]] assume sub-exponentially secure [[indistinguishability-obfuscation|iO]] and [[injective-one-way-function|injective one-way functions]] to absorb a super-polynomial reduction loss — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]].

[[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptive soundness]] of a NIZK argument gives adaptive soundness for statements of length $n$ with a loss of $2^n$: a cheating prover that chooses a false $x$ after seeing $\crs$ and succeeds with probability $p$ succeeds with probability at least $2^{-n} p$ on some fixed false statement $x_0$, which a non-uniform reduction fixes in advance — standard.

## Leveraging running time

A reduction may also run in super-polynomial time, for instance to break one component of a scheme by exhaustive search, and then needs the remaining assumptions to hold against adversaries of that running time. Such proofs set the components at different security levels: one breakable by exhaustive search in time $2^{\secpar_1}$, the others secure against adversaries running in time $2^{\secpar_1} \cdot \poly(\secpar)$ — standard.

<!-- BEGIN GENERATED participates-in e4b43fb1232c -->

## Participates in

**Used via Complexity leveraging**

- [[ind-sid-cpa-security-selective-to-ind-id-cpa-security|Sub-exponential IND-sID-CPA Security ⇒ IND-ID-CPA Security]]
- [[subclasses-to-hash-function|Sub-exponential injective OWF + iO ⇒ PPAD hardness]]
- [[subexp-selective-hibe-to-adaptive-hibe|Sub-exponentially selective HIBE ⇒ adaptive HIBE]]

<!-- END GENERATED participates-in -->
