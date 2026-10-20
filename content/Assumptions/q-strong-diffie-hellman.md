---
type: assumption
status: draft
aliases:
  - q-SDH
  - $q$-Strong Diffie-Hellman assumption
title: $q$-Strong Diffie-Hellman assumption
id: q-strong-diffie-hellman
unlisted: true
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

<!-- BEGIN GENERATED participates-in 5cb6cbcd02de -->

## Participates in

**Builds on $q$-Strong Diffie-Hellman assumption**

- [[bilinear-pairing-and-q-sdh-to-ds-bb04a|Bilinear pairing + q-SDH ⇒ DS (Boneh–Boyen)]]
- [[bilinear-pairing-and-q-sdh-to-pcs-kzg10|Bilinear pairing + q-SDH ⇒ PCS]]

<!-- END GENERATED participates-in -->
