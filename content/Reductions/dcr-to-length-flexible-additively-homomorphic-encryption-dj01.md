---
type: reduction
status: draft
title: "DCR ⇒ Length-flexible additively homomorphic encryption (Damgård–Jurik)"
aliases: []
id: red-dcr-to-length-flexible-additively-homomorphic-encryption-dj01
kind: implication
hypotheses: [dcr]
conclusion: length-flexible-additively-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]]"
security-loss: ""
---

# DCR ⇒ Length-flexible additively homomorphic encryption (Damgård–Jurik)

## Statement

Under [[decisional-composite-residuosity|DCR]], the Damgård–Jurik generalisation of Paillier's scheme is a [length-flexible additively homomorphic encryption](homomorphic-encryption#length-flexible-additively-homomorphic-encryption) scheme: one RSA modulus $N$ serves every block length $s \ge 1$, chosen after the public key is fixed, with plaintexts in $\ZZ_{N^s}$, ciphertexts in $\ZZ_{N^{s+1}}^*$, and the product of two ciphertexts encrypting the sum of their plaintexts; at each length the scheme is as secure as Paillier's — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].

## Notes

- For a fixed $s$ this is the scheme of [$d$-th Composite Residuosity ⇒ Additively homomorphic encryption](d-th-composite-residuosity-to-he), whose assumption is equivalent to DCR for every $d$ ([DCR ⇔ $d$-th Composite Residuosity](dcr-to-d-th-composite-residuosity-dj01)) — [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].
- Nested encryption across lengths gives single-server PIR with polylogarithmic communication ([Length-flexible additively homomorphic encryption ⇒ PIR with polylogarithmic communication](length-flexible-additively-homomorphic-encryption-to-polylog-cpir-lip05)) — [[Lip05 - An Oblivious Transfer Protocol with Log-Squared Communication|Lip05]].
