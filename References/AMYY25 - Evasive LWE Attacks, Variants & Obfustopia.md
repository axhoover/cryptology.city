---
title: "Evasive LWE: Attacks, Variants & Obfustopia"
source: https://eprint.iacr.org/2025/375
authors: Shweta Agrawal, Anuja Modi, Anshu Yadav, Shota Yamada
venue: preprint
published: 2025-02-27
created: 2025-03-04
aliases:
  - AMYY25
---
# Evasive LWE: Attacks, Variants & Obfustopia
URL: https://eprint.iacr.org/2025/375
Authors: Shweta Agrawal, Anuja Modi, Anshu Yadav, Shota Yamada

## Abstract
Evasive LWE (Wee, Eurocrypt 2022 and Tsabary, Crypto 2022) is a recently introduced, popular lattice assumption which has been used to tackle long-standing problems in lattice based cryptography. In this work, we develop new counter-examples against Evasive LWE, in both the private and public-coin regime, propose counter-measures that define safety zones, and finally explore modifications to construct full compact FE/iO.

Attacks: Our attacks are summarized as follows.
- The recent work by Hseih, Lin and Luo [HLL23] constructed the first ABE for unbounded depth circuits by relying on the (public coin) ''circular'' evasive LWE assumption, which incorporates circularity into the Evasive LWE assumption. We provide a new attack against this assumption by exhibiting a sampler such that the pre-condition is true but post-condition is false.
- We demonstrate a counter-example against public-coin evasive LWE which exploits the freedom to choose the error distributions in the pre and post conditions. Our attack crucially relies on the error in the pre-condition being larger than the error in the post-condition. 
- The recent work by Agrawal, Kumari and Yamada [AKY24a] constructed the first functional encryption scheme for pseudorandom functionalities ($\mathsf{prFE}$) and extended this to obfuscation for pseudorandom functionalities ($\mathsf{prIO}$) [AKY24c] by relying on private-coin evasive LWE. We provide a new attack against the stated assumption. 
- The recent work by Branco et al. [BDJ+24] (concurrently to [AKY24c]) provides a construction of obfuscation for pseudorandom functionalities by relying on private-coin evasive LWE.  By adapting the counter-example against [AKY24a], we provide an attack against this assumption. 
- Branco et al. [BDJ+24] showed that there exist contrived, somehow ''self-referential'', classes of pseudorandom functionalities for which pseudorandom obfuscation cannot exist. We develop an analogous result to the setting of pseudorandom functional encryption.

While Evasive LWE was developed to specifically avoid zeroizing attacks as discussed above, our attacks show that in some (contrived) settings, the adversary may nevertheless obtain terms in the zeroizing regime.

Counter-measures: Guided by the learning distilled from the above attacks, we develop counter-measures to prevent against them. Our interpretation of the above attacks is that Evasive LWE, as defined, is too general -- we suggest restrictions to identify safe zones for the assumption, using which, the broken applications can be recovered.

Variants to give full FE and iO: Finally, we show that certain modifications of Evasive LWE, which respect the counter-measures developed above, yield full compact FE in the standard model. We caution that the main goal of presenting these candidates is as goals for cryptanalysis to further our understanding of this regime of assumptions.