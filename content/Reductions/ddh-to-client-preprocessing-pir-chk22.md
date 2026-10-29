---
type: reduction
status: draft
title: "DDH ⇒ PIR with client preprocessing (CHK22)"
aliases: []
id: red-ddh-to-client-preprocessing-pir-chk22
kind: implication
hypotheses: [ddh]
conclusion: client-preprocessing-pir
class: unstated
model: standard
source:
  - "[[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]]"
security-loss: ""
rationale:
  class: "The conclusion carries an efficiency requirement, sublinear amortized server time after client preprocessing, that lies outside the RTV04 axes."
---

# DDH ⇒ PIR with client preprocessing (CHK22)

## Statement

If [[decisional-diffie-hellman|DDH]] is hard, there is a single-server [PIR with client preprocessing](single-server-private-information-retrieval#pir-with-client-preprocessing) that answers adaptively chosen queries in sublinear amortized server time with sublinear additional client storage and no server storage beyond the database: the client first fetches a hint, which costs the server time linear in $n$, and then makes a bounded number of adaptive queries, each answered in sublinear time; over at least $n^{1/4}$ queries the amortized server time is $n^{3/4}$, the communication $n^{1/2}$ and the client storage $n^{3/4}$, up to factors polynomial in $\secpar$ and logarithmic in $n$ — [[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]].

## Notes

- The construction uses linearly homomorphic encryption, which CHK22 also instantiate under [[quadratic-residuosity|QR]] ([[qr-to-client-preprocessing-pir-chk22|QR ⇒ PIR with client preprocessing]]), [[decisional-composite-residuosity|DCR]] and [[learning-with-errors|LWE]] — [[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]].
- From fully homomorphic encryption CHK22 obtain lower amortized server time and client storage, and their most efficient scheme is optimal for the trade-off between online server time and client storage — [[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]]. That scheme needs up to $\tilde O_\secpar(\sqrt n)$ bandwidth per query at $\tilde O_\secpar(\sqrt n)$ computation and client storage, which ZLTS23 reduce to $\tilde O_\secpar(1)$ under LWE — [[ZLTS23 - Optimal Single-Server Private Information Retrieval|ZLTS23]].
