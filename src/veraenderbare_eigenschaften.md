# Veränderbare Eigenschaften

Mit Feldern ohne `private` können wir veränderliche Eigenschaften
definieren.

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
var banana = new Article("Banane", 3);
```

Das heißt, dass die Eigenschaftswerte eines Objekts dieser Klasse nach
der Erzeugung des Objekts geändert werden können. Um den Wert einer
Eigenschaft zu ändern, schreiben wir diese auf die linke Seite des
Zuweisungsoperators.

```java, java-exec
banana.price = 2;
```

```java, java-exec
banana.price
```

## Vermeidung von ungültigen Zuständen

Die Prüfung im Konstruktor der Klasse `Article` verhindert, dass Artikel
mit negativen Preisen erstellt werden.

```java, java-exec
new Article("Banane", -1)
```

Wenn wir veränderliche Eigenschaften nutzen, ist es trotzdem möglich,
Objekte mit ungültigen Zuständen zu erzeugen.

```java, java-exec
var banana = new Article("Banane", 3);
banana.price = -1;
```

```java, java-exec
banana.price
```

Um dies zu vermeiden, müssen wir die Eigenschaft mit `private`
schützen.

```java, java-exec
class SafeArticle {
    String name;
    private int price;
    SafeArticle(String name, int price) {
        if (price < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
        this.name = name;
        this.price = price;
    }
}
```

```java, java-exec
var safeBanana = new SafeArticle("Banane", 3);
safeBanana.price = -1;
```

## Getter

Wenn es trotzdem möglich sein soll, den Wert der Eigenschaft `price`
zu lesen, kann eine Methode definiert werden, die diesen zurückgibt.

```java, java-exec
class SafeArticle2 {
    String name;
    private int price;
    SafeArticle2(String name, int price) {
        if (price < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
        this.name = name;
        this.price = price;
    }
    int getPrice() {
        return price;
    }
}
```

```java, java-exec
var safeBanana = new SafeArticle2("Banane", 2);
```

```java, java-exec
safeBanana.getPrice()
```

## Setter

Auch das Setzen von gültigen Werten kann durch eine Methode ermöglicht
werden.

```java, java-exec
class SafeArticle3 {
    String name;
    private int price;
    SafeArticle3(String name, int price) {
        if (price < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
        this.name = name;
        this.price = price;
    }
    int getPrice() {
        return price;
    }
    void setPrice(int newPrice) {
        if (newPrice < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
        price = newPrice;
    }
}
```

```java, java-exec
var safeBanana = new SafeArticle3("Banane", 2);
```

```java, java-exec
safeBanana.setPrice(-2)
```

```java, java-exec
safeBanana.setPrice(3)
```

```java, java-exec
safeBanana.getPrice()
```

## Rückgabewerte vs. Effekte

Bisher haben Methoden entweder einen Wert zurückgegeben oder (wie
`setPrice`) nur etwas verändert. Der Unterschied wird an einer Klasse
`Student` deutlich.

```java, java-exec
class Student {
    String name;
    int age;
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    int nextAge() {
        return age + 1;
    }
    void getOlder() {
        age = age + 1;
    }
    boolean getOlderCheckAllowedToBuyBeer() {
        age = age + 1;
        return age >= 16;
    }
}
```

`nextAge` berechnet das nächste Alter. Das Objekt ändert sich dabei
nicht.

```java, java-exec
var pana = new Student("Pana", 17);
pana.nextAge()
```

```java, java-exec
pana.age
```

`getOlder` gibt nichts zurück (`void`), ändert aber das Objekt.

```java, java-exec
pana.getOlder();
pana.age
```

Und beides zugleich geht auch: `getOlderCheckAllowedToBuyBeer`
verändert das Objekt und gibt einen Wert zurück.

```java, java-exec
var alex = new Student("Alex", 15);
alex.getOlderCheckAllowedToBuyBeer()
```

```java, java-exec
alex.age
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./veraenderbare_eigenschaften_aufgaben.md)
