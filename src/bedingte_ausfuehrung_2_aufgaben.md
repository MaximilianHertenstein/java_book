# Aufgaben: if-else

## Quiz

### Quiz 1

{{#quiz ./quizzes/bedingte_ausfuehrung_2_01.toml}}

### Quiz 2

{{#quiz ./quizzes/bedingte_ausfuehrung_2_02.toml}}

### Quiz 3

{{#quiz ./quizzes/bedingte_ausfuehrung_2_03.toml}}

### Quiz 4

{{#quiz ./quizzes/bedingte_ausfuehrung_2_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
void testResultPrint(int points) {
    if (points > 50) {
        IO.println("Passed");
    } else {
        IO.println("Failed");
    }
}
testResultPrint(30)
```

### 2. Fehler finden und reparieren

Ohne `else` wird bei einer bestandenen Prüfung zusätzlich `"Failed"` ausgegeben. Ergänze das fehlende `else`.

```java, java-exec
void testResultPrint(int points) {
    if (points > 50) {
        IO.println("Passed");
    }
    IO.println("Failed");
}
testResultPrint(80)
```

### 3. Verändere die Eingabe

Ändere nur das Argument, sodass `"Failed"` ausgegeben wird.

```java, java-exec
void testResultPrint(int points) {
    if (points > 50) {
        IO.println("Passed");
    } else {
        IO.println("Failed");
    }
}
testResultPrint(80)
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die verschachtelte Version zu einer einzigen Bedingung vereinfacht wird.

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
boolean isTeenager(int age) {
    return ____;
}
isTeenager(15)
```

### 5. Prüfe deine Idee

Vergleiche die Ergebnisse und erkläre, warum beide Methoden dasselbe berechnen.

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
isTeenagerNested(15)
```

```java, java-exec
boolean isTeenagerShorter(int age) {
    return age >= 13 && age < 20;
}
isTeenagerShorter(15)
```
