---
type: reduction
status: draft
title: "Linear secret sharing schemes (LSSS) ⇔ MSP"
aliases: []
id: red-linear-secret-sharing-schemes-lsss-to-msp
kind: equivalence
hypotheses: [linear-secret-sharing-scheme]
conclusion: monotone-span-program
class: free
model: standard
source:
  - "[[KW93 - On Span Programs|KW93]]"
security-loss: ""
---

# Linear secret sharing schemes (LSSS) ⇔ MSP

[[secret-sharing#linear-secret-sharing-schemes-lsss|Linear secret sharing schemes (LSSS)]] are equivalent to [[monotone-span-program|MSP]].

## Statement

A [[secret-sharing#linear-secret-sharing-schemes-lsss|linear secret-sharing scheme]] over a finite field $\FF$ — every share a linear function of the secret and the dealer's randomness — is equivalent to a [[monotone-span-program|monotone span program]] over $\FF$: an MSP of size $m$ computing an access structure $\Gamma$ yields an LSSS for $\Gamma$ with total share size $m$ field elements, and every LSSS for $\Gamma$ induces an MSP of the same size computing $\Gamma$ [[KW93 - On Span Programs|KW93]], [[Bei96 - Secure Schemes for Secret Sharing and Key Distribution|Bei96]].

## Sketch

Given an MSP $(M, \rho, \mathbf{e})$ with rows labelled by parties, the dealer samples $\mathbf{r}$ uniformly subject to $\langle \mathbf{e}, \mathbf{r} \rangle = s$ and gives each party the inner products of its rows with $\mathbf{r}$. A qualified set has $\mathbf{e}$ in the span of its rows and recovers $s$ by that linear combination; an unqualified set's shares are independent of $s$. Conversely, the matrix of the linear map from $(s, \text{randomness})$ to shares, with target vector selecting $s$, is an MSP for the scheme's access structure.

## Notes

`class: free`: unconditional linear-algebraic correspondence, with no assumption or adversary to treat as an oracle; `free` is this repo's convention for proven unconditional results.

- monotone-span-program exists only as an unlisted glossary stub with a TODO definition; linear-secret-sharing-scheme resolves through secret-sharing.md's variants map.
- The clause 'MSPs characterize the access structures realizable by linear schemes' is the corollary of this equivalence, not a separate claim.
