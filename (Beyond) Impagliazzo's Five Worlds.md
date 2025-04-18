# Impagliazzo's Five Worlds

[Russell Impagliazzo](https://cseweb.ucsd.edu/~russell/) in 1995 published a paper called [[Impagliazzo95 - A personal view of average-case complexity|A personal view of average-case complexity]] in which he describes possible worlds which we could live in depending on some (still) unproven conjectures in complexity theory. Reviewing it almost 30 years later, understanding the relationships between certain assumptions and the outcomes of the truth or falsity of them is still fascinating.

I think especially considering the worlds from a cryptographer's perspective is important. It's useful to know the cascade of assumptions certain primitives rely on and the potential limits of cryptography in certain worlds.

## Impagliazzo's five worlds
Somewhat recently, I was reminded of [Impagliazzo's Five Worlds](https://blog.computationalcomplexity.org/2004/06/impagliazzos-five-worlds.html). The worlds are related to the unresolved problem of [[Polynomial-Time|P]] vs [[Nondeterministic Polynomial-Time|NP]], which revolves around the language classes P and NP. However, it also has distinguishes worlds via existence of a [[One-way function]] (OWF) and [[Trapdoor function]] (TDF).

In [[Impagliazzo95 - A personal view of average-case complexity||his paper]], Impagliazzo illustrates the differences between "worst-case" and "average-case" hardness of problems through his 5 worlds:
- **Algorithmica**: $P=NP$ (or something "morally equivalent"), where we can solve NP-complete problems efficiently
- **Heuristica**: $P\neq NP$ but $NP$ problems are still easy on average
- **Pessiland**: $P\neq NP$ but OWFs do not exist
- **Minicrypt**: OWFs exist but TDFs do not exist
- **Cryptomania**: TDFs exist

These worlds follow from the following chain of implications:
- [[Trapdoor function|TDFs]] exist → [[One-way function|OWFs]]s exist
- [[One-way function|OWFs]] exist → [[Nondeterministic Polynomial-Time|NP]] is hard on average
- [[Nondeterministic Polynomial-Time|NP]] is hard on average → [[Polynomial-Time|P]] $\neq$ [[Nondeterministic Polynomial-Time|NP]]

All the propositions in that chain are conjectures at this point, but the implications are true. So, there are 5 possible settings for these propositions, each which corresponds to one of Imagliazzo's worlds.

## A note on hardness
Explain worst-case vs average-case hardness. TODO

There is also work trying to understand if $P \neq NP$ actually could imply [[One-way function|OWFs]] exist (or the barriers to trying to prove this):
- [[GG98 - On the possibility of basing Cryptography on the assumption that P != NP]]
- [[AGGM06 - On basing one-way functions on NP-hardness]]

# Beyond the Five Worlds
The worlds laid out by Impagliazzo were useful to illuminate the differences between average-case and worst-case hardness. It also makes it clear how different types of cryptography rely on average-case and not worst-case assumptions.

However, there is a large body of both complexity and cryptography which prove a long list of implications from one conjecture to another. And, I personally think it would an interesting project (if infeasible) to enumerate and map all of these implications throughout the literature.

Instead of enumerating all of them though, I'll just discuss a handful of them to illustrate the plethora of possible worlds we (for all we know) could be in.

FHE exists → does not follow from cryptomania
circular security + TDF gets FHE??
Indistinguishability Obfuscation (weird because exists with P=NP)
Weird quantum stuff

## Breaking up Cryptomania
In his original paper, Impagliazzo actually suggested that Cryptomania includes the existence of [[Oblivious transfer]] and [[Homomorphic encryption]]. However, I've simplified the definition to just be the existence of a [[Trapdoor function]].

Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other.
TODO continue explaining that this is pretty different than OWF, because OWF imply all sort of things

## Obfustopia
Talk about [[Indistinguishability Obfuscation|iO]] together with [[One-way function|OWFs]]

## Microcrypt
Explain the recent ideas of cryptography even without one-way functions