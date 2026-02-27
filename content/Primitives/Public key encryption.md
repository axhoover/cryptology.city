---
aliases:
  - PKE
---
# Public key encryption (PKE)
Public key encryption (PKE) is a central cryptographic primitive in theory and in practice. It is centrally important in communicating over untrusted channels where parties cannot share a key in advance, in which case [[Symmetric key encryption|SE]] is sufficient.

## Definition
A *public key encryption* (PKE) scheme is a tuple of efficient algorithms $(\mathsf{Gen}, \mathsf{Enc}, \mathsf{Dec})$, with respect to key space $\mathcal{K} = \mathcal{K}_{\mathrm{priv}} \times \mathcal{K}_{\mathrm{pub}}$, message space $\mathcal{M}$, and ciphertext space $\mathcal{C}$ such that
- $\mathsf{Gen}(1^{\lambda}) \to (sk,pk)$, is a randomized algorithm that takes a security parameter, and outputs a secret key $sk \in \mathcal{K}_{\mathrm{priv}}$ and a public key $pk \in \mathcal{K}_{\mathrm{pub}}$,
- $\mathsf{Enc}_{pk}(m) \to c$, is a randomized algorithm that takes a public key $pk\in \mathcal{K}_{\mathrm{pub}}$ and message $m\in \mathcal{M}$, and outputs a ciphertext $c \in \mathcal{C}$,
- $\mathsf{Dec}_{sk}(c) \to m$, is a deterministic algorithm that takes a secret key $sk \in \mathcal{K}_{\mathrm{priv}}$ and candidate ciphertext $c \in \mathcal{C}$, and outputs either a message $m\in \mathcal{M}$
	- One may also allow $\mathsf{Dec}_{sk}$ to output $\bot$ to indicate that a candidate ciphertext is not a valid encryption
### Correctness
A PKE scheme is *correct* if for every $\lambda \in \mathbb{N}$ and message $m\in \mathcal{M}$, $\Pr[\mathsf{Dec}_{sk}(\mathsf{Enc}_{pk}(m)))=m \mid (sk,pk) \gets \mathsf{Gen}(1^{\lambda})] = 1$.
### Chosen Plaintext Attack (CPA) Security
The *CPA advantage* of an adversary $\mathcal{A}$ that outputs messages $m_0$ and $m_1$ is defined as $$\text{Adv}^{\text{cpa}}_{\mathcal{A}}(\lambda) \le 2\left|\Pr[\mathcal{A}(1^{\lambda},pk,c) = b] - \frac{1}{2}\right|,$$ where $(sk,pk) \gets \mathsf{Gen}(1^{\lambda})$, $b\gets \{0,1\}$, and $c \gets \mathsf{Enc}_{pk}(m_b)$.

An PKE scheme is *CPA-secure* if for all efficient $\mathcal{A}$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{cpa}}_{\mathcal{A}}(\lambda)\le \nu(\lambda)$.

### Chosen Plaintext Attack (CCA) Security
The *CCA advantage* of an adversary $\mathcal{A}$ that outputs messages $m_0$ and $m_1$ is defined as $$\text{Adv}^{\text{cca}}_{\mathcal{A}}(\lambda) \le 2\left|\Pr[\mathcal{A}^{\mathsf{Dec}_{sk}(\cdot)}(1^{\lambda},pk,c) = b] - \frac{1}{2}\right|,$$ where $(sk,pk) \gets \mathsf{Gen}(1^{\lambda})$, $b\gets \{0,1\}$, $c \gets \mathsf{Enc}_{pk}(m_b)$, and $\mathsf{Dec}_{sk}(\cdot)$ is a decryption oracle. 

An PKE scheme is *CCA-secure* if for all **admissible** $\mathcal{A}$, there exists a negligible function $\nu$, such that: $\text{Adv}^{\text{cpa}}_{\mathcal{A}}(\lambda)\le \nu(\lambda)$. An adversary is ***admissible*** if it is efficient and never queries $\mathsf{Dec}$ on the input $c$, i.e., it never decrypts the given ciphertext with the oracle (but it may query inputs which *depend* on the outputs given).
- This restriction is necessary, as otherwise $\mathcal{A}$ could trivially discover what $b$ is by querying $\mathsf{Dec}_{sk}(c)$ to see if it is $m_0$ or $m_1$.

### Variations
- Key-hiding
- CCA1

## Other results
- PKE implies [[One-way function|OWF]]
- [[Trapdoor function|TDF]] implies PKE

### Candidate Public-key Encryption
- PKE can be built assuming [[Decisional Diffie-Hellman|DDH]] is hard — [[DH76 - New Directions in Cryptography|DH76]]
- PKE can be built assuming [[Learning parity with noise#Noise Level|mid-noise LPN]]
- 
