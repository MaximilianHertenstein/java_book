# Rückgabewerte vs. Effekte

Die Klasse `ImmutableStudent` stellt Schüler dar.

```java, java-exec
class ImmutableStudent {
    public String name;
    public int age;

    public ImmutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int nextAge() {
        return age + 1;
    }

    public ImmutableStudent nextStudent() {
        return new Student(name, age + 1);
    }

}
```

```java, java-exec
var pana = new ImmutableStudent("Pana", 17);
```

## Methoden mit Rückgabewerten

`nextAge` berechnet das nächste Alter und gibt es zurück. Das Objekt,
auf dem die Methode aufgerufen wird, ändert sich dabei nicht.

```java, java-exec
pana.nextAge()
```

```java, java-exec
pana.age
```

Die Methode `nextStudent` erzeugt einen neuen `Student`, der ein Jahr
älter ist.

```java, java-exec
var nextPana = pana.nextStudent();
```

```java, java-exec
nextPana.name
```

```java, java-exec
nextPana.age
```

Auch beim Aufruf dieser Methode ändert sich das ursprüngliche Objekt
`pana` nicht.

```java, java-exec
pana.age
```

## Methoden, die Objekte verändern


Die Methode `getOlder` der Klasse `Student` gibt keinen Wert zurück. Sie verändert aber die
Eigenschaft `age` des Objekts, auf dem die Methode aufgerufen wird. 


```java, java-exec
class Student {
    public String name;
    public int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void getOlder() {
        age = age + 1;
    }

    public boolean getOlderCheckAllowedToBuyBeer() {
        age = age + 1;
        return age >= 16;
    }
}
```


```java, java-exec
pana.getOlder();
pana.age
```

## Methoden, die Objekte verändern und Werte zurückgeben

Eine Methode kann das Objekt verändern und zusätzlich einen Wert
zurückgeben.

```java, java-exec
var alex = new Student("Alex", 15);
alex.getOlderCheckAllowedToBuyBeer()
```

```java, java-exec
alex.age
```
