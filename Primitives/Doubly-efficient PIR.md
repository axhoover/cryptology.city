---
aliases:
  - DEPIR
  - SK-PIR
  - PK-PIR
  - SK-DEPIR
  - PK-DEPIR
---
# Doubly-efficient PIR (DEPIR)
Double efficient PIR is a type of [[Single-Server Private Information Retrieval|single-server PIR]] that allows the database to be *preprocessed* before the client queries the data. A PIR is considered a DEPIR if both the communication and computation at **query time** is $o(n)$, where $n$ is the size of the database. The three main variants of DEPIR are: secret-key, public-key, and unkeyed. Note that any unkeyed DEPIR is trivially a PK-DEPIR which is trivially an SK-DEPIR.

## Definition


### Secret-key DEPIR
Introduced by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]


### Public-key DEPIR
Introduced by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]

## Other results
- Unkeyed DEPIR can be built with server storage $O(N^{1+\varepsilon})$ and online computation and bandwidth $O(\log^{1/\varepsilon}(n))$ from [[Learning with errors|LWE]] — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]
- Many cryptographic primitives cannot be used to construct SK-DEPIR in a black-box way, unless [[One-way function|OWF]] can be used to construct DEPIR in a black-box way — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]
- SK-DEPIR can be built from a non-standard assumption — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]
	- This was analyzed further in [[BHMW21 - On the Security of Doubly Efficient PIR|BHMW21]], which didn't break the core assumption but broke the generalized proposed assumption