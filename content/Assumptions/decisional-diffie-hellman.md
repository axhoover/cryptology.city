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
  prime-order-ddh: "#ddh-in-prime-order-groups"
  recognizable-prime-order-ddh: "#ddh-in-prime-order-groups-with-decidable-membership"
  paired-group-ddh: "#ddh-in-paired-groups"
  subexponential-ddh: "#sub-exponential-ddh"
  decisional-linear: "#dlin"
  matrix-dh: "#matrix-diffie-hellman"
  sxdh: "#sxdh-symmetric-external-diffie-hellman"
  subexponential-sxdh: "#sub-exponential-sxdh"
  jls21-common-prime-assumptions: "#sxdh-lwe-and-lpn-over-a-common-prime"
---

# Decisional Diffie-Hellman

The _Decisional Diffie-Hellman (DDH)_ assumption states that, in a cyclic group $\GG = \langle g \rangle$ output by a group generator, every efficient adversary distinguishes $(g^x, g^y, g^{xy})$ from $(g^x, g^y, g^z)$ for uniform exponents $x, y, z$ with negligible advantage. Under it, the key exchange of [[DH76 - New Directions in Cryptography|DH76]] gives a key indistinguishable from a uniform group element ([[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ Non-interactive key exchange (NIKE)]]) — folklore. It implies the [[computational-diffie-hellman|CDH]] assumption: an adversary which can solve the CDH problem can also solve DDH in the same group ([[ddh-to-cdh|DDH ⇒ CDH]]) — folklore.

## Assumption

Informally, the DDH assumption concerns a [[group-generator|cyclic group generation algorithm]]
$\GrGen,$ which takes as input a security parameter $1^{\secpar}$ and outputs
a succinct[^1] description of a cyclic group $(\GG,g,p),$ where $\GG$ is the group
set, $g$ is a generator for the group, and $p$ is the order of the group. Every
group $\GrGen$ outputs is non-trivial: $p \ge 2$ for every $\secpar$.

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

is negligible. Since a [[group-generator|group generator]] computes the group operation in polynomial time, DDH hardness forces $\mathbb{E}[1/p]$, over the coins of $\GrGen$, to be negligible. For each constant $c$, the adversary that, when $p \le \secpar^c$, finds $x$ by trying every exponent in $[\secpar^c]$ and outputs $[Z_b \ne Y^x]$, and otherwise outputs a uniform bit, wins with probability $1 - \frac{1}{2p}$ on each group with $p \le \secpar^c$ and $\frac12$ on the others, so its advantage is $\mathbb{E}\big[(1 - \frac1p)\,[p \le \secpar^c]\big] \ge \frac12\Pr[p \le \secpar^c]$. Hence $\Pr[p \le \secpar^c]$ is negligible for every $c$, and so is $\mathbb{E}[1/p] \le \Pr[p \le \secpar^{c}] + \secpar^{-c}$ — standard.

## Known Results

- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[ggm-to-ddh-sho97|GGM ⇒ DDH]]
- [[ddh-to-pke-elgamal85|DDH ⇒ CPA-secure PKE (ElGamal)]]
- DDH implies [[pseudorandom-function|PRF]]s via the Naor-Reingold construction, which maps inputs in $\bits^n$ to group elements using a secret exponent vector — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]
- [[no-cdh-to-ddh-jn03|No fixed-construction reduction from CDH to DDH]]: DDH is easy in groups that admit efficient symmetric bilinear pairings (e.g., certain supersingular elliptic curves), where CDH can still be hard: given $(g^x, g^y, g^z)$, check whether $e(g^x, g^y) = e(g, g^z)$ — [[JN03 - Separating Decision Diffie-Hellman from Computational Diffie-Hellman in Cryptographic Groups|JN03]]
- [[no-ddh-to-ibe-prv12|No fully-black-box reduction from DDH to IBE]]
- In the [[generic-group-model|Generic Group Model]], for groups of prime order $p$, $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]

# Variations

In the above definition, we implicitly allow $\GrGen$ to choose a _random_
generator $g$ for the group $\GG$. However, [[BMZ19 - The Distinction Between Fixed and Random Generators in Group-Based Assumptions|BMZ19]] has explored technical differences between this model and one where $g$ is selected
deterministically.

## DDH in prime-order groups

**DDH is hard in prime-order groups** for $\GrGen$ if every group $\GrGen$ outputs has prime order $p$ and DDH is hard for $\GrGen$. Exponents then form the field $\ZZ_p$, and the Chaum–Pedersen proof that a tuple is a Diffie–Hellman tuple is sound — standard.

## DDH in prime-order groups with decidable membership

**DDH is hard in prime-order groups with decidable membership** for $\GrGen$ if DDH is hard in prime-order groups for $\GrGen$ and a deterministic polynomial-time algorithm decides, given any $(\GG, g, p)$ that $\GrGen$ outputs and a string, whether the string encodes an element of $\GG$. Only membership of elements is decided, for groups that $\GrGen$ itself outputs; [[discrete-logarithm#dlog-in-verifiable-prime-order-groups|DLOG in verifiable prime-order groups]] also checks an arbitrary group description. The order-$p$ subgroup of $\ZZ_P^*$ for a prime $P$ with $p \mid P - 1$ qualifies, since an integer $x \in [1, P-1]$ lies in it if and only if $x^p \equiv 1 \pmod P$ — standard. Dropping the membership test gives DDH in prime-order groups ([[recognizable-prime-order-ddh-to-prime-order-ddh|Prime-order DDH with decidable membership ⇒ Prime-order DDH]]) — folklore.

## DDH in paired groups

A _paired group generator_ outputs two prime-order groups $(\GG, g, p)$ and $(\hat\GG, \hat g, q)$ in which $\hat\GG$ is the subgroup of order $q$ of $\ZZ_p^*$, so that $q$ divides $p - 1$. **DDH is hard in paired groups** for such a generator if DDH is hard in each group given the description of both: for every efficient $\calA$, $\left|2\Pr[\hat b = b] - 1\right|$ is negligible in the [[#Assumption|DDH game]] run in $(\GG, g, p)$ in which $\calA$ receives the generator's full output $(\GG, g, p, \hat\GG, \hat g, q)$ in place of $(\GG, g, p)$, together with the challenge $(X, Y, Z_b) \in \GG^3$, and likewise in the DDH game run in $(\hat\GG, \hat g, q)$, given the same full output and a challenge in $\hat\GG^3$. The Double-strand Cramer–Shoup scheme is rerandomizable and RCCA-secure under this assumption ([[ddh-to-rerandomizable-rcca-encryption-pr07|Paired-group DDH ⇒ Rerandomizable RCCA encryption]]) — [[PR07 - Rerandomizable RCCA Encryption|PR07]]. Keeping only the first group gives a group generator for which DDH is hard in prime-order groups ([[paired-group-ddh-to-ddh|Paired-group DDH ⇒ prime-order DDH]]) — folklore.

## Sub-exponential DDH

DDH is **sub-exponentially hard** for $\GrGen$ if there is a constant $\varepsilon > 0$ such that for all sufficiently large $\secpar$, every adversary $\calA$ of size at most $2^{\secpar^{\varepsilon}}$ has $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le 2^{-\secpar^{\varepsilon}}$ — standard. The weaker form that bounds only polynomial-time adversaries by advantage $2^{-\secpar^{\varepsilon}}$ suffices for NIZK arguments for $\classNP$, and no pairing is needed ([[subexponential-ddh-to-nizk-argument-for-np-jj21|Sub-exponential DDH ⇒ NIZK argument for NP]]) — [[JJ21 - Non-interactive Zero Knowledge from Sub-exponential DDH|JJ21]].

## DLIN

Given $(u, v, h, u^a, v^b, h^c) \in \GG^6$ for $u, v, h \getsr \GG$ and $a, b \getsr \ZZ_p$, distinguish $c = a + b$ from $c \getsr \ZZ_p$ — [[BBS04 - Short Group Signatures|BBS04]]. Formally, for a group generator $\GrGen$ that outputs groups $(\GG, g, p)$ of prime order $p$, **DLIN is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\left|\Pr\!\left[\calA(1^\secpar, \GG, g, p, u, v, h, u^a, v^b, h^{a+b}) = 1\right] - \Pr\!\left[\calA(1^\secpar, \GG, g, p, u, v, h, u^a, v^b, h^{c}) = 1\right]\right|
$$

is negligible, over $(\GG, g, p) \gets \GrGen(1^\secpar)$, $u, v, h \getsr \GG$ and $a, b, c \getsr \ZZ_p$.

For a group generator $\GrGen$ as in [[#Assumption|the DDH assumption]]:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{dlin}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, g, p) \gets \GrGen(1^\secpar)$
\State $u, v, h \getsr \GG$ ; $a, b, z \getsr \ZZ_p$
\State $\beta \getsr \bits$
\State $c_0 \gets a + b$ ; $c_1 \gets z$
\State $\beta' \gets \calA(1^\secpar, \GG, g, p, u, v, h, u^a, v^b, h^{c_\beta})$
\Return $[\beta' = \beta]$
\end{algorithmic}
\end{algorithm}
```

**DLIN is hard** for $\GrGen$ if every group $\GrGen$ outputs has prime order $p$ and for all efficient $\calA$,

$$
\Adv^{\mathrm{dlin}}_{\GrGen,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{dlin}}_{\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

## k-Lin

The $k$-Linear assumption is defined on [[bilinear-map-assumptions#k-linear-assumption|Bilinear map assumptions]].

## Matrix Diffie-Hellman

Let $\GrGen$ output $(\GG, g, p)$ with $p$ prime, and for $\mathbf{A} = (a_{ij}) \in \ZZ_p^{\ell \times k}$ write $g^{\mathbf{A}} := (g^{a_{ij}})_{i,j} \in \GG^{\ell \times k}$. For $\ell > k$, a _matrix distribution_ $\calD_{\ell,k}$ outputs, in polynomial time, a matrix in $\ZZ_p^{\ell \times k}$ of rank $k$; $\calD_k := \calD_{k+1,k}$. The $\calD_{\ell,k}$-MDDH assumption states that, given $g^{\mathbf{A}}$ for $\mathbf{A} \gets \calD_{\ell,k}$, no efficient adversary can tell whether a vector in $\GG^{\ell}$ lies in the span of the columns of $g^{\mathbf{A}}$ — [[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{mddh}}_{\calD_{\ell,k},\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, g, p) \gets \GrGen(1^\secpar)$
\State $\mathbf{A} \gets \calD_{\ell,k}$ ; $\mathbf{w} \getsr \ZZ_p^k$ ; $\mathbf{u} \getsr \ZZ_p^{\ell}$
\State $b \getsr \bits$
\State $\mathbf{z}_0 \gets \mathbf{A}\mathbf{w}$ ; $\mathbf{z}_1 \gets \mathbf{u}$
\State $\hat{b} \gets \calA(1^\secpar, \GG, g, p, g^{\mathbf{A}}, g^{\mathbf{z}_b})$
\Return $[\hat{b} = b]$
\end{algorithmic}
\end{algorithm}
```

**$\calD_{\ell,k}$-MDDH is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\mathrm{mddh}}_{\calD_{\ell,k},\GrGen,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{mddh}}_{\calD_{\ell,k},\GrGen,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]]. Choices of $\calD_{\ell,k}$ recover DDH, [[decisional-diffie-hellman#dlin|DLIN]] and [$k$-Lin](bilinear-map-assumptions#k-linear-assumption); two new distributions, $2$-SCasc and $2$-ILin, give MDDH assumptions that are generically hard in bilinear groups and have a shorter description than $2$-Lin — [[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]].

As an object, Matrix Diffie-Hellman denotes the assumption that $\calD_{\ell,k}$-MDDH is hard for $\GrGen$ for some matrix distribution $\calD_{\ell,k}$ with $\ell > k \ge 1$ and $\ell, k \le \poly(\secpar)$; a result from it must therefore hold for every such distribution. DDH in prime-order groups is the $\calL_1$-MDDH assumption, so it implies Matrix Diffie-Hellman ([[prime-order-ddh-to-matrix-dh-ehk13|Prime-order DDH ⇒ Matrix DH]]) — [[EHK+13 - An Algebraic Framework for Diffie-Hellman Assumptions|EHK+13]]. Hardness for every matrix distribution is false: the distribution that always outputs $\mathbf{A} = (\mathbf{I}_k \mid \mathbf{0})^{\top}$ has rank $k$, every vector $\mathbf{A}\mathbf{w}$ has last entry $0$, and testing whether the last entry of $g^{\mathbf{z}_b}$ is the identity of $\GG$ has advantage $1 - 1/p$ — standard.

## SXDH (Symmetric External Diffie-Hellman)

Assumes DDH is hard in both $\GG_1$ and $\GG_2$ of an asymmetric (Type 3) pairing; used to instantiate Groth–Sahai proofs efficiently ([[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK]]) — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]].

### Sub-exponential SXDH

SXDH is **sub-exponentially hard** if there is a constant $\varepsilon > 0$ such that for all sufficiently large $\secpar$, every adversary of size at most $2^{\secpar^{\varepsilon}}$ has advantage at most $2^{-\secpar^{\varepsilon}}$ against DDH in each of $\GG_1$ and $\GG_2$.

### SXDH, LWE and LPN over a common prime

Let $\GrGen$ output an asymmetric bilinear group $\Pi = (\GG_1, \GG_2, \GG_T, g_1, g_2, e, p)$: groups of prime order $p$ with $2^{\secpar - 1} \le p < 2^{\secpar}$, generators $g_1$ of $\GG_1$ and $g_2$ of $\GG_2$, and an efficiently computable non-degenerate [[pairings|bilinear pairing]] $e : \GG_1 \times \GG_2 \to \GG_T$. **SXDH, LWE and LPN are sub-exponentially hard over a common prime** for $\GrGen$ if there are constants $\varepsilon, \delta \in (0, 1)$ and $c > 0$ and polynomials $w$ and $\ell_0$ with $w(\secpar) \ge 2\sqrt{k}$ for $k := \lceil \secpar^{1/\varepsilon} \rceil$ such that, for every polynomial $m$ and every polynomial $\ell \ge \ell_0$, for all sufficiently large $\secpar$, every adversary of size at most $2^{\secpar^{c}}$ that receives $\Pi$ with its challenge has advantage at most $2^{-\secpar^{c}}$ in each of three problems: (i) DDH in $\GG_1$ and DDH in $\GG_2$, as in the [[#Assumption|DDH game]]; (ii) [[learning-with-errors#decision-lwe|decision LWE]] over $\ZZ_p$ with secret dimension $k$, $m$ samples and discrete-Gaussian error of width $w$, so that the modulus-to-noise ratio $p/w$ is below $2^{k^{\varepsilon}}$; (iii) [[learning-parity-with-noise#assumption|LPN]] over $\ZZ_p$ with secret dimension $\ell$ and $m$ samples, each noise coordinate $0$ with probability $1 - \ell^{-\delta}$ and uniform in $\ZZ_p$ otherwise. This is the joint premise of [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] (arXiv v1, Theorem 5.5): sub-exponential hardness of SXDH in bilinear groups of order $p$, of LWE with modulus-to-noise ratio $2^{k^{\varepsilon}}$ and of $\mathrm{LPN}(\ell, n, \ell^{-\delta}, p)$ for $\ell = n^{1/\lceil d/2 \rceil}$, for one efficiently samplable $\secpar$-bit prime $p$; the construction sets $k = \Theta(\secpar^{1/\varepsilon})$ and polynomial noise, so that $p/\poly(\secpar) \le 2^{k^{\varepsilon}}$ (Appendix B) — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]. Problem (i) alone is [[#Sub-exponential SXDH|sub-exponential SXDH]] for the same generator ([[jls21-common-prime-assumptions-to-subexponential-sxdh|SXDH, LWE and LPN over a common prime ⇒ Sub-exponential SXDH]]) — folklore.

# Attacks

In the DDH game write $Z_b = g^{z_b}$, with $z_0 = xy$ and $z_1 = z$.

- **Baby-step giant-step**: a generic algorithm for the underlying discrete logarithm problem. Given $X = g^x$, it finds $x$ in $O(\sqrt{p})$ group operations and $O(\sqrt{p})$ space by writing $x = im + j$ (where $m = \lceil\sqrt{p}\rceil$) and matching $g^{im} = X \cdot g^{-j}$ across a hash table — [[Sha71 - Class Number, a Theory of Factorization, and Genera|Sha71]]. A DLOG solver breaks DDH: given $(g^x, g^y, Z)$ it computes $x$ and checks whether $Z = (g^y)^x$, so baby-step giant-step distinguishes DDH tuples in $O(\sqrt{p})$ group operations — standard. The other DLOG algorithms are listed under [[discrete-logarithm#attacks|DLOG attacks]].
- **Small prime factors of the group order**: let $r$ be a prime dividing $p$. Then $h := g^{p/r}$ has order $r$, and $X^{p/r} = h^{x \bmod r}$, $Y^{p/r} = h^{y \bmod r}$ and $Z_b^{p/r} = h^{z_b \bmod r}$. The distinguisher reads off $x$, $y$ and $z_b$ modulo $r$ by comparing these elements with $h^0, \ldots, h^{r-1}$, and outputs $[z_b \not\equiv xy \pmod r]$, after $O(r + \log p)$ group operations. A real tuple always gives $0$. For a random tuple, $z \bmod r$ is uniform on $\ZZ_r$ and independent of $(x, y)$, because $z$ is uniform modulo $p$ and $r \mid p$, so the distinguisher outputs $1$ with probability $1 - 1/r$; it wins with probability $\frac12 + \frac12(1 - \frac1r)$, an advantage of $1 - 1/r$ — standard. For a polynomial $B$, finding a prime factor $r \le B$ of $p$ by trial division, running this test if there is one and outputting a uniform bit otherwise gives advantage at least $\frac12\Pr[p \text{ has a prime factor at most } B]$. DDH hardness therefore requires, for every polynomial $B$, that $p$ have a prime factor at most $B$ with negligible probability, whether or not $p$ is smooth and whether or not DLOG is hard; in particular DDH fails for every group generator whose groups have even order, the test with $r = 2$ having advantage $\frac12$. Pohlig–Hellman, which reduces DLOG to the subgroups of prime-power order — [[PH78 - An Improved Algorithm for Computing Logarithms over GF(p) and Its Cryptographic Significance|PH78]], as described in [[Eng07 - Discrete logarithms in curves over finite fields|Eng07]] (Section 1.1) — computes $x$ itself in polynomial time only when every prime factor of $p$ is small; the test above needs only one.
- **Legendre symbol in $\ZZ_P^*$**: let $P$ be an odd prime and $g$ a generator of $\ZZ_P^*$, so that $(\GG, g, p) = (\ZZ_P^*, g, P - 1)$. Euler's criterion computes the Legendre symbol $\left(\frac{a}{P}\right) \equiv a^{(P-1)/2} \pmod P$ with one exponentiation, and $\left(\frac{g}{P}\right) = -1$, since $g^{(P-1)/2} \ne 1$ is a square root of $1$ modulo the prime $P$; so $\left(\frac{g^x}{P}\right) = (-1)^x$ reveals $x \bmod 2$. This is the attack above for $r = 2$, which divides $P - 1$: the distinguisher outputs $0$ iff $z_b \equiv xy \pmod 2$, that is, iff $\left(\frac{Z_b}{P}\right) = -1$ exactly when $\left(\frac{X}{P}\right) = \left(\frac{Y}{P}\right) = -1$; a real tuple always gives $0$, a random one gives $1$ with probability $\frac12$, and the advantage is $\frac12$ — standard. DDH therefore fails in $\ZZ_P^*$ for every odd prime $P$, including a safe prime $P = 2q + 1$, whose order $2q$ is not smooth and in which DLOG and CDH are conjectured hard ([[computational-diffie-hellman#attacks|CDH attacks]]).
- **DDH is easy in groups with efficient pairings**: in groups $\GG$ that admit an efficient bilinear pairing $e: \GG \times \GG \to \GG_T$ (symmetric/Type-1 pairings, e.g., certain supersingular elliptic curves), DDH is easy — [[JN03 - Separating Decision Diffie-Hellman from Computational Diffie-Hellman in Cryptographic Groups|JN03]]. Given $(g^x, g^y, g^z)$, check whether $e(g^x, g^y) = e(g, g^z)$; for a non-degenerate pairing on a group of prime order $p$ this holds iff $z \equiv xy \pmod p$, so the test has advantage $1 - 1/p$ — standard. DDH is therefore **not** a reasonable assumption in Type-1 pairing groups — see [[bilinear-map-assumptions|bilinear map assumptions]].

The two subgroup attacks need a small prime factor of $p$. DDH is therefore assumed in groups whose order has no small prime factor, typically [[#DDH in prime-order groups|groups of prime order]] $p$ such as the subgroup of quadratic residues modulo a safe prime $P = 2p + 1$ ([[group-generator|group generators]]), every element of which has Legendre symbol $1$ — standard.

[^1]:
    Succinct means that the tuple $(\GG,g,p)$ is at most
    $\poly(\secpar)$-bits, but $|\GG| = p$ may be super-polynomial in $\secpar.$

<!-- BEGIN GENERATED participates-in bd18a9c6b27b -->

## Participates in

**Builds on Decisional Diffie-Hellman**

- [[bdh-to-hibe-wat09|DBDH + DLIN ⇒ HIBE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bdh-to-ibe-wat09|DBDH + DLIN ⇒ IBE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bilinear-pairing-and-dlin-to-continual-leakage-resilient-pke-bkkv10|Bilinear pairing + DLIN ⇒ CLR-PKE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bilinear-pairing-and-dlin-to-zap-gos06|Verifiable Type 1 pairing + DLIN ⇒ Zaps (non-interactive)]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bilinear-pairing-q-sdh-and-dlin-to-cpa-anonymous-group-signature-bbs04|Bilinear pairing + q-SDH + DLIN ⇒ CPA-anonymous group signatures (Boneh–Boyen–Shacham)]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO]] (via [[decisional-diffie-hellman#sxdh-lwe-and-lpn-over-a-common-prime|SXDH, LWE and LPN over a common prime]])
- [[ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)]]
- [[ddh-and-uowhf-to-pke-cca2-security-cs98|DDH + UOWHF ⇒ CCA-secure PKE (Cramer–Shoup)]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups-with-decidable-membership|DDH in prime-order groups with decidable membership]])
- [[ddh-to-anonymous-public-key-encryption-bbdp01|DDH ⇒ Key-hiding PKE (ElGamal)]]
- [[ddh-to-cdh|DDH ⇒ CDH]]
- [[ddh-to-client-preprocessing-pir-chk22|DDH ⇒ PIR with client preprocessing (CHK22)]]
- [[ddh-to-four-round-mpc-bgj18|DDH ⇒ Four-round MPC (Badrinarayanan–Goyal–Jain–Kalai–Khurana–Sahai)]]
- [[ddh-to-lossy-trapdoor-function-pw08|DDH ⇒ Highly lossy TDF (Peikert–Waters)]]
- [[ddh-to-malicious-ot-security-pvw08|DDH ⇒ Two-round UC-secure OT (PVW)]]
- [[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ Non-interactive key exchange (NIKE)]]
- [[ddh-to-pake-koy01|DDH ⇒ PAKE in the CRS model (Katz–Ostrovsky–Yung)]]
- [[ddh-to-partially-homomorphic-encryption-phe-elgamal85|DDH ⇒ Multiplicatively homomorphic encryption]]
- [[ddh-to-pke-elgamal85|DDH ⇒ CPA-secure PKE (ElGamal)]]
- [[ddh-to-prf-nr97|DDH ⇒ PRF (Naor–Reingold)]]
- [[ddh-to-rerandomizable-rcca-encryption-pr07|Paired-group DDH ⇒ Rerandomizable RCCA encryption (Double-strand Cramer–Shoup)]] (via [[decisional-diffie-hellman#ddh-in-paired-groups|DDH in paired groups]])
- [[ddh-to-tdh-dgi-19|DDH ⇒ TDH]]
- [[decisional-linear-to-pke-bbs04|DLIN ⇒ PKE (Linear Encryption)]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[dlin-to-ippe-ksw08|Bilinear pairing + DLIN ⇒ IPPE]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[bdh-to-nizk-gro16|Type 1 pairing + DLIN ⇒ NIZK]] (via [[decisional-diffie-hellman#dlin|DLIN]])
- [[jls21-common-prime-assumptions-to-subexponential-sxdh|SXDH, LWE and LPN over a common prime ⇒ Sub-exponential SXDH]] (via [[decisional-diffie-hellman#sxdh-lwe-and-lpn-over-a-common-prime|SXDH, LWE and LPN over a common prime]])
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]]
- [[paired-group-ddh-to-ddh|Paired-group DDH ⇒ prime-order DDH]] (via [[decisional-diffie-hellman#ddh-in-paired-groups|DDH in paired groups]])
- [[prime-order-ddh-to-ddh|Prime-order DDH ⇒ DDH]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-katz-wang-signature-kw03|Prime-order DDH ⇒ Katz–Wang signatures]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-matrix-dh-ehk13|Prime-order DDH ⇒ Matrix DH]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-pre|DDH ⇒ PRE (Blaze–Bleumer–Strauss scheme)]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-prime-order-cdh|Prime-order DDH ⇒ prime-order CDH]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-universal2-hash-proof-system-cs02|DDH ⇒ Universal-2 HPS]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups-with-decidable-membership|DDH in prime-order groups with decidable membership]])
- [[recognizable-prime-order-ddh-to-prime-order-ddh|Prime-order DDH with decidable membership ⇒ Prime-order DDH]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups-with-decidable-membership|DDH in prime-order groups with decidable membership]])
- [[subexponential-ddh-to-ddh|Sub-exponential DDH ⇒ DDH]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-ddh-to-nizk-argument-for-np-jj21|Sub-exponential DDH ⇒ NIZK argument for NP]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-ddh-to-ppad-hardness-klv23|Sub-exponential DDH ⇒ PPAD hardness]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-sxdh-to-subexponential-ddh|Sub-exponential SXDH ⇒ Sub-exponential DDH]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[subexponential-sxdh-to-sxdh|Sub-exponential SXDH ⇒ SXDH]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[sxdh-to-ddh|SXDH ⇒ DDH]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[sxdh-to-structure-preserving-signature-kpw15|SXDH ⇒ Structure-preserving signatures (Kiltz–Pan–Wee)]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[type-1-pairing-and-dlin-to-structure-preserving-signature-hj12|Type 1 pairing + DLIN ⇒ Structure-preserving signatures, tightly (Hofheinz–Jager)]] (via [[decisional-diffie-hellman#dlin|DLIN]])

**Produces Decisional Diffie-Hellman**

- [[ggm-to-ddh-sho97|GGM ⇒ DDH]]
- [[jls21-common-prime-assumptions-to-subexponential-sxdh|SXDH, LWE and LPN over a common prime ⇒ Sub-exponential SXDH]] (via [[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponential SXDH]])
- [[paired-group-ddh-to-ddh|Paired-group DDH ⇒ prime-order DDH]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[prime-order-ddh-to-ddh|Prime-order DDH ⇒ DDH]]
- [[prime-order-ddh-to-matrix-dh-ehk13|Prime-order DDH ⇒ Matrix DH]] (via [[decisional-diffie-hellman#matrix-diffie-hellman|Matrix Diffie-Hellman]])
- [[recognizable-prime-order-ddh-to-prime-order-ddh|Prime-order DDH with decidable membership ⇒ Prime-order DDH]] (via [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH in prime-order groups]])
- [[subexponential-ddh-to-ddh|Sub-exponential DDH ⇒ DDH]]
- [[subexponential-sxdh-to-subexponential-ddh|Sub-exponential SXDH ⇒ Sub-exponential DDH]] (via [[decisional-diffie-hellman#sub-exponential-ddh|Sub-exponential DDH]])
- [[subexponential-sxdh-to-sxdh|Sub-exponential SXDH ⇒ SXDH]] (via [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]])
- [[sxdh-to-ddh|SXDH ⇒ DDH]]

**Barriers**

- [[no-cdh-to-ddh-jn03|No fixed-construction reduction from CDH to DDH]]
- [[no-ddh-to-ibe-prv12|No fully-black-box reduction from DDH to IBE]] — circumvented by [[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]]

<!-- END GENERATED participates-in -->
