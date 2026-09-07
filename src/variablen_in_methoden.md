# Variablen in Methoden




## Zuweisungsstatements in Methoden

Alle Methoden, die wir bisher gesehen haben, enthalten nur ein
`return`-*Statement*, mit dem angegeben wird, was die Methode
zurückgeben soll.

Dies muss nicht so sein. Wir können in Methoden beliebige andere
*Statements* verwenden. Dafür schreiben wir diese ebenfalls in den
*Methodenkörper* zwischen die geschweiften Klammern. Alle *Statements*,
die zu einer Methode gehören, nennt man *Methodenkörper*. Diese
*Statements* werden beim Methodenaufruf der Reihe nach ausgeführt. Zum
Beispiel wurden in der folgenden Variante der Methode `yardToInch`
*Zuweisungsstatements* verwendet.

```java, java-exec
int yardToInch(int lengthInYard) {
    var lengthInFeet = 3 * lengthInYard;
    var lengthInInch = 12 * lengthInFeet;
    return lengthInInch;
}
```

Um sich die Auswertung dieser Methode vorzustellen, ist es sinnvoll,
die *Parameter* als *lokale Variablen* zu sehen, die schon vor dem
Ausführen der *Statements* in der Methode definiert sind. Beim
folgenden Methodenaufruf

```java, java-exec
yardToInch(2)
```

gibt es **bevor** die erste Zeile im *Methodenkörper* ausgeführt wurde,
die folgenden *Variablen*:

<div class="center">

| Name             | Wert |
|:-----------------|-----:|
| `lengthInYard` |    2 |

</div>

Nachdem die beiden ersten Statements im *Methodenkörper* ausgeführt
wurden, gibt es die folgenden *Variablen*:

<div class="center">

| Name             | Wert |
|:-----------------|-----:|
| `lengthInYard` |    2 |
| `lengthInFeet` |    6 |
| `lengthInInch` |   72 |

</div>

In der letzten Zeile muss dann lediglich der *Wert* der *Variable*
`lengthInInch` zurückgegeben werden.

## Geltungsbereiche

Wenn eine *Variable* in einer Methode *initialisiert* wird, kann sie
von außen nicht verwendet werden. Man spricht in diesem Fall von einer
*lokalen Variablen* im Unterschied zu einer *globalen Variablen*.

```java, java-exec
yardToInch(2)
lengthInFeet
```

Es ist aber möglich, eine *Variable*, die außerhalb einer Methode
definiert wurde, in dieser Methode zu verwenden.

```java, java-exec
var yardToFeetRatio = 3;
int yardToFeet(int lengthInYard) {
    return yardToFeetRatio * lengthInYard;
}
```

```java, java-exec
yardToFeet(3)
```

Generell gilt, dass *Variablen*, die innerhalb eines Blocks (z. B. hier
dem Methodenkörper) definiert wurden, nur in diesem und nicht außerhalb
verwendet werden können. Wir werden solche Blöcke noch bei der
*bedingten Ausführung* und bei *Schleifen* kennenlernen.

## Shadowing

Wir können in einer Methode[^2] eine *lokale Variable* mit einem Namen,
der schon für eine *globale Variable* genutzt wird, initialisieren. In
der Methode kann die *globale Variable* dann nicht mehr verwendet
werden, da die *lokale Variable* diese verdeckt (verschattet).

```java, java-exec
var x = 3;
int shadow(int a) {
    var x = 4;
    return x * a;
}
```

```java, java-exec
shadow(3)
```

Die *globale Variable* wird dadurch nicht geändert.

```java, java-exec
x
```

Weil *Parameter* auch *lokale Variablen* sind, kann *Shadowing* auch
beobachtet werden, wenn der Name eines *Parameters* und der Name einer
*globalen Variable* übereinstimmen.

```java, java-exec
var x = 3;
int f(int x) {
    return 2 * x;
}
```

```java, java-exec
f(5)
```

Bei diesem Aufruf überdeckt die *lokale Variable* `x` mit dem *Wert*
*5* die *globale Variable* `x` mit dem *Wert* *3*.



[^2]: oder einem anderen Block

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./variablen_in_methoden_aufgaben.md)
