# Primitive Typen und Objekttypen

Auf einem `String` können wir mit `wert.methodenname(...)` Methoden aufrufen.

```java, java-exec
var s = "hello";
```
```java, java-exec
s.length()
```
```java, java-exec
s.charAt(0)
```

Solche Typen nennt man *Klassen*. Die Werte einer Klasse nennt man
*Objekte*.

Für viele *primitive Typen* gibt es passende *Klassen*,
deren *Werte* ebenfalls *Objekte* sind.

| primitiver Typ | Klasse      |
|:---------------|:------------|
| `int`          | `Integer`   |
| `boolean`      | `Boolean`   |
| `char`         | `Character` |
| `float`        | `Float`     |
| `double`       | `Double`    |
|                | `String`    |

Auf den *Objekten* dieser Klassen können wir Methoden mit Punkt
aufrufen.

```java, java-exec
Integer c = 5;
```

```java, java-exec
String d = c.toString();
```

Java wandelt primitive Werte und die passenden Klassen bei Bedarf
automatisch ineinander um.

```java, java-exec
int converted = c;
```
```java, java-exec
converted
```

## Nicht alle Werte sind Objekte

Java unterscheidet zwischen primitiven Werten und Objekten. Die
einfachen Typen (`int`, `char`, `boolean`, `double`) haben keine Methoden,
die mit Punktnotation genutzt werden können.


Mit `==` vergleicht Java bei primitiven Typen die Werte selbst.

```java, java-exec
int e = 3;
int f = 3;
e == f
```

Bei Objekten prüft `==`, ob beide Variablen auf dasselbe Objekt zeigen.

```java, java-exec
Integer g = 300;
Integer h = 300;
g == h
```

Für den Vergleich des Inhalts gibt es bei Objekten die `equals`-Methode.

```java, java-exec
g.equals(h)
```

Variablen mit einem Klassentyp können außerdem `null` enthalten.

```java, java-exec
Integer noInt = null;
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./primitive_typen_und_objekttypen_aufgaben.md)
