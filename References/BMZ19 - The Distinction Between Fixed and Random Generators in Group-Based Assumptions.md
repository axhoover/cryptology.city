---
title: "The Distinction Between Fixed and Random Generators in Group-Based Assumptions"
source: "https://link.springer.com/chapter/10.1007/978-3-030-26951-7_27"
authors: "Bartusek, James, Ma, Fermi, Zhandry, Mark"
venue: "CRYPTO 2019"
published: 2019-01-01
alias: "BMZ19"
---
# The Distinction Between Fixed and Random Generators in Group-Based Assumptions
URL: https://link.springer.com/chapter/10.1007/978-3-030-26951-7_27
Authors: Bartusek, James, Ma, Fermi, Zhandry, Mark

## Abstract
There is surprisingly little consensus on the precise role of the generator $g$ in group-based assumptions such as DDH. Some works consider $g$ to be a fixed part of the group description, while others take it to be random. We study this subtle distinction from a number of angles.

- In the generic group model, we demonstrate the plausibility of groups in which random-generator DDH (resp. CDH) is hard but fixed-generator DDH (resp. CDH) is easy. We observe that such groups have interesting cryptographic applications.
- We find that seemingly tight generic lower bounds for the Discrete-Log and CDH problems with preprocessing (Corrigan-Gibbs and Kogan, Eurocrypt 2018) are not tight in the sub-constant success probability regime if the generator is random. We resolve this by proving tight lower bounds for the random generator variants; our results formalize the intuition that using a random generator will reduce the effectiveness of preprocessing attacks.
- We observe that DDH-like assumptions in which exponents are drawn from low-entropy distributions are particularly sensitive to the fixed- vs. random-generator distinction. Most notably, we discover that the Strong Power DDH assumption of Komargodski and Yogev (Komargodski and Yogev, Eurocrypt 2018) used for non-malleable point obfuscation is in fact *false* precisely because it requires a fixed generator. In response, we formulate an alternative fixed-generator assumption that suffices for a new construction of non-malleable point obfuscation, and we prove the assumption holds in the generic group model. We also give a generic group proof for the security of fixed-generator, low-entropy DDH (Canetti, Crypto 1997).