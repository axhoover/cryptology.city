---
type: reduction
status: draft
title: "SIDH ⇒ KE"
aliases: []
id: red-sidh-to-ke-jdf11
kind: implication
hypotheses: [sidh]
conclusion: ke
class: unstated
model: standard
source:
  - "[[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]"
security-loss: ""
---

# SIDH ⇒ KE

[[supersingular-isogeny-diffie-hellman|SIDH]] implies [[key-exchange|KE]].

## Statement

Migrated verbatim from [[supersingular-isogeny-diffie-hellman]] § Supersingular Isogeny Diffie-Hellman:

> The _Supersingular Isogeny Diffie-Hellman (SIDH)_ assumption underlies a family of post-quantum key exchange protocols based on the conjectured hardness of computing isogenies between supersingular elliptic curves. SIDH was introduced by Jao and De Feo as a candidate post-quantum key exchange — [[JDF11 - Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies|JDF11]]. In 2022, a classical polynomial-time attack was discovered that completely breaks SIDH — [[CD22 - An efficient key recovery attack on SIDH|CD22]].

Migrated verbatim from [[supersingular-isogeny-diffie-hellman]] § Assumption:

> The SIDH key exchange works as follows:
>
> 1. Both parties fix supersingular $E / \FF_{p^2}$ with $\#E(\FF_{p^2}) = (p+1)^2$, chosen so that $p + 1 = 2^{e_A} 3^{e_B}$
> 2. Alice chooses a secret $\ell_A$-isogeny $\phi_A : E \to E_A$; Bob chooses $\phi_B : E \to E_B$
> 3. They exchange $E_A$, $E_B$ and images of each other's torsion points
> 4. Shared key: $j(E_{AB}) = j(\phi_B(E_A)) = j(\phi_A(E_B))$, the $j$-invariant of the common image curve

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Intro packs the construction claim and the break; recorded separately.
- content/Primitives/key-exchange.md exists but "key exchange" is plain text with no wikilink.
- No security notion stated for the key exchange.
- The key-exchange construction is given as a numbered list with no citation (JDF11 is cited only in the intro).
- SUSPECTED ERROR (report only): the shared-key line "j(E_AB) = j(phi_B(E_A)) = j(phi_A(E_B))" applies each party’s OWN isogeny to the other party’s curve. The correct objects are the pushed-forward isogenies (phi_B′ : E_A -> E_AB and phi_A′ : E_B -> E_AB) computed from the transmitted torsion-point images; as written the composition is not defined.
- SUSPECTED ERROR (report only) at line 18: the SIDH problem is stated with E′ = E/<P> for "a random l-torsion point" P while {P, Q} is called a basis of the l^n-torsion, and the auxiliary images are written phi(Q) for that basis. In SIDH the kernel is <P + [s]Q> for a secret s and BOTH basis images of the OTHER party’s torsion group are published; the statement as written is inconsistent about l vs l^n and about which points are revealed.
- This page has NO pseudocode game for the SIDH assumption at all, violating the assumption-page schema in CLAUDE.md (## Assumption must contain the formal game).
