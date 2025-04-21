---
title: Watermarking Language Models for Many Adaptive Users
source: https://eprint.iacr.org/2024/759
authors: Aloni Cohen, Alexander Hoover, Gabe Schoenbach
venue: S&P 2025
published: 2024-05-17
aliases:
  - CHS25
---
# Watermarking Language Models for Many Adaptive Users
URL: https://eprint.iacr.org/2024/759
Authors: Aloni Cohen, Alexander Hoover, Gabe Schoenbach

## Abstract
We study watermarking schemes for language models with provable guarantees. As we show, prior works offer no robustness guarantees against adaptive prompting: when a user queries a language model more than once, as even benign users do. And with just a single exception (Christ and Gunn, 2024), prior works are restricted to zero-bit watermarking: machine-generated text can be detected as such, but no additional information can be extracted from the watermark. Unfortunately, merely detecting AI-generated text may not prevent future abuses.

We introduce multi-user watermarks, which allow tracing model-generated text to individual users or to groups of colluding users, even in the face of adaptive prompting. We construct multi-user watermarking schemes from undetectable, adaptively robust, zero-bit watermarking schemes (and prove that the undetectable zero-bit scheme of Christ, Gunn, and Zamir (2024) is adaptively robust). Importantly, our scheme provides both zero-bit and multi-user assurances at the same time. It detects shorter snippets just as well as the original scheme, and traces longer excerpts to individuals. 

The main technical component is a construction of message-embedding watermarks from zero-bit watermarks. Ours is the first generic reduction between watermarking schemes for language models. A challenge for such reductions is the lack of a unified abstraction for robustness --- that marked text is detectable even after edits. We introduce a new unifying abstraction called AEB-robustness. AEB-robustness provides that the watermark is detectable whenever the edited text "approximates enough blocks" of model-generated output.