---
type: reduction
status: draft
title: "ROM ⇒ PRF (secret-prefix hashing)"
aliases: []
id: red-rom-to-prf
kind: implication
hypotheses: [rom]
conclusion: prf
class: free
model: rom
source: folklore
via:
  - "[[difference-lemma|fundamental lemma of game playing]]"
security-loss: 'distinguishing advantage at most $q_H / 2^\secpar$ for $q_H$ random-oracle queries, whatever the number of PRF queries'
rationale:
  class: "The bound holds for every adversary in the random-oracle model, computationally unbounded and limited only in its oracle queries, which is the free class scoped by the model."
  security-loss: "The two worlds differ only on a random-oracle query that begins with the key, and in the random world the key is independent of everything the adversary sees."
---

# ROM ⇒ PRF (secret-prefix hashing)

## Statement

In the [[random-oracle-model|random oracle model]] with oracle $H : \bits^* \to \bits^\secpar$, let $n(\secpar) = \omega(\log \secpar)$ be polynomially bounded and let $\calD_\secpar$ be $\bits^{n(\secpar)}$ or $\bits^{\le n(\secpar)}$. Let $\PRF = (\KeyGen, \Eval)$ have key space and range $\bits^\secpar$ and domain $\calD$, with $\KeyGen(1^\secpar)$ outputting $k \getsr \bits^\secpar$ and $\Eval^H(k, x) := H(k \,\|\, x)$. In the [[pseudorandom-function|PRF]] game $\Game^{\mathrm{prf}}_{\PRF,\calA}$ relative to $H$, the adversary $\calA$ queries $H$ as well as $\calO_b$, where $\calO_0(x) := H(k \,\|\, x)$ and $\calO_1 := R$ for $R \getsr \Funcs(\calD_\secpar, \bits^\secpar)$ sampled independently of $H$. Every $\calA$ making at most $q_H$ queries to $H$, computationally unbounded and with any number of queries to $\calO_b$, has

$$
\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) \le \frac{q_H}{2^\secpar},
$$

so $\PRF$ is a PRF against every adversary making $\poly(\secpar)$ queries to $H$ — folklore.

## Sketch

Answer $H$ and $\calO_b$ from lazily sampled tables and call a query $z$ to $H$ bad if $z = k \,\|\, x$ for some $x \in \calD_\secpar$. In world 0 the entries $H(k \,\|\, x)$ are read only through $\calO_0$ until a bad query, and they are uniform and independent of the rest of $H$, so the two worlds are identical until a bad query and the [[difference-lemma#fundamental-lemma-of-game-playing|fundamental lemma of game playing]] bounds the advantage by the probability of a bad query in world 1. There $k$ is independent of everything $\calA$ sees, so each of its at most $q_H$ queries begins with $k$ with probability at most $2^{-\secpar}$ — folklore.

## Notes

- The bound is tight up to a factor $1 - q_H/2^\secpar$: the adversary that queries $\calO_b(x)$ at one point $x$ and $H(k' \,\|\, x)$ for $q_H \le 2^\secpar$ distinct guesses $k'$, and outputs $0$ when some answer of $H$ equals that of $\calO_b$, has advantage $(q_H/2^\secpar)(1 - p) \ge (q_H/2^\secpar)(1 - q_H/2^\secpar)$, where $p \le q_H/2^\secpar$ is the probability that one of $q_H$ independent uniform values in $\bits^\secpar$ hits a given one — folklore.
- With $H$ replaced by a [[hash-function#merkledamgård-iteration|Merkle–Damgård hash function]] and the domain $\bits^{\le n(\secpar)}$, for $n(\secpar)$ at least the length of $\mathrm{pad}(k)$, the construction is not a PRF, and as a MAC it is forgeable: $\mathrm{pad}(k \,\|\, x)$ depends on $k$ only through $|k| = \secpar$, and by length extension $\Eval(k, x \,\|\, \mathrm{pad}(k \,\|\, x) \,\|\, z)$ is computed from the public hash key, $\Eval(k, x)$, $|x|$ and $z$, without $k$, for every $x$ and $z$ that keep the extended input in the domain ([[no-crhf-to-mac-secret-prefix|No fixed-construction reduction from CRHF to MAC (secret-prefix MAC)]]) — standard. Tsudik observed that $\mathrm{MD5}(a \,\|\, x)$ cannot be used as a MAC of $x$ under key $a$ — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]] (Section 6).
