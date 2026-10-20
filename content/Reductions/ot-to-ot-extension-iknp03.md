---
type: reduction
status: draft
title: OT ⇒ OT extension (IKNP)
aliases:
  - IKNP OT extension
id: red-ot-to-ot-extension-iknp03
kind: implication
hypotheses: [ot]
conclusion: ot-extension
class: fully-black-box
model: rom
source:
  - "[[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]]"
security-loss: "additive: of order κ q / 2^κ for q random-oracle queries, plus the base-OT advantage"
rationale:
  class: "The extension calls the base OT and the hash only as oracles, and the simulation runs any semi-honest adversary only as an oracle."
  model: "The hash is modelled as a random oracle; IKNP03 also state the result for a correlation-robust hash function in the standard model."
---

# OT ⇒ OT extension (IKNP)

## Statement

In the [[random-oracle-model|random-oracle model]], $\kappa$ base [[oblivious-transfer|oblivious transfers]] of $\kappa$-bit strings, stretched to $m$ bits with the hash as a generator, yield any polynomial number $m$ of 1-out-of-2 transfers of $\ell$-bit strings secure against semi-honest adversaries, with $O(m)$ hash evaluations and $O(m(\kappa + \ell))$ bits of communication — [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]].

## Sketch

The receiver, with choice bits $r \in \bits^m$, samples a uniform matrix $T \in \bits^{m \times \kappa}$; the sender samples $s \in \bits^{\kappa}$. In $\kappa$ base transfers with the roles reversed, the sender obtains, for each column $j$, the column $t^j$ if $s_j = 0$ and $t^j \oplus r$ if $s_j = 1$, so the $i$-th row of its matrix $Q$ is $q_i = t_i \oplus r_i s$. It sends $y_i^b := x_i^b \oplus H(i, q_i \oplus b\, s)$ for $b \in \bits$, and the receiver outputs $y_i^{r_i} \oplus H(i, t_i)$. The value $H(i, q_i \oplus (1 \oplus r_i) s) = H(i, t_i \oplus s)$ masking the other message stays hidden because $s$ is uniform and unknown to the receiver — [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]].

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{IKNP extension, transfer $i$}
\begin{algorithmic}
\State Receiver: $t_i \gets$ row $i$ of $T$
\Comment{After the base transfers the sender holds $q_i = t_i \oplus r_i s$}
\State Sender: $y_i^0 \gets x_i^0 \oplus H(i, q_i)$; $y_i^1 \gets x_i^1 \oplus H(i, q_i \oplus s)$
\State Receiver: \Return $y_i^{r_i} \oplus H(i, t_i)$
\end{algorithmic}
\end{algorithm}
```

## Notes

- Efficiency: after $\kappa$ public-key transfers, each extended transfer costs a constant number of hash evaluations and $O(\kappa + \ell)$ bits of communication — [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]].
- Without a random oracle, [[ot-and-owf-to-ot-extension-bea96|Beaver's extension]] needs only a one-way function, but uses its code — [[Bea96 - Correlated Pseudorandomness and the Complexity of Private Computations|Bea96]].
- Malicious security adds only a small overhead to the semi-honest protocol — [[KOS15 - Actively Secure OT Extension with Optimal Overhead|KOS15]].
