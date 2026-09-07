# Werte und Ausdrücke

## Java als Taschenrechner

Die Jupyter-Zelle mit dem Java-Kernel ist ein Programm, mit dem
Berechnungen durchgeführt und Java-Programme ausgeführt werden können.

Wir können die Zelle als Taschenrechner verwenden, indem wir
Rechenausdrücke eingeben. Der Java-Kernel berechnet dann das Ergebnis
und zeigt es dem Benutzer an.

```java, java-exec
4 + 3
```
```java, java-exec
1 * 2 * 3 * 4
```

Wie jeder Taschenrechner kennt der Java-Kernel die
“Punkt-vor-Strich-Regel”.

```java, java-exec
1 + 2 * 5
```

Durch das Setzen von Klammern können wir selbst eine Reihenfolge für die
Auswertung eines *Ausdrucks* festlegen.

```java, java-exec
(1 + 2) * 5
```

## Operatoren, Werte, Ausdrücke

- Die Rechenzeichen wie `+`, `-` und `*` nennt man *Operatoren*. Mithilfe
von *Operatoren* werden Berechnungen (*Operationen*) wie die Addition,
Subtraktion und Multiplikation durchgeführt. Später werden wir noch
weitere *Operatoren* kennenlernen.
- Links und rechts von einem *Operator*
stehen die *Operanden*, die in der Rechnung verwendet werden. Im ersten
Beispiel oben steht der *Operator* `+` zwischen dem linken *Operanden*
`4` und dem rechten *Operanden* `3`.
- Zahlen wie `4` und `3` sind *Werte* (*Values*). *Werte* sind die
kleinsten Einheiten, mit denen ein Computerprogramm arbeitet. Das
Ergebnis einer Rechnung ist immer ein *Wert*. Später werden wir neben Zahlen noch
weitere Arten von *Werten* kennenlernen.
- Ein *Ausdruck* (*expression*) ist eine Kombination aus *Werten*,
*Operatoren* und Klammern, die zu einem *Wert* ausgewertet werden
kann[^1]. Im letzten Beispiel wurde der *Ausdruck* `(1 + 2) * 5` zu dem
Wert `15` ausgewertet.

## Syntaxfehler

Wenn ein fehlerhafter *Ausdruck* eingegeben wird, kann die Umgebung
diesen nicht auswerten und gibt eine Fehlermeldung aus.

```java, java-exec
1 + * 1
```

Bei diesem Fehler handelt es sich um einen Syntaxfehler. Die *Syntax*
einer Programmiersprache gibt an, welche Zeichen im Code erlaubt sind
und wie diese miteinander kombiniert werden dürfen. Ein Syntaxfehler
tritt auf, wenn eine dieser Regeln verletzt wurde. Die Umgebung zeigt
mit einem `^` genau an, welches Zeichen zuerst nicht interpretiert
werden konnte. In diesem Fall ist es das `*` nach dem `+`. An dieser
Stelle würde die Umgebung zum Beispiel eine Zahl, aber sicher kein
zweites Rechenzeichen erwarten.



[^1]: Ausdrücke können auch Methodenaufrufe und Variablen enthalten.
    Diese werden aber erst später behandelt.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./werte_und_ausdruecke_aufgaben.md)
