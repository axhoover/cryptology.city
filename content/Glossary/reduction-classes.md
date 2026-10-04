---
type: glossary
status: draft
aliases:
  - Reduction class
  - Notions of reducibility
title: Reduction classes
---

# Reduction classes

A **reduction class** says how a reduction building a primitive $P$ from primitives $Q$ may use them: whether the construction uses an implementation of $Q$ only as an oracle, and whether the security proof uses an adversary against $P$ only as an oracle. The classes are those of [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]] plus one of this wiki's own, [[#fixed-construction|fixed construction]]. Every reduction and barrier page records one, or `unstated`.

## Notation

$Q$ stands for the hypotheses of a page, jointly, and $P$ for its conclusion. $f$ ranges over implementations of $Q$, efficient or not, and _$\calA$ breaks $f$_ means that $\calA$ violates the security of $Q$ for $f$. $G$ is the construction, so $G^f$ is the candidate implementation of $P$, and $S$ is the security reduction. Efficient means probabilistic polynomial-time. Each black-box class is given by the order of its quantifiers over $G$, $S$, $f$ and $\calA$, as restated by [[BBF13 - Notions of Black-Box Reductions, Revisited|BBF13]], and by which algorithms get oracle access to $f$: an algorithm quantified existentially may depend on everything quantified before it.

_Black-box_ and _non-black-box_ alone name no class. The semi- and weakly black-box classes let the reduction depend on the adversary, and their ∀∃ variants let the construction depend on the implementation of $Q$ as well; a construction that runs the code of an implementation of $Q$ is recorded free ([[#recording-a-class|Recording a class]]).

## Classes

### Fully black-box

$\exists G\, \exists S\, \forall f\, \forall \calA$. One efficient construction $G$ and one efficient reduction $S$, both fixed in advance: for every implementation $f$ of $Q$, $G^f$ implements $P$, and for every adversary $\calA$, efficient or not, that breaks $G^f$, $S^{\calA, f}$ breaks $f$. $G$ uses $f$ only as an oracle, and $S$ uses $\calA$ and $f$ only as oracles. The narrowest RTV04 class — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

### Semi-black-box

$\exists G\, \forall f\, \forall \calA\, \exists S$. The construction $G$ is fixed and uses $f$ only as an oracle, and $G^f$ implements $P$ for every $f$; the reduction $S$ is chosen after $f$ and $\calA$ and may depend on both, in particular on the code of $\calA$. For every $f$ and every efficient adversary $\calA^f$ that breaks $G^f$ there is an efficient $S$ such that $S^f$ breaks $f$; $\calA$ and $S$ both have oracle access to $f$ — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

### Forall-exists semi-black-box

**∀∃-semi-black-box**: $\forall f\, \exists G\, \forall \calA\, \exists S$. As semi-black-box, except that the construction $G$ is chosen after $f$ and may depend on the implementation itself, not merely on oracle access to it — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

### Weakly black-box

$\exists G\, \forall f\, \forall \calA\, \exists S$, the same prefix as semi-black-box. As semi-black-box, except that the adversary $\calA$ is an efficient algorithm with no oracle access to $f$: for every $f$ and every efficient $\calA$ that breaks $G^f$ there is an efficient $S$ such that $S^f$ breaks $f$ — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

### Forall-exists weakly black-box

**∀∃-weakly-black-box**: $\forall f\, \exists G\, \forall \calA\, \exists S$. As weakly black-box, except that the construction $G$ is chosen after $f$ and may depend on it — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]].

### Relativizing

$\forall \Pi$. For every oracle $\Pi$, if $Q$ exists relative to $\Pi$ then $P$ exists relative to $\Pi$, where a primitive exists relative to $\Pi$ if some implementation of it is efficiently computable with oracle $\Pi$ and no efficient adversary with oracle $\Pi$ breaks it — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]]. An [[black-box-separations#oracle-separations|oracle separation]], an oracle relative to which $Q$ exists and $P$ does not, rules out exactly this class, and with it every fully-black-box reduction; the [[no-owp-to-ke-ir89|separation of one-way permutations from key agreement]] is of this kind — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].

### Free

$P$ exists whenever $Q$ does, by any argument: no restriction on the construction or the proof. The broadest class — [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]]. A barrier against free reductions rules out the implication itself, not a proof technique.

### Fixed construction

This wiki's class; RTV04 have none like it. The construction is the one named on the page, such as the identity map on schemes or a named transform such as [[fiat-shamir-heuristic|Fiat–Shamir]], and the security proof is unrestricted. The class serves barriers that refute one construction without ruling out building $P$ from $Q$ some other way: an IND-CPA-secure public-key encryption scheme need not be IND-CCA1-secure, so the identity map is [[no-pke-cpa-security-to-pke-cca1-security-bdpr98|no reduction from CPA to CCA1 security]] — [[BDPR98 - Relations Among Notions of Security for Public-Key Encryption Schemes|BDPR98]]. Such a barrier is titled _No fixed-construction reduction from $Q$ to $P$_.

## Order

Every reduction of a class is also a reduction of each class listed beside it, and so, transitively, of every broader class.

| Class               | Is also                             |
| ------------------- | ----------------------------------- |
| fully-black-box     | semi-black-box, relativizing        |
| semi-black-box      | weakly-black-box, ∀∃-semi-black-box |
| relativizing        | ∀∃-semi-black-box                   |
| ∀∃-semi-black-box   | ∀∃-weakly-black-box                 |
| weakly-black-box    | ∀∃-weakly-black-box, free           |
| ∀∃-weakly-black-box | free                                |
| fixed-construction  | free                                |
| free                | —                                   |

This is the hierarchy of [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]] as drawn by [[BBF13 - Notions of Black-Box Reductions, Revisited|BBF13]], with fixed-construction added beside it, comparable only with free. A barrier against class $B$ contradicts a reduction of class $C$ with the same hypotheses and conclusion if and only if $C$ is $B$ or narrower than $B$. An oracle separation, against relativizing reductions, therefore rules out every fully-black-box reduction; a barrier against fully-black-box reductions says nothing about a free one, and a fixed-construction barrier says nothing about a reduction of any RTV04 class, which may choose its construction.

## Unstated

`unstated` is not a class. It records that the source does not say which notion its reduction meets and the shape of the proof does not settle it. It lies outside the order, so a reduction or barrier recorded `unstated` is compared with no page on the same hypotheses and conclusion, and the line under its title omits it.

## Recording a class

A page records the class its source states. When the source is silent, the page records fully-black-box only when the proof has that shape, one fixed construction using the hypotheses only as oracles and one fixed reduction using any adversary only as an oracle, and `unstated` otherwise; for a hardness assumption, its problem plays the role of the primitive. A construction that uses the code of a hypothesis scheme, as bootstrapping evaluates the scheme's own decryption circuit, is recorded free; so is a result whose source calls it only non-black-box, and a containment or equality of complexity classes, to which the classification does not apply. An idealized model ([[random-oracle-model|ROM]], [[generic-group-model|GGM]], [[algebraic-group-model|AGM]]) is not a class: a page records its model separately.
