# Aufgaben: Überprüfungen bei der Objekterzeugung

## Quiz

### Quiz 1

{{#quiz ./quizzes/ueberpruefungen_01.toml}}

### Quiz 2

{{#quiz ./quizzes/ueberpruefungen_02.toml}}

### Quiz 3

{{#quiz ./quizzes/ueberpruefungen_03.toml}}

### Quiz 4

{{#quiz ./quizzes/ueberpruefungen_04.toml}}

### Quiz 5

{{#quiz ./quizzes/ueberpruefungen_05.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst auf, was passiert. Führe dann den Code aus und überprüfe deine Vermutung.

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
new Article("Banane", -2)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass ein gültiges Objekt erzeugt wird.

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
new Article("Banane", -2)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass negative Rabatte abgelehnt werden.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        this.name = name;
        this.price = price;
    }
    Article(String name, int price, int discount) {
        this(name, price - discount);
        if (____) {
            throw new IllegalArgumentException("Der Rabatt muss positiv sein");
        }
    }
}
new Article("Banane", 3, -1)
```

### 4. Fehler finden und reparieren

Der Code erzeugt keinen Fehler, obwohl der Preis ungültig ist. Ergänze die Prüfung im Konstruktor.

```java, java-exec
class Article {
    String name;
    int price;
    Article(String name, int price) {
        this.name = name;
        this.price = price;
    }
}
new Article("Banane", -2)
```

### 5. Prüfe deine Idee

Sage voraus, welcher Aufruf gelingt und welcher abbricht, bevor du den Code ausführst.

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
new Article("Apfel", 3)
```

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
new Article("Banane", -2)
```
