# Statische Methoden

## Motivation

Aufrufe wie `Integer.parseInt("052")`, `List.of(1, 2, 3)` oder
`IO.println("Hello")` kennst du schon: Diese *Methoden* gehören zu einer
*Klasse*, deshalb steht vor dem Punkt der Klassenname. 
 Eine
*Klasse* ist hier erst einmal nur ein Container für *Methoden*.



In diesem Kapitel
schreiben wir selbst solche *Methoden*.

## Klassen als Container

Mit `class` kannst du eine Klasse erstellen. Hinter `class` steht der Name der Klasse.
```java, java-exec
class Utils {
}
```

In einer Klasse kannst du Methoden definieren. Das geht wie bisher. Man muss an den Anfang das Schlüsselwort `static` schreiben.

```java, java-exec
class Utils {
    static int square(int x) {
        return x * x;
    }
    static int cube(int x) {
        return x * x * x;
    }
}
```

Diese statischen Methoden werden dann folgendermaßen aufgerufen.

```java, java-exec
Utils.square(3)
```

```java, java-exec
Utils.cube(3)
```

`Utils.square(3)` bedeutet also: *Rufe die Methode `square` der Klasse
`Utils` mit dem Argument `3` auf.* Genauso funktionieren
`Integer.parseInt`, `List.of` und `IO.println`: Auch das sind
*statische Methoden* von *Klassen*.

## Private Methoden

Im folgenden Beispiel wird die Methode `square` nur innerhalb der Klasse `Utils` gebraucht,
nämlich von `cube`. Mit `private` kann die Verwendung außerhalb der
Klasse verboten werden.

```java, java-exec
class Utils {
    static int cube(int x) {
        return square(x) * x;
    }
    private static int square(int x) {
        return x * x;
    }
}
```

```java, java-exec
Utils.cube(3)
```

Private Methoden sind **nicht** außerhalb der Klasse nutzbar.

```java, java-exec
Utils.square(3)
```

Die Fehlermeldung sagt aus, dass `square` außerhalb von `Utils` nicht
verwendet werden darf.


## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./statische_methoden_aufgaben.md)
