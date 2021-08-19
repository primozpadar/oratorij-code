---
layout: guide
title: 'Kamen, Škarje, Papir'
description: 'Enostavna igra v jeziku Python'
---

Za pisanje kode je priporočen program **[PyCharm](https://www.jetbrains.com/pycharm/)**. Lahko uporabite tudi VSCode z dodatkom za Python - navodila za namestitev **[VSCode](/vscode)**

Prav tako potrebujemo Python interpreter **[Python](https://www.python.org/downloads/)** - priporočena verzija 3.9 ali višja.

## Kako računalniku povemo kaj želimo?

Vsi računalniki samo izvajajo kar jim naročimo. Kako to naredimo? S programom. Ampak, kako napišemo program? Obstaja na stotine različnih programskih jezikov. Mi smo izbrali trenutno enega najbolj popularnih jezikov - Python.

## Kako napišemo program?

Moramo poznati določena pravila kako računalniku povemo kaj želimo. V datoteko zapišemo program, ki ga računalnik izvede od začetka do konca.

Primer programa za izpis besedila s funkcijo **print**:

```python
print("Pozdravljen svet!")
```

Izpis računalnika:

```
Pozdravljen svet!
```

Kako izvedemo več kot samo en ukaz? Preprosto! Samo dodamo več ukazov v isto datoteko. Enega za drugim bo računalnik prebral in izvedel.

```python
print("Pozdravljen svet 1!")
print("Pozdravljen svet 2!")
```

Izpis:

```
Pozdravljen svet 1!
Pozdravljen svet 2!
```

## Kako program poženemo?

Python program oz. skripto poženemo v ukazni vrstici, ki jo na windows računalnikih lahko najdemo, če v meniju poiščemo cmd/ukazni poziv/powershell/windows terminal ali kateri koli drugi terminal. Za to nalogo je priporočen je Windows Terminal (Powershell), ker podpira izris emojijev.

Program zapišemo v datoteko npr. `ime_programa.py`. Ko se s terminalom nahajamo v isti mapi kot program napišemo `py ./ime_programa.py` in pritisnemo `enter`. Terminal lahko odpremo v VSCode, ki terminal avtomatsko odpre v mapi kjer je program.

# Igra!

Ker želimo, da bo program vljuden do uporabnikov, moramo na začetku napisati, naj računalnik pozdravi uporabnika. To lahko naredimo na poljuben način in izpis še nekoliko okrasimo s črtami in strelami.

```python
print("----------------------------------------------------")
print("| ⚡ Pozdravljen/-a v igri kamen škarje papir! ⚡ |")
print("----------------------------------------------------")
```

## Uporabnikova izbira

Igra kamen, škarje, papir je precej dolgočasna, če uporabnik ne more računalniku povedati svoje izbire. Ampak kako računalniku povemo naj uporabnika vpraša za izbiro? Uporabimo funkcijo **input**, kar v slovenščini pomeni **vhod**. Ko bo računalnik prebral to funkcijo, bo vedel, da mora uporabnika vprašati o nečem.

```python
input("Izbira (kamen, škarje ali papir): ")
```

Kaj računalnik naredi z uporabnikovo izbiro? Trenutno nič. Račualniku moramo povedati kam oz. kako naj uporabnikovo izbiro shrani - to naredimo s spremenljivkami. Uporabljamo jih za shranjevanje vrednosti - številk, besed, logičnih vrednosti itd. (več o tem kasneje). Ime spremenljivka je lahko poljubna beseda (brez presledkov). Vrednost ji določimo z znakom `=`.

```python
izbira = input("Izbira (kamen, škarje ali papir): ")
```

Kaj lahko naredimo s to izbiro? Lahko jo izpišemo nazaj uporabniku!

```python{2-4}
izbira = input("Izbira (kamen, škarje ali papir): ")
print(izbira)
```

## Računalnikova izbira

Uporabnikovo izbiro že imamo, zdaj pa potrebujemo še računalnikovo. Ustvarimo spremenljivko `vse_izbire`, ki bo seznam vseh izbir. Seznam naredimo tako, da zapišemo vse znotraj oglatih oklepajev `[]`, vsaka stvar v seznamu je ločena z vejico.

```python
vse_izbire = ["kamen", "škarje", "papir"]
```

Iz seznama dobimo naključno izbiro s knjižnico `random`, ki jo moramo, če jo želimo uporabiti, najprej uvoziti. Na vrh datoteke zapišemo:

```python{1}
import random

izbira = input("Izbira (kamen, škarje ali papir): ")

vse_izbire = ["kamen", "škarje", "papir"]
```

Ko je knjižnica uvožena, lahko uporabnimo funkcijo `choice`, ki iz seznama izbere nakjučen element. Da bomo ločili med uporabnikovo in računalnikovo izbiro lahko preimenujemo spremenljivke v `uporabnikova_izbira` in `racunalnikova_izbira`.

```python{3,6}
import random

uporabnikova_izbira = input("Izbira (kamen, škarje ali papir): ")

vse_izbire = ["kamen", "škarje", "papir"]
racunalnikova_izbira = random.choice(vse_izbire)
```

Računalnikovo izbiro moramo izpisati, da bo uporabnik seznanjen z računalnikovo izbiro. Nize znakov združimo z znakom `+`. Primer: če zapišemo `"A" + "B"` dobimo `"AB"`. Prav tako lahko izpišemo več znakov, da v funkciji nize ločimo z vejico: `print("A", "B")`.

```python{7}
import random

uporabnikova_izbira = input("Izbira (kamen, škarje ali papir): ")

vse_izbire = ["kamen", "škarje", "papir"]
racunalnikova_izbira = random.choice(vse_izbire)
print("🤖 Računalnik je izbral:" + racunalnikova_izbira)
```

# Kdo je zmagovalec?

Iz izpisa že lahko izberemo kdo je zmagovalec ampak ali je to dovolj dobro za nas? Seveda ne! Ker smo programerji bomo na zaslon izpisali kdo je zmagovalec, ampak najprej moramo ugotoviti kdo sploh to je.

Za preverjanje zmagovalca moramo vpeljati nov pojem - pogojno izvajanje. To pomeni, da glede na izbiro računalnika in uporabnika izvedemo samo del kode in ne vsega. V pythonu to storimo z `if`, `elif` in `else`, kar v prevodu pomeni "če", "drugače če" in "drugače".

Prvo preverimo če sta slučajno uporabnik in računalnik izbrala isto. V primeru, da sta, izpišemo neodločeno. Del kode, ki ga želimo izvesti pogojno, če je pogoj resničen, zapišemo v naslednji vrstici in ga zamakmeno s `space-om` ali `tab-om`. Pogoji so lahko različni - večje/manjše (`>` in `<`), ke enako (`==`), ali ni enako (`!=`).

```python
if uporabnikova_izbira == racunalnikova_izbira:
    print("Neodločeno")
```

### elif

Dodamo drugi pogoj (računalnik iz uporabnik imata različno izbiro) z `elif`, ki ga bo računalnik preveril le v primeru da prvi pogoj ni resničen.

```python{3-4}
if uporabnikova_izbira == racunalnikova_izbira:
    print("Neodločeno")
elif uporabnikova_izbira == "kamen":
    print("kaj pa zdaj?")
```

V primeru da je uporabnik izbral kamen, moramo preveriti še ali je računalnik izbral škarje ali papir, ker kot vemo papir premaga kamen, škarje pač ne. Pogoje lahko nizamo enega v drugega. Paziti moramo na zamike - drugi pogoj mora biti zamaknjen še za en stolpec.

```python{4-7}
if uporabnikova_izbira == racunalnikova_izbira:
    print("Neodločeno")
elif uporabnikova_izbira == "kamen":
    if racunalnikova_izbira == "škarje":
        print("Izgubil/-a si!")
    elif racunalnikova_izbira == "papir":
        print("Zmagal/-a si!")
```

Dodamo še ostale pogoje:

```python{8-17}
if uporabnikova_izbira == racunalnikova_izbira:
    print("Neodločeno")
elif uporabnikova_izbira == "kamen":
    if racunalnikova_izbira == "škarje":
        print("Zmagal/-a si!")
    elif racunalnikova_izbira == "papir":
        print("Izgubil/-a si!")
elif uporabnikova_izbira == "škarje":
    if racunalnikova_izbira == "kamen":
        print("Izgubil/-a si!")
    elif racunalnikova_izbira == "papir":
        print("Zmagal/-a si!")
elif uporabnikova_izbira == "papir":
    if racunalnikova_izbira == "kamen":
        print("Zmagal/-a si!")
    elif racunalnikova_izbira == "škarje":
        print("Izgubil/-a si!")
```

### else

Kaj se zgodi v primeru da je uporabnik izbral nekaj kar ni kamen, škarje ali papir? Dodamo `else` kar pomeni da se bo tisti del kode izvedel le v primeru da ni bil resničen nobeden od zgornjih pogojev.

```python{18-19}
if uporabnikova_izbira == racunalnikova_izbira:
    print("Neodločeno")
elif uporabnikova_izbira == "kamen":
    if racunalnikova_izbira == "škarje":
        print("Zmagal/-a si!")
    elif racunalnikova_izbira == "papir":
        print("Izgubil/-a si!")
elif uporabnikova_izbira == "škarje":
    if racunalnikova_izbira == "kamen":
        print("Izgubil/-a si!")
    elif racunalnikova_izbira == "papir":
        print("Zmagal/-a si!")
elif uporabnikova_izbira == "papir":
    if racunalnikova_izbira == "kamen":
        print("Zmagal/-a si!")
    elif racunalnikova_izbira == "škarje":
        print("Izgubil/-a si!")
else:
    print("Napačno izbira!")
```

### Krajši if

To je postalo že precej nepregledno, zato lahko uporabimo "bljižnico", ki jo omogoča python. `if else` lahko zapišemo v eni vrstici in sicer tako:

```python
print("5 je večje od 3") if 5 > 3 else print("5 ni večje od 3")
```

Kodo malo preuredimo in zdaj izgleda tako:

```python
if uporabnikova_izbira == racunalnikova_izbira:
    print("Neodločeno")
elif uporabnikova_izbira == "kamen":
    print("Zmagal/-a si!") if racunalnikova_izbira == "škarje" else print("Izgubil/-a si!")
elif uporabnikova_izbira == "škarje":
    print("Zmagal/-a si!") if racunalnikova_izbira == "kamen" else print("Izgubil/-a si!")
elif uporabnikova_izbira == "papir":
    print("Zmagal/-a si!") if racunalnikova_izbira == "škarje" else print("Izgubil/-a si!")
else:
    print("Napačno izbira!")
```

Koda je že veliko bolj pregledna ampak lahko jo še izboljšamo in sicer s funkcijami.

### Funkcije

Python ima že ogromno svojih funkcij. Dve od teh smo tudi že uporabili - `print` in `input`. Ampak kako napišemo svoje? Kaj so sploh funkcije?

Funkcije so del kode, ki ga napišemo enkrat in nato večkrat uporabimo v kodi. V pythonu uporabimo besedo `def` za definiranje funkcije. Del kode, ki želimo da je v funkciji zamaknemo za en stolpec tako kot pri if in else.

```python
def moja_funkcija():
  print("ta del kode je v funkciji")
```

Kako izvedemo funkcijo? Kjer koli v kodi, ki je nižje od definicije funkcije napišemo ime funkcije in takoj za njo oklepaj in zaklepaj `moja_funkcija()`. Ker jo želimo izvesti dvakrat, jo pač pokličemo dvakrat:

```python{3-4}
def moja_funkcija():
  print("ta del kode je v funkciji")

moja_funkcija()
moja_funkcija()
```

Izpis:

```
ta del kode je v funkciji
ta del kode je v funkciji
```

## zmaga(), poraz(), neodloceno()

Napišemo funkcije za izpisovanje rezultatov igre z nekaj več okraski in popravimo del kode, kjer preverjamo zmagovalca.
(Znak `\n` pomeni nova vrstica.)

```python{1-8,11,13,15,17}
def zmaga():
    print("-- ✅ Zmagal/-a si! ✅ --\n")

def poraz():
    print("-- ❌ Izgubil/-a si! ❌ --\n")

def neodloceno():
    print("-- 🤔 Neodločeno 🤔 --\n")

if uporabnikova_izbira == racunalnikova_izbira:
    neodloceno()
elif uporabnikova_izbira == "kamen":
    zmaga() if racunalnikova_izbira == "škarje" else poraz()
elif uporabnikova_izbira == "škarje":
    zmaga() if racunalnikova_izbira == "kamen" else poraz()
elif uporabnikova_izbira == "papir":
    zmaga() if racunalnikova_izbira == "škarje" else poraz()
else:
    print("Napačno izbira!")
```

# A je že konec igre? 😢

Ko odigramo eno igro, se program zaključi. Amapk kaj pa če želimo igro ponovno igrati? Uporabimo zanko `while` (v prevodu - dokler), ki deluje podobno kot `if`, le da kodo znotraj njega izvaja dokler je pogoj resničen.

```python
while 5 > 3:
    print("5 je vedno večje od 3")
```

Ker je 5 vedno večje od 3, se bo program izpisoval v neskončnost, kar je ravno to kar potrebujemo! Ampak obstaja boljši način za to - `True` in `False` kar pomeni "resnično" in "neresnično".

```python
while True:
    print("abcd")
```

### Do neskončnosti in naprej!

Kodo, ki smo jo napisali za igro, zapišemo v zanko `while`. Funkcij za izpisovanje rezultata ne potrebujemo v zanki, saj je potrebno funkcijo definirati le enkrat. Prav tako uporabnika pozdravimo le na začetku igre.

```python
import random

print("----------------------------------------------------")
print("| ⚡ Pozdravljen/-a v igri kamen škarje papir! ⚡ |")
print("----------------------------------------------------")

def zmaga():
    print("-- ✅ Zmagal/-a si! ✅ --\n")

def poraz():
    print("-- ❌ Izgubil/-a si! ❌ --\n")

def neodloceno():
    print("-- 🤔 Neodločeno 🤔 --\n")

while True:
  uporabnikova_izbira = input("Izbira (kamen, škarje ali papir): ")

  vse_izbire = ["kamen", "škarje", "papir"]
  racunalnikova_izbira = random.choice(vse_izbire)
  print("🤖 Računalnik je izbral:" + racunalnikova_izbira)


  if uporabnikova_izbira == racunalnikova_izbira:
      neodloceno()
  elif uporabnikova_izbira == "kamen":
      zmaga() if racunalnikova_izbira == "škarje" else poraz()
  elif uporabnikova_izbira == "škarje":
      zmaga() if racunalnikova_izbira == "kamen" else poraz()
  elif uporabnikova_izbira == "papir":
      zmaga() if racunalnikova_izbira == "škarje" else poraz()
  else:
      print("Napačno izbira!")
```

Ko igro poženemo v terminalu, izgleda tako:

```
----------------------------------------------------
| ⚡ Pozdravljen/-a v igri kamen škarje papir! ⚡ |
----------------------------------------------------
Izbira (kamen, škarje ali papir): kamen
🤖 Računalnik je izbral:kamen
-- 🤔 Neodločeno 🤔 --

Izbira (kamen, škarje ali papir): škarje
🤖 Računalnik je izbral:papir
-- ❌ Izgubil/-a si! ❌ --

Izbira (kamen, škarje ali papir): papir
🤖 Računalnik je izbral:škarje
-- ✅ Zmagal/-a si! ✅ --
```
