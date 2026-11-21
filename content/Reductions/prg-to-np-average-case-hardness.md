---
type: reduction
status: draft
title: "PRG ⇒ Average-case hardness of NP"
aliases: []
id: red-prg-to-np-average-case-hardness
kind: implication
hypotheses: [prg]
conclusion: np-average-case-hardness
class: free
model: standard
source: folklore
security-loss: "one call to the algorithm: error $\\delta$ under the sampler gives PRG advantage at least $1/2 - 2\\delta$"
rationale:
  class: "The NP language is the image of the generator, so its verifier runs the generator's code."
---

# PRG ⇒ Average-case hardness of NP

## Statement

If a [[pseudorandom-generator|PRG]] $G : \calS \to \calR$ with $|\calR| \ge 2|\calS|$ exists, $\classNP$ is [[nondeterministic-polynomial-time#average-case-hardness|hard on average over samplable distributions]]. Encode the elements of $\calR$ injectively, by padding, as strings of one length $\ell(\secpar)$ computable from $1^\secpar$ in polynomial time; for $\calS = \bits^\secpar$ and $\calR = \bits^{m(\secpar)}$, $\ell(\secpar) = m(\secpar) = |G(0^\secpar)|$. An instance $1^\secpar 0 r$ with $r \in \bits^{\ell(\secpar)}$ has length $n_\secpar = \secpar + 1 + \ell(\secpar)$, and $L = \{1^\secpar 0 r : \secpar \ge 1,\ r \in \bits^{\ell(\secpar)},\ \exists s \in \calS,\ G(s) = r\}$ is in $\classNP$. At a length $n$ equal to $n_\secpar$ for some $\secpar$, $D_n$ takes the largest such $\secpar$, which it finds from $n$ in polynomial time, and outputs $1^\secpar 0 G(s)$ for $s \getsr \calS$ or $1^\secpar 0 r$ for $r \getsr \calR$, each with probability $1/2$; at every other length it outputs $0^n$, which is not in $L$. Since $n_\secpar > \secpar$, infinitely many lengths are of the first kind, each with its own $\secpar$, and at each every efficient algorithm errs with probability at least $1/4 - \negl(\secpar)$, which is at least $1/5$ once $\secpar$ is large, so the definition holds with $p = 5$ — folklore.

## Sketch

Fix a length $n$ of the first kind, with parameter $\secpar$, and let $\calA$ err with probability $e_0$ on $1^\secpar 0 G(s)$ and $e_1$ on $1^\secpar 0 r$ for uniform $r$, so its error under $D_n$ is $\delta = (e_0 + e_1)/2$. Since $|\calR| \ge 2|\calS|$, a uniform $r$ lies in the image of $G$ with probability at most $1/2$, so $\Pr[\calA(1^\secpar 0 r) = 1] \le 1/2 + e_1$, while $\Pr[\calA(1^\secpar 0 G(s)) = 1] = 1 - e_0$. The distinguisher $\calB(1^\secpar, r)$ that outputs $b' = 0$ exactly when $\calA$ accepts $1^\secpar 0 r$ therefore has $\Adv^{\mathrm{prg}}_{G,\calB}(\secpar) \ge 1/2 - 2\delta$, so $\delta \ge 1/4 - \Adv^{\mathrm{prg}}_{G,\calB}(\secpar)/2$.

## Notes

- With [[owf-to-prg-hill99|OWF ⇒ PRG]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], one-way functions make $\classNP$ hard on average over a samplable distribution, so neither Algorithmica nor Heuristica, Impagliazzo's worlds in which $\classNP$ is easy on average over samplable distributions, has one-way functions — [[Imp95 - A personal view of average-case complexity|Imp95]].
