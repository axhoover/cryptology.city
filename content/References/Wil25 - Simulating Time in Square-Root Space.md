---
title: "Wil25"
source: https://eccc.weizmann.ac.il/report/2025/017/
authors: Ryan Williams
venue: STOC 2025
published: 2025-02-24
aliases:
  - Wil25
tags:
  - STOC

---
# [Wil25] Simulating Time in Square-Root Space

**Authors:** Ryan Williams | **Venue:** STOC 2025 | [Source](https://eccc.weizmann.ac.il/report/2025/017/)

## Abstract
We show that for all functions $t(n) \ge n$, every multitape Turing machine running in time $t$ can be simulated in space only $O(\sqrt{t}\log t)$. This is a substantial improvement over Hopcroft, Paul, and Valiant's simulation of time $t$ in $O(t^{\frac{1}{2}}\log t)$ space from 50 years ago [FOCS 1975, JACM 1977]. Among other results, our simulation implies that bounded fan-in circuits of size $s$ can be evaluated on any input in only $\sqrt{s}\text{poly}(\log s)$ space, and that there are explicit problems solvable in $O(n)$ space which require $n^{2-\epsilon}$ time on a multitape Turing machine for all $\epsilon > 0$, thereby making a little progress on the P versus PSPACE problem.

Our simulation reduces the problem of simulating time-bounded multitape Turing machines to a series of implicitly-defined Tree Evaluation instances with nice parameters, leveraging the remarkable space-efficient algorithm for Tree Evaluation recently found by Cook and Mertz [STOC 2024].