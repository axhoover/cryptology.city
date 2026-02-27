---
title: A Logarithmic Lower Bound for Oblivious RAM (for all parameters)
source: https://eprint.iacr.org/2020/1132
authors: Ilan Komargodski, Wei-Kai Lin
venue: CRYPTO 2021
published: 2020-09-21
created: 2025-04-21
aliases:
  - KL21
---
# A Logarithmic Lower Bound for Oblivious RAM (for all parameters)
URL: https://eprint.iacr.org/2020/1132
Authors: Ilan Komargodski, Wei-Kai Lin

## Abstract
An Oblivious RAM (ORAM), introduced by Goldreich and Ostrovsky (J. ACM 1996), is a probabilistic RAM that hides its access pattern; i.e., for every input the observed locations accessed are similarly distributed. In recent years there has been great progress both in terms of upper bounds as well as in terms of lower bounds, essentially pinning down the smallest overhead possible in various settings of parameters.

We observe that there is a very natural setting of parameters in which no non-trivial lower bound is known, even not ones in restricted models of computation (like the so-called balls and bins model). Let $N$ and $w$ be the number of cells and bit-size of cells, respectively, in the RAM that we wish to simulate obliviously. Denote by $b$ the cell bit-size of the ORAM. All previous ORAM lower bounds have a multiplicative $w/b$ factor which makes them trivial in many settings of parameters of interest.

In this work, we prove a new ORAM lower bound that captures this setting (and in all other settings it is at least as good as previous ones, quantitatively). We show that any ORAM must make (amortized) 
$\Omega\left(\log \left(\frac{Nw}{m}\right)/\log\left(\frac{b}{w}\right)\right)$
memory probes for every logical operation. Here, $m$ denotes the bit-size of the local storage of the ORAM. Our lower bound implies that logarithmic overhead in accesses is necessary, even if $b \gg w$. Our lower bound is tight for all settings of parameters, up to the $\log(b/w)$ factor. Our bound also extends to the non-colluding multi-server setting.

As an application, we derive the first (unconditional) separation between the overhead needed for ORAMs in the online vs. offline models. Specifically, we show that when $w = \log N$ and $b, m \in \mathsf{polylog} N$, there exists an offline ORAM that makes (on average) $o(1)$ memory probes per logical operation while every online one must make $\Omega(\log N/\log \log N)$ memory probes per logical operation. No such previous separation was known for any setting of parameters, not even in the balls and bins model.