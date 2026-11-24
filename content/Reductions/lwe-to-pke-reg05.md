---
type: reduction
status: draft
title: "LWE with polynomial ratio ⇒ CPA-secure PKE (Regev)"
aliases: []
id: red-lwe-to-pke-reg05
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
via:
  - "[[leftover-hash-lemma|leftover hash lemma]]"
security-loss: "tight up to a factor 2: one run of the CPA adversary on the LWE samples as public key, whose advantage is at most twice the LWE advantage plus the statistical leftover-hash term $\\sqrt{q^{n+1}/2^m}$"
rationale:
  class: "One fixed construction uses only LWE samples, and the reduction runs the IND-CPA adversary once as an oracle on a public key that is either LWE samples or uniform, the leftover hash lemma bounding its advantage in the uniform case."
---

# LWE with polynomial ratio ⇒ CPA-secure PKE (Regev)

## Statement

Let $n = n(\secpar)$ be $\poly(\secpar)$-computable with $\secpar^{c_0} \le n \le \poly(\secpar)$ for a constant $c_0 > 0$, for instance $n = \secpar$, the choice of [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. Let $q \in [n^2, 2n^2]$ be prime, $m := \lceil (1+\varepsilon)(n+1)\log_2 q \rceil$ for a constant $\varepsilon > 0$, $\alpha := 1/n$, and $\chi := D_{\ZZ,\alpha q}$ the [[discrete-gaussian|discrete Gaussian]] of width $\alpha q$, reduced modulo $q$, which can be sampled exactly in polynomial time since $\alpha q \ge \sqrt{\ln 6/\pi}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.3). Regev's scheme for one-bit messages $\mu \in \bits$ is the following, where $|x|_q$ is the distance from $x$ to $0$ modulo $q$; it encrypts $\mu$ as the sum of a uniformly random subset of the $m$ LWE samples of the public key, plus $\mu \lfloor q/2 \rfloor$ in the last coordinate, and decrypts to $0$ iff $c_2 - \mathbf{c}_1\mathbf{s}$ is closer to $0$ than to $\lfloor q/2 \rfloor$ modulo $q$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Section 5), whose $\chi$ is a Gaussian of width $\alpha q$ rounded to the nearest integer, for any $\alpha = o(1/(\sqrt{n}\log n))$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $\mathbf{A} \getsr \ZZ_q^{m \times n}$; $\mathbf{s} \getsr \ZZ_q^n$; $\mathbf{e} \gets \chi^m$
\State $\mathbf{b} \gets \mathbf{A}\mathbf{s} + \mathbf{e}$
\Return $(\sk, \pk) \gets (\mathbf{s}, (\mathbf{A}, \mathbf{b}))$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Enc(\pk, \mu)$}
\begin{algorithmic}
\State $\mathbf{r} \getsr \bits^m$
\Comment{The indicator vector of a uniform subset of $[m]$}
\Return $(\mathbf{c}_1, c_2) \gets (\mathbf{r}^{\top}\mathbf{A},\ \mathbf{r}^{\top}\mathbf{b} + \mu \lfloor q/2 \rfloor)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Dec(\sk, (\mathbf{c}_1, c_2))$}
\begin{algorithmic}
\State $d \gets c_2 - \mathbf{c}_1\mathbf{s} \bmod q$
\Return $\left[\,|d - \lfloor q/2 \rfloor|_q \le |d|_q\,\right]$
\end{algorithmic}
\end{algorithm}
```

**Correctness.** Since $c_2 - \mathbf{c}_1\mathbf{s} = \mathbf{r}^{\top}\mathbf{e} + \mu\lfloor q/2 \rfloor$, decryption is correct whenever $|\mathbf{r}^{\top}\mathbf{e}| < \lfloor q/2 \rfloor/2$, computed over $\ZZ$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Lemma 5.1). For $q \ge 5$, $\lfloor q/2 \rfloor/2 \ge q/5$, and given $\mathbf{r}$, $\mathbf{r}^{\top}\mathbf{e}$ is a linear combination of $m$ independent samples of $D_{\ZZ,\alpha q}$ with coefficient vector $\mathbf{r}$ of norm at most $\sqrt{m}$, so the tail bound in the Notes bounds the decryption error by

$$
\Pr\!\left[|\mathbf{r}^{\top}\mathbf{e}| \ge q/5\right] \le 2e^{-\pi/(25\alpha^2 m)} = 2e^{-\pi n^2/(25m)},
$$

which is $2^{-\Omega(n/\log n)}$, since $m = O(n \log n)$, and so negligible — standard.

**Security.** For every CPA adversary $\calA$, the distinguisher $\calB$ of the Sketch runs $\calA$ once and

$$
\Adv^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) \le 2\Adv^{\text{lwe}}_{n,q,\chi,m,\calB}(\secpar) + \sqrt{q^{n+1}/2^m} \le 2\Adv^{\text{lwe}}_{n,q,\chi,m,\calB}(\secpar) + q^{-\varepsilon(n+1)/2}
$$

— standard. [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Lemma 5.4) prove the qualitative form: for every $m \ge (1+\varepsilon)(n+1)\log_2 q$, an efficient adversary distinguishing encryptions of $0$ and $1$ gives an efficient distinguisher between the $m$ samples of the public key and uniform for a non-negligible fraction of secrets, and the proof does not use the noise distribution. The parameters above have a prime $q \le 2^{\poly(n)}$, $\alpha = n^{-1}$ with $\alpha q \ge n \ge 2\sqrt{n}$ for $n \ge 4$, and $m = \poly(n)$, so if [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] holds at dimension $n$, its case $c = 1$ makes the scheme an [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] for one-bit messages — standard.

## Sketch

Let $G_1$ be the CPA game with $(\mathbf{A}, \mathbf{b})$ replaced by a uniform pair; $\calB$ embeds its challenge as the public key and outputs $0$ iff $\calA$ guesses the bit, so $\Adv^{\text{lwe}}_{n,q,\chi,m,\calB}(\secpar) = |\Pr[\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) = 1] - \Pr[G_1 = 1]|$. In $G_1$ the matrix $\mathbf{M} := [\mathbf{A} \mid \mathbf{b}] \in \ZZ_q^{m \times (n+1)}$ is uniform and the challenge is $\mathbf{M}^{\top}\mathbf{r} + (\mathbf{0}, \mu_\beta\lfloor q/2 \rfloor)$; the maps $\mathbf{r} \mapsto \mathbf{M}^{\top}\mathbf{r}$ on $\bits^m$ collide on $\mathbf{r} \ne \mathbf{r}'$ with probability exactly $q^{-(n+1)}$ over $\mathbf{M}$, since $\mathbf{r} - \mathbf{r}'$ has an entry $\pm 1$, so the [[leftover-hash-lemma|leftover hash lemma]] gives $\Delta((\mathbf{M}, \mathbf{M}^{\top}\mathbf{r}), (\mathbf{M}, \mathbf{v})) \le \frac12\sqrt{q^{n+1}/2^m}$ for uniform $\mathbf{v} \in \ZZ_q^{n+1}$ — as in [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Claim 5.3, whose statistical distance is twice this one) — and with $\mathbf{v}$ in place of $\mathbf{M}^{\top}\mathbf{r}$ the challenge is independent of $\beta$, so $|2\Pr[G_1 = 1] - 1| \le \sqrt{q^{n+1}/2^m}$. The bound follows from $|2\Pr[\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) = 1] - 1| \le 2|\Pr[\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) = 1] - \Pr[G_1 = 1]| + |2\Pr[G_1 = 1] - 1|$ and $2^m \ge q^{(1+\varepsilon)(n+1)}$.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\calB(1^\secpar, \mathbf{A}, \mathbf{u})$}
\begin{algorithmic}
\State $(\mu_0, \mu_1, \stA) \gets \calA(1^\secpar, (\mathbf{A}, \mathbf{u}))$; $\beta \getsr \bits$
\State $\mathbf{r} \getsr \bits^m$; $c^* \gets (\mathbf{r}^{\top}\mathbf{A},\ \mathbf{r}^{\top}\mathbf{u} + \mu_\beta \lfloor q/2 \rfloor)$
\Comment{An encryption of $\mu_\beta$ under the public key $(\mathbf{A}, \mathbf{u})$}
\State $\beta' \gets \calA(c^*, \stA)$
\Return $[\beta' \ne \beta]$
\end{algorithmic}
\end{algorithm}
```

## Notes

- Tail bound: for $X \gets D_{\ZZ,\sigma}$ and real $t$, completing the square gives $\mathbb{E}[e^{2\pi t X}] = e^{\pi\sigma^2t^2}\rho_\sigma(\ZZ - \sigma^2 t)/\rho_\sigma(\ZZ) \le e^{\pi\sigma^2t^2}$, with $\rho_\sigma$ as in [[discrete-gaussian|Discrete Gaussians]], because Poisson summation gives $\rho_\sigma(\ZZ + x) = \sigma\sum_{y \in \ZZ} e^{-\pi\sigma^2y^2}\cos(2\pi xy) \le \rho_\sigma(\ZZ)$ for every real $x$. For independent $X_1, \dots, X_k \gets D_{\ZZ,\sigma}$ and nonzero $\mathbf{a} \in \mathbb{R}^k$, Markov's inequality applied to $e^{2\pi t\sum_i a_iX_i}$ at $t = \tau/(\sigma^2\|\mathbf{a}\|^2)$, and the symmetry of $D_{\ZZ,\sigma}$, give $\Pr[|\sum_i a_iX_i| \ge \tau] \le 2e^{-\pi\tau^2/(\sigma^2\|\mathbf{a}\|^2)}$ for every $\tau > 0$ — standard.
- Efficiency: the public key has $m(n+1) = \tilde{O}(n^2)$ elements of $\ZZ_q$, and a one-bit ciphertext has $n + 1$ of them, so encryption expands messages by a factor $\tilde{O}(n)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. If all users share one uniformly random $\mathbf{A}$, the public key is $\mathbf{b}$ alone, $O(m \log q) = \tilde{O}(n)$ bits, and security is unaffected — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Section 5, crediting Ajtai). Over rings, a ciphertext is two ring elements, about $2n \log q$ bits, carrying $n$ packed message bits, so for polynomial $q$ the expansion is $O(\log q) = \tilde{O}(1)$ for $n$-bit messages but $O(n \log q)$ for a single bit; keys shrink to $\tilde{O}(n)$ bits — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]].
- When the secret, the errors and the encryption randomness are all drawn from the error distribution, the challenge ciphertext is itself a normal-form LWE instance whose secret is the encryption randomness, and the leftover hash lemma is not needed ([[normal-form-lwe-to-pke-cpa-security-lp11b|Normal-form LWE ⇒ CPA-secure PKE (Lindner–Peikert)]]) — standard.
