---
type: reduction
status: draft
title: "Bilinear pairing + q-SDH ⇒ KZG (Kate-Zaverucha-Goldberg)"
aliases: []
id: red-bilinear-pairing-and-q-sdh-to-kzg-kate-zaverucha-goldberg-kzg10
kind: implication
hypotheses: [bilinear-pairing, q-strong-diffie-hellman]
conclusion: kzg-polynomial-commitment
class: fully-black-box
model: crs
source:
  - "[[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]"
security-loss: ""
---

# Bilinear pairing + q-SDH ⇒ KZG (Kate-Zaverucha-Goldberg)

[[pairings|Bilinear pairing]] together with [[q-strong-diffie-hellman|q-SDH]] implies [[polynomial-commitment#kzg-kate-zaverucha-goldberg|KZG (Kate-Zaverucha-Goldberg)]].

## Statement

Given a [[pairings|bilinear pairing]] on a group of prime order $p$ and a structured reference string $(g, g^\tau, \ldots, g^{\tau^t})$ with $\tau$ secret, the [[polynomial-commitment#kzg-kate-zaverucha-goldberg|KZG]] scheme commits to any $f \in \FF_p[X]$ of degree at most $t$ with one group element and opens any evaluation $f(z) = y$ with one group element; evaluation binding holds under [[q-strong-diffie-hellman|$t$-SDH]], and the Pedersen variant is unconditionally hiding — [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]].

## Sketch

Commit to $f$ as $C = g^{f(\tau)}$, computed from the SRS; to open at $z$, publish $w = g^{\psi(\tau)}$ for the quotient $\psi(X) = (f(X) - f(z))/(X - z)$, and verify $e(C/g^{y}, g) = e(w, g^{\tau}/g^{z})$. Two accepting openings of $C$ at $z$ with values $y \ne y'$ give $(w/w')^{1/(y'-y)} = g^{1/(\tau - z)}$, a $t$-SDH solution.

## Notes

`class: fully-black-box`: One fixed construction that uses the bilinear group only through group operations and the pairing, and one fixed reduction that runs an evaluation-binding adversary once as an oracle and computes a $t$-SDH solution from its two openings (§ Sketch). With an assumption as hypothesis, black-boxness refers to the treatment of the adversary; this is the RTV04 fully-black-box shape.

`model: crs`: A trusted setup produces the structured reference string $(g, g^\tau, \ldots, g^{\tau^t})$ with $\tau$ secret.
