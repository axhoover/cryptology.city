---
type: reduction
status: draft
title: "Ideal-SVP ⇒ Ring LWE"
aliases: []
id: red-ideal-svp-to-ring-lwe-lpr10
kind: implication
hypotheses: [ideal-svp]
conclusion: ring-lwe
class: unstated
model: quantum
source:
  - "[[LPR10 - On ideal lattices and learning with errors over rings|LPR10]]"
security-loss: ""
---

# Ideal-SVP ⇒ Ring LWE

[[ideal-svp|Ideal-SVP]] implies [[learning-with-errors#ring-lwe|Ring LWE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Ring LWE:

> Ring LWE admits a quantum worst-case to average-case reduction from the **Ideal-SVP** problem (shortest vector in ideal lattices), giving a hardness foundation analogous to LWE's reduction from SVP — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]].

Migrated verbatim from [[LPR10 - On ideal lattices and learning with errors over rings]]:

> Introduced Ring LWE (RLWE), which restricts LWE samples to a polynomial ring $R_q = \ZZ_q[x]/\langle\Phi_n(x)\rangle$ (typically the $n$-th cyclotomic ring). This yields $O(n \log n)$-size keys (vs. $O(n^2)$ for plain LWE) and admits fast NTT-based arithmetic. The paper also gives a quantum worst-case to average-case reduction from ideal lattice problems (Ideal-SVP) to Ring LWE.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Ideal-SVP has no wiki page.
- Terminology drift: this bullet says the analogous LWE result is a "reduction from SVP", while the LWE section (line 86) says GapSVP and SIVP.
- STRUCTURAL: no ## Abstract heading; unlabelled editorial paragraph.
- AMBIGUOUS DIRECTION: 'a quantum worst-case to average-case reduction from ideal lattice problems (Ideal-SVP) to Ring LWE' inverts under the two standard conventions. Recorded in the hardness-implication direction (Ideal-SVP hard => RLWE hard), matching the existing inventory record Assumptions/learning-with-errors.md:111 [ideal-svp => ring-lwe]. The prose itself does not disambiguate.
- The second sub-edge (RLWE is LWE restricted to a ring) is a definitional specialisation, not a reduction — direction unclear.
- Efficiency claims O(n log n) vs O(n^2) key sizes and NTT arithmetic carry no theorem anchor.
- 'typically the n-th cyclotomic ring' silently narrows LPR10's general number-field setting.
- No inline citations.
- DUPLICATION of the existing inventory record at Assumptions/learning-with-errors.md:111.
