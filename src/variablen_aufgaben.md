# Aufgaben: Variablen

## Quiz

### Quiz 1

{{#quiz ./quizzes/variablen_01.toml}}

### Quiz 2

{{#quiz ./quizzes/variablen_02.toml}}

### Quiz 3

{{#quiz ./quizzes/variablen_03.toml}}

### Quiz 4

{{#quiz ./quizzes/variablen_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Welchen Wert hat `y` am Ende? Schreibe zuerst deine Vermutung auf und überprüfe sie danach.

```java, java-exec
var x = 4;
var y = x;
x = 10;
y
```

### 2. Verändere die Eingabe

Ändere nur den Wert von `feetPerYard`, sodass `yardsInFeet` am Ende den Wert `40` hat.

```java, java-exec
var feetPerYard = 3;
var yardsInFeet = feetPerYard * 10;
yardsInFeet
```

### 3. Fehler finden und reparieren

Der folgende Code erzeugt einen Fehler. Korrigiere den Variablennamen, ohne die Zahl darin zu entfernen.

```java, java-exec
var 2ndNumber = 5;
2ndNumber
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass `area` die Fläche eines Quadrats mit der Seitenlänge `side` berechnet.

```java, java-exec
var side = 4;
var area = ____;
area
```

### 5. Prüfe deine Idee

Berechne zuerst per Hand, welchen Wert `result` nach jeder Zeile hat. Führe den Code danach aus.

```java, java-exec
var result = 0;
result = result + 5;
result = result + result;
result
```
