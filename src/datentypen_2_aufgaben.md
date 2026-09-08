# Aufgaben: Datentypen 2

## Quiz

### Quiz 1

{{#quiz ./quizzes/datentypen_2_01.toml}}

### Quiz 2

{{#quiz ./quizzes/datentypen_2_02.toml}}

### Quiz 3

{{#quiz ./quizzes/datentypen_2_03.toml}}

### Quiz 4

{{#quiz ./quizzes/datentypen_2_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
import java.util.List;
<T> T getFirst(List<T> xs) {
    return xs.get(0);
}
getFirst(List.of(5, 2, 3))
```

### 2. Verändere die Eingabe

Ändere nur die Liste, sodass ein `Boolean` zurückgegeben wird.

```java, java-exec
import java.util.List;
<T> T getFirst(List<T> xs) {
    return xs.get(0);
}
getFirst(List.of(5, 2, 3))
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die `String`-Version von `inc` aufgerufen wird.

```java, java-exec
int inc(int n) {
    return n + 1;
}
String inc(String s) {
    return s + " + 1";
}
inc(____)
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil Typ und Wert nicht zusammenpassen. Repariere die Zeile.

```java, java-exec
String z = 4;
```

### 5. Prüfe deine Idee

Sage voraus, was beide Aufrufe zurückgeben, bevor du den Code ausführst.

```java, java-exec
import java.util.List;
<T, S> S ifEqualFirstElseSecond(T a, T b, List<S> xs) {
    if (a.equals(b)) {
        return xs.get(0);
    } else {
        return xs.get(1);
    }
}
ifEqualFirstElseSecond("hello", "hella", List.of(4, 9))
```

```java, java-exec
import java.util.List;
<T, S> S ifEqualFirstElseSecond(T a, T b, List<S> xs) {
    if (a.equals(b)) {
        return xs.get(0);
    } else {
        return xs.get(1);
    }
}
ifEqualFirstElseSecond(1, 1, List.of('u', 'a'))
```
