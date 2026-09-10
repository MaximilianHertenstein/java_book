# Statische Methoden

## Motivation

Aufrufe wie `Integer.parseInt("052")`, `List.of(1, 2, 3)` oder
`IO.println("Hello")` kennst du schon: Die *Methode* gehört zu einer
*Klasse*, deshalb steht vor dem Punkt der Klassenname. In diesem Kapitel
schreiben wir selbst solche *Methoden*.

## Klassen als Container

Mit `class` fassen wir *Methoden* zusammen, die zusammengehören. Eine
*Klasse* ist hier erst einmal nur ein Container für *Methoden*.

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

Das Schlüsselwort `static` drückt aus, dass die *Methode* zur *Klasse*
als Ganzes gehört. Sie wird deshalb nicht allein, sondern mit dem
Klassennamen aufgerufen.

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

Die Methode `square` wird nur innerhalb der Klasse `Utils` gebraucht,
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

Von außen bleibt nur nutzbar, was nicht `private` ist.

```java, java-exec
Utils.square(3)
```

Die Fehlermeldung sagt aus, dass `square` außerhalb von `Utils` nicht
verwendet werden darf.

Eigenschaften, Objekte und Konstruktoren kommen erst in den folgenden
Kapiteln dazu.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./statische_methoden_aufgaben.md)
