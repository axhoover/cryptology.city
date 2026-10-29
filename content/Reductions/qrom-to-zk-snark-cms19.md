---
type: reduction
status: draft
title: QROM ⇒ zk-SNARK (Micali's construction in the QROM)
aliases: []
id: red-qrom-to-zk-snark-cms19
kind: implication
hypotheses: [qrom]
conclusion: zk-snark
class: free
model: rom
source:
  - "[[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]]"
security-loss: ""
rationale:
  class: "The theorem holds for every quantum prover making polynomially many oracle queries, which is the free class scoped by the model."
  model: "The proof holds in the quantum random-oracle model, the idealised random oracle with superposition queries by quantum provers, so the edge records rom, which scopes its conclusion, and the Statement names the quantum access."
---

# QROM ⇒ zk-SNARK (Micali's construction in the QROM)

## Statement

In the [[random-oracle-model#quantum-random-oracle-model|quantum random-oracle model]], Micali's construction is unconditionally secure against quantum provers making polynomially many superposition queries to the oracle, and it inherits the zero knowledge and the proof of knowledge of the underlying PCP; instantiated with a zero-knowledge PCP of knowledge it is a [[succinct-argument#zk-snark|zk-SNARK]] with no setup, the first shown secure in the QROM — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]]. The same lifting lemma shows that SNARGs obtained from IOPs with round-by-round soundness are unconditionally secure in the QROM — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]].

## Notes

- Proof length and prover and verifier costs are those of the classical construction, [[rom-to-snark-mic00|ROM ⇒ SNARK (CS proofs)]] — standard; CMS19 prove explicit soundness bounds tight up to small factors — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]].
- The quantum random-oracle model gives the adversary superposition access to the oracle; a scheme secure against classical oracle access can be insecure there — [[BDF+11 - Random Oracles in a Quantum World|BDF+11]].
