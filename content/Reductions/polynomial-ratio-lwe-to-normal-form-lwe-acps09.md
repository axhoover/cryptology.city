---
type: reduction
status: draft
title: "LWE with polynomial ratio ⇒ Normal-form LWE"
aliases: []
id: red-polynomial-ratio-lwe-to-normal-form-lwe-acps09
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: normal-form-lwe
class: fully-black-box
model: standard
source:
  - "[[ACPS09 - Fast Cryptographic Primitives and Circular-Secure Encryption Based on Hard Learning Problems|ACPS09]]"
security-loss: "$n$ extra samples, and the advantage is multiplied by $\\prod_{j=1}^{n}(1 - q^{-j}) \\ge 1 - 1/(q-1)$, which is at least $1/2$ in the polynomial-ratio regime"
rationale:
  class: "The reduction transforms its samples by linear algebra modulo q and runs any normal-form distinguisher once as an oracle on the result, for every distinguisher."
  security-loss: "The first n samples are spent on a change of variables, and the reduction guesses at random when their matrix is singular, which happens with the same probability in both worlds."
---

# LWE with polynomial ratio ⇒ Normal-form LWE

## Statement

Let $q$ be prime, $\chi$ a distribution on $\ZZ_q$ and $n, m \ge 1$, and let $P_n(q) := \prod_{j=1}^{n}(1 - q^{-j})$ be the probability that a uniform matrix in $\ZZ_q^{n \times n}$ is invertible — standard. For every distinguisher $\calA$ against [[learning-with-errors#normal-form-lwe|normal-form LWE]] with parameters $(n, q, \chi, m)$, the distinguisher $\calB$ of the Sketch against [[learning-with-errors#decision-lwe|decision LWE]] with uniform secret and parameters $(n, q, \chi, m + n)$ runs $\calA$ once, performs $O((m + n)n^2)$ further operations modulo $q$, and has

$$
\Adv^{\text{lwe}}_{n,q,\chi,m+n,\calB}(\secpar) = P_n(q) \cdot \Adv^{\mathrm{nflwe}}_{n,q,\chi,m,\calA}(\secpar) \ge \left(1 - \frac{1}{q-1}\right) \Adv^{\mathrm{nflwe}}_{n,q,\chi,m,\calA}(\secpar).
$$

This change of variables is how [[ACPS09 - Fast Cryptographic Primitives and Circular-Secure Encryption Based on Hard Learning Problems|ACPS09]] first proved normal-form LWE hard for prime $q$, as credited by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Section 2.3).

Hence [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] at a $\poly(\secpar)$-computable dimension $n$ with $\secpar^{c_0} \le n \le \poly(\secpar)$ for a constant $c_0 > 0$, for instance $n = \secpar$, gives normal-form LWE at the same $n$: for every constant $c > 0$, every prime $q \le 2^{\poly(n)}$ with $\alpha q \ge 2\sqrt{n}$ for $\alpha := n^{-c}$ and every $m = \poly(n)$, apply the bound with $\chi = D_{\ZZ,\alpha q}$ and $m + n = \poly(n)$ samples. Such $q$ satisfy $q \ge 2\sqrt{n} \cdot n^{c}$, so $q \ge 3$ when $n \ge 2$, and $P_1(2) = 1/2$; in every case $P_n(q) \ge 1/2$, a loss of at most a factor $2$.

## Sketch

$\calB$ splits its $m + n$ samples into the first $n$, $(\mathbf{A}_0, \mathbf{b}_0)$, and the other $m$, $(\mathbf{A}_1, \mathbf{b}_1)$. For $\mathbf{b} = \mathbf{A}\mathbf{s} + \mathbf{e}$ with $\mathbf{e} = (\mathbf{e}_0, \mathbf{e}_1)$ and invertible $\mathbf{A}_0$, the transformed pair satisfies $\bar{\mathbf{b}} = \mathbf{A}_1\mathbf{s} + \mathbf{e}_1 - \mathbf{A}_1\mathbf{A}_0^{-1}(\mathbf{A}_0\mathbf{s} + \mathbf{e}_0) = \bar{\mathbf{A}}\mathbf{e}_0 + \mathbf{e}_1$, a normal-form instance with secret $\mathbf{e}_0 \gets \chi^n$; for uniform $\mathbf{b}$, $\bar{\mathbf{b}}$ is uniform given $\bar{\mathbf{A}}$, since $\mathbf{b}_1$ is. Given $\mathbf{A}_0$, $\bar{\mathbf{A}} = -\mathbf{A}_1\mathbf{A}_0^{-1}$ is uniform because $\mathbf{A}_1$ is, and $\mathbf{A}_0$ is invertible with probability $P_n(q)$ in both worlds, which gives the equality; $P_n(q) \ge 1 - \sum_{j \ge 1} q^{-j} = 1 - 1/(q-1)$ by a union bound.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\calB(1^\secpar, \mathbf{A}, \mathbf{b})$}
\begin{algorithmic}
\State $(\mathbf{A}_0, \mathbf{b}_0) \gets$ the first $n$ rows of $(\mathbf{A}, \mathbf{b})$; $(\mathbf{A}_1, \mathbf{b}_1) \gets$ the other $m$ rows
\If{$\mathbf{A}_0$ is not invertible modulo $q$}
\State $\hat{b} \getsr \bits$
\Return $\hat{b}$
\EndIf
\State $\bar{\mathbf{A}} \gets -\mathbf{A}_1\mathbf{A}_0^{-1}$; $\bar{\mathbf{b}} \gets \mathbf{b}_1 + \bar{\mathbf{A}}\mathbf{b}_0$
\Comment{$\bar{\mathbf{b}} = \bar{\mathbf{A}}\mathbf{e}_0 + \mathbf{e}_1$ on LWE samples}
\Return $\calA(1^\secpar, \bar{\mathbf{A}}, \bar{\mathbf{b}})$
\end{algorithmic}
\end{algorithm}
```

## Notes

- For every modulus $q \ge 25$ and continuous Gaussian error of width $\alpha q$ with $\alpha \ge \sqrt{\ln(2n(1 + 1/\varepsilon)/\pi)}/q$ and $\varepsilon < 1/2$, LWE with $m$ samples and uniform secret reduces to LWE with $m - (16n + 4\ln\ln q)$ samples and secret drawn from $D_{\ZZ^n,\sqrt{2}\alpha q}$, turning advantage $\zeta$ into at least $(\zeta - 8\varepsilon)/4$; the reduction searches the first $16n + 4\ln\ln q$ samples for $n$ whose matrix is invertible modulo $q$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.12 and Claim 2.13).
- The converse holds for every modulus with no loss: re-randomizing the secret maps normal-form samples to uniform-secret ones ([[normal-form-lwe-to-decision-lwe|Normal-form LWE ⇒ Decision LWE]]) — folklore.
