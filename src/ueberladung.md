# Überladung

Es ist möglich, mehrere Methoden mit denselben Namen zu definieren.
Die Voraussetzung dafür ist, dass sich die Typen oder die Anzahl der
Parameter dieser Methoden unterscheiden.

```java, java-exec
int inc(int n) {
    return n + 1;
}
String inc(String s) {
    return s + " + 1";
}
```

Der Compiler prüft beim Methodenaufruf, welche Typen die Argumente haben,
und ruft die richtige Methode auf.

```java, java-exec
inc(5)
```
```java, java-exec
inc("5")
```

Statt der Typen darf sich auch die Anzahl der Parameter unterscheiden.

```java, java-exec
void greet() {
    IO.println("Hello");
}
void greet(String name) {
    IO.println("Hello " + name);
}
```

Wird kein Argument übergeben, wird die Methode ohne Parameter aufgerufen.
Wird ein `String` übergeben, wird die Methode mit einem Parameter vom
Typ `String` aufgerufen.

```java, java-exec
greet()
```
```java, java-exec
greet("Alex")
```

Wenn mehrere Methoden denselben Namen, aber unterschiedliche Parameter
haben, spricht man von Methodenüberladung. Genau wie Methoden können
auch Konstruktoren überladen werden (siehe [Weitere
Konstruktoren](./weitere_konstruktoren.md)).

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./ueberladung_aufgaben.md)
