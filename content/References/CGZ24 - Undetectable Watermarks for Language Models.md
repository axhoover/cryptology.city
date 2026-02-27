---
title: "CGZ24"
source: https://eprint.iacr.org/2023/763
authors: Miranda Christ, Sam Gunn, Or Zamir
venue: COLT 2024
published: 2023-05-25
aliases:
  - CGZ24
tags:
  - COLT

---
# [CGZ24] Undetectable Watermarks for Language Models

**Authors:** Miranda Christ, Sam Gunn, Or Zamir | **Venue:** COLT 2024 | [Source](https://eprint.iacr.org/2023/763)

## Abstract
Recent advances in the capabilities of large language models such as GPT-4 have spurred increasing concern about our ability to detect AI-generated text. Prior works have suggested methods of embedding watermarks in model outputs, by \textit{noticeably} altering the output distribution. We ask: Is it possible to introduce a watermark without incurring \textit{any detectable} change to the output distribution?

To this end we introduce a cryptographically-inspired notion of undetectable watermarks for language models. That is, watermarks can be detected only with the knowledge of a secret key; without the secret key, it is computationally intractable to distinguish watermarked outputs from those of the original model. In particular, it is impossible for a user to observe any degradation in the quality of the text. Crucially, watermarks should remain undetectable even when the user is allowed to adaptively query the model with arbitrarily chosen prompts. We construct undetectable watermarks based on the existence of one-way functions, a standard assumption in cryptography.