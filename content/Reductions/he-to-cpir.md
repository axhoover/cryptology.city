---
type: reduction
status: draft
title: FHE ⇒ cPIR
aliases: []
id: red-he-to-cpir
kind: implication
hypotheses: [compact-fhe]
conclusion: polylog-cpir
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor log n, from a hybrid over the encrypted index bits"
rationale:
  class: "The server evaluates the selection circuit through the scheme's evaluation algorithm, used only as an oracle, and the privacy reduction runs any server distinguisher only as an oracle on queries built from its encryption challenges."
---

# FHE ⇒ cPIR

## Statement

A [[homomorphic-encryption#compact-fhe|compact]] [[homomorphic-encryption|fully homomorphic encryption]] scheme yields a one-round [[single-server-private-information-retrieval|single-server PIR]] scheme with [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|polylogarithmic communication]] $\poly(\secpar, \log n)$: the client sends encryptions of the $\log n$ bits of its index $i$, and the server homomorphically evaluates the selection function $i \mapsto D[i]$ and returns one ciphertext — folklore.

## Sketch

$\Setup(1^\secpar, 1^n)$ outputs $\pp = (1^\secpar, n)$; $\Query(\pp, i)$ samples $(\pk, \sk) \gets \KeyGen(1^\secpar)$, writes $i$ in binary as $x_1 \cdots x_\ell$ with $\ell = O(\log n)$, and outputs $q = (\pk, c_1, \ldots, c_\ell)$ with $c_j \gets \Enc(\pk, x_j)$ and $\st = \sk$; $\Answer(D, q)$ outputs $a = \Eval(\pk, f_D, c_1, \ldots, c_\ell)$ for the selection circuit $f_D(x_1 \cdots x_\ell) := D[i]$; and $\Decode(\st, a) := \Dec(\sk, a)$, which equals $D[i]$ with probability $1 - \negl(\secpar)$ by correctness of the FHE scheme. Compactness bounds $|a|$ by a polynomial in $\secpar$ independent of $f_D$, so $|q| + |a| \le (\ell + 2) \cdot \poly(\secpar) = \poly(\secpar, \log n)$. Query privacy follows from IND-CPA security by a hybrid that switches the $\ell$ ciphertexts from the bits of $i_0$ to those of $i_1$ one at a time, with a factor $\ell$ loss — standard.

## Notes

- Compactness is needed: a scheme whose $\Eval$ returns the circuit together with its input ciphertexts is correct and IND-CPA-secure, but its answer here has $\Omega(n)$ bits — standard.
- Efficiency: communication is polylogarithmic in $n$, while the server evaluates a circuit of size $\Theta(n)$ homomorphically, which dominates the cost — folklore. An LWE-based instantiation has communication $\secpar \cdot \polylog(\secpar) + \log n$ bits for a single-bit database entry — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].
- Linear homomorphism already suffices for communication $O(n^{\varepsilon})$: [[additively-homomorphic-encryption-to-cpir-ste98|additively homomorphic encryption ⇒ cPIR]] — [[Ste98 - A New Efficient All-Or-Nothing Disclosure of Secrets Protocol|Ste98]].
