# Aufgaben: Listen verändern

## Quiz

### Quiz 1

{{#quiz ./quizzes/listen_aendern_01.toml}}

### Quiz 2

{{#quiz ./quizzes/listen_aendern_02.toml}}

### Quiz 3

{{#quiz ./quizzes/listen_aendern_03.toml}}

### Quiz 4

{{#quiz ./quizzes/listen_aendern_04.toml}}

### Quiz 5

{{#quiz ./quizzes/listen_aendern_05.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
import java.util.ArrayList;
import java.util.List;
var xs = new ArrayList<>(List.of(1, 2, 3));
xs.add(4);
xs
```

### 2. Verändere die Eingabe

Ändere nur den Index, sodass das mittlere Element ersetzt wird.

```java, java-exec
import java.util.ArrayList;
import java.util.List;
var xs = new ArrayList<>(List.of(1, 2, 3));
xs.set(0, 99);
xs
```

### 3. Fehler finden und reparieren

`addOne` hat keinen brauchbaren Rückgabewert. Repariere die letzten beiden Zeilen, sodass `xs` direkt verwendet wird.

```java, java-exec
import java.util.ArrayList;
import java.util.List;
void addOne(List<Integer> xs) {
    xs.add(1);
}
var xs = new ArrayList<>(List.of(1, 2, 3));
var result = addOne(xs);
result.add(4);
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Methode das erste Element der Liste auf `0` setzt.

```java, java-exec
import java.util.ArrayList;
import java.util.List;
void setFirstZero(List<Integer> xs) {
    ____
}
var xs = new ArrayList<>(List.of(5, 6, 7));
setFirstZero(xs);
xs
```

### 5. Prüfe deine Idee

Sage voraus, welchen Wert `xs` am Ende hat, und erkläre warum.

```java, java-exec
import java.util.ArrayList;
import java.util.List;
var xs = new ArrayList<>(List.of(1, 2, 3));
var ys = xs;
ys.set(0, 100);
xs
```
