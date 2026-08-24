---
type: reduction
status: draft
title: "DLOG ⇒ CDH"
aliases: []
id: red-dlog-to-cdh-fkl18
kind: implication
hypotheses: [dlog]
conclusion: cdh
class: unstated
model: algebraic-group
source:
  - "[[FKL18 - The Algebraic Group Model and its Applications|FKL18]]"
security-loss: ""
---

# DLOG ⇒ CDH

[[discrete-logarithm|DLOG]] implies [[computational-diffie-hellman|CDH]].

## Statement

Migrated verbatim from [[algebraic-group-model]] § Key Results:

> - **CDH $\equiv_{\mathrm{AGM}}$ DLOG:** any algebraic CDH adversary can be converted into a DLOG adversary with the same advantage and essentially the same running time.

Migrated verbatim from [[algebraic-group-model]] § Key Results:

> These reductions, combined with the $\Omega(\sqrt{p})$ GGM lower bound of [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]], yield tight concrete lower bounds for CDH and related problems against algebraic-and-generic adversaries.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on the bullet itself; the FKL18 citation sits on the section lead-in at line 28 ('The following results are due to `[[FKL18 ...|FKL18]]`'). Migration must carry the lead-in citation onto each of the four bullets (lines 30-33).
- The bullet body only states one direction (algebraic CDH adversary -> DLOG adversary, i.e. DLOG hardness implies CDH hardness in the AGM) while the bolded label asserts full equivalence '$\equiv_{\mathrm{AGM}}$'. The reverse direction (CDH -> DLOG) is trivial/unstated.
- CDH and DLOG are wikilink-less here (they are linked on generic-group-model.md but not on this page).
- '$\equiv_{\mathrm{AGM}}$' and '$\leq_{\mathrm{AGM}}$' are ad hoc notation defined nowhere on the page or in the Glossary.
- MODEL IS LOAD-BEARING: the reduction holds only for algebraic adversaries; dropping model:'algebraic-group' turns a model-relative reduction into a standard-model implication that is not known.
- The page states this as an equivalence at line 30 (CDH ==\_AGM DLOG); recording only DLOG => CDH loses the other direction.
- The sub-edge's real source is line 30, not line 35 — 'These reductions' is an unresolved back-reference, so the parent's hypothesis set is not pinned down.
- COMPOSITE: chains the AGM reduction(s) of lines 30-33 with the Sho97 $\Omega(\sqrt p)$ GGM query lower bound to get a concrete lower bound for CDH against 'algebraic-and-generic' adversaries. Must be split: (i) DLOG => CDH in the AGM (FKL18); (ii) DLOG requires $\Omega(\sqrt p)$ generic queries (Sho97).
- 'These reductions' is an unresolved back-reference to an unspecified subset of the four bullets above — the hypothesis set of the composite claim is not pinned down.
- 'algebraic-and-generic adversaries' names a hybrid adversary class the page never defines; the model field cannot be assigned cleanly (AGM and GGM at once).
- The composition depends on the AGM->GGM transfer that line 43 (KZ22) says does not hold in general; the page does not reconcile these two statements.
- REPAIR PATCH: T4. Wiki L35: "These reductions, combined with the $\Omega(\sqrt{p})$ GGM lower bound of `[[Sho97]]`, yield tight concrete lower bounds for CDH and related problems against algebraic-and-generic adversaries." The stored edge lists computational-diffie-hellman as BOTH a hypothesis and the conclusion (CDH => CDH), which is vacuous. The sentence states no reduction INTO CDH; it states a model-relative LOWER BOUND on CDH obtained by composing the AGM reduction of L30 with Sho97 generic-group bound. Repair: empty the hypothesis set (a GGM/AGM query lower bound is unconditional _within the idealised model_ — the model field carries the qualification), retype as a barrier, and set model to generic-group. splitInto is rewritten so the two halves are typed: (i) FKL18 DLOG=>CDH in the AGM is a reduction; (ii) Sho97 is a generic-group lower bound on DLOG, NOT the plain unconditional reduction []=>DLOG the current sub-edge asserts. Sub-edges are given direction/category/model, which schema defect 6.1 says all 253 lack.
- SPLIT VERDICT under-split: The sentence combines 'these reductions' (lines 30-33: CDH, DDH, BLS, Groth's SNARK) with the Sho97 bound to get bounds for 'CDH and related problems', but only the CDH branch is materialized.
