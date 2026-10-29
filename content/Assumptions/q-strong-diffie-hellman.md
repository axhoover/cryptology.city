---
type: assumption
status: draft
aliases:
  - q-SDH
  - $q$-Strong Diffie-Hellman assumption
title: $q$-Strong Diffie-Hellman assumption
id: q-strong-diffie-hellman
unlisted: true
variants:
  asymmetric-q-sdh: "#asymmetric-q-sdh"
---

# $q$-Strong Diffie-Hellman assumption

Given the power sequence $(g, g^\tau, g^{\tau^2}, \ldots, g^{\tau^q})$ in a bilinear group with secret $\tau$, no efficient adversary can output a pair $(c, g^{1/(\tau + c)})$ with $c \in \ZZ_p \setminus \{-\tau\}$.

## Assumption

The assumption concerns a bilinear group generator $\GrGen$, which on input $1^\secpar$ outputs $(\GG, \GG_T, p, g, e)$: cyclic groups $\GG$ and $\GG_T$ of prime order $p$, a generator $g$ of $\GG$, and an efficiently computable non-degenerate [[pairings|bilinear pairing]] $e : \GG \times \GG \to \GG_T$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{q\text{-sdh}}_{\GrGen,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\GG, \GG_T, p, g, e) \gets \GrGen(1^\secpar)$
\State $\tau \getsr \ZZ_p^{*}$
\State $(c, h) \gets \calA(1^\secpar, \GG, \GG_T, p, g, e, g^{\tau}, g^{\tau^{2}}, \ldots, g^{\tau^{q}})$
\Return $[c \in \ZZ_p \setminus \{-\tau\} \wedge h = g^{1/(\tau + c)}]$
\end{algorithmic}
\end{algorithm}
```

**$q$-SDH is hard** for $\GrGen$ if for every polynomial $q = q(\secpar)$ and all efficient $\calA$,

$$
\Adv^{q\text{-sdh}}_{\GrGen,\calA}(\secpar) := \Pr\!\left[\Game^{q\text{-sdh}}_{\GrGen,\calA}(\secpar) = 1\right]
$$

is negligible.

The assumption is from [[BB04a - Short Signatures Without Random Oracles|BB04a]], stated there for a pairing $e : \GG_1 \times \GG_2 \to \GG_T$ between two source groups; the form above, with $\GG_1 = \GG_2$, is the one [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]] use. An instance for $q$ yields one for every $q' \le q$ by dropping powers, so hardness for a larger $q$ is the stronger assumption — folklore.

# Variations

## Asymmetric q-SDH

For a bilinear group generator $\GrGen$ that outputs $(\GG_1, \GG_2, \GG_T, p, e, g_1, g_2)$, with a pairing $e : \GG_1 \times \GG_2 \to \GG_T$ and generators $g_1, g_2$ of the source groups: given $(g_1, g_1^{\tau}, \ldots, g_1^{\tau^q}, g_2, g_2^{\tau})$ for $\tau \getsr \ZZ_p^*$, output $(c, g_1^{1/(\tau + c)})$ with $c \in \ZZ_p \setminus \{-\tau\}$ — [[BB08 - Short Signatures Without Random Oracles and the SDH Assumption in Bilinear Groups|BB08]]. **Asymmetric $q$-SDH is hard** for $\GrGen$ if for every polynomial $q = q(\secpar)$, every efficient adversary succeeds with negligible probability. This form needs no isomorphism between the source groups. [[BB04a - Short Signatures Without Random Oracles|BB04a]] instead give the powers of $\tau$ in $\GG_2$, as $(g_1, g_2, g_2^{\tau}, \ldots, g_2^{\tau^q})$, with an efficiently computable isomorphism $\psi : \GG_2 \to \GG_1$.

# Attacks

- Given $g$, $g^{\tau}$ and $g^{\tau^d}$ for a positive divisor $d$ of $p - 1$, $\tau$ can be computed with $O((\sqrt{p/d} + \sqrt{d}) \log p)$ group operations and $O(\max\{\sqrt{p/d}, \sqrt{d}\})$ memory — [[Che06 - Security Analysis of the Strong Diffie-Hellman Problem|Che06]]. A $q$-SDH instance with $q \ge d$ contains $g^{\tau^d}$, so when $p - 1$ has a divisor $d \approx p^{1/3}$, $q$-SDH with $q \ge d$ falls with about $p^{1/3}$ group operations, up to the logarithmic factor, instead of $\sqrt{p}$ — [[Che06 - Security Analysis of the Strong Diffie-Hellman Problem|Che06]]. For $q \approx p^{1/3}$ this meets the generic lower bound of $\Omega(\sqrt{p/q})$ group operations ([[generic-bilinear-group-model-to-asymmetric-q-sdh-bb08|Generic bilinear group model ⇒ asymmetric q-SDH]]) — [[BB08 - Short Signatures Without Random Oracles and the SDH Assumption in Bilinear Groups|BB08]].

<!-- BEGIN GENERATED participates-in c8afe8321352 -->

## Participates in

**Builds on $q$-Strong Diffie-Hellman assumption**

- [[bilinear-pairing-and-q-sdh-to-ds-bb04a|Bilinear pairing + q-SDH ⇒ DS (Boneh–Boyen)]]
- [[bilinear-pairing-and-q-sdh-to-pcs-kzg10|Bilinear pairing + q-SDH ⇒ PCS]]

**Produces $q$-Strong Diffie-Hellman assumption**

- [[generic-bilinear-group-model-to-asymmetric-q-sdh-bb08|Generic bilinear group model ⇒ asymmetric q-SDH]] (via [[q-strong-diffie-hellman#asymmetric-q-sdh|Asymmetric q-SDH]])

<!-- END GENERATED participates-in -->
