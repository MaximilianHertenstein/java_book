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
class MutableStudent {
    String name;
    int age;
    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    private MutableStudent(String name, int birthYear, int currentYear) {
        this(name, currentYear - birthYear);
    }
}
new MutableStudent("Pana", 2007, 2024)
```

### 2. Verändere die Eingabe

Ändere nur die Argumente, sodass der öffentliche Konstruktor zum Zug kommt.

```java, java-exec
class MutableStudent {
    String name;
    int age;
    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    private MutableStudent(String name, int birthYear, int currentYear) {
        this(name, currentYear - birthYear);
    }
}
new MutableStudent("Pana", 2007, 2024)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass der Hilfskonstruktor von außen nicht nutzbar ist.

```java, java-exec
class MutableStudent {
    String name;
    int age;
    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    ____ MutableStudent(String name, int birthYear, int currentYear) {
        this(name, currentYear - birthYear);
    }
}
new MutableStudent("Pana", 2007, 2024)
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil der Hauptkonstruktor privat ist. Nutze stattdessen den öffentlichen Konstruktor mit nur einem Argument.

```java, java-exec
class MutableStudent2 {
    String name;
    int age;
    private MutableStudent2(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public MutableStudent2(String name) {
        this(name, 18);
    }
}
new MutableStudent2("Luca", 18)
```

### 5. Prüfe deine Idee

Sage voraus, welcher Aufruf gelingt und welcher abbricht, bevor du den Code ausführst.

```java, java-exec
class MutableStudent2 {
    String name;
    int age;
    private MutableStudent2(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public MutableStudent2(String name) {
        this(name, 18);
    }
}
new MutableStudent2("Luca")
```

```java, java-exec
class MutableStudent2 {
    String name;
    int age;
    private MutableStudent2(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public MutableStudent2(String name) {
        this(name, 18);
    }
}
new MutableStudent2("Luca", 18)
```
