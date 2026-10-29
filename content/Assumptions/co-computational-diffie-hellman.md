---
type: assumption
status: draft
aliases:
  - co-CDH
  - co-Computational Diffie-Hellman
title: co-Computational Diffie-Hellman
id: co-cdh
unlisted: true
variants:
  co-cdh-star: "#without-an-isomorphism"
---

# co-Computational Diffie-Hellman

The CDH problem across the two source groups of a bilinear group pair with an efficiently computable isomorphism $\psi : \GG_2 \to \GG_1$: given $g_2, g_2^a \in \GG_2$ and $h \in \GG_1$, compute $h^a$. It is the assumption under which [[digital-signature#bls-signatures|BLS signatures]] are EUF-CMA secure in the random oracle model ([[co-cdh-to-ds|co-CDH ⇒ BLS signatures]]) — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].

## Assumption

The assumption concerns a generator $\GrGen$ that on input $1^\secpar$ outputs $(\GG_1, \GG_2, \GG_T, p, e, g_2, \psi)$: cyclic groups $\GG_1, \GG_2, \GG_T$ of prime order $p$, a generator $g_2$ of $\GG_2$, a non-degenerate [[pairings|bilinear pairing]] $e : \GG_1 \times \GG_2 \to \GG_T$, and an efficiently computable isomorphism $\psi : \GG_2 \to \GG_1$, so that the pairing is of [[pairings#type-1|Type 1]] or Type 2 — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{co-cdh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG_1, \GG_2, \GG_T, p, e, g_2, \psi) \gets \GrGen(1^\secpar)$
\State $a \getsr \ZZ_p$; $h \getsr \GG_1$
\State $y \gets \calA(1^\secpar, \GG_1, \GG_2, \GG_T, p, e, g_2, \psi, g_2^a, h)$
\Return $[y = h^a]$
\end{algorithmic}
\end{algorithm}
```

**co-CDH is hard** for $\GrGen$ if for all efficient $\calA$,

$$
\Adv^{\text{co-cdh}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{\text{co-cdh}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

The pairing decides co-DDH, whether $(g_2, g_2^a, h, h^b)$ has $a = b$, by testing $e(h, g_2^a) = e(h^b, g_2)$; a pair in which co-CDH is hard is therefore a co-gap Diffie–Hellman group pair — [[BLS04 - Short Signatures from the Weil Pairing (Journal of Cryptology)|BLS04]].

# Variations

## Without an isomorphism

For a generator $\GrGen$ that outputs $(\GG_1, \GG_2, \GG_T, p, e, g_1, g_2)$, with generators $g_1, g_2$ of the source groups and no isomorphism, so that the pairing may be of [[pairings#type-3|Type 3]]: given $g_1^\alpha, g_1^\beta \in \GG_1$ and $g_2^\beta \in \GG_2$ for $\alpha, \beta \getsr \ZZ_p$, compute $g_1^{\alpha\beta}$ — [[BDN18 - Compact Multi-Signatures for Smaller Blockchains|BDN18]]. This form of co-CDH **is hard** for $\GrGen$ if every efficient adversary computes $g_1^{\alpha\beta}$ with negligible probability.

<!-- BEGIN GENERATED participates-in f4d7a9cfaf44 -->

## Participates in

**Builds on co-Computational Diffie-Hellman**

- [[co-cdh-star-to-multi-signature-bdn18|co-CDH ⇒ BLS multi-signatures with public-key aggregation]] (via [[co-computational-diffie-hellman#without-an-isomorphism|Without an isomorphism]])
- [[co-cdh-to-aggregate-signature-bgls03|co-CDH ⇒ Aggregate signatures (BGLS)]]
- [[co-cdh-to-co-cdh-star|co-CDH ⇒ co-CDH without an isomorphism]]
- [[co-cdh-to-ds|co-CDH ⇒ BLS signatures]]

**Produces co-Computational Diffie-Hellman**

- [[co-cdh-to-co-cdh-star|co-CDH ⇒ co-CDH without an isomorphism]] (via [[co-computational-diffie-hellman#without-an-isomorphism|Without an isomorphism]])

<!-- END GENERATED participates-in -->
