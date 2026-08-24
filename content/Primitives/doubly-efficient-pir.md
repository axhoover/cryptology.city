---
type: primitive
status: stub
aliases:
  - DEPIR
  - SK-DEPIR
  - PK-DEPIR
  - Doubly-efficient PIR
title: Doubly-efficient PIR
id: depir
variants:
  unkeyed-depir: "#unkeyed-depir"
---

# Doubly-efficient PIR

Double efficient PIR is a type of [[single-server-private-information-retrieval|single-server PIR]] that allows the database to be _preprocessed_ before the client queries the data. A PIR is considered a DEPIR if both the communication and computation at **query time** is $o(n)$, where $n$ is the size of the database. The three main variants of DEPIR are: secret-key, public-key, and unkeyed. Note that any unkeyed DEPIR is trivially a PK-DEPIR which is trivially an SK-DEPIR. The latter keyed variants of DEPIR were introduced by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

## Syntax

A (one-round) _doubly-efficient private information retrieval_ (DEPIR) scheme is a tuple of efficient algorithms $(\Setup, \mathsf{Qry}, \mathsf{Rsp}, \mathsf{Fin})$ with respect to a key space $\calK$ such that

- $\Setup(1^\secpar,DB) \to (EDB,k)$, is a randomized algorithm that takes a security parameter and database $DB \in \bits^n$, and outputs an encoded database $EDB \in \bits^*$ and (optionally, see variations) a key $k\in \calK$,
- $\mathsf{Qry}(k,i) \to (q,h)$, is a randomized algorithm that takes (optionally) a key $k\in \calK$ and index $i \in [n]$, and outputs $q \in \bits^*$ and a hint $h \in \bits^*$,
- $\mathsf{Rsp}(q,EDB) \to r$, is a randomized algorithm that takes a query $q\in \bits^*$ and database $EDB \in \bits^*$, and outputs a response $r \in \bits^*$,
- $\mathsf{Fin}(h,r) \to a$, is a randomized algorithm that takes a hint $h \in \bits^*$ and response $r \in \bits^*$, and outputs an answer $a \in \bits$.

## Properties

### Correctness

A DEPIR scheme is _correct_ if for every $\secpar \in \NN$, database $DB \in \bits^n$, and index $i \in [n]$, $$\Pr\bigg[\mathsf{Fin}(h,r) = DB[i] ~\Bigg|~ \substack{
(EDB,k) \gets \Setup(1^\secpar,DB)\\
(q,h) \gets \mathsf{Qry}(k,i)\\
r \gets \mathsf{Rsp}(q,EDB)\\
}\bigg] =1.$$

### Unkeyed DEPIR

By default DEPIR scheme outputs no key i.e. $k = \bot$ with probability $1$. The security of this scheme is the same as either game below, which are equivalent when $k$ is set to $\bot$.

### Public-key DEPIR

The _privacy advantage_ of an adversary $\calA$ that outputs database $DB$ and indices $i_0$ and $i_1$ is defined as $$\Adv^{\mathrm{priv}}_{\calA}(\secpar) \le 2\left|\Pr[\calA(1^\secpar,k,EDB,q) = b] - \frac{1}{2}\right|,$$ where $(EDB,k) \gets \Setup(1^\secpar,DB)$, $b \getsr \bits$, and $(q,h) \gets \mathsf{Qry}(k,i_b)$.

### Secret-key DEPIR

In secret-key DEPIR, the privacy advantage is relaxed to, where $\calA$ is not given access to the key $k$ as follows, $$\Adv^{\mathrm{sk\text{-}priv}}_{\calA}(\secpar) \le 2\left|\Pr[\calA(1^\secpar,EDB,q) = b] - \frac{1}{2}\right|,$$ where $(EDB,k) \gets \Setup(1^\secpar,DB)$, $b \getsr \bits$, and $(q,h) \gets \mathsf{Qry}(k,i_b)$.

# Variations

## Multi-server DEPIR

TODO

# Other results

- [[lwe-to-depir-lmw23|LWE ⇒ DEPIR]]
- Many cryptographic primitives cannot be used to construct SK-DEPIR in a black-box way, unless [[hash-function|OWF]] can be used to construct DEPIR in a black-box way — [[LMW25 - Black Box Crypto is Useless for Doubly Efficient PIR|LMW25]]
- [[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ DEPIR]]

<!-- BEGIN GENERATED participates-in e4fb5401558e -->
## Participates in

**Builds on Doubly-efficient PIR**

- [[depir-to-cpir|DEPIR ⇒ cPIR]]

**Produces Doubly-efficient PIR**

- [[lwe-to-depir-lmw23|LWE ⇒ DEPIR]]
- [[noise-level-to-depir-cimr25|Noise Level ⇒ DEPIR]]
- [[noise-level-to-depir-cimr25-2|Noise Level ⇒ DEPIR]]
- [[permuted-puzzles-to-depir-bipw17|Permuted puzzles ⇒ DEPIR]]
- [[secret-key-pir-sk-pir-and-ske-to-depir|Secret-Key PIR (SK-PIR) + SKE ⇒ DEPIR]]
- [[secret-key-pir-sk-pir-to-depir-bipw17|Secret-Key PIR (SK-PIR) ⇒ DEPIR]]
- [[unkeyed-depir-to-depir|Unkeyed DEPIR ⇒ DEPIR]]

**Barriers**

- [[no-depir-to-ot-dmo00|No reduction from DEPIR to OT]]
<!-- END GENERATED participates-in -->
