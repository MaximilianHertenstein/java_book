# Aufgaben: Bedingte Ausführung

## Quiz

### Quiz 1

{{#quiz ./quizzes/bedingte_ausfuehrung_01.toml}}

### Quiz 2

{{#quiz ./quizzes/bedingte_ausfuehrung_02.toml}}

### Quiz 3

{{#quiz ./quizzes/bedingte_ausfuehrung_03.toml}}

### Quiz 4

{{#quiz ./quizzes/bedingte_ausfuehrung_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
String testResult(int points) {
    if (points > 50) {
        return "Passed";
    }
    return "Failed";
}
testResult(45)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass die Methode `"Passed"` zurückgibt.

```java, java-exec
String testResult(int points) {
    if (points > 50) {
        return "Passed";
    }
    return "Failed";
}
testResult(45)
```

### 3. Fehler finden und reparieren

Der Code lässt sich nicht ausführen, weil ein `return` fehlt. Ergänze die fehlende Zeile.

```java, java-exec
String testResult(int points) {
    if (points >= 50) {
        return "Passed";
    }
}
testResult(49)
```

### 4. Ergänze die Lücke

Ergänze die Bedingung, sodass ab `76` Punkten `"Very good"` zurückgegeben wird.

```java, java-exec
String testResult(int points) {
    if (points ____ 75) {
        return "Very good";
    }
    if (points > 50) {
        return "Passed";
    }
    return "Failed";
}
testResult(80)
```

### 5. Prüfe deine Idee

Sage voraus, was bei den drei Aufrufen jeweils zurückgegeben wird, bevor du sie ausführst.

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
testResult(80)
```

```java, java-exec
testResult(54)
```

```java, java-exec
testResult(2)
```
