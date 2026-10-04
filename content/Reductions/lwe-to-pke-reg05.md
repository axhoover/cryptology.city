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
security-loss: ""
rationale:
  class: "One fixed construction uses only LWE samples, and the reduction runs the IND-CPA adversary once as an oracle on a public key that is either LWE samples or uniform, the leftover hash lemma bounding its advantage in the uniform case."
---

# LWE ⇒ PKE

## Statement

If decision [[learning-with-errors|LWE]] is hard with $m = \Theta(n \log q)$ samples, then Regev's scheme is an IND-CPA-secure [[public-key-encryption|PKE]] for one-bit messages: the public key is $m$ LWE samples, and a bit $\mu$ is encrypted as a random subset-sum of them plus $\mu \lfloor q/2 \rfloor$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].

## Sketch

$\pk = (\mathbf{A}, \mathbf{b} = \mathbf{A}\mathbf{s} + \mathbf{e})$ and $\sk = \mathbf{s}$; $\Enc(\pk, \mu)$ samples $\mathbf{r} \getsr \bits^m$ and outputs $(\mathbf{r}^{\top}\mathbf{A},\ \mathbf{r}^{\top}\mathbf{b} + \mu \lfloor q/2 \rfloor)$, and $\Dec(\sk, (\mathbf{c}_1, c_2))$ rounds $c_2 - \langle \mathbf{c}_1, \mathbf{s} \rangle = \mathbf{r}^{\top}\mathbf{e} + \mu \lfloor q/2 \rfloor$. Decision LWE replaces $(\mathbf{A}, \mathbf{b})$ by uniform, after which $(\mathbf{r}^{\top}\mathbf{A}, \mathbf{r}^{\top}\mathbf{b})$ is statistically close to uniform by the leftover hash lemma, so the ciphertext hides $\mu$.
