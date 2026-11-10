---
type: reference
status: stub
title: "HJ16b"
source: https://eprint.iacr.org/2015/301
authors: Yupu Hu, Huiwen Jia
venue: EUROCRYPT 2016
published: 2016
aliases:
  - HJ16b
cryptobib_key: EC:HuJia16
---

# [HJ16b] Cryptanalysis of GGH Map

**Authors:** Yupu Hu, Huiwen Jia | **Venue:** EUROCRYPT 2016 | [Source](https://eprint.iacr.org/2015/301)

## Abstract

Multilinear map is a novel primitive which has many cryptographic applications, and GGH map is a major candidate of $K$-linear maps for $K>2$. GGH map has two classes of applications, which are applications with public tools for encoding and with hidden tools for encoding. In this paper, we show that applications of GGH map with public tools for encoding are not secure, and that one application of GGH map with hidden tools for encoding is not secure. On the basis of weak-DL attack presented by the authors themselves, we present several efficient attacks on GGH map, aiming at multipartite key exchange (MKE) and the instance of witness encryption (WE) based on the hardness of exact-3-cover (X3C) problem. First, we use special modular operations, which we call modified encoding/zero-testing to drastically reduce the noise. Such reduction is enough to break MKE. Moreover, such reduction negates $K$-GMDDH assumption, which is a basic security assumption. The procedure involves mostly simple algebraic manipulations, and rarely needs to use any lattice-reduction tools. The key point is our special tools for modular operations. Second, under the condition of public tools for encoding, we break the instance of WE based on the hardness of X3C problem. To do so, we not only use modified encoding/zero-testing, but also introduce and solve “combined X3C problem”, which is a problem that is not difficult to solve. In contrast with the assumption that multilinear map cannot be divided back, this attack includes a division operation, that is, solving an equivalent secret from a linear equation modular some principal ideal. The quotient (the equivalent secret) is not small, so that modified encoding/zero-testing is needed to reduce size. This attack is under an assumption that some two vectors are co-prime, which seems to be plausible. Third, for hidden tools for encoding, we break the instance of WE based on the hardness of X3C problem. To do so, we construct level-2 encodings of 0, which are used as alternative tools for encoding. Then, we break the scheme by applying modified encoding/zero-testing and combined X3C, where the modified encoding/zero-testing is an extended version. This attack is under two assumptions, which seem to be plausible. Finally, we present cryptanalysis of two simple revisions of GGH map, aiming at MKE. We show that MKE on these two revisions can be broken under the assumption that $2^{K}$ is polynomially large. To do so, we further extend our modified encoding/zero-testing.
