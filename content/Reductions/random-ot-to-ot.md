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
security-loss: "the random OT's correctness error, and a factor $2$ in each privacy advantage (left-or-right OT games against real-or-random random-OT games); none beyond them"
rationale:
  class: "The protocol runs the random OT once as a black box, and each privacy reduction runs the OT adversary only as an oracle against the matching random-OT game."
---

# Random OT ⇒ OT

## Statement

Running a [[oblivious-transfer#random-ot|random OT]] and then Beaver's derandomization yields chosen-input [[oblivious-transfer|OT]] on $\ell$-bit strings. With the sender holding $(r_0, r_1)$ and the receiver $c'$ and $r_{c'}$ from the random OT, the receiver sends $e = c \oplus c'$, the sender replies $(y_0, y_1) = (x_0 \oplus r_e,\, x_1 \oplus r_{1 \oplus e})$, and the receiver outputs $y_c \oplus r_{c'}$. Given the random-OT correlation, with $(r_0, r_1)$ and $c'$ uniform, the derandomization is perfectly secure — [[Bea95 - Precomputing Oblivious Transfer|Bea95]]. With a random-OT protocol in place of the correlation, the composed protocol's correctness error is at most the random OT's, and each of its privacy advantages is at most twice the matching random-OT advantage — standard.

## Sketch

The receiver's message $e = c \oplus c'$ is uniform independently of $c$, since $c'$ is uniform; for receiver privacy, the reduction receives the sender's random-OT view and a bit $\beta$, sends $e = c \oplus \beta$, and $e$ is independent of $c$ when $\beta$ is uniform. Each $x_j$ is one-time-padded with $r_{j \oplus e}$, which the receiver holds exactly when $j = c$ (since $c \oplus e = c'$); for sender privacy, the reduction receives the receiver's random-OT view and a string $w$ and pads $x_{1-c}$ with $w$, which hides it when $w$ is uniform.

## Notes

- Efficiency: the online phase sends one bit from the receiver and two strings from the sender and computes only XORs, so the public-key cost of OT moves entirely to an input-independent offline phase — [[Bea95 - Precomputing Oblivious Transfer|Bea95]].
