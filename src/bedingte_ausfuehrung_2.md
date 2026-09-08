# if-else

## Grundlegendes / Motivation

Im letzten Kapitel haben wir Methoden geschrieben, die in verschiedenen
Fällen unterschiedliche Werte zurückgegeben haben.

```java, java-exec
String testResult(int points) {
    if (points > 50) {
        return "Passed";
    }
    return "Failed";
}
```

```java, java-exec
testResult(30)
```
```java, java-exec
testResult(53)
```

Wir wollen die Methode noch einmal mit `IO.println` statt `return`
schreiben.

```java, java-exec
void testResultPrint(int points) {
    if (points > 50) {
        IO.println("Passed");
    }
    IO.println("Failed");
}
```

```java, java-exec
testResultPrint(30)
```

```java, java-exec
testResultPrint(53)
```

Im zweiten Beispiel ist die Bedingung `points > 50` erfüllt. Deshalb
wird `IO.println("Passed")` ausgeführt. Im Gegensatz zu `return`
verlässt `IO.println` die Methode **nicht** automatisch. Deshalb wird
danach auch noch `IO.println("Failed")` ausgeführt.

Eigentlich soll `IO.println("Failed")` nur ausgeführt werden, wenn
`points > 50` zu `false` ausgewertet wird.

Dies kann mit *if-else-Statements* erreicht werden.

## if-else-Statements

Bei diesen *Statements* schreibt man nach dem Code, der im `if`-Block
in geschweiften Klammern steht, auf der Höhe von `if` das Schlüsselwort
`else`. Dahinter folgt in geschweiften Klammern der Code. Dieser wird
nur dann ausgeführt, wenn der Ausdruck hinter `if` zu `false`
ausgewertet wird.

```java, java-exec
void testResultPrint(int points) {
    if (points > 50) {
        IO.println("Passed");
    } else {
        IO.println("Failed");
    }
}
```

```java, java-exec
testResultPrint(30)
```

```java, java-exec
testResultPrint(53)
```

## Mehrere Alternativen

Oft will man zwischen mehr als zwei Möglichkeiten unterscheiden. Dann
können verschachtelte *if* / *if-else-Statements* verwendet werden.
Hierfür schreibt man nach `if` und/oder `else` ein eigenes
*if-else-Statement* in geschweiften Klammern.

```java, java-exec
void testResultPrintBetter(int points) {
    if (points > 75) {
        IO.println("Great");
    } else {
        if (points > 50) {
            IO.println("Passed");
        } else {
            IO.println("Failed");
        }
    }
}
```

```java, java-exec
testResultPrintBetter(80)
```

```java, java-exec
testResultPrintBetter(53)
```

```java, java-exec
testResultPrintBetter(2)
```

- Wenn `points` größer als `75` ist, wird `IO.println("Great")`
  ausgeführt. Der Code hinter `else` wird übersprungen.
- Ansonsten wird der folgende Code ausgeführt:

```java
if (points > 50) {
    IO.println("Passed");
} else {
    IO.println("Failed");
}
```

Dies entspricht genau dem Code, den wir oben gesehen haben.

## Vermeidung von Verschachtelung

Oft können verschachtelte *if-Statements* durch eine geschickte
Verwendung von *logischen Operatoren* vermieden werden.

```java, java-exec
boolean isTeenagerNested(int age) {
    if (age >= 13) {
        if (age < 20) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
```

Die Bedingungen können hier direkt kombiniert werden.

```java, java-exec
boolean isTeenager(int age) {
    if (age >= 13 && age < 20) {
        return true;
    } else {
        return false;
    }
}
```

Diese Methode kann sogar noch weiter vereinfacht werden.

```java, java-exec
boolean isTeenagerShorter(int age) {
    return age >= 13 && age < 20;
}
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./bedingte_ausfuehrung_2_aufgaben.md)
