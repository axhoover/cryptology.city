---
type: reduction
status: draft
title: NIZK ⇒ Zaps (Dwork–Naor)
aliases: []
id: red-nizk-to-zap-dn00
kind: implication
hypotheses: [common-random-string-nizk-proof]
conclusion: zap
class: fully-black-box
model: standard
source:
  - "[[DN00 - Zaps and Their Applications|DN00]]"
security-loss: "polynomial"
rationale:
  class: "The zap runs the NIZK prover and verifier only as oracles on reference strings derived from the verifier's message, and the witness-indistinguishability reduction uses the verifier only as an oracle."
---

# NIZK ⇒ Zaps (Dwork–Naor)

## Statement

If adaptively sound [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]] exist for $\classNP$, then every language in $\classNP$ has a [[zero-knowledge-proof#zaps|zap]]: a two-message public-coin witness-indistinguishable proof whose first message can be fixed and reused — [[DN00 - Zaps and Their Applications|DN00]].

## Sketch

The verifier sends many random strings $\rho_1, \ldots, \rho_\ell$. The prover picks a random string $r$ and sends $r$ with NIZK proofs of the statement relative to each reference string $\rho_i \oplus r$; the verifier accepts iff all of them verify. Soundness: for a false statement, a union bound over the prover's choices of $r$ shows that some $\rho_i \oplus r$ is a string on which no accepting proof exists, except with negligible probability over the $\rho_i$. Witness indistinguishability follows from the zero knowledge of each proof — [[DN00 - Zaps and Their Applications|DN00]].

## Notes

- Non-interactive zaps, with no verifier message at all, exist under pairing-based assumptions — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06]].
- Through [[tdp-to-nizk-bfm88|TDP ⇒ NIZK]], suitably enhanced trapdoor permutations give zaps — [[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]], [[DN00 - Zaps and Their Applications|DN00]].
