# Aufgaben: Veränderbare Eigenschaften

## Quiz

### Quiz 1

{{#quiz ./quizzes/veraenderbare_eigenschaften_01.toml}}

### Quiz 2

{{#quiz ./quizzes/veraenderbare_eigenschaften_02.toml}}

### Quiz 3

{{#quiz ./quizzes/veraenderbare_eigenschaften_03.toml}}

### Quiz 4

{{#quiz ./quizzes/veraenderbare_eigenschaften_04.toml}}

### Quiz 5

{{#quiz ./quizzes/veraenderbare_eigenschaften_05.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        this.name = name;
        this.price = price;
    }
}
var banana = new Article("Banane", 3);
banana.price = 2;
banana.price
```

### 2. Verändere die Eingabe

Ändere nur den zugewiesenen Wert, sodass `banana.price` danach `7` ist.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        this.name = name;
        this.price = price;
    }
}
var banana = new Article("Banane", 3);
banana.price = 2;
banana.price
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass das Lesen weiter möglich ist, das Feld aber geschützt ist.

```java, java-exec
class SafeArticle2 {
    String name;
    private int price;
    SafeArticle2(String name, int price) {
        this.name = name;
        this.price = price;
    }
    ____ {
        return price;
    }
}
var safeBanana = new SafeArticle2("Banane", 2);
safeBanana.getPrice()
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `price` privat ist. Nutze stattdessen den Setter mit einem gültigen Wert.

```java, java-exec
class SafeArticle3 {
    String name;
    private int price;
    SafeArticle3(String name, int price) {
        this.name = name;
        this.price = price;
    }
    void setPrice(int newPrice) {
        if (newPrice < 0) {
            throw new IllegalArgumentException("Der Preis muss positiv sein");
        }
        price = newPrice;
    }
}
var safeBanana = new SafeArticle3("Banane", 2);
safeBanana.price = 3;
```

### 5. Prüfe deine Idee

Sage voraus, welcher Aufruf abbricht und welcher gelingt, bevor du den Code ausführst.

```java, java-exec
class SafeArticle3 {
    String name;
    private int price;
    SafeArticle3(String name, int price) {
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
var safeBanana = new SafeArticle3("Banane", 2);
safeBanana.setPrice(-2)
```

```java, java-exec
class SafeArticle3 {
    String name;
    private int price;
    SafeArticle3(String name, int price) {
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
var safeBanana = new SafeArticle3("Banane", 2);
safeBanana.setPrice(3);
safeBanana.getPrice()
```
