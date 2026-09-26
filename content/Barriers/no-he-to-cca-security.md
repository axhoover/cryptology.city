---
type: barrier
status: draft
title: "No reduction from HE to CCA Security"
aliases: []
id: bar-he-to-cca-security
hypotheses: [he]
conclusion: ind-cca-security
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source: folklore
---

# No reduction from HE to CCA Security

A reduction of class `free` from [[homomorphic-encryption|HE]] to [[public-key-encryption#cca-security|CCA Security]] would imply a contradiction.

## Statement

No [[homomorphic-encryption|HE]] scheme whose function class $\calF$ contains an $f$ that is neither constant nor the identity on $\calM$ (after fixing any further arguments of $f$ by fresh encryptions) is [[public-key-encryption#cca-security|IND-CCA2]]-secure: $\Eval$ turns the challenge ciphertext into an admissible decryption query that reveals the challenge bit — folklore.

## Sketch

Pick $m_0, m_1$ with $f(m_0) \ne m_0$ and $f(m_1) \ne f(m_0)$. Given the challenge $c^*$, compute $c' \gets \Eval(\pk, f, c^*)$. If $c' \ne c^*$, the phase-2 query $\Dec(\sk, c')$ returns $f(m_b)$, which determines $b$; if $c' = c^*$, correctness forces $f(m_b) = m_b$, so $b = 1$.

## Notes

`class: free`: the hyperedge is read for one scheme (homomorphism ⇒ IND-CCA2 security), and the attack refutes it outright. Building a separate IND-CCA2-secure scheme from an HE scheme is not ruled out.

- IND-CCA1-secure fully homomorphic encryption is constructed from multi-key identity-based FHE, from sub-exponentially secure [[indistinguishability-obfuscation|iO]], and from SNARKs — [[CRRV17 - Chosen-Ciphertext Secure Fully Homomorphic Encryption|CRRV17]]
- Targeted malleability confines a scheme's malleability to a declared set of allowable functions, giving a non-malleability guarantee alongside homomorphic evaluation — [[BSW12 - Targeted Malleability Homomorphic Encryption for Restricted Computations|BSW12]]
