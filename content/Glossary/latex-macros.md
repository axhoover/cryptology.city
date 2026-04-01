---
aliases:
  - LaTeX macros
title: LaTeX macros
---

# LaTeX macros

All pseudocode and math on this site uses custom LaTeX macros for common cryptographic notation. You can copy them below to use in your own LaTeX documents or KaTeX/MathJax configurations.

<div id="macros-copy-area"></div>

## Macro reference

### Caligraphic letters

| Macro             | Renders as                           |
| ----------------- | ------------------------------------ |
| `\calA` … `\calZ` | $\calA, \calB, \calC, \ldots, \calZ$ |

### Complexity classes

| Macro          | Renders as     |
| -------------- | -------------- |
| `\classP`      | $\classP$      |
| `\classNP`     | $\classNP$     |
| `\classcoNP`   | $\classcoNP$   |
| `\classBPP`    | $\classBPP$    |
| `\classRP`     | $\classRP$     |
| `\classZPP`    | $\classZPP$    |
| `\classPSPACE` | $\classPSPACE$ |
| `\classSZK`    | $\classSZK$    |
| `\classCZK`    | $\classCZK$    |
| `\classIP`     | $\classIP$     |
| `\classAM`     | $\classAM$     |
| `\classMA`     | $\classMA$     |
| `\classcoAM`   | $\classcoAM$   |
| `\classFP`     | $\classFP$     |
| `\classPP`     | $\classPP$     |
| `\classPpoly`  | $\classPpoly$  |
| `\classEXP`    | $\classEXP$    |
| `\classTFNP`   | $\classTFNP$   |
| `\classsharpP` | $\classsharpP$ |
| `\classBQP`    | $\classBQP$    |
| `\classQMA`    | $\classQMA$    |
| `\classQCMA`   | $\classQCMA$   |
| `\classQIP`    | $\classQIP$    |
| `\classQSZK`   | $\classQSZK$   |

### Common algorithms

| Macro       | Renders as  |
| ----------- | ----------- |
| `\KeyGen`   | $\KeyGen$   |
| `\Gen`      | $\Gen$      |
| `\GrGen`    | $\GrGen$    |
| `\Enc`      | $\Enc$      |
| `\Dec`      | $\Dec$      |
| `\Setup`    | $\Setup$    |
| `\Query`    | $\Query$    |
| `\Eval`     | $\Eval$     |
| `\Invert`   | $\Invert$   |
| `\Sign`     | $\Sign$     |
| `\Vrfy`     | $\Vrfy$     |
| `\Prove`    | $\Prove$    |
| `\Com`      | $\Com$      |
| `\Open`     | $\Open$     |
| `\Share`    | $\Share$    |
| `\Recon`    | $\Recon$    |
| `\Tag`      | $\Tag$      |
| `\Answer`   | $\Answer$   |
| `\Decode`   | $\Decode$   |
| `\Extract`  | $\Extract$  |
| `\Delegate` | $\Delegate$ |

### Key names

| Macro  | Renders as |
| ------ | ---------- |
| `\sk`  | $\sk$      |
| `\pk`  | $\pk$      |
| `\vk`  | $\vk$      |
| `\msk` | $\msk$     |
| `\mpk` | $\mpk$     |
| `\pp`  | $\pp$      |
| `\crs` | $\crs$     |
| `\td`  | $\td$      |

### Number sets

| Macro | Renders as |
| ----- | ---------- |
| `\NN` | $\NN$      |
| `\ZZ` | $\ZZ$      |
| `\FF` | $\FF$      |
| `\GG` | $\GG$      |

### Simulators and state

| Macro   | Renders as |
| ------- | ---------- |
| `\Sim`  | $\Sim$     |
| `\st`   | $\st$      |
| `\stA`  | $\stA$     |
| `\stB`  | $\stB$     |
| `\stS`  | $\stS$     |
| `\View` | $\View$    |

### Crypto shorthand

| Macro     | Renders as |
| --------- | ---------- |
| `\bits`   | $\bits$    |
| `\negl`    | $\negl$    |
| `\poly`    | $\poly$    |
| `\polylog` | $\polylog$ |
| `\PPT`     | $\PPT$     |
| `\secpar`  | $\secpar$  |
| `\getsr`   | $\getsr$   |
| `\Funcs`   | $\Funcs$   |
| `\Perms`   | $\Perms$   |

### Advantages and games

| Macro     | Renders as |
| --------- | ---------- |
| `\Adv`    | $\Adv$     |
| `\Expt`   | $\Expt$    |
| `\Game`   | $\Game$    |
| `\indcpa` | $\indcpa$  |
| `\indcca` | $\indcca$  |
| `\ufcma`  | $\ufcma$   |
| `\eufcma` | $\eufcma$  |
| `\sufcma` | $\sufcma$  |

### Primitives

| Macro   | Renders as |
| ------- | ---------- |
| `\PRF`  | $\PRF$     |
| `\RO`   | $\RO$      |
| `\PRG`  | $\PRG$     |
| `\PRP`  | $\PRP$     |
| `\OT`   | $\OT$      |
| `\SKE`  | $\SKE$     |
| `\PKE`  | $\PKE$     |
| `\DS`   | $\DS$      |
| `\MAC`  | $\MAC$     |
| `\PIR`  | $\PIR$     |
| `\hash` | $\hash$    |
| `\IBE`  | $\IBE$     |
| `\HIBE` | $\HIBE$    |
| `\ABE`  | $\ABE$     |
