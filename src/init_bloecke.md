# Init-Blöcke

In einem kompakten Konstruktor im Recordkörper können wir beliebigen
Code schreiben. Dieser wird beim Aufruf des Konstruktors ausgeführt.
Das `public` steht dabei, damit der Konstruktor überall nutzbar ist.

```java, java-exec
record Article(String name, int price) {
    public Article {
        IO.println("Ein Artikel mit dem Namen " + name + " wurde erzeugt.");
    }
}
```

```java, java-exec
new Article("Apfel", 3)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./init_bloecke_aufgaben.md)
