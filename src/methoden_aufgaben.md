# Aufgaben: Methoden

## Quiz

### Quiz 1

{{#quiz ./quizzes/methoden_01.toml}}

### Quiz 2

{{#quiz ./quizzes/methoden_02.toml}}

### Quiz 3

{{#quiz ./quizzes/methoden_03.toml}}

### Quiz 4

{{#quiz ./quizzes/methoden_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
int doppelt(int x) {
    return x + x;
}
doppelt(6)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass der Methodenaufruf den Wert `30` ergibt.

```java, java-exec
int verdreifacht(int x) {
    return 3 * x;
}
verdreifacht(5)
```

### 3. Passe die Methode an

Ändere die Methode so, dass sie das Quadrat von `x` statt des Doppelten berechnet.

```java, java-exec
int doppelt(int x) {
    return x + x;
}
doppelt(4)
```

### 4. Fehler finden und reparieren

Dem Methodenkopf fehlt die öffnende geschweifte Klammer. Ergänze das fehlende Zeichen.

```java, java-exec
int quadrat(int x)
    return x * x;
quadrat(3)
```

### 5. Ergänze die Lücke

Ergänze die Lücke im Methodenkörper, sodass `feetToYard` einen Wert in Fuß korrekt in Yard umrechnet (ein Yard sind drei Fuß).

```java, java-exec
int feetToYard(int lengthInFeet) {
    return ____;
}
feetToYard(9)
```
