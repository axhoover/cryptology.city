---
type: reduction
status: draft
title: SD ⇒ OWF
aliases: []
id: red-syndrome-decoding-to-owf
kind: implication
hypotheses: [syndrome-decoding]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "additive $2^{-\\secpar}$, the statistical distance of $\\theta(r)$ from uniform on $S_{n,w}$"
rationale:
  class: "One fixed function uses only the SD instance sampler, and the reduction forwards its challenge to any inverter as an oracle."
---

# SD ⇒ OWF

## Statement

Let $L = \lceil \log_2 \binom{n}{w} \rceil + \secpar$, and let $\theta : \bits^L \to S_{n,w}$ map $r$ to the weight-$w$ vector of rank $r \bmod \binom{n}{w}$ in a fixed efficient ordering of $S_{n,w}$, so that $\theta(r)$ for uniform $r$ is within statistical distance $2^{-\secpar}$ of uniform on $S_{n,w}$. The function $(\mathbf{H}, r) \mapsto (\mathbf{H}, \mathbf{H}\,\theta(r))$ is a [[hash-function#preimage-resistance-one-wayness|one-way function]] exactly when [[syndrome-decoding|SD]] is hard for $(n, k, w)$: a preimage of $(\mathbf{H}, \mathbf{y})$ is $(\mathbf{H}, r')$ with $\theta(r') \in S_{n,w}$ a solution of $\mathbf{H}\mathbf{e}' = \mathbf{y}$, and ranking any solution $\mathbf{e}'$ gives such an $r'$ — folklore.
