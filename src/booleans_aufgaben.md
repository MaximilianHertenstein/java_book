# Aufgaben: Booleans

## Quiz

### Quiz 1

{{#quiz ./quizzes/booleans_01.toml}}

### Quiz 2

{{#quiz ./quizzes/booleans_02.toml}}

### Quiz 3

{{#quiz ./quizzes/booleans_03.toml}}

### Quiz 4

{{#quiz ./quizzes/booleans_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
5 > 3 && 2 == 2
```

### 2. Verändere die Eingabe

Ändere nur eine Zahl, sodass der Ausdruck zu `false` ausgewertet wird.

```java, java-exec
5 > 3 && 2 == 2
```

### 3. Ergänze die Lücke

Ergänze die Lücke mit einem Vergleichsoperator, sodass der Ausdruck zu `true` ausgewertet wird.

```java, java-exec
var age = 16;
age ____ 18
```

### 4. Fehler finden und reparieren

Ergänze das fehlende Zeichen im Methodenkopf.

```java, java-exec
boolean volljaehrig(int alter)
    return alter >= 18;
volljaehrig(20)
```

### 5. Prüfe deine Idee

Vergleiche die beiden Ausdrücke und erkläre, warum die Klammern das Ergebnis verändern.

```java, java-exec
true || false && false
```

```java, java-exec
(true || false) && false
```
