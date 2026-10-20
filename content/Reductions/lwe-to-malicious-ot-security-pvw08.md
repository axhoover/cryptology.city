---
type: reduction
status: draft
title: LWE ⇒ UC-secure OT (PVW)
aliases: []
id: red-lwe-to-malicious-ot-security-pvw08
kind: implication
hypotheses: [lwe]
conclusion: malicious-ot-security
class: unstated
model: crs
source:
  - "[[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]]"
security-loss: ""
rationale:
  model: "The protocol is universally composable in the common reference string model, and the string is generated in either a messy or a decryption mode."
---

# LWE ⇒ UC-secure OT (PVW)

## Statement

If [[learning-with-errors|LWE]] is hard, there is a two-message 1-out-of-2 [[oblivious-transfer|oblivious transfer]] protocol in the common reference string model that is universally composable against [[oblivious-transfer#malicious-security|malicious]] static adversaries — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]].

## Notes

- The protocol is built from a dual-mode cryptosystem, whose reference string is generated in one of two indistinguishable modes: in messy mode, encryption under at least one of the receiver's two branches statistically hides the message, protecting the sender; in decryption mode, the receiver's key statistically hides its choice. In each mode a trapdoor lets the simulator extract the corrupted party's input, and one reference string serves any number of transfers — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]].
- PVW08 instantiate dual-mode cryptosystems from DDH, from quadratic residuosity and from LWE — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]].
