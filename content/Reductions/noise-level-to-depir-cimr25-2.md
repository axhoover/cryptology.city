---
type: reduction
status: draft
title: "LSN ⇒ SK-DEPIR"
aliases: []
id: red-learning-subspace-with-noise-to-sk-depir-cimr25
kind: implication
hypotheses: [learning-subspace-with-noise]
conclusion: sk-depir
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# LSN ⇒ SK-DEPIR

## Statement

Under the LSN conjecture of CIMR25 — the $(k, n, \mu)$-[[learning-subspace-with-noise|LSN]] assumption holds whenever $k \ge \rho n$ and $\mu \ge 1 - o(1)$, for every constant $0 < \rho < 1$ (Conjecture 1.1) — for every constant $t \ge 2$ and every constant $\varepsilon > 0$ there is a [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]] for $N$-bit databases with server storage $O(N^{1+\varepsilon}) + \poly(\secpar)$, communication $O(\log^2 \secpar \cdot N^{1/(t+1)} + \poly(\secpar))$, server probe complexity $N \cdot \log \log N / \log^t N + \poly(\secpar)$ and client time $\tilde O(N^{t/(t+1)})$ up to additive $\poly(\secpar)$ terms. It is the folded protocol of Theorem 7.1 ("Folded sk-PIR from LSN assumptions"), item 2, in its variant with improved probe complexity, instantiated with $\ell = \log \log N$ and $\tilde\secpar = \log^2 \secpar$, which meet the theorem's conditions $\ell = \omega(1)$ and $\tilde\secpar = \omega(\log \secpar)$; its client time is from §8; its key is sampled by $G(1^\secpar, 1^N)$ before the database is encoded, and it is perfectly correct and secure against polynomially many adaptive queries (Definition 4.3) — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]. Theorem and section numbers are those of the version of ePrint 2025/646 dated June 7, 2026. The server answers by one table lookup per probe into precomputed parities of blocks of the encoding, indexed by the query, so its running time is of the order of its probe complexity plus the query length — folklore.

## Notes

- The instantiation matters: $\ell = \log^t N$ also satisfies $\ell = \omega(1)$ but gives the probe bound $N + \poly(\secpar)$, which is not sublinear; any $\ell = \omega(1)$ with $\ell = o(\log^t N)$ gives probe complexity $o(N) + \poly(\secpar)$ — folklore.
- CIMR25 call such a scheme doubly efficient only in a weak sense, and say that some of their constructions achieve slightly sublinear runtime in the RAM or cell-probe model — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].
- From [[learning-parity-with-noise#high-noise-lpn|LPN]] with noise rate $k^{-\gamma}$, CIMR25 obtain secret-key PIR with communication $O(N^{\varepsilon})$ ([[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]]), for which they claim no sublinear probe complexity (Tables 1 and 2) — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].
- Under quasi-polynomial hardness of their split-LSN conjecture, CIMR25 obtain secret-key PIR with communication $N^{o(1)} + \poly(\secpar)$ and probe complexity $o(N)$ (Remark 7.1) — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]].
