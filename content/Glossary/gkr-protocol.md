---
type: glossary
status: draft
aliases:
  - GKR
  - GKR protocol
title: GKR protocol
id: gkr-protocol
---

# GKR protocol

The GKR protocol is a public-coin [[interactive-proof-systems|interactive proof]] for every language computable by a log-space-uniform Boolean circuit of depth $d$ on inputs of length $n$, with a prover running in time $\poly(n)$, a verifier running in time $n \cdot \poly(d, \log n)$ and space $O(\log n)$, and $\poly(d, \log n)$ communication — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]].

## Protocol

Let $C$ be a layered arithmetic circuit over a finite field $\FF$ with layers $0, \ldots, d$, layer $0$ the output and layer $d$ the input, and $S_i = 2^{s_i}$ gates in layer $i$, each gate of layer $i < d$ an addition or multiplication of two gates of layer $i + 1$. Write $V_i : \bits^{s_i} \to \FF$ for the gate values of layer $i$ on input $x$, $\tilde V_i$ for its multilinear extension, and $\widetilde{\mathrm{add}}_i, \widetilde{\mathrm{mult}}_i$ for the multilinear extensions of the wiring predicates, which on $(a, b, c)$ indicate that gate $a$ of layer $i$ adds, respectively multiplies, gates $b$ and $c$ of layer $i + 1$. Write $\beta_s(z, a) = \prod_{j=1}^{s}\left((1 - z_j)(1 - a_j) + z_j a_j\right)$ for the multilinear extension of the equality predicate on $\bits^s$. Then for every $i < d$ and $z \in \FF^{s_i}$

$$
\tilde V_i(z) = \sum_{a \in \bits^{s_i}} \sum_{b, c \in \bits^{s_{i+1}}} \beta_{s_i}(z, a) \left[\widetilde{\mathrm{add}}_i(a, b, c)\left(\tilde V_{i+1}(b) + \tilde V_{i+1}(c)\right) + \widetilde{\mathrm{mult}}_i(a, b, c)\, \tilde V_{i+1}(b)\, \tilde V_{i+1}(c)\right]
$$

— [[Tha13 - Time-Optimal Interactive Proofs for Circuit Evaluation|Tha13]]. The verifier starts from a claim about $\tilde V_0$ at a random point, determined by the claimed output. For each layer, the sum-check protocol — [[LFKN90 - Algebraic Methods for Interactive Proof Systems|LFKN90]] — reduces the claim about $\tilde V_i(z)$ to claims about $\tilde V_{i+1}$ at two random points $b^*, c^*$, which the verifier combines into one claim at a random point of the line through them, after the prover sends the restriction of $\tilde V_{i+1}$ to that line — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]]. After layer $d - 1$ the verifier checks the last claim against $\tilde V_d$, the multilinear extension of the input, which it evaluates itself — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]]. The verifier also needs low-degree extensions of the wiring predicates at single points; for log-space-uniform circuits it obtains them within its overall time bound, which is what the uniformity assumption buys — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]].

The summand is a polynomial of degree at most $2$ in each of its $s_i + 2 s_{i+1}$ variables — [[Tha13 - Time-Optimal Interactive Proofs for Circuit Evaluation|Tha13]], so by the [[schwartz-zippel-lemma|Schwartz–Zippel lemma]] a cheating prover survives each layer's sum-check with probability $O((s_i + s_{i+1})/|\FF|)$ and the line step with probability $O(s_{i+1}/|\FF|)$, for a total soundness error $O(d \log \max_i S_i / |\FF|)$ — standard.

# Other results

For log-space-uniform $\mathrm{NC}$ the verifier runs in time $n \cdot \polylog(n)$ with $\polylog(n)$ communication, and all of $\classP$ has public-coin interactive proofs with log-space, polynomial-time verifiers — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]]. With the Kalai–Raz transformation from public-coin interactive proofs to 1-round arguments, log-space-uniform $\mathrm{NC}$ has designated-verifier non-interactive [[succinct-argument|arguments]] in the public-key model with polylogarithmic communication and quasi-linear verification, sound if [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|PIR with polylogarithmic communication]] exists — [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]], [[KR09 - Probabilistically Checkable Arguments|KR09]]. Every language decidable in polynomial time and bounded polynomial space has an interactive proof with a polynomial-time prover, an almost-linear-time verifier and a constant number of rounds — [[RRR16 - Constant-round interactive proofs for delegating computation|RRR16]].

<!-- BEGIN GENERATED participates-in 2cbb9e33bbd3 -->

## Participates in

**Barriers**

- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

<!-- END GENERATED participates-in -->
