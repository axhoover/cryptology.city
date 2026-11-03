---
type: glossary
status: draft
aliases:
  - UC framework
  - Universal Composability Framework
  - UC
title: UC Framework
id: uc-framework
---

# Universal composability

In the universal composability (UC) framework, a protocol $\pi$ securely realizes an ideal functionality $\calF$ if for every adversary $\calA$ attacking $\pi$ there is a simulator $\Sim$ attacking an ideal execution of $\calF$ such that no environment $\calZ$, which chooses the parties' inputs, reads their outputs and converses with the adversary throughout, tells the two executions apart — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. A protocol secure in this sense stays secure as a subroutine of an arbitrary protocol, by the composition theorem below. The statements follow the journal version of [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]] (JACM 2020); details of the model differ between its versions.

## Model of execution

Every machine is an instance of an interactive Turing machine (ITM). A protocol fixes the program of its parties, and each party is identified by a session identifier $\mathit{sid}$, common to the parties of one session, and a party identifier $\mathit{pid}$. A party takes inputs from the machine that invoked it, returns outputs to that machine, invokes subroutines, and sends messages to other parties — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

- **Environment.** $\calZ$ starts on the security parameter $\secpar$ and an input $z$, invokes the adversary and the main parties of the protocol under analysis, gives those parties inputs, reads their outputs, and exchanges messages with the adversary at any time. Its output is one bit — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].
- **Adversary.** $\calA$ delivers the messages between parties; the basic model provides neither authenticated nor private channels, which are ideal functionalities ($\calF_{\mathrm{AUTH}}$, $\calF_{\mathrm{SMT}}$) — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. $\calA$ also corrupts parties: it receives a corrupted party's state and controls the party from then on.
- **Corruption.** Corruptions are **static** when they all happen before the execution starts, and **adaptive** when $\calA$ chooses whom to corrupt during the execution, depending on what it has seen — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. Against adaptive corruptions, some protocols assume that honest parties can erase internal state before a corruption reveals it — [[CF01 - Universally Composable Commitments|CF01]].

$\mathrm{EXEC}_{\pi,\calA,\calZ}(\secpar, z)$ is the distribution of the output bit of $\calZ$ after an execution of $\pi$ with adversary $\calA$ and environment $\calZ$, and $\mathrm{EXEC}_{\pi,\calA,\calZ}$ is the ensemble indexed by $\secpar \in \NN$ and $z \in \bits^*$. Two such binary ensembles $X$ and $Y$ are **indistinguishable**, $X \approx Y$, if for all $c, d \in \NN$ there is $\secpar_0$ such that

$$
\left|\Pr\!\left[X(\secpar, z) = 1\right] - \Pr\!\left[Y(\secpar, z) = 1\right]\right| < \secpar^{-c}
$$

for all $\secpar > \secpar_0$ and all $z$ with $|z| \le \secpar^d$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

## Ideal functionalities

An **ideal functionality** $\calF$ is a machine that plays the trusted party of a task. It takes inputs from the parties, may exchange messages with the adversary, for instance to leak information to it or to let it delay an output, and hands outputs to the parties. The **ideal protocol** $\mathrm{IDEAL}_{\calF}$ consists of **dummy parties**, each of which forwards every input it receives to $\calF$ and every output it receives from $\calF$ to the machine that invoked it. The adversary in an execution of $\mathrm{IDEAL}_{\calF}$ is the **simulator** $\Sim$: it interacts with $\calZ$ and with $\calF$, and through each corrupted dummy party it gives $\calF$ inputs and receives the party's outputs — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

## UC emulation

Following [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]], a protocol $\pi$ **UC-emulates** a protocol $\phi$ if for all PPT $\calA$ there is a PPT $\Sim$ such that for all PPT $\calZ$,

$$
\mathrm{EXEC}_{\pi,\calA,\calZ} \approx \mathrm{EXEC}_{\phi,\Sim,\calZ}.
$$

Polynomial time is defined for ITMs in terms of the length of their inputs, and the journal version quantifies over **balanced** environments, a technical restriction on $\calZ$ that this notion of polynomial time requires — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. A protocol $\pi$ **UC-realizes** $\calF$ if $\pi$ UC-emulates $\mathrm{IDEAL}_{\calF}$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

The simulator depends on $\calA$ but not on $\calZ$, and $\calZ$ interacts with it throughout the execution, so $\Sim$ cannot rewind $\calZ$: a simulator that must hand $\calF$ a corrupted party's input extracts it straight-line — standard.

**Dummy adversary.** The dummy adversary $\calD$ delivers messages and corrupts parties as $\calZ$ instructs, and forwards to $\calZ$ everything it receives. A protocol $\pi$ UC-emulates $\phi$ if and only if there is a PPT $\Sim$ such that for all PPT $\calZ$, $\mathrm{EXEC}_{\pi,\calD,\calZ} \approx \mathrm{EXEC}_{\phi,\Sim,\calZ}$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. The quantifier over adversaries can thus be dropped, the environment playing the adversary through $\calD$.

## Hybrid models and composition

In the **$\calF$-hybrid model**, the parties of a protocol may invoke any number of sessions of $\mathrm{IDEAL}_{\calF}$, each with its own session identifier — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. For protocols $\rho$, $\phi$ and $\pi$, the protocol $\rho^{\phi\to\pi}$ is $\rho$ with every invocation of a session of $\phi$ replaced by an invocation of a session of $\pi$ with the same identifiers, and $\rho^{\calF\to\pi}$ replaces the sessions of $\mathrm{IDEAL}_{\calF}$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

**Composition theorem.** If $\pi$ UC-emulates $\phi$, then $\rho^{\phi\to\pi}$ UC-emulates $\rho$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. Taking $\phi = \mathrm{IDEAL}_{\calF}$: if $\pi$ UC-realizes $\calF$ and $\rho$ UC-realizes $\calG$ in the $\calF$-hybrid model, then $\rho^{\calF\to\pi}$ UC-realizes $\calG$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

The journal version states the theorem under side conditions: $\pi$ and $\phi$ are **subroutine respecting**, meaning that the machines a session of either protocol invokes, other than the session's main parties, exchange inputs and outputs only with machines of the same session, and **subroutine exposing**; and $\rho$ is $(\pi, \phi, \xi)$-compliant for a predicate $\xi$ on identities such that $\pi$ UC-emulates $\phi$ against environments restricted by $\xi$ — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]]. Subroutine respect excludes a subroutine shared with other sessions, such as one reference string used by every session — [[CDPW07 - Universally Composable Security with Global Setup|CDPW07]]; joint-state and global-setup composition, below, treat that case.

## Impossibility without setup

In the plain model, over [[interactive-protocol#authenticated-channels|authenticated channels]] with no setup, no protocol in which only the committer and the receiver take part, and in which the receiver accepts an honest committer's commitment with non-negligible probability, UC-realizes the commitment functionality, even against an adversary that corrupts one of them at the outset ([[no-authenticated-channels-to-uc-commitment-cf01|no UC commitment from authenticated channels]]) — [[CF01 - Universally Composable Commitments|CF01]]. Large classes of two-party functionalities have no protocol that UC-realizes them against a malicious adversary statically corrupting one party, whatever the computational assumption ([[no-authenticated-channels-to-uc-mpc-ckl03|no UC MPC from authenticated channels]]) — [[CKL03 - On the Limitations of Universally Composable Two-Party Computation without Set-up Assumptions|CKL03]]. Security under concurrent general composition is equivalent to a relaxation of UC security that differs only in the order of quantifiers, so it too is unachievable in the plain model for large classes of two-party functionalities — [[Lin03b - General Composition and Universal Composability in Secure Multi-Party Computation|Lin03b]]. With an honest majority no setup is needed: as long as only a minority of the parties are corrupted, practically any functionality can be UC-realized — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

## Setup assumptions

**Common reference string.** In the CRS model, the $\calF_{\mathrm{CRS}}$-hybrid model, all parties of a session have access to one string drawn from a predetermined distribution — [[CF01 - Universally Composable Commitments|CF01]]. There, trapdoor permutations give [[commitment-scheme#uc-commitment|UC commitments]] with one reference string per commitment ([[tdp-to-uc-commitment-cf01|TDP ⇒ UC commitment]]), and a claw-free pair of trapdoor permutations together with a CCA2-secure PKE gives [[commitment-scheme#uc-multi-commitment|UC multi-commitments]] with one reference string for all commitments ([[claw-free-tdp-and-cca2-pke-to-uc-multi-commitment-cf01|claw-free TDP + CCA2 PKE ⇒ UC multi-commitment]]) — [[CF01 - Universally Composable Commitments|CF01]]. Enhanced trapdoor permutations give every well-formed functionality a protocol UC-secure against static corruption of any number of parties ([[enhanced-trapdoor-permutation-to-uc-mpc-clos02|enhanced TDP ⇒ UC MPC]]) — [[CLOS02 - Universally Composable Two-Party and Multi-Party Secure Computation|CLOS02]]. Two-round [[oblivious-transfer#uc-secure-ot|UC-secure OT]] follows from DDH, QR or LWE — [[PVW08 - A Framework for Efficient and Composable Oblivious Transfer|PVW08]] — and from CDH — [[DGHMW20 - Two-Round Oblivious Transfer from CDH or LPN|DGHMW20]].

**Joint state.** If $\hat\pi$ UC-realizes the multi-session extension $\hat\calF$ of $\calF$, a single functionality that runs every session of $\calF$, then a protocol in the $\calF$-hybrid model stays secure when all its sessions of $\calF$ are replaced by one session of $\hat\pi$, which may share state, such as one reference string, across them — [[CR03 - Universal Composition with Joint State|CR03]].

**Global setup.** Generalized UC (GUC) security lets the environment run arbitrary other protocols that use the same setup as the protocol under analysis, and so models setup that is globally available — [[CDPW07 - Universally Composable Security with Global Setup|CDPW07]].

**Super-polynomial simulation.** Letting the simulator run in super-polynomial time is a way around plain-model impossibility results: with quasi-polynomial-time simulation, constant-round zero-knowledge arguments that are straight-line simulatable under concurrent composition exist without setup, under a subexponential hardness assumption — [[Pas03 - Simulation in Quasi-Polynomial Time, and Its Application to Protocol Composition|Pas03]].

**Angel-based security.** The adversary, in the real and in the ideal execution, and the environment get access to a super-polynomial-time oracle, the angel. [[PS04 - New Notions of Security Achieving Universal Composability without Trusted Setup|PS04]] prove a composition theorem for the notion and, under new computational assumptions, realize secure multi-party computation against static adversaries without setup.
