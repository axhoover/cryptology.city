---
type: reference
status: stub
title: "KPR12"
source: https://eprint.iacr.org/2012/530
authors: Seny Kamara, Charalampos Papamanthou, Tom Roeder
venue: ACM CCS 2012
published: 2012
aliases:
  - KPR12
cryptobib_key: CCS:KamPapRoe12
---

# [KPR12] Dynamic Searchable Symmetric Encryption

**Authors:** Seny Kamara, Charalampos Papamanthou, Tom Roeder | **Venue:** ACM CCS 2012 | [Source](https://eprint.iacr.org/2012/530)

## Abstract

Searchable symmetric encryption (SSE) allows a client to encrypt its data in such a way that this data can still be searched. The most immediate application of SSE is to cloud storage, where it enables a client to securely outsource its data to an untrusted cloud provider without sacrificing the ability to search over it.

SSE has been the focus of active research and a multitude of schemes that achieve various levels of security and efficiency have been proposed. Any practical SSE scheme, however, should (at a minimum) satisfy the following properties: sublinear search time, security against adaptive chosen-keyword attacks, compact indexes and the ability to add and delete files efficiently. Unfortunately, none of the previously-known SSE constructions achieve all these properties at the same time. This severely limits the practical value of SSE and decreases its chance of deployment in real-world cloud storage systems.

To address this, we propose the first SSE scheme to satisfy all the properties outlined above. Our construction extends the inverted index approach (Curtmola et al., CCS 2006) in several non-trivial ways and introduces new techniques for the design of SSE. In addition, we implement our scheme and conduct a performance evaluation, showing that our approach is highly efficient and ready for deployment.
