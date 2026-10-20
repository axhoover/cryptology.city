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

If a [[pseudorandom-generator|PRG]] $G : \calS \to \calR$ with $|\calR| \ge 2|\calS|$ exists, as for seeds and outputs that are bit strings, $\classNP$ is [[nondeterministic-polynomial-time#average-case-hardness|hard on average over samplable distributions]]: the language $L = \{(1^\secpar, r) : \exists s \in \calS,\ G(s) = r\}$ is in $\classNP$, and under the sampler $D(1^\secpar)$ that outputs $(1^\secpar, G(s))$ for $s \getsr \calS$ or $(1^\secpar, r)$ for $r \getsr \calR$, each with probability $1/2$, every efficient algorithm errs with probability at least $1/4 - \negl(\secpar)$, so the definition holds with $p = 5$ — folklore.

## Sketch

Let $\calA$ err with probability $e_0$ on $G(s)$ and $e_1$ on uniform $r$, so its error under $D$ is $\delta = (e_0 + e_1)/2$. Since $|\calR| \ge 2|\calS|$, a uniform $r$ lies in $L$ with probability at most $1/2$, so $\Pr[\calA(1^\secpar, r) = 1] \le 1/2 + e_1$, while $\Pr[\calA(1^\secpar, G(s)) = 1] = 1 - e_0$. The distinguisher $\calB$ that outputs $b' = 0$ exactly when $\calA$ accepts therefore has $\Adv^{\mathrm{prg}}_{G,\calB}(\secpar) \ge 1/2 - 2\delta$, so $\delta \ge 1/4 - \Adv^{\mathrm{prg}}_{G,\calB}(\secpar)/2$.

## Notes

- With [[owf-to-prg-hill99|OWF ⇒ PRG]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], one-way functions make $\classNP$ hard on average over a samplable distribution, so neither Algorithmica nor Heuristica, Impagliazzo's worlds in which $\classNP$ is easy on average over samplable distributions, has one-way functions — [[Imp95 - A personal view of average-case complexity|Imp95]].
