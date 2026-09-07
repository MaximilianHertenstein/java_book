# Aufgaben: Methoden 2

## Quiz

### Quiz 1

{{#quiz ./quizzes/methoden_2_01.toml}}

### Quiz 2

{{#quiz ./quizzes/methoden_2_02.toml}}

### Quiz 3

{{#quiz ./quizzes/methoden_2_03.toml}}

### Quiz 4

{{#quiz ./quizzes/methoden_2_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
int yardToFeet(int lengthInYard) {
    return 3 * lengthInYard;
}
int feetToInch(int lengthInFeet) {
    return 12 * lengthInFeet;
}
feetToInch(yardToFeet(2))
```

### 2. Verändere die Eingabe

Ändere nur das Argument von `yardToFeet`, sodass der verkettete Aufruf den Wert `72` ergibt.

```java, java-exec
int yardToFeet(int lengthInYard) {
    return 3 * lengthInYard;
}
int feetToInch(int lengthInFeet) {
    return 12 * lengthInFeet;
}
feetToInch(yardToFeet(1))
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `yardToInch` zuerst in Fuß und danach in Zoll umrechnet.

```java, java-exec
int yardToFeet(int lengthInYard) {
    return 3 * lengthInYard;
}
int feetToInch(int lengthInFeet) {
    return 12 * lengthInFeet;
}
int yardToInch(int lengthInYard) {
    return ____;
}
yardToInch(2)
```

### 4. Fehler finden und reparieren

Die Klammern der verketteten Methodenaufrufe passen nicht zusammen. Repariere den Ausdruck.

```java, java-exec
int yardToFeet(int lengthInYard) {
    return 3 * lengthInYard;
}
int feetToInch(int lengthInFeet) {
    return 12 * lengthInFeet;
}
feetToInch(yardToFeet(2)
```

### 5. Prüfe deine Idee

Erkläre, warum `yardToFeet(2 + 2)` denselben Wert wie `yardToFeet(4)` ergibt.

```java, java-exec
int yardToFeet(int lengthInYard) {
    return 3 * lengthInYard;
}
yardToFeet(2 + 2)
```
