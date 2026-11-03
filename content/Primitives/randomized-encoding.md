---
type: primitive
status: draft
aliases:
  - Randomized encoding
  - Randomizing polynomials
title: Randomized encoding
id: randomized-encoding
variants:
  perfect-randomized-encoding: "#perfect-randomized-encodings"
  computational-randomized-encoding: "#computational-randomized-encodings"
  succinct-randomized-encoding: "#succinct-randomized-encodings"
---

# Randomized encoding

A randomized encoding of a function $f$ is a randomized function $\hat f(x; r)$, typically of much lower complexity than $f$, whose output determines $f(x)$ and reveals nothing else about $x$: it can be decoded to $f(x)$ and simulated from $f(x)$ alone — [[IK00 - Randomizing Polynomials A New Representation with Applications to Round-Efficient Secure Computation|IK00]], [[AIK06 - Cryptography in NC0|AIK06]].

## Syntax

A randomized encoding of $f : \bits^n \to \bits^\ell$ is a function $\hat f : \bits^n \times \bits^\rho \to \bits^{s}$ together with two efficient algorithms:

- a deterministic decoder $\Decode$ with $\Decode(\hat f(x; r)) = f(x)$ for all $x \in \bits^n$ and $r \in \bits^\rho$,
- a randomized simulator $\Sim$ that takes $f(x)$ and outputs a string in $\bits^{s}$.

For a family of functions $f = \{f_\secpar\}$, the encodings, decoders and simulators form families computable in time polynomial in $\secpar$.

## Properties

### Privacy

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{re}}_{\hat f,\Sim,\calA}(\secpar)$}
\begin{algorithmic}
\State $(x, \stA) \gets \calA(1^\secpar)$; $b \getsr \bits$
\State $r \getsr \bits^{\rho}$; $y_0 := \hat f_\secpar(x; r)$
\State $y_1 \gets \Sim(1^\secpar, f_\secpar(x))$
\State $b' \gets \calA(\stA, y_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

The encoding is **private** if there is a simulator $\Sim$ such that for all efficient $\calA$,

$$
\Adv^{\mathrm{re}}_{\hat f,\Sim,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{re}}_{\hat f,\Sim,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. It is **statistically private** if the advantage is negligible for all, possibly unbounded, $\calA$, and **perfectly private** if $\hat f(x; U_\rho)$ and $\Sim(f(x))$ are identically distributed for every $x$ — [[AIK06 - Cryptography in NC0|AIK06]].

The point of an encoding is its complexity: degree, locality (the number of input bits, of $x$ and $r$ together, on which each output bit depends), depth or running time — [[AIK06 - Cryptography in NC0|AIK06]].

# Variations

## Perfect randomized encodings

A perfect randomized encoding is perfectly correct and perfectly private, and in addition **balanced**, $\Sim(U_\ell)$ is uniform on $\bits^{s}$, and **stretch-preserving**, $s - (n + \rho) = \ell - n$ — [[AIK06 - Cryptography in NC0|AIK06]]. Balance and stretch preservation let the encoding inherit pseudorandomness, so that an encoding of a PRG is a PRG ([[prg-in-nc1-to-low-complexity-prg-nc0-aik06|PRG in NC1 ⇒ PRG in NC0]]).

## Computational randomized encodings

A computational randomized encoding is perfectly correct and private against efficient adversaries; [[garbled-circuit|garbled circuits]] are an instance, the garbled circuit with the input labels of $x$ encoding $C(x)$ — [[AIK06b - Computationally Private Randomizing Polynomials and Their Applications|AIK06b]].

## Succinct randomized encodings

A succinct randomized encoding of a computation given by a Turing machine or RAM program $M$, input $x$ and time bound $T$ can be computed in time polynomial in $|M|$, $|x|$ and $\log T$, much less than the running time of $M$. For computations of bounded space they follow from [[indistinguishability-obfuscation|iO]] and one-way functions — [[BGLPT15 - Succinct Randomized Encodings and their Applications|BGLPT15]], [[CHJV15 - Succinct Garbling and Indistinguishability Obfuscation for RAM Programs|CHJV15]]. With a non-parallelizing language they give [[time-lock-puzzle|time-lock puzzles]] — [[BGJ+16 - Time-Lock Puzzles from Randomized Encodings|BGJ+16]].

# Other results

- Functions with polynomial-size branching programs, among them every function in $\mathrm{NC}^1$, have randomized encodings in which every output is a polynomial of degree $3$ in $(x, r)$ over a finite field — [[IK00 - Randomizing Polynomials A New Representation with Applications to Round-Efficient Secure Computation|IK00]].
- Every function in $\oplus\mathrm{L}/\mathrm{poly}$, which contains $\mathrm{NC}^1$, has a perfect randomized encoding of locality $4$ — [[AIK06 - Cryptography in NC0|AIK06]]. Hence one-way functions, PRGs and public-key encryption computable in $\oplus\mathrm{L}/\mathrm{poly}$ have counterparts in $\mathrm{NC}^0$, where each output bit depends on at most four input bits ([[prg-in-nc1-to-low-complexity-prg-nc0-aik06|PRG in NC1 ⇒ PRG in NC0]]) — [[AIK06 - Cryptography in NC0|AIK06]].
- Assuming a pseudorandom generator in $\oplus\mathrm{L}/\mathrm{poly}$, every polynomial-time computable function has a computationally private randomized encoding of degree $3$, hence of locality $4$; the construction combines Yao's garbled circuits with the information-theoretic encodings above — [[AIK06b - Computationally Private Randomizing Polynomials and Their Applications|AIK06b]].
- A randomized encoding of degree $d$ reduces secure multiparty computation of $f$ to secure computation of degree-$d$ polynomials, which with degree $3$ gives constant-round protocols — [[IK00 - Randomizing Polynomials A New Representation with Applications to Round-Efficient Secure Computation|IK00]].
