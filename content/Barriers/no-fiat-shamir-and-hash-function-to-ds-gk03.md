---
type: barrier
status: draft
title: "No reduction from Fiat-Shamir + Hash function to DS"
aliases: []
id: bar-fiat-shamir-and-hash-function-to-ds-gk03
hypotheses: [fiat-shamir, hash-function]
conclusion: ds
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]"
---

# No reduction from Fiat-Shamir + Hash function to DS

A reduction of class `unstated` from [[fiat-shamir-heuristic|Fiat-Shamir]] together with [[hash-function|Hash function]] to [[digital-signature|DS]] would imply a contradiction.

## Statement

Migrated verbatim from [[fiat-shamir-heuristic]]:

> Goldwasser and Kalai showed that the Fiat-Shamir transform is uninstantiable in the standard model [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. They constructed a 3-round public-coin identification scheme that is secure in the ROM, yet whose Fiat-Shamir transform is existentially forgeable under _every_ concrete hash function. This demonstrates that the random oracle cannot always be replaced by an actual hash function, even a cryptographically strong one.
>
> $$\Adv^{\mathrm{uf}}_{\Pi_H, \calA}(\secpar) \ge 1 - \negl(\secpar) \quad \text{for all } H.$$

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Barrier shape: (FS instantiated with any concrete hash $H$) => the transformed scheme is forgeable, i.e. an uninstantiability separation between the ROM and the standard model. The conclusion is recorded as 'contradiction' because Q here is the failure of the ROM-to-standard-model transfer.
- The displayed inequality '$\Adv^{\mathrm{uf}}_{\Pi_H, \calA}(\secpar) \ge 1 - \negl(\secpar) \quad \text{for all } H$' quantifies over $H$ but leaves $\calA$ and $\Pi$ unquantified; the real statement is 'there exists an ID scheme $\Pi$, secure in the ROM, such that for every efficient $H$ there is an efficient forger $\calA$'. The order of quantifiers is lost in the display. Flagged, not fixed.
- $\Pi_H$ is not defined anywhere on the page ($\Pi_\mathsf{FS}$ is the notation introduced at line 16).
- The advantage superscript '\mathrm{uf}' does not use the required \ufcma/\eufcma game-name macros listed in CLAUDE.md.
