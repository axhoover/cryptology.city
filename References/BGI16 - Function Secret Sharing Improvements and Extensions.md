---
title: "Function Secret Sharing: Improvements and Extensions"
source: https://dl.acm.org/doi/abs/10.1145/2976749.2978429
authors: Elette Boyle, Niv Gilboa, Yuval Ishai
venue: CCS 2016
published: 2016-10-24
created: 2025-04-22
tags:
  - paper
aliases:
  - BGI16
---
# Function Secret Sharing: Improvements and Extensions
URL: https://dl.acm.org/doi/abs/10.1145/2976749.2978429
Authors: Elette Boyle, Niv Gilboa, Yuval Ishai

## Abstract
Function Secret Sharing (FSS), introduced by Boyle et al. (Eurocrypt 2015), provides a way for additively secret-sharing a function from a given function family F. More concretely, an m-party FSS scheme splits a function $f: \{0, 1\}^n \rightarrow G$, for some abelian group G, into functions $f_1,...,f_m$, described by keys $k_1,...,k_m$, such that $f = f_1 + ... + f_m$ and every strict subset of the keys hides f. A Distributed Point Function (DPF) is a special case where F is the family of point functions, namely functions $f_{a,b}$ that evaluate to b on the input a and to 0 on all other inputs. FSS schemes are useful for applications that involve privately reading from or writing to distributed databases while minimizing the amount of communication. These include different flavors of private information retrieval (PIR), as well as a recent application of DPF for large-scale anonymous messaging. We improve and extend previous results in several ways: * Simplified FSS constructions. We introduce a tensoring operation for FSS which is used to obtain a conceptually simpler derivation of previous constructions and present our new constructions. * Improved 2-party DPF. We reduce the key size of the PRG-based DPF scheme of Boyle et al. roughly by a factor of 4 and optimize its computational cost. The optimized DPF significantly improves the concrete costs of 2-server PIR and related primitives. * FSS for new function families. We present an efficient PRG-based 2-party FSS scheme for the family of decision trees, leaking only the topology of the tree and the internal node labels. We apply this towards FSS for multi-dimensional intervals. We also present a general technique for extending FSS schemes by increasing the number of parties. * Verifiable FSS. We present efficient protocols for verifying that keys ($k*_1,...,k*_m$), obtained from a potentially malicious user, are consistent with some f in F. Such a verification may be critical for applications that involve private writing or voting by many users.