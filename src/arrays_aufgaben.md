# Aufgaben: Arrays

## Quiz

### Quiz 1

{{#quiz ./quizzes/arrays_01.toml}}

### Quiz 2

{{#quiz ./quizzes/arrays_02.toml}}

### Quiz 3

{{#quiz ./quizzes/arrays_03.toml}}

### Quiz 4

{{#quiz ./quizzes/arrays_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
String[] xs = {"a", "b", "c"};
xs[1]
```

### 2. Verändere die Eingabe

Ändere nur den Index, sodass `"c"` ausgegeben wird.

```java, java-exec
String[] xs = {"a", "b", "c"};
xs[1]
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Schleife alle Elemente von `xs` ausgibt.

```java, java-exec
int[] xs = {4, 5, 6};
for (int i = 0; i < ____; i = i + 1) {
    IO.println(xs[i]);
}
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler. Ändere den Index so, dass ein gültiges Element ausgegeben wird.

```java, java-exec
int[] xs = {1, 2, 3};
xs[3]
```

### 5. Prüfe deine Idee

Sage voraus, was zurückgegeben wird, bevor du den Code ausführst.

```java, java-exec
int[] doubleAll(int[] xs) {
    int[] result = new int[xs.length];
    for (int i = 0; i < xs.length; i = i + 1) {
        result[i] = 2 * xs[i];
    }
    return result;
}
doubleAll(new int[]{1, 2, 3})
```
