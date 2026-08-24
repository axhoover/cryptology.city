---
type: barrier
status: draft
title: "No reduction from OWP to KE"
aliases: []
id: bar-owp-to-ke-ir89
hypotheses: [owp]
conclusion: ke
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[IR89 - Limits on the provable consequences of one-way permutations|IR89]]"
---

# No reduction from OWP to KE

A reduction of class `unstated` from [[one-way-permutation|OWP]] to [[key-exchange|KE]] would imply a contradiction.

## Statement

Migrated verbatim from [[black-box-separations]] § The Impagliazzo–Rudich Separation:

> The landmark result of [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] established the first major cryptographic oracle separation:
>
> > **Theorem (Impagliazzo–Rudich, 1989).** There exists an oracle $O$ relative to which [[one-way-permutation|one-way permutations (OWPs)]] exist but secret-key agreement (KA) is impossible.

Migrated verbatim from [[black-box-separations]] § The Impagliazzo–Rudich Separation:

> 1. No fully black-box construction of KA from OWP can exist.

Migrated verbatim from [[black-box-separations]] § The Impagliazzo–Rudich Separation:

> 2. Any proof that $\mathrm{OWP} \Rightarrow \mathrm{KA}$ must use non-black-box techniques.

Migrated verbatim from [[key-exchange]] § Other results:

> - No black-box construction of KE from one-way permutations — standard separation (no KE from symmetric primitives)

Migrated verbatim from [[black-box-separations]] § The Impagliazzo–Rudich Separation:

> The landmark result of [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] established the first major cryptographic oracle separation:
>
> > **Theorem (Impagliazzo–Rudich, 1989).** There exists an oracle $O$ relative to which [[one-way-permutation|one-way permutations (OWPs)]] exist but secret-key agreement (KA) is impossible.
>
> **Corollaries.**
>
> 1. No fully black-box construction of KA from OWP can exist.
> 2. Any proof that $\mathrm{OWP} \Rightarrow \mathrm{KA}$ must use non-black-box techniques.

Migrated verbatim from [[black-box-separations]]:

> 3. Such a proof would be as hard as proving $\classP \neq \classNP$: the oracle separation shows that in the random permutation world, any black-box security argument must rule out a concrete polynomial-time eavesdropper, which is equivalent to proving $\classP \neq \classNP$ relative to that oracle.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'secret-key agreement (KA)' is not wikilinked even though content/Primitives/key-exchange.md exists and carries the alias 'Key agreement'.
- The oracle is a random _permutation_, so 'rom' is an approximation for the model field; the page's own sketch (line 63) says $\pi$ is a random permutation, not a random oracle.
- IR89's actual theorem is usually stated for one-way _functions_/permutations relative to a random oracle plus a PSPACE-complete oracle (to kill non-relativizing tricks); the page's version omits the second oracle. Flagged for verification, not fixed.
- Numbered corollary carries no citation of its own; the IR89 citation is on the theorem at line 52.
- Duplicates the theorem edge at line 52-54 (the theorem and its corollary 1 are the same graph edge stated twice).
- OWP and KA are unlinked in the corollary list.
- Barrier of the form '(any reduction OWP => KA) => the reduction is non-black-box'. Q here is a constraint on the reduction class, i.e. the third/fourth barrier shape ('another reduction'), not a contradiction or an object.
- No citation on the corollary (inherited from IR89 at line 52).
- Uses '$\mathrm{OWP} \Rightarrow \mathrm{KA}$' as raw \mathrm text rather than macros/wikilinks, unlike the rest of the wiki.
- Labelled '- standard separation' with no citation; this is Impagliazzo-Rudich (IR89), an attributable result, so the folklore exception is misused. No IR89 reference page exists.
- The parenthetical generalization ('no KE from symmetric primitives') is broader than the stated OWP separation.
- No wiki page for one-way permutation as distinct from hash-function/OWF.
- Corollary 1 and Corollary 2 are the same statement written twice: 'no fully black-box construction of KA from OWP' and 'any proof must use non-black-box techniques' are logically identical, so the numbered list overstates how many corollaries there are.
- Corollary 2 says 'any proof that OWP => KA must use non-black-box techniques', but the oracle separation only rules out RELATIVIZING proofs; a non-relativizing but still black-box-in-the-primitive proof is not formally excluded by the quoted theorem. The page's own '## Limitations' section (line 93) contradicts corollary 2 by saying Types 2-4 remain open.
- The theorem is stated for 'secret-key agreement (KA)' in prose but the wiki's page for that object is `[[key-exchange]]`; KA is not registered as an alias there (aliases are KE / Key exchange / Key agreement / DH key exchange — 'Key agreement' is present, 'KA' is not), so the object id is not machine-resolvable from this text.
- IR89 is stated here as OWP => KA only. The standard modern reading (OWF/random oracle => KA) is never stated on the wiki, and the same barrier is restated in three other places (content/Primitives/key-exchange.md:50, content/impagliazzos-five-worlds.md:63, content/Glossary/random-oracle-model.md:25) with different and inconsistent wording.
- The wiki inverts IR89's logical structure. IR89's headline theorem is: IF P = NP THEN no secret-key-agreement protocol is secure relative to a random permutation oracle; hence proving a black-box KA-from-OWP construction secure is AS HARD AS proving P != NP. The oracle separation (corollary-1 framing) is derived as a COROLLARY of that. The wiki presents the oracle separation as the theorem and the P != NP consequence as corollary 3 — exactly backwards from the abstract stored at content/References/IR89 - Limits on the provable consequences of one-way permutations.md:20.
- The justification given for corollary 3 is wrong as written: 'the oracle separation shows that in the random permutation world, any black-box security argument must rule out a concrete polynomial-time eavesdropper, which is equivalent to proving P != NP relative to that oracle.' The real argument is the conditional 'if P = NP then the eavesdropper is efficient', not an equivalence, and 'equivalent to proving P != NP relative to that oracle' is not a statement IR89 makes.
- consequenceTarget is p-neq-np but the wiki has no page or object id for the proposition 'P != NP' — only `[[polynomial-time]]` and `[[nondeterministic-polynomial-time]]` class pages. A barrier data model needs proposition-typed conclusion objects, not just class pages.
- NO CITATION, and mislabelled as folklore. It says '— standard separation', invoking CLAUDE.md's folklore exception for what is the single most famous cited separation in cryptography (IR89). The IR89 reference page exists at content/References/IR89 - ... .md and is cited on the glossary page; this bullet just does not link it.
- The parenthetical '(no KE from symmetric primitives)' silently widens the hypothesis from OWP to an unnamed class 'symmetric primitives' — a second, different (and stronger) barrier smuggled into the same bullet. Two hyperedges in one line.
- Duplicates content/Glossary/black-box-separations.md:54-58 with weaker wording and no oracle.
