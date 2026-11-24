---
type: reduction
status: draft
title: "Normal-form LWE ⇒ CPA-secure PKE (Lindner–Peikert)"
aliases: []
id: red-normal-form-lwe-to-pke-cpa-security-lp11b
kind: implication
hypotheses: [normal-form-lwe]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor $2\\ell$ on the public key, by a hybrid over its $\\ell$ columns, and a factor $2$ on the challenge ciphertext; each distinguisher runs the CPA adversary once"
rationale:
  class: "The scheme uses only uniform matrices and samples of the error distribution, and each fixed reduction embeds its normal-form LWE challenge in the public key or the challenge ciphertext and runs any CPA adversary once as an oracle."
  security-loss: "The public key holds ℓ normal-form instances with one matrix, which the first reduction replaces one at a time, while the ciphertext is a single instance with n + ℓ samples."
---

# Normal-form LWE ⇒ CPA-secure PKE (Lindner–Peikert)

## Statement

Let $n = n(\secpar)$ be the dimension at which [[learning-with-errors#normal-form-lwe|normal-form LWE]] is hard, so that $\secpar^{c_0} \le n \le \poly(\secpar)$ for a constant $c_0 > 0$, and let $\ell = \ell(\secpar) \ge 1$ be $\poly(\secpar)$-computable with $\ell \le \poly(\secpar)$. For a prime $q \ge 5$ and $\alpha \in (0, 1)$, let $\chi := D_{\ZZ,\sigma}$ be the [[discrete-gaussian|discrete Gaussian]] of width $\sigma := \alpha q$, which can be sampled exactly in polynomial time when $\sigma \ge \sqrt{\ln 6/\pi}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.3); the scheme keeps its samples as integers and reduces them modulo $q$ where it computes in $\ZZ_q$. For messages $\mu \in \bits^\ell$, with $|x|_q$ the distance from $x$ to $0$ modulo $q$, the scheme is:

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{n \times n}$; $\mathbf{S} \gets \chi^{n \times \ell}$; $\mathbf{E} \gets \chi^{n \times \ell}$
\State $\mathbf{B} \gets \mathbf{A}\mathbf{S} + \mathbf{E}$
\Return $(\sk, \pk) \gets (\mathbf{S}, (\mathbf{A}, \mathbf{B}))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Enc(\pk, \mu)$}
\begin{algorithmic}
\State $\mathbf{r} \gets \chi^n$; $\mathbf{e}_1 \gets \chi^n$; $\mathbf{e}_2 \gets \chi^\ell$
\State $\mathbf{c}_1 \gets \mathbf{r}^{\top}\mathbf{A} + \mathbf{e}_1^{\top}$
\State $\mathbf{c}_2 \gets \mathbf{r}^{\top}\mathbf{B} + \mathbf{e}_2^{\top} + \lfloor q/2 \rfloor \mu^{\top}$
\Comment{The message sits in the high-order bits}
\Return $(\mathbf{c}_1, \mathbf{c}_2)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Dec(\sk, (\mathbf{c}_1, \mathbf{c}_2))$}
\begin{algorithmic}
\State $\mathbf{d} \gets \mathbf{c}_2 - \mathbf{c}_1\mathbf{S} \bmod q$
\State $\mu'_j \gets \left[\,|d_j - \lfloor q/2 \rfloor|_q \le |d_j|_q\,\right]$ for $j = 1, \dots, \ell$
\Return $\mu'$
\end{algorithmic}
\end{algorithm}
```

Up to the modulus and the message encoding, this is FrodoPKE with a single message row, which [[AJOP18 - On Quantum Chosen-Ciphertext Attacks and Learning with Errors|AJOP18]] (arXiv v2, Section 6.2, Construction 5) state in full and describe as based on a construction of [[LP11b - Better Key Sizes (and Attacks) for LWE-Based Encryption|LP11b]].

**Correctness.** Write $\mathbf{S}_j$ and $\mathbf{E}_j$ for the $j$-th columns of $\mathbf{S}$ and $\mathbf{E}$. Since $\mathbf{c}_2 - \mathbf{c}_1\mathbf{S} = \mathbf{r}^{\top}\mathbf{E} - \mathbf{e}_1^{\top}\mathbf{S} + \mathbf{e}_2^{\top} + \lfloor q/2 \rfloor\mu^{\top}$, bit $j$ is decrypted correctly whenever the integer $x_j := \langle \mathbf{r}, \mathbf{E}_j \rangle - \langle \mathbf{e}_1, \mathbf{S}_j \rangle + e_{2,j}$ has $|x_j| < q/5$: then $|x_j| < \lfloor q/2 \rfloor/2$, as $q \ge 5$, so $d_j$ is closer to $\mu_j \lfloor q/2 \rfloor$ than to $(1 - \mu_j)\lfloor q/2 \rfloor$ modulo $q$. Given the key, $x_j$ is a linear combination of $2n + 1$ independent samples of $\chi$ with coefficient vector $(\mathbf{E}_j, -\mathbf{S}_j, 1)$. For every $t > 0$, all $2n\ell$ entries of $\mathbf{S}$ and $\mathbf{E}$ have absolute value below $\sigma t$ except with probability at most $4n\ell e^{-\pi t^2}$, and then each such vector has squared norm below $2n\sigma^2t^2 + 1$; the tail bound in the Notes and a union bound over the $\ell$ bits give decryption error at most

$$
4n\ell e^{-\pi t^2} + 2\ell\exp\!\left(-\frac{\pi}{25\alpha^2\left(2n t^2 (\alpha q)^2 + 1\right)}\right)
$$

— standard. Take $t = \sqrt{n}$, $\alpha := n^{-2}$ and $q$ the least prime greater than $2n^{5/2}$, which is at most $4n^{5/2}$ by Bertrand's postulate and is found in time $\poly(n)$. Then $\alpha q > 2\sqrt{n}$, $q \le 2^{\poly(n)}$, $q \ge 5$ for $n \ge 2$, and $(\alpha q)^2 \le 16n$ gives $25\alpha^2(2n^2(\alpha q)^2 + 1) \le 25n^{-4}(32n^3 + 1) \le 825/n$, so the decryption error is at most $4n\ell e^{-\pi n} + 2\ell e^{-\pi n/825}$, which is negligible since $n \ge \secpar^{c_0}$ — standard.

**Security.** For every CPA adversary $\calA$, the distinguishers $\calB_1$, against normal-form LWE with $n$ samples, and $\calB_2$, against normal-form LWE with $n + \ell$ samples, of the Sketch each run $\calA$ once and

$$
\Adv^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) \le 2\ell \cdot \Adv^{\mathrm{nflwe}}_{n,q,\chi,n,\calB_1}(\secpar) + 2\Adv^{\mathrm{nflwe}}_{n,q,\chi,n+\ell,\calB_2}(\secpar).
$$

The parameters above are the case $c = 2$ of normal-form LWE, with a prime $q \le 2^{\poly(n)}$ and $\alpha q \ge 2\sqrt{n}$ for $\alpha = n^{-2}$, and the sample counts $n$ and $n + \ell$ are $\poly(n)$ since $\ell \le \poly(\secpar)$ and $n \ge \secpar^{c_0}$. So if normal-form LWE is hard, the right side is negligible and the scheme is an [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] for $\ell$-bit messages — folklore.

## Sketch

Let $G_1$ be the CPA game with $\mathbf{B}$ replaced by a uniform $\mathbf{U} \in \ZZ_q^{n \times \ell}$, and $G_2$ the game $G_1$ with the challenge ciphertext replaced by a uniform one, so that $\Pr[G_2 = 1] = \frac12$. Each column $\mathbf{A}\mathbf{S}_j + \mathbf{E}_j$ of $\mathbf{B}$ is a normal-form instance with matrix $\mathbf{A}$ and $n$ samples, and $\calB_1$ puts its challenge in a uniformly random column $j$, the columns before it uniform and those after it honest, so a hybrid argument gives $\Adv^{\mathrm{nflwe}}_{n,q,\chi,n,\calB_1}(\secpar) = \frac{1}{\ell}\left|\Pr[\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) = 1] - \Pr[G_1 = 1]\right|$. In $G_1$ the ciphertext minus $(\mathbf{0}, \lfloor q/2 \rfloor\mu^{\top})$ is $\mathbf{r}^{\top}[\mathbf{A} \mid \mathbf{U}] + (\mathbf{e}_1^{\top}, \mathbf{e}_2^{\top})$, the transpose of a normal-form instance with secret $\mathbf{r}$, uniform matrix $[\mathbf{A} \mid \mathbf{U}]^{\top}$ and $n + \ell$ samples, so $\Adv^{\mathrm{nflwe}}_{n,q,\chi,n+\ell,\calB_2}(\secpar) = |\Pr[G_1 = 1] - \Pr[G_2 = 1]|$, and the triangle inequality gives the bound.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\calB_1(1^\secpar, \mathbf{A}, \mathbf{u})$}
\begin{algorithmic}
\State $j \getsr [\ell]$; $\mathbf{B}_k \getsr \ZZ_q^n$ for $k < j$; $\mathbf{B}_j \gets \mathbf{u}$
\Comment{$\mathbf{B}_k$ is the $k$-th column of $\mathbf{B}$}
\State $\mathbf{s}_k, \mathbf{e}_k \gets \chi^n$ and $\mathbf{B}_k \gets \mathbf{A}\mathbf{s}_k + \mathbf{e}_k$ for $k > j$
\State $(\mu_0, \mu_1, \stA) \gets \calA(1^\secpar, (\mathbf{A}, \mathbf{B}))$; $\beta \getsr \bits$
\State $c^* \gets \Enc((\mathbf{A}, \mathbf{B}), \mu_\beta)$; $\beta' \gets \calA(c^*, \stA)$
\Return $[\beta' \ne \beta]$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\calB_2(1^\secpar, \mathbf{A}', \mathbf{u}')$}
\begin{algorithmic}
\State $[\mathbf{A} \mid \mathbf{U}] \gets \mathbf{A}'^{\top}$
\Comment{$\mathbf{A}' \in \ZZ_q^{(n+\ell) \times n}$ and $\mathbf{A} \in \ZZ_q^{n \times n}$}
\State $(\mu_0, \mu_1, \stA) \gets \calA(1^\secpar, (\mathbf{A}, \mathbf{U}))$; $\beta \getsr \bits$
\State $c^* \gets \mathbf{u}'^{\top} + (\mathbf{0}, \lfloor q/2 \rfloor \mu_\beta^{\top})$; $\beta' \gets \calA(c^*, \stA)$
\Return $[\beta' \ne \beta]$
\end{algorithmic}
\end{algorithm}
```

## Notes

- Tail bound: for $X \gets D_{\ZZ,\sigma}$ and real $t$, completing the square gives $\mathbb{E}[e^{2\pi t X}] = e^{\pi\sigma^2t^2}\rho_\sigma(\ZZ - \sigma^2 t)/\rho_\sigma(\ZZ) \le e^{\pi\sigma^2t^2}$, with $\rho_\sigma$ as in [[discrete-gaussian|Discrete Gaussians]], because Poisson summation gives $\rho_\sigma(\ZZ + x) = \sigma\sum_{y \in \ZZ} e^{-\pi\sigma^2y^2}\cos(2\pi xy) \le \rho_\sigma(\ZZ)$ for every real $x$. For independent $X_1, \dots, X_k \gets D_{\ZZ,\sigma}$ and nonzero $\mathbf{a} \in \mathbb{R}^k$, Markov's inequality applied to $e^{2\pi t\sum_i a_iX_i}$ at $t = \tau/(\sigma^2\|\mathbf{a}\|^2)$, and the symmetry of $D_{\ZZ,\sigma}$, give $\Pr[|\sum_i a_iX_i| \ge \tau] \le 2e^{-\pi\tau^2/(\sigma^2\|\mathbf{a}\|^2)}$ for every $\tau > 0$ — standard.
- The decryption-error bound needs a smaller noise rate than [[lwe-to-pke-reg05|Regev's scheme]], which is correct at $\alpha = 1/n$. With $\alpha = n^{-c}$ and $\alpha q \ge 2\sqrt{n}$, the exponent of its second term is at most $\pi n^{2c-2}/(200t^2)$, while its first term is negligible only if $t^2 = \omega(\log \secpar)$, so the bound is negligible only for $c > 1$; it also grows with $\alpha q$, so $q$ is taken close to its least value $2\sqrt{n}\,n^{c}$ — standard.
- The public key has $n^2 + n\ell$ elements of $\ZZ_q$ and a ciphertext has $n + \ell$, so for $\ell = n$ an encryption expands messages by a factor $2\lceil\log_2 q\rceil$, which is $O(\log n)$ at the parameters above — standard.
- For prime $q$, hardness of decision LWE with uniform secret gives hardness of normal-form LWE — [[ACPS09 - Fast Cryptographic Primitives and Circular-Secure Encryption Based on Hard Learning Problems|ACPS09]], as credited by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Section 2.3). The change of variables of [[polynomial-ratio-lwe-to-normal-form-lwe-acps09|LWE with polynomial ratio ⇒ Normal-form LWE]] spends $n$ extra samples and, for $q \ge 3$, loses at most a factor $2$ in advantage — standard.
