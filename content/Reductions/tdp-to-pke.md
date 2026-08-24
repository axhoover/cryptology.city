---
type: reduction
status: stub
title: "TDP ⇒ PKE"
aliases: []
id: red-tdp-to-pke
kind: implication
hypotheses: [tdp]
conclusion: pke
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# TDP ⇒ PKE

[[trapdoor-permutation|TDP]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[rsa-assumption]] § Known Results:

> - RSA implies the existence of [[trapdoor-permutation|trapdoor permutations]], which in turn imply [[public-key-encryption|PKE]] — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

Migrated verbatim from [[public-key-encryption]] § Other results:

> - [[trapdoor-permutation|TDP]] implies PKE

Migrated verbatim from [[trapdoor-permutation]] § Other results:

> - [[public-key-encryption|PKE]] can be constructed from trapdoor permutations — standard (TDP + hard-core predicate → PKE)

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

This relation is stated on 4 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- UNCITED SUB-EDGE WHILE THE PARENT IS CITED: RSA78 is attached to the whole bullet but does not prove this link; the generic TDP-to-IND-CPA-PKE construction needs a hardcore predicate (Goldreich-Levin).
- The security notion of the resulting PKE is unstated; plain TDP implies only one-way, not IND-CPA, encryption.
- COMPOSITE CHAIN: "RSA implies trapdoor permutations, which in turn imply PKE" is two reductions and must be split.
- The second link (TDP => PKE) is NOT due to RSA78; the single trailing citation is misattributed to both links.
- RSA yields a trapdoor permutation on Z_n^\*, not on a bit-string domain; the standard certifiability/domain caveat is not mentioned.
- The security notion of the resulting PKE is unstated (plain TDP => PKE gives only one-way, not IND-CPA, encryption without a hardcore bit).
- SUSPECTED MATHEMATICAL ERROR: "TDPs (equivalently, the existence of PKE or OT)" asserts TDP ≡ PKE ≡ OT. PKE is not known to imply TDPs, and PKE is black-box separated from OT (Gertner–Kannan–Malkin–Reingold–Viswanathan, i.e. the very GKM+00 cited two sentences earlier). Recorded, not fixed.
- No citation.
- The parenthetical also fuses a disjunction ("PKE or OT") into an equivalence — exactly the disjunction/conjunction conflation the data model must avoid.
- No citation and no folklore label (the standard sources would be DH76/GM84/Yao82, none cited here).
- Security notion of the conclusion unstated (TDP + hardcore bit gives CPA-secure, bit-by-bit, PKE).
- Cited only as '— standard'; this is genuinely textbook, so the folklore label is defensible here.
- The sketch names a second ingredient ('hard-core predicate') which is NOT an independent hypothesis — Goldreich-Levin gives a hard-core predicate for any OWF — so this must not be migrated as a conjunctive edge. Marked conjunctive:false deliberately.
- Modern statements need an ENHANCED TDP even for PKE-from-TDP in some formulations; the page distinguishes enhanced TDPs at line 46 but not here.
