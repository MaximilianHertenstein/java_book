# Datenkapselung

Im vorherigen Kapitel haben wir die Klasse `MutableStudent` definiert.
Ihre Eigenschaften konnten von außen direkt gelesen und verändert
werden.

```java, java-exec
class MutableStudent {
    String name;
    int age;

    MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

```java, java-exec
var pana = new MutableStudent("Pana", 17);
pana.age
```

## Private Eigenschaften

Mit `private` können wir den Zugriff auf eine Eigenschaft von außen
verbieten. Die Eigenschaft kann dann nur noch innerhalb der Klasse
verwendet werden.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;

    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

```java, java-exec
var luca = new MutableStudent("Luca", 18);
luca.getAge()
```

Der direkte Zugriff auf `age` ist jetzt nicht mehr möglich.

```java
luca.age
```

Stattdessen greifen wir über die öffentlichen Methoden `getAge` und
`setAge` auf die Eigenschaft zu.

```java, java-exec
luca.setAge(19);
luca.getAge()
```

## Eigenschaften im Klassenkörper initialisieren

Eigenschaften können auch direkt bei ihrer Definition einen Wert
erhalten. Dieser Wert gilt für jedes neu erzeugte Objekt, sofern der
Konstruktor ihn nicht ändert.

```java, java-exec
class Cat {
    private String name;
    public int lives = 7;

    public Cat(String name) {
        this.name = name;
    }
}
```

```java, java-exec
var garfield = new Cat("Garfield");
garfield.lives
```

```java, java-exec
var catmando = new Cat("Catmando");
catmando.lives
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./datenkapselung_aufgaben.md)
