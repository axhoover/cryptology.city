---
type: glossary
status: draft
aliases:
  - IOP
  - Interactive oracle proof
  - Interactive oracle proofs
title: Interactive oracle proof
id: iop
variants:
  succinct-state-restoration-iop: "#succinct-iops-with-state-restoration-knowledge-soundness"
---

# Interactive oracle proof

An interactive oracle proof (IOP) is a public-coin interactive proof in which the verifier reads only a few symbols of each prover message — [[BCS16 - Interactive Oracle Proofs|BCS16]].

## Definition

A $k$-round public-coin interactive oracle proof for a relation $\calR$ is a protocol between a prover $P(x, w)$ and a verifier $V(x)$ in which, in each round $i \in [k]$, $P$ sends an oracle $\Pi_i \in \Sigma^{\ell_i}$ and $V$ answers with uniformly random $\rho_i$. After the last round $V$, from $x$ and $\rho_1, \ldots, \rho_k$, queries $q$ positions of $\Pi_1, \ldots, \Pi_k$ and accepts or rejects.

- **Completeness:** for every $(x, w) \in \calR$, the honest prover makes $V$ accept with probability $1$.
- **Soundness error $\varepsilon$:** for every $x \notin L(\calR)$ and every prover $\tilde P$, $V$ accepts with probability at most $\varepsilon$.

A [[probabilistically-checkable-proofs|PCP]] is a one-round IOP, and an [[interactive-proof-systems|interactive proof]] is an IOP whose verifier reads every oracle — [[BCS16 - Interactive Oracle Proofs|BCS16]]. [[RRR16 - Constant-round interactive proofs for delegating computation|RRR16]] independently define the same notion as probabilistically checkable interactive proofs.

## Succinct IOPs with state-restoration knowledge soundness

Let $\calR_U = \{((M, x, T), w) : M \text{ accepts } (x, w) \text{ within } T \text{ steps}\}$ be the universal relation. A public-coin IOP for $\calR_U$, parameterized by $\secpar$, is **succinct with state-restoration knowledge soundness** if

- the honest prover, given $w$, runs in time $\poly(\secpar, |M|, |x|, T)$;
- the verifier runs in time $\poly(\secpar, |M|, |x|, \log T)$, which bounds the number of rounds, the number of queries and the size of each queried symbol;
- there is a polynomial-time extractor $\calE$ such that for every polynomial $t$ and every prover $\tilde P$ that may, up to $t$ times, return the verifier to an earlier state before completing one transcript, the verifier then drawing fresh randomness for the next round: if $\tilde P$ makes $V$ accept $(M, x, T)$ with probability $\delta$, then $\calE^{\tilde P}(M, x, T)$ outputs $w$ with $((M, x, T), w) \in \calR_U$ with probability at least $\delta - \kappa_{\mathrm{sr}}(t)$, where $\kappa_{\mathrm{sr}}(t)$ is negligible in $\secpar$ — [[BCS16 - Interactive Oracle Proofs|BCS16]].

A state restoration rewinds the verifier, not the prover: $\tilde P$ chooses which partial transcript to continue from and which complete transcript to submit. Such a prover is what a cheating prover against the compiled non-interactive argument becomes, which is why this notion, rather than ordinary soundness, governs the [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|BCS transform]] — [[BCS16 - Interactive Oracle Proofs|BCS16]].

<!-- BEGIN GENERATED participates-in e0dddf219d11 -->

## Participates in

**Builds on Interactive oracle proof**

- [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)]] (via [[interactive-oracle-proof#succinct-iops-with-state-restoration-knowledge-soundness|Succinct IOPs with state-restoration knowledge soundness]])

<!-- END GENERATED participates-in -->
