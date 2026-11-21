---
type: reference
status: stub
title: "RR21"
source: https://eprint.iacr.org/2021/749
authors: Mike Rosulek, Lawrence Roy
venue: CRYPTO 2021
published: 2021
aliases:
  - RR21
cryptobib_key: C:RosRoy21
---

# [RR21] Three Halves Make a Whole? Beating the Half-Gates Lower Bound for Garbled Circuits

**Authors:** Mike Rosulek, Lawrence Roy | **Venue:** CRYPTO 2021 | [Source](https://eprint.iacr.org/2021/749)

## Abstract

We describe a garbling scheme for boolean circuits, in which XOR gates are free and AND gates require communication of $1.5\kappa + 5$ bits. This improves over the state-of-the-art "half-gates" scheme of Zahur, Rosulek, and Evans (Eurocrypt 2015), in which XOR gates are free and AND gates cost $2\kappa$ bits. The half-gates paper proved a lower bound of $2\kappa$ bits per AND gate, in a model that captured all known garbling techniques at the time. We bypass this lower bound with a novel technique that we call slicing and dicing, which involves slicing wire labels in half and operating separately on those halves. Ours is the first to bypass the lower bound while being fully compatible with free-XOR, making it a drop-in replacement for half-gates. Our construction is proven secure from a similar assumption to prior free-XOR garbling (circular correlation-robust hash), and uses only slightly more computation than half-gates.
