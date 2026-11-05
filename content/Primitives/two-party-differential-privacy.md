---
type: primitive
status: draft
aliases:
  - 2PDP
  - Two-party differential privacy
title: Two-party differential privacy
id: two-party-differential-privacy
variants:
  computational-two-party-differential-privacy: "#computational-differential-privacy"
---

# Two-party differential privacy

In two-party (distributed) differential privacy, two parties holding private datasets run a protocol computing a joint function of both datasets such that each party's view is differentially private with respect to the other party's dataset — [[MMP+10 - The Limits of Two-Party Differential Privacy|MMP+10]].

## Syntax

Datasets are vectors $x \in \calX^n$, and $x, x'$ are **adjacent** if they differ in one entry. Distributions $P, Q$ are **$\varepsilon$-close** if $P(S) \le e^\varepsilon Q(S)$ and $Q(S) \le e^\varepsilon P(S)$ for every event $S$. A randomized mechanism $\calM$ is **$\varepsilon$-differentially private** if $\calM(x)$ and $\calM(x')$ are $\varepsilon$-close for all adjacent $x, x'$ — [[DMNS06 - Calibrating Noise to Sensitivity in Private Data Analysis|DMNS06]].

A two-party protocol $\Pi = \langle A, B \rangle$ is run by $A$ on $x \in \calX^n$ and $B$ on $y \in \calX^n$, following the [[interactive-protocol|two-party protocol]] syntax, and both parties output an estimate of $f(x, y)$ for a target function $f$.

## Properties

### Differential privacy

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{dp}}_{\Pi,\calA}(x, y)$}
\begin{algorithmic}
\State $\View_B \gets$ view of $B$ in $\langle A(x), B(y) \rangle$
\State $b' \gets \calA(\View_B)$
\Return $b'$
\end{algorithmic}
\end{algorithm}
```

$\Pi$ is **$\varepsilon$-differentially private** if for all $\calA$, every $y$ and all adjacent $x, x'$,

$$
\Pr\!\left[\Game^{\mathrm{dp}}_{\Pi,\calA}(x, y) = 1\right] \le e^\varepsilon \Pr\!\left[\Game^{\mathrm{dp}}_{\Pi,\calA}(x', y) = 1\right],
$$

and symmetrically for the [[interactive-protocol#View|view]] of $A$ under changes of one entry of $y$ — [[MMP+10 - The Limits of Two-Party Differential Privacy|MMP+10]].

### Accuracy

$\Pi$ approximates $f$ with additive error $\alpha$ if both outputs lie within $\alpha$ of $f(x, y)$ with probability at least $2/3$, for all $x, y$.

# Variations

## Computational differential privacy

In **computational** differential privacy, $\Pi$ also takes $1^\secpar$, datasets have size $n = \poly(\secpar)$, and $\varepsilon$-closeness of the views is required only against efficient distinguishers: for every efficient $\calA$ there is a negligible function $\negl$ such that for all $\secpar$, all $y$ and all adjacent $x, x'$,

$$
\Pr\!\left[\calA(\View_B(x, y)) = 1\right] \le e^\varepsilon \Pr\!\left[\calA(\View_B(x', y)) = 1\right] + \negl(\secpar),
$$

and symmetrically for $A$ — [[MPRV09 - Computational Differential Privacy|MPRV09]], who give this and simulation-based definitions and compare them.

# Other results

- For the Hamming distance, equivalently the inner product, of $x, y \in \bits^n$, every $\varepsilon$-differentially private two-party protocol has additive error $\tilde\Omega(\sqrt n)$ for constant $\varepsilon$, almost tight, whereas a trusted curator holding both datasets answers with error $O(1/\varepsilon)$ by adding Laplace noise to a sensitivity-1 function — [[MMP+10 - The Limits of Two-Party Differential Privacy|MMP+10]], [[DMNS06 - Calibrating Noise to Sensitivity in Private Data Analysis|DMNS06]]. Assuming [[oblivious-transfer|OT]], secure computation of the curator's noisy answer is computationally differentially private with error $O(1/\varepsilon)$ — [[MPRV09 - Computational Differential Privacy|MPRV09]]; with the lower bound above this is a sharp gap between the two notions — [[MMP+10 - The Limits of Two-Party Differential Privacy|MMP+10]]. Some public-key assumption is necessary: a non-trivially accurate computationally differentially private protocol for inner product or Hamming distance implies [[key-exchange|key agreement]] — [[HMST22 - On the Complexity of Two-Party Differential Privacy|HMST22]].
- The proofs connect differential privacy to deterministic extraction from Santha–Vazirani sources, and show that approximating a function by a low-error differentially private protocol is closely related, in both directions, to approximating it by a low-communication protocol — [[MMP+10 - The Limits of Two-Party Differential Privacy|MMP+10]].
