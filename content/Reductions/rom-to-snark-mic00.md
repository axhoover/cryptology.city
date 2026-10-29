---
type: reduction
status: draft
title: ROM ⇒ SNARK (Micali's CS proofs)
aliases:
  - CS proofs
id: red-rom-to-snark-mic00
kind: implication
hypotheses: [rom]
conclusion: snark
class: free
model: rom
source:
  - "[[Mic00 - Computationally Sound Proofs|Mic00]]"
  - "[[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]]"
via:
  - "[[probabilistically-checkable-proofs|PCPs]]"
security-loss: "a factor polynomial in the number of random-oracle queries"
rationale:
  class: "The theorem holds for every prover in the random-oracle model, which is the free class scoped by the model."
  model: "Two independent random oracles serve as the Merkle-tree hash and as the challenge generator applied to the statement and the root."
---

# ROM ⇒ SNARK (Micali's CS proofs)

## Statement

In the [[random-oracle-model|random-oracle model]], every language in $\classNP$ has a non-interactive argument, a computationally sound proof, whose proofs have length $\poly(\secpar, \log T)$ and are verified in time $\poly(\secpar, |x|, \log T)$, for statements $x$ whose $\classNP$ verification takes time $T$ — [[Mic00 - Computationally Sound Proofs|Mic00]]. Instantiated with a PCP of knowledge, one from whose accepted proofs a witness can be extracted, the argument is an argument of knowledge, so it is a [[succinct-argument|SNARK]] without a common reference string — [[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]].

## Sketch

The prover commits to a [[probabilistically-checkable-proofs|probabilistically checkable proof]] by the root of a Merkle tree built with one random oracle, derives the PCP verifier's coins by applying a second, independent oracle to the statement and the root, $f_2(x \| \mathrm{root})$, and sends the root together with the queried positions and their authentication paths. The verifier recomputes the coins and checks the paths and the PCP verifier's decision — [[Mic00 - Computationally Sound Proofs|Mic00]].

## Notes

- The statement must enter the challenge, since the prover chooses it. With coins $u := f_2(\mathrm{root})$ alone, take $L := \{(a, b) : a \ne b\}$ for $\secpar$-bit $a, b$ and a PCP verifier that checks one dummy proof bit is $0$ and accepts iff $a \ne b$ or $u = a$; it has perfect completeness and soundness error $2^{-\secpar}$ on each fixed false statement, yet a prover that commits to the dummy proof, computes $u$ and then claims the false statement $(u, u)$ is always accepted — standard.
- The construction is secure in the [[random-oracle-model#quantum-random-oracle-model|quantum random-oracle model]] and inherits the zero knowledge and proof of knowledge of the PCP: [[qrom-to-zk-snark-cms19|QROM ⇒ zk-SNARK]] — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]]. It is the one-round case of the compiler for interactive oracle proofs, [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|BCS transform]] — [[BCS16 - Interactive Oracle Proofs|BCS16]].
- The interactive precursor needs only collision-resistant hashing: [[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ succinct arguments]] — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]].
- In the common reference string model, no reduction that uses the cheating prover only as an oracle proves adaptive soundness of a SNARG for an $\classNP$ language with a sub-exponentially hard subset-membership problem from a falsifiable assumption, unless the assumption is false: [[no-falsifiable-assumption-to-snark-gro16|No reduction from falsifiable assumptions to SNARKs]] — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].
