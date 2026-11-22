---
type: reduction
status: draft
title: "Normal-form LWE ⇒ Decision LWE"
aliases: []
id: red-normal-form-lwe-to-decision-lwe
kind: implication
hypotheses: [normal-form-lwe]
conclusion: decision-lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The reduction shifts each sample by a uniform multiple of its matrix and runs any uniform-secret distinguisher once as an oracle on the result, for every distinguisher."
---

# Normal-form LWE ⇒ Decision LWE

## Statement

Let $q \ge 2$, $\chi$ a distribution on $\ZZ_q$ and $n, m \ge 1$. For every distinguisher $\calA$ against [[learning-with-errors#decision-lwe|decision LWE]] with parameters $(n, q, \chi, m)$, the distinguisher $\calB(1^\secpar, \mathbf{A}, \mathbf{b}) := \calA(1^\secpar, \mathbf{A}, \mathbf{b} + \mathbf{A}\mathbf{t})$ for $\mathbf{t} \getsr \ZZ_q^n$ against [[learning-with-errors#normal-form-lwe|normal-form LWE]] with the same parameters has $\Adv^{\mathrm{nflwe}}_{n,q,\chi,m,\calB}(\secpar) = \Adv^{\text{lwe}}_{n,q,\chi,m,\calA}(\secpar)$ — folklore.

Hence normal-form LWE gives decision LWE at the same dimension $n$: take $c = 1$, $\alpha = 1/n$ and $q$ the least prime greater than $2n^{1.5}$, which is at most $4n^{1.5}$ by Bertrand's postulate and is found in time $\poly(n)$; then $\alpha q \ge 2\sqrt{n}$, $\alpha \le n^{-1}$ and $q \le \poly(n)$, and every $m = \poly(\secpar)$ is $\poly(n)$ since $n \ge \secpar^{c_0}$ — standard.

## Sketch

For $\mathbf{b} = \mathbf{A}\mathbf{s} + \mathbf{e}$ with $\mathbf{s} \gets \chi^n$, $\mathbf{b} + \mathbf{A}\mathbf{t} = \mathbf{A}(\mathbf{s} + \mathbf{t}) + \mathbf{e}$, and $\mathbf{s} + \mathbf{t}$ is uniform on $\ZZ_q^n$ and independent of $(\mathbf{A}, \mathbf{e})$; for uniform $\mathbf{b}$ independent of $\mathbf{A}$, $\mathbf{b} + \mathbf{A}\mathbf{t}$ is uniform and independent of $\mathbf{A}$. So $\calA$ sees exactly its own game in each world.

## Notes

- The map $(\mathbf{a}, b) \mapsto (\mathbf{a}, b + \langle \mathbf{a}, \mathbf{t} \rangle)$ is the random self-reduction that turns a secret $\mathbf{s}$ into $\mathbf{s} + \mathbf{t}$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (arXiv v1, Lemma 4.1); with it, LWE with any secret distribution reduces to LWE with uniform secret — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Section 2.3).
- For prime $q$ the converse holds: normal-form LWE is as hard as LWE with uniform secret — [[ACPS09 - Fast Cryptographic Primitives and Circular-Secure Encryption Based on Hard Learning Problems|ACPS09]], as credited by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Section 2.3). A change of variables on $n$ extra samples loses at most a factor $2$ in advantage for $q \ge 3$ ([[polynomial-ratio-lwe-to-normal-form-lwe-acps09|LWE with polynomial ratio ⇒ Normal-form LWE]]) — standard.
