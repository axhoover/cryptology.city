---
type: reduction
status: draft
title: HE ⇒ IND-CPA PKE
aliases: []
id: red-he-to-pke-cpa-security
kind: implication
hypotheses: [he]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme's own key generation, encryption and decryption, and the reduction forwards any IND-CPA adversary unchanged."
---

# HE ⇒ IND-CPA PKE

## Statement

Forgetting $\Eval$, a [[homomorphic-encryption|homomorphic encryption]] scheme $\HE = (\KeyGen, \Enc, \Dec, \Eval)$ is an IND-CPA-secure [[public-key-encryption#cpa-security|public-key encryption]] scheme $(\KeyGen, \Enc, \Dec)$, with the same correctness and the same CPA advantage — folklore.

## Notes

- The identity map does not give IND-CCA2 security ([[no-he-to-cca-security|No fixed-construction reduction from HE to IND-CCA2 Security]]) — standard; in particular an HE scheme is not IND-CCA2-secure when a binary function in $\calF$ and inputs witnessing that it depends on both arguments, of equal lengths where the attack pairs them as challenge messages, can be computed from $\pk$ in polynomial time, as for sums of messages — folklore; nor IND-CCA1 security in general, since a lunchtime attack recovers the key of Gentry's basic scheme — [[LMSV11 - On CCA-Secure Somewhat Homomorphic Encryption|LMSV11]].
