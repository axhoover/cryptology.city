---
type: reduction
status: draft
title: "Random OT ⇒ OT"
aliases: []
id: red-random-ot-to-ot
kind: implication
hypotheses: [random-ot]
conclusion: ot
class: fully-black-box
model: standard
source:
  - "[[Bea95 - Precomputing Oblivious Transfer|Bea95]]"
security-loss: "none (perfect security)"
---

# Random OT ⇒ OT

[[oblivious-transfer#random-ot|Random OT]] implies [[oblivious-transfer|OT]].

## Statement

A [[oblivious-transfer#random-ot|random OT]] correlation — the sender holds uniform $(r_0, r_1)$, the receiver a uniform bit $c'$ and $r_{c'}$ — yields perfectly secure chosen-input [[oblivious-transfer|OT]] with two messages: the receiver sends $e = c \oplus c'$, the sender replies $(y_0, y_1) = (x_0 \oplus r_e,\, x_1 \oplus r_{1 \oplus e})$, and the receiver outputs $y_c \oplus r_{c'}$ — [[Bea95 - Precomputing Oblivious Transfer|Bea95]].

## Sketch

$e$ one-time-pads the real choice bit with the random one, and each $x_j$ is one-time-padded with the random-OT message $r_{j \oplus e}$, which the receiver holds exactly when $j = c$ (since $c \oplus e = c'$); $e$ is uniform independently of $c$, and $r_{1 \oplus c'}$ stays uniform given the receiver's view.

## Notes

`class: fully-black-box`: the protocol uses the random-OT correlation once as a black box, and perfect security gives a straight-line simulator that uses the adversary only as a black box.
