# Switch

## Motivation

Wenn eine lange `else if`-Kette immer dieselbe Variable mit `==`
vergleicht, wird der Code unübersichtlich.

```java, java-exec
void weekdayNameIf(int day) {
    if (day == 1) {
        IO.println("Montag");
    } else if (day == 2) {
        IO.println("Dienstag");
    } else if (day == 3) {
        IO.println("Mittwoch");
    } else {
        IO.println("Unbekannter Tag");
    }
}
```

```java, java-exec
weekdayNameIf(2)
```

Für genau diesen Fall gibt es `switch`. Es prüft einen Wert einmal und
springt direkt zum passenden `case`.

## switch als Statement

Hinter `switch` steht in runden Klammern der Wert, dahinter in
geschweiften Klammern die Fälle. Mit `->` wird angegeben, was bei dem
Fall passieren soll. `default` fängt alles ab, was zu keinem `case`
passt. Es entspricht dem letzten `else`.

```java, java-exec
void weekdayName(int day) {
    switch (day) {
        case 1 -> IO.println("Montag");
        case 2 -> IO.println("Dienstag");
        case 3 -> IO.println("Mittwoch");
        default -> IO.println("Unbekannter Tag");
    }
}
```

```java, java-exec
weekdayName(2)
```

```java, java-exec
weekdayName(9)
```

Mehrere Werte können sich einen `case` teilen, getrennt durch Kommas:

```java, java-exec
void dayType(int day) {
    switch (day) {
        case 1, 2, 3, 4, 5 -> IO.println("Werktag");
        case 6, 7 -> IO.println("Wochenende");
        default -> IO.println("Unbekannter Tag");
    }
}
```

```java, java-exec
dayType(6)
```

`switch` funktioniert mit `int`, `String` und einigen weiteren Typen,
aber nicht mit Bereichen wie `count >= 15`. Dafür bleibt `if` zuständig.

```java, java-exec
void greetWord(String word) {
    switch (word) {
        case "Servus" -> IO.println("Bayern!");
        case "Hello" -> IO.println("England!");
        default -> IO.println("?");
    }
}
```

```java, java-exec
greetWord("Servus")
```

## switch als Ausdruck

Ein `switch` kann auch einen Wert zurückgeben. Dann steht vor jedem
`->` der Rückgabewert statt eines Statements.

```java, java-exec
String weekday(int day) {
    return switch (day) {
        case 1 -> "Montag";
        case 2 -> "Dienstag";
        case 3 -> "Mittwoch";
        default -> "Unbekannter Tag";
    };
}
```

```java, java-exec
weekday(3)
```

```java, java-exec
weekday(9)
```

Als Faustregel: eine `else if`-Kette mit immer demselben `==`-Vergleich
wird ein `switch`. Alles mit `>`, `<`, `&&` oder `||` bleibt ein `if`.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./switch_aufgaben.md)
