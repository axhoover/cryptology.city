---
title: Private information retrieval
source: https://dl.acm.org/doi/abs/10.1145/293347.293350
authors: Benny Chor, Oded Goldreich, Eyal Kushilevitz, Madhu Sudan
venue: Journal of the ACM 1998
published: 1998-11-01
aliases:
  - CGKS98
---
# Private information retrieval
URL: https://dl.acm.org/doi/abs/10.1145/293347.293350
Authors: Benny Chor, Oded Goldreich, Eyal Kushilevitz, Madhu Sudan
## Abstract
Publicly accessible databases are an indispensable resource for retrieving up-to-date information. But they also pose a significant risk to the privacy of the user, since a curious database operator can follow the user's queries and infer what the user is after. Indeed, in cases where the users' intentions are to be kept secret, users are often cautious about accessing the database. It can be shown that when accessing a single database, to completely guarantee the privacy of the user, the whole database should be down-loaded; namely $n$ bits should be communicated (where $n$ is the number of bits in the database). In this work, we investigate whether by replicating the database, more efficient solutions to the private retrieval problem can be obtained. We describe schemes that enable a user to access $k$ replicated copies of a database ($k \ge 2$) and privately retrieve information stored in the database. This means that each individual server (holding a replicated copy of the database) gets no information on the identity of the item retrieved by the user. Our schemes use the replication to gain substantial saving. In particular, we present a two-server scheme with communication complexity $O(n^{1/3})$.