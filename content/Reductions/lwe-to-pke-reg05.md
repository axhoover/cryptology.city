---
type: reduction
status: draft
title: "LWE ⇒ PKE"
aliases: []
id: red-lwe-to-pke-reg05
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: ""
rationale:
  class: "One fixed construction uses only LWE samples, and the reduction runs the IND-CPA adversary once as an oracle on a public key that is either LWE samples or uniform, the leftover hash lemma bounding its advantage in the uniform case."
---

# LWE ⇒ PKE

## Statement

If [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE is hard with polynomial modulus-to-noise ratio]], then Regev's scheme is an IND-CPA-secure [[public-key-encryption|PKE]] for one-bit messages: the public key is $m$ LWE samples, and a bit $\mu$ is encrypted as a random subset-sum of them plus $\mu \lfloor q/2 \rfloor$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. Reg05 take a prime $q \in [n^2, 2n^2]$, $m = (1+\varepsilon)(n+1)\log q$ for a constant $\varepsilon > 0$, and as noise a Gaussian of width $\alpha q$ rounded to the nearest integer, with noise rate $\alpha = o(1/(\sqrt{n}\log n))$, for instance $\alpha = 1/(\sqrt{n}\log^2 n)$; they prove that for every $m \ge (1+\varepsilon)(n+1)\log q$ an efficient adversary distinguishing encryptions of $0$ and $1$ gives an efficient distinguisher between the $m$ LWE samples of the public key and uniform — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. That reduction does not use the noise distribution, so with discrete Gaussian noise of width $\alpha q$ at $\alpha = 1/n$, which lies in this range and has $\alpha q \ge n \ge 2\sqrt{n}$ for $n \ge 4$, the scheme is correct except with negligible probability and IND-CPA-secure under the polynomial-ratio assumption at $c = 1$ — standard.

## Sketch

$\KeyGen$ outputs $\pk = (\mathbf{A}, \mathbf{b} = \mathbf{A}\mathbf{s} + \mathbf{e})$ and $\sk = \mathbf{s}$; $\Enc(\pk, \mu)$ samples $\mathbf{r} \getsr \bits^m$ and outputs $(\mathbf{r}^{\top}\mathbf{A},\ \mathbf{r}^{\top}\mathbf{b} + \mu \lfloor q/2 \rfloor)$, and $\Dec(\sk, (\mathbf{c}_1, c_2))$ rounds $c_2 - \langle \mathbf{c}_1, \mathbf{s} \rangle = \mathbf{r}^{\top}\mathbf{e} + \mu \lfloor q/2 \rfloor$ to whichever of $0$ and $\lfloor q/2 \rfloor$ is closer modulo $q$, which is correct when $|\mathbf{r}^{\top}\mathbf{e}| < \lfloor q/2 \rfloor/2$. With $\mathbf{e}$ discrete Gaussian of width $\alpha q$, $\mathbf{r}^{\top}\mathbf{e}$ is subgaussian with parameter $\alpha q \sqrt{m}$, and $\lfloor q/2 \rfloor/2 \ge q/5$ for $q \ge 5$, so decryption fails with probability at most $2e^{-\pi/(25\alpha^2 m)}$, which is negligible at $\alpha = 1/n$ since $m = O(n \log n)$ — standard. Decision LWE replaces $(\mathbf{A}, \mathbf{b})$ by uniform, after which $(\mathbf{r}^{\top}\mathbf{A}, \mathbf{r}^{\top}\mathbf{b})$ is statistically close to uniform by the leftover hash lemma, since $m \ge (1+\varepsilon)(n+1)\log q$, so the ciphertext hides $\mu$.

## Notes

- Efficiency: the public key has $m(n+1) = \tilde{O}(n^2)$ elements of $\ZZ_q$, and a one-bit ciphertext has $n + 1$ of them, so encryption expands messages by a factor $\tilde{O}(n)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. Over rings, a ciphertext is two ring elements, about $2n \log q$ bits, carrying $n$ packed message bits, so for polynomial $q$ the expansion is $O(\log q) = \tilde{O}(1)$ for $n$-bit messages but $O(n \log q)$ for a single bit; keys shrink to $\tilde{O}(n)$ bits — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]].
