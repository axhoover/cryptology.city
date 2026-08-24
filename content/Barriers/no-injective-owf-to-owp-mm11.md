---
type: barrier
status: draft
title: "No reduction from Injective OWF to OWP"
aliases: []
id: bar-injective-owf-to-owp-mm11
hypotheses: [injective-one-way-function]
conclusion: owp
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11]]"
---

# No reduction from Injective OWF to OWP

A reduction of class `unstated` from [[injective-one-way-function|Injective OWF]] to [[one-way-permutation|OWP]] would imply a contradiction.

## Statement

Migrated verbatim from [[black-box-separations]] § Other Notable Separations:

> - **OWP from injective OWF** — A [[one-way-permutation|OWP]] cannot be black-box constructed from an injective one-way function — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11]].

Migrated verbatim from [[one-way-permutation]] § Other results:

> - A OWP cannot be constructed from an injective one-way function in a black-box way. — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11]]

Migrated verbatim from [[trapdoor-permutation]] § Other results:

> - A OWP cannot be constructed from an injective one-way function in a black-box way — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'injective one-way function' has no page and no alias; the nearest node is content/Primitives/hash-function.md, which oddly carries 'OWF'/'OWFs' as aliases, so any OWF-typed hypothesis in this wiki currently lands on the hash function page.
- Class is given only as 'black-box constructed', not explicitly 'fully black-box' as in the RTV04 taxonomy the page introduces earlier.
- The bold lead-in reads 'OWP from injective OWF' while the sentence states the opposite orientation (OWP _cannot_ be constructed from injective OWF) — the label is a topic, not the claim, and could be misread as a positive construction.
- 'injective one-way function' has no page (non-slug identifier); it is not the same object as `[[hash-function]]` (OWF).
- Barrier target Q ('no black-box construction') is implicit — encode as: (exists black-box reduction {injective-OWF} => OWP) => contradiction.
- Cleanest barrier record in this chunk: class is explicitly 'black-box', Q is 'no such construction exists'.
- 'OWP' and 'injective one-way function' are both unlinked, even though content/Primitives/one-way-permutation.md exists; 'injective-one-way-function' has no page.
- Off-topic placement: this bullet is about OWP vs injective OWF and mentions trapdoor permutations nowhere — surprising to find it in the TDP page's '# Other results'.
- 'injective one-way function' has no page and no alias anywhere in content/; the only OWF page is content/Primitives/hash-function.md (aliases OWF, CRH, Collision-resistant hash function). The hypothesis object of this hyperedge therefore does not exist as an object id.
- The bullet drops MM11's actual hypothesis, which is a LENGTH-INCREASING injective OWF (even 1-bit-increasing, even adaptively one-way) — a permutation IS an injective OWF, so the sentence as written is literally false: a OWP can trivially be black-box constructed from an injective OWF that happens to be a permutation. See the abstract at content/References/MM11 - ... .md:20.
- MM11's stated corollary (no fully black-box OWP from a regular OWF of regularity > 1) and its hierarchy-among-injective-OWFs result are not recorded anywhere on the wiki.
- Stated three times across the wiki (black-box-separations.md:75, one-way-permutation.md:22, trapdoor-permutation.md:57) with three different wordings and inconsistent trailing punctuation.
- Misfiled: MM11 separates OWP from injective OWF. It says nothing about trapdoor permutations, yet it is the last bullet of the TDP page's '# Other results'. This is a verbatim copy of content/Primitives/one-way-permutation.md:22.
