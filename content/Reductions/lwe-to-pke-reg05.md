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
---

# LWE ⇒ PKE

[[learning-with-errors|LWE]] implies [[public-key-encryption|PKE]].

## Statement

Hardness of decision [[learning-with-errors|LWE]] with $m = \Theta(n \log q)$ samples implies IND-CPA-secure [[public-key-encryption|PKE]]: the public key is $m$ LWE samples, and a bit $\mu$ is encrypted as a random subset-sum of them plus $\mu \lfloor q/2 \rfloor$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].

## Sketch

$\KeyGen$ outputs $\pk = (\mathbf{A}, \mathbf{b} = \mathbf{A}\mathbf{s} + \mathbf{e})$ and $\sk = \mathbf{s}$; $\Enc(\pk, \mu)$ samples $\mathbf{r} \getsr \bits^m$ and outputs $(\mathbf{r}^{\top}\mathbf{A},\ \mathbf{r}^{\top}\mathbf{b} + \mu \lfloor q/2 \rfloor)$; $\Dec(\sk, (\mathbf{c}_1, c_2))$ computes $c_2 - \langle \mathbf{c}_1, \mathbf{s} \rangle = \mathbf{r}^{\top}\mathbf{e} + \mu \lfloor q/2 \rfloor$ and rounds. Security: decision LWE replaces $(\mathbf{A}, \mathbf{b})$ by uniform, after which $(\mathbf{r}^{\top}\mathbf{A}, \mathbf{r}^{\top}\mathbf{b})$ is statistically close to uniform by the leftover hash lemma, so the ciphertext hides $\mu$.

## Notes

`class: fully-black-box`: One fixed construction using only LWE samples; the reduction runs the IND-CPA adversary once, as an oracle, on a public key that is either LWE samples or uniform, and the leftover-hash step bounds its advantage in the uniform case, so any remaining advantage is a decision-LWE advantage.
