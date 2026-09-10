# Aufgaben: Klassen mit class

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
class MutableStudent {
    String name;
    int age;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
var pana = new MutableStudent("Pana", 17);
pana.age
```

### 2. Verändere die Eingabe

Ändere nur das Alter, sodass `18` ausgegeben wird.

```java, java-exec
class MutableStudent {
    String name;
    int age;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
var pana = new MutableStudent("Pana", 17);
pana.age
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass ein `MutableStudent` mit Namen `"Luca"` und Alter `18` erzeugt wird.

```java, java-exec
class MutableStudent {
    String name;
    int age;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
var luca = ____;
luca.age
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil ein Konstruktor keinen Rückgabetyp haben darf. Repariere die Zeile.

```java, java-exec
class MutableStudent {
    String name;
    int age;
    void MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

### 5. Prüfe deine Idee

Sage voraus, was ausgegeben wird, bevor du den Code ausführst. Erkläre, wofür `this` nötig ist.

```java, java-exec
class MutableStudent {
    String name;
    int age;
    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
var pana = new MutableStudent("Pana", 17);
pana.name
```
