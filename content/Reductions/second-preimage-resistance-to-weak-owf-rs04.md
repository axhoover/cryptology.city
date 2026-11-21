---
type: reduction
status: draft
title: "Second-preimage resistance ⇒ Weak OWF"
aliases: []
id: red-second-preimage-resistance-to-weak-owf-rs04
kind: implication
hypotheses: [second-preimage-resistance]
conclusion: weak-owf
class: fully-black-box
model: standard
source:
  - "[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]"
security-loss: "factor 2 plus additive |R|/|D|: an inverter with success ε gives a second-preimage finder with success at least (ε − |R|/|D|)/2"
rationale:
  class: "The weak one-way function is the hash family itself, and the second-preimage finder runs any inverter once as an oracle on the image of its challenge."
---

# Second-preimage resistance ⇒ Weak OWF

## Statement

Let $\hash : \calK \times \bits^n \to \bits^m$ with $m < n$ be [[hash-function#second-preimage-resistance|second-preimage resistant]]. For every inverter $\calB$, the second-preimage finder $\calA(1^\secpar, k, x)$ that runs $\calB(1^\secpar, k, \hash(k, x))$ and returns its output satisfies

$$
\Adv^{\mathrm{pr}}_{\hash,\calB}(\secpar) \le 2 \cdot \Adv^{\mathrm{spr}}_{\hash,\calA}(\secpar) + 2^{m-n}
$$

— [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] (Theorem 7(1), Sec → Pre, with the proof in Appendix B.1). Since $2^{m-n} \le 1/2$, every efficient inverter succeeds with probability at most $1/2 + \negl(\secpar)$, so $\hash$ is [[hash-function#weak-one-wayness|weakly one-way]]. If $n - m = \omega(\log \secpar)$, the same bound makes $\hash$ [[hash-function#preimage-resistance-one-wayness|one-way]]. For a family on other finite sets read through the binary encodings of the CRHF definition, the same proof gives the additive term $|\calR|/|\calD| \le 1/2$.

## Sketch

At most $|\calR|$ inputs have no second preimage under $\hash(k, \cdot)$, so the challenge $x$ has one except with probability $|\calR|/|\calD|$. If its image has $s \ge 2$ preimages, $\calB$'s view depends on $x$ only through $\hash(k, x)$, so a successful answer equals $x$ with probability $1/s \le 1/2$ and is a second preimage with probability $1 - 1/s \ge 1/2$ — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].

## Notes

- One bit of compression does not make $\hash$ one-way. For a second-preimage-resistant $\hash'_k : \bits^n \to \bits^{n-2}$, let $\hash_k(00u) := 0u$ for $u \in \bits^{n-2}$ and $\hash_k(x) := 1 \,\|\, \hash'_k(x)$ otherwise. Inputs beginning with $00$ have no second preimage under $\hash_k$, and a second preimage of any other input is one under $\hash'_k$, so every second-preimage finder against $\hash_k$ yields one against $\hash'_k$ with at least its advantage; yet $\hash_k$ is inverted on every input beginning with $00$, a quarter of them — standard.
- The additive term depends on the compression in an essential way: for $n \ge m \ge 1$ there is an unkeyed function $\bits^n \to \bits^m$ whose second-preimage advantage is at most $1 - 2^{m-n-1}$ against every adversary and which is inverted with probability $1$ in linear time — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] (Proposition 9(1)).
- With [[crhf-to-second-preimage-resistance-rs04|CRHF ⇒ Second-preimage resistance]], this gives collision resistance ⇒ weak one-wayness with the same bound, which [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]] state as Theorem 7(4); the direct argument ([[crhf-to-weak-owf|CRHF ⇒ Weak OWF]]) has additive loss $2^{m-n}$ and no factor $2$ — folklore. A target-collision-resistant family is weakly one-way by way of [[uowhf-to-second-preimage-resistance-rs04|UOWHF ⇒ Second-preimage resistance]] (Theorem 7(3)).
