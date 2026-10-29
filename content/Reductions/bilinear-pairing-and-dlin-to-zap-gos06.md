---
type: reduction
status: draft
title: "Bilinear pairing + DLIN ⇒ Zaps (non-interactive)"
aliases: []
id: red-bilinear-pairing-and-dlin-to-zap-gos06
kind: implication
hypotheses: [bilinear-pairing, decisional-linear]
conclusion: non-interactive-zap
class: unstated
model: standard
source:
  - "[[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]]"
security-loss: ""
---

# Bilinear pairing + DLIN ⇒ Zaps (non-interactive)

## Statement

If the [[decisional-diffie-hellman#dlin|decisional linear assumption]] holds in prime-order symmetric [[pairings|bilinear groups]] whose description the verifier can check, every $\classNP$ language has a [[zero-knowledge-proof#non-interactive-zaps|non-interactive zap]]: a single-message, perfectly sound witness-indistinguishable proof with no setup. For Circuit-SAT a proof for a circuit $C$ has $O(\secpar |C|)$ bits — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].

## Notes

- Non-interactive zaps were known before only under a derandomization assumption, the existence of hitting-set generators against co-nondeterministic circuits, which derandomizes two-message zaps ([[zap-and-co-nondeterministic-hsg-to-non-interactive-zap-bov03|Zap + HSG ⇒ Non-interactive zaps (BOV)]]) — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]], [[BOV03 - Derandomization in Cryptography|BOV03]].
- A non-interactive zap is a [[zero-knowledge-proof#zaps|zap]] whose prover ignores the verifier's first message ([[non-interactive-zap-to-zap|Non-interactive zap ⇒ Zap]]) — folklore.
- Two-message zaps follow from NIZK proofs in the common random string model: [[nizk-to-zap-dn00|NIZK ⇒ Zaps (Dwork–Naor)]] — [[DN00 - Zaps and Their Applications|DN00]].
- The same paper gives NIZK proofs for $\classNP$ in the common reference string model under DLIN: [[bdh-to-nizk-gro16|DLIN ⇒ NIZK]] — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].
