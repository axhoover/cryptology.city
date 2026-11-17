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

A [[succinct-argument#fully-succinct-snarks|fully succinct SNARK]] yields a [[succinct-argument#snargs-for-np-with-sublinear-proofs|SNARG for NP with sublinear proofs]]: for an $\classNP$ relation $\calR$ whose verifier $M_\calR$ runs in time $t_\calR$, a proof that $(x, w) \in \calR$ is a proof that $((M_\calR, x, t_\calR(|x|)), w) \in \calR_U$. Fix $c$ with $t_\calR(n) \le n^c$ for $n \ge 2$; instances of length at most 1 are padded, or decided by $\Vrfy$ directly. The statements $(M_\calR, x, t_\calR(|x|))$ then satisfy $t \le |x|^c$, so the SNARK's knowledge soundness for that $c$ applies. The $\crs$ comes from $\Setup(1^\secpar)$ alone, and completeness carries over. With $p$ the polynomial bounding the SNARK's proofs, $|\pi| \le p(\secpar + \log t_\calR(|x|))$, and since $t_\calR$ is a polynomial, for every constant $\delta > 0$ there is a polynomial $p_{\calR,\delta}$ with $p(\secpar + \log t_\calR(|x|)) \le p_{\calR,\delta}(\secpar) \cdot (|x| + |w|)^{\delta}$. Knowledge soundness for adaptively chosen statements implies adaptive soundness — folklore.
