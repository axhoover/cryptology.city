---
type: reduction
status: draft
title: "Bilinear pairing + DLIN ⇒ Zaps (non-interactive)"
aliases: []
id: red-bilinear-pairing-and-dlin-to-zap-gos06
kind: implication
hypotheses: [bilinear-pairing, decisional-linear]
conclusion: zap
class: unstated
model: standard
source:
  - "[[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]]"
security-loss: ""
---

# Bilinear pairing + DLIN ⇒ Zaps (non-interactive)

## Statement

If the [[decisional-diffie-hellman#dlin|decisional linear assumption]] holds in prime-order symmetric [[pairings|bilinear groups]] whose description the verifier can check, every $\classNP$ language has a non-interactive zap: a single-message witness-indistinguishable proof with no setup. For Circuit-SAT a proof for a circuit $C$ has $O(\secpar |C|)$ bits — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]]. A non-interactive zap is a [[zero-knowledge-proof#zaps|zap]] whose prover ignores the verifier's first message — folklore.

## Notes

- Non-interactive zaps were known before only under a derandomization assumption, the existence of hitting-set generators against co-nondeterministic circuits (Barak, Ong and Vadhan) — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].
- Two-message zaps follow from NIZK proofs in the common random string model: [[nizk-to-zap-dn00|NIZK ⇒ Zaps (Dwork–Naor)]] — [[DN00 - Zaps and Their Applications|DN00]].
- The same paper gives NIZK proofs for $\classNP$ in the common reference string model under DLIN: [[bdh-to-nizk-gro16|DLIN ⇒ NIZK]] — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].
