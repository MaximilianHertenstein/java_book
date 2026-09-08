# Aufgaben: Private Konstruktoren

## Quiz

### Quiz 1

{{#quiz ./quizzes/private_konstruktoren_01.toml}}

### Quiz 2

{{#quiz ./quizzes/private_konstruktoren_02.toml}}

### Quiz 3

{{#quiz ./quizzes/private_konstruktoren_03.toml}}

### Quiz 4

{{#quiz ./quizzes/private_konstruktoren_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst auf, was passiert. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        this.name = name;
        this.price = price;
    }
    private Article(String name, int price, int discount) {
        this(name, price - discount);
    }
}
new Article("Banane", 3, 2)
```

### 2. Verändere die Eingabe

Ändere nur die Argumente, sodass der öffentliche Konstruktor zum Zug kommt.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        this.name = name;
        this.price = price;
    }
    private Article(String name, int price, int discount) {
        this(name, price - discount);
    }
}
new Article("Banane", 3, 2)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass der Rabatt-Konstruktor von außen nicht nutzbar ist.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        this.name = name;
        this.price = price;
    }
    ____ Article(String name, int price, int discount) {
        this(name, price - discount);
    }
}
new Article("Banane", 3, 2)
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil der Haupt-Konstruktor privat ist. Nutze stattdessen die Rabatt-Variante.

```java, java-exec
class Article2 {
    String name;
    int price;
    private Article2(String name, int price) {
        this.name = name;
        this.price = price;
    }
    Article2(String name, int price, int discount) {
        this(name, price - discount);
    }
}
new Article2("Apfel", 3)
```

### 5. Prüfe deine Idee

Sage voraus, welcher Aufruf gelingt und welcher abbricht, bevor du den Code ausführst.

```java, java-exec
class Article2 {
    String name;
    int price;
    private Article2(String name, int price) {
        this.name = name;
        this.price = price;
    }
    Article2(String name, int price, int discount) {
        this(name, price - discount);
    }
}
new Article2("Apfel", 3, 1)
```

```java, java-exec
class Article2 {
    String name;
    int price;
    private Article2(String name, int price) {
        this.name = name;
        this.price = price;
    }
    Article2(String name, int price, int discount) {
        this(name, price - discount);
    }
}
new Article2("Apfel", 3)
```
