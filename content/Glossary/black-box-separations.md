---
type: glossary
status: draft
aliases:
  - Black-box separation
  - Oracle separation
  - Relativization
  - Black-box reduction
title: Black-Box Separations
id: black-box-separation
---

# Black-Box Separations

A **black-box separation** between cryptographic primitives $A$ and $B$ is a formal argument that no _black-box reduction_ — one that treats $A$ and any adversary as oracles without inspecting their code — can prove that $A$ implies $B$. Such separations are established by constructing an _oracle world_ in which $A$ exists but $B$ does not, showing that any purported reduction cannot be valid relative to that oracle.

## Types of Black-Box Reductions

Following [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]], black-box reductions are classified along two orthogonal axes.

**Construction: black-box vs. non-black-box.**
A _black-box construction_ of $B$ from $A$ uses $A$ only as an oracle — the implementation of $A$ is never inspected, only its input/output behavior. A _non-black-box construction_ may use the code (circuit description) of $A$ directly, for example by hardwiring it into the construction.

**Security proof: black-box vs. non-black-box.**
A _black-box security proof_ treats any adversary $\calA$ against $B$ as an oracle: the reduction calls $\calA$ on inputs and reads its outputs, but never inspects its code. A _non-black-box proof_ may use the circuit description of $\calA$ explicitly — for instance, to hardcode a specific adversary into the reduction or evaluate $\calA$'s code on chosen inputs.

Combining these axes gives four types of reductions:

|                         | BB proof         | Non-BB proof     |
| ----------------------- | ---------------- | ---------------- |
| **BB construction**     | Fully black-box  | Semi-BB          |
| **Non-BB construction** | —                | Fully non-BB     |

The most common and most restrictive notion is **fully black-box**, which covers essentially all "standard" cryptographic reductions. Oracle separations rule out relativizing, hence fully black-box, reductions — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

> **Example (fully BB).** The [[pseudorandom-function|GGM construction]] of a $\PRF$ from a $\PRG$ is fully black-box: the $\PRG$ is invoked as an oracle, and the security proof reduces any $\PRF$ adversary (treated as an oracle) to a $\PRG$ distinguisher.

## Oracle Separations

An **oracle separation** is the standard technique for proving that no fully black-box reduction can exist between two primitives.

**Definition.** An oracle $O$ _separates_ primitive $A$ from primitive $B$ if:

- $A$ exists (is hard / secure) relative to $O$, and
- $B$ does not exist (or is trivially insecure) relative to $O$.

**Why this rules out fully BB reductions.** A fully black-box construction of $B$ from $A$ must _relativize_: the construction and security proof remain valid when all parties are additionally given oracle access to some $O$, since oracle calls to $A$ and to any adversary compose cleanly with an additional oracle. If such a reduction existed, running it relative to $O$ would produce a secure instantiation of $B$ — contradicting the separation.

**Complexity-theoretic precursor.** Baker, Gill, and Solovay [[BGS75 - Relativizations of the P=NP question|BGS75]] showed there exist oracles $A$, $B$ such that $\classP^A = \classNP^A$ and $\classP^B \neq \classNP^B$. This established _relativization_ as a fundamental barrier in complexity theory: the P vs NP question cannot be resolved by any proof technique that relativizes. Cryptographic oracle separations are the direct analogue applied to implications between primitives.

## The Impagliazzo–Rudich Separation

The landmark result of [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] established the first major cryptographic oracle separation:

> **Theorem (Impagliazzo–Rudich, 1989).** There exists an oracle $O$ relative to which [[one-way-permutation|one-way permutations (OWPs)]] exist but secret-key agreement (KA) is impossible.

**Corollaries.**

1. No fully black-box construction of KA from OWP can exist.
2. No relativizing proof can show that $\mathrm{OWP} \Rightarrow \mathrm{KA}$ — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
3. Relative to a random permutation, if $\classP = \classNP$ then every KA protocol is broken, so proving secure any KA protocol that uses a OWP as a black box is as hard as proving $\classP \neq \classNP$ — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

**Proof sketch.**
Take $O$ to be a uniformly random permutation $\pi : \bits^n \to \bits^n$ together with a $\classPSPACE$-complete oracle. The argument proceeds in two parts:

- _OWP exists relative to $O$:_ A random permutation is information-theoretically one-way — no algorithm, regardless of running time, can invert it with non-negligible probability without querying $\pi$ near-exhaustively.

- _KA is impossible relative to $O$:_ Consider any two-party protocol in which Alice and Bob each make at most $\ell$ queries to $\pi$ and exchange a public transcript. An eavesdropper, given the transcript and oracle access to $\pi$, can recover the shared key by exhaustively exploring the parties' computation trees. The key insight is that conditioned on the public transcript, a consistent lazy extension of $\pi$ to new points is uniformly distributed; the eavesdropper simulates Alice's and Bob's computation path through the protocol tree, querying $\pi$ on branches they might have explored, and recovers their shared key using $\tilde{O}(\ell^{12})$ queries to $\pi$ ($\tilde{O}(\ell^6)$ when the oracle is a random function); the $\classPSPACE$ oracle makes its remaining computation polynomial-time — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

A black-box security reduction would convert this eavesdropper (which is efficient relative to $O$) into an inverter for $\pi$ — contradicting one-wayness. Hence no such reduction can exist.

**Barak–Mahmoody strengthening.** [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] tightened the query complexity of the eavesdropper against random-oracle protocols from IR89's $\tilde{O}(\ell^6)$ to $O(\ell^2)$, matching the quadratic gap of Merkle's puzzles — [[Mer78 - Secure Communications Over Insecure Channels|Mer78]]: no random-oracle KA protocol achieves a better-than-quadratic query gap between the honest parties and the eavesdropper — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]].

## Other Notable Separations

- [[no-injective-owf-to-owp-mm11|No fully-black-box reduction from length-increasing injective OWF to OWP]]

- **Relativized cryptography** — [[Bra79 - Relativized cryptography|Bra79]] was among the first systematic treatments of oracle separations in a cryptographic setting, predating IR89.

- [[no-pke-to-ot-gkm-00|No reduction from PKE to OT]]

- **Black-box crypto and doubly-efficient PIR** — Black-box access to most standard cryptographic primitives is insufficient for constructing doubly-efficient PIR — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]].

- [[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]

## Limitations

Oracle separations are a powerful tool but have important limitations:

- **They rule out fully BB proofs, not the implication itself.** An oracle separation between $A$ and $B$ does not mean that $B$ cannot be built from $A$ — only that no fully black-box proof can establish it. Non-black-box techniques can sometimes circumvent oracle separations entirely.

- [[no-zkp-to-argument-systems|No reduction from ZKP to Argument systems]]

- **The RTV04 taxonomy makes this precise.** An oracle relative to which $A$ exists and $B$ does not rules out every _relativizing_ reduction, and hence every fully black-box one; non-relativizing techniques are not addressed — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

Oracle separations should be understood as barriers for specific _proof techniques_, not as evidence that the underlying cryptographic implication is false.
