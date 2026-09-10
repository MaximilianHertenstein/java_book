# Primitive Typen und Objekttypen

Bei *Records* hast du *Objekte* schon kennengelernt: Auf `banana`
rufen wir Komponenten wie `banana.price()` mit Punkt auf, und zwei
*Artikel* mit gleichem Inhalt vergleichen wir mit `equals`, weil `==`
bei *Objekten* nur prüft, ob es dasselbe *Objekt* ist. Dasselbe gilt
allgemein: Neben den *primitiven Typen* gibt es entsprechende *Klassen*,
deren *Werte* *Objekte* sind.

| primitiver Typ | Klasse      |
|:---------------|:------------|
| `int`          | `Integer`   |
| `boolean`      | `Boolean`   |
| `char`         | `Character` |
| `float`        | `Float`     |
| `double`       | `Double`    |
|                | `String`    |

Im Gegensatz zu den primitiven *Werten* können wir auf *Objekten*
dieser Klassen *Methoden* mit Punkt aufrufen, genau wie bei *Records*.

```java, java-exec
Integer c = 5;
```

```java, java-exec
String d = c.toString();
```

Der Vergleich mit `==` prüft bei primitiven Typen, ob zwei Werte
inhaltlich gleich sind.

```java, java-exec
int e = 3;
int f = 3;
e == f
```

Bei Objekten wird mit `==` geprüft, ob es sich um dasselbe Objekt
handelt, wie du es schon von *Records* kennst.

```java, java-exec
Integer g = 150;
Integer h = 150;
g == h
```

Objekte können mit der `equals`-Methode auf inhaltliche Gleichheit
geprüft werden.

```java, java-exec
g.equals(h)
```

Primitive Datentypen und die entsprechenden Klassen werden automatisch
konvertiert.

```java, java-exec
Integer i = 5;
int j = i;
j
```

Im Gegensatz zu primitiven Typen können Werte von Klassen immer `null`
sein.

```java, java-exec
Integer noInt = null;
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./primitive_typen_und_objekttypen_aufgaben.md)
