---
title: "SS11"
source: https://link.springer.com/chapter/10.1007/978-3-642-20465-4_4
authors: Damien Stehlé, Ron Steinfeld
venue: Advances in Cryptology — EUROCRYPT 2011
published: 2011-05-15
aliases:
  - SS11
tags:
  - EUROCRYPT
---

# [SS11] Making NTRU as secure as worst-case problems over ideal lattices

**Authors:** Damien Stehlé, Ron Steinfeld | **Venue:** EUROCRYPT 2011 | [Source](https://link.springer.com/chapter/10.1007/978-3-642-20465-4_4)

## Abstract

NTRUEncrypt, proposed in 1996 by Hoffstein, Pipher and Silverman, is the fastest known lattice-based encryption scheme. Its moderate key sizes, excellent asymptotic performance and conjectured resistance to quantum computers make it an attractive alternative to factoring and discrete-log based encryption schemes. However, since its introduction, doubts have been expressed about its security. We show how to modify NTRUEncrypt to make it provably secure in the standard model, under the assumed quantum hardness of standard worst-case lattice problems, restricted to a family of lattices related to some cyclotomic fields. Our main contribution is to show that if the secret key polynomials are chosen from discrete Gaussian distributions, then the public key is statistically indistinguishable from uniform over its domain. The security then follows from the already proven hardness of the Ring-LWE problem.
