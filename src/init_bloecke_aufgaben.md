# Aufgaben: Init-Blöcke

## Quiz

### Quiz 1

{{#quiz ./quizzes/init_bloecke_01.toml}}

### Quiz 2

{{#quiz ./quizzes/init_bloecke_02.toml}}

### Quiz 3

{{#quiz ./quizzes/init_bloecke_03.toml}}

### Quiz 4

{{#quiz ./quizzes/init_bloecke_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst auf, was ausgegeben wird. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
record Article(String name, int price) {
    public Article {
        IO.println("Erzeugt: " + name);
    }
}
new Article("Apfel", 3)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass `"Erzeugt: Banane"` ausgegeben wird.

```java, java-exec
record Article(String name, int price) {
    public Article {
        IO.println("Erzeugt: " + name);
    }
}
new Article("Apfel", 3)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass bei jeder Erzeugung der Preis ausgegeben wird.

```java, java-exec
record Article(String name, int price) {
    public Article {
        ____;
    }
}
new Article("Apfel", 3)
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `name` außerhalb des Records unbekannt ist. Verschiebe die Ausgabe in den kompakten Konstruktor.

```java, java-exec
record Article(String name, int price) {
}
IO.println("Erzeugt: " + name);
```

### 5. Prüfe deine Idee

Sage voraus, wie oft die Zeile ausgegeben wird, bevor du den Code ausführst.

```java, java-exec
record Article(String name, int price) {
    public Article {
        IO.println("Erzeugt: " + name);
    }
}
new Article("Apfel", 3)
new Article("Banane", 2)
```
