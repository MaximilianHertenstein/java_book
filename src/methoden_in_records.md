# Methoden in Records

Wir haben schon gesehen, dass wir eigene Datentypen definieren können.

```java, java-exec
record Article(String name, int price) {
}
```

Und die Werte dieser Datentypen mit Methoden verarbeiten können.

```java, java-exec
boolean enoughMoney(Article article, int myMoney) {
    return article.price() < myMoney;
}
```

Die Methode `enoughMoney` wird immer mit einem Artikel aufgerufen. Auf
dessen Komponente `price` muss im Methodenkörper dann mit `.price()`
zugegriffen werden.

```java, java-exec
var apple = new Article("Apfel", 3);
enoughMoney(apple, 4)
```

Wir können diese Methode aber auch in die Definition des Records
einbauen.

```java, java-exec
record Article(String name, int price) {
    boolean enoughMoney(int myMoney) {
        return price() < myMoney;
    }
}
```

Es ist jetzt nicht mehr nötig, einen `Article` zu übergeben. Die
Komponenten des Records können einfach im Methodenkörper verwendet
werden. Für den Aufruf brauchen wir trotzdem einen Wert mit dem Typ
`Article`.

Der Aufruf von `enoughMoney` erfolgt dann mit einem Punkt hinter einem
`Article`.

```java, java-exec
var banana = new Article("Banane", 5);
banana.enoughMoney(4)
```

Methoden, die in einem Record definiert werden, nennt man *Methoden* im
engeren Sinn: Sie gehören zum Datentyp und werden immer an einem Objekt
aufgerufen.

## Zugriff auf das komplette Objekt

Mit dem Schlüsselwort `this` kann in einer Methode das Objekt verwendet
werden, mit dem die Methode aufgerufen wurde.

```java, java-exec
record Article(String name, int price) {
    Article cheaperArticle(Article other) {
        if (price() < other.price()) {
            return this;
        } else {
            return other;
        }
    }
}
```

```java, java-exec
var strawberry = new Article("Erdbeere", 2);
var kiwi = new Article("Kiwi", 4);
strawberry.cheaperArticle(kiwi)
```

## Überladung in Records

Es ist möglich, in einem Record zwei Methoden mit demselben Namen zu
definieren. Die Voraussetzung dafür ist, dass sich die Typen oder die
Anzahl der Parameter dieser Methoden unterscheiden.

```java, java-exec
record Student() {
    void greet() {
        IO.println("Hello");
    }
    void greet(String name) {
        IO.println("Hello " + name);
    }
}
```

Der Compiler prüft bei einem Aufruf der Methode `greet`, welche Version
aufgerufen werden soll. Wird kein Argument übergeben, wird die Methode
ohne Parameter aufgerufen:

```java, java-exec
var nino = new Student();
nino.greet();
```

Wird ein `String` übergeben, wird die Methode mit einem Parameter vom
Typ `String` aufgerufen:

```java, java-exec
nino.greet("Alex");
```

Wenn in einer Klasse mehrere Methoden mit demselben Namen, aber
unterschiedlichen Parametern definiert werden, spricht man von
Methodenüberladung. Genau wie Methoden können auch Konstruktoren
überladen werden.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./methoden_in_records_aufgaben.md)
