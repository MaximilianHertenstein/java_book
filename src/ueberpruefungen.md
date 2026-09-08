# Überprüfungen bei der Objekterzeugung

## Motivation

Wir haben bereits gesehen, wie wir Klassen definieren und Objekte
einer Klasse erzeugen können.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        this.name = name;
        this.price = price;
    }
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

## Prüfen und abbrechen

Um dies zu verhindern, prüfen wir im Konstruktor die Werte und brechen
mit `throw new IllegalArgumentException(...)` ab, wenn etwas nicht
stimmt. In runden Klammern steht die Fehlermeldung.

```java, java-exec
int price = -3;
if (price < 0) {
    throw new IllegalArgumentException("Der Preis muss positiv sein");
}
```

## Prüfung im Konstruktor

Indem wir die Prüfung in den Konstruktor schreiben, verhindern wir,
dass Objekte mit ungültigen Eigenschaften erzeugt werden.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        if (price < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
        this.name = name;
        this.price = price;
    }
}
```

```java, java-exec
new Article("Banane", -2)
```

## Prüfung in weiteren Konstruktoren

Bei der Definition eines weiteren Konstruktors können wir Code
anhängen, der bei jedem Aufruf dieses Konstruktors ausgeführt wird.
Ein Init-Block ist dafür nicht nötig.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        if (price < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
        this.name = name;
        this.price = price;
    }
    Article(String name, int price, int discount) {
        this(name, price - discount);
        if (discount < 0) {
            throw new IllegalArgumentException("Der Rabatt muss positiv sein");
        }
    }
}
```

```java, java-exec
new Article("Banane", 3, -1)
```

## Fehler sind Objekte

Fehler sind in Java Klassen und wir können mit einem Konstruktor
Objekte von diesen Klassen erzeugen.

```java, java-exec
new ArithmeticException("/ by zero")
```

Viel wichtiger ist aber, dass Fehler mit `throw` geworfen werden
können. Dies führt dazu, dass die Fehlermeldung beim Programmierer
ankommt. Fehlermeldungen können genutzt werden, um anzuzeigen, dass
eine Methode mit einem ungültigen Wert aufgerufen wurde.

```java, java-exec
boolean allowedToDrinkBeer(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
    return age >= 16;
}
```

```java, java-exec
allowedToDrinkBeer(17)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./ueberpruefungen_aufgaben.md)
