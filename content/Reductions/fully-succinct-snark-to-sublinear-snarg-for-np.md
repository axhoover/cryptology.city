---
type: reduction
status: draft
title: "Fully succinct SNARK ⇒ SNARG for NP with sublinear proofs"
aliases: []
id: red-fully-succinct-snark-to-sublinear-snarg-for-np
kind: implication
hypotheses: [fully-succinct-snark]
conclusion: sublinear-snarg-for-np
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the adversary and its advantage are unchanged"
rationale:
  class: "The construction runs the SNARK on the universal relation as an oracle, and the reduction forwards any prover unchanged."
---

# Fully succinct SNARK ⇒ SNARG for NP with sublinear proofs

## Statement

A [[succinct-argument#fully-succinct-snarks|fully succinct SNARK]] yields a [[succinct-argument#snargs-for-np-with-sublinear-proofs|SNARG for NP with sublinear proofs]]: for an $\classNP$ relation $\calR$ whose verifier $M_\calR$ runs in time $t$, a proof that $(x, w) \in \calR$ is a proof that $((M_\calR, x, t(|x|)), w) \in \calR_U$. The $\crs$ comes from $\Setup(1^\secpar)$ alone, and completeness carries over. With $p$ the polynomial bounding the SNARK's proofs, $|\pi| \le p(\secpar + \log t(|x|))$, and since $t$ is a polynomial, for every constant $\delta > 0$ there is a polynomial $p_{\calR,\delta}$ with $p(\secpar + \log t(|x|)) \le p_{\calR,\delta}(\secpar) \cdot (|x| + |w|)^{\delta}$. Knowledge soundness for adaptively chosen statements implies adaptive soundness — folklore.
