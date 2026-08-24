---
type: primitive
status: draft
aliases:
  - PRG
  - Pseudorandom generator
title: Pseudorandom generator
id: prg
variants:
  trapdoor-pseudorandom-generator: "#trapdoor-pseudorandom-generators"
---

# Pseudorandom generator

A **Pseudorandom Generator (PRG)** stretches a short, uniformly random seed into a longer string that is computationally indistinguishable from a truly random string of the same length. Any efficient algorithm that sees only the output cannot tell whether it came from a PRG or from a truly random source.

## Syntax

A PRG $G$ is an efficient deterministic function with respect to seed space $\calS$ and output space $\calR,$ where $|\calR| > |\calS|:$

- $G : \calS \to \calR,$ takes a seed $s \in \calS$ and outputs a string $r \in \calR.$

The ratio $\ell = |r|/|s|$ is called the **stretch** of the PRG. A PRG with stretch $\ell(\secpar)$ expands a $\secpar$-bit seed to $\ell(\secpar) \cdot \secpar$ output bits.

## Properties

### Pseudorandomness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prg}}_{G,\calA}(\secpar)$}
\begin{algorithmic}
\State $s \getsr \calS$; $b \getsr \bits$
\State $r_0 \gets G(s)$; $r_1 \getsr \calR$
\State $b' \gets \calA(1^\secpar, r_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRG $G$ is **pseudorandom** if for all efficient $\calA,$

$$
\Adv^{\mathrm{prg}}_{G,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prg}}_{G,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Keyed PRG

A **keyed PRG** is a pair of efficient algorithms $(\Gen, \Eval)$ where $\Gen(1^\secpar) \to k$ samples a key and $\Eval(k) \to r$ produces the output. This models a PRG whose parameters (seed length, output length) are determined by a key generation algorithm. The security definition is the same as above, but now the adversary sees $r_0 = \Eval(k)$ for a fresh key $k \gets \Gen(1^\secpar).$

## Trapdoor pseudorandom generators

A **trapdoor PRG** is a tuple $G$ of efficient
algorithms $(\Gen, \Eval, \Invert)$ such that

- $\Gen(1^{\secpar}) \to (t,k),$ takes a security parameter $\secpar$
  and outputs a trapdoor $t \in \calT$ and a key $k \in \calK$,
- $\Eval(t,k) \to r,$ takes a trapdoor $t \in \calT$ and key $k \in \calK$,
  and outputs a value $r \in \calR$,
- $\Invert(t,r) \to b,$ takes as input a trapdoor $t\in \calT$ and a value
  $r \in \calR$ and outputs a bit $b \in \bits$ indicating whether the value
  was generated pseudorandomly or not.

The pseudorandomness of a trapdoor PRG is equivalent to the pseudorandomness
of $(\Gen,\Eval)$ treated as a PRG with
keyspace $(\calK\times \calT).$ Beyond that, a trapdoor PRG should be

- $(1-\varepsilon)$-**complete**: meaning $k \in \calK,$
  $$
      \Pr[\Invert(t, \Eval(t,k)) = 1 : (t,k) \getsr \Gen(1^{\secpar})] \ge 1 - \varepsilon,
  $$
- $(1-\delta)$-**sound**: for all $t \in \calT,$
  $$
      \Pr[\Invert(t,r) = 0 : r \getsr \calR] \ge 1 - \delta.
  $$

Note that a [[pseudorandom-error-correcting-code|zero-bit Pseudorandom Code]] can be viewed as a trapdoor pseudorandom
generator with the additional property that its completeness is actually
robust to noise.

# Other results

- [[hash-function-to-prg-hill99|Hash function ⇒ PRG]]
  - [[prg-to-hash-function|PRG ⇒ Hash function]]
- [[dlog-to-prg-bm84|DLOG ⇒ PRG]]
- A length-doubling PRG implies [[pseudorandom-function|PRF]]s via the GGM binary-tree construction — [[GGM86 - How to construct random functions|GGM86]]
- [[prg-to-ske|PRG ⇒ SKE]]
