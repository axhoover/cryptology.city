---
aliases:
  - PIR
  - C-PIR
permalink: PIR
---
# Single-server Private Information Retrieval (PIR)
Single-server PIR is the principle variant of PIR that is studied in the literature, introduced by [[KO97 - Replication is not needed single database, computationally-private information retrieval|KO97]]. It is deployed in a setting where a server holds a database (represented as an array) and a client is interested in learning one of the database items. A PIR protocol allows the client to learn the entry without revealing which entry the client is interested in.

The protocol where the client downloads the entire database is known as the *trivial PIR*.

## Definition


### Variations
- [[(Multi-server) Private information retrieval]] is an information theoretic variant, which requires multiple servers
- PIR with client-side preprocessing
- Keyword PIR
- Single-server Symmetric PIR


## Other results
- Non-trivial PIR implies [[Oblivious Transfer]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]

### Constructions