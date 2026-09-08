# Aufgaben: Interfaces

## Quiz

### Quiz 1

{{#quiz ./quizzes/interfaces_01.toml}}

### Quiz 2

{{#quiz ./quizzes/interfaces_02.toml}}

### Quiz 3

{{#quiz ./quizzes/interfaces_03.toml}}

### Quiz 4

{{#quiz ./quizzes/interfaces_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst auf, was ausgegeben wird. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
interface Greetable {
    void greet();
}
record Teacher(String firstName, String lastName) implements Greetable {
    @Override
    public void greet() {
        IO.println("Hello, I am " + firstName + " " + lastName);
    }
}
class Utils {
    static void letGreetTwoTimes(Greetable greetable) {
        greetable.greet();
        greetable.greet();
    }
}
var herrMueller = new Teacher("Dieter", "Mueller");
Utils.letGreetTwoTimes(herrMueller)
```

### 2. Verändere die Eingabe

Ändere nur das Objekt, sodass zweimal `"Yo, I am Alex"` ausgegeben wird.

```java, java-exec
interface Greetable {
    void greet();
}
record Teacher(String firstName, String lastName) implements Greetable {
    @Override
    public void greet() {
        IO.println("Hello, I am " + firstName + " " + lastName);
    }
}
record Student(String firstName, String lastName, int age) implements Greetable {
    @Override
    public void greet() {
        IO.println("Yo, I am " + firstName);
    }
}
class Utils {
    static void letGreetTwoTimes(Greetable greetable) {
        greetable.greet();
        greetable.greet();
    }
}
var herrMueller = new Teacher("Dieter", "Mueller");
Utils.letGreetTwoTimes(herrMueller)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `Student` das Interface implementiert.

```java, java-exec
interface Greetable {
    void greet();
}
record Student(String firstName, String lastName, int age) ____ {
    @Override
    public void greet() {
        IO.println("Yo, I am " + firstName);
    }
}
var alex = new Student("Alex", "Hoffmann", 18);
alex.greet()
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil über eine `Greetable`-Referenz keine klasseneigenen Methoden erreichbar sind. Rufe stattdessen `greet` auf.

```java, java-exec
interface Greetable {
    void greet();
}
record Student(String firstName, String lastName, int age) implements Greetable {
    @Override
    public void greet() {
        IO.println("Yo, I am " + firstName);
    }
}
var alex = new Student("Alex", "Hoffmann", 18);
Greetable greetingAlex = alex;
greetingAlex.firstName()
```

### 5. Prüfe deine Idee

Sage voraus, was in jeder Zeile ausgegeben wird, bevor du den Code ausführst.

```java, java-exec
import java.util.List;
interface Greetable {
    void greet();
}
record Teacher(String firstName, String lastName) implements Greetable {
    @Override
    public void greet() {
        IO.println("Hello, I am " + firstName + " " + lastName);
    }
}
record Student(String firstName, String lastName, int age) implements Greetable {
    @Override
    public void greet() {
        IO.println("Yo, I am " + firstName);
    }
}
class Utils {
    static void showGreetings(List<Greetable> greetables) {
        for (Greetable greetable : greetables) {
            greetable.greet();
        }
    }
}
var alex = new Student("Alex", "Hoffmann", 18);
var herrMueller = new Teacher("Dieter", "Mueller");
Utils.showGreetings(List.of(alex, herrMueller))
```
