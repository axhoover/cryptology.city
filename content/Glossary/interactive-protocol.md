---
aliases:
  - interactive protocol
  - two-party protocol
  - protocol
  - view
  - transcript
title: Interactive protocol
---
# Interactive protocols

A **two-party protocol** $\Pi = (\Setup, P_1, P_2)$ consists of:
- $\Setup(1^\secpar) \to \pp,$ a randomized algorithm generating public parameters,
- $P_1, P_2,$ two stateful interactive algorithms (the **parties**).

Each party $P_i$ has private inputs $\mathbf{x}_i$ and private random coins $\rho_i$. The parties exchange messages in sequence according to the protocol specification until both halt.

When $\Setup$ is trivial (no public parameters are needed), we write $\pp = 1^\secpar$ and omit it.

## Execution

The joint execution of $P_1$ with input $\mathbf{x}_1$ against $P_2$ with input $\mathbf{x}_2$ is written

$$
\langle P_1(\pp, \mathbf{x}_1),\, P_2(\pp, \mathbf{x}_2) \rangle \to (\mathsf{out}_1,\, \mathsf{out}_2),
$$

where $\mathsf{out}_i$ is the output of $P_i$. When we wish to make randomness explicit, we write $P_i(\pp, \mathbf{x}_i;\, \rho_i)$.

## View

The **view** of party $P_i$ in an execution captures everything $P_i$ observed:

$$
\View_{P_i} \;=\; (\mathbf{x}_i,~\rho_i,~\mathbf{m}_i),
$$

where $\mathbf{m}_i = (m_i^{(1)}, m_i^{(2)}, \ldots)$ is the ordered sequence of messages $P_i$ received. The view determines $P_i$'s behavior completely: given $\View_{P_i}$, one can recompute all messages $P_i$ sent and its final output.

## Transcript

The **transcript** of an execution is the ordered sequence of all messages exchanged by both parties. The views $\View_{P_1}$ and $\View_{P_2}$ together determine the transcript (and vice versa, up to each party's private randomness and inputs).

## Adversary models

Security of a protocol is analyzed under one of two standard adversary models:

- **Semi-honest** (*honest-but-curious*): the adversary follows the protocol specification exactly but tries to learn additional information from its view alone.
- **Malicious**: the adversary may deviate from the protocol arbitrarily, sending any messages it chooses.

Note: A protocol secure against malicious parties implies security against
semi-honest parties.
