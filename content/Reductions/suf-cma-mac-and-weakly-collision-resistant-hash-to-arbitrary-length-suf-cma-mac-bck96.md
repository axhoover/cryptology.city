---
type: reduction
status: draft
title: "SUF-CMA MAC + weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)"
aliases: []
id: red-suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96
kind: implication
hypotheses: [suf-cma-mac, weakly-collision-resistant-hash]
conclusion: arbitrary-length-suf-cma-mac
class: fully-black-box
model: standard
source:
  - "[[BCK96 - Keying Hash Functions for Message Authentication|BCK96]]"
security-loss: "additive: forging advantage at most ε_f + ε_F, where the forger against the outer MAC makes as many queries as the NMAC forger and the collision finder one more"
rationale:
  class: "The construction calls the outer MAC and the inner family only as oracles, and each of the two reductions runs the forger once as an oracle and samples the other component's key itself."
---

# SUF-CMA MAC + weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)

## Statement

Let $f : \bits^c \times \bits^b \to \bits^c$ with $c \le b$, and for $k \in \bits^c$ and $x \in \bits^*$ let $F_k(x) := y_\ell$, with $y_0 := k$ and $y_i := f(y_{i-1}, x_i)$, where $x \,\|\, \mathrm{pad}(x) = x_1 \cdots x_\ell$ with each $x_i \in \bits^b$ and $\mathrm{pad}(x) := 0^r \,\|\, \langle |x| \bmod 2^b \rangle_b$, with $r \ge 0$ least such that $b$ divides $|x| + r$, is the padding of [[hash-function#merkledamgård-iteration|Merkle–Damgård iteration]]: $F_k$ is the iteration of $f$ keyed by its initial chaining value. NMAC has two independent keys $k_1, k_2 \getsr \bits^c$, message space $\bits^*$, canonical verification, and

$$
\mathrm{NMAC}_{k_1,k_2}(x) := f\big(k_1, F_{k_2}(x) \,\|\, \mathrm{pad}_0\big)
$$

for a fixed string $\mathrm{pad}_0$ of $b - c$ bits. Suppose that $f$, keyed by its chaining input under a uniform key, is an $(\varepsilon_f, q, t, b)$-secure MAC on $b$-bit messages: no forger that makes $q$ queries and runs in time $t$ succeeds with probability more than $\varepsilon_f$. Suppose that $F$ is $(\varepsilon_F, q, t, L)$-[[hash-function#weak-collision-resistance|weakly collision resistant]]: no adversary that sees $F_k$, for a hidden uniform $k$, only through $q$ oracle queries of at most $L$ bits and runs in time $t$ outputs $x \ne x'$ with $F_k(x) = F_k(x')$ with probability more than $\varepsilon_F$. Then NMAC is an $(\varepsilon_f + \varepsilon_F, q, t, L)$-secure MAC against forgers making $q$ queries of at most $L$ bits in time $t$, which includes the time to compute the answers — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Theorem 4.1).

The outer and inner functions need not come from one compression function — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Remark 4.6). Let $\MAC = (\KeyGen, \Tag, \Vrfy)$ be a $(1-\varepsilon)$-correct [[message-authentication-code#strong-unforgeability|SUF-CMA-secure]] [[message-authentication-code|MAC]], let $\hash : \calK \times \bits^* \to \bits^m$ be a weakly collision-resistant family with key generation $\KeyGen_\hash$, and let $e$ be an injective, efficiently computable map from $\bits^{m(\secpar)}$ into the message space of $\MAC$. The MAC $\MAC^\hash$ has keys $k_1 \gets \KeyGen(1^\secpar)$ and $k_2 \gets \KeyGen_\hash(1^\secpar)$, message space $\bits^*$, and

$$
\Tag'((k_1, k_2), x) := \Tag\big(k_1, e(\hash(k_2, x))\big), \qquad \Vrfy'((k_1, k_2), x, t) := \Vrfy\big(k_1, e(\hash(k_2, x)), t\big).
$$

It is $(1-\varepsilon)$-correct for every $x \in \bits^*$, and for every $\calA$ making $q$ queries there are $\calB$, which makes $q$ queries and runs $\calA$ once plus $q + 1$ evaluations of $\hash$, and $\calC$, which makes $q + 1$ queries (those of $\calA$ and its forged message) and runs $\calA$ once plus $q$ evaluations of $\Tag$, such that

$$
\Adv^{\sufcma}_{\MAC^\hash,\calA}(\secpar) \le \Adv^{\sufcma}_{\MAC,\calB}(\secpar) + \Adv^{\mathrm{wcr}}_{\hash,\calC}(\secpar)
$$

— standard, following the proof of Theorem 4.1 in [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]]. So, for negligible $\varepsilon$, $\MAC^\hash$ is an [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|arbitrary-length SUF-CMA MAC]]. NMAC is the case $\Tag(k_1, \cdot) := f(k_1, \cdot)$ with canonical verification, $\hash := F$ and $e(y) := y \,\|\, \mathrm{pad}_0$. Both $f(k_1, \cdot)$ and NMAC are deterministic with canonical verification, so for each of them UF-CMA and SUF-CMA security coincide ([[message-authentication-code#deterministic-macs|Deterministic MACs]]), and if $f$, keyed by its chaining input, is a UF-CMA-secure MAC on $\bits^b$ and $F$ is weakly collision resistant, NMAC is a perfectly correct arbitrary-length SUF-CMA MAC — standard.

## Sketch

$\calB$ samples $k_2$, answers each query $x_i$ of $\calA$ by querying its own oracle on $e(\hash(k_2, x_i))$, and outputs $(e(\hash(k_2, \hat x)), \hat t)$ for $\calA$'s output $(\hat x, \hat t)$; $\calC$ samples $k_1$, answers $x_i$ with $\Tag(k_1, e(\cdot))$ applied to its oracle's answer, then queries $\hat x$ and outputs $(\hat x, x_i)$ for an $x_i \ne \hat x$ with $\hash(k_2, x_i) = \hash(k_2, \hat x)$, if there is one. If $(\hat x, \hat t)$ is valid and is no query–answer pair of $\calA$, then either such an $x_i$ exists, or, since $e$ is injective, $(e(\hash(k_2, \hat x)), \hat t)$ is valid and is no query–answer pair of $\calB$ — standard; for UF-CMA, [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (proof of Theorem 4.1).

## Notes

- The collision finder queries $\hat x$ to learn $\hash(k_2, \hat x)$ and so name the colliding pair, which makes $q + 1$ queries — standard; the proof of Theorem 4.1 in [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] bounds it by the forger's $q$.
- The bound $\varepsilon_f + \varepsilon_F$ cannot be replaced by $\varepsilon_f \cdot \varepsilon_F$: a divide-and-conquer attack recovers the two keys one at a time, so the security of NMAC rests on the length of each key rather than of both — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Section 6, Remark 4.7). A birthday attack, which looks for a tag collision among equal-length messages and extends it, forges NMAC with significant probability only after about $2^{c/2}$ tag queries — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Section 6).
- Without the outer application of $f$, the iteration $F_{k_2}$ is forged by length extension, whatever $f$ ([[no-crhf-to-mac-secret-prefix|No fixed-construction reduction from CRHF to MAC (secret-prefix MAC)]]) — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Remark 4.9).
- Weak collision resistance of $F$ can be replaced by the weaker assumption that $F$ is collision resistant against adversaries that see its values only after a second hashing under a different secret key — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Remark 4.5). Weak collision resistance fails for MD5 and SHA-1 as iterated hash functions keyed by their initial value — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]]. NMAC is a PRF, hence a MAC, if $f$ is a PRF, with no collision-resistance assumption ([[prf-to-mac-bel06|Non-uniform compression-function PRF ⇒ MAC (NMAC)]], [[prf-to-mac-gpr14|Compression-function PRF ⇒ MAC (NMAC, uniform proof)]]) — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]], [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
- HMAC is NMAC under the keys $k_1 = f(\mathrm{IV}, \bar k \oplus \mathrm{opad})$ and $k_2 = f(\mathrm{IV}, \bar k \oplus \mathrm{ipad})$ derived from one key $\bar k$, so the theorem covers it if in addition $(k_1, k_2)$ is indistinguishable from a pair of independent uniform keys — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Section 5.2).
- A compressing weakly collision-resistant family $h(k, \cdot) : \bits^{b+m} \to \bits^m$ yields one on $\bits^*$ by the steps of [[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]]: restriction to $\bits^{m+1}$, the fixed-length iteration over $\secpar$ one-bit blocks, which raises the block length to $\secpar$, and [[hash-function#merkledamgård-iteration|Merkle–Damgård iteration]]. In each step a collision finder for $h(k, \cdot)$ runs an adversary against the new family, answers its queries by chained calls to its own oracle, and evaluates both outputs by further such calls, returning the inputs at the last step at which the two computations differ in their input; for Merkle–Damgård iteration this needs both outputs shorter than $2^\secpar$, which holds for efficient adversaries and all large $\secpar$ — standard.
