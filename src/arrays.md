# Arrays

## Motivation

*Listen* aus `List.of` und `ArrayList` sind Objekte mit Methoden wie
`get`, `set` und `add`. Daneben gibt es eine einfachere Form für
Sammlungen mit fester Länge: *Arrays*. Bei einem *Array* steht die
Anzahl der Elemente von Anfang an fest.

## Arrays erzeugen und ausgeben

Ein *Array* wird erzeugt, indem wir hinter den Elementtyp eckige
Klammern schreiben und die Elemente in geschweiften Klammern durch
Kommas getrennt auflisten.

```java, java-exec
boolean[] xs = {true, false, true};
xs
```

## Zugriff über Indizes

Auch die Elemente eines *Arrays* haben *Indizes*, die mit \\(0\\)
beginnen. In eckigen Klammern können wir auf die Elemente zugreifen.

```java, java-exec
boolean[] xs = {true, false, true};
xs[2]
```

Bei einem zu großen *Index* erhalten wir einen Fehler.

```java, java-exec
boolean[] xs = {true, false, true};
xs[3]
```

## Länge eines Arrays

Die Länge eines *Arrays* steht in `length`. Im Gegensatz zu `length()`
bei *Strings* und `size()` bei *Listen* werden hier keine Klammern
geschrieben.

```java, java-exec
boolean[] xs = {true, false, true};
xs.length
```

## Iteration über Arrays

*Arrays* lassen sich wie *Listen* durchlaufen, mit der
Elementschleife oder über die *Indizes*.

```java, java-exec
boolean[] xs = {true, false, true, false};
for (boolean x : xs) {
    IO.println(x);
}
```

```java, java-exec
boolean[] xs = {true, false, true, false};
for (int i = 0; i < xs.length; i = i + 1) {
    IO.println(xs[i]);
}
```

## Einzelne Elemente ändern

Einzelne Elemente lassen sich austauschen, die Länge nicht.

```java, java-exec
int[] xs = {1, 2, 3};
xs[0] = 99;
xs
```

## Neue Arrays per Schleife bauen

Mit `new` und einer Längenangabe erzeugen wir ein leeres *Array* und
füllen es per Schleife. So lässt sich z. B. jedes Element verdoppeln.

```java, java-exec
int[] doubleAll(int[] xs) {
    int[] result = new int[xs.length];
    for (int i = 0; i < xs.length; i = i + 1) {
        result[i] = 2 * xs[i];
    }
    return result;
}
```

```java, java-exec
doubleAll(new int[]{1, 2, 3})
```

Als Faustregel: Normalerweise `List.of` und `ArrayList` verwenden.
*Arrays* nur dort, wo die Länge von Anfang an feststeht und es einfach
bleiben soll.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./arrays_aufgaben.md)
