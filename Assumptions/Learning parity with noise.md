---
aliases:
  - LPN
permalink: LPN
---
# Learning parity with noise (LPN)
The *learning parity with nosie (LPN)* assumptions is a post-quantum candidate assumption that is related to the [[Learning with errors]] assumption.

## Assumption
For parameters $k \in \mathbb{N}$ and $0 < \varepsilon < 1$, we say the *$(k,\varepsilon,m)$-LPN advantage* of an adversary $\mathcal{A}$ as
$$\text{Adv}^{(k,\varepsilon)\text{-lpn}}_{\mathcal{A}}(\lambda) = \Pr[\mathcal{A}(1^{\lambda},\mathbf{A},\mathbf{v}_b)=b],$$
where $\mathbf{A} \gets \mathbb{F}_2^{m\times k}$, $\mathbf{v}_0 \gets \mathbb{F}_2^{m}$, and $\mathbb{v}_1 := \mathbf{A}\cdot \mathbf{s} + \mathbf{r}$, where $\mathbf{s} \gets \mathbb{F}_2^k$ and $\mathbf{r} = (\text{Ber}(\varepsilon))_{i \in [m]}$.

Then, we say that *$(k,\varepsilon)$-LPN is hard* if there exists a negligible function $\nu$ such that for all efficient adversaries $\mathcal{A}$ and all polynomials $m:= m(\lambda)$, $$\text{Adv}^{(k,\varepsilon)\text{-lpn}}_{\mathcal{A}}(\lambda) \le \nu(\lambda).$$
### Noise Level
Depending on the setting of $\varepsilon$ relative to $k$, the $(k,\varepsilon)$-LPN problem has different regimes which are generally known to imply different results.
-  **High-noise**: $\varepsilon = 1/k^\gamma$ for $0 < \gamma < 1/2$ (weakest assumption)
- **Mid-noise**: $\varepsilon = 1/k^\gamma$ for every $\gamma < 1$
- **Low-noise**: $\varepsilon = \log^c(k) / k$ for some $c > 1$. (strongest assumption)

## Related results
- Mid-noise (and hence low-noise) LPN implies [[Public key encryption]] — [[Alekhnovich03 - More on average case vs approximation complexity|Alekhnovich03]]
- Some works show that Low-noise LPN with $\varepsilon = \log^2 k / k$ implies [[Collision-resistant hash function]] — [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]], [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]]
- LPN with noise of $\log^{1+\beta} k / k$, where $0 < \beta < 1$, is known to imply [[Private information retrieval (Single-server)|PIR]] with slightly sublinear communication $N/2^{\Theta(\log^{1-\beta} N)}$ (through the use of [[Trapdoor hash functions]])— [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]
	- Fully sublinear PIR from any flavor of LPN is open.


## Attacks
TODO