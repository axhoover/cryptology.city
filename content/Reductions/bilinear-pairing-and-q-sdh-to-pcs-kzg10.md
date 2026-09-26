---
type: reduction
status: draft
title: "Bilinear pairing + q-SDH ⇒ PCS"
aliases: []
id: red-bilinear-pairing-and-q-sdh-to-pcs-kzg10
kind: implication
hypotheses: [bilinear-pairing, q-strong-diffie-hellman]
conclusion: pcs
class: unstated
model: crs
source:
  - "[[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]"
security-loss: ""
---

# Bilinear pairing + q-SDH ⇒ PCS

[[pairings|Bilinear pairing]] together with [[q-strong-diffie-hellman|q-SDH]] implies [[polynomial-commitment|PCS]], given a trusted structured reference string.

## Statement

In a [[pairings|bilinear group]] with a trusted structured reference string $(g, g^\tau, \ldots, g^{\tau^d})$, the KZG scheme is a [[polynomial-commitment|polynomial commitment]] for polynomials of degree at most $d$: commitments and opening proofs are single group elements, verification is two pairings, and evaluation binding holds under [[q-strong-diffie-hellman|q-SDH]] with $q = d$ [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]].

## Sketch

Commit to $f$ as $C = g^{f(\tau)}$, computable from the SRS without $\tau$; the opening at $z$ is $\pi = g^{\psi(\tau)}$ for the quotient $\psi(X) = (f(X) - y)/(X - z)$, and the verifier checks $e(C/g^y, g) = e(\pi, g^\tau/g^z)$. Two accepting openings $(y, \pi)$, $(y', \pi')$ at the same $z$ with $y \neq y'$ give $(\pi/\pi')^{1/(y'-y)} = g^{1/(\tau - z)}$, a $q$-SDH solution with $c = -z$.

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

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: crs`: The scheme needs a trusted structured reference string $(g, g^\tau, \ldots, g^{\tau^d})$ whose trapdoor $\tau$ is discarded.

- The bilinear-group requirement is a structural hypothesis: `[[pairings]]` is a Glossary page, not an assumption page.
