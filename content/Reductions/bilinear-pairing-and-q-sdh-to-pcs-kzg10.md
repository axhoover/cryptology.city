---
type: reduction
status: draft
title: "Bilinear pairing + q-SDH ⇒ PCS"
aliases: []
id: red-bilinear-pairing-and-q-sdh-to-pcs-kzg10
kind: implication
hypotheses: [bilinear-pairing, q-strong-diffie-hellman]
conclusion: pcs
class: fully-black-box
model: crs
source:
  - "[[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]"
security-loss: ""
rationale:
  class: "The construction uses the bilinear group only through group operations and the pairing, and the reduction runs any evaluation-binding adversary once as an oracle and turns its two openings into a q-SDH solution."
  model: "The scheme needs a trusted structured reference string of powers of a secret exponent that is discarded after setup."
---

# Bilinear pairing + q-SDH ⇒ PCS

## Statement

In a [[pairings|bilinear group]] with a trusted structured reference string $(g, g^\tau, \ldots, g^{\tau^d})$, the KZG scheme is a [[polynomial-commitment|polynomial commitment]] for polynomials of degree at most $d$ whose commitments and opening proofs are single group elements and whose verification is two pairings. It is evaluation binding under [[q-strong-diffie-hellman|q-SDH]] with $q = d$, and its Pedersen variant is unconditionally hiding — [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]].

## Sketch

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{KZG polynomial commitment}
\begin{algorithmic}
\State $\Setup(1^\secpar, d)$: $\tau \getsr \ZZ_p^{*}$; $\mathsf{srs} \gets (g, g^{\tau}, \ldots, g^{\tau^{d}})$; discard $\tau$
\State $\mathsf{Commit}(\mathsf{srs}, f)$ for $f = \sum_{i=0}^{d} f_{i} X^{i}$: $C \gets \prod_{i=0}^{d} (g^{\tau^{i}})^{f_{i}} = g^{f(\tau)}$; $\mathsf{aux} \gets f$
\State $\Open(\mathsf{srs}, C, z, y, \mathsf{aux})$: $\psi(X) \gets (f(X) - y)/(X - z)$; $\pi \gets g^{\psi(\tau)}$
\State $\Vrfy(\mathsf{srs}, C, z, y, \pi) := [\, e(C/g^{y}, g) = e(\pi, g^{\tau}/g^{z}) \,]$
\end{algorithmic}
\end{algorithm}
```

Two accepting openings $(y, \pi)$, $(y', \pi')$ at one point $z$ with $y \neq y'$ give $(\pi/\pi')^{1/(y'-y)} = g^{1/(\tau - z)}$, a $q$-SDH solution with $c = -z$.
