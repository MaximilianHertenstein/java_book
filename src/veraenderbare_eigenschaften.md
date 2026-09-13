# Veränderbare Eigenschaften

In Klassen können wir Methoden definieren, die die Eigenschaften des
Objekts verändern.

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
```

Die Methode `getOlder` erhöht das Alter eines `MutableStudent`. Dabei
wird kein neues Objekt erzeugt, sondern das bestehende Objekt verändert.

```java, java-exec
var luca = new MutableStudent("Luca", 18);
luca.getOlder();
luca.getAge()
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./veraenderbare_eigenschaften_aufgaben.md)
