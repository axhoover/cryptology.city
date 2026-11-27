---
type: glossary
status: draft
aliases:
  - Arithmetization
  - R1CS
  - QAP
  - PLONKish
  - AIR
title: Arithmetization
id: arithmetization
---

# Arithmetization

**Arithmetization** converts a computational statement — a circuit or program — into a system of polynomial equations over a finite field $\FF_p$. It is the first step in constructing [[succinct-argument|SNARKs]] and other proof systems: once a computation is expressed as polynomial constraints, a [[polynomial-commitment|polynomial commitment scheme]] can be used to verify those constraints succinctly ([[pcs-to-snark|Extractable PCS ⇒ SNARK]]).

## Constraint systems

### R1CS (Rank-1 Constraint System)

An R1CS encodes a computation as a list of rank-1 constraints over $\FF_p$:

$$
(\mathbf{a}_i \cdot \mathbf{z})\,(\mathbf{b}_i \cdot \mathbf{z}) = \mathbf{c}_i \cdot \mathbf{z} \quad \forall i \in [m],
$$

where $\mathbf{z} = (1, x_1, \ldots, x_\ell, w_1, \ldots, w_k)$ is the **witness vector** concatenating the instance and private witness, and $\mathbf{a}_i, \mathbf{b}_i, \mathbf{c}_i \in \FF_p^{n}$, with $n = 1 + \ell + k$, are public coefficient vectors. Each constraint corresponds to one multiplication gate (left input $\cdot$ right input $=$ output); additions and multiplications by constants are absorbed into the linear forms $\mathbf{a}_i \cdot \mathbf{z}$, $\mathbf{b}_i \cdot \mathbf{z}$ and $\mathbf{c}_i \cdot \mathbf{z}$ — standard.

R1CS, in its QAP form, is the arithmetization underlying Groth16 ([[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]) and the original Pinocchio protocol — [[PHGR13 - Pinocchio Nearly Practical Verifiable Computation|PHGR13]].

### QAP (Quadratic Arithmetic Program)

A QAP encodes an R1CS instance into a polynomial divisibility check. Given an R1CS with $m$ constraints and distinct evaluation points $\omega_1, \ldots, \omega_m \in \FF_p$, define the **target polynomial** $t(X) = \prod_{i=1}^m (X - \omega_i)$, interpolate for each coordinate $j \in [n]$ polynomials $A_j, B_j, C_j$ of degree $< m$ with $A_j(\omega_i) = a_{i,j}$, $B_j(\omega_i) = b_{i,j}$, $C_j(\omega_i) = c_{i,j}$, and set $A(X) = \sum_{j} z_j A_j(X)$, $B(X) = \sum_{j} z_j B_j(X)$, $C(X) = \sum_{j} z_j C_j(X)$. The witness $\mathbf{z}$ satisfies all constraints if and only if ([[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]], following [[GGPR13 - Quadratic Span Programs and Succinct NIZKs without PCPs|GGPR13]]):

$$
t(X) \mid A(X) \cdot B(X) - C(X).
$$

Given a quotient $h$ from the prover, the identity $A \cdot B - C = h \cdot t$ is checked at a single random point using the [[schwartz-zippel-lemma|Schwartz–Zippel lemma]]; Groth16 checks it at a secret point of the CRS with one pairing-product equation ([[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]).

### PLONKish

PLONKish arithmetization generalizes R1CS by allowing **custom gates** (not just multiplication) and a **permutation argument** to enforce that values are copied correctly across the circuit. For example, a single "range check" gate can replace thousands of multiplication gates.

PLONKish is used in Plonk ([[bilinear-pairing-and-q-dlog-to-universal-snark-gwc19|Bilinear pairing + q-DLOG ⇒ Universal SNARK (PLONK)]]), Halo2, and most modern universal SNARKs. Each row satisfies a **gate constraint** $q_L \cdot a + q_R \cdot b + q_M \cdot a \cdot b + q_O \cdot c + q_C = 0$ (plus optional custom gate selectors). **Copy constraints** equate designated cells, and a permutation argument enforces them — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].

### AIR (Algebraic Intermediate Representation)

AIR encodes a computation as constraints on an execution trace $\mathbf{w}_0, \ldots, \mathbf{w}_{T-1}$: transition constraints, polynomial relations $P(\mathbf{w}_i, \mathbf{w}_{i+1}) = 0$ that hold for each step $i$, and boundary constraints, which fix the values of given cells of the trace. AIR is the arithmetization underlying [[succinct-argument#stark|STARKs]]: the AIR constraints reduce to Reed–Solomon proximity claims, which the [[polynomial-commitment#fri-fast-reed-solomon-iop-of-proximity|FRI]] protocol tests ([[hash-function-to-snark-bbhr18|ROM ⇒ STARK]]) — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]].

## Results

- Every $\classNP$ statement can be arithmetized as R1CS in polynomial size — standard
- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- [[hash-function-to-snark-bbhr18|ROM ⇒ STARK]]
- For Boolean circuits, each AND gate becomes one R1CS constraint ($a \cdot b = c$ with $a, b, c \in \bits$), as does each XOR gate over $\FF_p$ with $p > 2$ ($2a \cdot b = a + b - c$); NOT is affine and free — standard
