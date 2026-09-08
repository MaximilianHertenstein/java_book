# Aufgaben: Listen

## Quiz

### Quiz 1

{{#quiz ./quizzes/listen_01.toml}}

### Quiz 2

{{#quiz ./quizzes/listen_02.toml}}

### Quiz 3

{{#quiz ./quizzes/listen_03.toml}}

### Quiz 4

{{#quiz ./quizzes/listen_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
import java.util.List;
List<String> xs = List.of("a", "b", "c");
xs.get(1)
```

### 2. Verändere die Eingabe

Ändere nur den Index, sodass `"c"` ausgegeben wird.

```java, java-exec
import java.util.List;
List<String> xs = List.of("a", "b", "c");
xs.get(1)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `ys` aus allen Elementen von `xs` und einem zusätzlichen Element `"d"` besteht.

```java, java-exec
import java.util.ArrayList;
import java.util.List;
List<String> xs = List.of("a", "b", "c");
var ys = new ArrayList<>(xs);
ys.add(____);
ys
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler. Ändere den Index so, dass ein gültiges Element ausgegeben wird.

```java, java-exec
import java.util.List;
List<String> xs = List.of("a", "b", "c");
xs.get(3)
```

### 5. Prüfe deine Idee

Sage voraus, was in jeder Zeile ausgegeben wird, bevor du den Code ausführst.

```java, java-exec
import java.util.List;
List<Integer> xs = List.of(1, 2, 3);
for (int x : xs) {
    IO.println(x * 2);
}
```
