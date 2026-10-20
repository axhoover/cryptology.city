---
type: reduction
status: draft
title: DCR ⇒ One-round sublinear cPIR
aliases: []
id: red-dcr-to-cpir-cha04
kind: implication
hypotheses: [dcr]
conclusion: one-round-sublinear-cpir
class: unstated
model: standard
source:
  - "[[Cha04 - Single Database Private Information Retrieval with Logarithmic Communication|Cha04]]"
security-loss: ""
---

# DCR ⇒ One-round sublinear cPIR

## Statement

If [[decisional-composite-residuosity|DCR]] is hard, there is a perfectly correct, one-round [[single-server-private-information-retrieval|single-server PIR]] scheme, built from Paillier's cryptosystem, whose server-side communication is logarithmic in the database size $n$ and whose client-side communication is $O(n^{\varepsilon} \log n)$ for a constant $\varepsilon < 1$, the factors polynomial in $\secpar$, so a [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] one — [[Cha04 - Single Database Private Information Retrieval with Logarithmic Communication|Cha04]].
