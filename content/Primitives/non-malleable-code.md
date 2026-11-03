---
type: primitive
status: draft
aliases:
  - NMC
  - Non-malleable code
  - Non-malleable codes
title: Non-malleable code
id: non-malleable-code
variants:
  split-state-non-malleable-code: "#split-state-tampering"
---

# Non-malleable code

A non-malleable code with respect to a family $\calF$ of tampering functions is a keyless randomized encoding such that decoding a codeword modified by any $f \in \calF$ yields either the encoded message or a value distributed independently of it — [[DPW10 - Non-Malleable Codes|DPW10]].

## Syntax

A coding scheme is a pair of algorithms $\Pi = (\Enc, \Dec)$ with respect to message space $\calM = \bits^k$ and codeword space $\bits^n$:

- $\Enc(m) \to c$, a randomized algorithm taking a message $m \in \calM$ and outputting a codeword $c \in \bits^n$,
- $\Dec(c) \to m$, a deterministic algorithm taking a codeword $c \in \bits^n$ and outputting a message $m \in \calM$ or $\bot$.

A tampering family $\calF$ is a set of functions $f : \bits^n \to \bits^n$. The rate of $\Pi$ is $k/n$.

## Properties

### Correctness

For all $m \in \calM$, $\Pr\!\left[\Dec(\Enc(m)) = m\right] = 1$ over the coins of $\Enc$.

### Non-malleability

For $f \in \calF$ and a distribution $D$ on $\calM \cup \{\bot, \mathsf{same}^*\}$, the game compares the decoding of a tampered codeword of $m$ with a sample of $D$ in which $\mathsf{same}^*$ is replaced by $m$. The distribution depends on $f$ but not on $m$; the symbol $\mathsf{same}^*$ accounts for tampering functions, such as the identity, that leave the message unchanged — [[DPW10 - Non-Malleable Codes|DPW10]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{nm}}_{\Pi,f,D,\calA}(m)$}
\begin{algorithmic}
\State $b \getsr \bits$
\State $c \gets \Enc(m)$; $\tilde m_0 \gets \Dec(f(c))$
\State $\tilde m_1 \gets D$
\If{$\tilde m_1 = \mathsf{same}^*$}
\State $\tilde m_1 \gets m$
\EndIf
\State $b' \gets \calA(\tilde m_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A coding scheme $\Pi$ is **$\varepsilon$-non-malleable with respect to $\calF$** if for every $f \in \calF$ there is a distribution $D_f$ on $\calM \cup \{\bot, \mathsf{same}^*\}$ such that for all $m \in \calM$ and all $\calA$,

$$
\Adv^{\mathrm{nm}}_{\Pi,f,D_f,\calA}(m) := \left|2\Pr\!\left[\Game^{\mathrm{nm}}_{\Pi,f,D_f,\calA}(m) = 1\right] - 1\right| \le \varepsilon
$$

— [[DPW10 - Non-Malleable Codes|DPW10]]. The adversary $\calA$ is unbounded, so the largest advantage over all $\calA$ is the statistical distance between the distributions of $\tilde m_0$ and $\tilde m_1$.

No coding scheme is non-malleable with respect to the family of all efficiently computable functions $\bits^n \to \bits^n$, which contains a function that decodes, replaces the message by a different one, and re-encodes — [[DPW10 - Non-Malleable Codes|DPW10]].

# Variations

## Split-state tampering

The codeword is a pair $c = (c_L, c_R)$, and the **split-state** family contains every function $f(c_L, c_R) = (f_L(c_L), f_R(c_R))$ for arbitrary functions $f_L$ and $f_R$, which need not be efficient. A **split-state non-malleable code** is a code that is $\varepsilon$-non-malleable with respect to this family, for negligible $\varepsilon$.

DKO13 construct one for one-bit messages from two-source extractors — [[DKO13 - Non-malleable Codes from Two-Source Extractors|DKO13]]; ADL14 construct one for multi-bit messages — [[ADL14 - Non-malleable codes from additive combinatorics|ADL14]]; AO20 achieve constant rate — [[AO20 - A constant rate non-malleable code in the split-state model|AO20]]. When the two halves have equal length, the best achievable rate, by codes that need not be efficient, is $1/2$ — [[CG14 - Capacity of non-malleable codes|CG14]].

## Bit-wise tampering

The **bit-wise** family contains every function that acts on each bit of the codeword independently, keeping it, flipping it, or setting it to $0$ or to $1$. DPW10 construct an efficient code that is non-malleable with respect to this family — [[DPW10 - Non-Malleable Codes|DPW10]].

# Other results

- For every family $\calF$ that is small enough, the probabilistic method gives a code that is non-malleable with respect to $\calF$; the code need not be efficient — [[DPW10 - Non-Malleable Codes|DPW10]].
- For every family with $|\calF| \le 2^{2^{\alpha n}}$, where $0 < \alpha < 1$, a randomized construction gives, with high probability, codes non-malleable with respect to $\calF$ of rate arbitrarily close to $1 - \alpha$; for the family of functions that tamper only with the first $\alpha n$ bits of the codeword, $1 - \alpha$ is the best achievable rate — [[CG14 - Capacity of non-malleable codes|CG14]].
- In the [[random-oracle-model|random-oracle model]] there are efficient codes non-malleable with respect to families in which every bit of the tampered codeword depends arbitrarily on any $99\%$ of the bits of the original codeword — [[DPW10 - Non-Malleable Codes|DPW10]].
- Storing the secret state of a device encoded with a code non-malleable with respect to $\calF$ protects any functionality against tampering of its memory by functions in $\calF$ — [[DPW10 - Non-Malleable Codes|DPW10]].
