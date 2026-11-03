---
type: reduction
status: draft
title: "SD + Goppa code indistinguishability ⇒ One-wayness of McEliece encryption"
aliases: []
id: red-syndrome-decoding-and-goppa-code-indistinguishability-to-mceliece-ow-cpa
kind: implication
hypotheses: [syndrome-decoding, goppa-code-indistinguishability]
conclusion: mceliece-ow-cpa
class: fully-black-box
model: standard
source: folklore
security-loss: "additive: the Goppa-distinguishing advantage plus the decoding advantage plus at most $2^{-k} + 2^{k-n}$ for rank-deficient matrices"
rationale:
  class: "The distinguisher runs the inverter once as an oracle on a public key that is either a scrambled Goppa generator matrix or uniform, and the decoder runs it once on a generator matrix and ciphertext computed from the syndrome instance."
---

# SD + Goppa code indistinguishability ⇒ One-wayness of McEliece encryption

## Statement

Let $k$ be the dimension of the binary Goppa codes of length $n$ and degree $t$ over $\FF_{2^m}$ used by McEliece encryption — [[McE78 - A Public-Key Cryptosystem Based on Algebraic Coding Theory|McE78]]. If [[syndrome-decoding#goppa-code-indistinguishability|Goppa codes are indistinguishable]] for $(n, m, t)$ and [[syndrome-decoding|syndrome decoding]] is hard for $(n, k, t)$, then [[syndrome-decoding#one-wayness-of-mceliece-encryption|McEliece encryption is one-way]] for $(n, m, t)$: for all efficient $\calA$ there are efficient $\calB$ and $\calC$ with

$$
\Adv^{\mathrm{mce\text{-}ow}}_{n,m,t,\calA}(\secpar) \le \Adv^{\mathrm{goppa}}_{n,m,t,\calB}(\secpar) + \Adv^{\mathrm{sd}}_{n,k,t,\calC}(\secpar) + 2^{-k} + 2^{k-n}
$$

— folklore.

## Sketch

$\calB$, given $\hat{\mathbf{G}}_b$, encrypts a uniform $\mathbf{m}$ under it and outputs $0$ iff $\calA$ returns $\mathbf{m}$, so $\calA$'s success probabilities on a scrambled Goppa key and on a uniform matrix differ by at most $\Adv^{\mathrm{goppa}}$. $\calC$, given $(\mathbf{H}, \mathbf{y})$, computes a uniformly random basis $\mathbf{G}$ of $\ker \mathbf{H}$, so that $\mathbf{G}$ is distributed as a uniform full-rank $k \times n$ matrix, and some $\mathbf{z}$ with $\mathbf{H}\mathbf{z} = \mathbf{y}$, runs $\calA$ on $(\mathbf{G}, \mathbf{z} + \mathbf{m}'\mathbf{G})$ for uniform $\mathbf{m}'$, which is a uniform-key encryption of a uniform message with error $\mathbf{e}$, and outputs $\mathbf{z} + \mathbf{m}'\mathbf{G} + \hat{\mathbf{m}}\mathbf{G}$ for $\calA$'s answer $\hat{\mathbf{m}}$; this is $\mathbf{e}$ whenever $\calA$ succeeds. The term $2^{-k} + 2^{k-n}$ bounds the probability that $\mathbf{H}$ or the uniform $k \times n$ matrix is rank-deficient.

## Notes

- Plain McEliece encryption is not IND-CPA, since $\mathbf{c} + \mathbf{m}_0\hat{\mathbf{G}}$ has weight $t$ exactly when $\mathbf{c}$ encrypts $\mathbf{m}_0$ — standard. With the plaintext padded by random bits it is IND-CPA under Goppa code indistinguishability and the pseudorandomness that LPN implies — [[NIKM08 - Semantic Security for the McEliece Cryptosystem without Random Oracles|NIKM08]].
- At sufficiently high rate Goppa codes are distinguishable in polynomial time, so the theorem says nothing there — [[FGO+13 - A Distinguisher for High-Rate McEliece Cryptosystems|FGO+13]].
- Niederreiter's dual scheme — [[Nie86 - Knapsack-Type Cryptosystems and Algebraic Coding Theory|Nie86]] — is one-way under the same two hypotheses, by the same hybrid applied to its parity-check public key, which is efficiently computable from a generator matrix of the same code — folklore.
