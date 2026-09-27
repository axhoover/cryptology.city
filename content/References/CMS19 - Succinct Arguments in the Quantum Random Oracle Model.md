---
type: reference
status: stub
title: "CMS19"
source: https://eprint.iacr.org/2019/834
authors: Alessandro Chiesa, Peter Manohar, Nicholas Spooner
venue: TCC 2019
published: 2019
aliases:
  - CMS19
cryptobib_key: TCC:ChiManSpo19
---

# [CMS19] Succinct Arguments in the Quantum Random Oracle Model

**Authors:** Alessandro Chiesa, Peter Manohar, Nicholas Spooner | **Venue:** TCC 2019 | [Source](https://eprint.iacr.org/2019/834)

## Abstract

Succinct non-interactive arguments (SNARGs) are highly efficient certificates of membership in non-deterministic languages. Constructions of SNARGs in the random oracle model are widely believed to be post-quantum secure, provided the oracle is instantiated with a suitable post-quantum hash function. No formal evidence, however, supports this belief. In this work we provide the first such evidence by proving that the SNARG construction of Micali is unconditionally secure in the quantum random oracle model. We also prove that, analogously to the classical case, the SNARG inherits the zero knowledge and proof of knowledge properties of the PCP underlying the Micali construction. We thus obtain the first zero knowledge SNARG of knowledge (zkSNARK) that is secure in the quantum random oracle model. Our main tool is a new lifting lemma that shows how, for a rich class of oracle games, we can generically deduce security against quantum attackers by bounding a natural classical property of these games. This means that in order to prove our theorem we only need to establish classical properties about the Micali construction. This approach not only lets us prove post-quantum security but also enables us to prove explicit bounds that are tight up to small factors. We additionally use our techniques to prove that SNARGs based on interactive oracle proofs (IOPs) with round-by-round soundness are unconditionally secure in the quantum random oracle model. This result establishes the post-quantum security of many SNARGs of practical interest.
