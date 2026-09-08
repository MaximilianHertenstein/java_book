# Aufgaben: Datenkapselung

## Quiz

### Quiz 1

{{#quiz ./quizzes/datenkapselung_01.toml}}

### Quiz 2

{{#quiz ./quizzes/datenkapselung_02.toml}}

### Quiz 3

{{#quiz ./quizzes/datenkapselung_03.toml}}

### Quiz 4

{{#quiz ./quizzes/datenkapselung_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
class Article {
    String name;
    private int priceInEuro;
    Article(String name, int priceInEuro) {
        this.name = name;
        this.priceInEuro = priceInEuro;
    }
    boolean enoughEuros(int myMoneyInEuros) {
        return priceInEuro < myMoneyInEuros;
    }
}
var apple = new Article("Apfel", 3);
apple.enoughEuros(4)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass `false` zurückgegeben wird.

```java, java-exec
class Article {
    String name;
    private int priceInEuro;
    Article(String name, int priceInEuro) {
        this.name = name;
        this.priceInEuro = priceInEuro;
    }
    boolean enoughEuros(int myMoneyInEuros) {
        return priceInEuro < myMoneyInEuros;
    }
}
var apple = new Article("Apfel", 3);
apple.enoughEuros(4)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass der Zugriff von außen verboten ist.

```java, java-exec
class Article {
    String name;
    ____ int priceInEuro;
    Article(String name, int priceInEuro) {
        this.name = name;
        this.priceInEuro = priceInEuro;
    }
}
var apple = new Article("Apfel", 3);
apple.priceInEuro
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `calcPriceInCents` privat ist. Rufe stattdessen die öffentliche Methode auf.

```java, java-exec
class Article {
    String name;
    private int priceInEuro;
    Article(String name, int priceInEuro) {
        this.name = name;
        this.priceInEuro = priceInEuro;
    }
    private int calcPriceInCents() {
        return 100 * priceInEuro;
    }
    boolean enoughCents(int moneyInCents) {
        return calcPriceInCents() < moneyInCents;
    }
}
var banana = new Article("Banane", 2);
banana.calcPriceInCents()
```

### 5. Prüfe deine Idee

Sage voraus, was zurückgegeben wird, bevor du den Code ausführst.

```java, java-exec
class Article {
    String name;
    private int priceInEuro;
    Article(String name, int priceInEuro) {
        this.name = name;
        this.priceInEuro = priceInEuro;
    }
    private int calcPriceInCents() {
        return 100 * priceInEuro;
    }
    boolean enoughCents(int moneyInCents) {
        return calcPriceInCents() < moneyInCents;
    }
}
var banana = new Article("Banane", 2);
banana.enoughCents(300)
```
