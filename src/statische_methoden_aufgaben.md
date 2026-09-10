# Aufgaben: Statische Methoden

## Quiz

### Quiz 1

{{#quiz ./quizzes/statische_methoden_01.toml}}

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

Ergänze die Lücke, sodass die Methode ohne Objekt aufrufbar ist.

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
