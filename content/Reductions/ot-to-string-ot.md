---
type: reduction
status: draft
title: "OT ⇒ String OT"
aliases: []
id: red-ot-to-string-ot
kind: implication
hypotheses: [ot]
conclusion: string-ot
class: fully-black-box
model: standard
source: folklore
security-loss: "factor $\\ell$ for strings of length $\\ell$, in each privacy game: a hybrid over the $\\ell$ parallel executions"
rationale:
  class: "The protocol runs the given OT only as an oracle, once per bit of the strings, and each reduction runs the privacy adversary once as an oracle and executes the other transfers honestly itself."
---

# OT ⇒ String OT

## Statement

Let $\OT = (\Setup, \langle S, R \rangle)$ be an [[oblivious-transfer|OT]] whose message space $\calM$ contains two distinct messages $e_0, e_1$ that an efficient algorithm outputs on input $1^\secpar$, independently of $\pp$, as $\calM = \bits$ does with $e_b = b$. Let $\ell = \ell(\secpar)$ with $1 \le \ell(\secpar) \le \poly(\secpar)$ be computable from $1^\secpar$ in polynomial time. The protocol $\OT^\ell$ has the setup of $\OT$; on sender input $(x_0, x_1) \in (\bits^\ell)^2$ and choice bit $c$ it runs $\ell$ executions of $\langle S, R \rangle$ in parallel under one $\pp$ with independent coins, the $j$-th on sender input $(e_{x_{0,j}}, e_{x_{1,j}})$ and choice bit $c$; the receiver outputs the $z \in \bits^\ell$ with $e_{z_j}$ its output in the $j$-th execution, and $\bot$ if some output is neither $e_0$ nor $e_1$. Then $\OT^\ell$, which has the round complexity of $\OT$, is an [[oblivious-transfer#string-ot|OT for strings]] of length $\ell$: it is $(1 - \ell\varepsilon)$-correct when $\OT$ is $(1-\varepsilon)$-correct, and for every efficient $\calA$ against its sender privacy, respectively its receiver privacy, there is an efficient $\calB$ with

$$
\Adv^{\text{s-priv}}_{\OT^\ell,\calA}(\secpar) = \ell \cdot \Adv^{\text{s-priv}}_{\OT,\calB}(\secpar), \qquad \Adv^{\text{r-priv}}_{\OT^\ell,\calA}(\secpar) = \ell \cdot \Adv^{\text{r-priv}}_{\OT,\calB}(\secpar)
$$

— folklore. Every OT with such a message space therefore yields a [[oblivious-transfer#string-ot|string OT]].

## Sketch

Correctness is a union bound over the $\ell$ executions. For sender privacy, let $\calA$ output $c$ and the pairs $(x_0, x_1)$, $(x_0', x_1')$ with $x_c = x_c'$, and let hybrid $H_j$, for $0 \le j \le \ell$, run executions $1, \ldots, j$ on the bits of $(x_0', x_1')$ and the others on the bits of $(x_0, x_1)$, so that $H_0$ and $H_\ell$ are the two worlds of the game for $\OT^\ell$. $\calB$ runs $\calA$ on its $\pp$, samples $j \getsr [\ell]$, submits $c$ with the pairs $(e_{x_{0,j}}, e_{x_{1,j}})$ and $(e_{x'_{0,j}}, e_{x'_{1,j}})$, which agree at position $c$, runs the other $\ell - 1$ executions itself under $\pp$, those before $j$ on the bits of $(x_0', x_1')$ and those after on the bits of $(x_0, x_1)$, and gives $\calA$ the $\ell$ receiver views; it simulates $H_{j-1}$ in world $0$ and $H_j$ in world $1$, so the differences telescope. For receiver privacy, $H_j$ uses choice bit $1$ in executions $1, \ldots, j$ and $0$ in the others, and $\calB$ embeds its challenge execution at a uniform $j$ in the same way.

## Notes

- Conversely, a string OT at length $1$ is an OT on bits ([[string-ot-to-ot|String OT ⇒ OT]]) — folklore.
- Correctness of $\OT$ fixes its messages before $\pp$ is sampled, so the encoding may not depend on $\pp$: a perfectly correct OT whose receiver also outputs $\bot$ exactly when its output equals a uniform message $u \in \calM$ published in $\pp$ keeps both privacy properties and is $(1 - |\calM|^{-1})$-correct, yet fails with probability $1$ under the encoding $e_0 = u$ — standard.
- The argument uses that both parties follow the protocol. For $\ell \ge 2$, $\OT^\ell$ does not have [[oblivious-transfer#malicious-security|malicious security]], whatever $\OT$ is: a receiver that runs $R$ with choice bit $0$ in the first execution and $1$ in the second learns $x_{0,1}$ and $x_{1,2}$, while a simulator obtains one of $x_0, x_1$ from $\calF_{\mathrm{OT}}$ and must guess a bit of the other — standard.
