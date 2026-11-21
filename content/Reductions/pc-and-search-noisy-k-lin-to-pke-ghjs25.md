---
type: reduction
status: draft
title: "PC + Search noisy $k$-LIN ⇒ PKE"
aliases: []
id: red-pc-and-search-noisy-k-lin-to-pke-ghjs25
kind: implication
hypotheses: [ghjs25-planted-clique, search-noisy-k-lin]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]"
security-loss: ""
---

# PC + Search noisy $k$-LIN ⇒ PKE

## Statement

If the [[planted-clique#ghjs25-planted-clique-conjecture|GHJS25 planted clique conjecture]] holds — for some constants $\alpha \in (0,1)$ and $\delta \in (0, 1/2)$, every algorithm of size $n^{O((\log n)^\alpha)}$ distinguishes $\calG(n, 1/2)$ from $\calG(n, 1/2)$ with a planted clique on $n^\delta$ vertices with advantage at most $1/3$ (Conjecture 1.1) — and [search noisy $k$-LIN over expanders](noisy-k-lin-over-expanders#search-noisy-k-lin) is hard (Conjecture 4.4: for every expanding support, every polynomial-size adversary recovers $\mathbf{s}$ from $(\mathbf{M}, \mathbf{M}\mathbf{s}+\mathbf{e})$ with probability at most $1/4$), then semantically secure [[public-key-encryption|PKE]] exists — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8. Lemmas 8.2 and 8.3 give a bit encryption with decryption error $o(1)$ and distinguishing advantage at most $0.99$ against polynomial-size adversaries, a weak PKE in the sense of GHJS25 Definition 3.3. Lemma 3.4, which GHJS25 take from Theorem 6 of [[HR05 - One-Way Secret-Key Agreement and Applications to Circuit Polarization and Immunization of Public-Key Encryption|HR05]], turns every weak PKE into a semantically secure PKE for polynomially long messages — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Lemma 3.4, Theorem 8.8, whose proof is that of Theorem 5.12.

TODO: GHJS25 do not state the decryption error of the scheme Lemma 3.4 produces; confirm in HR05 Theorem 6 that it is negligible, as PKE requires.

## Notes

- The decisional variant gives the paper's main construction — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 5.12 ([[noisy-k-lin-and-pc-to-pke-ghjs25|Noisy k-LIN + PC ⇒ PKE]]). The search-to-decision reduction known for random expanding matrices is not known to extend to every expanding support, so Theorem 8.8 is not known to follow from Theorem 5.12 — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], §4.2.
