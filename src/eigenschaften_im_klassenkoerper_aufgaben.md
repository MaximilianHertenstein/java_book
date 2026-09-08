# Aufgaben: Eigenschaften im Klassenkörper

## Quiz

### Quiz 1

{{#quiz ./quizzes/eigenschaften_im_klassenkoerper_01.toml}}

### Quiz 2

{{#quiz ./quizzes/eigenschaften_im_klassenkoerper_02.toml}}

### Quiz 3

{{#quiz ./quizzes/eigenschaften_im_klassenkoerper_03.toml}}

### Quiz 4

{{#quiz ./quizzes/eigenschaften_im_klassenkoerper_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
record Article(String name, int priceInEuros) {
    int priceInCents() {
        return 100 * priceInEuros();
    }
}
var banana = new Article("Banane", 3);
banana.priceInCents()
```

### 2. Verändere die Eingabe

Ändere nur den Preis, sodass `600` zurückgegeben wird.

```java, java-exec
record Article(String name, int priceInEuros) {
    int priceInCents() {
        return 100 * priceInEuros();
    }
}
var banana = new Article("Banane", 3);
banana.priceInCents()
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass auf die Methode im Körper zugegriffen wird.

```java, java-exec
record Article(String name, int priceInEuros) {
    int priceInCents() {
        return 100 * priceInEuros();
    }
}
var banana = new Article("Banane", 3);
banana.____
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `priceInCents` kein Konstruktor-Argument ist. Streiche das dritte Argument.

```java, java-exec
record Article(String name, int priceInEuros) {
    int priceInCents() {
        return 100 * priceInEuros();
    }
}
new Article("Banane", 3, 300)
```

### 5. Prüfe deine Idee

Sage voraus, was zurückgegeben wird, bevor du den Code ausführst.

```java, java-exec
record Article(String name, int priceInEuros) {
    int priceInCents() {
        return 100 * priceInEuros();
    }
    boolean enoughCents(int availableCents) {
        return availableCents >= priceInCents();
    }
}
var banana = new Article("Banane", 3);
banana.enoughCents(250)
```
