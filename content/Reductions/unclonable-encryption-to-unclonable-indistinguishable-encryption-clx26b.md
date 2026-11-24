---
type: reduction
status: draft
title: "Unclonable encryption ⇒ unclonable-indistinguishable UE"
aliases: []
id: red-unclonable-encryption-to-unclonable-indistinguishable-encryption-clx26b
kind: implication
hypotheses: [unclonable-encryption]
conclusion: unclonable-indistinguishable-encryption
class: unstated
model: quantum
source:
  - "[[CLX26b - Unclonable encryption from BB84 states a simultaneous Goldreich-Levin reduction|CLX26b]]"
  - "[[Ana26 - Non-Local Search-to-Decision Reduction over F2, and More|Ana26]]"
security-loss: "quartic: a cloning adversary winning the indistinguishability game with probability $1/2 + \\Delta/2$ yields one winning the unclonable-security game with probability at least $\\Delta^4$"
rationale:
  class: "CLX26b call their extractor black-box in the sense that it uses the adversary only through its splitting channel and coherent controlled applications of the receivers' measurement reflections, a form of access the class vocabulary does not describe."
  model: "The ciphertexts and the cloning adversaries are quantum; the theorem is proved in the plain model, with no oracle."
---

# Unclonable encryption ⇒ unclonable-indistinguishable UE

## Statement

Let $\mathsf{UE} = (\KeyGen, \Enc, \Dec)$ be an [[unclonable-encryption|unclonable encryption]] scheme in the plain model with message space $\bits^n$, and let $\mathsf{UE}'$ be the scheme for one-bit messages whose key is $(k, r)$ with $k \gets \KeyGen(1^\secpar)$ and $r \getsr \bits^n$, whose encryption $\Enc'((k, r), b)$ samples $m \getsr \bits^n$ and outputs $(\Enc(k, m),\ b \oplus \langle r, m \rangle)$, and whose decryption is $\Dec'((k, r), (\rho, c)) := c \oplus \langle r, \Dec(k, \rho) \rangle$, with $\langle \cdot, \cdot \rangle$ the inner product modulo $2$. If $\mathsf{UE}$ is $\delta$-[[unclonable-encryption#unclonable-security|unclonable]], then every cloning adversary, unbounded in running time, wins the [[unclonable-encryption#unclonable-indistinguishability|unclonable-indistinguishability]] game against $\mathsf{UE}'$ with probability at most $1/2 + \delta^{1/4}/2$, so $\mathsf{UE}'$ is unclonable-indistinguishable when $\delta$ is negligible — [[CLX26b - Unclonable encryption from BB84 states a simultaneous Goldreich-Levin reduction|CLX26b]] (arXiv v2, Theorem 3.4). Independently and by a different argument, if no local measurements let two non-communicating parties, sharing a state that depends on a uniformly random $m \in \bits^n$, both output $m$ with probability more than $p$, then none let them both output $\langle r, m \rangle$, for a common uniformly random $r \in \bits^n$, with probability more than $\min\{1,\ 1/2 + 5\,p^{1/22}\}$, which gives the same implication for negligible $\delta$ — [[Ana26 - Non-Local Search-to-Decision Reduction over F2, and More|Ana26]] (arXiv v2, Theorem 3.1, Corollary 1.3). $\mathsf{UE}'$ is $(1-\varepsilon)$-[[unclonable-encryption#correctness|correct]] whenever $\mathsf{UE}$ is — standard.

## Sketch

The theorem of [[CLX26b - Unclonable encryption from BB84 states a simultaneous Goldreich-Levin reduction|CLX26b]] bounds the common-mask prediction game, in which $\calA$ splits $\Enc(k, m)$ for a uniformly random $m$ and then $\calB$ and $\calC$, each given $(k, r)$, must both output $\langle r, m \rangle$: its optimal winning probability $p$ satisfies $(2p - 1)^4 \le \delta$. An adversary against $\mathsf{UE}'$ that chooses $(m_0, m_1) = (0, 1)$ receives $(\Enc(k, m), c)$ with $c = b \oplus \langle r, m \rangle$ uniform and independent of $(k, r, m)$, and wins exactly when $\calB$ and $\calC$ both output $c \oplus \langle r, m \rangle$; a prediction adversary that samples $c$ itself and has both parties output their guess for $b$ XORed with $c$ wins with the same probability. The choice $(1, 0)$ reduces to $(0, 1)$ by complementing both outputs, for $m_0 = m_1$ the challenge bit is independent of the adversary's view, so the winning probability is at most $1/2 \le p$, and an adversary whose first stage is randomized is a mixture of these cases — standard.

## Notes

- With the conjugate-coding states of [[Wie83 - Conjugate Coding|Wie83]], $\Enc(\theta, m) = H^{\theta}|m\rangle$ for a uniformly random basis string $\theta \in \bits^n$, $\delta = \cos^{2n}(\pi/8)$, and every cloning adversary wins the unclonable-indistinguishability game against the one-bit scheme with key $(\theta, r)$ and ciphertext $(H^{\theta}|m\rangle,\ b \oplus \langle r, m \rangle)$ with probability at most $1/2 + \tfrac{1}{2}\cos^{n/2}(\pi/8)$ — [[CLX26b - Unclonable encryption from BB84 states a simultaneous Goldreich-Levin reduction|CLX26b]] (arXiv v2, Corollary 1.2).
- The extractor is explicit. Given a lower bound $0 < \gamma \le \Delta$ on the advantage $\Delta = 2p - 1$ of a prediction strategy, it runs in time polynomial in $1/\gamma$ and the running time of the strategy and wins the unclonable-security game with probability at least $\gamma^2 \Delta^2 / 2$; a variant that takes no bound runs in expected time linear in that of the strategy and wins with probability at least $\tfrac{3}{16}\Delta^6$ — [[CLX26b - Unclonable encryption from BB84 states a simultaneous Goldreich-Levin reduction|CLX26b]] (arXiv v2, Theorems 8.2 and 8.3).
