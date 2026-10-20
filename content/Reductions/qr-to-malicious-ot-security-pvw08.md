---
type: reduction
status: draft
title: QR ⇒ UC-secure OT (PVW)
aliases: []
id: red-qr-to-malicious-ot-security-pvw08
kind: implication
hypotheses: [qr]
conclusion: malicious-ot-security
class: unstated
model: crs
source:
  - "[[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]]"
security-loss: ""
rationale:
  model: "The protocol is universally composable in the common reference string model, and the string is generated in either a messy or a decryption mode."
---

# QR ⇒ UC-secure OT (PVW)

## Statement

If [[quadratic-residuosity|QR]] is hard, there is a two-message 1-out-of-2 [[oblivious-transfer|oblivious transfer]] protocol in the common reference string model that is universally composable against [[oblivious-transfer#malicious-security|malicious]] static adversaries — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]].

## Sketch

The reference string is a dual-mode cryptosystem's parameters, generated in one of two computationally indistinguishable modes. The receiver derives from it a key pair for its choice bit, and the sender encrypts each message under the matching branch. In messy mode one branch's ciphertext statistically hides its message, which gives statistical security against a malicious receiver; in decryption mode a trapdoor decrypts both branches and the receiver's key hides its bit statistically, which gives statistical security against a malicious sender. The simulator extracts with the mode's trapdoor, which gives UC security — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]].

## Notes

- The protocol is built from a dual-mode cryptosystem, whose reference string is generated in one of two indistinguishable modes: in messy mode, encryption under at least one of the receiver's two branches statistically hides the message, protecting the sender; in decryption mode, the receiver's key statistically hides its choice. The messy-mode trapdoor lets the simulator extract a corrupted receiver's choice, and the decryption-mode trapdoor lets it extract both of a corrupted sender's messages; indistinguishability of the modes gives computational security against the other party in each mode. One reference string serves an unbounded number of transfers between the same sender and receiver — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]].
- PVW08 instantiate dual-mode cryptosystems from DDH, from quadratic residuosity and from LWE — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]].
