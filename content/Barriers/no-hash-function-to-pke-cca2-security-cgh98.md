---
type: barrier
status: draft
title: "No fixed-construction reduction from Hash function to CCA-secure PKE (random-oracle instantiation)"
aliases: []
id: bar-hash-function-to-pke-cca2-security-cgh98
hypotheses: [hash-function]
conclusion: pke-cca2-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on:
  - "public-key encryption secure under adaptive chosen-ciphertext attack in the random-oracle model"
source:
  - "[[CGH98 - The Random Oracle Methodology Revisited|CGH98]]"
rationale:
  class: "The construction is CGH98's encryption scheme with its random oracle instantiated by the hash function, and a counterexample against every function ensemble refutes it."
  strength: "The theorem assumes a public-key encryption scheme secure under adaptive chosen-ciphertext attack in the random-oracle model, which CGH98 modify into the counterexample."
---

# No fixed-construction reduction from Hash function to CCA-secure PKE (random-oracle instantiation)

## Statement

If some [[public-key-encryption|public-key encryption]] scheme is secure under adaptive chosen-ciphertext attack in the [[random-oracle-model|random oracle model]], there is a scheme $\PKE$ with oracle access, secure under adaptive chosen-ciphertext attack in the random oracle model, such that for every function ensemble $F = \{f_s : \bits^* \to \bits^{\ell(\secpar)}\}_{s \in \bits^\secpar}$ computable in polynomial time, with $\omega(\log \secpar) \le \ell(\secpar) \le \poly(\secpar)$, the scheme $\PKE^F$ is not [[public-key-encryption#semantic-security|semantically secure]], and a chosen-ciphertext attack on it reveals the decryption key — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Theorem 4.6(b)). Here $\PKE^F$ samples $s \getsr \bits^\secpar$ with the key pair, publishes $s$ in the public key and answers every oracle query $x$ with $f_s(x)$. In particular $\PKE^F$ is not [[public-key-encryption#cca-security|CCA-secure]], so instantiating the random oracle of a CCA-secure scheme by a [[hash-function|hash function]] does not in general preserve CCA security.

## Sketch

$\PKE$ is the construction of [[no-hash-function-to-semantic-security-cgh98|the semantic-security case]] applied to the given scheme; besides decrypting $(1, c')$ to $c'$ and $(2, c')$ as the given scheme does, its $\Dec$ outputs the decryption key on a ciphertext $(3, \langle i, s, \pi \rangle)$ in which $\pi$ is a valid CS proof for the statement of [[no-hash-function-to-ds-cgh98|the signature case]]. In the random oracle model such plaintexts and ciphertexts are infeasible to find, so $\PKE$ keeps the security of the given scheme; under $F$ the adversary builds one from the published seed and asks for its decryption before the challenge, which is admissible — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, §4.4).

## Notes

- The same construction, from a scheme semantically secure in the random oracle model, gives the counterexample for semantic security ([[no-hash-function-to-semantic-security-cgh98|No fixed-construction reduction from Hash function to semantically secure PKE]]) — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Theorem 4.6(a)).
