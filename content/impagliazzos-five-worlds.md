---
aliases:
  - Five worlds
  - Impagliazzo's Five Worlds
title: Impagliazzo's Five Worlds
---

# Impagliazzo's Five Worlds

[Russell Impagliazzo](https://cseweb.ucsd.edu/~russell/) in 1995 published a paper called [[Imp95 - A personal view of average-case complexity|A personal view of average-case complexity]] in which he describes possible worlds which we could live in depending on some (still) unproven conjectures in complexity theory. Reviewing it almost 30 years later, understanding the relationships between certain assumptions and the outcomes of the truth or falsity of them is still fascinating.

I think especially considering the worlds from a cryptographer's perspective is important. It's useful to know the cascade of assumptions certain primitives rely on and the potential limits of cryptography in certain worlds.

## Impagliazzo's five worlds

Somewhat recently, I was reminded of [Impagliazzo's Five Worlds](https://blog.computationalcomplexity.org/2004/06/impagliazzos-five-worlds.html). The worlds are related to the unresolved problem of [[polynomial-time|P]] vs [[nondeterministic-polynomial-time|NP]], which revolves around the language classes P and NP. However, it also has distinguishes worlds via existence of a [[hash-function|One-way functions]] (OWF) and [[trapdoor-permutation|Trapdoor permutations]] (TDP).

In his paper, Impagliazzo illustrates the differences between "worst-case" and "average-case" hardness of problems through his 5 worlds:

- **Algorithmica**: $\classP=\classNP$ (or something "morally equivalent"), where we can solve NP-complete problems efficiently
- **Heuristica**: $\classP\neq \classNP$ but $\classNP$ problems are still easy on average
- **Pessiland**: $\classP\neq \classNP$ but OWFs do not exist
- **Minicrypt**: OWFs exist but TDPs do not exist
- **Cryptomania**: TDPs exist

These worlds follow from the following chain of implications:

- [[trapdoor-permutation|TDFs]] exist → [[hash-function|OWFs]]s exist
- [[hash-function|OWFs]] exist → [[nondeterministic-polynomial-time|NP]] is hard on average
- [[nondeterministic-polynomial-time|NP]] is hard on average → $\classP \neq \classNP$

All the propositions in that chain are conjectures at this point, but the implications are true. So, there are 5 possible settings for these propositions, each which corresponds to one of Imagliazzo's worlds.

## A note on hardness

A subtle but crucial point in Impagliazzo's framework is the distinction between **worst-case** and **average-case** hardness.

$\classP \neq \classNP$ is a **worst-case** statement: it says there exist some NP problems for which no efficient algorithm works on _every_ input. A single hard instance suffices. This is why Heuristica (where $\classP \neq \classNP$) can still be a pleasant world for algorithms: hard instances might be rare or contrived.

**One-way functions**, by contrast, require **average-case** hardness: the function must be hard to invert on a _random_ input drawn from some natural distribution. An adversary that inverts on even a polynomial fraction of inputs breaks the OWF. This is a much stronger statement than worst-case hardness, and it is not known whether $\classP \neq \classNP$ implies it.

This gap explains why Pessiland exists: a world where NP is hard in the worst case (so $\classP \neq \classNP$) but NP is easy on average — meaning random instances of NP problems are tractable — so OWFs cannot exist.

There is also work trying to understand if $\classP \neq \classNP$ actually could imply [[hash-function|OWFs]] exist (or the barriers to trying to prove this):

- [[GG98 - On the possibility of basing Cryptography on the assumption that P != NP]]
- [[AGGM06 - On basing one-way functions on NP-hardness]]

# Beyond the Five Worlds

The worlds laid out by Impagliazzo were useful to illuminate the differences between average-case and worst-case hardness. It also makes it clear how different types of cryptography rely on average-case and not worst-case assumptions.

However, there is a large body of both complexity and cryptography which prove a long list of implications from one conjecture to another. And, I personally think it would an interesting project (if infeasible) to enumerate and map all of these implications throughout the literature.

Instead of enumerating all of them though, I'll just discuss a handful of them to illustrate the plethora of possible worlds we (for all we know) could be in.

## Breaking up Cryptomania

In his original paper, Impagliazzo actually suggested that Cryptomania includes the existence of [[oblivious-transfer|OT]] and [[homomorphic-encryption|HE]]. However, I've simplified the definition to just be the existence of a [[trapdoor-permutation|TDF]].

Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

**Fully homomorphic encryption (FHE)** is an interesting case: it is not known to follow from TDPs alone. Current constructions all rely on lattice assumptions ([[learning-with-errors|LWE]] with circular security). Whether FHE follows from Cryptomania (TDPs) is a major open problem.

## Obfustopia

**[[indistinguishability-obfuscation|Indistinguishability obfuscation]] (iO)** together with [[hash-function|OWFs]] defines an even richer world beyond Cryptomania, sometimes called _Obfustopia_. iO is an extremely powerful primitive: combined with OWFs, it implies [[public-key-encryption|PKE]], [[digital-signature|digital signatures]], [[non-interactive-zero-knowledge|NIZK]] proofs without a CRS, functional encryption for all circuits, deniable encryption, and much more — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

What makes iO peculiar is that it can exist even in a world where $\classP = \classNP$: the definition of iO does not require any computational hardness beyond the existence of OWFs. This makes Obfustopia conceptually orthogonal to the Impagliazzo hierarchy — it is not strictly between Cryptomania and some "stronger" world, but a separate axis of assumptions.

The first candidate iO construction was proposed in [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] based on multilinear maps. A construction from well-founded (polynomial) hardness assumptions — sub-exponential LWE, LPN, and a PRG in NC$^1$ — was given in [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Microcrypt

A surprising recent development is the discovery that cryptographic tasks may be possible **without any one-way functions**, using quantum information. This hypothetical world — sometimes called _Microcrypt_ — sits between Pessiland and Minicrypt.

The key insight is that quantum **unclonability** (the no-cloning theorem) can serve as a cryptographic resource even without computational hardness assumptions. For example:

- **Quantum money** and **unclonable encryption** can be constructed from one-way state generators (OWSGs), a quantum analogue of OWFs that may be weaker
- **Pseudorandom quantum states** (PRS) can exist even if $\classP = \classNP$, since no efficient quantum algorithm can distinguish a PRS from a Haar-random state

The landscape of quantum cryptography without OWFs is mapped out in [[GMMY24 - CountCrypt Quantum Cryptography between QCMA and PP|GMMY24]], which identifies a rich hierarchy of quantum cryptographic primitives that may separate Pessiland from Minicrypt in the quantum setting.

![[Minicrypt.png]]
