---
type: barrier
status: draft
title: "No fixed-construction reduction from CRHF to MAC (secret-prefix MAC)"
aliases:
  - Length-extension attack
id: bar-crhf-to-mac-secret-prefix
hypotheses: [crhf]
conclusion: mac
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [crhf]
source: folklore
rationale:
  strength: "The forgery works for every compression function, so the barrier assumes a CRHF only because, without one, the implication for this construction holds vacuously."
  class: "The forgery refutes only the secret-prefix MAC over Merkle–Damgård iteration; other constructions of a MAC from a CRHF are not ruled out."
---

# No fixed-construction reduction from CRHF to MAC (secret-prefix MAC)

## Statement

Let $h : \calK \times \bits^{b+m} \to \bits^m$, with $b = b(\secpar) \ge 1$, be any keyed compressing family, such as a [[hash-function#collision-resistance|CRHF]], and let $\hash$ be its [[hash-function#merkledamgård-iteration|Merkle–Damgård iteration]], with initial value $0^m$, chaining $y_i := h(k_h, x_i \,\|\, y_{i-1})$ and padding $\mathrm{pad}(x) := 0^r \,\|\, \langle |x| \bmod 2^b \rangle_b$, with $r \ge 0$ least such that $b$ divides $|x| + r$. For a polynomial $\kappa = \kappa(\secpar)$, the secret-prefix MAC has message space $\bits^*$, key $(k_h, K)$, where $k_h$ is sampled by the key generation of $h$ and $K \getsr \bits^\kappa$,

$$
\Tag((k_h, K), x) := \big(k_h,\ \hash(k_h, K \,\|\, x)\big),
$$

and canonical verification. The hash key is public, so each tag carries it; for an unkeyed compression function the tag is $\hash(K \,\|\, x)$. The scheme is perfectly correct and, for every $h$, not [[message-authentication-code#unforgeability|UF-CMA-secure]]: the forger that queries one message $x$ computed from $1^\secpar$, receives $(k_h, t)$, sets $x' := x \,\|\, \mathrm{pad}(0^\kappa \,\|\, x)$ and outputs

$$
\Big(x',\ \big(k_h,\ h(k_h, \langle (\kappa + |x'|) \bmod 2^b \rangle_b \,\|\, t)\big)\Big)
$$

wins with probability $1$, after one query and one evaluation of $h$ — folklore. The same holds on every message space containing such a pair $x$ and $x'$. In particular, if a CRHF exists, the secret-prefix MAC over its Merkle–Damgård iteration is not a [[message-authentication-code|MAC]], so this construction is no reduction from a CRHF to a MAC.

## Sketch

$\mathrm{pad}(K \,\|\, x)$ depends on $K$ only through $|K| = \kappa$, so $K \,\|\, x'$ is the padded form of $K \,\|\, x$, whose chain ends at $t$. Its length $\kappa + |x'|$ is a multiple of $b$, so $\mathrm{pad}(K \,\|\, x')$ is the single block $\langle (\kappa + |x'|) \bmod 2^b \rangle_b$, and one more call to $h$ gives $\hash(k_h, K \,\|\, x')$; $x' \ne x$ since $|x'| > |x|$ — standard. More generally, $k_h$, $t$, $\kappa + |x|$ and $z$ determine the tag of $x \,\|\, \mathrm{pad}(0^\kappa \,\|\, x) \,\|\, z$ for every $z \in \bits^*$, by the [[hash-function#merkledamgård-iteration|length-extension property]] of the iteration.

## Notes

- Tsudik observed that $\mathrm{MD5}(a \,\|\, x)$ cannot be used as a MAC of $x$ under key $a$ — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]] (Section 6). The extension attack on the prepend-only construction, which needs no knowledge of or attack on the key, is in [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Section 6).
- The same forgery breaks the iteration $F_k$ of a compression function $f$ keyed by a secret initial value $k$ in place of a fixed one, whatever $f$: from $F_k(x)$ it computes $F_k(x \,\|\, \mathrm{pad}(x) \,\|\, z)$. So $F$ is not a MAC even when $f$, keyed by its chaining input, is one — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Remark 4.9).
- The secret-suffix MAC $\Tag((k_h, K), x) := (k_h, \hash(k_h, x \,\|\, K))$ falls to any collision $(x_0, x_1)$ of $\hash(k_h, \cdot)$ with $|x_0| = |x_1|$: for $X_j := x_j \,\|\, \mathrm{pad}(x_j)$, the chains of $X_0 \,\|\, K$ and $X_1 \,\|\, K$ both pass through $\hash(k_h, x_0) = \hash(k_h, x_1)$ after $|X_0|/b$ blocks and then process the same blocks, so $X_0$ and $X_1$ have equal tags under every $K$, and the forger that knows the collision queries $X_0$ and outputs $X_1$ with that tag — standard; [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Section 6) describe this attack on the append-only construction. Unlike length extension, the forgery needs a collision. An equal-length collision of $\hash(k_h, \cdot)$ yields one of $h(k_h, \cdot)$ at the last step at which the two chains differ in their input, so for a CRHF $h$ every efficient algorithm finds one with negligible probability, while on $\bits^{m+1}$ the [[birthday-bound#Generic collision attack|generic birthday attack]] finds one with constant probability after about $2^{m/2}$ evaluations of $\hash(k_h, \cdot)$, without $K$ — standard.
- NMAC applies $f$ under a second secret key to the output of the inner iteration, which starts from a secret initial value, so its tags do not expose the inner chaining value, and an attack through collisions needs collisions of the inner function under its secret initial value rather than of the public hash function — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Section 6). HMAC is NMAC under two keys derived from one by $f$ ([[message-authentication-code#other-results|NMAC and HMAC]]), so the same holds for it — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Sections 5.2, 6). NMAC is a MAC if $f$, keyed by its chaining input, is one and the keyed iteration is weakly collision resistant ([[suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96|SUF-CMA MAC + weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)]]) — [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]] (Theorem 4.1), and a PRF if $f$ is a PRF ([[prf-to-mac-bel06|Non-uniform compression-function PRF ⇒ MAC (NMAC)]], [[prf-to-mac-gpr14|Compression-function PRF ⇒ MAC (NMAC, uniform proof)]]) — [[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]], [[GPR14 - The Exact PRF-Security of NMAC and HMAC|GPR14]].
- With $\hash$ replaced by a random oracle with $\secpar$-bit outputs and $K \getsr \bits^\secpar$, $\hash(K \,\|\, x)$ is a PRF on inputs of polynomially bounded length ([[rom-to-prf|ROM ⇒ PRF (secret-prefix hashing)]]) — folklore.
