---
type: primitive
status: draft
aliases:
  - Coin flipping
  - Coin tossing
  - Coin-flipping protocol
title: Coin flipping
id: coin-flipping
variants:
  fair-coin-flipping: "#fair-coin-flipping"
  optimally-fair-coin-flipping: "#optimally-fair-coin-flipping"
  constant-bias-coin-flipping: "#coin-flipping-with-constant-bias"
---

# Coin flipping

A two-party coin-flipping protocol lets two parties generate a common bit such that a party deviating from the protocol cannot bias the honest party's output, beyond a stated bound, away from uniform — [[Blu81 - Coin Flipping by Telephone|Blu81]].

## Syntax

A coin-flipping protocol is a pair of efficient [[interactive-protocol|interactive algorithms]] $(A, B)$ that run on input $1^\secpar$ for $r(\secpar)$ rounds, after which each outputs a bit or $\bot$:

- $\langle A(1^\secpar), B(1^\secpar) \rangle \to (c_A, c_B) \in (\bits \cup \{\bot\})^2$.

## Properties

### Correctness

When both parties follow the protocol, $c_A = c_B \in \bits$ and the common bit is uniform.

### Security

In the game below the adversary corrupts $A$ and tries to make the honest $B$ output a bit $b^*$ of its choice; the game with the roles exchanged is analogous.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{coin}}_{\calA}(\secpar)$}
\begin{algorithmic}
\State $(b^*, \stA) \gets \calA(1^\secpar)$
\State $c_B \gets$ the output of $B$ in $\langle \calA(\stA), B(1^\secpar) \rangle$
\Comment{An output $c_B = \bot$ loses the game}
\Return $[c_B = b^*]$
\end{algorithmic}
\end{algorithm}
```

A protocol is **secure with abort** if for all efficient $\calA$, corrupting either party,

$$
\Pr\!\left[\Game^{\mathrm{coin}}_{\calA}(\secpar) = 1\right] \le \frac{1}{2} + \negl(\secpar).
$$

It is **$\varepsilon$-fair**, or has **bias** at most $\varepsilon$, if the honest party outputs a bit even when the other party aborts and $\Pr\!\left[\Game^{\mathrm{coin}}_{\calA}(\secpar) = 1\right] \le 1/2 + \varepsilon(\secpar)$ for all efficient $\calA$.

# Variations

## Fair coin flipping

Fair coin flipping asks for negligible bias without abort. It is impossible: in every $r$-round protocol an efficient fail-stop adversary, which only aborts early, biases the honest party's output by $\Omega(1/r)$ — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]].

## Optimally fair coin flipping

An $r$-round protocol is optimally fair if its bias is $O(1/r)$, matching Cleve's bound — [[MNS09 - An Optimally Fair Coin Toss|MNS09]].

No fully-black-box construction from a [[hash-function#preimage-resistance-one-wayness|one-way function]] is optimally fair with $r = o(n / \log n)$ rounds, for the input length $n$ of the one-way function — [[DLMM11 - On the Black-Box Complexity of Optimally-Fair Coin Tossing|DLMM11]]. The round restriction is removed for function-oblivious constructions, whose honest output, for fixed random tapes, does not depend on which one-way function is used — [[DMM14 - Can Optimally-Fair Coin Tossing Be Based on One-Way Functions|DMM14]].

## Coin flipping with constant bias

A protocol has constant bias if its bias is at most a constant $c < 1/2$; bias $1/2$ is trivial, since one party can choose the outcome — [[HO11 - Coin Flipping with Constant Bias Implies One-Way Functions|HO11]].

<!-- BEGIN GENERATED participates-in 5103f5d8e834 -->

## Participates in

**Builds on Coin flipping**

- [[constant-bias-coin-flipping-to-owf-ho11|Constant-bias coin flipping ⇒ OWF]] (via [[coin-flipping#coin-flipping-with-constant-bias|Coin flipping with constant bias]])

**Produces Coin flipping**

- [[com-to-coin-flipping-blu81|COM ⇒ Coin flipping (Blum)]]
- [[ot-to-optimally-fair-coin-flipping-mns09|OT ⇒ Optimally fair coin flipping (Moran–Naor–Segev)]] (via [[coin-flipping#optimally-fair-coin-flipping|Optimally fair coin flipping]])

<!-- END GENERATED participates-in -->
