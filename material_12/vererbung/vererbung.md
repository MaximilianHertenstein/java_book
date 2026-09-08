---
title: Vererbung
codebraid:
  jupyter: true
---

```{.java .cb-run}
import static java.lang.IO.println;
import java.util.List;

class Person {
    protected String name;
    protected int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void greet() {
        println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

class Student extends Person {

    Student(String name, int age) {
        super(name, age);
    }



    @Override
    void greet() {
        println("Hi, ich bin " + name + ".");
    }

    void learn() {
        println("Ich lerne gerade.");
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
        println("Ich unterrichte jetzt in Raum " + classRoom + ".");
    }

    public boolean isRetired() {
        return age > 65;
    }
}

class Utils {
    static void letAllGreet(List<Person> persons) {
        for (Person person : persons) {
            person.greet();
        }
    }

    static void letGreetNTimes(Person person, int times) {
        for (int i = 0; i < times; i++) {
            person.greet();
        }
    }
}
```


# Vererbung

Mit Vererbung kann eine Klasse die Eigenschaften und Methoden einer anderen Klasse übernehmen, ohne dass Code wiederholt werden muss.

```java
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

`super` ruft den Konstruktor der Oberklasse auf. Dadurch werden in diesem Beispiel die Eigenschaften `name` und `age` gesetzt.

```{.java .cb-nb line_numbers=false}
var herrMüller = new Teacher("Herr Müller", 50);
```




Auch Methoden werden bei der Vererbung übernommen.

```java
class Person {
    ...
    public void greet() {
        println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

class Teacher extends Person {
    ...
}
```

```{.java .cb-nb line_numbers=false}
var herrMüller = new Teacher("Herr Müller", 50);
herrMüller.greet();
```

# Zusätzliche Eigenschaften und Methoden

In der abgeleiteten Klasse können zusätzlich Eigenschaften und Methoden definiert werden.

```java
class Teacher extends Person {

    private String classRoom;

    public Teacher(String name, int age, String classRoom) {
        super(name, age);
        this.classRoom = classRoom;
    }

    public void teach() {
        println("Ich unterrichte jetzt in Raum " + classRoom + ".");
    }
}
```

```{.java .cb-nb line_numbers=false}
var herrMüller = new Teacher("Herr Müller", 50, "G402");
herrMüller.teach();
```

# Sichtbarkeit mit protected

Der folgende Code kann nicht kompiliert werden:

```java
class Teacher extends Person {
    ...

    public boolean isRetired() {
        return age > 65;
    }
    ...
}
```

Das Problem liegt darin, dass die Eigenschaft `age` in der Klasse `Person` als `private` deklariert ist. Deshalb kann die Klasse `Teacher` nicht auf diese Eigenschaft zugreifen.

Das lässt sich beheben, indem die Eigenschaft als `protected` deklariert wird. Dann können abgeleitete Klassen darauf zugreifen.
Wichtig in Java: Auch Klassen im selben Paket (also nicht nur Unterklassen) dürfen auf `protected`-Attribute zugreifen.

```java

class Person {
    protected String name;
    protected int age;
    ...
}
```


```{.java .cb-nb line_numbers=false}
var herrMüller = new Teacher("Herr Müller", 50);
println(herrMüller.isRetired());
```

# Überschreiben von Methoden

Beim Überschreiben werden Methoden ersetzt, die in der Oberklasse bereits implementiert sind.
Im folgenden Beispiel wird die Methode `greet` der Klasse `Person` in der Klasse `Student` überschrieben.




```java
class Person {
    protected String name;
    protected int age;

    ...

    void greet() {
        println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

class Student extends Person {
    ...
    @Override
    void greet() {
        println("Hi, ich bin " + name + ".");
    }
}
```


```{.java .cb-nb line_numbers=false}
var pana = new Student("Pana", 17);
```
```{.java .cb-nb line_numbers=false}
pana.greet();
```


# Typ der Variablen und tatsächlicher Objekttyp

Jedes Objekt der Klasse `Teacher` ist auch ein Objekt der Klasse `Person`.

```{.java .cb-nb line_numbers=false}
Person frauMaier = new Teacher("Frau Maier", 30);
```
Wenn wir dieses Objekt in einer Variablen vom Typ `Person` speichern, können wir nur Methoden aufrufen, die in der Klasse `Person` deklariert sind.

```{.java .cb-nb line_numbers=false}
frauMaier.greet();
```

```java
frauMaier.teach(); // geht nicht
```


# Polymorphie

Die Klasse `Person` hat eine Methode `greet`. Deshalb können wir `greet` auf Variablen vom Typ `Person` aufrufen.
Welche konkrete Implementierung ausgeführt wird, hängt vom tatsächlichen Objekttyp ab.

```java
class Utils {
    static void letGreetNTimes(Person person, int times) {
        for (int i = 0; i < times; i++) {
            person.greet();
        }
    }
}
```

Erst zur Laufzeit wird entschieden, welche `greet`-Methode (zum Beispiel aus `Student` oder `Teacher`) ausgeführt wird.

```{.java .cb-nb line_numbers=false}
var pana = new Student("Pana", 17);
Utils.letGreetNTimes(pana, 2);
```
```{.java .cb-nb line_numbers=false}
var herrMüller = new Teacher("Herr Müller", 50);
Utils.letGreetNTimes(herrMüller, 3);
```

Außerdem können wir Objekte beider Klassen in einer `List<Person>` speichern.

```{.java .cb-nb line_numbers=false}
List<Person> persons = List.of(pana, herrMüller);

```

Wir können außerdem Methoden schreiben, denen eine `List<Person>` übergeben wird.


```java
static void letAllGreet(List<Person> persons) {
    for (Person person : persons) {
        person.greet();
    }
}
```

```{.java .cb-nb line_numbers=false}
Utils.letAllGreet(persons);
```

# Abstrakte Klassen

Um zu verhindern, dass Objekte der Klasse `Person` erzeugt werden, können wir die Klasse als abstrakt deklarieren.

```java
abstract class Person {
```

```java
var herrMüller = new Person("Herr Müller", 50); // geht nicht mehr
```

In abstrakten Klassen können auch Methoden als abstrakt deklariert werden. Dabei gibt man nur den Methodenkopf an.

```java
abstract class Person {
    abstract void greet();
```

Jetzt sind alle nicht-abstrakten Klassen, die von `Person` erben, gezwungen, die Methode `greet` zu implementieren.
Deshalb können wir weiterhin auf jeder Variablen vom Typ `Person` die Methode `greet` aufrufen.
Methoden wie `letGreetNTimes` funktionieren damit unverändert.

```java
class Utils {
    static void letGreetNTimes(Person person, int times) {
        for (int i = 0; i < times; i++) {
            person.greet();
        }
    }
}
```