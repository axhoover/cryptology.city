---
type: reduction
status: draft
title: "QR ⇒ COM"
aliases: []
id: red-qr-to-com
kind: implication
hypotheses: [qr]
conclusion: com
class: unstated
model: standard
source: folklore
security-loss: ""
---

# QR ⇒ COM

[[quadratic-residuosity|QR]] implies [[commitment-scheme|COM]].

## Statement

[[quadratic-residuosity|QR]] implies a perfectly binding, computationally hiding bit [[commitment-scheme|commitment]]. With $\pp = (N, y)$ for $N = pq$ and $y \in \J_N \setminus \QR_N$, a commitment to $b \in \bits$ is $c = y^b r^2 \bmod N$ for $r \getsr \ZZ_N^*$, opened by revealing $(b, r)$. Binding is perfect since $c \in \QR_N$ iff $b = 0$; hiding holds under QR since commitments to $0$ are uniform in $\QR_N$ and commitments to $1$ uniform in $\J_N \setminus \QR_N$ — folklore.

## Sketch

The reduction embeds the QR challenge $a \in \J_N$ as $y$ and runs the hiding adversary once: if $a \notin \QR_N$ the hiding game is simulated exactly, and if $a \in \QR_N$ the commitment is a uniform square independent of $b$, so the adversary's advantage decides residuosity (with a factor-$2$ loss).

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The source bullet on [[quadratic-residuosity]] claims a _statistically hiding_ commitment; this construction is only computationally hiding. A statistically hiding commitment from QR belongs on separate pages, one per link of its chain.
