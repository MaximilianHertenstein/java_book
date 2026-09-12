# Weitere Konstruktoren

Wir haben bereits gesehen, dass in der ersten Zeile der Definition
eines Records auch ein Konstruktor definiert wird. Diesem muss für jede Eigenschaft ein Wert übergeben werden.

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
    public Article(String name) {
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
    public Article(String name, int price, int discount) {
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

Nach dem Aufruf von `this(...)` kann in jedem weiteren Konstruktor
zusätzlicher Code eingebaut werden. Dieser Code wird ausgeführt, wenn
das Objekt mit diesem Konstruktor erzeugt wird.

```java, java-exec
record Article(String name, int price) {
    public Article(String name) {
        this(name, 1);
        IO.println("Ein Artikel mit dem Namen " + name + " wurde erzeugt.");
    }
}
```

Der Konstruktor, der aus dem Recordkopf entsteht, wird automatisch
definiert. Auch in diesen Konstruktor können wir zusätzlichen Code
einbauen. Dafür verwenden wir einen kompakten Konstruktor im
Recordkörper. Das `public` steht dabei, damit der Konstruktor überall
nutzbar ist.

```java, java-exec
record Article(String name, int price) {
    public Article {
        IO.println("Ein Artikel mit dem Namen " + name + " wurde erzeugt.");
    }
}
```

```java, java-exec
new Article("Apfel", 3)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./weitere_konstruktoren_aufgaben.md)
