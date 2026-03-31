---
aliases:
  - Arithmetization
  - R1CS
  - QAP
  - PLONKish
  - AIR
title: Arithmetization
---

# Arithmetization

**Arithmetization** is the process of converting a computational statement — a circuit or program — into a system of polynomial equations over a finite field $\FF_p$. This translation is the first step in constructing [[succinct-argument|SNARKs]] and other proof systems: once a computation is expressed as polynomial constraints, a [[polynomial-commitment|polynomial commitment scheme]] can be used to verify those constraints succinctly.

The core idea is that **multiplication** is the hard operation to check algebraically, and gates with fan-in 2 (AND gates for Boolean circuits, multiplication gates for arithmetic circuits) generate the constraints.

## Constraint systems

### R1CS (Rank-1 Constraint System)

An R1CS encodes a computation as a list of rank-1 constraints over $\FF_p$:
$$\mathbf{a}_i \cdot \mathbf{z} \cdot \mathbf{b}_i \cdot \mathbf{z} = \mathbf{c}_i \cdot \mathbf{z} \quad \forall i \in [m],$$
where $\mathbf{z} = (1, x_1, \ldots, x_\ell, w_1, \ldots, w_k)$ is the **witness vector** concatenating the instance and private witness, and $\mathbf{a}_i, \mathbf{b}_i, \mathbf{c}_i \in \FF_p^{n}$ are public coefficient vectors. Each constraint corresponds to one multiplication gate: left input $\cdot$ right input $=$ output.

R1CS is the arithmetization underlying Groth16 and the original Pinocchio protocol.

### QAP (Quadratic Arithmetic Program)

A QAP encodes an R1CS instance into a polynomial divisibility check. Given an R1CS with $m$ constraints and evaluation points $\omega_1, \ldots, \omega_m \in \FF_p$, define the **target polynomial** $t(X) = \prod_{i=1}^m (X - \omega_i)$ and encode the coefficient vectors as polynomials $A(X), B(X), C(X)$ via interpolation. The witness $\mathbf{z}$ satisfies all constraints if and only if:
$$t(X) \mid A(X) \cdot B(X) - C(X).$$

This divisibility check can be verified at a single random point using the Schwartz-Zippel lemma, which is how SNARKs like Groth16 reduce circuit satisfiability to a pairing check.

### PLONKish

PLONKish arithmetization generalizes R1CS by allowing **custom gates** (not just multiplication) and a **permutation argument** to enforce that values are copied correctly across the circuit. This gives more flexibility — for example, a single "range check" gate can replace thousands of multiplication gates.

PLONKish is used in Plonk, Halo2, and most modern universal SNARKs. The system consists of:

- **Gate constraints**: $q_L \cdot a + q_R \cdot b + q_M \cdot a \cdot b + q_O \cdot c + q_C = 0$ per row (plus optional custom gate selectors)
- **Copy constraints**: a permutation argument ensures that cells that should be equal are equal

### AIR (Algebraic Intermediate Representation)

AIR encodes a computation as a constraint on consecutive rows of an execution trace: for each step $i$, a polynomial relation $P(\mathbf{w}_i, \mathbf{w}_{i+1}) = 0$ holds. AIR is the arithmetization underlying [[succinct-argument|STARKs]] — the FRI protocol can then verify the AIR constraints via a Reed-Solomon proximity test — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]].

## Results

- Every NP statement can be arithmetized as R1CS in polynomial size — standard
- QAP enables the Pinocchio protocol and Groth16 — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]
- PLONKish arithmetization enables universal SNARKs with a single trusted setup for all circuits of bounded size — standard
- AIR + FRI = STARK; the FRI protocol achieves transparent verification of AIR constraints — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]
- For Boolean circuits, each AND gate becomes one R1CS constraint ($a \cdot b = c$ with $a, b, c \in \{0,1\}$); NOT and XOR are linear and free — standard
