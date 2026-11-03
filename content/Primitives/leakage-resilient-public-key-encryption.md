---
type: primitive
status: draft
aliases:
  - LR-PKE
  - Leakage-resilient PKE
  - Leakage-resilient public-key encryption
title: Leakage-resilient public-key encryption
id: leakage-resilient-pke
variants:
  continual-leakage-resilient-pke: "#continual-memory-leakage"
---

# Leakage-resilient public-key encryption

A leakage-resilient public-key encryption scheme is a [[public-key-encryption|PKE]] scheme that remains CPA-secure when the adversary, after seeing $\pk$ and before the challenge, adaptively learns the values of efficiently computable functions of $\sk$ of total output length at most $\ell$ — [[AGV09 - Simultaneous Hardcore Bits and Cryptography against Memory Attacks|AGV09]], [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]].

## Syntax

The syntax is that of [[public-key-encryption|PKE]]: a tuple of efficient algorithms $\PKE = (\KeyGen, \Enc, \Dec)$ with secret keyspace $\calK_{\mathrm{sk}}$, public keyspace $\calK_{\mathrm{pk}}$, message space $\calM$ and ciphertext space $\calC$:

- $\KeyGen(1^\secpar) \to (\sk, \pk)$, a randomized algorithm sampling a secret key $\sk \in \calK_{\mathrm{sk}}$ and a public key $\pk \in \calK_{\mathrm{pk}}$,
- $\Enc(\pk, m) \to c$, a randomized algorithm encrypting a message $m \in \calM$ to a ciphertext $c \in \calC$,
- $\Dec(\sk, c) \to m$, a deterministic algorithm outputting a message $m \in \calM$ or $\bot$.

The leakage bound $\ell = \ell(\secpar)$ is a parameter of the security notion; $\ell / |\sk|$ is the **leakage rate**.

## Properties

### Correctness

A scheme $\PKE = (\KeyGen, \Enc, \Dec)$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(\sk, \Enc(\pk, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\sk, \pk) \gets \KeyGen(1^\secpar)$ and the randomness of $\Enc$. When $\varepsilon = 0$, $\PKE$ is perfectly correct.

### Leakage-resilient CPA security

The game extends the [[public-key-encryption#cpa-security|CPA game]] with a leakage oracle $\calL$: on the description of an efficiently computable function $f$ with $\ell_f$ output bits, $\calL$ returns $f(\sk)$ as long as the output lengths of all queries sum to at most $\ell$. Each $f$ may depend on $\pk$ and on earlier answers. An **admissible** adversary submits $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$ and queries $\calL$ only before receiving $c^*$: a single query after the challenge, $f(\sk) := [\Dec(\sk, c^*) = m_0]$, reveals $b$ — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{lr\text{-}cpa}}_{\PKE,\ell,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$; $t \gets 0$
\State $(m_0, m_1, \stA) \gets \calA^{\calL}(1^\secpar, \pk)$
\Comment{$m_0,m_1 \in \calM$ and $|m_0|=|m_1|$}
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA(c^*, \stA)$
\Comment{No leakage queries after $c^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calL(f)$}
\begin{algorithmic}
\If{$t + \ell_f > \ell$}
\Return $\bot$
\EndIf
\State $t \gets t + \ell_f$
\Comment{$f$ efficiently computable with $\ell_f$ output bits}
\Return $f(\sk)$
\end{algorithmic}
\end{algorithm}
```

A PKE scheme $\PKE$ is **$\ell$-leakage-resilient** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{lr\text{-}cpa}}_{\PKE,\ell,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{lr\text{-}cpa}}_{\PKE,\ell,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. For $\ell = 0$ the game is the CPA game, so every $\ell$-leakage-resilient scheme is CPA-secure ([[leakage-resilient-pke-to-pke-cpa-security|LR-PKE ⇒ CPA-secure PKE]]). The model is the memory-attack model of [[AGV09 - Simultaneous Hardcore Bits and Cryptography against Memory Attacks|AGV09]]. As an object, leakage-resilient PKE denotes a scheme that is $\ell$-leakage-resilient for some $\ell = \omega(\log \secpar)$; each result states its bound.

# Variations

## Chosen-ciphertext security with key leakage

In the leakage-resilient CCA1 and CCA2 games, $\calA$ also has the decryption oracle of the [[public-key-encryption#cca1-security|CCA1]] or [[public-key-encryption#cca-security|CCA2]] game, and leakage queries are still answered only before $c^*$ — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]. The Naor–Yung double-encryption paradigm of [[NY90 - Public-key Cryptosystems Provably Secure against Chosen Ciphertext Attacks|NY90]] carries over to key leakage, and NS09 obtain from it CCA2-secure schemes tolerating $L(1 - o(1))$ bits of leakage for $L$ the secret-key length; variants of the [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup cryptosystem]] are CCA1-secure under about $L/4$ bits and CCA2-secure under about $L/6$ bits of leakage — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]].

## Auxiliary-input leakage

The adversary receives, with $\pk$, the value $f(\sk)$ of one fixed efficiently computable function $f$ with no bound on its output length; $f$ need only be hard to invert, in that no efficient algorithm given $f(\sk)$ outputs $\sk$ with probability more than $\delta(\secpar)$, and $f(\sk)$ may determine $\sk$ information-theoretically. A scheme is CPA-secure with auxiliary inputs from a class $\calF$ of such functions if for every $f \in \calF$ and all efficient $\calA$ the CPA advantage of $\calA$ given $(\pk, f(\sk))$ is negligible — [[DGKPV10 - Public-Key Encryption Schemes with Auxiliary Inputs|DGKPV10]]. [[DKL09 - On cryptography with auxiliary input|DKL09]] introduce the model and construct symmetric-key encryption secure with exponentially hard-to-invert auxiliary input under the learning subspace with noise assumption; [[DGKPV10 - Public-Key Encryption Schemes with Auxiliary Inputs|DGKPV10]] construct public-key encryption secure with auxiliary inputs under [[decisional-diffie-hellman|DDH]] and under [[learning-with-errors|LWE]], using a Goldreich–Levin theorem over large fields.

## Continual memory leakage

A continual-leakage-resilient PKE scheme adds a randomized algorithm $\mathsf{Update}(\sk) \to \sk'$ that refreshes the secret key using fresh local randomness, with $\pk$ unchanged; decryption under every refreshed key satisfies correctness. In the security game $\calA$ may trigger updates before the challenge, $\calL$ evaluates each query on the current secret key, and $\calL$ bounds the total output length by $\ell$ within each period between two consecutive updates, with no bound over the lifetime of the key — [[BKKV10 - Overcoming the Hole in the Bucket Public-Key Cryptography Resilient to Continual Memory Leakage|BKKV10]], [[DHLW10 - Cryptography against Continuous Memory Attacks|DHLW10]]. [[BKKV10 - Overcoming the Hole in the Bucket Public-Key Cryptography Resilient to Continual Memory Leakage|BKKV10]] also allow a smaller amount of leakage on the computation of each update. As an object, continual-leakage-resilient PKE tolerates $\ell = \omega(\log \secpar)$ bits per period. A scheme that is never updated meets the bounded definition ([[continual-leakage-resilient-pke-to-leakage-resilient-pke|CLR-PKE ⇒ LR-PKE]]).

[[BKKV10 - Overcoming the Hole in the Bucket Public-Key Cryptography Resilient to Continual Memory Leakage|BKKV10]] construct PKE, identity-based encryption and signatures in this model ([[bilinear-pairing-and-dlin-to-continual-leakage-resilient-pke-bkkv10|Bilinear pairing + DLIN ⇒ CLR-PKE]]). [[DHLW10 - Cryptography against Continuous Memory Attacks|DHLW10]] construct continual-leakage-resilient one-way relations, signatures, identification schemes and authenticated key agreement, instantiated under the [$K$-Linear assumption](bilinear-map-assumptions#k-linear-assumption) in bilinear groups.

# Other results

- In the bounded-retrieval model the secret key grows with the leakage bound $\ell$, which may be very large, while the public key, the communication and the number of secret-key locations an honest party reads stay independent of $\ell$; [[ADW09 - Leakage-Resilient Public-Key Cryptography in the Bounded-Retrieval Model|ADW09]] give leakage-resilient identification, signature and authenticated key agreement schemes that extend to this model, the key agreement in the random oracle model.
- Non-interactive encryption cannot tolerate leakage after the ciphertext is seen, and the authenticated key agreement protocol of ADW09, which tolerates leakage before and after an execution, serves as an interactive encryption scheme with this guarantee — [[ADW09 - Leakage-Resilient Public-Key Cryptography in the Bounded-Retrieval Model|ADW09]].

<!-- BEGIN GENERATED participates-in 228217339de6 -->

## Participates in

**Builds on Leakage-resilient public-key encryption**

- [[continual-leakage-resilient-pke-to-leakage-resilient-pke|CLR-PKE ⇒ LR-PKE]] (via [[leakage-resilient-public-key-encryption#continual-memory-leakage|Continual memory leakage]])
- [[leakage-resilient-pke-to-pke-cpa-security|LR-PKE ⇒ CPA-secure PKE]]

**Produces Leakage-resilient public-key encryption**

- [[bilinear-pairing-and-dlin-to-continual-leakage-resilient-pke-bkkv10|Bilinear pairing + DLIN ⇒ CLR-PKE]] (via [[leakage-resilient-public-key-encryption#continual-memory-leakage|Continual memory leakage]])
- [[continual-leakage-resilient-pke-to-leakage-resilient-pke|CLR-PKE ⇒ LR-PKE]]
- [[k-linear-assumption-to-leakage-resilient-pke-ns09|d-Linear ⇒ LR-PKE]]
- [[lwe-to-leakage-resilient-pke-agv09|LWE ⇒ LR-PKE (Regev)]]
- [[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]]
- [[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]]

<!-- END GENERATED participates-in -->
