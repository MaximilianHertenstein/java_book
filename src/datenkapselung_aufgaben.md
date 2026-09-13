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
class MutableStudent {
    private String name;
    private int age;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public int getAge() {
        return age;
    }
}
var pana = new MutableStudent("Pana", 17);
pana.getAge()
```

### 2. Verändere die Eingabe

Ändere nur das Alter, sodass `18` zurückgegeben wird.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public int getAge() {
        return age;
    }
}
var pana = new MutableStudent("Pana", 17);
pana.getAge()
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass der direkte Zugriff auf `age` von außen verboten ist.

```java, java-exec
class MutableStudent {
    String name;
    ____ int age;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
var pana = new MutableStudent("Pana", 17);
pana.age
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `age` privat ist. Rufe stattdessen die Getter-Methode auf.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public int getAge() {
        return age;
    }
}
var luca = new MutableStudent("Luca", 18);
luca.age
```

### 5. Prüfe deine Idee

Sage voraus, was zurückgegeben wird, bevor du den Code ausführst.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;
    public int absences = 0;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public int getAge() {
        return age;
    }
}
var luca = new MutableStudent("Luca", 18);
luca.absences
```
