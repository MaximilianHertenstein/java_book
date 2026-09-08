# Aufgaben: Klassisches Switch

## Quiz

### Quiz 1

{{#quiz ./quizzes/switch_klassisch_01.toml}}

### Quiz 2

{{#quiz ./quizzes/switch_klassisch_02.toml}}

### Quiz 3

{{#quiz ./quizzes/switch_klassisch_03.toml}}

### Quiz 4

{{#quiz ./quizzes/switch_klassisch_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst auf, was ausgegeben wird. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
void weekdayNameFallthrough(int day) {
    switch (day) {
        case 1:
            IO.println("Montag");
        case 2:
            IO.println("Dienstag");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
weekdayNameFallthrough(1)
```

### 2. Verändere die Eingabe

Ändere nur die Zahl im Aufruf, sodass nur `"Dienstag"` ausgegeben wird.

```java, java-exec
void weekdayNameFallthrough(int day) {
    switch (day) {
        case 1:
            IO.println("Montag");
        case 2:
            IO.println("Dienstag");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
weekdayNameFallthrough(1)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass nach `"Montag"` Schluss ist und kein Fall-through mehr stattfindet.

```java, java-exec
void weekdayNameOld(int day) {
    switch (day) {
        case 1:
            IO.println("Montag");
            ____;
        case 2:
            IO.println("Dienstag");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
weekdayNameOld(1)
```

### 4. Fehler finden und reparieren

Der Code gibt bei `1` zwei Zeilen aus, obwohl nur eine erscheinen soll. Repariere ihn mit einem `break`.

```java, java-exec
void weekdayNameFallthrough(int day) {
    switch (day) {
        case 1:
            IO.println("Montag");
        case 2:
            IO.println("Dienstag");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
weekdayNameFallthrough(1)
```

### 5. Prüfe deine Idee

Sage voraus, was beide Aufrufe ausgeben. Prüfe danach, ob gestapelte `case`-Zeilen denselben Zweig teilen.

```java, java-exec
void dayTypeOld(int day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            IO.println("Werktag");
            break;
        case 6:
        case 7:
            IO.println("Wochenende");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
dayTypeOld(3)
```

```java, java-exec
void dayTypeOld(int day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            IO.println("Werktag");
            break;
        case 6:
        case 7:
            IO.println("Wochenende");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
dayTypeOld(7)
```
