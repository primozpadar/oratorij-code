# Oratorij Code

Spletna stran za enostavno učenje programiranja na oratorijskih delavnicah.

Stran je dostopna na povezavi: [Oratorij Code](https://code.oratorijzelimlje.si/)

## Kako sodelovati pri projektu?

V direktorij `src/content` dodaš _markdown_ datoteko z naslovom: npr: `src/content/program.md`.

Na vrhu datoteke naj bodo naslednji podatki:

```
---
layout: guide
title: 'ime projekta'
description: 'opis projekta'
---
```

### Slike

Slike za vsak projekt so v direktoriju `src/images/ime_projekta`. Ime direktorija naj bo isto kot ime markdown datoteke.

Uporaba slike v markdown-u:

```md
![ALT_IME](../images/ime_projekta/ime_slike)
```
