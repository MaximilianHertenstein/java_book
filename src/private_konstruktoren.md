# Private Konstruktoren

Auch Konstruktoren kann man durch den Modifikator `private` vor
Zugriff von außen schützen.

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
    private Article(String name, int price, int discount) {
        this(name, price - discount);
        if (discount < 0) {
            throw new IllegalArgumentException("Der Rabatt muss positiv sein");
        }
    }
}
```

```java, java-exec
new Article("Banane", 3, 2)
```

Es ist auch möglich, den Haupt-Konstruktor als `private` zu
kennzeichnen. Dafür steht `private` direkt vor dem Konstruktor.

```java, java-exec
class Article2 {
    String name;
    int price;
    private Article2(String name, int price) {
        if (price < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
        this.name = name;
        this.price = price;
    }
    Article2(String name, int price, int discount) {
        this(name, price - discount);
        if (discount < 0) {
            throw new IllegalArgumentException("Der Rabatt muss positiv sein");
        }
    }
}
```

```java, java-exec
new Article2("Apfel", 3)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./private_konstruktoren_aufgaben.md)
