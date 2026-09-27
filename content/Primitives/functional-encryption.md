---
type: primitive
status: stub
aliases:
  - FE
  - Functional encryption
title: Functional encryption
id: functional-encryption
---

# Functional encryption

A public-key encryption scheme in which a master secret key issues functional keys $\sk_f$, and a holder of $\sk_f$ learns $f(m)$ from an encryption of $m$ and nothing more.

TODO: syntax and security definition.

<!-- BEGIN GENERATED participates-in c7e8aba793fc -->

## Participates in

**Builds on Functional encryption**

- [[fe-to-io|FE ⇒ iO]]

**Produces Functional encryption**

- [[hash-function-and-io-to-fe-sw14|OWF + iO ⇒ FE]]

<!-- END GENERATED participates-in -->
