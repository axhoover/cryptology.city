---
type: folklore
status: draft
aliases:
  - Forking lemma
  - General forking lemma
title: Forking lemma
id: forking-lemma
---

# Forking lemma

Fix an integer $q \ge 1$ and a set $H$ of size $h \ge 2$. Let $\calA$ be a randomized algorithm that on input $x, h_1, \ldots, h_q$ returns a pair $(J, \sigma)$ with $J \in \{0, 1, \ldots, q\}$ and side output $\sigma$, and let $\mathsf{IG}$ be a randomized input generator. The **accepting probability** of $\calA$ is

$$
\mathrm{acc} := \Pr\!\left[J \ge 1 : x \gets \mathsf{IG};\ h_1, \ldots, h_q \getsr H;\ (J, \sigma) \gets \calA(x, h_1, \ldots, h_q)\right].
$$

The **forking algorithm** $F_\calA$ reruns $\calA$ on the same coins and the same first $J - 1$ answers, with fresh answers from position $J$ on:

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$F_\calA(x)$}
\begin{algorithmic}
\State pick coins $\rho$ for $\calA$ uniformly at random
\State $h_1, \ldots, h_q \getsr H$
\State $(I, \sigma) \gets \calA(x, h_1, \ldots, h_q; \rho)$
\If{$I = 0$}
\Return $(0, \bot, \bot)$
\EndIf
\State $h'_I, \ldots, h'_q \getsr H$
\State $(I', \sigma') \gets \calA(x, h_1, \ldots, h_{I-1}, h'_I, \ldots, h'_q; \rho)$
\If{$I' = I$ and $h'_I \ne h_I$}
\Return $(1, \sigma, \sigma')$
\EndIf
\Return $(0, \bot, \bot)$
\end{algorithmic}
\end{algorithm}
```

With $\mathrm{frk} := \Pr\!\left[b = 1 : x \gets \mathsf{IG};\ (b, \sigma, \sigma') \gets F_\calA(x)\right]$,

$$
\mathrm{frk} \ge \mathrm{acc} \cdot \left(\frac{\mathrm{acc}}{q} - \frac{1}{h}\right),
$$

which implies $\mathrm{acc} \le q/h + \sqrt{q \cdot \mathrm{frk}}$ — [[BN06 - Multi-Signatures in the Plain Public-Key Model and a General Forking Lemma|BN06]].

## Proof

Fix $x$ and write $\mathrm{acc}(x)$, $\mathrm{frk}(x)$ for the probabilities over the remaining coins. For $i \in [q]$, let $p_i(\rho, h_1, \ldots, h_{i-1})$ be the probability over $h_i, \ldots, h_q$ that $I = i$. Given $(\rho, h_1, \ldots, h_{i-1})$ the two runs are independent, so $\Pr[I = I' = i] = \mathbb{E}[p_i^2] \ge \mathbb{E}[p_i]^2 = \Pr[I = i]^2$, and by Cauchy–Schwarz

$$
\Pr[I = I' \ge 1] \ge \sum_{i=1}^{q} \Pr[I = i]^2 \ge \frac{\mathrm{acc}(x)^2}{q}.
$$

The fresh answer $h'_I$ is independent of the first run, so $\Pr[I \ge 1 \wedge h'_I = h_I] = \mathrm{acc}(x)/h$ and $\mathrm{frk}(x) \ge \mathrm{acc}(x)^2/q - \mathrm{acc}(x)/h$. Averaging over $x$ with $\mathbb{E}[\mathrm{acc}(x)^2] \ge \mathrm{acc}^2$ gives the bound — [[BN06 - Multi-Signatures in the Plain Public-Key Model and a General Forking Lemma|BN06]].

## Application to Fiat–Shamir signatures

In a random-oracle proof for a [[fiat-shamir-heuristic|Fiat–Shamir]] [[digital-signature|signature]] built from a [[sigma-protocol|sigma protocol]], $\calA$ runs the forger, answers its $i$th random-oracle query with $h_i$, and returns the index of the query that fixes the challenge of a valid forgery, or $0$, making that query itself if the forger did not. A successful fork gives two accepting conversations with a common commitment and distinct challenges, from which special soundness extracts a witness. For signatures from three-move honest-verifier zero-knowledge [[identification-scheme|identification schemes]] with special soundness this is the proof of [[PS96 - Security Proofs for Signature Schemes|PS96]] ([[id-and-rom-to-ds|ID ⇒ DS]], [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]); by the bound above, a forger with success probability $\varepsilon$ making $q$ oracle queries yields a witness with probability about $\varepsilon^2/q$ — [[BN06 - Multi-Signatures in the Plain Public-Key Model and a General Forking Lemma|BN06]].

For [[digital-signature#schnorr-signatures|Schnorr signatures]] the $O(q)$ time-to-success loss of the expected-time reduction of [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]] (see below) is essentially optimal: if [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, every algebraic reduction from [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] to Schnorr forgery in the random-oracle model loses a factor $f(\varepsilon)\, q$ in the time-to-success ratio, where $f$ is close to $1$ as long as the forger's success probability $\varepsilon$ is noticeably smaller than $1$, and a factor $\Omega(q)$, independent of $\varepsilon$, when the reduction's cost is measured by expected time and expected number of queries ([[no-tight-prime-order-dlog-to-schnorr-signature-seu12|barrier]]) — [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]].

# Variations

## Pointcheval–Stern forking lemma

The original lemma concerns signatures of the form $(m, \sigma_1, h, \sigma_2)$, where $\sigma_1$ is random, $h$ is the random-oracle hash of $(m, \sigma_1)$, and $\sigma_2$ depends only on $\sigma_1$, $h$ and $m$. If an efficient forger given only public data outputs a valid signature $(m, \sigma_1, h, \sigma_2)$ with non-negligible probability, then with non-negligible probability a rerun with the same random tape and a different random oracle outputs two valid signatures $(m, \sigma_1, h, \sigma_2)$ and $(m, \sigma_1, h', \sigma_2')$ with $h \ne h'$ — [[PS96 - Security Proofs for Signature Schemes|PS96]]. The lemma extends to chosen-message attacks when the triples $(\sigma_1, h, \sigma_2)$ can be simulated without the secret key — [[PS96 - Security Proofs for Signature Schemes|PS96]]. An exact-security version obtains the two signatures in expected time $O(QT/\varepsilon)$ from a forger running in time $T$ with success probability $\varepsilon$ and $Q$ random-oracle queries, for $\varepsilon$ above a threshold depending on $Q$, the number of signing queries and the length of the oracle's answers — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]].

### Splitting lemma

Let $A \subseteq X \times Y$ with $\Pr[(x, y) \in A] \ge \varepsilon$ for independent $x \in X$ and $y \in Y$, and let $y'$ be distributed as $y$, independently of $x$. For every $\alpha < \varepsilon$, the set

$$
B := \left\{(x, y) \in X \times Y : \Pr_{y'}\!\left[(x, y') \in A\right] \ge \varepsilon - \alpha\right\}
$$

satisfies $\Pr[B] \ge \alpha$ and $\Pr[B \mid A] \ge \alpha/\varepsilon$ — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. Writing $p(x) := \Pr_{y'}[(x, y') \in A]$, the first bound follows from $\varepsilon \le \mathbb{E}[p(x)] \le \Pr[B] + (\varepsilon - \alpha)$, the second from $\Pr[A \setminus B] \le \varepsilon - \alpha \le (1 - \alpha/\varepsilon)\Pr[A]$ — standard.

## Reset lemma

For a three-move public-coin protocol with challenge space $C$, fix a prover $P^*$ and its input. Let $\mathrm{acc}$ be the probability that the verifier accepts, and $\mathrm{res}$ the probability that running $P^*$ on fixed coins against two independent challenges $e, e' \getsr C$ yields two accepting conversations with $e \ne e'$. Then $\mathrm{acc} \le 1/|C| + \sqrt{\mathrm{res}}$ — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]]. The proof is the case $q = 1$ of the argument above: $\mathrm{res} \ge \mathrm{acc}^2 - \mathrm{acc}/|C| \ge (\mathrm{acc} - 1/|C|)^2$ when $\mathrm{acc} \ge 1/|C|$. Applied to the [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]], it turns a passive impersonator with success probability $\varepsilon \ge 1/|C|$ into a DLOG solver with success probability at least $(\varepsilon - 1/|C|)^2$ ([[dlog-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr identification protocol]]) — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]].

## High-moment forking lemma

If DLOG is 2-moment hard, meaning that every algorithm's success probability is bounded in terms of the second moment of its running time, as in the generic group model, a high-moment forking lemma for sigma protocols shows that every $t$-time Schnorr forger making $q$ hash queries succeeds with probability at most $(q t^2/p)^{2/3}$ in a group of prime order $p$, against $(q t^2/p)^{1/2}$ from earlier proofs — [[RS21 - Tighter Security for Schnorr Identification and Signatures A High-Moment Forking Lemma for Sigma-Protocols|RS21]].

<!-- BEGIN GENERATED participates-in f1ee869aea9c -->

## Participates in

**Used via Forking lemma**

- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]
- [[module-lwe-and-module-sis-to-ds|Module LWE + Module-SIS ⇒ DS]]
- [[omdl-to-musig2-nrs21|OMDL ⇒ MuSig2]]
- [[prime-order-dlog-to-musig-mpsw19|DLOG ⇒ MuSig]]

<!-- END GENERATED participates-in -->
