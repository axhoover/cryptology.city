---
type: reduction
status: draft
title: Prime-order DDH ⇒ Matrix DH
aliases: []
id: red-prime-order-ddh-to-matrix-dh-ehk13
kind: implication
hypotheses: [prime-order-ddh]
conclusion: matrix-dh
class: fully-black-box
model: standard
source: "[[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]]"
security-loss: "none"
rationale:
  class: "The construction is the identity on group generators, and the reduction passes the MDDH distinguisher's input to it as a DDH instance, unchanged."
---

# Prime-order DDH ⇒ Matrix DH

## Statement

If [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH is hard in prime-order groups]] for $\GrGen$, then $\calL_1$-[[decisional-diffie-hellman#matrix-diffie-hellman|MDDH]] is hard for $\GrGen$, with the same advantage, where the matrix distribution $\calL_1 = \calD_{2,1}$ outputs $\mathbf{A} = (1, a)^{\top}$ for $a \getsr \ZZ_p$; DDH is the $\calL_1$-MDDH assumption — [[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]].

## Sketch

$\mathbf{A}$ has rank $1$. The MDDH input $(g^{\mathbf{A}}, g^{\mathbf{z}_b}) = ((g, g^a), g^{\mathbf{z}_b})$ is $(g, g^a, g^w, g^{aw})$ for $b = 0$ and $(g, g^a, g^{u_1}, g^{u_2})$ for $b = 1$, with $a, w, u_1, u_2$ independent and uniform in $\ZZ_p$: the two DDH distributions with $x = a$ and $y = w$.
