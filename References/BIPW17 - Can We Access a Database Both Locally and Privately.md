---
title: Can We Access a Database Both Locally and Privately?
source: https://eprint.iacr.org/2017/567
authors: Elette Boyle, Yuval Ishai, Rafael Pass, Mary Wootters
venue: TCC 2017
published: 2017-06-14
created: 2025-02-17
aliases:
  - BIPW17
---
# Can We Access a Database Both Locally and Privately?
URL: https://eprint.iacr.org/2017/567
Authors: Elette Boyle, Yuval Ishai, Rafael Pass, Mary Wootters
## Abstract
We consider the following strong variant of private information retrieval (PIR). There is a large database $x$ that we want to make publicly available. To this end, we post an encoding $X$ of $x$ together with a short public key $pk$ in a publicly accessible repository. The goal is to allow any client who comes along to retrieve a chosen bit $x_i$ by reading a small number of bits from $X$, whose positions may be randomly chosen based on $i$ and $pk$, such that even an adversary who can fully observe the access to $X$ does not learn information about $i$.

Towards solving the above problem, we study a weaker secret key variant where the data is encoded and accessed by the same party. This primitive, that we call an oblivious locally decodable code (OLDC), is independently motivated by applications such as searchable symmetric encryption. We reduce the public-key variant of PIR to OLDC using an ideal form of obfuscation that can be instantiated heuristically with existing indistinguishability obfuscation candidates, or alternatively implemented with small and stateless tamper-proof hardware.

Finally, a central contribution of our work is the first proposal of an OLDC candidate. Our candidate is based on a secretly permuted Reed-Muller code. We analyze the security of this candidate against several natural attacks and leave its further study to future work.


# Notes
- Introduces *oblivious locally decodable codes (OLDCs)*
	- an LDC allows any bit to be recovered by looking at only a few random bits of the codeword (even if they are corrupted)
	- An oblivious LDC requires that the indices read are computationally indistinguishable for any two different indices
- They construct *public-key PIR* from OLDCs + OWF + VBB-iO
	- Basic idea is to sample secret keys, then generate a program $P$ which can query and decode using those key and finally output $\tilde{P}$, the obfuscated program
		- This requires encrypting the database and using authentication as well
	- Then, the client can then use the obfuscated program to obtain the index set, query the indices, and the decode to get the answer (since the returned indices are encrypted)
- This was ==later recast== as *secret-key DEPIR* — where instead of obfuscation, the client is just trusted with the secret keys I think
	- Maybe, this could be a useful variant for structured encryption, if it's practically efficient 
	- I think this version of PIR might get around the [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]] barrier, because it's not clear how to do the preprocessing — sender needs to keep DBs private, but sender needs to keep secret key secret
- 