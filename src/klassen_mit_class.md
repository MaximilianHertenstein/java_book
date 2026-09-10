# Klassen mit class

## Motivation

Mit `record` lassen sich Klassen sehr einfach definieren.

Eine starke Einschränkung von `record` ist aber, dass deren
Eigenschaften nach dem Erzeugen nicht mehr geändert werden können.

```java, java-exec
record Student(String name, int age) {
}
```

```java, java-exec
var pana = new Student("Pana", 17);
```

Der `Student` `pana` hat das Alter `17`. Dies kann nicht geändert
werden. Man kann lediglich einen neuen `Student` mit einem anderen
Alter erzeugen und den alten `Student` überschreiben.

```java, java-exec
var pana = new Student("Pana", 18);
```

Bei größeren Objekten mit vielen Eigenschaften ist das jedoch sehr
ineffizient.

## Klassen mit class definieren

Klassen mit veränderlichen Eigenschaften können in Java mit dem
Schlüsselwort `class` definiert werden. Alle Eigenschaften werden im
Klassenkörper definiert.

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
```

```java, java-exec
pana.age
```

## Konstruktoren definieren

Alle Konstruktoren müssen selbst geschrieben werden. Konstruktoren
werden ähnlich wie Methoden definiert. Der Name des Konstruktors stimmt
immer mit dem Namen der Klasse überein. Ein Rückgabetyp wird nicht
angegeben.

```java, java-exec
class MutableStudent {
    String name;
    int age;
    MutableStudent(String pName, int pAge) {
        name = pName;
        age = pAge;
    }
}
```

Zwischen den geschweiften Klammern kann jeder beliebige Java-Code
stehen. In der Regel werden aber nur Werte für die Eigenschaften der
Klasse gesetzt. Hier wird

- die Eigenschaft `name` auf den übergebenen Wert `pName` gesetzt
- die Eigenschaft `age` auf den übergebenen Wert `pAge` gesetzt

Wenn die Argumente des Konstruktors dieselben Namen wie die
Eigenschaften der Klasse haben, muss mit `this.eigenschaft` auf eine
Eigenschaft zugegriffen werden.

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
var luca = new MutableStudent("Luca", 18);
```

```java, java-exec
luca.age
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./klassen_mit_class_aufgaben.md)
