# Datenkapselung

## Private Eigenschaften

Wir haben bereits gesehen, wie wir Records und Methoden für diese
Records definieren können. Zum Regeln des Zugriffs reicht ein Record
aber nicht mehr. Dafür braucht es eine `class`. In dem folgenden
Codeblock wollen wir eine Klasse *Article* definieren. Für jeden Artikel
soll geprüft werden können, ob er mit einem bestimmten Geldbetrag in
Euro/Cent gekauft werden kann.

```java, java-exec
class Article {
    String name;
    int priceInEuro;
    Article(String name, int priceInEuro) {
        this.name = name;
        this.priceInEuro = priceInEuro;
    }
    boolean enoughEuros(int myMoneyInEuros) {
        return priceInEuro < myMoneyInEuros;
    }
    int euroToCents(int euros) {
        return 100 * euros;
    }
    boolean enoughCents(int moneyInCents) {
        return euroToCents(priceInEuro) < moneyInCents;
    }
}
```

In einer `class` stehen die Eigenschaften als Felder im Körper. Der
Konstruktor weist sie mit `this` zu. Ansonsten arbeitet man wie im
Record: mit Methoden und Punktnotation.

Weil wir die Methoden `enoughEuros` und `enoughCents` definiert haben,
ist es nicht mehr nötig, von außen auf die Eigenschaft `priceInEuro`
zuzugreifen. Mit dem Schlüsselwort `private` vor der Definition der
Eigenschaft kann der Zugriff von außen verboten werden.

```java, java-exec
class Article {
    String name;
    private int priceInEuro;
    Article(String name, int priceInEuro) {
        this.name = name;
        this.priceInEuro = priceInEuro;
    }
    String name() {
        return name;
    }
    boolean enoughEuros(int myMoneyInEuros) {
        return priceInEuro < myMoneyInEuros;
    }
    int calcPriceInCents() {
        return 100 * priceInEuro;
    }
    boolean enoughCents(int moneyInCents) {
        return calcPriceInCents() < moneyInCents;
    }
}
```

```java, java-exec
var apple = new Article("Apfel", 3);
```

```java, java-exec
apple.priceInEuro
```

## Private Methoden

Die Methode `calcPriceInCents` wird nur innerhalb der Klasse `Article`
gebraucht. Mit `private` kann auch die Verwendung dieser Methode
außerhalb der Klasse verboten werden.

```java, java-exec
class Article {
    String name;
    private int priceInEuro;
    Article(String name, int priceInEuro) {
        this.name = name;
        this.priceInEuro = priceInEuro;
    }
    String name() {
        return name;
    }
    boolean enoughEuros(int myMoneyInEuros) {
        return priceInEuro < myMoneyInEuros;
    }
    private int calcPriceInCents() {
        return 100 * priceInEuro;
    }
    boolean enoughCents(int moneyInCents) {
        return calcPriceInCents() < moneyInCents;
    }
}
```

```java, java-exec
var banana = new Article("Banane", 2);
```

```java, java-exec
banana.calcPriceInCents()
```

Von außen bleibt nur nutzbar, was nicht `private` ist.

```java, java-exec
banana.enoughCents(300)
```

## Eigenschaften im Körper initialisieren

Wir können Eigenschaften auch direkt im Klassenkörper statt im
Konstruktor initialisieren.

```java, java-exec
class Cat {
    private String name;
    public int lives = 7;
    Cat(String name) {
        this.name = name;
    }
}
```

```java, java-exec
var garfield = new Cat("Garfield");
garfield.lives
```

Bei jedem Objekt der Klasse `Cat` hat die Eigenschaft `lives` nach dem
Erzeugen den Wert \\(7\\).

```java, java-exec
var catmando = new Cat("Catmando");
catmando.lives
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./datenkapselung_aufgaben.md)
