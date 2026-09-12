# Fehlermeldungen

Wenn ein ungültiger Wert in einem Objekt gespeichert werden soll, kann
unser Programm eine Fehlermeldung ausgeben und den Vorgang abbrechen.
Dazu wird eine Ausnahme mit `throw new IllegalArgumentException(...)`
geworfen.

## Fehlermeldungen im Setter

Ein Setter kann prüfen, ob der neue Wert gültig ist. Im folgenden
Beispiel darf das Alter nicht kleiner als `0` sein.

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
        if (age < 0) {
            throw new IllegalArgumentException("Das Alter darf nicht negativ sein");
        }
        this.age = age;
    }
}
```

```java, java-exec
var matti = new MutableStudent("Matti", 17);
matti.setAge(-3);
```

Der Setter speichert den neuen Wert nur, wenn er gültig ist.

## Fehlermeldungen im Konstruktor

Ein Setter allein reicht nicht aus. Auch beim Erzeugen eines Objekts kann
jemand einen ungültigen Wert übergeben. Deshalb muss die Prüfung auch im
Konstruktor stehen.

```java, java-exec
class MutableStudent {
    private String name;
    private int age;

    public MutableStudent(String name, int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Das Alter darf nicht negativ sein");
        }
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}
```

```java, java-exec
new MutableStudent("Matti", -17)
```

Die Fehlermeldung zeigt an, dass der Konstruktor mit einem ungültigen
Wert aufgerufen wurde.
