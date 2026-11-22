---
type: reduction
status: draft
title: TDP ⇒ DS (full-domain hash, random oracle model)
aliases:
  - Full-domain hash
  - FDH
id: red-tdp-to-ds-br93
kind: implication
hypotheses: [tdp]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]]"
security-loss: "a factor $q_H + 1$ for a forger making $q_H$ hash and $q_S$ signing queries, less $(q_H + q_S)\\nu$ for a domain sampler at statistical distance $\\nu$: a forger with advantage $\\varepsilon$ yields an inverter with advantage at least $\\varepsilon/(q_H + 1) - (q_H + q_S)\\nu$"
rationale:
  class: "The scheme evaluates and inverts the permutation only as an oracle, and the reduction runs any forger once as an oracle, planting its challenge in one random-oracle answer."
  model: "The reduction programs the hash onto the permutation's domain, answering every other query with the image of a point it chose."
  security-loss: "The inverter guesses which of the forger's at most $q_H$ hash queries on new messages, or its unhashed forged message, carries the challenge, and each of the at most $q_H + q_S$ hash points it samples itself costs $\\nu$."
---

# TDP ⇒ DS (full-domain hash, random oracle model)

## Statement

Let $\TDP = (\Gen, \Samp, \Eval, \Invert)$ be a [[trapdoor-permutation|trapdoor permutation]] family whose domain sampler is within statistical distance $\nu$ of uniform, and let $H$ be a random oracle that maps each message to a uniform element of $\calD_f$. The full-domain-hash scheme has $\KeyGen := \Gen$, with verification key $f$ and signing key $\td$, $\Sign(\td, m) := \Invert(\td, H(m))$ and $\Vrfy(f, m, \sigma) := [\Eval(f, \sigma) = H(m)]$. It is perfectly correct, and if $\TDP$ is one-way it is [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable in the [[random-oracle-model|random-oracle model]] — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]]. For every forger $\calF$ making at most $q_H$ hash and $q_S$ signing queries, the inverter $\calB$ of the Sketch runs $\calF$ once and has

$$
\Adv^{\mathrm{ow}}_{\TDP,\calB}(\secpar) \ge \frac{\Adv^{\eufcma}_{\mathrm{FDH},\calF}(\secpar)}{q_H + 1} - (q_H + q_S)\,\nu(\secpar)
$$

— standard.

## Sketch

Given $(f, y)$, $\calB$ picks $j \getsr \{1, \ldots, q_H + 1\}$ and runs $\calF$, answering the $j$-th of its hash queries on a message not yet hashed with $y$, counting the forged message, if never hashed, as one more such query, and setting every other hash value $H(m)$, including those first needed for a signing query, to $\Eval(f, x_m)$ for $x_m \gets \Samp(f)$, so that it can answer a signing query on $m$ with $x_m$; it aborts on a signing query for the $j$-th message and outputs the forger's $\sigma$. Where $\Samp$ samples uniformly and a signing query on the $j$-th message is answered with the preimage of $y$, $\calF$'s view is that of the real game and independent of $j$; on the event, of probability $\Adv^{\eufcma}_{\mathrm{FDH},\calF}/(q_H + 1)$, that $\calF$ forges on the $j$-th message, that message is never signed, so $\calB$ does not abort, and $\Eval(f, \sigma) = y$. Each of the at most $q_H + q_S$ points drawn from $\Samp$ instead changes $\calB$'s success probability by at most $\nu$.

## Notes

- [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]] state and prove the theorem for permutations of $\bits^k$ with a uniform sampler and $H$ onto $\bits^k$: for a forger with success $\varepsilon$ making $n$ distinct hash queries, among them one for each signed message, their inverter succeeds with probability at least $(\varepsilon - 2^{-k})/n$ (Appendix B). For RSA, whose domain $\ZZ_N^*$ is dense in $\bits^k$ and has efficient membership testing, they suggest signing $(i, f^{-1}(H(i \| m)))$ for the first $i$ with $H(i \| m)$ in the domain (Section 4). [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]] (Theorem 3.1) give the RSA bound with $H$ onto $\ZZ_N^*$: a forger running in time $t$ with success $\varepsilon$ yields an inverter running in time $t + (q_H + q_S + 1) \cdot \Theta(k^3)$ with success $\varepsilon/(q_S + q_H + 1)$, for $k$-bit moduli.
- Efficiency: signing is one inversion and verification one evaluation of $f$ plus a hash; with RSA, verification with a small public exponent costs a few modular multiplications — standard.
- Hashing the message together with a fresh random salt, RSA-PSS has a tight reduction from RSA in the random-oracle model ([[rsa-to-ds-pss-br96|RSA ⇒ DS (RSA-PSS)]]) — [[BR96 - The Exact Security of Digital Signatures How to Sign with RSA and Rabin|BR96]].
- Without random oracles, signatures follow from any one-way function ([[hash-function-to-ds|OWF ⇒ DS]]), at much higher cost — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- For RSA, which is multiplicative, the reduction can embed its challenge in many hash answers, and then loses a factor about $q_S$ instead of $q_H$ — [[Cor00 - On the Exact Security of Full Domain Hash|Cor00]]. This applies to RSA, not to a general trapdoor permutation.
- For full-domain hash over a certified trapdoor permutation, a loss of about $q_S$ is unavoidable for the reductions Coron's meta-reduction covers — [[Cor02 - Optimal Security Proofs for PSS and Other Signature Schemes|Cor02]]. The impossibility needs certification, and for RSA with a small prime exponent there is a tight proof from Φ-hiding ([[phi-hiding-to-ds-kk12|Φ-Hiding ⇒ DS]]) — [[KK12 - Optimal Security Proofs for Full Domain Hash, Revisited|KK12]].
- No instantiation of the random oracle by a standard-model hash family can be proven secure from properties of the permutation family that hold for random permutations and that prevent inverting $f$ on an unbounded number of points, even when the hash may depend arbitrarily on $f$; this rules out instantiating full-domain hash from general claw-free permutations — [[DOP05 - On the Generic Insecurity of the Full Domain Hash|DOP05]]. The result extends to RSA full-domain hash with the RSA function modeled as a generic multiplicative permutation, even when the keyed hash may exploit that multiplicative structure — [[DHT12 - On the Instantiability of Hash-and-Sign RSA Signatures|DHT12]]. A hash function built from indistinguishability obfuscation gives instantiations of full-domain hash, of BLS signatures and of Boneh–Franklin IBE with security proofs without random oracles, getting around both results with a construction that is not black-box — [[HSW14 - Replacing a Random Oracle Full Domain Hash from Indistinguishability Obfuscation|HSW14]].
