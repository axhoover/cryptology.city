---
type: glossary
status: draft
aliases:
  - Indifferentiability
  - Indifferentiable
title: Indifferentiability
id: indifferentiability
---

# Indifferentiability

A construction $C$ that uses an ideal primitive $\calG$ is indifferentiable from an ideal primitive $\calF$ if a simulator with access to $\calF$ can play the role of $\calG$ so that no efficient distinguisher, given both the honest interface ($C^{G}$ or $F$) and the adversarial interface ($G$ or the simulator), can tell the two worlds apart — [[MRH04 - Indifferentiability Impossibility Results on Reductions and Applications to the Random Oracle Methodology|MRH04]].

## Definition

Let $\calF$ and $\calG$ be ideal primitives, each a distribution over oracles (for instance a [[random-oracle-model|random oracle]] $\bits^* \to \bits^n$, or an [[ideal-cipher-model|ideal cipher]] queried in both directions), and let $C$ be an efficient oracle algorithm.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{indiff}}_{C,\Sim,\calA}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $G \getsr \calG$; $F \getsr \calF$
\State $\calO^{\mathrm{priv}}_0 := C^{G}$; $\calO^{\mathrm{pub}}_0 := G$
\Comment{real: the construction and its primitive}
\State $\calO^{\mathrm{priv}}_1 := F$; $\calO^{\mathrm{pub}}_1 := \Sim^{F}$
\Comment{ideal: $\Sim$ sees only its own queries to $F$}
\State $b' \gets \calA^{\calO^{\mathrm{priv}}_b, \calO^{\mathrm{pub}}_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$C$ is **indifferentiable** from $\calF$ if there is an efficient, stateful simulator $\Sim$ such that for all efficient $\calA$,

$$
\Adv^{\mathrm{indiff}}_{C,\Sim,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{indiff}}_{C,\Sim,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[MRH04 - Indifferentiability Impossibility Results on Reductions and Applications to the Random Oracle Methodology|MRH04]]; the formulation for [[hash-function|hash functions]] is that of [[CDMP05 - Merkle-Damgard Revisited How to Construct a Hash Function|CDMP05]]. Concrete statements bound the advantage of $\calA$, and the running time and query count of $\Sim$, in terms of the number of queries of $\calA$ — standard. Indistinguishability of $C^{G}$ from $F$ for an $\calA$ without access to $G$ is weaker; indifferentiability is the notion needed when the adversary also queries $G$, as it does in every idealized model — standard.

## Composition

If $C$ is indifferentiable from $\calF$, then a scheme that is secure when it and the adversary use $\calF$ remains secure when it uses $C^{G}$ and the adversary uses $G$: an adversary $\calA$ against the scheme with $C^{G}$ becomes the adversary $\calA^{\Sim}$ against the scheme with $\calF$ — [[MRH04 - Indifferentiability Impossibility Results on Reductions and Applications to the Random Oracle Methodology|MRH04]]. The theorem covers **single-stage** games, where the adversary is one algorithm with one state. It does not extend to multi-stage games in general, whose adversary consists of stages that cannot share state freely: a hash-based proof-of-storage protocol is secure with a random oracle but not with several indifferentiable Merkle–Damgård variants, because the prover can store a chaining value in place of the file; the stronger notion of _reset indifferentiability_ restores composition for multi-stage games — [[RSS11 - Careful with Composition Limitations of the Indifferentiability Framework|RSS11]].

## Constructions

- **Merkle–Damgård.** Plain Merkle–Damgård over a fixed-input-length random oracle is not indifferentiable from a random oracle, because of length extension: $H(m)$ determines $H(m \,\|\, \mathrm{pad}(m) \,\|\, m')$ for every $m'$. Prefix-free Merkle–Damgård, chopped Merkle–Damgård (dropping enough output bits), and NMAC- and HMAC-style constructions are indifferentiable from a random oracle when the compression function is a fixed-input-length random oracle, and also when it is Davies–Meyer over an ideal cipher — [[CDMP05 - Merkle-Damgard Revisited How to Construct a Hash Function|CDMP05]].
- **Sponge.** The sponge construction over a random permutation or random transformation of width $r + c$ is indifferentiable from a random oracle, with advantage $O(N^2/2^c)$, where $N$ is the total number of calls to the permutation or transformation that the distinguisher's queries cost, $r$ is the rate and $c$ the capacity — [[BDPV08 - On the Indifferentiability of the Sponge Construction|BDPV08]].
- **Feistel.** A Feistel network whose round functions are independent random oracles (keyed by the cipher key, for an ideal cipher) is indifferentiable from a random permutation, or an ideal cipher, with enough rounds. [[CPS08 - The Random Oracle Model and the Ideal Cipher Model Are Equivalent|CPS08]] claimed six rounds; [[HKT11 - The Equivalence of the Random Oracle Model and the Ideal Cipher Model Revisited|HKT11]] showed that proof flawed and proved fourteen rounds suffice. Ten rounds suffice for an ideal cipher — [[DKT16 - 10-Round Feistel is Indifferentiable from an Ideal Cipher|DKT16]]; eight rounds suffice for a random permutation — [[DS16a - Indifferentiability of 8-Round Feistel Networks|DS16a]].

With the Davies–Meyer result of [[CDMP05 - Merkle-Damgard Revisited How to Construct a Hash Function|CDMP05]], the Feistel result makes the random-oracle model and the ideal-cipher model equivalent for single-stage games: each primitive is indifferentiably constructible from the other — [[HKT11 - The Equivalence of the Random Oracle Model and the Ideal Cipher Model Revisited|HKT11]].
