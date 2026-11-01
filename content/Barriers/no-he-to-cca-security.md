---
type: barrier
status: draft
title: "No fixed-construction reduction from HE to IND-CCA2 Security"
aliases: []
id: bar-he-to-cca-security
hypotheses: [he]
conclusion: pke-cca2-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: unconditional
source: folklore
rationale:
  class: "The attack refutes the identity map (IND-CCA2 security of the homomorphic scheme itself) and does not rule out building a separate IND-CCA2-secure scheme from an HE scheme."
---

# No fixed-construction reduction from HE to IND-CCA2 Security

## Statement

The identity map does not turn [[homomorphic-encryption|HE]] into [[public-key-encryption#cca-security|IND-CCA2]]-secure PKE: no HE scheme is IND-CCA2-secure, since its class $\calF$ contains a binary $f$ that depends on both arguments, and $\Eval$ applied to the challenge ciphertext and a fresh encryption gives an admissible decryption query that reveals the challenge bit — folklore.

## Sketch

Since $f$ depends on its second argument, there are $x$ and $w$ with $f(x, w) \ne x$; since it depends on its first, there are $z$ and $m_0$ with $f(m_0, z) \ne f(x, z)$. Set $m_1 := x$. On challenge $c^*$, $\calA$ computes $c' \gets \Eval(\pk, f, c^*, \Enc(\pk, z))$ and outputs $0$ if $c' = c^*$; otherwise the Phase-2 query $\Dec(\sk, c')$ returns $f(m_b, z)$, which determines $b$. When $b = 1$, $c' = c^*$ has negligible probability: with $w$ in place of $z$ it would contradict correctness, as $f(m_1, w) \ne m_1$, and a CPA adversary that encrypts $m_1$ itself and tests $\Eval(\pk, f, c^*, c) = c^*$ on its challenge $c$, an encryption of $z$ or of $w$, bounds the difference.

## Notes

- The impossibility is stated as well known by [[LMSV11 - On CCA-Secure Somewhat Homomorphic Encryption|LMSV11]], for any scheme supporting any form of homomorphic operation.
- IND-CCA1-secure fully homomorphic encryption follows generically from multi-key identity-based FHE, instantiated as a leveled scheme from sub-exponential LWE in the random oracle model, and from sub-exponentially secure [[indistinguishability-obfuscation|iO]] with sub-exponentially secure lossy encryption — [[CRRV17 - Chosen-Ciphertext Secure Fully Homomorphic Encryption|CRRV17]].
- Targeted malleability confines a scheme's malleability to a declared set of allowable functions, giving a non-malleability guarantee alongside homomorphic evaluation — [[BSW12 - Targeted Malleability Homomorphic Encryption for Restricted Computations|BSW12]].
