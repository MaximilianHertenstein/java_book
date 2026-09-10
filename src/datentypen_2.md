# Datentypen 2

## Explizite Typangabe

In Java ist es oft nicht nötig, den Typ einer Variable anzugeben.

```java, java-exec
var x = 2;
```

Es ist aber **möglich**, den Typ einer Variablen beim Initialisieren
anzugeben. Dafür schreibt man den Typ vor den Namen der Variablen.

```java, java-exec
int y = 3;
```

Wenn der Typ nicht zu dem Wert passt, wird eine Fehlermeldung angezeigt.

```java, java-exec
String z = 4;
```

## Methoden mit dem gleichen Namen

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

[Zu den Aufgaben zu diesem Kapitel](./datentypen_2_aufgaben.md)
