---
type: reduction
status: draft
title: Universal SNARK ⇒ SNARK
aliases: []
id: red-universal-snark-to-snark
kind: implication
hypotheses: [universal-snark]
conclusion: snark
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the adversary and its advantage are unchanged"
rationale:
  class: "The construction runs the universal setup and the key derivation only as oracles, and the fixed reduction forwards any adversary against the per-circuit scheme unchanged."
---

# Universal SNARK ⇒ SNARK

## Statement

A [[succinct-argument#universalupdatable-snarks|universal SNARK]] yields a preprocessing [[succinct-argument|SNARK]]: $\Setup'(1^\secpar, C)$ runs $\Setup(1^\secpar, |C|)$ and outputs the resulting $\mathsf{srs}$ together with the keys of $C$ derived from it, and proving and verification use the derived keys. Completeness, knowledge soundness and succinctness for $C$ are those of the universal scheme with $C$'s derived keys: an adversary against the per-circuit scheme is one against the universal scheme for the fixed circuit $C$, with the same advantage and the same extractor — folklore.
