---
type: glossary
status: draft
aliases:
  - Lattice trapdoor
  - Lattice trapdoors
  - Gadget trapdoor
title: Lattice trapdoors
id: lattice-trapdoor
---

# Lattice trapdoors

A lattice trapdoor for a matrix $\mathbf{A} \in \ZZ_q^{n \times m}$ is secret information, classically a short basis of the lattice $\Lambda^\perp_q(\mathbf{A})$, that can be generated together with a nearly uniform $\mathbf{A}$ and lets its holder sample short preimages under $\mathbf{x} \mapsto \mathbf{A}\mathbf{x} \bmod q$ and invert the [[learning-with-errors|LWE]] function $(\mathbf{s}, \mathbf{e}) \mapsto \mathbf{A}^T\mathbf{s} + \mathbf{e}$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Definitions

For $\mathbf{A} \in \ZZ_q^{n \times m}$ and $\mathbf{u} \in \ZZ_q^n$, the $q$-ary lattices and coset are

$$
\Lambda^\perp_q(\mathbf{A}) := \{\mathbf{x} \in \ZZ^m : \mathbf{A}\mathbf{x} \equiv \mathbf{0}\}, \qquad \Lambda^{\mathbf{u}}_q(\mathbf{A}) := \{\mathbf{x} \in \ZZ^m : \mathbf{A}\mathbf{x} \equiv \mathbf{u}\}, \qquad \Lambda_q(\mathbf{A}) := \mathbf{A}^T \ZZ_q^n + q\ZZ^m,
$$

all modulo $q$, and $\Lambda_q(\mathbf{A}) = q \cdot \Lambda^\perp_q(\mathbf{A})^*$ — standard. Finding a short nonzero vector of $\Lambda^\perp_q(\mathbf{A})$ for uniform $\mathbf{A}$ is the [[shortest-integer-solution|SIS]] problem, and decoding a point near $\Lambda_q(\mathbf{A})$ is LWE. A **trapdoor** is a basis $\mathbf{T}$ of $\Lambda^\perp_q(\mathbf{A})$ whose vectors, or whose Gram–Schmidt vectors $\tilde{\mathbf{T}}$, are short; its quality is $\|\tilde{\mathbf{T}}\|$, the length of the longest Gram–Schmidt vector.

## Generation

There is an efficient algorithm that outputs $\mathbf{A}$ statistically close to uniform together with a short basis of $\Lambda^\perp_q(\mathbf{A})$ — [[Ajt99 - Generating Hard Instances of the Short Basis Problem|Ajt99]]. For $m = O(n \log q)$ the basis can have $\|\mathbf{T}\| = O(n \log q)$ and $\|\tilde{\mathbf{T}}\| = O(\sqrt{n \log q})$ — [[AP09 - Generating Shorter Bases for Hard Random Lattices|AP09]].

## Preimage sampling and inversion

Given a trapdoor $\mathbf{T}$, discrete Gaussian sampling over the coset $\Lambda^{\mathbf{u}}_q(\mathbf{A})$ at width $s \ge \|\tilde{\mathbf{T}}\| \cdot \omega(\sqrt{\log m})$ ([[discrete-gaussian|discrete Gaussians]]) outputs a short $\mathbf{x}$ with $\mathbf{A}\mathbf{x} \equiv \mathbf{u}$, distributed as $\mathbf{e} \gets D_{\ZZ^m,s}$ conditioned on $\mathbf{A}\mathbf{e} \equiv \mathbf{u}$, independently of $\mathbf{T}$. Since $\mathbf{A}\mathbf{e}$ is nearly uniform for such $\mathbf{e}$, sampling $\mathbf{u}$ then $\mathbf{x}$ is statistically close to sampling $\mathbf{e}$ then $\mathbf{u} = \mathbf{A}\mathbf{e}$: the map $\mathbf{e} \mapsto \mathbf{A}\mathbf{e}$ is a _preimage sampleable function_, collision-resistant under SIS — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]. The same trapdoor recovers $\mathbf{s}$ from $\mathbf{A}^T\mathbf{s} + \mathbf{e}$ when $\mathbf{e}$ is short enough relative to $q$ and $\mathbf{T}$, so LWE with a trapdoor is an injective trapdoor function — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

Preimage sampleable functions give hash-and-sign signatures, strongly unforgeable in the random-oracle model under SIS, and the identity-based encryption of [[lwe-to-ibe-gpv08|LWE ⇒ IBE (GPV)]], whose secret key for an identity is a short preimage of its hash — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Gadget trapdoors

Let $k = \lceil \log_2 q \rceil$, $\mathbf{g} = (1, 2, 4, \ldots, 2^{k-1}) \in \ZZ_q^k$ and $\mathbf{G} = \mathbf{I}_n \otimes \mathbf{g}^T \in \ZZ_q^{n \times nk}$, the _gadget matrix_. Inverting LWE and sampling short preimages for $\mathbf{G}$ is easy, essentially by binary decomposition, and $\Lambda^\perp_q(\mathbf{G})$ has a known basis $\mathbf{S}$ with $\|\tilde{\mathbf{S}}\| \le \sqrt 5$ — [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]]. A $\mathbf{G}$-trapdoor for $\mathbf{A}$ is a matrix $\mathbf{R}$ with small entries such that $\mathbf{A}\begin{bmatrix}\mathbf{R} \\ \mathbf{I}\end{bmatrix} = \mathbf{H}\mathbf{G}$ for an invertible $\mathbf{H}$; for instance $\mathbf{A} = [\bar{\mathbf{A}} \mid \mathbf{H}\mathbf{G} - \bar{\mathbf{A}}\mathbf{R}]$ for uniform $\bar{\mathbf{A}}$ and random short $\mathbf{R}$. With $\mathbf{R}$, sampling and inversion for $\mathbf{A}$ reduce to those for $\mathbf{G}$, with quality governed by the largest singular value of $\mathbf{R}$, which gives simpler, tighter and faster trapdoor algorithms than short bases — [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]].

## Delegation

A short basis of $\Lambda^\perp_q(\mathbf{A})$ extends to a basis of $\Lambda^\perp_q([\mathbf{A} \mid \mathbf{B}])$ of the same Gram–Schmidt quality for every $\mathbf{B}$, and can be randomized so that the new basis reveals nothing about the old one; this delegation gives [[lwe-to-hibe-selective-security-chkp10|hierarchical IBE from LWE]] — [[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]].
