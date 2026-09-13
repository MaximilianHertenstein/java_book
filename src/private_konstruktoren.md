# Private Konstruktoren

Auch Konstruktoren kann man durch das Schlüsselwort `private` vor
Zugriff von außen schützen.

```java, java-exec
class Student {
    String name;
    int age;

    private Student(String name, int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Das Alter darf nicht negativ sein");
        }
        this.name = name;
        this.age = age;
    }

    public Student(String name, int birthYear, int currentYear) {
        this(name, currentYear - birthYear);
    }
}
```


```java, java-exec
new Student("Alex", 15);
``

```java, java-exec
new Student("Alex", 2026, 2011);
``


## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./private_konstruktoren_aufgaben.md)
