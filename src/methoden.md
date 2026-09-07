# Methoden

## Motivation

Die folgende Matheaufgabe können wir einfach in der Zelle lösen.


**Mathematikaufgabe 1.** *Für die englischen Längeneinheiten Fuß und
Yard gilt:*

- *Ein Yard sind \\(3\\) Fuß.*
- *a)* Wie viel sind \\(7\\) Yard in Fuß?
- *b)* Wie viel sind \\(19\\) Yard in Fuß?*

**Lösung 1.**

```java, java-exec
3 * 7
```

```java, java-exec
3 * 19
```

Die Lösung funktioniert zwar. Es gibt jedoch ein paar Probleme mit dem
Code.

- Wenn wir den Code später ohne die Aufgabe lesen, wissen wir
  höchstwahrscheinlich nicht, was wir berechnen wollten.
- Die Multiplikation mit \\(3\\), um eine Länge in Yard in eine Länge in
  Fuß umzurechnen, taucht zweimal auf.
- Wenn wir nach der Rechnung feststellen würden, dass ein Yard
  tatsächlich \\(4\\) Fuß sind, müssten wir den Code an beiden Stellen
  ändern.

Beide Probleme kann man mit Hilfe von Methoden vermeiden.

## Grundlegendes zu Methoden

Eine Methode kann man sich als Maschine vorstellen, die je nach
*Input* (*Argument*) einen entsprechenden *Output* (*Rückgabewert*)
produziert. Wenn der Name der Methode *g* ist, bezeichnet man für
einen *Input* *x* den dazugehörigen *Output* als *g(x)*. Die
Funktionsgleichung gibt an, wie sich der *Output* aus dem *Input*
berechnen lässt.

<div align="center">
  <img src="funktionsmaschine.png" style="width: 60%; max-width: 400px; display: block; margin: 0 auto;" alt="Funktionsmaschine Input Output" />
  <p style="font-size: 0.8em; color: gray; margin-top: 5px;">
    Quelle: <a href="https://madipedia.de/wiki/Funktionsmaschine">Madipedia</a>, Lizenz: <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.de">CC BY-NC-SA 3.0</a>
  </p>
</div>

Die Funktionsmaschine der Funktion *g* mit der Funktionsgleichung
$$g(x) = 3 \cdot x$$
nimmt eine beliebige Zahl als *Input* und gibt das Produkt dieser Zahl
mit *3* zurück. Wenn z. B. der *Input* die Zahl *4* ist, kann man den
*Output* berechnen, indem man *4* an der Stelle von *x* in den
Funktionsterm einsetzt. Das Ergebnis ist dann
$$g(4) = 3 \cdot 4 = 12$$

<img src="funktionsaufruf_g_4.svg" style="width: 50%; background-color: white;" alt="functionmachine" />

## Methoden definieren und aufrufen

Die Funktion *g* steht für die Umrechnung von Yard in Fuß. Wir wollen
diese also in Java mit einem besser lesbaren Namen implementieren.
Dies ist folgendermaßen möglich:

```java, java-exec
int yardToFeet(int lengthInYard) {
    return 3 * lengthInYard;
}
```

<img src="skizze_syntax_funktionen.svg" style="width: 80%; background-color: white; display: block; margin: 0 auto;" alt="functionmachine" />

Anschließend kann sie folgendermaßen im Code aufgerufen werden:

```java, java-exec
yardToFeet(7)
```

1.  Eine Methodendefinition beginnt immer mit dem Rückgabetyp (hier:
    `int`).

2.  Dahinter steht der Name[^1] der Methode (hier: `yardToFeet`).

3.  Das `lengthInYard` in der runden Klammer ist ein Platzhalter
    (*Parameter*) für einen konkreten Wert (*Argument*), der beim Aufruf
    übergeben werden muss. Mit `int` vor dem Namen wird angegeben, dass
    beim Methodenaufruf für diesen *Parameter* ein *Integer* übergeben
    werden muss. Z. B. werden in den Methodenaufrufen oben die *Integer*
    `7` und `19` übergeben.

4.  Mit `int` vor dem Methodennamen wird angegeben, dass der
    Rückgabewert der Methode immer ein *Integer* ist. Die erste Zeile
    wird *Methodenkopf* genannt und mit einer öffnenden geschweiften
    Klammer (`{`) abgeschlossen.

5.  In den folgenden Zeilen wird festgelegt, was die Methode
    zurückgeben soll. Hierfür schreibt man das Schlüsselwort `return`
    mit einem Semikolon (`;`) am Ende. Alle Zeilen, die zu einer Methode
    gehören, nennt man *Methodenkörper*. Er steht zwischen den
    geschweiften Klammern.

6.  Hinter `return` folgt ein *Ausdruck*. Dieser kann den *Parameter*
    der Methode enthalten. Beim Methodenaufruf wird dieser Parameter
    durch den übergebenen *Wert* des *Arguments* ersetzt. Beim Aufruf
    von `yardToFeet(7)` wird also in dem *Ausdruck* `3 * lengthInYard`
    der *Parameter* `lengthInYard` durch den *Wert* `7` ersetzt. Der
    *Ausdruck* `3 * 7` wird dann zu `21` ausgewertet und zurückgegeben.
    Anders ausgedrückt: Der *Ausdruck* `yardToFeet(7)` wird zu `21`
    ausgewertet.

Schlüsselwörter wie `return` zeigen der Java-Umgebung,
was zu tun ist. Sie dürfen deshalb **nicht** als Name von Methoden und
Variablen verwendet werden.


Beim Aufruf schreibt man nur den Namen der Methode und in Klammern den Wert, den man der Methode übergibt.

```java, java-exec
yardToFeet(7)
```




[^1]: Für die Namen von Methoden gelten die selben Regeln wie für die
    Namen von Variablen

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./methoden_aufgaben.md)
