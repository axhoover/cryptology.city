---
type: assumption
status: draft
aliases:
  - DDH
  - Decisional Diffie-Hellman
  - DLIN
title: Decisional Diffie-Hellman
id: ddh
variants:
  subexponential-ddh: "#sub-exponential-ddh"
  decisional-linear: "#dlin"
  sxdh: "#sxdh-symmetric-external-diffie-hellman"
  subexponential-sxdh: "#sub-exponential-sxdh"
---

# Decisional Diffie-Hellman

The _Decisional Diffie-Hellman (DDH)_ assumption is a central assumption in cryptography, and one of the first used to construct key exchange [[DH76 - New Directions in Cryptography|DH76]]. It implies the [[computational-diffie-hellman|CDH]] assumption: an adversary which can solve the CDH problem can also solve DDH in the same group ([[ddh-to-cdh|DDH ⇒ CDH]]) — folklore.

## Assumption

Informally, the DDH assumption concerns a cyclic group generation algorithm
$\GrGen,$ which takes as input a security parameter $1^{\secpar}$ and outputs
a succinct[^1] description of a cyclic group $(\GG,g,p),$ where $\GG$ is the group
set, $g$ is a generator for the group, and $p$ is the order of the group.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{ddh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG,g,p) \gets \GrGen(1^\secpar)$
\State $x \getsr [p]$ ; $y \getsr [p]$ ; $z \getsr [p]$
\State $X \gets g^x$ ; $Y \gets g^y$
\State $b \getsr \bits$
\State $Z_0 \gets g^{xy}$ ; $Z_1 \gets g^{z}$
\State $\hat{b} \gets \calA(1^\secpar, \GG, g, p, X, Y, Z_b)$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

We say that **DDH is hard** for a group generation algorithm $\GrGen$
if for all efficient $\calA,$

$$
\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) := \left|2 \cdot \Pr\!\left[\Game^{\text{ddh}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## Known Results

- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[ggm-to-ddh-sho97|GGM ⇒ DDH]]
- [[ddh-to-pke-elgamal85|DDH ⇒ PKE]]
- DDH implies [[pseudorandom-function|PRF]]s via the Naor-Reingold construction, which maps inputs in $\bits^n$ to group elements using a secret exponent vector — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]
- [[no-cdh-to-ddh-jn03|No fixed-construction reduction from CDH to DDH]]: DDH is easy in groups that admit efficient symmetric bilinear pairings (e.g., certain supersingular elliptic curves), where CDH can still be hard: given $(g^x, g^y, g^z)$, check whether $e(g^x, g^y) = e(g, g^z)$ — [[JN03 - Separating Decision Diffie-Hellman from Computational Diffie-Hellman in Cryptographic Groups|JN03]]
- [[no-ddh-to-ibe-prv12|No fully-black-box reduction from DDH to IBE]]
- In the [[generic-group-model|Generic Group Model]], for groups of prime order $p$, $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]

## Attacks

- **Baby-step giant-step**: a generic algorithm for the underlying discrete logarithm problem. Given $X = g^x$, it finds $x$ in $O(\sqrt{p})$ time and $O(\sqrt{p})$ space by writing $x = im + j$ (where $m = \lceil\sqrt{p}\rceil$) and matching $g^{im} = X \cdot g^{-j}$ across a hash table. Since DDH reduces to DLOG, this attack applies: any DDH distinguisher that computes $g^{xy}$ by solving DLOG runs in $O(\sqrt{p})$.
- **DDH is easy in groups with efficient pairings**: in groups $\GG$ that admit an efficient bilinear pairing $e: \GG \times \GG \to \GG_T$ (symmetric/Type-1 pairings, e.g., certain supersingular elliptic curves), DDH is trivially broken. Given $(g^x, g^y, g^z)$, check whether $e(g^x, g^y) = e(g, g^z)$; this holds iff $z = xy$. DDH is therefore **not** a reasonable assumption in Type-1 pairing groups — see [[bilinear-map-assumptions|bilinear map assumptions]].
- **Pohlig-Hellman**: if the group order $p$ is smooth (factors into small primes), discrete log (and hence DDH) is easy via the Chinese Remainder Theorem on the prime-order subgroups. This is why DDH is only assumed in **prime-order** groups or carefully chosen subgroups.

# Variations

In the above definition, we implicitly allow $\GrGen$ to choose a _random_
generator $g$ for the group $\GG$. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected
deterministically.

## Sub-exponential DDH

DDH is **sub-exponentially hard** for $\GrGen$ if there is a constant $\varepsilon > 0$ such that for all sufficiently large $\secpar$, every adversary $\calA$ of size at most $2^{\secpar^{\varepsilon}}$ has $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le 2^{-\secpar^{\varepsilon}}$ — standard. The weaker form that bounds only polynomial-time adversaries by advantage $2^{-\secpar^{\varepsilon}}$ suffices for NIZK arguments for $\classNP$, and no pairing is needed — [[JJ21 - Non-interactive Zero Knowledge from Sub-exponential DDH|JJ21]].

## DLIN

Given $(u, v, h, u^a, v^b, h^c) \in \GG^6$ for $u, v, h \getsr \GG$ and $a, b \getsr \ZZ_p$, distinguish $c = a + b$ from $c \getsr \ZZ_p$ — [[BBS04 - Short Group Signatures|BBS04]].

## k-Lin

The $k$-Linear assumption is defined on [[bilinear-map-assumptions#k-linear-assumption|Bilinear map assumptions]].

## Matrix Diffie-Hellman

TODO

## SXDH (Symmetric External Diffie-Hellman)

Assumes DDH is hard in both $\GG_1$ and $\GG_2$ of an asymmetric (Type 3) pairing; used to instantiate Groth–Sahai proofs efficiently — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]].

### Sub-exponential SXDH

SXDH is **sub-exponentially hard** if there is a constant $\varepsilon > 0$ such that for all sufficiently large $\secpar$, every adversary of size at most $2^{\secpar^{\varepsilon}}$ has advantage at most $2^{-\secpar^{\varepsilon}}$ against DDH in each of $\GG_1$ and $\GG_2$.

[^1]:
    Succinct means that the tuple $(\GG,g,p)$ is at most
    $\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$

<!-- BEGIN GENERATED participates-in 255a2ac7a095 -->

## Participates in

**Builds on Decisional Diffie-Hellman**

- [[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bilinear-pairing-and-dlin-to-zap-gos06|Bilinear pairing + DLIN ⇒ Zaps (non-interactive)]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- [[ddh-and-uowhf-to-pke-cca2-security-cs98|DDH + UOWHF ⇒ CCA-secure PKE (Cramer–Shoup)]]
- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[ddh-to-client-preprocessing-pir-chk22|DDH ⇒ PIR with client preprocessing (CHK22)]]
- [[ddh-to-lossy-trapdoor-function-pw08|DDH ⇒ Highly lossy TDF (Peikert–Waters)]]
- [[ddh-to-malicious-ot-security-pvw08|DDH ⇒ UC-secure OT (PVW)]]
- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ Non-interactive key exchange (NIKE)]]
- [[ddh-to-partially-homomorphic-encryption-phe-elgamal85|DDH ⇒ Multiplicatively homomorphic encryption]]
- [[ddh-to-pke-elgamal85|DDH ⇒ PKE]]
- [[ddh-to-prf-nr97|DDH ⇒ PRF (Naor–Reingold)]]
- [[ddh-to-tdh-dgi-19|DDH ⇒ TDH]]
- [[decisional-linear-to-pke-bbs04|DLIN ⇒ PKE (Linear Encryption)]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[dlin-to-ippe-ksw08|DLIN ⇒ IPPE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bdh-to-nizk-gro16|DLIN ⇒ NIZK]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]]
- [[subexponential-ddh-to-ddh|Sub-exponential DDH ⇒ DDH]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-ddh-to-nizk-argument-for-np-jj21|Sub-exponential DDH ⇒ NIZK argument for NP]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-ddh-to-ppad-hardness-klv23|Sub-exponential DDH ⇒ PPAD hardness]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-sxdh-to-subexponential-ddh|Sub-exponential SXDH ⇒ Sub-exponential DDH]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[subexponential-sxdh-to-sxdh|Sub-exponential SXDH ⇒ SXDH]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[sxdh-to-ddh|SXDH ⇒ DDH]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])

**Produces Decisional Diffie-Hellman**

- [[ggm-to-ddh-sho97|GGM ⇒ DDH]]
- [[subexponential-ddh-to-ddh|Sub-exponential DDH ⇒ DDH]]
- [[subexponential-sxdh-to-subexponential-ddh|Sub-exponential SXDH ⇒ Sub-exponential DDH]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-sxdh-to-sxdh|Sub-exponential SXDH ⇒ SXDH]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[sxdh-to-ddh|SXDH ⇒ DDH]]

**Barriers**

- [[no-cdh-to-ddh-jn03|No fixed-construction reduction from CDH to DDH]]
- [[no-ddh-to-ibe-prv12|No fully-black-box reduction from DDH to IBE]] — circumvented by [[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]]

<!-- END GENERATED participates-in -->
