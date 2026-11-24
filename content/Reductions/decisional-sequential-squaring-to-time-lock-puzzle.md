---
type: reduction
status: draft
title: "Decisional sequential squaring ⇒ TLP"
aliases: []
id: red-decisional-sequential-squaring-to-time-lock-puzzle
kind: implication
hypotheses: [decisional-sequential-squaring]
conclusion: time-lock-puzzle
class: unstated
model: standard
source: folklore
security-loss: "a factor $\\secpar$, the solution length, and an additive $\\secpar \\cdot 2^{5-2\\secpar}$; the adversary's depth, and hence the gap, is preserved"
rationale:
  class: "The reduction fixes the puzzle's other positions as non-uniform advice, chosen by averaging, so that its depth equals the adversary's, and the vocabulary has no non-uniform class."
---

# Decisional sequential squaring ⇒ TLP

## Statement

If [[sequential-squaring#decisional-sequential-squaring|decisional sequential squaring]] holds for a modulus generator $\GrGen$ with gap $\varepsilon$, then the following puzzle $\mathsf{TLP} = (\Gen, \mathsf{Solve})$ is a [[time-lock-puzzle|time-lock puzzle]] with gap $\varepsilon$. $\Gen(1^\secpar, T, s)$ samples, for each bit $s_i$ of $s \in \bits^\secpar$, a modulus $(N_i, p_i, q_i) \gets \GrGen(1^\secpar)$ and $x_i \getsr \J_{N_i}$, computes $z_i = x_i^{2^T \bmod \phi(N_i)} \bmod N_i$, and sets $y_i = z_i$ if $s_i = 1$ and $y_i \getsr \J_{N_i} \setminus \{z_i\}$ if $s_i = 0$; the puzzle is $Z = (T, (N_i, x_i, y_i)_{i \in [\secpar]})$. $\mathsf{Solve}(Z)$ computes each $z_i = x_i^{2^T} \bmod N_i$ by $T$ squarings and outputs the bits $s_i = [y_i = z_i]$. For every polynomial $T$ and every polynomial-size $\calA$ there is a polynomial-size $\calB$, with $\calB_\secpar$ of depth at most that of $\calA_\secpar$, such that

$$
\Adv^{\mathrm{tlp}}_{\mathsf{TLP},\calA,T}(\secpar) \le \secpar \cdot \left(\Adv^{\mathrm{dssq}}_{\GrGen,T,\calB}(\secpar) + 2^{5-2\secpar}\right)
$$

— folklore.

## Sketch

$\Gen$ knows $\phi(N_i)$ and runs in time $\poly(\secpar, \log T)$, $\mathsf{Solve}$ performs $\secpar \cdot T$ modular squarings, and $y_i = z_i$ exactly when $s_i = 1$, so correctness is perfect. For $s_0, s_1 \in \bits^\secpar$, change the triples $(N_i, x_i, y_i)$ from those of a puzzle for $s_0$ to those of a puzzle for $s_1$ one position at a time: a step changes nothing or exchanges $y_i = z_i$, world 0 of $\Game^{\mathrm{dssq}}$, for $y_i \getsr \J_{N_i} \setminus \{z_i\}$, which is within statistical distance $1/|\J_{N_i}| = 2/\phi(N_i) \le 2^{5-2\secpar}$ of world 1, $y_i \getsr \J_{N_i}$. The triples are independent, so $\calB_\secpar(N, T, x, y)$ runs $\calA_\secpar$ on the puzzle with $(N, x, y)$ in the position of the largest step and with $s_0$, $s_1$ and the other triples fixed to values that maximize that step; fixing inputs of a circuit increases neither its depth nor its size.

## Notes

- $\Gen$ samples $\J_N$ by rejection from $\ZZ_N$, since Jacobi symbols are computable without the factorization of $N$. A sampler truncated to strict polynomial time that outputs a fixed element on failure ($1$ for $x_i$, $4 z_i \bmod N_i$ for $y_i$) keeps correctness perfect and adds a negligible statistical term to the bound — standard.
- The puzzle of [[RSW96 - Time-lock Puzzles and Timed-release Crypto|RSW96]] instead publishes $C_K = K + x^{2^T} \bmod N$ for a key $K$ ([[sequential-squaring-to-time-lock-puzzle-rsw96|Sequential squaring ⇒ TLP (RSW puzzle)]]). There $C_K - K$ is a square modulo $N$, so $C_K$ excludes every candidate key $K'$ for which $C_K - K'$ has Jacobi symbol $-1$, and the argument above does not apply to it — standard.
