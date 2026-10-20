---
type: reduction
status: draft
title: RE ⇒ Statistically rerandomizable encryption
aliases: []
id: red-rerandomizable-encryption-to-statistically-rerandomizable-encryption
kind: implication
hypotheses: [rerandomizable-encryption]
conclusion: statistically-rerandomizable-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme and its rerandomizer."
---

# RE ⇒ Statistically rerandomizable encryption

## Statement

If $\mathsf{ReRand}(\pk, c)$ is distributed exactly as $\Enc(\pk, m)$ for every $c$ in the support of $\Enc(\pk, m)$, as for [[rerandomizable-encryption|rerandomizable encryption]], then conditioned on $c \gets \Enc(\pk, m)$ the rerandomized ciphertext is a fresh encryption independent of $c$, so the scheme is [[rerandomizable-encryption#statistical-rerandomization-of-honest-ciphertexts|statistically rerandomizable]] with statistical distance $0$ — folklore.
