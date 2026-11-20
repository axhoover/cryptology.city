---
type: reduction
status: draft
title: "Noisy k-LIN + PC ⇒ PKE"
aliases: []
id: red-noisy-k-lin-and-pc-to-pke-ghjs25
kind: implication
hypotheses: [noisy-k-lin, ghjs25-planted-clique]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]"
security-loss: ""
---

# Noisy k-LIN + PC ⇒ PKE

## Statement

If the [[planted-clique#ghjs25-planted-clique-conjecture|GHJS25 planted clique conjecture]] holds — for some constants $\alpha \in (0,1)$ and $\delta \in (0, 1/2)$, every algorithm of size $n^{O((\log n)^\alpha)}$ distinguishes $\calG(n, 1/2)$ from $\calG(n, 1/2)$ with a planted clique on $n^\delta$ vertices with advantage at most $1/3$ (Conjecture 1.1) — and [noisy $k$-LIN over expanders](noisy-k-lin-over-expanders) holds (Conjecture 4.3: for every expanding support, every polynomial-size adversary has distinguishing advantage at most $1/4$), then there is a [[public-key-encryption|PKE]] scheme semantically secure against adversaries of polynomial size — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12. Lemmas 5.3 and 5.8 give a bit encryption with decryption error $o(1)$ and distinguishing advantage at most $12/13$ against polynomial-size adversaries, a weak PKE in the sense of GHJS25 Definition 3.3. Lemma 3.4, which GHJS25 take from Theorem 6 of [[HR05 - One-Way Secret-Key Agreement and Applications to Circuit Polarization and Immunization of Public-Key Encryption|HR05]], turns every weak PKE into a semantically secure PKE for polynomially long messages — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Lemma 3.4, Theorem 5.12.

TODO: GHJS25 do not state the decryption error of the scheme Lemma 3.4 produces; confirm in HR05 Theorem 6 that it is negligible, as PKE requires.

## Notes

- Planted clique together with the search variant of noisy $k$-LIN also gives PKE — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8 ([[pc-and-search-noisy-k-lin-to-pke-ghjs25|PC + Search noisy k-LIN ⇒ PKE]]).
