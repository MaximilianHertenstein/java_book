# Funktionen als Werte

In dem folgenden Codeblock werden die Methode `showNumber` sowie eine
Methode definiert, die selbst eine Methode als Parameter nimmt.

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
```

Wir haben Methoden bisher nur verwendet, um sie an anderen Stellen im
Code aufzurufen.

```java, java-exec
Utils.showNumber(4)
```

Es ist aber möglich, Methoden nicht aufzurufen, sondern als Werte zu
verwenden. Dafür schreiben wir den Klassennamen, zwei Doppelpunkte und
den Methodennamen — ohne runde Klammern.

```java, java-exec
Consumer<Integer> ref = Utils::showNumber;
ref
```

`Utils::showNumber` ruft also nichts auf, sondern übergibt die Methode
selbst. `Utils.showNumber(4)` dagegen führt sie sofort mit `4` aus.

Die Methode nimmt ein `Integer` und gibt nichts zurück. In Java heißt
dieser Typ `Consumer<Integer>`.

## Methoden als Werte verwenden

Wenn wir Methoden als Werte verwenden, können wir mit diesen alles
machen, was wir mit anderen Werten machen können. Z. B. können wir
Methoden in Variablen speichern.

```java, java-exec
Consumer<Integer> x = Utils::showNumber;
```

Und diese Variablen anschließend verwenden. Statt runder Klammern steht
dabei `accept` davor.

```java, java-exec
x.accept(3)
```

## Methode als Argument übergeben

Der Methode `doWithOneToThree` wird beim Aufruf eine Methode mit dem
Typ `Consumer<Integer>` übergeben. Diese wird dann nacheinander mit den
Argumenten \(1\), \(2\) und \(3\) aufgerufen.

Da die Methode `showNumber` den Typ `Consumer<Integer>` hat, können wir
sie als Argument für `doWithOneToThree` verwenden.

```java, java-exec
Utils.doWithOneToThree(Utils::showNumber)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./funktionale_programmierung_aufgaben.md)
