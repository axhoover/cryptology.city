---
type: reduction
status: draft
title: "Post-quantum iO + Post-quantum injective OWF ⇒ QM mini-scheme"
aliases: []
id: red-post-quantum-io-and-post-quantum-injective-owf-to-quantum-money-mini-scheme-zha19
kind: implication
hypotheses: [post-quantum-io, post-quantum-injective-owf]
conclusion: quantum-money-mini-scheme
class: unstated
model: quantum
source:
  - "[[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]]"
security-loss: ""
rationale:
  model: "The counterfeiter and the reductions are quantum, so the obfuscator and the injective one-way function must be secure against quantum adversaries."
---

# Post-quantum iO + Post-quantum injective OWF ⇒ QM mini-scheme

## Statement

If [[indistinguishability-obfuscation#post-quantum-io|post-quantum indistinguishability obfuscation]] for all polynomial-size circuits and [[injective-one-way-function#post-quantum-one-wayness|post-quantum injective one-way functions]] exist, then a secure [[quantum-money#mini-schemes|quantum money mini-scheme]] exists — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]].

Given an injective one-way function, iO applied to suitably padded circuits is a subspace-hiding obfuscator $\mathsf{shO}$: for all efficient $\calA$ that choose a subspace $S_0 \subseteq \FF^n$ of dimension $d_0$, the advantage of $\calA$ in distinguishing $\mathsf{shO}(S_0)$ from $\mathsf{shO}(S_1)$, for a uniformly random subspace $S_1 \supseteq S_0$ of dimension $d_1$, is negligible whenever $|\FF|^{n-d_1}$ is exponential — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]]. In the mini-scheme, $\FF = \ZZ_q$ for a prime $q$, $S \subseteq \FF^n$ is a uniformly random subspace of dimension $n/2$, the banknote is $|S\rangle := |S|^{-1/2} \sum_{x \in S} |x\rangle$ with serial number $(\mathsf{shO}(S), \mathsf{shO}(S^\perp))$, and verification runs the first program on the state, applies the quantum Fourier transform over $\FF^n$, which maps $|S\rangle$ to $|S^\perp\rangle$, runs the second program, and undoes the transform. If $\mathsf{shO}$ is secure against quantum adversaries for $d_0 = n/2$ and some $d_1$ with $|\FF|^{n-d_1}$ and $|\FF|^{d_1-n/2}$ exponential, then for all efficient quantum $\calA$ given one banknote, the probability that $\calA$ outputs two possibly entangled registers that both pass verification under its serial number is negligible, so the hidden-subspace scheme is a secure [[quantum-money#mini-schemes|mini-scheme]] — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]].

## Notes

- Injectivity enters in the proof that iO is a subspace-hiding obfuscator: for $y = f(x^*)$, the program accepting $x$ iff $f(x) = y$ differs from the all-zero program only at $x^*$, and iO is a differing-inputs obfuscator for pairs of circuits differing on one input, so the two obfuscations are indistinguishable while $x^*$ is hard to find — [[Zha19 - Quantum Lightning Never Strikes the Same State Twice|Zha19]], who attribute the differing-inputs step to [[BCP14 - On Extractability Obfuscation|BCP14]].
- Signing serial numbers turns the mini-scheme into a [[quantum-money#public-key-quantum-money|public-key quantum money scheme]] ([[quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12|Mini-scheme + DS ⇒ Public-key QM]]): a secure mini-scheme and a [[digital-signature|digital signature scheme]] unforgeable by quantum adversaries making nonadaptive classical chosen-message queries give a secure public-key scheme, whose bank key pair is the signature key pair and whose banknotes are fresh mini-scheme banknotes with a signature on their serial numbers — [[AC12 - Quantum Money from Hidden Subspaces|AC12]]. A one-way function secure against quantum adversaries, such as the injective one, gives such a signature scheme by the construction of [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]], whose security reduction is black-box — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
