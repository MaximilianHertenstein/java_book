# Aufgaben: Syntaxfehler

## Quiz

### Quiz 1

{{#quiz ./quizzes/syntaxfehler_01.toml}}

### Quiz 2

{{#quiz ./quizzes/syntaxfehler_02.toml}}

### Quiz 3

{{#quiz ./quizzes/syntaxfehler_03.toml}}

### Quiz 4

{{#quiz ./quizzes/syntaxfehler_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Fehler finden und reparieren

Ergänze das fehlende Zeichen, sodass beide Methoden fehlerfrei definiert sind.

```java, java-exec
int doppelt(int x) {
    return 2 * x;
}
int quadrat(int x)
    return x * x;
```

### 2. Fehler finden und reparieren

Dem Methodenkörper fehlt die öffnende geschweifte Klammer. Ergänze sie.

```java, java-exec
int hochDrei(int x)
    return x * x * x;
hochDrei(3)
```

### 3. Vorhersage → Ausführen

Lies den Code genau. Sage voraus, in welcher Zeile der Fehler gemeldet wird, bevor du ausführst.

```java, java-exec
int halb(int x) {
    return x / 2;
}
int verdreifacht(int x)
    return x * 3;
```

### 4. Ergänze die Lücke

Ergänze das fehlende Zeichen an der Lücke, sodass der Methodenkopf gültig ist.

```java, java-exec
int einsDazu(int x) {
    return x + 1;
}
int einsWeniger(int x)____
    return x - 1;
```

### 5. Prüfe deine Idee

Ändere die öffnende geschweifte Klammer in Zeile 1 in ein Semikolon (`;`) und führe den Code aus. Notiere, welche Zeile und welches Zeichen die Umgebung in der Fehlermeldung nennt.

```java, java-exec
int doppelt(int x) {
    return 2 * x;
}
```
