# Aufgaben: Funktionen als Werte

## Quiz

### Quiz 1

{{#quiz ./quizzes/funktionale_programmierung_01.toml}}

### Quiz 2

{{#quiz ./quizzes/funktionale_programmierung_02.toml}}

### Quiz 3

{{#quiz ./quizzes/funktionale_programmierung_03.toml}}

### Quiz 4

{{#quiz ./quizzes/funktionale_programmierung_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst auf, was in jeder Zeile ausgegeben wird. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
import java.util.function.Consumer;
class Utils {
    static void showNumber(int x) {
        IO.println("|" + x + "|");
    }
    static void doWithOneToThree(Consumer<Integer> f) {
        f.accept(1);
        f.accept(2);
        f.accept(3);
    }
}
Utils.doWithOneToThree(Utils::showNumber)
```

### 2. Verändere die Eingabe

Ändere nur die übergebene Methode, sodass `Utils.acc` am Ende `6` ist.

```java, java-exec
import java.util.function.Consumer;
class Utils {
    static void showNumber(int x) {
        IO.println("|" + x + "|");
    }
    static int acc = 0;
    static void incAcc(int x) {
        acc = acc + x;
    }
    static void doWithOneToThree(Consumer<Integer> f) {
        f.accept(1);
        f.accept(2);
        f.accept(3);
    }
}
Utils.doWithOneToThree(Utils::showNumber);
Utils.acc
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Methode aus der Liste aufgerufen wird.

```java, java-exec
import java.util.List;
import java.util.function.Consumer;
class Utils {
    static void showNumber(int x) {
        IO.println("|" + x + "|");
    }
}
List<Consumer<Integer>> functions = List.of(Utils::showNumber);
functions.get(0).____
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil im Block das `return` fehlt. Ergänze es.

```java, java-exec
import java.util.function.Function;
Function<Integer, Integer> f = x -> {
    IO.println("Computing...");
    x + 1;
};
f.apply(3)
```

### 5. Prüfe deine Idee

Sage voraus, was ausgegeben und was zurückgegeben wird, bevor du den Code ausführst.

```java, java-exec
import java.util.function.Function;
Function<Integer, Integer> f = x -> {
    IO.println("Computing...");
    return x + 1;
};
f.apply(3)
```
