---
type: reduction
status: draft
title: "ABE ⇒ BE"
aliases: []
id: red-abe-to-be
kind: implication
hypotheses: [abe]
conclusion: be
class: fully-black-box
model: standard
source: folklore
security-loss: "none (the reduction preserves the advantage)"
---

# ABE ⇒ BE

[[attribute-based-encryption|ABE]] implies [[broadcast-encryption|BE]].

## Statement

Any CP-[[attribute-based-encryption|ABE]] scheme whose policy class contains disjunctions yields [[broadcast-encryption|BE]] for $n$ users, with no ciphertext-size requirement: over attribute universe $[n]$, user $i$'s key is the ABE key for the singleton attribute set $\{i\}$, and encryption to $S \subseteq [n]$ encrypts under the policy $f_S(x) = [x \cap S \neq \emptyset]$, the disjunction of the attributes in $S$, so $f_S(\{i\}) = [i \in S]$. A BE adversary is verbatim a CP-ABE adversary with the same advantage. The ciphertext inherits the ABE ciphertext size for a policy of size $|S|$; short ciphertexts require CP-ABE with ciphertexts succinct in the policy — folklore.

## Sketch

The BE relation $i \in S$ is the CP-ABE relation $f_S(\{i\}) = 1$, so BE admissibility (no key for $i \in S^*$) is CP-ABE admissibility (no queried attribute set satisfies $f_{S^*}$).

## Notes

`class: fully-black-box`: The BE algorithms call the CP-ABE algorithms as oracles on the locally computed encodings $\{i\}$ and $f_S$. The reduction runs the BE adversary as an oracle, forwarding key queries and the challenge. Fixed construction, fixed advantage-preserving reduction.
