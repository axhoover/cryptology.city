---
type: barrier
status: stub
title: "No fully-black-box reduction from ZKP to Argument systems"
aliases: []
id: bar-zkp-to-argument-systems
hypotheses: [zkp]
conclusion: constant-round-zk-argument
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source: folklore
---

# No fully-black-box reduction from ZKP to Argument systems

A reduction of class `fully-black-box` from [[zero-knowledge-proof|ZKP]] to [[zero-knowledge-proof#argument-systems|Argument systems]] would imply a contradiction.

## Statement

Migrated verbatim from [[black-box-separations]] § Limitations:

> - **Non-black-box constructions exist.** Barak's non-black-box zero-knowledge construction uses the circuit of the adversary to achieve constant-round ZK arguments, bypassing oracle-separation impossibilities that apply to fully BB zero-knowledge protocols.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- NO CITATION. 'Barak's non-black-box zero-knowledge construction' names an author and a result with no wikilink and no reference page. content/References/ has no Bar01/Barak entry. CLAUDE.md requires a citation for exactly this kind of claim, and it is not folklore.
- This is a barrier CIRCUMVENTION, not a barrier: it records that a known impossibility (GK96, constant-round black-box-simulation ZK) is bypassed by a non-black-box technique. The data model needs an explicit 'circumvents barrier X' edge type; there is nowhere to put this.
- The barrier it circumvents (GK96) is stated on a different page (content/Complexity/computational-zero-knowledge.md:35) with no cross-link in either direction.
