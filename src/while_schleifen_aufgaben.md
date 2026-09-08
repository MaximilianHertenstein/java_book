# Aufgaben: While-Schleifen

## Quiz

### Quiz 1

{{#quiz ./quizzes/while_schleifen_01.toml}}

### Quiz 2

{{#quiz ./quizzes/while_schleifen_02.toml}}

### Quiz 3

{{#quiz ./quizzes/while_schleifen_03.toml}}

### Quiz 4

{{#quiz ./quizzes/while_schleifen_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
int x = 1;
while (x < 4) {
    IO.println(x);
    x = x + 1;
}
```

### 2. Fehler finden und reparieren

Der Code bricht nie ab (Endlosschleife). Ergänze die fehlende Zeile. Führe den Code erst aus, wenn die Ergänzung steht.

```java, java-exec
int x = 1;
while (x < 4) {
    IO.println(x);
}
```

### 3. Verändere die Eingabe

Ändere nur den Startwert von `x`, sodass genau zwei Zahlen ausgegeben werden.

```java, java-exec
int x = 1;
while (x < 4) {
    IO.println(x);
    x = x + 1;
}
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Schleife die Zahlen von 1 bis 10 ausgibt.

```java, java-exec
int x = 1;
while (____) {
    IO.println(x);
    x = x + 1;
}
```

### 5. Prüfe deine Idee

Sage voraus, welche Zeile nicht wiederholt wird, und erkläre warum.

```java, java-exec
int x = 1;
while (x < 4) {
    IO.println(x);
    x = x + 1;
}
IO.println("Fertig");
```
