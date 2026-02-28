---
aliases:
  - DEPIR
  - SK-PIR
  - PK-PIR
  - SK-DEPIR
  - PK-DEPIR
title: Doubly-efficient PIR
---
# Doubly-efficient PIR (DEPIR)
Double efficient PIR is a type of [[Single-Server Private Information Retrieval|single-server PIR]] that allows the database to be *preprocessed* before the client queries the data. A PIR is considered a DEPIR if both the communication and computation at **query time** is $o(n)$, where $n$ is the size of the database. The three main variants of DEPIR are: secret-key, public-key, and unkeyed. Note that any unkeyed DEPIR is trivially a PK-DEPIR which is trivially an SK-DEPIR. The latter keyed variants of DEPIR were introduced by Introduced by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

## Definition
A (one-round) *doubly-efficient private information retrieval* (DEPIR) scheme is a tuple of efficient algorithms $(\mathsf{Setup}, \mathsf{Qry}, \mathsf{Rsp}, \mathsf{Fin})$ with respect to a key space $\mathcal{K}$ such that
- $\mathsf{Setup}(1^{\lambda},DB) \to (EDB,k)$, is a randomized algorithm that takes a security parameter and database $DB \in \{0,1\}^n$, and outputs an encoded database $EDB \in \{0,1\}^*$ and (optionally, see variations) a key $k\in \mathcal{K}$,
- $\mathsf{Qry}(k,i) \to (q,h)$, is a randomized algorithm that takes (optionally) a key $k\in \mathcal{K}$ and index $i \in [n]$, and outputs $q \in \{0,1\}^*$ and a hint $h \in \{0,1\}^*$,
- $\mathsf{Rsp}(q,EDB) \to r$, is a randomized algorithm that takes a query $q\in \{0,1\}^*$ and database $EDB \in \{0,1\}^*$, and outputs a response $r \in \{0,1\}^*$,
- $\mathsf{Fin}(h,r) \to a$, is a randomized algorithm that takes a hint $h \in \{0,1\}^*$ and response $r \in \{0,1\}^*$, and outputs an answer $a \in \{0,1\}$.
### Correctness
A DEPIR scheme is *correct* if for every $\lambda \in \mathbb{N}$, database $DB \in \{0,1\}^n$, and index $i \in [n]$, $$\Pr\bigg[\mathsf{Fin}(h,r) = DB[i] ~\Bigg|~ \substack{
(EDB,k) \gets \mathsf{Setup}(1^{\lambda},DB)\\
(q,h) \gets \mathsf{Qry}(k,i)\\
r \gets \mathsf{Rsp}(q,EDB)\\
}\bigg] =1.$$
### (Unkeyed/Standard) DEPIR
By default DEPIR scheme outputs no key i.e. $k = \bot$ with probability $1$. The security of this scheme is the same as either game below, which are equivalent when $k$ is set to $\bot$.
### Public-key DEPIR
The *privacy advantage* of an adversary $\mathcal{A}$ that outputs database $DB$ and indices $i_0$ and $i_1$ is defined as $$\text{Adv}^{\text{priv}}_{\mathcal{A}}(\lambda) \le 2\left|\Pr[\mathcal{A}(1^{\lambda},k,EDB,q) = b] - \frac{1}{2}\right|,$$ where $(EDB,k) \gets \mathsf{Setup}(1^{\lambda},DB)$, $b\gets \{0,1\}$, and $(q,h) \gets \mathsf{Qry}(k,i_b)$.
### Secret-key DEPIR
In secret-key DEPIR, the privacy advantage is relaxed to, where $\mathcal{A}$ is not given access to the key $k$ as follows, $$\text{Adv}^{\text{sk-priv}}_{\mathcal{A}}(\lambda) \le 2\left|\Pr[\mathcal{A}(1^{\lambda},EDB,q) = b] - \frac{1}{2}\right|,$$ where $(EDB,k) \gets \mathsf{Setup}(1^{\lambda},DB)$, $b\gets \{0,1\}$, and $(q,h) \gets \mathsf{Qry}(k,i_b)$.
## Other results
- Unkeyed DEPIR can be built with server storage $O(N^{1+\varepsilon})$ and online computation and bandwidth $O(\log^{1/\varepsilon}(n))$ from [[Learning with errors|LWE]] — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]]
- Many cryptographic primitives cannot be used to construct SK-DEPIR in a black-box way, unless [[One-way function|OWF]] can be used to construct DEPIR in a black-box way — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]
- SK-DEPIR can be built from a non-standard assumption — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]]
	- This was analyzed further in [[BHMW21 - On the Security of Doubly Efficient PIR|BHMW21]], which didn't break the core assumption but broke the generalized proposed assumption

# Multi-server DEPIR
TODO