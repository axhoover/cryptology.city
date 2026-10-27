---
type: reduction
status: draft
title: Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)
aliases:
  - BCS transform
id: red-succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16
kind: implication
hypotheses: [succinct-state-restoration-iop]
conclusion: transparent-succinct-argument
class: fully-black-box
model: rom
source:
  - "[[BCS16 - Interactive Oracle Proofs|BCS16]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: "additive: $\\kappa_{\\mathrm{sr}}(t)$ plus $O(t^2 2^{-\\secpar})$ for a $t$-query prover and $\\secpar$-bit oracle outputs, the probability of a collision among the oracle's answers"
rationale:
  class: "One fixed compiler runs the IOP prover and verifier only as oracles, and the straight-line reduction turns any cheating prover into a state-restoration prover for the IOP by running it as an oracle and reading its random-oracle queries."
  model: "The Merkle commitments and the verifier's challenges both use the random oracle, which the reduction simulates and whose queries it reads."
  security-loss: "BCS16 bound the compiled argument's knowledge error by the IOP's state-restoration knowledge error plus the probability of a collision among the random oracle's answers."
---

# Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)

## Statement

Let $(P, V)$ be a public-coin $k$-round [[interactive-oracle-proof#succinct-iops-with-state-restoration-knowledge-soundness|succinct interactive oracle proof with state-restoration knowledge soundness]] for the universal relation $\calR_U = \{((M, x, T), w) : M \text{ accepts } (x, w) \text{ within } T \text{ steps}\}$, with $q$ queries into prover oracles of length $\ell$ and state-restoration knowledge error $\kappa_{\mathrm{sr}}(t)$ against provers performing $t$ state restorations. The BCS transform — Merkle-commit each prover oracle with the [[random-oracle-model|random oracle]] $H$, derive the verifier's randomness in each round by hashing that round's root together with the statement in the first round and with the previous round's randomness afterwards, and send the roots with the $q$ queried symbols and their authentication paths — is a [[succinct-argument#stark|transparent succinct non-interactive argument of knowledge]] for $\calR_U$ in the random-oracle model, with no setup beyond the oracle. Its soundness is tightly characterized by the IOP's state-restoration soundness: against provers making $t$ oracle queries, its knowledge error is $\kappa_{\mathrm{sr}}(t)$ plus the probability of a collision among the oracle's answers — [[BCS16 - Interactive Oracle Proofs|BCS16]]. The transform preserves the IOP's honest-verifier zero knowledge, and applied to known IOPs it gives unconditional zero-knowledge proofs in the random-oracle model with quasilinear prover and polylogarithmic verifier — [[BCS16 - Interactive Oracle Proofs|BCS16]]. BCS16 also prove tight upper and lower bounds on state-restoration soundness in terms of the IOP's soundness and round complexity, and present the compiler as a generalization of [[fiat-shamir-heuristic|Fiat–Shamir]] for public-coin interactive proofs and of Micali's CS proofs for PCPs — [[BCS16 - Interactive Oracle Proofs|BCS16]].

## Sketch

The prover Merkle-commits to each oracle $\Pi_i$ with $H$, sets $\rho_1 := H(M, x, T, \mathrm{root}_1)$ and $\rho_{i+1} := H(\mathrm{root}_{i+1}, \rho_i)$, and outputs the roots, the queried symbols and their authentication paths; the verifier recomputes the $\rho_i$, checks the paths, and runs $V$ on the answers. A cheating prover's oracle queries determine the oracles it committed to, and each query of $H$ on a fresh root is a state restoration of the IOP verifier — [[BCS16 - Interactive Oracle Proofs|BCS16]].

## Notes

- The proof consists of $k$ Merkle roots and $q$ symbols with $q$ authentication paths of $\log \ell$ hashes each, $k\secpar + q(\log |\Sigma| + \secpar \log \ell)$ bits for $\secpar$-bit hashes and alphabet $\Sigma$; the prover runs the IOP prover and $O(\ell)$ hashes, and the verifier runs the IOP verifier and $O(q \log \ell)$ hashes — standard.
- The one-round case, a PCP, is Micali's construction: [[rom-to-snark-mic00|ROM ⇒ SNARK (CS proofs)]] — [[Mic00 - Computationally Sound Proofs|Mic00]].
- The transform of an IOP with round-by-round soundness is sound in the [[random-oracle-model#quantum-random-oracle-model|quantum random-oracle model]] — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]].
- For a $(2\mu+1)$-move public-coin protocol and $Q$ oracle queries, the generic soundness loss of Fiat–Shamir is approximately $Q^\mu$, which the $\mu$-fold sequential repetition of a $\Sigma$-protocol attains — [[AFK22 - Fiat-Shamir Transformation of Multi-round Interactive Proofs|AFK22]].
