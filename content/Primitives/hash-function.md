---
type: primitive
status: draft
aliases:
  - CRH
  - hashes
  - hash functions
  - OWF
  - OWFs
  - One-way function
  - Collision-resistant hash function
  - CRHF
  - CRHFs
title: Hash function
id: hash-function
variants:
  owf: "#preimage-resistance-one-wayness"
  non-uniform-owf: "#one-wayness-against-non-uniform-adversaries"
  quantum-secure-owf: "#quantum-secure-one-wayness"
  auxiliary-input-owf: "#auxiliary-input-one-wayness"
  weak-owf: "#weak-one-wayness"
  distributional-owf: "#distributional-one-wayness"
  subexponential-owf: "#sub-exponential-one-wayness"
  size-verifiable-owf: "#size-verifiable-one-wayness"
  crhf: "#collision-resistance"
  arbitrary-length-crhf: "#arbitrary-length-collision-resistance"
  second-preimage-resistance: "#second-preimage-resistance"
  length-halving-second-preimage-resistance: "#length-halving-second-preimage-resistance"
  same-width-spr-and-prf: "#same-width-spr-hash-and-prf"
  uowhf: "#target-collision-resistance-universal-one-wayness"
  weakly-collision-resistant-hash: "#weak-collision-resistance"
  arbitrary-length-weakly-collision-resistant-hash: "#arbitrary-length-weak-collision-resistance"
---

# Hash functions

A _hash function_ is a keyed family of functions $\hash(k, \cdot) : \calD \to \calR$; its main security notions ask that, for a random key $k$, no efficient adversary inverts $\hash(k, \cdot)$ on the image of a uniform input (one-wayness) or finds two distinct inputs with the same image (collision resistance).

## Syntax

A _hash function_ is a family $\hash = \{\hash_\secpar : \calK_\secpar \times \calD_\secpar \to \calR_\secpar\}_{\secpar \in \NN}$ with
key space $\calK_\secpar$, domain $\calD_\secpar$ and range $\calR_\secpar$, where
$\calK_\secpar, \calD_\secpar, \calR_\secpar \subseteq \bits^{\le p(\secpar)}$ for a
polynomial $p$. It comes with three efficient algorithms: a key sampler
$\KeyGen(1^\secpar) \to k \in \calK_\secpar$ (for a keyless family
$\calK_\secpar$ is a singleton), a uniform sampler for $\calD_\secpar$, and a
deterministic polynomial-time algorithm that computes $\hash_\secpar(k, x)$ from
$(1^\secpar, k, x)$. Below, $\calK$, $\calD$, $\calR$ and $\hash(k, x)$ stand for
$\calK_\secpar$, $\calD_\secpar$, $\calR_\secpar$ and $\hash_\secpar(k, x)$.

As an object, a [[#Preimage resistance (one-wayness)|one-way]],
[[#Weak one-wayness|weakly one-way]],
[[#Sub-exponential one-wayness|sub-exponentially one-way]] or
[[#Size-verifiable one-wayness|size-verifiable one-way]] function, a
[[#Collision resistance|CRHF]], a
[[#Second-preimage resistance|second-preimage-resistant]] family, a
[[#Target collision resistance (universal one-wayness)|UOWHF]] and a
[[#Weak collision resistance|weakly collision-resistant]] family each denote
such a family that meets the game of its section.

## Properties

A hash function can also be modeled as a [[random-oracle-model|random oracle]] — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]].

### Preimage resistance (one-wayness)

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pr}}_{\hash,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$ ; $x \getsr \calD$
\State $y \gets \hash(k,x)$
\State $\hat{x} \gets \calA(1^\secpar, k, y)$
\Return $[\hash(k,\hat{x}) = y]$
\end{algorithmic}
\end{algorithm}
```

A hash function $\hash$ is **one-way** or **preimage resistant**
if for every efficient $\calA,$

$$
\Adv^{\mathrm{pr}}_{\hash,\calA}(\secpar) :=
\Pr\!\left[\Game^{\mathrm{pr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible. In this case, $\hash$ is called a **one-way function (OWF)**.

#### Unkeyed form

Let non-decreasing polynomials $a(\secpar)$ and $b(\secpar)$ bound the number of coins of $\KeyGen(1^\secpar)$ and of the sampler $\Samp(1^\secpar)$ of $\calD_\secpar$, and let $n(\secpar) := a(\secpar) + b(\secpar) + \secpar$. The **unkeyed form** of $\hash$ is the keyless family $f$ with domain $\bits^{n(\secpar)}$ and

$$
f_\secpar(r, s, u) := \big(k,\ \hash_\secpar(k, \Samp(1^\secpar; s))\big), \qquad k := \KeyGen(1^\secpar; r),
$$

for $r \in \bits^{a(\secpar)}$, $s \in \bits^{b(\secpar)}$ and a padding $u \in \bits^\secpar$ that $f_\secpar$ ignores. On a uniform input, $f_\secpar$ outputs the pair $(k, y)$ of $\Game^{\mathrm{pr}}_{\hash,\calA}(\secpar)$, and if $(r', s', u')$ is a preimage of $(k, y)$ under $f_\secpar$, then $\Samp(1^\secpar; s')$ is a preimage of $y$ under $\hash(k, \cdot)$. An inverter for $f$ therefore gives an inverter for $\hash$ that runs it once and has at least its advantage, so $f$ is one-way if $\hash$ is; the same holds for weak one-wayness, with the same $p$, and for one-wayness against non-uniform or quantum adversaries — standard.

Since $\secpar \le n(\secpar) \le \poly(\secpar)$, a function is negligible, or polynomially bounded, in $n(\secpar)$ iff it is in $\secpar$. So $f$ meets each of these notions as a function on uniform $n$-bit inputs with the input length as security parameter, for the lengths $n = n(\secpar)$; applying $f_\secpar$, for the largest $\secpar$ with $n(\secpar) \le n$, to the first $n(\secpar)$ input bits extends it to every length $n \ge n(1)$ — standard. This is the form in which results such as [[owf-to-prg-hill99|OWF ⇒ PRG]] and [[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF (Yao)]] take their hypothesis; conversely, a function on uniform $\secpar$-bit inputs is a keyless family with $\calD_\secpar = \bits^\secpar$.

### One-wayness against non-uniform adversaries

Let $\calA = \{\calA_\secpar\}_{\secpar \in \NN}$ be a family of polynomial-size circuits, a [[uniform-and-non-uniform-adversaries#non-uniform-adversaries|non-uniform adversary]], with $\calA_\secpar$ playing $\Game^{\mathrm{pr}}_{\hash,\calA}(\secpar)$. $\hash$ is **one-way against non-uniform adversaries** if for every such family $\calA$, $\Adv^{\mathrm{pr}}_{\hash,\calA}(\secpar)$ is negligible. Security against all non-uniform adversaries implies security against all uniform ones ([[non-uniform-owf-to-owf|Non-uniform OWF ⇒ OWF]]) — standard.

### Quantum-secure one-wayness

A hash function $\hash$ is **quantum-secure one-way** if for all efficient quantum $\calA$, which receive the classical pair $(k, y)$ in $\Game^{\mathrm{pr}}_{\hash,\calA}$ and output a classical $\hat{x}$, $\Adv^{\mathrm{pr}}_{\hash,\calA}(\secpar)$ is negligible; $\hash$ itself is classical and efficiently computable. [[AC12 - Quantum Money from Hidden Subspaces|AC12]] call such a function a classical one-way function secure against quantum attack.

### Auxiliary-input one-wayness

A function $f(x, \cdot)$, efficiently computable given the auxiliary input $x$,
is **auxiliary-input one-way** if for all efficient $\calA$ there are infinitely
many $x$ on which $\calA$ inverts $f(x, \cdot)$ on a uniform input with
probability negligible in $|x|$ — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].

### Weak one-wayness

A hash function $\hash$ is **weakly one-way** if there is a polynomial $p$ such that for
all efficient $\calA$ and all sufficiently large $\secpar$,
$\Adv^{\mathrm{pr}}_{\hash,\calA}(\secpar) \le 1 - 1/p(\secpar)$ —
[[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]. Every
one-way function is weakly one-way — folklore; conversely,
[[weak-owf-to-owf-yao82a|weak one-way functions yield one-way functions]] — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

### Distributional one-wayness

A function $f$ computable in polynomial time is **distributionally one-way** if
there is a polynomial $p$ such that for all efficient $\calA$ and all
sufficiently large $n$,

$$
\Delta\big((x, f(x)),\, (\calA(1^n, f(x)), f(x))\big) \ge 1/p(n), \qquad x \getsr \bits^n,
$$

where $\Delta$ is statistical distance; equivalently, the statistical distance
between $\calA(1^n, y)$ and a uniform element of $f^{-1}(y)$, averaged over
$y = f(x)$, is at least $1/p(n)$ —
[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
The inverter receives $1^n$, as in $\Game^{\mathrm{pr}}$; without it a constant
$f$ qualifies, since an inverter given only $f(x)$ runs in time polynomial in
$|f(x)|$ and cannot output $n$ bits — standard.
[[owf-to-distributional-owf|Every one-way function is distributionally one-way]]
— folklore; conversely,
[[distributional-owf-to-owf-il89|distributional one-way functions yield one-way functions]]
— [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

### Sub-exponential one-wayness

A hash function $\hash$ is **sub-exponentially one-way** if there is a constant
$\varepsilon > 0$ such that for all sufficiently large $\secpar$, every
adversary $\calA$ of size at most $2^{\secpar^{\varepsilon}}$ has
$\Adv^{\mathrm{pr}}_{\hash,\calA}(\secpar) \le 2^{-\secpar^{\varepsilon}}$.

### Size-verifiable one-wayness

A one-way function $f$ is **size-verifiable** if the preimage-size problem $\{(y, s) : |f^{-1}(y)| = s\}$ lies in $\classAM$ — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]], [[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]]. It is _approximately_ size-verifiable, a weaker condition, if the promise problem with yes-instances $(y, s, 1^a)$ such that $|f^{-1}(y)| \le s$ and no-instances $(y, s, 1^a)$ such that $|f^{-1}(y)| > (1 + 1/a)s$ lies in $\classAM$ — [[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]]. A [[one-way-permutation|one-way permutation]] is size-verifiable, since every $y \in \bits^n$ has exactly one preimage — standard. [[size-verifiable-owf-to-owf|A size-verifiable one-way function is a one-way function]].

### Collision resistance

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cr}}_{\hash,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$
\State $(\hat{x}_0, \hat{x}_1) \gets \calA(1^\secpar, k)$
\Return $[\hash(k,\hat{x}_0) = \hash(k,\hat{x}_1) \wedge \hat{x}_0 \neq \hat{x}_1]$
\end{algorithmic}
\end{algorithm}
```

A compressing family $\hash$ with $\calD = \bits^{n(\secpar)}$ and
$\calR = \bits^{m(\secpar)}$, $m(\secpar) < n(\secpar) \le \poly(\secpar)$, is **collision
resistant**, a **collision-resistant hash function (CRHF)**, if for every
efficient $\calA,$

$$
\Adv^{\mathrm{cr}}_{\hash,\calA}(\secpar) :=
\Pr\!\left[\Game^{\mathrm{cr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible. Compression is part of the definition because without it the
notion is trivial: the identity has no collisions. A family on other finite
sets, such as $\ZZ_q^k$, is read through binary encodings: its inputs are
$2^{n(\secpar)}$ elements of its domain, efficiently indexed by
$\bits^{n(\secpar)}$, and its outputs are written as integers below $|\calR|$.
These fit in $n(\secpar) - 1$ bits exactly when $|\calR| \le 2^{n(\secpar) - 1}$,
which is then the compression condition; $|\calR| < 2^{n(\secpar)}$ does not
suffice.

The family is keyed because a single compressing function has a collision
$(x_0, x_1)$, and the adversary with that pair hard-wired in outputs it in time
linear in its length and wins with probability $1$, whether or not anyone can
write it down — [[Rog06 - Formalizing Human Ignorance|Rog06]]. Against uniform
adversaries no key is needed: Rog06 defines collision resistance of an unkeyed
family indexed by its output length (Section 8), and states results about a
single unkeyed function as explicitly given reductions to finding its
collisions. TODO: attribute the keyed definition (Dam87 is unread).

Collision resistance requires $m(\secpar) = \omega(\log \secpar)$. Otherwise
there is a constant $c$ with $2^{m(\secpar)} \le \secpar^c$ for infinitely many
$\secpar$, and for those $\secpar$ the adversary that evaluates
$\hash(k, \cdot)$ on $2^{m(\secpar)} + 1$ distinct inputs outputs a collision
with probability $1$, by pigeonhole, in polynomial time — standard. The
generic birthday attack evaluates $\hash(k, \cdot)$ at about $2^{m/2}$ uniform
inputs and finds a collision with constant probability
([[birthday-bound#Generic collision attack|birthday bound]]) — standard.

The amount of compression is immaterial. For a family
$h(k, \cdot) : \bits^{m+1} \to \bits^m$ and a polynomial $p > m$, the
fixed-length iteration
$\hash(k, x) := y_{p-m}$, with $y_0 := x_1 \cdots x_m$ and
$y_i := h(k, x_{m+i} \,\|\, y_{i-1})$, maps $\bits^{p}$ to $\bits^{m}$, and a
collision of $\hash(k, \cdot)$ yields one of $h(k, \cdot)$ at the last step at
which the two computations differ in their input — standard (TODO: check
whether Dam89 states this case; it is unread). The iteration with a length
block extends a CRHF to inputs of every length
([[#Merkle–Damgård iteration|Merkle–Damgård iteration]]).

Collision resistance implies
[[crhf-to-second-preimage-resistance-rs04|second-preimage resistance]] and
[[crhf-to-uowhf-rs04|target collision resistance]] with no loss —
[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]];
it implies [[crhf-to-weak-owf|weak one-wayness]], and one-wayness when
$n(\secpar) - m(\secpar) = \omega(\log \secpar)$ — folklore.

### Arbitrary-length collision resistance

An **arbitrary-length** family has domain $\calD = \bits^*$ and range
$\calR = \bits^{m(\secpar)}$ with $m(\secpar) \le \poly(\secpar)$, and
$\hash_\secpar(k, x)$ is computable from $(1^\secpar, k, x)$ in time polynomial
in $\secpar$ and $|x|$; the bound $\calD_\secpar \subseteq \bits^{\le p(\secpar)}$
and the uniform sampler of § Syntax are dropped. It is an **arbitrary-length
CRHF** if for all efficient $\calA$, $\Adv^{\mathrm{cr}}_{\hash,\calA}(\secpar)$,
defined by $\Game^{\mathrm{cr}}_{\hash,\calA}$ above, is negligible. An efficient
$\calA$ outputs strings of length polynomial in $\secpar$, so the game asks for
collisions of polynomial length only. Its restriction to $\bits^{m(\secpar)+1}$ is a CRHF
([[arbitrary-length-crhf-to-crhf|Arbitrary-length CRHF ⇒ CRHF]]) — folklore.

#### Merkle–Damgård iteration

Let $h(k, \cdot) : \bits^{b+m} \to \bits^m$ be a keyed family with
$b = b(\secpar) \ge 1$. Merkle–Damgård strengthening pads $x \in \bits^*$ to
$x \,\|\, \mathrm{pad}(x)$ with
$\mathrm{pad}(x) := 0^{r} \,\|\, \langle |x| \bmod 2^b \rangle_b$, where $r \ge 0$
is least such that $b$ divides $|x| + r$ and $\langle \cdot \rangle_b$ is the
$b$-bit binary encoding. Write $x \,\|\, \mathrm{pad}(x) = x_1 \cdots x_\ell$
with each $x_i \in \bits^b$. With the fixed initial value $0^m$, the iterated
family has the key generation of $h$ and

$$
\hash(k, x) := y_\ell, \qquad y_0 := 0^m, \quad y_i := h(k, x_i \,\|\, y_{i-1}) \text{ for } 1 \le i \le \ell.
$$

A collision $(x, x')$ of $\hash(k, \cdot)$ with $|x|, |x'| < 2^b$ yields a
collision of $h(k, \cdot)$ under the same key: the collision finder runs the
adversary on $k$, evaluates $\hash(k, \cdot)$ on its two outputs, and returns
the inputs of the last compression call at which the two chains differ in their
input but agree in their output —
[[Rog06 - Formalizing Human Ignorance|Rog06]] (Theorem 4). If
$b(\secpar) = \omega(\log \secpar)$, this makes $\hash$ an arbitrary-length CRHF
whenever $h$ is a CRHF, and the fixed-length iteration of § Collision
resistance first raises any compression to $b(\secpar) \ge \secpar$
([[crhf-to-arbitrary-length-crhf|CRHF ⇒ arbitrary-length CRHF (Merkle–Damgård)]]).
Merkle and Damgård each showed that a suitable iteration of a
collision-resistant function with a fixed domain is collision resistant on an
enlarged domain —
[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]
(Appendix A). TODO: cite [[Mer89b - One Way Hash Functions and DES|Mer89b]]
and [[Dam89 - A Design Principle for Hash Functions|Dam89]] directly; both are
unread.

The iterated family has the **length-extension** property: for all
$x, z \in \bits^*$, $\hash(k, x \,\|\, \mathrm{pad}(x) \,\|\, z)$ is computed
from $k$, $\hash(k, x)$, $|x|$ and $z$, without $x$. Since
$|x \,\|\, \mathrm{pad}(x)|$ is a multiple of $b$, the padded form of
$x \,\|\, \mathrm{pad}(x) \,\|\, z$ begins with the blocks $x_1, \ldots, x_\ell$,
so its chain passes through $y_\ell = \hash(k, x)$ and continues over the blocks
of $z \,\|\, \mathrm{pad}(x \,\|\, \mathrm{pad}(x) \,\|\, z)$, which depend on
$x$ only through $|x|$ — standard. It makes the secret-prefix MAC
$\hash(k, K \,\|\, x)$ forgeable after one query ([[no-crhf-to-mac-secret-prefix|No fixed-construction reduction from CRHF to MAC (secret-prefix MAC)]]).

### Second-preimage resistance

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{spr}}_{\hash,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$ ; $x \getsr \calD$
\State $\hat{x} \gets \calA(1^\secpar, k, x)$
\Return $[\hash(k,\hat{x}) = \hash(k,x) \wedge \hat{x} \neq x]$
\end{algorithmic}
\end{algorithm}
```

A family $\hash$ that compresses as in the CRHF definition, from
$\calD = \bits^{n(\secpar)}$ to $\calR = \bits^{m(\secpar)}$ with
$m(\secpar) < n(\secpar) \le \poly(\secpar)$ or on other finite sets through the
same binary encodings, is **second-preimage resistant** if for all efficient
$\calA$,

$$
\Adv^{\mathrm{spr}}_{\hash,\calA}(\secpar) :=
\Pr\!\left[\Game^{\mathrm{spr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible. This is the notion Sec of
[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]];
in [[#Target collision resistance (universal one-wayness)|target collision resistance]]
the adversary chooses $x$ before the key instead. Without compression the
notion is trivial: the identity has no second preimages —
[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].
It follows from
[[crhf-to-second-preimage-resistance-rs04|collision resistance]] and from
[[uowhf-to-second-preimage-resistance-rs04|target collision resistance]] with
no loss, and it implies
[[second-preimage-resistance-to-weak-owf-rs04|weak one-wayness]], with an
additive loss of $|\calR|/|\calD|$ and a factor $2$ —
[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].

#### Length-halving second-preimage resistance

A **length-halving second-preimage-resistant** family is a
second-preimage-resistant family
$\hash : \calK \times \bits^{2m(\secpar)} \to \bits^{m(\secpar)}$, for a
polynomially bounded $m = m(\secpar) \ge 1$ computable from $1^\secpar$ in
polynomial time; it compresses since $m < 2m$, and the computability of $m$
gives the uniform sampler of § Syntax. As an object, length-halving
second-preimage resistance denotes such a family for some such $m$. It meets
the definition above with input length $2m$
([[length-halving-second-preimage-resistance-to-second-preimage-resistance|Length-halving second-preimage resistance ⇒ Second-preimage resistance]])
— folklore, and restricting an
[[#Arbitrary-length collision resistance|arbitrary-length CRHF]] with range
$\bits^m$ to $\bits^{2m}$ gives one with no loss
([[arbitrary-length-crhf-to-length-halving-second-preimage-resistance|Arbitrary-length CRHF ⇒ Length-halving second-preimage resistance]])
— [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]].
An input is the concatenation of two outputs, which is how a hash tree hashes
the two children of a node: the function $H$ of
[[hash-function-to-hash-based-signatures|XMSS]] maps $2n$-byte strings to
$n$-byte strings under $n$-byte keys —
[[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Section 4.1.2).

Second-preimage resistance forces $m(\secpar) = \omega(\log \secpar)$. For
each key, two independent uniform inputs have the same image with probability
at least $1/|\calR| = 2^{-m}$, by the Cauchy–Schwarz inequality, and are equal
with probability $2^{-2m}$, so the adversary that outputs a uniform
$\hat{x} \getsr \calD$ wins with probability at least
$2^{-m} - 2^{-2m} \ge 2^{-m-1}$. If $m(\secpar) \ne \omega(\log \secpar)$,
there is a constant $c$ with $m(\secpar) \le c \log_2 \secpar$ for infinitely
many $\secpar$, and for those $\secpar$ this is at least $\secpar^{-c}/2$, so
the advantage is not negligible — standard.

#### Same-width SPR hash and PRF

A **same-width SPR hash and PRF** is a pair $(\hash, f)$ of a
[[#Length-halving second-preimage resistance|length-halving second-preimage-resistant]]
family $\hash : \calK \times \bits^{2n} \to \bits^{n}$ and a
[[pseudorandom-function#compression-function-prfs|compression-function PRF]]
$f : \bits^{n} \times \bits^{b} \to \bits^{n}$ with $n \le b$ and key
generation uniform on $\bits^n$, for one polynomially bounded
$n = n(\secpar) = \omega(\log \secpar)$ and a polynomially bounded
$b = b(\secpar)$, both computable from $1^\secpar$ in polynomial time. As an
object, it denotes such a pair for some such $n$. A length-halving family of
width $m$ and a compression-function PRF of width $c \ne m$ each meet their own
definitions, but a tree that hashes pairs of $c$-bit PRF outputs with a
function on $2m$-bit inputs is not defined. For $m = 2\secpar$ and
$c = 2\secpar + 1$, two $c$-bit values give $4\secpar + 2$ bits where the hash
takes $4\secpar$ — standard. Each component meets its own definition
([[same-width-spr-and-prf-to-length-halving-second-preimage-resistance|Same-width SPR hash and PRF ⇒ Length-halving second-preimage resistance]],
[[same-width-spr-and-prf-to-compression-function-prf|Same-width SPR hash and PRF ⇒ Compression-function PRF]])
— folklore. XMSS uses its keyed functions at one width
([[hash-function-to-hash-based-signatures|SPR hash + PRF ⇒ Stateful DS (XMSS)]])
— [[HBG+18 - XMSS eXtended Merkle Signature Scheme|HBG+18]] (Sections 3.1.1.1,
3.1.2 and 4.1.2).

### Target collision resistance (universal one-wayness)

The adversary commits to a target input before the key is sampled, then must
find a second input colliding with it.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{tcr}}_{\hash,\calA}(\secpar)$}
\begin{algorithmic}
\State $(x, \st) \gets \calA_1(1^\secpar)$
\Comment{$\calA_1$ outputs $x \in \calD$ before seeing the key}
\State $k \gets \KeyGen(1^\secpar)$
\State $\hat{x} \gets \calA_2(\st, k)$
\Return $[\hash(k,\hat{x}) = \hash(k,x) \wedge \hat{x} \neq x]$
\end{algorithmic}
\end{algorithm}
```

A family $\hash$ that compresses as in the CRHF definition, from
$\calD = \bits^{n(\secpar)}$ to $\calR = \bits^{m(\secpar)}$ with
$m(\secpar) < n(\secpar) \le \poly(\secpar)$ or on other finite sets through the same binary
encodings, is a **universal one-way hash function (UOWHF)**, or **target
collision resistant**, if for all efficient
$\calA = (\calA_1, \calA_2)$,

$$
\Adv^{\mathrm{tcr}}_{\hash,\calA}(\secpar) :=
\Pr\!\left[\Game^{\mathrm{tcr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
[[crhf-to-uowhf-rs04|Collision resistance implies target collision resistance]]
— [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]. As for CRHFs,
$|\calR| < |\calD|$ does not suffice. Take $\calD = \{0, \ldots, N-1\}$ and
the fixed $\calR = \{0, \ldots, N-2\}$ for $N = 2^n$, key $k = (a, b)$ a
uniform pair of distinct elements of $\calD$, and let
$\rho_b : \calD \setminus \{b\} \to \calR$ be the order-preserving bijection,
$\rho_b(x) = x$ for $x < b$ and $\rho_b(x) = x - 1$ for $x > b$. The map with
$\hash(k, b) = \rho_b(a)$ and $\hash(k, x) = \rho_b(x)$ for $x \ne b$ has
$\{a, b\}$ as its only collision, so it is target collision resistant with no
assumption: the committed target lies in $\{a, b\}$ with probability exactly
$2/N$ — standard.

### Weak collision resistance

The key is secret: the adversary sees $\hash(k, \cdot)$ only through an oracle.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{wcr}}_{\hash,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$
\State $\calO(x) := \hash(k, x)$
\State $(\hat{x}_0, \hat{x}_1) \gets \calA^{\calO}(1^\secpar)$
\Comment{$\calA$ never sees $k$}
\Return $[\hash(k,\hat{x}_0) = \hash(k,\hat{x}_1) \wedge \hat{x}_0 \neq \hat{x}_1]$
\end{algorithmic}
\end{algorithm}
```

A family $\hash$ that is either compressing, as in the CRHF definition, or
[[#Arbitrary-length collision resistance|arbitrary-length]], with
$\calD = \bits^*$, is **weakly collision resistant** if for all efficient
$\calA$,

$$
\Adv^{\mathrm{wcr}}_{\hash,\calA}(\secpar) :=
\Pr\!\left[\Game^{\mathrm{wcr}}_{\hash,\calA}(\secpar) = 1\right]
$$

is negligible. [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]]
(Definition 3.1) give the notion in concrete form, for an iterated hash function
keyed by a secret initial value, against adversaries bounded in time and in the
number and length of their queries, and note that it is weaker than collision
resistance. An adversary given $k$ answers the oracle queries itself, so
[[crhf-to-weakly-collision-resistant-hash|every CRHF]] is weakly collision
resistant — folklore. Weak collision resistance fails for MD5 and SHA-1 as
iterated hash functions keyed by their initial value —
[[Bel06 - New Proofs for NMAC and HMAC Security without Collision-Resistance|Bel06]].
[[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]
list "weak collision resistance" as Merkle's name for
[[#Second-preimage resistance|second-preimage resistance]], a different notion.

#### Arbitrary-length weak collision resistance

An **arbitrary-length weakly collision-resistant** family is an
[[#Arbitrary-length collision resistance|arbitrary-length]] family
$\hash : \calK \times \bits^* \to \bits^{m(\secpar)}$ that is weakly collision
resistant, the second case of the definition above; an efficient $\calA$
queries and outputs strings of polynomial length only. As an object, an
arbitrary-length weakly collision-resistant hash denotes such a family. It is
one of the families the definition above admits
([[arbitrary-length-weakly-collision-resistant-hash-to-weakly-collision-resistant-hash|Arbitrary-length weakly collision-resistant hash ⇒ Weakly collision-resistant hash]])
— folklore, and an adversary given $k$ answers the oracle queries itself, so
every arbitrary-length CRHF is one
([[arbitrary-length-crhf-to-weakly-collision-resistant-hash|Arbitrary-length CRHF ⇒ Arbitrary-length weakly collision-resistant hash]])
— folklore. NMAC is a MAC on $\bits^*$ if its outer compression function,
keyed by its chaining input, is a MAC on its fixed input length and its inner
keyed iteration, a family on $\bits^*$, is weakly collision resistant
([[suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96|Fixed-length SUF-CMA MAC + arbitrary-length weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)]])
— [[BCK96 - Keying Hash Functions for Message Authentication|BCK96]]
(Theorem 4.1).

### Distributional collision resistance

TODO: definition and game.

# Other results

- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]]
- [[hash-function-and-hash-based-signatures-to-ds-mer89|Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)]]
- [[owp-to-hash-function|OWP ⇒ OWF]]
- [[crhf-to-second-preimage-resistance-rs04|CRHF ⇒ Second-preimage resistance]], [[crhf-to-uowhf-rs04|CRHF ⇒ UOWHF]], [[uowhf-to-second-preimage-resistance-rs04|UOWHF ⇒ Second-preimage resistance]] and [[second-preimage-resistance-to-weak-owf-rs04|Second-preimage resistance ⇒ Weak OWF]] — [[RS04 - Cryptographic Hash-Function Basics Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance|RS04]]
- [[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]] — [[Rog06 - Formalizing Human Ignorance|Rog06]]
- [[chameleon-hash-function|Chameleon hash functions]] are randomized collision-resistant hash functions whose trapdoor lets its holder find collisions — [[KR00 - Chameleon Signatures|KR00]].
- [[no-np-to-hash-function-aggm06|No non-adaptive reduction from NP to inverting a one-way function unless coNP ⊆ AM]] — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]]
- An explicit function, the direct product of [[universal-one-way-function|Levin's universal one-way function]], is one-way if and only if a one-way function exists — [[Lev85 - One-Way Functions and Pseudorandom Generators|Lev85]]

## Unknown results

- Whether one-way functions imply collision-resistant hash functions is open. No relativizing construction exists, even from one-way permutations ([[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]) — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].

<!-- BEGIN GENERATED participates-in bdb163bd3db9 -->

## Participates in

**Builds on Hash function**

- [[arbitrary-length-crhf-and-ds-fixed-length-to-ds-arbitrary-length-rog06|Arbitrary-length CRHF + fixed-length DS ⇒ DS for arbitrary-length messages (hash-then-sign)]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[arbitrary-length-crhf-to-crhf|Arbitrary-length CRHF ⇒ CRHF]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[arbitrary-length-crhf-to-length-halving-second-preimage-resistance|Arbitrary-length CRHF ⇒ Length-halving second-preimage resistance]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[arbitrary-length-crhf-to-weakly-collision-resistant-hash|Arbitrary-length CRHF ⇒ Arbitrary-length weakly collision-resistant hash]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[arbitrary-length-weakly-collision-resistant-hash-to-weakly-collision-resistant-hash|Arbitrary-length weakly collision-resistant hash ⇒ Weakly collision-resistant hash]] (via [[hash-function#arbitrary-length-weak-collision-resistance|Arbitrary-length weak collision resistance]])
- [[crhf-to-accumulator|Arbitrary-length CRHF ⇒ accumulator]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-constant-round-non-malleable-commitment-pr05|CRHF ⇒ Constant-round NM commitment (Pass–Rosen)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-interactive-succinct-argument-kil92|Arbitrary-length CRHF ⇒ Succinct arguments for NP (Kilian)]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[crhf-to-second-preimage-resistance-rs04|CRHF ⇒ Second-preimage resistance]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-statistically-hiding-commitment-dpp97|Arbitrary-length CRHF ⇒ Statistically hiding COM]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[crhf-to-uowhf-rs04|CRHF ⇒ UOWHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-weak-owf|CRHF ⇒ Weak OWF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[crhf-to-weakly-collision-resistant-hash|CRHF ⇒ Weakly collision-resistant hash]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[czk-to-ip-bgg-90|Non-uniform OWF + IP ⇒ CZK]] (via [[hash-function#one-wayness-against-non-uniform-adversaries|One-wayness against non-uniform adversaries]])
- [[ddh-and-uowhf-to-pke-cca2-security-cs98|DDH + UOWHF ⇒ CCA-secure PKE (Cramer–Shoup)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[distributional-owf-to-owf-il89|Distributional OWF ⇒ OWF (Impagliazzo–Luby)]] (via [[hash-function#distributional-one-wayness|Distributional one-wayness]])
- [[factoring-blum-integers-and-uowhf-to-pke-cca2-security-hk09|Factoring + UOWHF ⇒ CCA-secure PKE (Hofheinz–Kiltz)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[hash-function-and-hash-based-signatures-to-ds-mer89|Arbitrary-length CRHF + One-time signature ⇒ Stateful DS (Merkle)]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-ds-sw14|OWF + iO ⇒ Selectively unforgeable DS]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-and-io-to-pke-sw14|OWF + iO ⇒ PKE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-czk|Non-uniform OWF ⇒ CZK]] (via [[hash-function#one-wayness-against-non-uniform-adversaries|One-wayness against non-uniform adversaries]])
- [[hash-function-to-ds|OWF ⇒ DS]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-hash-based-signatures|SPR hash + PRF ⇒ Stateful DS (XMSS)]] (via [[hash-function#same-width-spr-hash-and-prf|Same-width SPR hash and PRF]])
- [[hash-function-to-hash-based-signatures-lam79|OWF ⇒ One-time signatures (Lamport)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-secret-key-pir-sk-pir-bm26|OWF ⇒ Secret-Key PIR (SK-PIR)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[hash-function-to-zkp-gmw91|Non-uniform OWF ⇒ ZKP]] (via [[hash-function#one-wayness-against-non-uniform-adversaries|One-wayness against non-uniform adversaries]])
- [[io-and-owf-to-multi-party-nike-bz14|iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[length-halving-second-preimage-resistance-to-second-preimage-resistance|Length-halving second-preimage resistance ⇒ Second-preimage resistance]] (via [[hash-function#length-halving-second-preimage-resistance|Length-halving second-preimage resistance]])
- [[non-uniform-owf-to-owf|Non-uniform OWF ⇒ OWF]] (via [[hash-function#one-wayness-against-non-uniform-adversaries|One-wayness against non-uniform adversaries]])
- [[ot-and-owf-to-ot-extension-bea96|OT + OWF ⇒ OT extension (Beaver)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-and-io-to-fe-wat15|OWF + iO ⇒ FE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-client-preprocessing-pir-zpzs24|OWF ⇒ PIR with client preprocessing (Piano)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-concurrent-zk-argument-prs02|OWF ⇒ Concurrent ZK arguments for NP in ω(log n) rounds]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-constant-round-non-malleable-commitment-lp11-goy11|OWF ⇒ Constant-round NM commitment (Lin–Pass, Goyal)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-distributional-owf|OWF ⇒ Distributional OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-four-message-zk-argument-bjy97|OWF ⇒ Four-message ZK arguments for NP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-garbled-ram-glo15|OWF ⇒ garbled RAM (black-box)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-language-model-watermarking-cgz24|OWF ⇒ Watermarking]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-non-malleable-commitment-ddn91|OWF ⇒ NM commitment (Dolev–Dwork–Naor)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-np|OWF inversion ∈ NP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-prg-hill99|OWF ⇒ PRG]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-prs-jls18|Quantum-secure OWF ⇒ PRS]] (via [[hash-function#quantum-secure-one-wayness|Quantum-secure one-wayness]])
- [[owf-to-owsg|Quantum-secure OWF ⇒ OWSG]] (via [[hash-function#quantum-secure-one-wayness|Quantum-secure one-wayness]])
- [[owf-to-statistical-zk-argument-nov06|OWF ⇒ Statistical ZK arguments for NP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ Statistically hiding COM (Haitner–Reingold)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-uowhf-rom90|OWF ⇒ UOWHF (Rompel)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-witness-indistinguishable-proof-fs90|OWF ⇒ Constant-round WI proofs for NP (Feige–Shamir)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-zkp-ikos07|OWF ⇒ ZKP (MPC in the head)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[post-quantum-owf-to-nonadaptive-post-quantum-ds-ac12|Quantum-secure OWF ⇒ Nonadaptive post-quantum DS]] (via [[hash-function#quantum-secure-one-wayness|Quantum-secure one-wayness]])
- [[quantum-secure-owf-to-owf|Quantum-secure OWF ⇒ OWF]] (via [[hash-function#quantum-secure-one-wayness|Quantum-secure one-wayness]])
- [[same-width-spr-and-prf-to-compression-function-prf|Same-width SPR hash and PRF ⇒ Compression-function PRF]] (via [[hash-function#same-width-spr-hash-and-prf|Same-width SPR hash and PRF]])
- [[same-width-spr-and-prf-to-length-halving-second-preimage-resistance|Same-width SPR hash and PRF ⇒ Length-halving second-preimage resistance]] (via [[hash-function#same-width-spr-hash-and-prf|Same-width SPR hash and PRF]])
- [[second-preimage-resistance-to-weak-owf-rs04|Second-preimage resistance ⇒ Weak OWF]] (via [[hash-function#second-preimage-resistance|Second-preimage resistance]])
- [[semi-honest-security-and-owf-to-mpc-gmw87|Semi-honest MPC + OWF ⇒ MPC (GMW compiler)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[size-verifiable-owf-to-owf|Size-verifiable OWF ⇒ OWF]] (via [[hash-function#size-verifiable-one-wayness|Size-verifiable one-wayness]])
- [[snark-and-crhf-to-fully-succinct-snark-bcct13|SNARK + CRHF ⇒ Fully succinct SNARK (bootstrapping)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[snark-to-nizk|Sublinear SNARG + OWF ⇒ NIZK argument]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[strong-rsa-to-ds|Strong RSA + CRHF ⇒ DS]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[subexponential-io-and-owf-to-tdp-bpw16|Sub-exponential iO + Sub-exponential OWF ⇒ TDP (Bitansky–Paneth–Wichs)]] (via [[hash-function#sub-exponential-one-wayness|Sub-exponential one-wayness]])
- [[subexponential-owf-to-owf|Sub-exponential OWF ⇒ OWF]] (via [[hash-function#sub-exponential-one-wayness|Sub-exponential one-wayness]])
- [[suf-cma-mac-and-weakly-collision-resistant-hash-to-arbitrary-length-suf-cma-mac-bck96|Fixed-length SUF-CMA MAC + arbitrary-length weakly collision-resistant hash ⇒ arbitrary-length SUF-CMA MAC (NMAC)]] (via [[hash-function#arbitrary-length-weak-collision-resistance|Arbitrary-length weak collision resistance]])
- [[uowhf-and-ots-to-ds-ny89|UOWHF + One-time signature ⇒ DS (Naor–Yung)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[uowhf-to-second-preimage-resistance-rs04|UOWHF ⇒ Second-preimage resistance]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[weak-owf-to-distributional-owf|Weak OWF ⇒ Distributional OWF]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])
- [[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF (Yao)]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])

**Produces Hash function**

- [[additively-homomorphic-encryption-to-crhf-iko05|Additively homomorphic encryption ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[arbitrary-length-crhf-to-crhf|Arbitrary-length CRHF ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[arbitrary-length-crhf-to-length-halving-second-preimage-resistance|Arbitrary-length CRHF ⇒ Length-halving second-preimage resistance]] (via [[hash-function#length-halving-second-preimage-resistance|Length-halving second-preimage resistance]])
- [[arbitrary-length-crhf-to-weakly-collision-resistant-hash|Arbitrary-length CRHF ⇒ Arbitrary-length weakly collision-resistant hash]] (via [[hash-function#arbitrary-length-weak-collision-resistance|Arbitrary-length weak collision resistance]])
- [[arbitrary-length-weakly-collision-resistant-hash-to-weakly-collision-resistant-hash|Arbitrary-length weakly collision-resistant hash ⇒ Weakly collision-resistant hash]] (via [[hash-function#weak-collision-resistance|Weak collision resistance]])
- [[claw-free-permutations-to-crhf-dam87|Claw-free permutations ⇒ CRHF (Damgård)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[coin-flipping-to-owf-il89|Coin flipping ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[com-to-owf-il89|COM ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[constant-bias-coin-flipping-to-owf-ho11|Constant-bias coin flipping ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[cpir-to-crhf-iko05|One-round sublinear cPIR ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[cpir-to-owf-bikm99|Non-trivial cPIR ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]] (via [[hash-function#arbitrary-length-collision-resistance|Arbitrary-length collision resistance]])
- [[crhf-to-second-preimage-resistance-rs04|CRHF ⇒ Second-preimage resistance]] (via [[hash-function#second-preimage-resistance|Second-preimage resistance]])
- [[crhf-to-uowhf-rs04|CRHF ⇒ UOWHF]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[crhf-to-weak-owf|CRHF ⇒ Weak OWF]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])
- [[crhf-to-weakly-collision-resistant-hash|CRHF ⇒ Weakly collision-resistant hash]] (via [[hash-function#weak-collision-resistance|Weak collision resistance]])
- [[czk-hardness-to-owf-ow93|Average-case-hard CZK ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[distributional-owf-to-owf-il89|Distributional OWF ⇒ OWF (Impagliazzo–Luby)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[dlog-to-crhf-cvhp91|DLOG ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[dlog-to-owf|DLOG ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ds-to-hash-function|DS ⇒ Distributional OWF]] (via [[hash-function#distributional-one-wayness|Distributional one-wayness]])
- [[identification-scheme-to-owf-il89|ID ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[injective-one-way-function-to-owf|Injective OWF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[injective-one-way-function-to-uowhf-yglw15|Injective OWF ⇒ UOWHF]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[io-and-np-not-in-io-bpp-to-owf-kmnpry14|iO + NP ⊄ io-BPP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[kt-mild-average-case-hardness-to-owf-lp20|Mild average-case hardness of Kᵗ ⇔ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[length-halving-second-preimage-resistance-to-second-preimage-resistance|Length-halving second-preimage resistance ⇒ Second-preimage resistance]] (via [[hash-function#second-preimage-resistance|Second-preimage resistance]])
- [[lossy-trapdoor-function-to-crhf-pw08|Highly lossy TDF ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[module-sis-to-crhf|Module-SIS ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[noise-level-to-hash-function-blvw19|Low-noise LPN ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[non-uniform-owf-to-owf|Non-uniform OWF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owf-to-distributional-owf|OWF ⇒ Distributional OWF]] (via [[hash-function#distributional-one-wayness|Distributional one-wayness]])
- [[owf-to-uowhf-rom90|OWF ⇒ UOWHF (Rompel)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[owp-to-hash-function|OWP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[owp-to-size-verifiable-owf|OWP ⇒ Size-verifiable OWF]] (via [[hash-function#size-verifiable-one-wayness|Size-verifiable one-wayness]])
- [[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[pke-to-hash-function|PKE ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[post-quantum-injective-owf-to-quantum-secure-owf|Post-quantum injective OWF ⇒ Quantum-secure OWF]] (via [[hash-function#quantum-secure-one-wayness|Quantum-secure one-wayness]])
- [[prf-to-owf|PRF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[prg-to-hash-function|PRG ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[quantum-secure-owf-to-owf|Quantum-secure OWF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ring-sis-to-crhf-lm06|Ring-SIS ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[same-width-spr-and-prf-to-length-halving-second-preimage-resistance|Same-width SPR hash and PRF ⇒ Length-halving second-preimage resistance]] (via [[hash-function#length-halving-second-preimage-resistance|Length-halving second-preimage resistance]])
- [[second-preimage-resistance-to-weak-owf-rs04|Second-preimage resistance ⇒ Weak OWF]] (via [[hash-function#weak-one-wayness|Weak one-wayness]])
- [[secret-based-quantum-money-mini-scheme-to-owf-ac12|Secret-based mini-scheme with classical serial numbers ⇒ OWF]] (via [[hash-function#quantum-secure-one-wayness|Quantum-secure one-wayness]])
- [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[size-verifiable-owf-to-owf|Size-verifiable OWF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[ske-to-owf-il89|SKE ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[subexponential-injective-owf-to-subexponential-owf|Sub-exponential injective OWF ⇒ Sub-exponential OWF]] (via [[hash-function#sub-exponential-one-wayness|Sub-exponential one-wayness]])
- [[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[subexponential-owf-to-owf|Sub-exponential OWF ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[subset-sum-to-owf|Subset sum ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[subset-sum-to-uowhf-in96|Subset sum at constant density above one ⇒ UOWHF]] (via [[hash-function#target-collision-resistance-universal-one-wayness|Target collision resistance (universal one-wayness)]])
- [[syndrome-decoding-to-owf|SD ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[szk-hardness-to-owf-ost91|Average-case-hard SZK ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[tdp-to-hash-function|TDP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[time-lock-puzzle-to-owf-bgj16|TLP ⇒ OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[uowhf-to-second-preimage-resistance-rs04|UOWHF ⇒ Second-preimage resistance]] (via [[hash-function#second-preimage-resistance|Second-preimage resistance]])
- [[weak-owf-to-distributional-owf|Weak OWF ⇒ Distributional OWF]] (via [[hash-function#distributional-one-wayness|Distributional one-wayness]])
- [[weak-owf-to-owf-yao82a|Weak OWF ⇒ OWF (Yao)]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]] (via [[hash-function#auxiliary-input-one-wayness|Auxiliary-input one-wayness]])

**Barriers**

- [[no-crhf-to-mac-secret-prefix|No fixed-construction reduction from CRHF to MAC (secret-prefix MAC)]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[no-crhf-to-szk-hardness-bd19|No fully-black-box reduction from CRHF to average-case-hard SZK]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-hash-function-to-ds-cgh98|No fixed-construction reduction from Hash function to DS (random-oracle instantiation)]]
- [[no-hash-function-to-pke-cca2-security-cgh98|No fixed-construction reduction from Hash function to CCA-secure PKE (random-oracle instantiation)]]
- [[no-hash-function-to-pke-gkm-00|No relativizing reduction from OWF to PKE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-hash-function-to-semantic-security-cgh98|No fixed-construction reduction from Hash function to semantically secure PKE (random-oracle instantiation)]]
- [[no-io-and-owf-to-owp-as16|No fully-black-box reduction from iO + OWF to domain-invariant OWP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-io-and-owp-to-crhf-as15|No fully-black-box reduction from iO + OWP to CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[no-np-to-hash-function-aggm06|No reduction from NP to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-np-to-size-verifiable-owf-bb15|No fully-black-box reduction from NP to size-verifiable OWF]] (via [[hash-function#size-verifiable-one-wayness|Size-verifiable one-wayness]])
- [[no-owf-to-four-message-zk-argument-hpv20|No fully-black-box reduction from OWF to four-message ZK arguments]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]]) — circumvented by [[owf-to-four-message-zk-argument-bjy97|OWF ⇒ Four-message ZK arguments for NP]]
- [[no-owf-to-ot-ir89|No relativizing reduction from OWF to OT]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owf-to-owp-rud88|No fully-black-box reduction from OWF to OWP]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owf-to-passive-sk-depir-lmw25|No fully-black-box reduction from OWF to passive-server SK-DEPIR]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]] (via [[hash-function#collision-resistance|Collision resistance]])
- [[no-ppad-hardness-and-owf-to-ke-rss17|No fully-black-box reduction from PPAD hardness + OWF to KE]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-ppad-hardness-to-owf-rss17|No fully-black-box reduction from PPAD hardness to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])
- [[no-prs-to-owf-kre21|No fully-black-box reduction from PRS to OWF]] (via [[hash-function#quantum-secure-one-wayness|Quantum-secure one-wayness]])
- [[no-single-copy-prs-to-owf-kqst23|No relativizing reduction from single-copy PRS to OWF]] (via [[hash-function#preimage-resistance-one-wayness|Preimage resistance (one-wayness)]])

<!-- END GENERATED participates-in -->
