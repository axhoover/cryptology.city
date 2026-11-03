---
type: glossary
status: draft
aliases:
  - Non-uniform adversary
  - Uniform adversary
  - Non-uniform security
title: Uniform and non-uniform adversaries
id: uniform-and-non-uniform-adversaries
---

# Uniform and non-uniform adversaries

A **uniform** adversary is a single probabilistic polynomial-time machine that plays the game at every security parameter; a **non-uniform** adversary is a family of polynomial-size circuits, one for each security parameter, equivalently a polynomial-time machine that also receives an advice string of polynomial length depending only on the security parameter — standard.

## Uniform adversaries

A uniform adversary is a probabilistic Turing machine $\calA$ together with a polynomial $p$ such that, on input $1^\secpar$ and the game's other inputs, $\calA$ halts within $p(\secpar)$ steps: a $\PPT$ algorithm. One program plays at every $\secpar$.

## Non-uniform adversaries

A non-uniform adversary is a family $\calA = \{\calA_\secpar\}_{\secpar \in \NN}$ of circuits with $|\calA_\secpar| \le p(\secpar)$ for a polynomial $p$, where $\calA_\secpar$ plays the game at security parameter $\secpar$ and reads any random coins from extra input wires. Equivalently, $\calA$ is a polynomial-time machine run on $(1^\secpar, a_\secpar, \ldots)$ for an advice sequence $\{a_\secpar\}_{\secpar \in \NN}$ with $|a_\secpar| \le p(\secpar)$, which need not be computable — standard; see [[p-poly|P/poly]].

Coins give a non-uniform adversary nothing. The winning probability of $\calA_\secpar$ is an average over its coins, so some fixed coin string attains at least the average in a search game, and in a bit-guessing game a winning probability at least as far from $\tfrac12$; hard-wiring it gives a deterministic circuit of the same size and at least the same advantage — folklore. Removing the coins of a decision procedure that must be correct on every input takes more: amplify its success probability, then fix one random string that is good for all $2^n$ inputs of length $n$ by a union bound, which is the argument for [[bpp-to-p-poly|BPP ⊆ P/poly]] — [[Adl78 - Two theorems on random polynomial time|Adl78]] for $\classRP$, [[BG81 - Relative to a random oracle A, P^A != NP^A != co-NP^A with probability 1|BG81]] for $\classBPP$.

## Relation between the notions

A circuit of size polynomial in the running time of a uniform adversary simulates it at each $\secpar$, so security against all non-uniform adversaries implies security against all uniform ones — standard; for [[indistinguishability#computational-indistinguishability|computational indistinguishability]], [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].

The converse fails for unkeyed objects. An unkeyed compressing family $h_\secpar : \bits^{2\secpar} \to \bits^{\secpar}$ has collisions at every $\secpar$, and the circuit $\calA_\secpar$ that outputs a hard-wired collision of $h_\secpar$ has size $O(\secpar)$ and always wins, so no unkeyed function is [[hash-function#collision-resistance|collision resistant]] against non-uniform adversaries — [[Rog06 - Formalizing Human Ignorance|Rog06]]. A uniform adversary must find a collision at every $\secpar$ with one program, and this argument says nothing against it — standard.

A uniform reduction, an oracle $\PPT$ machine that uses the adversary only as an oracle, proves both readings of a theorem: run with a non-uniform adversary it is a non-uniform adversary against the assumption. A reduction that hard-wires information depending on the adversary — its best coins, the most useful index of a [[hybrid-argument|hybrid argument]], samples from a distribution it cannot sample efficiently — proves only the non-uniform reading, from non-uniform hardness of the assumption — standard.

Encryption and zero knowledge have a uniform-complexity theory of their own: against uniform adversaries the two definitions of security of [[GM84 - Probabilistic encryption|GM84]], semantic security and indistinguishability of encryptions, remain equivalent, and uniform zero knowledge asks that nothing leak on instances chosen by an efficient algorithm rather than on every instance — [[Gol93 - A Uniform-Complexity Treatment of Encryption and Zero-Knowledge|Gol93]].

## Which notion this site uses

Pages write _for all efficient $\calA$_ without fixing the model, and [[indistinguishability#computational-indistinguishability|computational indistinguishability]] is defined under both readings. A theorem proved by a uniform black-box reduction holds under either; a page that needs one reading states it, as [[time-lock-puzzle#security|time-lock puzzles]] do for non-uniform circuit families whose depth measures parallel time.

## Auxiliary input and composition

[[zero-knowledge-proof|Zero knowledge]] is defined against verifiers $V^*$ with an auxiliary input $z$: for every efficient $V^*$ there is an efficient $\Sim$ such that for every $x \in L$, witness $w$ and string $z$, $\Sim(x, z)$ is indistinguishable from the view of $V^*(x, z)$ interacting with $P(x, w)$ — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]]. Unlike advice, $z$ may depend on $x$. In a sequential composition the verifier's view of the earlier sessions is part of its input in the later ones; auxiliary-input zero knowledge is preserved under sequential composition — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]] — and the definition without auxiliary input is not — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].

Composition proofs in general fix the state of the surrounding execution inside a distinguisher or adversary for one component, and so need non-uniform security of that component or a reduction that regenerates the state efficiently — standard. For the same reason, indistinguishability of one sample extends to polynomially many independent samples for non-uniform distinguishers without efficient sampleability — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].

## Concrete security and precomputation

Against circuits of a fixed size, advice can hold the result of a precomputation far more expensive than the circuit, and the concrete security conjectured for standard primitives, among them AES and elliptic-curve discrete logarithms, fails against non-uniform adversaries of the conjectured size — [[BL13a - Non-uniform Cracks in the Concrete The Power of Free Precomputation|BL13a]]. Idealized models capture the effect by preprocessing, in which an unbounded algorithm computes advice of bounded length from the oracle: in the [[generic-group-model#preprocessing|generic group model with preprocessing]], $S$ bits of advice and $T$ online queries solve discrete logarithms in a group of prime order $N$ with probability $\varepsilon$ only if $ST^2 = \tilde\Omega(\varepsilon N)$ ([[ggm-with-preprocessing-to-dlog-ck18|GGM with preprocessing ⇒ DLOG]]) — [[CK18 - The Discrete-Logarithm Problem with Preprocessing|CK18]].
