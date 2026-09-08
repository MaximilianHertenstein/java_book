# Aufgaben: Akkumulator-Pattern

## Quiz

### Quiz 1

{{#quiz ./quizzes/akkumulator_pattern_01.toml}}

### Quiz 2

{{#quiz ./quizzes/akkumulator_pattern_02.toml}}

### Quiz 3

{{#quiz ./quizzes/akkumulator_pattern_03.toml}}

### Quiz 4

{{#quiz ./quizzes/akkumulator_pattern_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
int total = 0;
int x = 1;
while (x <= 4) {
    total = total + x;
    x = x + 1;
}
total
```

### 2. Fehler finden und reparieren

Ergänze die fehlende Initialisierung von `total`.

```java, java-exec
int x = 1;
while (x <= 4) {
    total = total + x;
    x = x + 1;
}
total
```

### 3. Verändere die Eingabe

Ändere nur die Obergrenze der Schleife, sodass `total` am Ende `15` ist (Summe von 1 bis 5).

```java, java-exec
int total = 0;
int x = 1;
while (x <= 4) {
    total = total + x;
    x = x + 1;
}
total
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass `product` am Ende das Produkt der Zahlen von 1 bis 4 enthält.

```java, java-exec
int product = 1;
int x = 1;
while (x <= 4) {
    product = ____;
    x = x + 1;
}
product
```

### 5. Prüfe deine Idee

Notiere für jeden Schleifendurchlauf den Wert von `total`, bevor du den Code ausführst.

```java, java-exec
int total = 0;
int x = 1;
while (x <= 3) {
    total = total + x;
    IO.println("x = " + x + " total = " + total);
    x = x + 1;
}
```
