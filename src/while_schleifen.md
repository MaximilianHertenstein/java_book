# While-Schleifen

## Wiederholung if-Statements

Mit `if`-Statements kann entschieden werden, ob bestimmte Codezeilen
ausgeführt werden sollen. Wenn die Bedingung hinter `if` zu `true`
ausgewertet wird, wird der Code im Block ausgeführt.

```java, java-exec
int x = 1;
if (x < 5) {
    IO.println(x + " ist kleiner als 5");
}
```

Wenn die Bedingung hinter `if` zu `false` ausgewertet wird, wird der
Code im Block nicht ausgeführt.

```java, java-exec
int x = 8;
if (x < 5) {
    IO.println(x + " ist kleiner als 5");
}
```

## While-Schleifen

`while`-Schleifen sind aufgebaut wie `if`-Statements. Hinter dem
Schlüsselwort `while` steht in runden Klammern eine Bedingung. Dahinter
folgt in geschweiften Klammern der Code.

```java, java-exec
int x = 1;
while (x < 5) {
    IO.println(x + " ist kleiner als 5");
    x = x + 1;
}
```

Zunächst läuft die Ausführung der `while`-Schleife genau wie bei einem
`if`-Statement. Die Bedingung hinter `while` wird ausgewertet. Wenn die
Bedingung zu `false` ausgewertet wird, wird der Code im Block nicht
ausgeführt.

```java, java-exec
int x = 8;
while (x < 5) {
    IO.println(x + " ist kleiner als 5");
}
```

Wenn die Bedingung zu `true` ausgewertet wird, wird der Code im Block
ausgeführt. Danach folgt ein Sprung zurück zu der Zeile, in der `while`
steht. Es wird erneut geprüft, ob die Bedingung immer noch zu `true`
ausgewertet wird. Falls dies der Fall ist, wird der Code im Block
erneut ausgeführt und danach wieder zurückgesprungen.

Das heißt: Wenn sich im Schleifenkörper nichts ändert, bricht die
Ausführung nie ab (Endlosschleife). Der folgende Code darf deshalb
**nicht** ausgeführt werden:

```java
int x = 1;
while (x < 5) {
    IO.println(x + " ist kleiner als 5");
}
```

Wenn wir eine Zeile ergänzen, in der `x` vergrößert wird, ist die
Bedingung nach einigen Durchläufen nicht mehr erfüllt und die
Ausführung bricht ab.

```java, java-exec
int x = 1;
while (x < 5) {
    IO.println(x + " ist kleiner als 5");
    x = x + 1;
}
```

Die Zeile mit dem `while` und der Bedingung nennt man Kopfzeile der
Schleife. Die Statements in den geschweiften Klammern darunter nennt
man Schleifenkörper.

Wenn eine Zeile nach dem Schleifenkörper nicht mehr in den geschweiften
Klammern steht, gehört sie **nicht** zum Schleifenkörper und wird
**nicht** wiederholt.

```java, java-exec
int x = 1;
while (x < 5) {
    IO.println(x);
    x = x + 1;
}
IO.println("Goodbye");
```

## While-Schleifen in Methoden

Wie alle Statements können auch `while`-Schleifen in Methoden verwendet werden.

```java, java-exec
void countToFourAndSayGoodbye() {
    int x = 1;
    while (x < 5) {
        IO.println(x);
        x = x + 1;
    }
    IO.println("Goodbye");
}
countToFourAndSayGoodbye()
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./while_schleifen_aufgaben.md)
