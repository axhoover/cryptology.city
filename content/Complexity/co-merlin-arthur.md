---
type: complexity-class
status: draft
aliases:
  - coMA
  - Co-Merlin-Arthur
title: Co-Merlin-Arthur
id: coma
---

# Co-Merlin-Arthur

The complement class of [[merlin-arthur|MA]]: a problem is in coMA if its complement is in MA — standard.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:C#coma).

## Known relationships

- $\mathbf{coMA} \subseteq \classcoAM$, by taking complements in $\classMA \subseteq \classAM$ — [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].
- $\classcoNP \subseteq \mathbf{coMA}$ and $\classBPP \subseteq \mathbf{coMA}$, by taking complements in $\classNP \subseteq \classMA$ and $\classBPP \subseteq \classMA$ — standard.
- $\classNP \subseteq \mathbf{coMA}$ would give $\classcoNP \subseteq \classMA \subseteq \classAM$ and collapse the [[polynomial-time-hierarchy|polynomial hierarchy]] to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]], [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].

<!-- BEGIN GENERATED participates-in 2739415bc10c -->

## Participates in

**Produces Co-Merlin-Arthur**

- [[bb-zk-four-message-proof-to-coma-kat08|Four-message black-box ZK proofs ⊆ coMA]]

<!-- END GENERATED participates-in -->
