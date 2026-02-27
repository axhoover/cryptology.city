---
aliases:
  - PIR
  - cPIR

---
# Single-server Private Information Retrieval (PIR)
Single-server PIR is the principle variant of PIR that is studied in the literature, introduced by [[KO97 - Replication is not needed single database, computationally-private information retrieval|KO97]]. It is deployed in a setting where a server holds a database (represented as an array) and a client is interested in learning one of the database items. A PIR protocol allows the client to learn the entry without revealing which entry the client is interested in.

The protocol where the client downloads the entire database is known as the *trivial PIR*.

## Definition


### Variations
- [[Multi-server Private Information Retrieval]] is an information theoretic variant, which requires multiple servers
- PIR with client-side preprocessing
- Keyword PIR
- Single-server Symmetric PIR


## Other results
- Non-trivial PIR implies [[Oblivious transfer]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]
- Single-round PIR cannot be based on NP-hardness unless [[Polynomial-Time Hierarchy|PH]] collapses to the second level — [[LV15 - On Basing Private Information Retrieval on NP-Hardness|LV15]]

### Constructions
- PIR with $\text{polylog}(n)$ bandwidth can be built from [[Decisional Diffie-Hellman|DDH]], QR, or [[Learning with errors|LWE]] — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]
	- This result goes through the use of [[Trapdoor hash functions|TDH]], which can be used to build PIR generically
- Any PIR requires $\Omega(n)$ public-key operations — [[DH24 - Lower-Bounds on Public-Key Operations in PIR|DH24]]