# Überprüfungen bei der Objekterzeugung

## Motivation

Wir haben bereits gesehen, wie wir Records definieren und Objekte
eines Records erzeugen können.

```java, java-exec
record Article(String name, int price) {
}
```

```java, java-exec
var apple = new Article("Apfel", 3);
apple
```

Leider können Programmierer, die unseren Code nutzen, Objekte mit
ungültigen Eigenschaften erzeugen.

```java, java-exec
var banana = new Article("Banane", -2);
banana
```

## Prüfung im automatisch definierten Konstruktor

Wie wir im vorherigen Kapitel gesehen haben, können wir zusätzlichen
Code in Konstruktoren einbauen.

Um zu verhindern, dass Objekte mit ungültigen Werten erzeugt werden,
prüfen wir die Werte direkt im automatisch definierten Konstruktor. Wenn
der Wert ungültig ist, brechen wir mit
`throw new IllegalArgumentException(...)` ab.

```java, java-exec
record Article(String name, int price) {
    public Article {
        if (price < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
    }
}
```

```java, java-exec
new Article("Banane", -2)
```

## Prüfung in weiteren Konstruktoren

Auch in weiteren Konstruktoren können Werte geprüft werden.

```java, java-exec
record Article(String name, int price) {
    public Article {
        if (price < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
    }

    public Article(String name, int price, int discount) {
        if (discount < 0) {
            throw new IllegalArgumentException("Der Rabatt muss positiv sein");
        }
        this(name, price - discount);
    }
}
```

```java, java-exec
new Article("Banane", 3, -1)
```

Da der zweite Konstruktor den automatisch definierten Konstruktor
aufruft, muss hier nicht noch einmal der Wert von `price` geprüft
werden.

```java, java-exec
new Article("Banane", -1, 5)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./ueberpruefungen_aufgaben.md)
