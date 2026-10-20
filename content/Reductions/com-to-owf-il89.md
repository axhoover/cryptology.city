---
type: reduction
status: draft
title: COM ⇒ OWF
aliases: []
id: red-com-to-owf-il89
kind: implication
hypotheses: [com]
conclusion: owf
class: fully-black-box
model: standard
source:
  - "[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]"
security-loss: "polynomial"
rationale:
  class: "The one-way function evaluates the committer's algorithm only as an oracle, and the attack on hiding or binding runs a distributional inverter for that function, obtained from any inverter by IL89's transformation, only as an oracle."
---

# COM ⇒ OWF

## Statement

If a [[commitment-scheme|bit-commitment scheme]] that is both hiding and binding exists, possibly interactive and with either property computational, then a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

## Notes

- The proof distributionally inverts functions built from the committer's algorithm, as in [[ske-to-owf-il89|SKE ⇒ OWF]] — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
- Conversely, one-way functions give statistically binding commitments, through [[owf-to-prg-hill99|OWF ⇒ PRG]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]] — and [[prg-to-com-naor91|PRG ⇒ COM]] — [[Naor91 - Bit commitment using pseudorandomness|Naor91]], and statistically hiding ones ([[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ statistically hiding COM]]) — [[HR07 - Statistically-hiding commitment from any one-way function|HR07]].
- No commitment scheme is both statistically hiding and statistically binding, so one of the two properties is always computational — folklore.
