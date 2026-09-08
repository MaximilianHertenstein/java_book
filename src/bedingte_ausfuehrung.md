# Bedingte Ausführung

## Grundlegendes / Motivation

Bis jetzt haben wir nur Methoden geschrieben, die
*Zuweisungs-Statements*, Aufrufe von `IO.println` und/oder ein
`return`-Statement enthielten. Beim Aufruf einer Methode werden - wie
bei der Ausführung eines Skripts - nacheinander alle enthaltenen
*Statements* ausgeführt.

Oft will man aber nur bestimmte *Statements* ausführen. Dafür benötigt
man sogenannte `if`-Statements. Diese gehören wie Methodendefinitionen
zu den zusammengesetzten *Statements*, da mit ihnen mehrere
*Statements* zu einem einzigen *Statement* verbunden werden.

## if-Statements

Bei diesen *Statements* schreibt man hinter das Schlüsselwort `if` in
runde Klammern eine Bedingung bzw. einen *booleschen Ausdruck*. Dahinter
folgt in geschweiften Klammern der Code. Dieser wird nur dann
ausgeführt, wenn der Ausdruck zu `true` ausgewertet wird.

```java, java-exec
String testResult(int points) {
    if (points >= 50) {
        return "Passed";
    }
    return "Failed";
}
```

```java, java-exec
testResult(50)
```
```java, java-exec
testResult(49)
```

- Falls `points >= 50` zu `true` ausgewertet wird, wird
  `return "Passed"` ausgeführt. Beim Ausführen von `return` wird die
  Methode sofort verlassen. Deshalb wird `"Passed"` zurückgegeben und
  nichts weiter ausgeführt.
- Falls `points < 50` zu `true` ausgewertet wird, wird
  `return "Passed"` übersprungen. Es geht direkt weiter mit
  `return "Failed"`.

Ohne das zweite `return` würde sich der Code gar nicht erst ausführen
lassen: Eine Methode mit Rückgabetyp muss in jedem Fall etwas
zurückgeben. Fehlt das zweite `return`, meldet die Umgebung einen
Fehler (`missing return statement`).

## Mehrere Alternativen

Oft will man zwischen mehr als zwei Möglichkeiten unterscheiden. Dann
können mehrere `if`-Statements verwendet werden.

```java, java-exec
String testResult(int points) {
    if (points > 75) {
        return "Very good";
    }
    if (points > 50) {
        return "Passed";
    }
    return "Failed";
}
```

```java, java-exec
testResult(80)
```
```java, java-exec
testResult(54)
```
```java, java-exec
testResult(2)
```

- Falls `points` größer als `75` ist, wird `return "Very good"`
  ausgeführt. Beim Ausführen von `return` wird die Methode sofort
  verlassen. Deshalb wird `"Very good"` zurückgegeben und nichts weiter
  ausgeführt.
- Falls `points` kleiner als oder gleich `75` ist, wird der Code

```java
if (points > 50) {
    return "Passed";
}
return "Failed";
```

ausgeführt. Das funktioniert wie oben erklärt.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./bedingte_ausfuehrung_aufgaben.md)
