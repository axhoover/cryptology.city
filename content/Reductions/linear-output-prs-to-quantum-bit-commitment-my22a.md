---
type: reduction
status: draft
title: "Linear-output PRS ⇒ Quantum bit commitment"
aliases: []
id: red-linear-output-prs-to-quantum-bit-commitment-my22a
kind: implication
hypotheses: [linear-output-prs]
conclusion: quantum-bit-commitment
class: unstated
model: quantum
source:
  - "[[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]"
security-loss: "none for hiding: the hiding advantage equals the pseudorandomness advantage for $t = 1$; binding is statistical, with $p_0 + p_1 \\le 1 + \\sqrt{2^\\secpar / 2^n}$"
rationale:
  model: "The commitment is a quantum state and the hiding adversary is quantum."
---

# Linear-output PRS ⇒ Quantum bit commitment

## Statement

If [[pseudorandom-quantum-state#prs-with-output-length-linear-in-the-key|PRS generators]] with $\secpar$-bit keys and output length $n \ge c\secpar$ for a constant $c > 1$ exist, then [[quantum-bit-commitment|non-interactive quantum bit commitments]] that are computationally hiding and statistically sum-binding exist — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]. With $P_{x,z} := \bigotimes_{j=1}^{n} X_j^{x_j} Z_j^{z_j}$ for $x, z \in \bits^n$, the sender commits to $b \in \bits$ by sending the register $C$ of

$$
|\psi_b\rangle_{RC} := \frac{1}{\sqrt{2^{2n+\secpar}}} \sum_{x, z \in \bits^n} \sum_{k \in \bits^\secpar} |x, z, k\rangle_R \otimes P_{x,z}^{b}\, |\phi_k\rangle_C ,
$$

and every sender has $p_0 + p_1 \le 1 + \sqrt{2^\secpar / 2^n}$ in the sum-binding game, which is at most $1 + 2^{-(c-1)\secpar/2}$ when $n \ge c\secpar$ — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].

## Sketch

Tracing out $R$, the receiver holds $\rho_0 = 2^{-\secpar} \sum_k |\phi_k\rangle\langle\phi_k|$ when $b = 0$ and, by the quantum one-time pad, $\rho_1 = I/2^n$ when $b = 1$: one copy of the PRS state under a uniform key, and the average of one Haar-random state. So the hiding advantage of every $\calA$ equals its pseudorandomness advantage for $t = 1$. For binding, with $F(\rho, \sigma) := \big(\operatorname{Tr}\sqrt{\sqrt{\sigma}\rho\sqrt{\sigma}}\big)^2$, each $p_b$ is at most the fidelity between $\rho_b$ and the sender's reduced state on $C$, so $p_0 + p_1 \le 1 + \sqrt{F(\rho_0, \rho_1)}$, and $F(\rho_0, I/2^n) \le 2^\secpar / 2^n$ because $\rho_0$ has rank at most $2^\secpar$ — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].

## Notes

- The proof uses pseudorandomness only for $t = 1$, so the theorem holds for generators that satisfy pseudorandomness for $t = 1$ alone, still with $n \ge c\secpar$ — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]. The length condition cannot be dropped for such generators: for $n \le \secpar$, $|\phi_k\rangle := |k_1 \cdots k_n\rangle$ satisfies pseudorandomness for $t = 1$ with no assumption, and commitments built from it would need no assumption, which is impossible ([[LC97 - Is Quantum Bit Commitment Really Possible|LC97]], [[May97 - Unconditionally Secure Quantum Bit Commitment is Impossible|May97]]) — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
- The scheme is a quantum analogue of [[prg-to-com-naor91|Naor's commitment from a PRG]]: the state $|\phi_k\rangle$ replaces the PRG output, and the quantum one-time pad replaces the XOR with the receiver's string — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
- The reveal message can be made classical, by the [[quantum-bit-commitment#classical-opening|classical-opening]] transformation — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].
