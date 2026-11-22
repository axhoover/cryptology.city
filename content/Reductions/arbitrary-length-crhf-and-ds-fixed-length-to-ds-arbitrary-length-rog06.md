---
type: reduction
status: draft
title: "Arbitrary-length CRHF + fixed-length DS ⇒ DS for arbitrary-length messages (hash-then-sign)"
aliases:
  - Hash-then-sign
id: red-arbitrary-length-crhf-and-ds-fixed-length-to-ds-arbitrary-length-rog06
kind: implication
hypotheses: [arbitrary-length-crhf, ds-fixed-length]
conclusion: ds-arbitrary-length
class: fully-black-box
model: standard
source:
  - "[[Rog06 - Formalizing Human Ignorance|Rog06]]"
security-loss: "additive: the forging advantage is at most that of a forger against the fixed-length scheme making as many signing queries, plus that of a collision finder, each running in about the forger's time"
rationale:
  class: "Hash-then-sign calls the hash family and the fixed-length scheme only as oracles, and each of the two reductions runs any forger once as an oracle, sampling the other component's keys itself."
---

# Arbitrary-length CRHF + fixed-length DS ⇒ DS for arbitrary-length messages (hash-then-sign)

## Statement

Let $\hash$ be an [[hash-function#arbitrary-length-collision-resistance|arbitrary-length CRHF]] with key generation $\KeyGen_\hash$ and range $\bits^{m(\secpar)}$. Set $n(\secpar) := \max(m(\secpar), 1)$, computable from $1^\secpar$ in polynomial time as the length of the hash of the empty string under the key that $\KeyGen_\hash(1^\secpar)$ outputs on all-zero coins, and $\bar\hash(k, x) := \hash(k, x) \,\|\, 0^{n(\secpar) - m(\secpar)}$. Then $\bar\hash$ has exactly the collisions of $\hash$, and $\bar\hash = \hash$ for all but finitely many $\secpar$: the inputs $0$ and $1$ collide whenever $m(\secpar) = 0$, which collision resistance therefore allows for only finitely many $\secpar$. Let $\DS = (\KeyGen, \Sign, \Vrfy)$ be a [signature scheme for messages of length $n$](digital-signature#fixed-length-messages). The hash-then-sign scheme $\DS^\hash$ has message space $\bits^*$, keys $((\sk, k), (\vk, k))$ for $k \gets \KeyGen_\hash(1^\secpar)$ and $(\sk, \vk) \gets \KeyGen(1^\secpar)$, and

$$
\Sign^\hash((\sk, k), x) := \Sign\big(\sk, \bar\hash(k, x)\big), \qquad \Vrfy^\hash((\vk, k), x, \sigma) := \Vrfy\big(\vk, \bar\hash(k, x), \sigma\big).
$$

Both run in time polynomial in $\secpar$ and $|x|$, and $\DS^\hash$ is $(1-\varepsilon)$-correct for every $x \in \bits^*$ when $\DS$ is $(1-\varepsilon)$-correct, since $k$ is independent of $(\sk, \vk)$ — standard. For every forger $\calA$ against $\DS^\hash$ making at most $q$ signing queries there are a forger $\calB$ against $\DS$ making at most $q$ signing queries and a collision finder $\calC$ against $\hash$ such that

$$
\Adv^{\eufcma}_{\DS^\hash,\calA}(\secpar) \le \Adv^{\eufcma}_{\DS,\calB}(\secpar) + \Adv^{\mathrm{cr}}_{\hash,\calC}(\secpar),
$$

each running in the time of $\calA$ plus that of generating keys, hashing the queries and output of $\calA$ and computing at most $q + 1$ signatures, up to an additive term linear in the number of bits $\calA$ reads or writes plus $nq$ (times $\log q$ for $\calC$) — [[Rog06 - Formalizing Human Ignorance|Rog06]] (Theorem 6), stated for a scheme whose message space contains $\bits^n$ and a keyed $\hash : \calK \times \bits^* \to \bits^n$, here $\bar\hash$. So $\DS^\hash$ is a [[digital-signature#arbitrary-length-messages|signature scheme for arbitrary-length messages]].

## Sketch

$\calB$ samples $k$, answers each query $x_i$ of $\calA$ by querying its own oracle on $\bar\hash(k, x_i)$, and outputs $(\bar\hash(k, \hat x), \hat\sigma)$ for the output $(\hat x, \hat\sigma)$ of $\calA$; $\calC$, given $k$, samples $(\sk, \vk)$, answers with $\Sign^\hash$, and outputs $(x_i, \hat x)$ if $x_i \ne \hat x$ and $\hash(k, x_i) = \hash(k, \hat x)$ for some $i$. A valid forgery has $\hat x \ne x_i$ for every $i$, so either $\hat x$ collides with some $x_i$ under $\hash(k, \cdot)$, and $\calC$ outputs the collision, or $\bar\hash(k, \hat x)$ is a message $\calB$ never queried, on which $\hat\sigma$ verifies — [[Rog06 - Formalizing Human Ignorance|Rog06]] (proof of Theorem 2, whose argument Theorem 6 reuses little changed).

## Notes

- For an unkeyed $\hash : \bits^* \to \bits^n$, Rog06 give explicit $\calB$ and $\calC$, which use $\calA$, $\hash$ and the algorithms of $\DS$ only as oracles, such that the same inequality holds for every such $\hash$ and every $\calA$; the hash function then needs no key — [[Rog06 - Formalizing Human Ignorance|Rog06]] (Theorem 2). Rog06 trace hash-then-sign to Rabin's signatures and call its security folklore — [[Rog06 - Formalizing Human Ignorance|Rog06]] (Section 5).
- Rog06 define signature schemes to be perfectly correct, and the proof of Theorem 2 does not use correctness — [[Rog06 - Formalizing Human Ignorance|Rog06]] (Section 5); the bound therefore holds for the $(1-\negl(\secpar))$-correct schemes above.
- Hash-then-sign is forgeable whenever collisions of $\hash(k, \cdot)$ are easy to find: given $x \ne x'$ with $\hash(k, x) = \hash(k, x')$, a forger queries $x$ and outputs $x'$ with the signature it receives — standard.
