---
type: reduction
status: draft
title: LWE ⇒ SIS
aliases: []
id: red-lwe-to-sis
kind: implication
hypotheses: [lwe]
conclusion: sis
class: fully-black-box
model: standard
source: folklore
security-loss: "constant: an SIS solver with success ε gives an LWE distinguisher with advantage at least 0.4ε − O(ε/q)"
rationale:
  class: "The reduction hands the transposed LWE matrix to any SIS solver, run once as an oracle, and tests the inner product of its answer with the LWE vector."
---

# LWE ⇒ SIS

## Statement

Let $q$ be prime, let $\chi$ be the discrete Gaussian over $\ZZ$ of width $\alpha q$, and let $\beta \le 1/(4\alpha)$ with $\beta < q$. If decision [[learning-with-errors|LWE]] is hard for $(n, q, \chi, m)$, then [[shortest-integer-solution|SIS]] is hard for $(n, m, q, \beta)$ — folklore.

## Sketch

Given $(\mathbf{A}, \mathbf{u})$ with $\mathbf{A} \in \ZZ_q^{m \times n}$, run the SIS solver on the uniform matrix $\mathbf{A}^{\top} \in \ZZ_q^{n \times m}$ to get $\mathbf{z} \ne \mathbf{0}$ with $\mathbf{A}^{\top}\mathbf{z} \equiv \mathbf{0}$ and $\|\mathbf{z}\| \le \beta$, and output $1$ iff $\langle \mathbf{z}, \mathbf{u} \rangle \bmod q$ lies in $(-q/4, q/4)$. For $\mathbf{u} = \mathbf{A}\mathbf{s} + \mathbf{e}$, $\langle \mathbf{z}, \mathbf{u} \rangle \equiv \langle \mathbf{z}, \mathbf{e} \rangle$, which is subgaussian with parameter $\|\mathbf{z}\| \alpha q \le q/4$ and so lies in $(-q/4, q/4)$ except with probability $2e^{-\pi} < 0.1$. For uniform $\mathbf{u}$, $\langle \mathbf{z}, \mathbf{u} \rangle$ is uniform modulo the prime $q$, since $0 < \|\mathbf{z}\| < q$ makes $\mathbf{z} \not\equiv \mathbf{0}$, and lands in the interval with probability $1/2 + O(1/q)$ — standard.

## Notes

- The reduction is the dual attack on LWE: a short vector in the kernel of $\mathbf{A}^{\top}$ distinguishes LWE samples — standard.
- With [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] and [[sis-to-ds|SIS ⇒ DS]], LWE yields collision-resistant hashing and signatures — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]], [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].
