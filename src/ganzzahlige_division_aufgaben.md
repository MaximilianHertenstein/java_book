# Aufgaben: Ganzzahlige Division

## Quiz

### Quiz 1

{{#quiz ./quizzes/ganzzahlige_division_01.toml}}

### Quiz 2

{{#quiz ./quizzes/ganzzahlige_division_02.toml}}

### Quiz 3

{{#quiz ./quizzes/ganzzahlige_division_03.toml}}

### Quiz 4

{{#quiz ./quizzes/ganzzahlige_division_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
17 / 4
```

### 2. Verändere die Eingabe

Ändere nur den Dividenden, sodass der Rest genau `0` ist.

```java, java-exec
17 % 4
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Gleichung für `dividend` und `divisor` immer aufgeht.

```java, java-exec
int dividend = 23;
int divisor = 6;
int quotient = dividend / divisor;
int rest = dividend % divisor;
dividend == ____
```

### 4. Fehler finden und reparieren

Das Ergebnis der letzten Zeile stimmt nicht mit `dividend` überein. Entferne die Umwandlung in Zeile 3, sodass die Gleichung wieder aufgeht.

```java, java-exec
int dividend = 20;
int divisor = 3;
double quotient = (double) dividend / divisor;
int rest = dividend % divisor;
quotient * divisor + rest
```

### 5. Prüfe deine Idee

Sage voraus, was `quotient` und `rest` jeweils sind, bevor du ausführst.

```java, java-exec
int dividend = 29;
int divisor = 7;
int quotient = dividend / divisor;
int rest = dividend % divisor;
IO.println(quotient);
IO.println(rest);
```
