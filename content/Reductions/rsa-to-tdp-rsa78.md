---
type: reduction
status: draft
title: "RSA ⇒ TDP"
aliases: []
id: red-rsa-to-tdp-rsa78
kind: implication
hypotheses: [rsa]
conclusion: tdp
class: unstated
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: ""
---

# RSA ⇒ TDP

[[rsa-assumption|RSA]] implies [[trapdoor-permutation|TDP]].

## Statement

Migrated verbatim from [[rsa-assumption]] § Known Results:

> - RSA implies the existence of [[trapdoor-permutation|trapdoor permutations]], which in turn imply [[public-key-encryption|PKE]] — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - NIZK for all NP from trapdoor permutations (hence from [[rsa-assumption|RSA]] or [[discrete-logarithm|DL]]) in the CRS model — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]

Migrated verbatim from [[trapdoor-permutation]] § Other results:

> - The [[rsa-assumption|RSA assumption]] implies the existence of a trapdoor permutation (RSA function) — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]

## Notes

This relation is stated on 3 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- RSA gives a permutation on Z_n^\*, not on a bit-string domain; the standard certifiability and domain-sampling caveats are not mentioned.
- COMPOSITE CHAIN: "RSA implies trapdoor permutations, which in turn imply PKE" is two reductions and must be split.
- The second link (TDP => PKE) is NOT due to RSA78; the single trailing citation is misattributed to both links.
- RSA yields a trapdoor permutation on Z_n^\*, not on a bit-string domain; the standard certifiability/domain caveat is not mentioned.
- The security notion of the resulting PKE is unstated (plain TDP => PKE gives only one-way, not IND-CPA, encryption without a hardcore bit).
- UNCITED WHILE THE PARENT IS CITED: BFM88 does not prove RSA => TDP; the parenthetical has no source.
- 'trapdoor permutations' is bare text although content/Primitives/trapdoor-permutation.md exists.
- The BFM/FLS paradigm needs a certifiable / doubly-enhanced TDP, which plain RSA-as-TDP does not automatically give; the edge cannot express that.
- SUSPECT MATH: '(hence from RSA or DL)'. The discrete logarithm assumption does NOT give trapdoor permutations - there is no known trapdoor for exponentiation, and TDPs from DL are not known to exist. The DL half of this parenthetical appears to be an outright error. Report only; do not fix.
- Composite: assumption => TDP => NIZK for NP; must be split.
- 'trapdoor permutations' is bare text although content/Primitives/trapdoor-permutation.md exists - missing wikilink.
- The doubly-enhanced TDP caveat (needed to make the BFM/FLS paradigm go through) is omitted.
- The RSA function is a permutation only on $\ZZ_N^*$ for a properly generated modulus, and is a 'certified' TDP only under extra conditions — the bullet states it unqualified.
- RSA78 predates the formalization of 'the RSA assumption'; the citation is to the scheme paper, which is conventional but slightly anachronistic for an assumption-implies-primitive edge.
