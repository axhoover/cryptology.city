---
type: reduction
status: draft
title: "Secure channels ⇒ MPC with abort and honest majority ($t < n/2$) (CGH+18)"
aliases: []
id: red-secure-channels-to-honest-majority-with-abort-t-lt-n-over-2-cgh18
kind: implication
hypotheses: [secure-channels]
conclusion: honest-majority-with-abort-t-lt-n-over-2
class: free
model: standard
source:
  - "[[CGH+18 - Fast Large-Scale Honest-Majority MPC for Malicious Adversaries|CGH+18]]"
security-loss: ""
rationale:
  class: "The theorem is unconditional and information-theoretic in the secure-channels model, so there is no hardness assumption for a black-box reduction to break."
---

# Secure channels ⇒ MPC with abort and honest majority ($t < n/2$) (CGH+18)

## Statement

Over [[interactive-protocol#secure-channels|secure point-to-point channels]], every functionality given as an arithmetic circuit has an $n$-party protocol that is information-theoretically secure with abort against a malicious adversary corrupting any $t < n/2$ of the parties ([[secure-multi-party-computation#honest-majority-with-abort-t--n2|honest majority with abort]]). It does not achieve fairness: the adversary may receive its output while the honest parties do not. Its method for verifying that the adversary does not cheat costs about twice the semi-honest protocol in some settings, with variants for small and large fields instantiated from replicated and from Shamir secret sharing — [[CGH+18 - Fast Large-Scale Honest-Majority MPC for Malicious Adversaries|CGH+18]].

## Notes

- For three parties, one semi-honest corruption and Boolean circuits, the semi-honest protocol has each party send a single bit per AND gate and nothing for XOR gates — [[AFL+16 - High-Throughput Semi-Honest Secure Three-Party Computation with an Honest Majority|AFL+16]]; a modification of that protocol is secure against malicious adversaries — [[FLNW17 - High-Throughput Secure Three-Party Computation for Malicious Adversaries and an Honest Majority|FLNW17]].
- Every arithmetic circuit $C$ over $\FF$ compiles into a randomized circuit of size $O(|C|)$ on which the effect of any additive attack on the wires can be simulated, up to statistical distance $O(|C|/|\FF|)$, by an additive attack on its inputs and outputs, so running a passive-secure protocol whose active attacks are additive on the compiled circuit gives security against active adversaries — [[GIP+14 - Circuits Resilient to Additive Attacks with Applications to Secure Computation|GIP+14]].
- With guaranteed output delivery the threshold $t < n/2$ is reached over secure channels with a broadcast channel ([Secure channels ⇒ MPC with honest majority ($t < n/2$) (Rabin–Ben-Or)](honest-majority-t-lt-n-over-2-to-mpc-rb89)) — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].
