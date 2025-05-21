---
title: Fine-Grained Complexity in a World without Cryptography
source: https://eprint.iacr.org/2025/324
authors: Josh Alman, Yizhi Huang, Kevin Yeo
venue: Eurocrypt 2025
published: 2025-02-22
created: 2025-02-23
aliases:
  - AHY25
---
# Fine-Grained Complexity in a World without Cryptography
URL: https://eprint.iacr.org/2025/324
Authors: Josh Alman, Yizhi Huang, Kevin Yeo

## Abstract
The study of fine-grained cryptography has proliferated in recent years due to its allure of potentially relying on weaker assumptions compared to standard cryptography. As fine-grained cryptography only requires polynomial gaps between the adversary and honest parties, it seems plausible to build primitives relying upon popular hardness assumptions about problems in $\mathbf{P}$ such as $k$-$\mathsf{SUM}$ or $\mathsf{Zero}$-$k$-$\mathsf{Clique}$. The ultimate hope is that fine-grained cryptography could still be viable even if all current cryptographic assumptions are false, such as if $\mathbf{P} = \mathbf{NP}$ or if we live in Pessiland where one-way functions do not exist.

In our work, we consider whether this approach is viable by studying fine-grained complexity when all standard cryptographic assumptions are false. As our main result, we show that many popular fine-grained complexity problems are easy to solve in the average-case when one-way functions do not exist. In other words, many candidate hardness assumptions for building fine-grained cryptography are no longer options in Pessiland. As an example, we prove that the average-case $k$-$\mathsf{SUM}$ and $\mathsf{Zero}$-$k$-$\mathsf{Clique}$ conjectures are false for sufficiently large constant $k$ when no one-way functions exist. The average-case $\mathsf{Zero}$-$k$-$\mathsf{Clique}$ assumption was used to build fine-grained key-exchange by Lavigne et al. [CRYPTO'19].

We also show that barriers for reductions in fine-grained complexity may be explained by problems in cryptography. First, we show that finding faster algorithms for computing discrete logarithms is equivalent to designing average-case equivalence between $k$-$\mathsf{SUM}$ and $k$-$\mathsf{CYC}$ (an extension of $k$-$\mathsf{SUM}$ to cyclic groups). In particular, finding such a reduction from $k$-$\mathsf{CYC}$ to $k$-$\mathsf{SUM}$ could potentially lead to breakthrough algorithms for the discrete logarithm, factoring, RSA and quadratic residuosity problems. Finally, we show that discrete logarithms with preprocessing may be reduced to the $k$-$\mathsf{CYC}$-$\mathsf{Index}$ problem, and we present faster algorithms for average-case $k$-$\mathsf{SUM}$-$\mathsf{Index}$ and $k$-$\mathsf{CYC}$-$\mathsf{Index}$.