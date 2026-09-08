# Aufgaben: Vererbung

## Quiz

### Quiz 1

{{#quiz ./quizzes/vererbung_01.toml}}

### Quiz 2

{{#quiz ./quizzes/vererbung_02.toml}}

### Quiz 3

{{#quiz ./quizzes/vererbung_03.toml}}

### Quiz 4

{{#quiz ./quizzes/vererbung_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst auf, was ausgegeben wird. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
class Person {
    protected String name;
    protected int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void greet() {
        IO.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}
class Student extends Person {
    Student(String name, int age) {
        super(name, age);
    }
    @Override
    public void greet() {
        IO.println("Hi, ich bin " + name + ".");
    }
}
var pana = new Student("Pana", 17);
pana.greet()
```

### 2. Verändere die Eingabe

Ändere nur die Argumente, sodass `"Hi, ich bin Nino."` ausgegeben wird.

```java, java-exec
class Person {
    protected String name;
    protected int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void greet() {
        IO.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}
class Student extends Person {
    Student(String name, int age) {
        super(name, age);
    }
    @Override
    public void greet() {
        IO.println("Hi, ich bin " + name + ".");
    }
}
var pana = new Student("Pana", 17);
pana.greet()
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass der Konstruktor der Oberklasse aufgerufen wird.

```java, java-exec
class Person {
    protected String name;
    protected int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    Teacher(String name, int age) {
        ____;
    }
}
var herrMueller = new Teacher("Herr Mueller", 50);
herrMueller.name
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `age` in `Person` privat ist. Mache das Feld für abgeleitete Klassen zugänglich.

```java, java-exec
class Person {
    private String name;
    private int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    Teacher(String name, int age) {
        super(name, age);
    }
    public boolean isRetired() {
        return age > 65;
    }
}
```

### 5. Prüfe deine Idee

Sage voraus, welche `greet`-Version jeweils läuft, bevor du den Code ausführst.

```java, java-exec
class Person {
    protected String name;
    protected int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void greet() {
        IO.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}
class Student extends Person {
    Student(String name, int age) {
        super(name, age);
    }
    @Override
    public void greet() {
        IO.println("Hi, ich bin " + name + ".");
    }
}
class Utils {
    static void letGreetNTimes(Person person, int times) {
        for (int i = 0; i < times; i = i + 1) {
            person.greet();
        }
    }
}
var pana = new Student("Pana", 17);
Utils.letGreetNTimes(pana, 2)
```
