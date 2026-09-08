# Weitere Konstruktoren

Wir haben bereits gesehen, dass in der ersten Zeile der Definition
eines Records auch ein Konstruktor definiert wird.

```java, java-exec
record Article(String name, int price) {
}
```

Mit diesem können wir Objekte erzeugen.

```java, java-exec
new Article("Apfel", 3)
```

Falls viele Artikel einen Euro kosten, ist es sinnvoll, diesen Betrag
als Standard zu verwenden. Dafür definieren wir einen weiteren
Konstruktor, der nur den Namen nimmt und den Preis selbst ergänzt.
Mit `this(...)` rufen wir darin den ersten Konstruktor auf.

```java, java-exec
record Article(String name, int price) {
    Article(String name) {
        this(name, 1);
    }
}
```

Erzeugt jemand ein Objekt, ohne den Preis anzugeben, wird nun der
Standardwert verwendet.

```java, java-exec
new Article("Teelichter")
```

## Konstruktoren mit Zusatzlogik

Wir wollen den Benutzern des Records `Article` ermöglichen, bei der
Erzeugung eines Artikels einen Rabatt anzugeben. Der Konstruktor, den
wir bisher verwendet haben, soll aber weiterhin nutzbar bleiben.

Dafür definieren wir im Recordkörper einen weiteren Konstruktor. In
Klammern stehen die Parameter des neuen Konstruktors. Als erste Zeile
steht ein Aufruf eines anderen Konstruktors mit `this(...)`.

```java, java-exec
record Article(String name, int price) {
    Article(String name, int price, int discount) {
        this(name, price - discount);
    }
}
```

Der Name des weiteren Konstruktors ist wieder der Recordname.

```java, java-exec
new Article("Apfel", 3, 1)
```

Wir können beliebig viele Konstruktoren definieren. Die einzigen
Voraussetzungen sind:

- Jeder weitere Konstruktor muss mit `this(...)` einen anderen
  Konstruktor aufrufen.
- Es darf keine zwei Konstruktoren mit denselben Parametertypen geben.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./weitere_konstruktoren_aufgaben.md)
