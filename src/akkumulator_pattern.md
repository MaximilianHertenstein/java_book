# Akkumulator-Pattern

## Wiederholung

Wir haben bereits gesehen, wie man mit einer `while`-Schleife mehrere
Zahlen ausgeben kann.

```java, java-exec
int x = 1;
while (x <= 5) {
    IO.println(x);
    x = x + 1;
}
```

Die Variable `x` durchläuft dabei die Zahlen von \\(1\\) bis \\(5\\). In
jedem Schleifendurchlauf wird nur der aktuelle Wert von `x` verwendet.

## Berechnung von Summen

Wenn wir die Summe der Zahlen von \\(1\\) bis \\(5\\) berechnen wollen,
benötigen wir eine zweite Variable. In dieser Variable soll immer die
Summe der bisher durchlaufenen Zahlen gespeichert sein. Vor der Ausführung der
Schleife muss die Summe also \\(0\\) sein.

```java, java-exec
int total = 0;
```

In jedem Schleifendurchlauf muss die Summe um den aktuellen Wert von `x`
erhöht werden.

```java, java-exec
int total = 0;
int x = 1;
while (x <= 5) {
    total = total + x;
    x = x + 1;
}
IO.println(total);
```

Dadurch ist nach dem letzten Schleifendurchlauf die Summe aller Zahlen,
die `x` durchlaufen hat, in `total` gespeichert.

Durch zusätzliche `IO.println`-Statements sieht man genau, wie sich die
Summe verändert.

```java, java-exec
int total = 0;
int x = 1;
IO.println("x = " + x + " total = " + total);
while (x <= 5) {
    total = total + x;
    IO.println("x = " + x + " total = " + total);
    x = x + 1;
    IO.println("x = " + x + " total = " + total);
}
IO.println(total);
```

## Akkumulator

Die zusätzliche Variable, die angelegt wird, um das Ergebnis zu
berechnen, nennt man **Akkumulator**. Der Aufbau von oben lässt sich auf
sehr viele Beispiele übertragen.

- Akkumulator initialisieren
- Schleife durchlaufen und Akkumulator in der Schleife anpassen
- Der Akkumulator enthält jetzt das korrekte Ergebnis

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./akkumulator_pattern_aufgaben.md)
