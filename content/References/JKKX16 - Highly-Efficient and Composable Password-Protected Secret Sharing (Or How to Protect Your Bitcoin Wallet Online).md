---
type: reference
status: stub
title: "JKKX16"
source: https://eprint.iacr.org/2016/144
authors: Stanislaw Jarecki, Aggelos Kiayias, Hugo Krawczyk, Jiayu Xu
venue: IEEE EuroS&P 2016
published: 2016
aliases:
  - JKKX16
cryptobib_key: EUROSP:JKKX16
---

# [JKKX16] Highly-Efficient and Composable Password-Protected Secret Sharing (Or: How to Protect Your Bitcoin Wallet Online)

**Authors:** Stanislaw Jarecki, Aggelos Kiayias, Hugo Krawczyk, Jiayu Xu | **Venue:** IEEE EuroS&P 2016 | [Source](https://eprint.iacr.org/2016/144)

## Abstract

PPSS is a central primitive introduced by Bagherzandi et al [BJSL10] which allows a user to store a secret among n servers such that the user can later reconstruct the secret with the sole possession of a single password by contacting t+1 servers for t\<n. At the same time, an attacker breaking into t of these servers - and controlling all communication channels - learns nothing about the secret (or the password). Thus, PPSS schemes are ideal for on-line storing of valuable secrets when retrieval solely relies on a memorizable password.

We show the most efficient Password-Protected Secret Sharing (PPSS) to date (and its implied Threshold-PAKE scheme), which is optimal in round communication as in Jarecki et al [JKK14] but which improves computation and communication complexity over that scheme requiring a single per-server exponentiation for the client and a single exponentiation for the server. As with the schemes from [JKK14] and Camenisch et al [CLLN14], we do not require secure channels or PKI other than in the initialization stage.

We prove the security of our PPSS scheme in the Universally Composable (UC) model. For this we present a UC definition of PPSS that relaxes the UC formalism of [CLLN14] in a way that enables more efficient PPSS schemes (by dispensing with the need to extract the user's password in the simulation) and present a UC-based definition of Oblivious PRF (OPRF) that is more general than the (Verifiable) OPRF definition from [JKK14] and is also crucial for enabling our performance optimization.
