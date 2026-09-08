# Aufgaben: Switch

## Quiz

### Quiz 1

{{#quiz ./quizzes/switch_01.toml}}

### Quiz 2

{{#quiz ./quizzes/switch_02.toml}}

### Quiz 3

{{#quiz ./quizzes/switch_03.toml}}

### Quiz 4

{{#quiz ./quizzes/switch_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst auf, was ausgegeben wird. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
void weekdayName(int day) {
    switch (day) {
        case 1 -> IO.println("Montag");
        case 2 -> IO.println("Dienstag");
        case 3 -> IO.println("Mittwoch");
        default -> IO.println("Unbekannter Tag");
    }
}
weekdayName(9)
```

### 2. Verändere die Eingabe

Ändere nur die Zahl im Aufruf, sodass `"Dienstag"` ausgegeben wird.

```java, java-exec
void weekdayName(int day) {
    switch (day) {
        case 1 -> IO.println("Montag");
        case 2 -> IO.println("Dienstag");
        case 3 -> IO.println("Mittwoch");
        default -> IO.println("Unbekannter Tag");
    }
}
weekdayName(9)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass alle unbekannten Tage abgefangen werden.

```java, java-exec
void weekdayName(int day) {
    switch (day) {
        case 1 -> IO.println("Montag");
        case 2 -> IO.println("Dienstag");
        ____ -> IO.println("Unbekannter Tag");
    }
}
weekdayName(9)
```

### 4. Fehler finden und reparieren

Der Code lässt sich mit `switch` nicht sinnvoll schreiben, weil Bereiche geprüft werden. Begründe in einem Satz, warum `switch` hier nicht passt.

```java, java-exec
void testResultPrint(int points) {
    if (points > 75) {
        IO.println("Great");
    } else if (points > 50) {
        IO.println("Passed");
    } else {
        IO.println("Failed");
    }
}
testResultPrint(80)
```

### 5. Prüfe deine Idee

Sage voraus, was beide Aufrufe zurückgeben. Prüfe danach, ob der Ausdruck funktioniert.

```java, java-exec
String weekday(int day) {
    return switch (day) {
        case 1 -> "Montag";
        case 2 -> "Dienstag";
        default -> "Unbekannter Tag";
    };
}
weekday(2)
```

```java, java-exec
String weekday(int day) {
    return switch (day) {
        case 1 -> "Montag";
        case 2 -> "Dienstag";
        default -> "Unbekannter Tag";
    };
}
weekday(9)
```
