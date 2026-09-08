# Aufgaben: Nullwerte

## Quiz

### Quiz 1

{{#quiz ./quizzes/nullwerte_01.toml}}

### Quiz 2

{{#quiz ./quizzes/nullwerte_02.toml}}

### Quiz 3

{{#quiz ./quizzes/nullwerte_03.toml}}

### Quiz 4

{{#quiz ./quizzes/nullwerte_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
Character.isDigit('5')
```

### 2. Verändere die Eingabe

Ändere nur das Zeichen, sodass `false` zurückgegeben wird.

```java, java-exec
Character.isDigit('5')
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Methode bei `null` nicht abstürzt.

```java, java-exec
boolean isDigitOrFalse(Character maybeChar) {
    if (____) {
        return Character.isDigit(maybeChar);
    }
    return false;
}
isDigitOrFalse(null)
```

### 4. Fehler finden und reparieren

Der Code bricht mit einer `NullPointerException` ab. Prüfe vorher mit `if`, ob der Wert `null` ist.

```java, java-exec
Character maybeChar = null;
maybeChar.equals('w')
```

### 5. Prüfe deine Idee

Sage voraus, was beide Aufrufe zurückgeben, bevor du den Code ausführst.

```java, java-exec
boolean isDigitOrFalse(Character maybeChar) {
    if (maybeChar != null) {
        return Character.isDigit(maybeChar);
    }
    return false;
}
isDigitOrFalse('w')
```

```java, java-exec
boolean isDigitOrFalse(Character maybeChar) {
    if (maybeChar != null) {
        return Character.isDigit(maybeChar);
    }
    return false;
}
isDigitOrFalse(null)
```
