---
type: reduction
status: draft
title: "LWE ⇒ LR-PKE (Regev)"
aliases: []
id: red-lwe-to-leakage-resilient-pke-agv09
kind: implication
hypotheses: [lwe]
conclusion: leakage-resilient-pke
class: unstated
model: standard
source:
  - "[[AGV09 - Simultaneous Hardcore Bits and Cryptography against Memory Attacks|AGV09]]"
security-loss: ""
---

# LWE ⇒ LR-PKE (Regev)

## Statement

Under [[learning-with-errors|LWE]], the public-key encryption scheme of [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] is, without modification, [$\ell$-leakage-resilient](leakage-resilient-public-key-encryption#leakage-resilient-cpa-security) for $\ell$ a large fraction of the bit length of its secret key: it remains CPA-secure when the adversary, after seeing $\pk$, learns an arbitrary efficiently computable function of $\sk$ of bounded output length, with the key size, encryption and decryption unchanged. How large a fraction may leak depends on the LWE parameters and hardness assumed — [[AGV09 - Simultaneous Hardcore Bits and Cryptography against Memory Attacks|AGV09]].

## Notes

- The identity-based encryption scheme of [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]] is resilient to the same memory attacks — [[AGV09 - Simultaneous Hardcore Bits and Cryptography against Memory Attacks|AGV09]].
- With similar techniques, $N - o(N)$ of the $N$ input bits of an injective trapdoor function, a variant of one from [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]], are simultaneously hard-core — [[AGV09 - Simultaneous Hardcore Bits and Cryptography against Memory Attacks|AGV09]].
- Under DDH, leakage of a $1 - o(1)$ fraction of the secret key is tolerated by a scheme from a hash proof system: [[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]] — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]].
