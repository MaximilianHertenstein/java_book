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

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;

    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void getOlder() {
        age = age + 1;
    }

    public int getAge() {
        return age;
    }
}
var luca = new MutableStudent("Luca", 18);
luca.getOlder();
luca.getAge()
```

### 2. Verändere die Eingabe

Rufe die Methode `getOlder` so oft auf, dass `luca.getAge()` danach `21` ergibt.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;

    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void getOlder() {
        age = age + 1;
    }

    public int getAge() {
        return age;
    }
}
var luca = new MutableStudent("Luca", 18);
luca.getOlder();
luca.getAge()
```

### 3. Ergänze die Lücke

Ergänze die Methode `addAbsences`, sodass die Fehlzeiten um `count` erhöht werden.

```java, java-exec
class MutableStudent {
    private String name;
    private int absences = 0;

    public MutableStudent(String name) {
        this.name = name;
    }

    public void addAbsences(int count) {
        ____;
    }

    public int getAbsences() {
        return absences;
    }
}
var pana = new MutableStudent("Pana");
pana.addAbsences(3);
pana.getAbsences()
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil die Methode `getOlder` ein neues Objekt statt einer Veränderung erzeugen will. Ändere die Methode so, dass sie `age` direkt um 1 erhöht und `void` zurückgibt.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;

    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int getOlder() {
        return new MutableStudent(name, age + 1);
    }

    public int getAge() {
        return age;
    }
}
```

### 5. Prüfe deine Idee

Sage voraus, was ausgegeben wird, bevor du den Code ausführst.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;

    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void getOlder() {
        age = age + 1;
    }

    public int getAge() {
        return age;
    }
}
var luca = new MutableStudent("Luca", 18);
luca.getOlder();
luca.getOlder();
luca.getAge()
```
