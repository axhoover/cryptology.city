---
type: reduction
status: draft
title: "LWE ⇒ PKE"
aliases: []
id: red-lwe-to-pke-reg05
kind: implication
hypotheses: [lwe]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: "tight up to a factor 2: one run of the CPA adversary on the LWE samples as public key, whose advantage is at most twice the LWE advantage plus a statistical leftover-hash term"
rationale:
  class: "One fixed construction uses only LWE samples, and the reduction runs the IND-CPA adversary once as an oracle on a public key that is either LWE samples or uniform, the leftover hash lemma bounding its advantage in the uniform case."
---

# LWE ⇒ PKE

## Statement

If decision [[learning-with-errors|LWE]] is hard with $m = \Theta(n \log q)$ samples, then Regev's scheme is an IND-CPA-secure [[public-key-encryption|PKE]] for one-bit messages: the public key is $m$ LWE samples, and a bit $\mu$ is encrypted as a random subset-sum of them plus $\mu \lfloor q/2 \rfloor$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].

## Sketch

$\KeyGen$ outputs $\pk = (\mathbf{A}, \mathbf{b} = \mathbf{A}\mathbf{s} + \mathbf{e})$ and $\sk = \mathbf{s}$; $\Enc(\pk, \mu)$ samples $\mathbf{r} \getsr \bits^m$ and outputs $(\mathbf{r}^{\top}\mathbf{A},\ \mathbf{r}^{\top}\mathbf{b} + \mu \lfloor q/2 \rfloor)$, and $\Dec(\sk, (\mathbf{c}_1, c_2))$ rounds $c_2 - \langle \mathbf{c}_1, \mathbf{s} \rangle = \mathbf{r}^{\top}\mathbf{e} + \mu \lfloor q/2 \rfloor$ to $0$ or $\lfloor q/2 \rfloor$, which is correct when $|\mathbf{r}^{\top}\mathbf{e}| < q/4$. Decision LWE replaces $(\mathbf{A}, \mathbf{b})$ by uniform, after which $(\mathbf{r}^{\top}\mathbf{A}, \mathbf{r}^{\top}\mathbf{b})$ is statistically close to uniform by the leftover hash lemma, so the ciphertext hides $\mu$.

## Notes

- Efficiency: the public key has $m(n+1) = \tilde{O}(n^2)$ elements of $\ZZ_q$, and a one-bit ciphertext has $n + 1$ of them, so encryption expands messages by a factor $\tilde{O}(n)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. Over rings, a ciphertext is two ring elements, about $2n \log q$ bits, carrying $n$ packed message bits, so for polynomial $q$ the expansion is $O(\log q) = \tilde{O}(1)$ for $n$-bit messages but $O(n \log q)$ for a single bit; keys shrink to $\tilde{O}(n)$ bits — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]].
