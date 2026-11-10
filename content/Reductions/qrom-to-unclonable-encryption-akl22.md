---
type: reduction
status: draft
title: "QROM ⇒ unclonable-indistinguishable UE"
aliases: []
id: red-qrom-to-unclonable-indistinguishable-encryption-akl22
kind: implication
hypotheses: [qrom]
conclusion: unclonable-indistinguishable-encryption
class: free
model: rom
source:
  - "[[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]]"
security-loss: ""
rationale:
  class: "The theorem holds for every cloning adversary making polynomially many quantum queries to the oracle, which is the free class scoped by the model."
  model: "The proof holds in the quantum random-oracle model, against quantum cloning adversaries that query the random oracle in superposition, and the Statement names the quantum access."
---

# QROM ⇒ unclonable-indistinguishable UE

## Statement

In the [[random-oracle-model#quantum-random-oracle-model|quantum random-oracle model]], there is an [[unclonable-encryption#unclonable-indistinguishability|unclonable-indistinguishable]] encryption scheme with message space $\bits^{n(\secpar)}$, for every polynomially bounded $n(\secpar) = \Omega(\secpar)$, with no computational assumption. Its key is a uniformly random subspace $A \subseteq \FF_2^\secpar$ of dimension $\secpar/2$, and $\Enc^H(A, m)$ samples uniformly random canonical coset representatives $s$ of $A$ and $s'$ of $A^\perp$ and outputs the coset state $|A_{s,s'}\rangle = |A|^{-1/2} \sum_{a \in A} (-1)^{\langle s', a \rangle} |a + s\rangle$ together with $H(s, s') \oplus m$, for $H : \FF_2^\secpar \times \FF_2^\secpar \to \bits^{n(\secpar)}$. It is secure against every cloning adversary $(\calA, \calB, \calC)$ making polynomially many superposition queries to the oracle, where $\calA$ may query the oracle both before choosing the messages $m_0, m_1 \in \bits^{n(\secpar)}$ and after receiving the ciphertext, and $\calB$ and $\calC$ after receiving the key — [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]] (Definition 2.10, Theorem 4.8, Section 5).

## Notes

[[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]] (Section 5) describe the scheme as one for a single bit. Its proof sets $\Delta = m_0 \oplus m_1$ in their strengthened monogamy-of-entanglement game (Definition 4.7), in which $\calA$ chooses any $\Delta \in \bits^{n(\secpar)}$ and receives the coset state with $H(s, s') \oplus b \cdot \Delta$, and Theorem 4.8 bounds that game by $1/2 + \negl(\secpar)$ for $n = \Omega(\secpar)$, so it does not cover a random oracle of range $\bits$; a one-bit message is encrypted by encoding it as one of two fixed strings of $\bits^{n(\secpar)}$. Section 5 writes $\FF_2^n$ for the space $\FF_2^\secpar$ of the coset states.
