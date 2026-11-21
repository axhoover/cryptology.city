---
type: barrier
status: draft
title: "No fixed-construction reduction from Hash function to semantically secure PKE (random-oracle instantiation)"
aliases: []
id: bar-hash-function-to-semantic-security-cgh98
hypotheses: [hash-function]
conclusion: semantic-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on:
  - "public-key encryption semantically secure in the random-oracle model"
source:
  - "[[CGH98 - The Random Oracle Methodology Revisited|CGH98]]"
rationale:
  class: "The construction is CGH98's encryption scheme with its random oracle instantiated by the hash function, and a counterexample against every function ensemble refutes it."
  strength: "The theorem assumes a public-key encryption scheme semantically secure in the random-oracle model, which CGH98 modify into the counterexample."
---

# No fixed-construction reduction from Hash function to semantically secure PKE (random-oracle instantiation)

## Statement

If some [[public-key-encryption|public-key encryption]] scheme is semantically secure in the [[random-oracle-model|random oracle model]], there is a public-key encryption scheme $\PKE$ with oracle access, semantically secure in the random oracle model, such that for every function ensemble $F = \{f_s : \bits^* \to \bits^{\ell(\secpar)}\}_{s \in \bits^\secpar}$ computable in polynomial time, with $\omega(\log \secpar) \le \ell(\secpar) \le \poly(\secpar)$, the scheme $\PKE^F$ is not [[public-key-encryption#semantic-security|semantically secure]] — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Theorem 4.6(a)). Here $\PKE^F$ samples $s \getsr \bits^\secpar$ with the key pair, publishes $s$ in the public key and answers every oracle query $x$ with $f_s(x)$. Semantic security is that of [[GM84 - Probabilistic encryption|GM84]], which lets the message space depend on the public key, and not the seemingly weaker formulation in which it may not — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, footnote 14); it is the key-dependent formulation, in which the adversary chooses the message distribution after seeing $\pk$. Hence instantiating the random oracle of a semantically secure scheme by a [[hash-function|hash function]] does not in general preserve semantic security.

## Sketch

$\PKE$ encrypts as the given scheme, with ciphertexts $(2, c')$, except that a message $\langle i, s, \pi \rangle$ carrying a valid CS proof, as in [[no-hash-function-to-ds-cgh98|the signature case]], is output in the clear as $(1, \langle i, s, \pi \rangle)$; in the random oracle model such a message is infeasible to find, and under $F$ the adversary builds one from the published seed — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, §4.4). With $m_0$ such a message, the adversary that chooses the uniform distribution on $\{m_0, m_1\}$ for any $m_1 \ne m_0$ of the same length and the predicate $[m = m_0]$, and answers $1$ exactly when the ciphertext is $(1, m_0)$, is always right, while a simulator, which sees nothing of the draw, is right with probability at most $1/2$ — standard.

## Notes

- Unlike the signature theorem, this one assumes a scheme secure in the random oracle model. A scheme secure without random oracles is secure in it, so trapdoor permutations suffice, and by [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] such schemes are unlikely to be proved to exist with no assumption — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Remark 4.7).
- The analogous result holds for shared-key encryption with no computational assumption, since secure shared-key encryption exists in the random oracle model — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Remark 4.8).
- For chosen-ciphertext security the counterexample is stronger: the instantiated scheme is not even semantically secure, and a chosen-ciphertext attack recovers its decryption key ([[no-hash-function-to-pke-cca2-security-cgh98|No fixed-construction reduction from Hash function to CCA-secure PKE]]) — [[CGH98 - The Random Oracle Methodology Revisited|CGH98]] (arXiv v1, Theorem 4.6(b)).
