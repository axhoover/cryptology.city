---
type: reduction
status: draft
title: "QR ⇒ PIR with client preprocessing (CHK22)"
aliases: []
id: red-qr-to-client-preprocessing-pir-chk22
kind: implication
hypotheses: [qr]
conclusion: client-preprocessing-pir
class: unstated
model: standard
source:
  - "[[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]]"
security-loss: ""
rationale:
  class: "The conclusion carries an efficiency requirement, sublinear amortized server time after client preprocessing, that lies outside the RTV04 axes."
---

# QR ⇒ PIR with client preprocessing (CHK22)

## Statement

If [[quadratic-residuosity|QR]] is hard, there is a single-server [PIR with client preprocessing](single-server-private-information-retrieval#pir-with-client-preprocessing) that answers adaptively chosen queries in sublinear amortized server time with sublinear additional client storage and no server storage beyond the database, after a hint whose generation costs the server time linear in $n$; over at least $n^{1/4}$ queries the amortized server time is $n^{3/4}$, the communication $n^{1/2}$ and the client storage $n^{3/4}$, up to factors polynomial in $\secpar$ and logarithmic in $n$ — [[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]].

## Notes

- The construction uses linearly homomorphic encryption, which CHK22 also instantiate under [[decisional-diffie-hellman|DDH]] ([[ddh-to-client-preprocessing-pir-chk22|DDH ⇒ PIR with client preprocessing]]), [[decisional-composite-residuosity|DCR]] and [[learning-with-errors|LWE]] — [[CHK22 - Single-Server Private Information Retrieval with Sublinear Amortized Time|CHK22]].
