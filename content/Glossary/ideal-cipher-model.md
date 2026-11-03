---
type: glossary
status: draft
aliases:
  - ICM
  - Ideal cipher
  - Ideal cipher model
  - Random permutation model
title: Ideal cipher model
id: ideal-cipher-model
---

# Ideal cipher model

In the **ideal cipher model (ICM)**, every party has oracle access to a uniformly random block cipher $E : \bits^\kappa \times \bits^n \to \bits^n$, a family of $2^\kappa$ independent uniformly random permutations $E(k, \cdot)$ of $\bits^n$, together with the inverses $E^{-1}(k, \cdot)$; security is proved over the choice of $E$ — standard. The model of a block cipher as a family of random permutations goes back to [[Sha49 - Communication Theory of Secrecy Systems|Sha49]]. The **random permutation model** is the case $\kappa = 0$: a single public uniformly random permutation $P$ of $\bits^n$, queried as $P$ and $P^{-1}$ — standard. Results proved in either model are recorded with `model: other` and a rationale naming the model, as in [[tdp-to-fixed-ring-ring-signature-rst01|TDP ⇒ Ring signatures with fixed-ring unforgeability]].

## Relation to the random-oracle model

The ICM and the [[random-oracle-model|random-oracle model]] are equivalent for single-stage security games: a random oracle is indifferentiably constructible from an ideal cipher, and an ideal cipher from a random oracle by a Feistel network with enough rounds — [[CDMP05 - Merkle-Damgard Revisited How to Construct a Hash Function|CDMP05]], [[HKT11 - The Equivalence of the Random Oracle Model and the Ideal Cipher Model Revisited|HKT11]]. See [[indifferentiability]] for the round counts and the limits of the equivalence.

As for random oracles ([[CGH98 - The Random Oracle Methodology Revisited|CGH98]]), the model cannot always be instantiated: there is a blockcipher-based [[hash-function|hash function]] that is secure in the ICM but insecure under every instantiation of the cipher — [[Bla06 - The Ideal-Cipher Model Revisited An Uninstantiable Blockcipher-Based Hash Function|Bla06]].

## Results in the model

- **Block-cipher-based hashing.** The 64 compression functions $f(h, m)$ of Preneel–Govaerts–Vandewalle, each one call to $E$ (with $\kappa = n$) whose key, input and feed-forward are each one of $h$, $m$, $h \oplus m$ or a fixed constant $v$, are classified in the ICM by collision and preimage resistance, alone and iterated in Merkle–Damgård; among the collision-resistant ones are Davies–Meyer $E_m(h) \oplus h$, Matyas–Meyer–Oseas $E_h(m) \oplus m$ and Miyaguchi–Preneel $E_h(m) \oplus m \oplus h$, for which $q$ queries find a collision with probability $O(q^2/2^n)$ — [[BRS02 - Black-Box Analysis of the Block-Cipher-Based Hash-Function Constructions from PGV|BRS02]].
- **Key whitening.** $\mathrm{DESX}_{k, k_1, k_2}(x) = k_2 \oplus E_k(x \oplus k_1)$ has effective key length at least $\kappa + n - 1 - \log_2 m$ against an adversary that obtains $m$ plaintext–ciphertext pairs — [[KR96 - How to Protect DES Against Exhaustive Key Search|KR96]].
- **Password-authenticated key exchange.** The two-flow protocol at the core of Encrypted Key Exchange is a secure [[password-authenticated-key-exchange|PAKE]] in an ideal-cipher model, assuming [[computational-diffie-hellman|CDH]] is hard in the underlying group — [[BPR00 - Authenticated Key Exchange Secure against Dictionary Attacks|BPR00]].
- **Ring signatures.** The Rivest–Shamir–Tauman [[ring-signature|ring signature]] is proved with the symmetric cipher modeled as an ideal cipher — [[RST01 - How to Leak a Secret|RST01]] ([[tdp-to-fixed-ring-ring-signature-rst01|TDP ⇒ Ring signatures with fixed-ring unforgeability]]).
