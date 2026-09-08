# Funktionen als Werte

In dem folgenden Codeblock werden die Methoden `showNumber` und
`incAcc` sowie eine Methode definiert, die selbst eine Methode als
Parameter nimmt.

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
```

Wir haben Methoden bisher nur verwendet, um sie an anderen Stellen im
Code aufzurufen.

```java, java-exec
Utils.showNumber(4)
```

Es ist aber möglich, Methoden nicht aufzurufen, sondern als Werte zu
verwenden. Dafür schreiben wir den Klassennamen, zwei Doppelpunkte und
den Methodennamen.

```java, java-exec
Consumer<Integer> ref = Utils::showNumber;
ref
```

Beide Methoden nehmen ein `Integer` und geben nichts zurück. In Java
heißt dieser Typ `Consumer<Integer>`. Das ist nur eine andere
Möglichkeit zu sagen, dass wir diesen Methoden beim Aufruf ein Integer
übergeben und keinen Rückgabewert erhalten.

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

Wir können Methoden, die denselben Typ haben, in einer Liste speichern.

```java, java-exec
import java.util.List;
List<Consumer<Integer>> functions = List.of(Utils::showNumber, Utils::incAcc);
functions.get(0).accept(5)
```

Der Methode `doWithOneToThree` wird beim Aufruf eine Methode mit dem
Typ `Consumer<Integer>` übergeben. Diese wird dann nacheinander mit den
Argumenten \\(1\\), \\(2\\) und \\(3\\) aufgerufen.

Da die Methode `showNumber` den Typ `Consumer<Integer>` hat, können wir
sie als Argument für `doWithOneToThree` verwenden.

```java, java-exec
Utils.doWithOneToThree(Utils::showNumber)
```

Auch die Methode `incAcc` hat den Typ `Consumer<Integer>` und kann
deshalb als Argument für `doWithOneToThree` verwendet werden.

```java, java-exec
Utils.doWithOneToThree(Utils::incAcc);
Utils.acc
```

## Lambda-Ausdrücke

Wenn wir einfache Methoden wie `showNumber` als Argumente für andere
Methoden verwenden wollen, ist es oft störend, diese Methoden erst zu
definieren und sich einen sinnvollen Namen für sie zu überlegen. Um
dies zu vermeiden, können sogenannte Lambda-Ausdrücke verwendet werden.
Bei diesen schreibt man den Parameter, einen Pfeil und rechts davon die
Anweisung, die ausgeführt werden soll.

```java, java-exec
Utils.doWithOneToThree(x -> IO.println("|" + x + "|"))
```

Auf diese Weise können wir Methoden direkt beim Aufruf weiterer
Methoden definieren.

Wenn ein Lambda-Ausdruck etwas zurückgeben soll, brauchen wir einen
Block mit `return`. Dafür steht der Typ `Function` bereit, der
Eingabe- und Rückgabetyp in spitzen Klammern trägt.

```java, java-exec
import java.util.function.Function;
Function<Integer, Integer> f = x -> {
    IO.println("Computing...");
    return x + 1;
};
```

```java, java-exec
f.apply(3)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./funktionale_programmierung_aufgaben.md)
