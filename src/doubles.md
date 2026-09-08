# Doubles

## Grundlagen

Kommazahlen haben in Java den *Typ* `double`. Mit dem *Operator* `/`
kann man eine gewöhnliche Division durchführen, sobald mindestens eine
Seite eine Kommazahl ist.

```java, java-exec
5.0 / 2
```

Das Ergebnis ist eine Kommazahl. Vorsicht: Steht auf beiden Seiten ein
*Integer*, wird ganzzahlig geteilt (siehe
[Ganzzahlige Division](./ganzzahlige_division.md)).

```java, java-exec
5 / 2
```

*Doubles* unterstützen alle *Rechenoperationen*, die wir mit ganzen Zahlen
verwendet haben.

```java, java-exec
1.0 + 2.4
1.5 * 1.5
10.0 % 3.0
```

Auch einfache Divisionen enden oft endlos. Am Ende wird gerundet.

```java, java-exec
10.0 / 3.0
```

Die Rechnung mit *Doubles* führt leider oft zu Ergebnissen, die nicht
ganz exakt sind.

```java, java-exec
10.7 - 12.3
```

*Doubles* können wir wie alle *Werte* in *Variablen* speichern, als
*Argumente* und *Rückgabewerte* von Methoden nutzen und in *Listen*
speichern. Da dies nicht wirklich überraschend ist, wird es hier nicht
nochmals vorgeführt.

## Rechnungen mit Doubles und Integern

Diese *Operationen* kann man auch mit einem *Integer* und einem *Double*
verwenden. Dabei wird zunächst das *Integer* zu einem *Double*
konvertiert und danach die entsprechende Rechnung durchgeführt.

```java, java-exec
1.3 + 2
```

## Konvertierung

Die *Konvertierung* kann auch manuell angewendet werden. Hierfür
schreibt man den Zieltyp in runden Klammern vor den *Wert*.

```java, java-exec
(double) 10
```

Auch eine *Konvertierung* in die andere Richtung ist möglich.

```java, java-exec
(int) 10.7
```

Bei einer *Konvertierung* von *Doubles* zu *Integern* wird immer
abgerundet.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./doubles_aufgaben.md)
