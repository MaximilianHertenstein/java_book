# Aufgaben: Statische Methoden

## Quiz

### Quiz 1

{{#quiz ./quizzes/statische_methoden_01.toml}}

### Quiz 2

{{#quiz ./quizzes/statische_methoden_02.toml}}

### Quiz 3

{{#quiz ./quizzes/statische_methoden_03.toml}}

### Quiz 4

{{#quiz ./quizzes/statische_methoden_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
class Utils {
    static int square(int x) {
        return x * x;
    }
}
Utils.square(4)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass `25` zurückgegeben wird.

```java, java-exec
class Utils {
    static int square(int x) {
        return x * x;
    }
}
Utils.square(4)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Methode über die Klasse aufrufbar ist.

```java, java-exec
class Utils {
    ____ int square(int x) {
        return x * x;
    }
}
Utils.square(4)
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `square` kein `static` ist. Ergänze das Schlüsselwort.

```java, java-exec
class Utils {
    int square(int x) {
        return x * x;
    }
}
Utils.square(4)
```

### 5. Prüfe deine Idee

Sage voraus, welcher Aufruf funktioniert und welcher einen Fehler erzeugt, bevor du den Code ausführst.

```java, java-exec
class Utils {
    static int cube(int x) {
        return square(x) * x;
    }
    private static int square(int x) {
        return x * x;
    }
}
Utils.cube(3)
```

```java, java-exec
Utils.square(3)
```
