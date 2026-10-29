---
type: primitive
status: draft
aliases:
  - GC
  - Garbled circuit
title: Garbled circuit
id: garbled-circuits
---

# Garbled circuit

A garbling scheme turns a Boolean circuit $f$ into a garbled circuit $F$, an encoding key that maps each input $x$ to a garbled input $X$, and decoding information $d$, so that evaluating $F$ on $X$ and decoding gives $f(x)$ while $(F, X, d)$ reveals nothing else about $x$. The syntax and security notions below are those of [[BHR12 - Foundations of Garbled Circuits|BHR12]].

## Syntax

A garbling scheme is a tuple of efficient algorithms $\calG = (\mathsf{Garble}, \mathsf{Encode}, \Eval, \Decode)$ for Boolean circuits $f : \bits^m \to \bits^k$:

- $\mathsf{Garble}(1^\secpar, f) \to (F, e, d)$, a randomized algorithm outputting a garbled circuit $F$, an encoding key $e$ and decoding information $d$.
- $\mathsf{Encode}(e, x) \to X$, a deterministic algorithm mapping $x \in \bits^m$ to a garbled input $X$.
- $\Eval(F, X) \to Y$, a deterministic algorithm outputting a garbled output $Y$.
- $\Decode(d, Y) \to y$, a deterministic algorithm outputting $y \in \bits^k$ or $\bot$.

The scheme is **projective**: the encoding key is a list of label pairs $e = (X_i^0, X_i^1)_{i \in [m]}$, and $\mathsf{Encode}(e, x) = (X_i^{x_i})_{i \in [m]}$, so the garbled input of $x$ consists of one label per input bit.

## Properties

### Correctness

$\calG$ is **correct** if for all $\secpar$, all circuits $f : \bits^m \to \bits^k$, all $x \in \bits^m$ and all $(F, e, d)$ output by $\mathsf{Garble}(1^\secpar, f)$,

$$
\Decode(d, \Eval(F, \mathsf{Encode}(e, x))) = f(x).
$$

### Privacy

The adversary chooses a circuit and an input; in world $0$ it receives the garbled circuit, the garbled input and the decoding information, and in world $1$ a simulator's output computed from $f$ and $f(x)$ alone.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prv}}_{\calG,\calA,\Sim}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $(f, x, \stA) \gets \calA(1^\secpar)$
\Comment{$f : \bits^m \to \bits^k$ a circuit, $x \in \bits^m$}
\State $(F, e, d) \gets \mathsf{Garble}(1^\secpar, f)$; $X := \mathsf{Encode}(e, x)$
\State $\mathit{out}_0 := (F, X, d)$
\State $\mathit{out}_1 \gets \Sim(1^\secpar, f, f(x))$
\State $b' \gets \calA(\stA, \mathit{out}_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A garbling scheme $\calG$ is **private** if there is an efficient $\Sim$ such that for all efficient $\calA$,

$$
\Adv^{\mathrm{prv}}_{\calG,\calA,\Sim}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prv}}_{\calG,\calA,\Sim}(\secpar) = 1\right] - 1\right|
$$

is negligible. A **garbled circuit** scheme here is a correct, projective and private garbling scheme.

# Variations

## Privacy relative to side information

BHR12 parameterize privacy by a side-information function $\Phi$: the simulator receives $\Phi(f)$ and $f(x)$ in place of $f$ and $f(x)$. With $\Phi(f)$ the topology of $f$, which omits the function each gate computes, the garbled circuit also hides $f$ beyond its topology — [[BHR12 - Foundations of Garbled Circuits|BHR12]]. A simulator for $\Phi$ computable from $f$ is a simulator for the notion above, applied to $\Phi(f)$ — standard.

## Obliviousness and authenticity

**Obliviousness** asks that $(F, X)$, without $d$, be simulatable from the side information alone, so that the evaluator learns nothing about $f(x)$; **authenticity** asks that no efficient adversary given $(F, X)$ output a garbled output $Y \ne \Eval(F, X)$ with $\Decode(d, Y) \ne \bot$. They serve private and verifiable outsourcing of computation — [[BHR12 - Foundations of Garbled Circuits|BHR12]].

# Other results

- Any PRF gives a private projective garbling scheme ([[prf-to-garbled-circuits-bhr12|PRF ⇒ garbled circuits]]) — [[BHR12 - Foundations of Garbled Circuits|BHR12]]; its garbled table has four ciphertexts per gate — standard.
- XOR gates need no garbled table and no cryptographic operation (free XOR), in the random oracle model — [[KS08 - Improved Garbled Circuit Free XOR Gates and Applications|KS08]]. With half gates, AND gates take two ciphertexts and XOR gates stay free, which is optimal among linear garbling schemes, a class that covers all known practical techniques — [[ZRE15 - Two Halves Make a Whole Reducing Data Transfer in Garbled Circuits Using Half Gates|ZRE15]]. Slicing wire labels in half brings AND gates to $1.5\secpar + 5$ bits with free XOR, from a circular correlation-robust hash — [[RR21 - Three Halves Make a Whole Beating the Half-Gates Lower Bound for Garbled Circuits|RR21]].
- A garbling scheme and OT give two-party computation secure against semi-honest adversaries ([[gc-and-ot-to-two-party-computation-2pc|Yao's protocol]]) — [[Yao86 - How to Generate and Exchange Secrets|Yao86]], [[LP09 - A Proof of Security of Yao's Protocol for Two-Party Computation|LP09]].

<!-- BEGIN GENERATED participates-in 01e060b0466c -->

## Participates in

**Builds on Garbled circuit**

- [[gc-and-ot-to-two-party-computation-2pc|GC + OT ⇒ Semi-honest 2PC (Yao)]]

**Produces Garbled circuit**

- [[prf-to-garbled-circuits-bhr12|PRF ⇒ Garbled circuits (BHR)]]

<!-- END GENERATED participates-in -->
