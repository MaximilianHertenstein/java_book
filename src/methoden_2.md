# Methoden 2

## Wiederholung

Wir haben bereits gesehen, wie wir Methoden definieren können.

```java, java-exec
int yardToFeet(int lengthInYard) {
    return 3 * lengthInYard;
}
int feetToInch(int lengthInFeet) {
    return 12 * lengthInFeet;
}
```

## Methodenaufrufe und Ausdrücke

Methodenaufrufe können in *Ausdrücken* verwendet werden.

```java, java-exec
12 * yardToFeet(7)
```

Das *Argument* einer Methode kann ein beliebiger *Ausdruck* sein.

```java, java-exec
yardToFeet(2 * 2)
```

Vor dem Methodenaufruf wird das *Argument* `2 * 2` ausgewertet. Das
Ergebnis `4` wird dann an die Methode übergeben.

## Methoden kombinieren

In einem *Ausdruck* können wir auch mehrere Methodenaufrufe
kombinieren. Zum Beispiel können wir mit dem folgenden Aufruf *7* Yard in
Zoll umrechnen.

```java, java-exec
feetToInch(yardToFeet(7))
```

Die Auswertung kann folgendermaßen skizziert werden:

![verkettung_funktionen](verkettung_funktionen.svg)

Zunächst wird `yardToFeet(7)` zu `21` ausgewertet. Dieses Ergebnis ist
anschließend das *Argument* von `feetToInch`.

## Methoden in anderen Methoden verwenden

Diese Kombination von Methodenaufrufen ist auch innerhalb von
Methoden nützlich. Wir können z. B. die Methoden `yardToFeet` und
`feetToInch` zu einer einzigen Methode `yardToInch` kombinieren.

```java, java-exec
int yardToInch(int lengthInYard) {
    return feetToInch(yardToFeet(lengthInYard));
}
```

```java, java-exec
yardToInch(7)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./methoden_2_aufgaben.md)

