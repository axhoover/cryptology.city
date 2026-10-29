---
type: reduction
status: draft
title: "Enhanced TDP ⇒ UC MPC in the CRS model (CLOS)"
aliases: []
id: red-enhanced-trapdoor-permutation-to-uc-mpc-clos02
kind: implication
hypotheses: [enhanced-trapdoor-permutation]
conclusion: uc-mpc
class: free
model: crs
source:
  - "[[CLOS02 - Universally Composable Two-Party and Multi-Party Secure Computation|CLOS02]]"
security-loss: ""
rationale:
  class: "Each party proves through a UC commit-and-prove functionality that its messages follow the semi-honest trapdoor-permutation-based protocol, an NP statement about that protocol's code."
  model: "The protocols are UC-secure in the common reference string model, which CKL03 show cannot be dropped."
---

# Enhanced TDP ⇒ UC MPC in the CRS model (CLOS)

## Statement

If [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutations]] exist, then in the common reference string model every well-formed multi-party functionality has a protocol that UC-realizes it against a malicious adversary statically corrupting any number of parties ([[secure-multi-party-computation#universal-composability-uc|UC MPC]]) — [[CLOS02 - Universally Composable Two-Party and Multi-Party Secure Computation|CLOS02]].

## Notes

- Against adaptive corruptions CLOS02 additionally assume augmented non-committing encryption — [[CLOS02 - Universally Composable Two-Party and Multi-Party Secure Computation|CLOS02]].
- The reference string cannot be dropped ([[no-authenticated-channels-to-uc-mpc-ckl03|no UC MPC from authenticated channels]]) — [[CKL03 - On the Limitations of Universally Composable Two-Party Computation without Set-up Assumptions|CKL03]].
