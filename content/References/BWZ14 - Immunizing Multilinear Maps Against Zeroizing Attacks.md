---
type: reference
status: stub
title: "BWZ14"
source: https://eprint.iacr.org/2014/930
authors: Dan Boneh, David J. Wu, Joe Zimmerman
venue: preprint
published: 2014
aliases:
  - BWZ14
cryptobib_key: EPRINT:BonWuZim14
---

# [BWZ14] Immunizing Multilinear Maps Against Zeroizing Attacks

**Authors:** Dan Boneh, David J. Wu, Joe Zimmerman | **Venue:** preprint | [Source](https://eprint.iacr.org/2014/930)

## Abstract

In recent work Cheon, Han, Lee, Ryu, and Stehle presented an attack on the multilinear map of Coron, Lepoint, and Tibouchi (CLT). They show that given many low-level encodings of zero, the CLT multilinear map can be completely broken, recovering the secret factorization of the CLT modulus. The attack is a generalization of the "zeroizing" attack of Garg, Gentry, and Halevi.

We first strengthen the attack of Cheon, Han, Lee, Ryu, and Stehle by showing that CLT can be broken even without low-level encodings of zero. This strengthening is sufficient to show that the subgroup elimination assumption does not hold for the CLT multilinear map.

We then present a generic defense against this type of "zeroizing" attack. For an arbitrary asymmetric composite-order multilinear map (including CLT), we give a functionality-preserving transformation that ensures that no sequence of map operations will produce valid encodings (below the zero-testing level) whose product is zero. We prove security of our transformation in a generic model of composite-order multilinear maps. Our new transformation rules out "zeroizing" leaving no currently known attacks on the decision linear assumption, subgroup elimination assumption, and other related problems for the CLT multilinear map. Of course, in time, it is possible that different attacks on CLT will emerge.

Update: Since the publication of this work, Coron, Lepoint, and Tibouchi have further strengthened the original attacks of Cheon et al. With the stregthened attack, the mitigations we describe in this work no longer suffice to secure the original CLT multilinear map. However, we have preserved the original exposition of our zero-immunizing transformation (Section 3), since this transformation is of independent interest. Notably, our transformation still rules out low-level zero encodings (Theorem 3.14), and thus provides robustness in the setting of deterministic encodings.
