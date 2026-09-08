# Aufgaben: Weitere Konstruktoren

## Quiz

### Quiz 1

{{#quiz ./quizzes/weitere_konstruktoren_01.toml}}

### Quiz 2

{{#quiz ./quizzes/weitere_konstruktoren_02.toml}}

### Quiz 3

{{#quiz ./quizzes/weitere_konstruktoren_03.toml}}

### Quiz 4

{{#quiz ./quizzes/weitere_konstruktoren_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
record Article(String name, int price) {
    Article(String name) {
        this(name, 1);
    }
}
new Article("Teelichter")
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass ein Artikel mit Preis `1` und anderem Namen erzeugt wird.

```java, java-exec
record Article(String name, int price) {
    Article(String name) {
        this(name, 1);
    }
}
new Article("Teelichter")
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass der Rabatt-Konstruktor den Haupt-Konstruktor aufruft.

```java, java-exec
record Article(String name, int price) {
    Article(String name, int price, int discount) {
        ____;
    }
}
new Article("Apfel", 3, 1)
```

### 4. Fehler finden und reparieren

Der folgende Code lässt sich nicht ausführen, weil der `this`-Aufruf nicht an erster Stelle steht.

```java
record Article(String name, int price) {
    Article(String name, int price, int discount) {
        int reduced = price - discount;
        this(name, reduced);
    }
}
```

Schreibe den Konstruktor so, dass der `this`-Aufruf an erster Stelle steht.

```java, java-exec
record Article(String name, int price) {
    Article(String name, int price, int discount) {
        ____;
    }
}
new Article("Apfel", 3, 1)
```

### 5. Prüfe deine Idee

Sage voraus, welche Preise die beiden Objekte haben, bevor du den Code ausführst.

```java, java-exec
record Article(String name, int price) {
    Article(String name) {
        this(name, 1);
    }
    Article(String name, int price, int discount) {
        this(name, price - discount);
    }
}
new Article("Teelichter")
```

```java, java-exec
record Article(String name, int price) {
    Article(String name) {
        this(name, 1);
    }
    Article(String name, int price, int discount) {
        this(name, price - discount);
    }
}
new Article("Apfel", 3, 1)
```
