---
type: reduction
status: draft
title: "iO + Injective OWF ⇒ Public-key QM"
aliases: []
id: red-io-and-injective-one-way-function-to-public-key-quantum-money-zha19
kind: implication
hypotheses: [io, injective-one-way-function]
conclusion: public-key-quantum-money
class: unstated
model: quantum
source:
  - "[[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]]"
  - "[[AC12 - Quantum Money from Hidden Subspaces|AC12]]"
security-loss: ""
rationale:
  model: "The counterfeiter and the reductions are quantum, so the obfuscator and the injective one-way function must be secure against quantum adversaries."
---

# iO + Injective OWF ⇒ Public-key QM

## Statement

If [[indistinguishability-obfuscation|indistinguishability obfuscation]] for all polynomial-size circuits and [[injective-one-way-function|injective one-way functions]] exist, both secure against quantum adversaries, then [[quantum-money#public-key-quantum-money|public-key quantum money]] exists. [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]] construct a secure mini-scheme, a public-key scheme that issues a single banknote and keeps no secret key, and [[AC12 - Quantum Money from Hidden Subspaces|AC12]] turn a secure mini-scheme into a full public-key scheme.

Given an injective one-way function, iO applied to suitably padded circuits is a subspace-hiding obfuscator $\mathsf{shO}$: for all efficient $\calA$ that choose a subspace $S_0 \subseteq \FF^n$ of dimension $d_0$, the advantage of $\calA$ in distinguishing $\mathsf{shO}(S_0)$ from $\mathsf{shO}(S_1)$, for a uniformly random subspace $S_1 \supseteq S_0$ of dimension $d_1$, is negligible whenever $|\FF|^{n-d_1}$ is exponential — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]]. In the mini-scheme, $\FF = \ZZ_q$ for a prime $q$, $S \subseteq \FF^n$ is a uniformly random subspace of dimension $n/2$, the banknote is $|S\rangle := |S|^{-1/2} \sum_{x \in S} |x\rangle$ with serial number $(\mathsf{shO}(S), \mathsf{shO}(S^\perp))$, and verification runs the first program on the state, applies the quantum Fourier transform over $\FF^n$, which maps $|S\rangle$ to $|S^\perp\rangle$, runs the second program, and undoes the transform. If $\mathsf{shO}$ is secure for $d_0 = n/2$ and some $d_1$ with $|\FF|^{n-d_1}$ and $|\FF|^{d_1-n/2}$ exponential, then for all efficient quantum $\calA$ given one banknote, the probability that $\calA$ outputs two possibly entangled registers that both pass verification under its serial number is negligible — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]].

A secure mini-scheme and a [[digital-signature|digital signature scheme]] unforgeable by quantum adversaries making classical chosen-message queries give a secure public-key scheme: the bank's key pair is the signature key pair, each banknote is a fresh mini-scheme banknote together with a signature on its serial number, and verification checks both — [[AC12 - Quantum Money from Hidden Subspaces|AC12]]. A one-way function secure against quantum adversaries, such as the injective one, gives such a signature scheme by the construction of [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]], whose security reduction is black-box — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].

## Notes

- Injectivity enters in the proof that iO is a subspace-hiding obfuscator: for $y = f(x^*)$, the program accepting $x$ iff $f(x) = y$ differs from the all-zero program only at $x^*$, and iO is a differing-inputs obfuscator for pairs of circuits differing on one input, so the two obfuscations are indistinguishable while $x^*$ is hard to find — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]], [[BCP14 - On Extractability Obfuscation|BCP14]].
