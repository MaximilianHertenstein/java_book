# Booleans

In diesem Kapitel beschäftigen wir uns mit Wahrheitswerten (*Booleans*).
Diese sind im Gegensatz zu *Integern* und *Strings* zumindest in der
Hinsicht leichter zu verstehen, dass es nur zwei *Booleans* gibt:

- Wahr (`true`)

- Falsch (`false`)

## Vergleiche

Wir erhalten ein *Boolean*, wenn wir zwei *Werte* miteinander
vergleichen.

```java, java-exec
2 < 3
```
```java, java-exec
2 * 3 == 3 * 2
```
```java, java-exec
"hello" == "hello!"
```
```java, java-exec
2 != 2
```

Die wichtigsten *Vergleichsoperatoren* sind in der folgenden Tabelle
aufgeführt.

![tabelle_vergleichsoperatoren](tabelle_vergleichsoperatoren.svg)

<span id="table:vgl_op" data-label="table:vgl_op"></span>

## Vergleiche von Werten mit unterschiedlichen Typen

Zwei *Werte* mit verschiedenen *Typen* lassen sich gar nicht erst
vergleichen.

```java, java-exec
1 == "1"
```

Die Fehlermeldung sagt aus, dass `==` keine *Werte* mit
unterschiedlichen *Typen* vergleichen kann.

## Variablen

Wie alle *Werte* können wir *Booleans* in *Variablen* speichern.

```java, java-exec
var sevenIsFivePlusThree = 7 == 5 + 3;
```
```java, java-exec
sevenIsFivePlusThree
```

## Methoden

Wie alle Werte können *Booleans* auch *Argumente* oder *Rückgabewerte* von
Methoden sein.

```java, java-exec
boolean volljaehrig(int alter) {
    return alter >= 18;
}
```

```java, java-exec
volljaehrig(17)
```
```java, java-exec
volljaehrig(18)
```

## Boolesche Ausdrücke und Bedingungen

Ausdrücke, die zu einem *Boolean* ausgewertet werden, nennt man
*boolesche Ausdrücke* oder Bedingungen. Wie Rechenausdrücke können diese
mit *Operatoren* verknüpft werden.

## Verneinungen

Der Operator `!` macht `true` zu `false` und `false` zu `true`.

```java, java-exec
!true
```
```java, java-exec
!false
```
```java, java-exec
!(1 == 2)
```

## Verknüpfungen von Bedingungen

Mithilfe der *Operatoren* `&&` und `||` können zwei *boolesche
Ausdrücke* miteinander verknüpft werden. Wenn zwei *boolesche Ausdrücke*
mit `&&` verknüpft werden, dann wird der verknüpfte *boolesche
Ausdruck* genau dann zu `true` ausgewertet, wenn beide Teilausdrücke zu
`true` ausgewertet werden.

```java, java-exec
true && 15 > 10
```
```java, java-exec
1 < 2 && 2 > 0
```
```java, java-exec
3 <= 3 && (2 < 0 && 4 >= 5)
```

Wenn zwei *boolesche Ausdrücke* mit `||` verknüpft werden, dann ist der
verknüpfte *boolesche Ausdruck* genau dann wahr, wenn mindestens einer
der beiden *Teilausdrücke* zu `true` ausgewertet wird.

```java, java-exec
5 != 5 || !(4 < 3)
```
```java, java-exec
4 <= 3 || (1 < 2 && 2 > 0)
```

## Vorrangregeln

Bei Rechenausdrücken gilt die Punkt-vor-Strich-Regel.

```java, java-exec
1 + 2 * 3
```

Der Ausdruck wird also folgendermaßen ausgewertet.

```java
1 + 2 * 3 = 1 + 6 = 7
```

Für *boolesche Ausdrücke* gibt es die `&&`-vor-`||`-Regel.


```java, java-exec
true || false && false
```

Der Ausdruck wird also folgendermaßen ausgewertet.

```java
true || false && false = true || false = true
```

Eine andere Auswertungsreihenfolge kann durch das Setzen von Klammern erreicht werden.

```java, java-exec
(true || false) && false
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./booleans_aufgaben.md)

