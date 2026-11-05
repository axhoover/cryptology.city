---
type: glossary
status: draft
aliases:
  - MSP
  - Monotone span program
title: Monotone span program
id: monotone-span-program
---

# Monotone span program

A monotone span program over a field $\FF$ is a matrix whose rows are labeled by parties together with a fixed target vector; a set of parties is authorized exactly when the target lies in the span of the rows they label. Monotone span programs characterize the access structures realizable by linear secret sharing — [[KW93 - On Span Programs|KW93]], [[Bei96 - Secure Schemes for Secret Sharing and Key Distribution|Bei96]].

## Definition

A **monotone span program** for $n$ parties over a field $\FF$ is a triple $(\mathbf{M}, \rho, \mathbf{t})$ with $\mathbf{M} \in \FF^{\ell \times e}$, a labeling $\rho : [\ell] \to [n]$ of its rows, and a nonzero target vector $\mathbf{t} \in \FF^e$, conventionally $\mathbf{t} = (1, 0, \ldots, 0)$. Write $\mathbf{M}_i$ for row $i$ of $\mathbf{M}$ and, for $A \subseteq [n]$, $\mathbf{M}_A$ for the submatrix of the rows $i$ with $\rho(i) \in A$. The program **accepts** $A$ if $\mathbf{t}$ lies in the row span of $\mathbf{M}_A$, and it **computes** the access structure $\Gamma = \{A \subseteq [n] : \mathbf{t} \in \mathrm{rowspan}(\mathbf{M}_A)\}$, which is monotone because adding parties only adds rows. Its **size** is $\ell$ — [[KW93 - On Span Programs|KW93]].

If $A$ is not accepted, some $\mathbf{w} \in \FF^e$ satisfies $\mathbf{M}_A \mathbf{w} = \mathbf{0}$ and $\langle \mathbf{t}, \mathbf{w} \rangle = 1$, by linear algebra — standard.

## Secret sharing from a monotone span program

To share $s \in \FF$ over a finite field $\FF$, sample $\mathbf{v} \getsr \FF^e$ subject to $\langle \mathbf{t}, \mathbf{v} \rangle = s$ and give party $\rho(i)$ the share $\mathbf{M}_i \mathbf{v}$ for every row $i$ it labels. An accepted set writes $\mathbf{t} = \sum_{\rho(i) \in A} c_i \mathbf{M}_i$ and recovers $s = \sum c_i \mathbf{M}_i \mathbf{v}$. For a rejected set, adding $(s' - s)\mathbf{w}$ to $\mathbf{v}$, with $\mathbf{w}$ as above, maps sharings of $s$ to sharings of $s'$ without changing that set's shares, so its shares are independent of $s$ — standard. This [[secret-sharing#linear-secret-sharing-schemes-lsss|linear secret-sharing scheme]] has total share size $\ell$, and every linear scheme arises this way ([[linear-secret-sharing-schemes-lsss-to-msp|LSSS ⇔ MSP]]) — [[KW93 - On Span Programs|KW93]], [[Bei96 - Secure Schemes for Secret Sharing and Key Distribution|Bei96]].

## Examples and uses

- **Threshold.** Rows $(1, i, i^2, \ldots, i^{t-1})$ for $i \in [n]$ over a prime field $\FF_p$ with $p > n$, row $i$ labeled $i$, target $(1, 0, \ldots, 0)$, compute the $t$-out-of-$n$ threshold structure; the scheme above is [[secret-sharing#shamir-secret-sharing|Shamir secret sharing]], the dealer's polynomial having coefficient vector $\mathbf{v}$ — [[Sha79 - How to share a secret|Sha79]].
- **Attribute-based encryption.** Key-policy [[attribute-based-encryption|ABE]] supports policies given by linear secret-sharing schemes, equivalently monotone span programs, with attributes as parties — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]].

<!-- BEGIN GENERATED participates-in 912fe70d1b03 -->

## Participates in

**Produces Monotone span program**

- [[linear-secret-sharing-schemes-lsss-to-msp|Linear secret sharing schemes (LSSS) ⇔ MSP]]

<!-- END GENERATED participates-in -->
