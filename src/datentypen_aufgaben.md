# Aufgaben: Datentypen

## Quiz

### Quiz 1

{{#quiz ./quizzes/datentypen_01.toml}}

### Quiz 2

{{#quiz ./quizzes/datentypen_02.toml}}

### Quiz 3

{{#quiz ./quizzes/datentypen_03.toml}}

### Quiz 4

{{#quiz ./quizzes/datentypen_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
var message = "Das Ergebnis ist: ";
var number = 5;
message + number
```

### 2. Vorhersage → Ausführen

Schreibe zuerst auf, welchen Wert du erwartest. Führe den Code danach aus und erkläre, warum `"75"` herauskommt und nicht `12`. Repariere anschließend die letzte Zeile mit `Integer.parseInt`, sodass `12` herauskommt.

```java, java-exec
var message = "7";
var number = 5;
message + number
```

### 3. Verändere die Eingabe

Ändere nur den String, sodass `Integer.parseInt(...)` die Zahl `42` ergibt, statt einen Fehler zu erzeugen.

```java, java-exec
Integer.parseInt("hello")
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass `text` den Satz mit dem Wert von `age` korrekt zusammensetzt.

```java, java-exec
var age = 12;
var text = "Ich bin " + ____ + " Jahre alt.";
text
```

### 5. Prüfe deine Idee

Vergleiche die beiden Ausdrücke und erkläre den Unterschied.

```java, java-exec
"ab".repeat(3)
```

```java, java-exec
"3" + "ab"
```
