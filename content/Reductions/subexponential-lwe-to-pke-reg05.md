---
type: reduction
status: draft
title: "Sub-exponential LWE ⇒ CPA-secure PKE"
aliases: []
id: red-subexponential-lwe-to-pke-reg05
kind: implication
hypotheses: [subexponential-lwe]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
via:
  - "[[leftover-hash-lemma|leftover hash lemma]]"
security-loss: "tight up to a factor 2: one run of the CPA adversary on the LWE samples as public key, whose advantage is at most twice the LWE advantage plus a statistical leftover-hash term"
rationale:
  class: "One fixed construction uses only LWE samples, and the reduction runs the IND-CPA adversary once as an oracle on a public key that is either LWE samples or uniform, the leftover hash lemma bounding its advantage in the uniform case."
---

# Sub-exponential LWE ⇒ CPA-secure PKE

## Statement

If [[learning-with-errors#sub-exponential-lwe|LWE is sub-exponentially hard]], then [[lwe-to-pke-reg05|Regev's scheme]] with $\alpha = 1/n$, a prime $q \in [n^2, 2n^2]$, discrete Gaussian noise of width $\alpha q$ and $m = \lceil (1+\delta)(n+1)\log q \rceil$ samples for a constant $\delta > 0$ is an [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]] for one-bit messages. These parameters have $c = 1$, a prime $q \le \poly(n)$, $\alpha q = q/n \ge n \ge 2\sqrt{n}$ for $n \ge 4$, and $m = \poly(n)$, so sub-exponential hardness gives a constant $\varepsilon > 0$ such that every efficient adversary, having size at most $2^{n^{\varepsilon}}$ for all large $n$, distinguishes the $m$ LWE samples from uniform with advantage at most $2^{-n^{\varepsilon}}$, which is negligible — standard. For every $m \ge (1+\delta)(n+1)\log q$, an efficient adversary distinguishing encryptions of $0$ and $1$ gives an efficient distinguisher between the $m$ LWE samples of the public key and uniform — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. That reduction does not use the noise distribution, so it applies at these parameters, at which the scheme is also correct except with negligible probability — standard.
