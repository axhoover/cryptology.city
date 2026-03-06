---
aliases:
  - PRG
title: PRG
---
# Pseudorandom generator
A Pseudorandom Generator (PRG) ...

## Syntax
A PRG $G$ is an pair of efficient algorithms $(\Gen,\Eval)$ using sets $\calK$ and $\calR$ with the syntax
and intended usage:
- $\Gen(1^{\secpar}) \to k,$ takes a security parameter $\secpar$
and outputs a key $k \in calK$
- $\Eval(k) \to r,$ takes a key $k \in \calK$ and outputs a generated value
$r \in \calR.$

## Properties

### Pseudorandomness


## Variations

### Trapdoor pseudorandom generators
A **trapdoor PRG** is is a tuple $G$ of efficient
algorithms $(\Gen, \Eval, \Invert)$ such that
- $\Gen(1^{\secpar}) \to (t,k),$ takes a security parameter $\secpar$
and outputs a trapdoor $t \in \calT$ and a key $k \in calK$,
- $\Eval(t,k) \to r,$ takes a trapdoor $t \in \calT$ and key $k \in \calK$,
and outputs a value $r \in \calR$,
- $\Invert(t,r) \to b,$ takes as input a trapdoor $t\in \calT$ and a value
$r \in \calR$ and outputs a bit $b \in \bits$ indicating whether the value
was generated pseudorandomly or not.

The pseudorandomness of a trapdoor PRG is equivalent to the pseudorandomness
of $(\Gen,\Eval)$ treated as a PRG with
keyspace $(\calK\times \calT).$ Beyond that, a trapdoor PRG should be
- $(1-\varepsilon)$-**complete**: meaning $k \in \calK,$
$$
    \Pr[\Invert(t, \Eval(t,k)) = 1 : (t,k) \getsr \Gen(1^{\secpar})] \ge 1 - \varepsilon,
$$
- $(1-\delta)$-**sound**: for all $t \in \calT,$
$$
    \Pr[\Invert(t,r) = 0 : r \getsr \calR] \ge 1 - \delta.
$$

Note that a [[Pseudorandom error-correcting code|
zero-bit Pseudorandom Code]] can be viewed as a trapdoor pseudorandom
generator with the additional property that its completeness is actually 
robust to noise.