---
type: reduction
status: draft
title: QR ⇒ cPIR (Kushilevitz–Ostrovsky)
aliases: []
id: red-qr-to-cpir-ko97
kind: implication
hypotheses: [qr]
conclusion: one-round-sublinear-cpir
class: fully-black-box
model: standard
source:
  - "[[KO97 - Replication is not needed single database, computationally-private information retrieval|KO97]]"
security-loss: "a factor 2 at any recursion depth: setting every non-residue of the query to x r_j^2 for the QR challenge x makes each index's query indistinguishable from the all-residue query"
rationale:
  class: "The protocol uses only arithmetic modulo the client's modulus, and the privacy reduction runs any server distinguisher only as an oracle on queries built from its quadratic-residuosity challenges."
---

# QR ⇒ cPIR (Kushilevitz–Ostrovsky)

## Statement

If [[quadratic-residuosity|QR]] is hard, then for every constant $\varepsilon > 0$ there is a perfectly correct, one-round [[single-server-private-information-retrieval|single-server PIR]] scheme for $n$-bit databases with communication $O(n^{\varepsilon})$, the hidden factor depending on $\secpar$ and $\varepsilon$, so a [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] one — [[KO97 - Replication is not needed single database, computationally-private information retrieval|KO97]]. The basic scheme has communication $O(\sqrt{n}\,\secpar)$.

## Sketch

View the database as a $\sqrt{n} \times \sqrt{n}$ matrix and let the client want entry $(a, b)$. The client sends a modulus $N$ and $y_1, \ldots, y_{\sqrt n}$ of Jacobi symbol $+1$, with $y_b$ a non-residue and the others residues. For each row $r$ the server returns $z_r := \prod_j w_{r,j}$, where $w_{r,j} := y_j^2$ if $D[r, j] = 0$ and $w_{r,j} := y_j$ otherwise, so $z_a$ is a residue iff $D[a, b] = 0$, which the client decides with the factorization of $N$. Hiding which $y_j$ is the non-residue is the QR assumption; applying the scheme recursively to the server's answer, read as a smaller database, lowers the communication to $O(n^{\varepsilon})$ — [[KO97 - Replication is not needed single database, computationally-private information retrieval|KO97]].

## Notes

- Efficiency: the server performs $\Theta(n)$ modular multiplications; every single-server PIR scheme without preprocessing must touch every database bit, since an untouched bit reveals that it was not queried — standard.
- Polylogarithmic communication is achieved under [[hiding-to-cpir|Φ-hiding]] — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]] — and, through trapdoor hash functions, under QR and DDH ([[tdh-to-cpir-amr25|TDH ⇒ cPIR]]) — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]. With Paillier encryption the server's reply alone can be made logarithmic ([[dcr-to-cpir-cha04|DCR ⇒ One-round sublinear cPIR]]) — [[Cha04 - Single Database Private Information Retrieval with Logarithmic Communication|Cha04]].
