---
type: barrier
status: draft
title: "No fixed-construction reduction from Hash function to DS (random-oracle instantiation)"
aliases: []
id: bar-hash-function-to-ds-cgh98
hypotheses: [hash-function]
conclusion: ds
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: unconditional
source:
  - "[[CGH98 - The Random Oracle Methodology Revisited|CGH98]]"
rationale:
  class: "The construction is CGH98's signature scheme with its random oracle instantiated by the hash function, and a counterexample against every function ensemble refutes it."
  strength: "CGH98 start from a signature scheme secure in the random-oracle model, which a one-way function implemented by the oracle itself provides, so the theorem assumes no hardness assumption."
---

# No fixed-construction reduction from Hash function to DS (random-oracle instantiation)

## Statement

There is a [[digital-signature|signature scheme]] $\DS$ with oracle access, existentially unforgeable under chosen-message attack in the [[random-oracle-model|random oracle model]] with no computational assumption, such that for every function ensemble $F = \{f_s : \bits^* \to \bits^{\ell(\secpar)}\}_{s \in \bits^\secpar}$ computable in polynomial time, with $\omega(\log \secpar) \le \ell(\secpar) \le \poly(\secpar)$, the scheme $\DS^F$ is existentially forgeable under a key-only attack and totally breakable under a chosen-message attack, which recovers its signing key — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Theorem 4.4). Here $\DS^F$ samples $s \getsr \bits^\secpar$ with the key pair, publishes $s$ in the verification key and answers every oracle query $x$ with $f_s(x)$. Hence instantiating the random oracle of a scheme secure in the random oracle model by a [[hash-function|hash function]] does not in general give a secure signature scheme. Signatures built from hash functions by other constructions are not ruled out.

## Sketch

$\DS$ runs a signature scheme secure in the random oracle model, except on a message $\langle i, s, \pi \rangle$ in which $\pi$ is a valid [[rom-to-snark-mic00|CS proof]] that the $i$-th ensemble, in an enumeration of all ensembles computable in time $t(n) = n^{\log n}$, maps $\langle i, s \rangle$ under seed $s$ to $O'(\langle i, s \rangle)$, for one of three independent oracles derived from the oracle $O$: verification accepts every signature on such a message, and signing outputs the signing key. In the random oracle model such a message is infeasible to find, since $O'(\langle i, s \rangle)$ equals the one value $f^i_s(\langle i, s \rangle)$ with probability $2^{-\ell(\secpar)}$ and CS proofs are computationally sound. Once $O$ is implemented by $F$, the ensemble playing $O'$ is the $i$-th for an $i$ fixed by $F$, and the adversary proves the true statement from the published seed in polynomial time — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, §4.3).

## Notes

- Without CS proofs, checking $(m, O(m)) \in \{(s, f_s(s)) : s \in \bits^\secpar\}$ directly gives, for each fixed ensemble $F$, a scheme secure in the random oracle model and insecure when implemented with $F$ (Corollary 4.2), and checking membership in the relation of the universal ensemble gives a scheme insecure under every ensemble, but with signing and verification in time $t(n) = n^{\log n}$ (Proposition 4.3) — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1).
- The construction rests on the absence of correlation-intractable ensembles: for every ensemble $F$ the relation $\{(s, f_s(s))\}$ is evasive for a random oracle, yet the identity map, given the seed $s$, outputs an $x$ with $(x, f_s(x))$ in it (Theorem 3.4) — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1).
- The Fiat–Shamir transform admits the same failure: some secure 3-round public-coin identification scheme yields an insecure signature scheme under every implementation of the oracle by a function ensemble ([[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]) — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]].
