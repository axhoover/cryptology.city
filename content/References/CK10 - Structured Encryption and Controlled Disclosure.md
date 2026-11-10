---
type: reference
status: stub
title: "CK10"
source: https://eprint.iacr.org/2011/010
authors: Melissa Chase, Seny Kamara
venue: ASIACRYPT 2010
published: 2010
aliases:
  - CK10
cryptobib_key: AC:ChaKam10
---

# [CK10] Structured Encryption and Controlled Disclosure

**Authors:** Melissa Chase, Seny Kamara | **Venue:** ASIACRYPT 2010 | [Source](https://eprint.iacr.org/2011/010)

## Abstract

We consider the problem of encrypting structured data (e.g., a web graph or a social network) in such a way that it can be efficiently and privately queried. For this purpose, we introduce the notion of structured encryption which generalizes previous work on symmetric searchable encryption (SSE) to the setting of arbitrarily-structured data. In the context of cloud storage, structured encryption allows a client to encrypt data without losing the ability to query and retrieve it efficiently. Another application, which we introduce in this work, is to the problem of controlled disclosure, where a data owner wishes to grant access to only part of a massive dataset.

We propose a model for structured encryption, a formal security definition and several efficient constructions. We present schemes for performing queries on two simple types of structured data, specifically lookup queries on matrix-structured data, and search queries on labeled data. We then show how these can be used to construct efficient schemes for encrypting graph data while allowing for efficient neighbor and adjacency queries.

Finally, we consider data that exhibits a more complex structure such as labeled graph data (e.g., web graphs). We show how to encrypt this type of data in order to perform focused subgraph queries, which are used in several web search algorithms. Our construction is based on our labeled data and basic graph encryption schemes and provides insight into how several simpler algorithms can be combined to generate an efficient scheme for more complex queries.
