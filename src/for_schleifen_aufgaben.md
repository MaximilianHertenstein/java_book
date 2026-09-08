# Aufgaben: For-Schleifen

## Quiz

### Quiz 1

{{#quiz ./quizzes/for_schleifen_01.toml}}

### Quiz 2

{{#quiz ./quizzes/for_schleifen_02.toml}}

### Quiz 3

{{#quiz ./quizzes/for_schleifen_03.toml}}

### Quiz 4

{{#quiz ./quizzes/for_schleifen_04.toml}}

### Quiz 5

{{#quiz ./quizzes/for_schleifen_05.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
for (int i = 2; i < 6; i = i + 1) {
    IO.println(i);
}
```

### 2. Verändere die Eingabe

Ändere nur Startwert und Bedingung, sodass die Zahlen von 5 bis 9 ausgegeben werden.

```java, java-exec
for (int i = 2; i < 6; i = i + 1) {
    IO.println(i);
}
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `sumValue` am Ende die Summe der Zahlen von 1 bis 5 enthält.

```java, java-exec
int sumValue = 0;
for (int i = 1; i < ____; i = i + 1) {
    sumValue = sumValue + i;
}
sumValue
```

### 4. Fehler finden und reparieren

Ergänze die fehlende Initialisierung von `total`.

```java, java-exec
for (int i = 1; i < 4; i = i + 1) {
    total = total + i;
}
total
```

### 5. Prüfe deine Idee

Vergleiche die `while`- und die `for`-Version und erkläre, warum beide dasselbe berechnen.

```java, java-exec
int i = 3;
while (i <= 7) {
    IO.println(i);
    i = i + 1;
}
```

```java, java-exec
for (int i = 3; i < 8; i = i + 1) {
    IO.println(i);
}
```
