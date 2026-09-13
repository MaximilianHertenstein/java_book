# Eigenschaften im Klassenkörper initialisieren

Eigenschaften können auch direkt bei ihrer Definition einen Wert
erhalten. Dieser Wert gilt für jedes neu erzeugte Objekt, sofern der
Konstruktor ihn nicht ändert.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;
    public int absences = 0;

    public MutableStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

```java, java-exec
var pana = new MutableStudent("Pana", 17);
pana.absences
```

```java, java-exec
var luca = new MutableStudent("Luca", 18);
luca.absences
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./eigenschaften_im_klassenkoerper_aufgaben.md)
