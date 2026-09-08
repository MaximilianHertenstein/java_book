# Vererbung

Mit Vererbung kann eine Klasse die Eigenschaften und Methoden einer
anderen Klasse übernehmen, ohne dass Code wiederholt werden muss.

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
}
```

`super` ruft den Konstruktor der Oberklasse auf. Dadurch werden in
diesem Beispiel die Eigenschaften `name` und `age` gesetzt.

```java, java-exec
var herrMueller = new Teacher("Herr Mueller", 50);
```

Auch Methoden werden bei der Vererbung übernommen.

```java, java-exec
class Person {
    private String name;
    private int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void greet() {
        IO.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}
class Teacher extends Person {
    Teacher(String name, int age) {
        super(name, age);
    }
}
```

```java, java-exec
var herrMueller = new Teacher("Herr Mueller", 50);
herrMueller.greet();
```

## Zusätzliche Eigenschaften und Methoden

In der abgeleiteten Klasse können zusätzlich Eigenschaften und Methoden
definiert werden.

```java, java-exec
class Teacher extends Person {
    private String classRoom;
    public Teacher(String name, int age, String classRoom) {
        super(name, age);
        this.classRoom = classRoom;
    }
    public Teacher(String name, int age) {
        super(name, age);
    }
    public void teach() {
        IO.println("Ich unterrichte jetzt in Raum " + classRoom + ".");
    }
}
```

```java, java-exec
var herrMueller = new Teacher("Herr Mueller", 50, "G402");
herrMueller.teach();
```

## Sichtbarkeit mit protected

Der folgende Code kann nicht kompiliert werden, solange `age` in
`Person` privat ist:

```java
class Teacher extends Person {
    public boolean isRetired() {
        return age > 65;
    }
}
```

Das Problem liegt darin, dass die Eigenschaft `age` in der Klasse
`Person` als `private` deklariert ist. Deshalb kann die Klasse
`Teacher` nicht auf diese Eigenschaft zugreifen.

Das lässt sich beheben, indem die Eigenschaft als `protected`
deklariert wird. Dann können abgeleitete Klassen darauf zugreifen.
Wichtig in Java: Auch Klassen im selben Paket (also nicht nur
Unterklassen) dürfen auf `protected`-Attribute zugreifen.

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
class Teacher extends Person {
    private String classRoom;
    public Teacher(String name, int age, String classRoom) {
        super(name, age);
        this.classRoom = classRoom;
    }
    public Teacher(String name, int age) {
        super(name, age);
    }
    public void teach() {
        IO.println("Ich unterrichte jetzt in Raum " + classRoom + ".");
    }
    public boolean isRetired() {
        return age > 65;
    }
}
```

```java, java-exec
var herrMueller = new Teacher("Herr Mueller", 50);
IO.println(herrMueller.isRetired());
```

## Überschreiben von Methoden

Beim Überschreiben werden Methoden ersetzt, die in der Oberklasse
bereits implementiert sind. Im folgenden Beispiel wird die Methode
`greet` der Klasse `Person` in der Klasse `Student` überschrieben.

```java, java-exec
class Student extends Person {
    Student(String name, int age) {
        super(name, age);
    }
    @Override
    public void greet() {
        IO.println("Hi, ich bin " + name + ".");
    }
}
```

```java, java-exec
var pana = new Student("Pana", 17);
```

```java, java-exec
pana.greet();
```

## Typ der Variablen und tatsächlicher Objekttyp

Jedes Objekt der Klasse `Teacher` ist auch ein Objekt der Klasse
`Person`.

```java, java-exec
Person frauMaier = new Teacher("Frau Maier", 30);
```

Wenn wir dieses Objekt in einer Variablen vom Typ `Person` speichern,
können wir nur Methoden aufrufen, die in der Klasse `Person` deklariert
sind.

```java, java-exec
frauMaier.greet();
```

```java
frauMaier.teach(); // geht nicht
```

## Polymorphie

Die Klasse `Person` hat eine Methode `greet`. Deshalb können wir `greet`
auf Variablen vom Typ `Person` aufrufen. Welche konkrete
Implementierung ausgeführt wird, hängt vom tatsächlichen Objekttyp ab.

```java, java-exec
class Utils {
    static void letGreetNTimes(Person person, int times) {
        for (int i = 0; i < times; i = i + 1) {
            person.greet();
        }
    }
}
```

Erst zur Laufzeit wird entschieden, welche `greet`-Methode (zum Beispiel
aus `Student` oder `Teacher`) ausgeführt wird.

```java, java-exec
var pana = new Student("Pana", 17);
Utils.letGreetNTimes(pana, 2);
```
```java, java-exec
var herrMueller = new Teacher("Herr Mueller", 50);
Utils.letGreetNTimes(herrMueller, 3);
```

Außerdem können wir Objekte beider Klassen in einer `List<Person>`
speichern.

```java, java-exec
import java.util.List;
List<Person> persons = List.of(pana, herrMueller);
```

Wir können außerdem Methoden schreiben, denen eine `List<Person>`
übergeben wird.

```java, java-exec
class Utils {
    static void letAllGreet(List<Person> persons) {
        for (Person person : persons) {
            person.greet();
        }
    }
}
```

```java, java-exec
Utils.letAllGreet(persons);
```

## Abstrakte Klassen

Um zu verhindern, dass Objekte der Klasse `Person` erzeugt werden,
können wir die Klasse als abstrakt deklarieren.

```java, java-exec
abstract class Person {
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
```

```java, java-exec
var irgendwer = new Person("Irgendwer", 50);
```

In abstrakten Klassen können auch Methoden als abstrakt deklariert
werden. Dabei gibt man nur den Methodenkopf an.

```java
abstract class Person {
    abstract void greet();
}
```

Jetzt sind alle nicht-abstrakten Klassen, die von `Person` erben,
gezwungen, die Methode `greet` zu implementieren. Deshalb können wir
weiterhin auf jeder Variablen vom Typ `Person` die Methode `greet`
aufrufen. Methoden wie `letGreetNTimes` funktionieren damit unverändert.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./vererbung_aufgaben.md)
