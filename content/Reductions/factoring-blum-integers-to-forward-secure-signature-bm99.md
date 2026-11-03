---
type: reduction
status: draft
title: "Factoring ⇒ Forward-secure signature (Bellare–Miner)"
aliases: []
id: red-factoring-blum-integers-to-forward-secure-signature-bm99
kind: implication
hypotheses: [factoring-blum-integers]
conclusion: forward-secure-signature
class: unstated
model: rom
source:
  - "[[BM99 - A Forward-Secure Digital Signature Scheme|BM99]]"
security-loss: ""
rationale:
  model: "The hash function that derives the Fiat-Shamir challenge from the commitment, the period and the message is modelled as a random oracle."
---

# Factoring ⇒ Forward-secure signature (Bellare–Miner)

## Statement

If [[factoring#factoring-blum-integers|factoring Blum integers]] is hard, then for every polynomially bounded $T$ the Bellare–Miner scheme is a [[forward-secure-signature|forward-secure signature]] scheme with $T$ periods in the [[random-oracle-model|random-oracle model]] — [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]]. The scheme is a Fiat–Shamir-type scheme modulo a Blum integer $N$: the secret key is a vector of elements of $\ZZ_N^*$, and $\mathsf{Update}$ squares each component, so the key of period $i$ determines the keys of all later periods, while computing an earlier one requires square roots modulo $N$ — [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]].

## Notes

- The Fiat–Shamir characterization of signature security by passive impersonation security of the identification scheme ([[id-and-rom-to-ds|ID ⇒ DS]]) carries over to forward security, for key-evolving identification schemes — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].
