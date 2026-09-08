# Eigenschaften im Klassenkörper

Auch im Recordkörper können weitere Eigenschaften eines Records
definiert werden. Dabei können die Eigenschaften aus der Kopfzeile
verwendet werden. Da Records unveränderlich sind, geht das als Methode,
die den Wert bei jedem Aufruf neu berechnet.

```java, java-exec
record Article(String name, int priceInEuros) {
    int priceInCents() {
        return 100 * priceInEuros();
    }
}
```

Beim Aufruf eines Konstruktors werden aber nur für die in der Kopfzeile
definierten Eigenschaften Werte übergeben.

```java, java-exec
var banana = new Article("Banane", 3);
```

Auch in der String-Darstellung werden nur diese Eigenschaften verwendet.

```java, java-exec
banana
```

Ansonsten kann mit den im Recordkörper definierten Methoden genau wie
mit den in der Kopfzeile definierten Komponenten gearbeitet werden.
Z. B. ist ein Zugriff von außerhalb mit der Punktnotation möglich.

```java, java-exec
banana.priceInCents()
```

In den Methoden des Records können diese Methoden wie alle anderen
Methoden verwendet werden.

```java, java-exec
record Article(String name, int priceInEuros) {
    int priceInCents() {
        return 100 * priceInEuros();
    }
    boolean enoughCents(int availableCents) {
        return availableCents >= priceInCents();
    }
}
```

```java, java-exec
var banana = new Article("Banane", 3);
banana.enoughCents(250)
```

Wirklich veränderbare Eigenschaften wie `available` gehen im Record
nicht. Dafür braucht es eine `class`, siehe
[Datenkapselung](./datenkapselung.md).

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./eigenschaften_im_klassenkoerper_aufgaben.md)
