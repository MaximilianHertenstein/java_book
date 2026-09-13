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
```java, java-exec
pana.age = 20;
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
```

Der direkte Zugriff auf `age` ist jetzt nicht mehr möglich:

```java
luca.age
```

## Getter

Um das Lesen dieser Eigenschaft zu ermöglichen, kann eine *öffentliche*
Methode definiert werden, die den Wert zurückgibt.

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
}
```

```java, java-exec
var luca = new MutableStudent("Luca", 18);
luca.getAge()
```

Methoden, mit denen Werte von Eigenschaften gelesen werden, nennt man
*Getter*.

## Setter

Um den Wert zu ändern, können wir ebenfalls eine Methode definieren:

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
luca.setAge(19);
luca.getAge()
```

Methoden, mit denen Werte von Eigenschaften geändert werden, nennt man
*Setter*.

## Verhindern von inkorrekten Werten

Um fehlerhafte Werte von Eigenschaften zu vermeiden, müssen wir im
Konstruktor und im Setter den übergebenen Wert prüfen und eventuell eine
Fehlermeldung werfen.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;

    public MutableStudent(String name, int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Das Alter muss positiv sein");
        }
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Das Alter muss positiv sein");
        }
        this.age = age;
    }
}
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./datenkapselung_aufgaben.md)
