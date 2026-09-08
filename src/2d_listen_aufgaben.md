# Aufgaben: 2D-Listen

## Quiz

### Quiz 1

{{#quiz ./quizzes/2d_listen_01.toml}}

### Quiz 2

{{#quiz ./quizzes/2d_listen_02.toml}}

### Quiz 3

{{#quiz ./quizzes/2d_listen_03.toml}}

### Quiz 4

{{#quiz ./quizzes/2d_listen_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
import java.util.List;
List<List<Character>> zs = List.of(List.of('G', 'H', 'S'), List.of('E'));
zs.get(1).get(0)
```

### 2. Verändere die Eingabe

Ändere nur die Indizes, sodass `'S'` ausgegeben wird.

```java, java-exec
import java.util.List;
List<List<Character>> zs = List.of(List.of('G', 'H', 'S'), List.of('E'));
zs.get(1).get(0)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass alle Zeichen einzeln ausgegeben werden.

```java, java-exec
import java.util.List;
List<List<Character>> zs = List.of(List.of('G', 'H', 'S'), List.of('E'));
for (List<Character> l : zs) {
    for (char x : l) {
        ____;
    }
}
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil die Ebenen nicht stimmen. Hänge stattdessen die Liste `xs` an.

```java, java-exec
import java.util.ArrayList;
import java.util.List;
var xxs = new ArrayList<>(List.of(new ArrayList<>(List.of(1, 3)), new ArrayList<>(List.of(2, 45))));
var xs = new ArrayList<>(List.of(5, 1));
xxs.add(5);
```

### 5. Prüfe deine Idee

Sage voraus, was in jeder Zeile ausgegeben wird, bevor du den Code ausführst.

```java, java-exec
import java.util.List;
void printCharList(List<Character> xs) {
    for (char x : xs) {
        IO.println(x);
    }
}
List<List<Character>> zs = List.of(List.of('G', 'H', 'S'), List.of('E'));
for (List<Character> l : zs) {
    printCharList(l);
}
```
