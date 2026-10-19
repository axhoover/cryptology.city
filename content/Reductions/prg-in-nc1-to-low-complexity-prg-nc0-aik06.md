---
type: reduction
status: draft
title: PRG in NC1 ⇒ PRG in NC0 (AIK)
aliases:
  - Cryptography in NC0
id: red-prg-in-nc1-to-low-complexity-prg-nc0-aik06
kind: implication
hypotheses: [prg-in-nc1]
conclusion: low-complexity-prg-nc0
class: fully-black-box
model: standard
source:
  - "[[AIK06 - Cryptography in NC0|AIK06]]"
security-loss: "none: a distinguisher for the encoding is a distinguisher for G after applying the simulator"
rationale:
  class: "The compiled generator is a fixed randomized encoding of G computed from G's circuit, and the reduction composes any distinguisher, used only as an oracle, with the encoding's simulator."
---

# PRG in NC1 ⇒ PRG in NC0 (AIK)

## Statement

Every [[pseudorandom-generator|PRG]] $G$ computable in $\mathrm{NC}^1$, and more generally in $\oplus\mathrm{L}/\mathrm{poly}$, can be compiled into a [PRG in $\mathrm{NC}^0$](low-complexity-prg) in which each output bit depends on at most four input bits — [[AIK06 - Cryptography in NC0|AIK06]]. The compiled generator has a polynomially longer seed and the same additive stretch as $G$, so its stretch is sublinear in its seed length.

## Sketch

The compiled generator is a perfect randomized encoding $\hat{G}(x, r)$ of $G$ with locality four: there is an efficient simulator $\Sim$ with $\hat{G}(x, r) \equiv \Sim(G(x))$ for uniform $r$, and the encoding is balanced and stretch-preserving, so $\Sim$ maps a uniform input to a uniform output with the same additive stretch. Hence $\hat{G}(U) \equiv \Sim(G(U))$ is indistinguishable from $\Sim(U) \equiv U$ — [[AIK06 - Cryptography in NC0|AIK06]].

## Notes

- The same compiler applies to one-way functions, one-way permutations, encryption, signatures, commitments and collision-resistant hashing computable in $\mathrm{NC}^1$, and most number-theoretic and lattice assumptions give such primitives — [[AIK06 - Cryptography in NC0|AIK06]].
- The compiled generator's stretch is too small for the applications of polynomial-stretch local PRGs, such as [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|JLS21]]'s indistinguishability obfuscation, which assume a [polynomial-stretch PRG in $\mathrm{NC}^0$](low-complexity-prg#polynomial-stretch-prg-in-nc0) directly — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].
