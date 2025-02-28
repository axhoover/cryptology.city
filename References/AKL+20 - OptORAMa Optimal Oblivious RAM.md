---
title: "OptORAMa: Optimal Oblivious RAM"
source: https://eprint.iacr.org/2018/892
authors: Gilad Asharov, Ilan Komargodski, Wei-Kai Lin, Kartik Nayak, Enoch Peserico, Elaine Shi
venue: Eurocrypt 2020
published: 2018-09-23
aliases:
  - AKL+20
  - OptORAMa
---
# OptORAMa: Optimal Oblivious RAM
URL: https://eprint.iacr.org/2018/892
Authors: Gilad Asharov, Ilan Komargodski, Wei-Kai Lin, Kartik Nayak, Enoch Peserico, Elaine Shi

## Abstract
Oblivious RAM (ORAM), first introduced in the ground-breaking work of Goldreich and Ostrovsky (STOC '87 and J. ACM '96) is a technique for provably obfuscating programs' access patterns, such that the access patterns leak no information about the programs' secret inputs. To compile a general program to an oblivious counterpart, it is well-known that $\Omega(\log N)$ amortized blowup is necessary, where $N$ is the size of the logical memory. This was shown in Goldreich and Ostrovksy's original ORAM work for statistical security and in a somewhat restricted model (the so called balls-and-bins model), and recently by Larsen and Nielsen (CRYPTO '18) for computational security.

A long standing open question is whether there exists an optimal ORAM construction that matches the aforementioned logarithmic lower bounds (without making large memory word assumptions, and assuming a constant number of CPU registers). In this paper, we resolve this problem and present the first secure ORAM with $O(\log N)$ amortized blowup, assuming one-way functions. Our result is inspired by and non-trivially improves on the recent beautiful work of Patel et al. (FOCS '18) who gave a construction with $O(\log N \cdot \log \log N)$ amortized blowup, assuming one-way functions.

One of our building blocks of independent interest is a linear-time deterministic oblivious algorithm for tight compaction: Given an array of $n$ elements where some elements are marked, we permute the elements in the array so that all marked elements end up in the front of the array. Our $O(n)$ algorithm improves the previously best known deterministic or randomized algorithms whose running time is  $O(n \cdot \log n)$ or $O(n \cdot \log \log n)$, respectively.

# Notes
## Oblivious Tight Compaction
- OptORAMa provide an oblivious tight compaction algorithm that runs in linear time
	- The implied constanst is something like $2^{228}$
- This was improved by [[@DO2020]] to $9405.73 n$ apparently with a couple algorithm modifications and changing the expander to a random type graph
- How does Tight Compaction, relate to Multi Array Shuffle from [[@PPRY2018]]?

### Problem: Tight Compaction
*Input:* Given an array $I$ of $n$ balls, each ball is labeled with 0 or 1, and there are $c$ 0s.
*Output:* An array $O$ which encodes how to swap all the 0s to the first $c$ positions, and all the 1s to the last $n-c$ positions.
- Note: This is NOT sorting, it's finding the swaps needed in order to sort, we find these swaps in an oblivious way and these swaps are inherently unstable 
	- [[@LSX2019]] shows that *stable* tight compaction requires $\Omega(n\log n)$ steps
	- "Stable" means that relative order is preserved for equal inputs 0101 -> 0011 but also the swaps performed keep the 0s and 1s in their same relative order
- We can combine knowning these swaps with linear-sized super-concentrators to obliviously route the swaps needed to sort
	- These are dwitching networks with $n$ inputs and $n$ outputs such that vertex-disjoint paths exist from any $k$ elements in the inputs to any $k$ positions in the outputs

### Expander
**"Expander Mixing" Lemma:** For any constant $\varepsilon \in (0,1)$, there is a family of bipartite graphs $\{G_{\varepsilon,n}\}_{n\in\mathbb{N}}$ and a constant $d_{\varepsilon}\in \mathbb{N}$, such that for every power of 2 $n\in \mathbb{N}$, $G_{\varepsilon, n} = (L,R,E)$ has $|L| = |R| = n$ vertices on deach side, it is $d_{\varepsilon}$-regular, and for all sets $S\subseteq L$, $T\subseteq R$, it holds that
$$\left|e(S,T) - \frac{d_{\varepsilon}}{n}\cdot |S|\cdot |T|\right| \le \varepsilon d_{\varepsilon}\sqrt{|S|\cdot |T|},$$
where $e(S,T)$ is the set of edges $(s,t)\in E$ such that $s\in S$ and $t\in T$.
- Furthermore, there exists a (uniform) linear-time algorithm that on input $1^n$ outputs the entire edge set of $G_{\varepsilon, n}$.
- This more than an expansion condition, it is some kind of expansion property

### Algorithm Outline
- TightCompaction(n) -> SwapMisplaced(n)
- SwapMisplaced(n) -> LooseSwapMisplaced(n) + LooseCompaction(n) + SwapMisplaced (n/2)
- LooseSwapMisplaced(n) -> runs in O(n)
	- uses expanders
- LooseCompaction(n) -> CompactionFromMatching(n/mu) + CompactionFromMatching(n/2mu) + (n/mu) * LooseCompaction(mu)
	- mu is picked based on n and word width
- CompactionFromMatching(m) -> ComputeMatching(m/B) + O(m)
	- B is a constant
- ComputeMatching(m/B) -> O(m log m) or O(m)
	- If m/B >= w / log w then O(m log m) and o.w. runs in O(m)
	- uses expanders


### Algorithm
- This is solved by marking misplaced 0-balls with red and misplaced 1-balls with blue
- I think $\ell$ is taken as $2^{38}$

$\mathsf{SwapMisplaced}:$
- Run an approximate swapping algorithm $\mathsf{LooseSwapMisplaced}_\ell$
	- $\mathsf{LooseSwapMisplaced}_\ell$ guarantees at most $n/\ell$ are misplaced after
- Then run $\mathsf{LooseCompaction}_\ell$ to move the red and blue balls into the first half of the array and recording the moves to undo it next time
	- $\mathsf{LooseCompaction}_\ell$ will move all the red and blue balls into the first half
- Finally, run $\mathsf{SwapMisplaced}$ recursively on the first half of the array

- *Claim:* $\mathsf{SwapMisplaced}$ obeys recurrance relation $T(n) = T(n/2) +\mathsf{LooseCompaction}_\ell + \mathsf{LooseSwapMisplaced}_\ell$  and is a constant more than the sum of those runtimes

#### LooseSwapMisplaced
$\mathsf{LooseSwapMisplaced}_\ell(I):$
- Uses an expander with $\varepsilon \le \frac{1}{2\sqrt{\ell}}$ and $n$ vertices
- For $i= 1,\ldots,n$:
	- If $(j,i)\in E$ and $(j,k)\in E$, and $(I[i], I[k])$ are (blue, red) or (red, blue) then swap them and mark both as $\bot$
- Ourput $I$

- *Claim:* This runs in $O(n)$ steps when $I$ has $n$ entries

*Correctness:*
- After this algorithm terminates, $I$ has at most $n/\ell$ balls.
	- Let $R_{red}$ be the locations of red balls and $R_{blue}$ be the set of blue balls
	- Notice, $N(R_{red})$ must be disjoint from $N(R_{blue})$
	- Also, $|R_{red}| = |R_{blue}|$
- We show that every subset $R'\subset R$ with $|R'|> n/(2\ell)$, it holds that $|N(R')|>n/2$
	- Since $R_{red}$ and $R_{blue}$ are disjoint, we'll reach a contradiction if they are both greater than $n/(2\ell)$
- Call $L' = N(R')$ the neighborhood of $R'$.
	- $e(L', R') = d_{\varepsilon} \cdot |R'|$
$$d_{\varepsilon} \cdot |R'| = e(L', R') \le \frac{d_{\varepsilon} |L'| |R'|}{n} + \frac{d_{\varepsilon}}{2\sqrt{\ell}} \cdot \sqrt{|L'| |R'|}.$$
Rearranging,
$$1-\frac{|L'|}{n} \le \sqrt{\frac{|L'|}{4\ell |R'|}}$$
Since, $|R'| > n/(2\ell)$ 
$$\left(1-\frac{|L'|}{n}\right)^2 - \frac{|L'|}{2n} < 0,$$
so $|L'| > n/2.$
 

#### LooseCompaction
- If there are at most $n/\ell$ real balls, then all the real balls will end up in the first half of the output array
- $w$ is the width of a memory cell

$\mathsf{LooseCompaction}_\ell(I):$ // we're promised at most $n/\ell$ real balls
- Define $p := \frac{w}{\log w}$
- If $n \ge p$:
	- If $n \ge p^2$:
		- set $\mu = p^2$
	- If $p\le n < p^2$:
		- set $\mu = p$
	- Represent $I$ as an array of $n/\mu$ blocks, where block $i$ contains $(I[(i-1)\mu + 1]), \ldots, I[i\mu])$
	- If $A[i]$ has more than $\mu/\sqrt{\ell}$ real balls, call it "dense" // at most $\sqrt{l}$ of these
	- $O_1 = \mathsf{CompactionFromMatching}_{\mu\cdot D}(A)$
		- Note: $O_1$ is of size $n/2$, and consists of all dense blocks in $A$
	- Interprest $O_1$ as an array of $n/2\mu$ blocks
	- $O_1' = \mathsf{CompactionFromMatching}_{\mu\cdot D}(O_1)$
	- Replace all dense blocks in $A$ with dummy blocks
	- For every $i\in [n/\mu]$
		- $O_{2,i} \gets \mathsf{LooseCompaction}_{\sqrt{\ell}/2}(A[i])$
		- $O_{2,i}' \gets \mathsf{LooseCompaction}_{\sqrt{\ell}/2}(O_{2,i})$
		- Note: $|A[i]| = \mu$ and $|O_{2,i}'| = \mu / 4$
	- Output $O_1'\| O_{2,1}' \| \cdots \| O_{2,n/\mu}'$
- If $n < p$:
	- Output $\mathsf{CompactionFromMatching}_D(I)$

*Runtime:*
- When $n \ge p^2$, the runtime of CompactionFromMatching is $O(m \log m)$, where $m = n/p^2$. Then, since $p := w/\log w$ and $w=\Omega(\log n)$, the runtime is $\frac{n (\log \log n)^2}{\log^2 n} \cdot \log \frac{n (\log \log n)^2}{\log^2 n} = O(n)$ 
- In the other cases, FastMatch kicks in because $n < (w/\log w)^2$ => $n/p < w/\log w$, so the runtime of CompactionFromMatching is $O(n)$.

*Correctness:*
- All cases meat the "128-condition," so loose compaction and compaction from matching are both correct
- The number of dense blocks is at most $\frac{n}{\mu}\frac{1}{\sqrt{\ell}}$, because the total number of real balls in $n/\ell$
	- So CompactionFromMatching takes at most $(\frac{n}{\mu}) / \sqrt{\ell}$ and then $(\frac{n}{2\mu}) / (\sqrt{\ell}/2)$, which for $\ell = 2^{38}$ have denominators larger than 128
	- This is similar for LooseCompaction
	- It also works for $\ell = \sqrt{2^{38}} / 2 = (2\cdot 128)^2$, for the first recusion
	- The third recusion on requires $\ell = \sqrt{(2\cdot 128)^2} / 2 = 128$

#### CompactionFromMatching
- $A$ has $m$ balls, in which at most $m/128$ are real
	- So, there are at most $\frac{m}{B}\cdot \frac{1}{32}$ dense bins
- $D$ is the size of each ball
- If $m < 2B$, we perform an oblivious sort (constant cost) instead of compaction from matching

$\mathsf{CompactionFromMatching}_D(A):$
1. $\varepsilon = 1/64$ and let $G_{\varepsilon, m/B}$ be the graph given by the expander theorem and set $B = d_{\varepsilon} / 2$
2. Interpret $A$ as $m/B$ bin array, where each bin consists of $B$ balls.
	- If a bin has more than $B/4$ real balls, call it "dense" and call the set of dense bins $S$
	- Initialize $A'$ as an empty $m/B$ bin array with $B$ ball bins
3. Compute a $(B,B/4)$-matching for $S$ via $M\gets  \mathsf{ComputeMatching}_{G_{\varepsilon, m/B}}(S)$
4. *Distribute:* For all $i\in [|E|]$, get the edge $(u,v) = E[i]$
	- If $M[i] = 1$, move a ball from bin $A[u]$ to bin $A'[v]$
	- If $M[i] = 0$, access $A[u]$ and $A'[v]$ but move nothing
5. *Fold:* Let $O$ be an array of size $m/(2B)$ empty bins, each of capacity $B$ balls.
	- For $i\in [m/(2B)]$, move all real balls in $(A[i], A[m/(2B) + i])$ and $(A'[i], A'[m/(2B) + i])$ to bin $O[i]$. Pad $O[i]$ with dummy balls if there are less than $B$ real balls.
6. Output $O$

- *Claim 5.10:* $\mathsf{CompactionFromMatching}$ runs in time $O(\lceil D/w \rceil\cdot m) + \mathsf{ComputeMatching}$

*Correctness:*
- Because $M$ is a $(B,B/4)$-matching, all of the right vertices of $G$ contain at most $B/4$ real elements
- So, all bins in the entire graph contain at most $B/4$ real elements after distribute, so we can fold the array with no overflow

#### Matching
**Def:** Let $G=(L,R,E)$ be a bipartite graph, and let $S\subseteq L$ and $M\subseteq E$. Given any vertex $u\in L\cup R$, define $N_M(u):= \{v\in L\cup R | (u,v)\in M\}$ as the subset of neighboring vertices in $M$.  We say that $M$ is a $(B,B/4)$-matching for $S$, if
1. For every $u\in S$, $|N_M(u)| \ge B$
2. For every $v\in R$, $|N_M(v)|\le B/4$

- The set $S$ has the bins with the dense balls
$\mathsf{ComputeMatching}_{G}(S):$
1. If $m/B > w/\log w$ then $M\gets \mathsf{SlowMatch}_G(S)$
2. If $m/B \le w/\log w$ then $M\gets \mathsf{FastMatch}_G(S)$
3. Output $M$

- Runs in time $O(m\log m)$, because of $\mathsf{SlowMatch}_G$
- And when $m/B \le w/\log w$, runs in $O(m)$ 

$\mathsf{SlowMatch}_G(S):$
1. Let $M$ be a bit-array of length $|E|$ initialized all to 0s.
2. Let $L' = S$ be the dense vertices in $L$, and let $R' = N(S)$:
	- Store both $L'$ and $R'$ as arrays of $m/B$ bits
	- For every edge $(u,v)\in E$, if $L'[u]=1$ then assign $R'[v] = 1$. 
3. Repeat for $\log(m/B)$ iterations:
	1. For each $u\in L$, if $u\in L'$:
		1. Send one *request* to every neighboring vertext $v\in N(u)$
		- If $u\not\in L'$ then perform fake access
	2. For every vertex $v\in R$ if $v\in R'$:
		1. Let the number of received requests be $c$
		2. If $c\le B/4$ then reply *positive* to every request, otherwise reply *negative*
		- If $v\not\in R'$ perform face accesses
	3. For each $u\in L$, if $u\in L'$:
		1. Let the number of received positives be $c$
		2. If $c\ge B$ then reply add to $M$ very edge that replied positive, and remove $u$ from $L'$
		- If $u\not\in L'$ perform face access to $M$
4. Output $M$

- *Claim 5.13:* Each iteration of slow match halves the size of $L'$
	- because of expander properties
- $\mathsf{SlowMatch}_G$ run in $O(m\log m)$ time, is oblivious, and outputs a $(B,B/4)$-matching



- Why do we need fast matching? Is it required for the overall $O(\log N)$ runtime?
	- It's needed because of the weird parameter delineation in [[#Loose Compaction]]
$\mathsf{FastMatch}_G:$
1. Initialize internal variables as follows:
	1. Represent $L=R=\{0,\ldots,m/B - 1\}$, where each identifier requires $\log w$ bits

- Runs in $O(m)$ time and is oblivous