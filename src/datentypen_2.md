# Datentypen 2

## Primitive Typen und Objekttypen

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

## Explizite Typangabe

In Java ist es oft nicht nötig, den Typ einer Variable anzugeben.

```java, java-exec
var x = 2;
```

Es ist aber **möglich**, den Typ einer Variablen beim Initialisieren
anzugeben. Dafür schreibt man den Typ vor den Namen der Variablen.

```java, java-exec
int y = 3;
```

Wenn der Typ nicht zu dem Wert passt, wird eine Fehlermeldung angezeigt.

```java, java-exec
String z = 4;
```

## Methoden mit dem gleichen Namen

Es ist möglich, mehrere Methoden mit denselben Namen zu definieren.
Dafür müssen sich aber die Typen der Parameter unterscheiden.

```java, java-exec
int inc(int n) {
    return n + 1;
}
String inc(String s) {
    return s + " + 1";
}
```

Der Compiler prüft beim Methodenaufruf, welche Typen die Argumente haben,
und ruft die richtige Methode auf.

```java, java-exec
inc(5)
```
```java, java-exec
inc("5")
```

## Typvariablen

Die Methode `getFirst` gibt das erste Element einer Liste von Integern
zurück.

```java, java-exec
import java.util.List;
Integer getFirstInteger(List<Integer> xs) {
    return xs.get(0);
}
```

Wenn wir jetzt eine Methode schreiben, die den ersten Boolean in einer
Liste zurückgibt, wird fast der ganze Code wiederholt.

```java, java-exec
Boolean getFirstBoolean(List<Boolean> xs) {
    return xs.get(0);
}
```

Der einzige Unterschied in der Implementierung der beiden Methoden ist
der Typ, der in spitzen Klammern hinter `List` und als Rückgabetyp
angegeben wird.

Beachte: Die beiden Methoden dürfen nicht beide `getFirst` heißen.
Ohne die Typen in spitzen Klammern sähen beide Köpfe gleich aus
(`getFirst(List)`), deshalb meldet der Compiler einen Fehler. Auch das
spricht für Typvariablen.

Um die Codewiederholung zu vermeiden, können wir eine Typvariable an
dieser Stelle verwenden. Diese ist ein Platzhalter für einen konkreten
Typ wie `Integer` oder `Boolean`. Als Variablenname verwenden wir ein
großes `T`:

Der Parameter ist dann

`List<T> xs`

und der Rückgabetyp ist

`T`

Wir müssen jetzt noch vor dem Rückgabetyp die Typvariable definieren.
Dafür schreibt man den Namen der Typvariablen in spitzen Klammern vor
den Rückgabetyp.

```java, java-exec
<T> T getFirst(List<T> xs) {
    return xs.get(0);
}
```

Der Methodenkopf kann folgendermaßen gelesen werden: *Die Elemente in
`xs` haben alle denselben Typ `T`. Die Methode gibt ein Element vom Typ
`T` zurück.*

Beim Aufruf wird jetzt die Typvariable `T` durch einen konkreten Typ
und der Parameter `xs` durch eine konkrete Liste mit Elementen von
diesem Typ ersetzt. Den konkreten Typ erschließt sich der Compiler dabei
selbst.

```java, java-exec
var myIntList = List.of(5, 2, 3);
getFirst(myIntList)
```
```java, java-exec
var myBoolList = List.of(true, false);
getFirst(myBoolList)
```

## Methoden mit mehreren Typvariablen

Genau so, wie man Methoden mit mehreren Parametern definieren kann, ist
es möglich, Methoden mit mehreren Typvariablen zu definieren. Wie die
Parameter von Methoden werden diese durch Kommas getrennt.

```java, java-exec
<T, S> S ifEqualFirstElseSecond(T a, T b, List<S> xs) {
    if (a.equals(b)) {
        return xs.get(0);
    } else {
        return xs.get(1);
    }
}
```

```java, java-exec
ifEqualFirstElseSecond("hello", "hella", List.of(4, 9))
```
```java, java-exec
ifEqualFirstElseSecond(1, 1, List.of('u', 'a'))
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./datentypen_2_aufgaben.md)
