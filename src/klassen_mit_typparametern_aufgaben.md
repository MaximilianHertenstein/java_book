# Aufgaben: Klassen mit Typparametern

## Quiz

### Quiz 1

{{#quiz ./quizzes/klassen_mit_typparametern_01.toml}}

### Quiz 2

{{#quiz ./quizzes/klassen_mit_typparametern_02.toml}}

### Quiz 3

{{#quiz ./quizzes/klassen_mit_typparametern_03.toml}}

### Quiz 4

{{#quiz ./quizzes/klassen_mit_typparametern_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
record Box<T>(T content) {
}
var box1 = new Box<>(7);
box1.content()
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass ein `String` in der Box liegt.

```java, java-exec
record Box<T>(T content) {
}
var box1 = new Box<>(7);
box1.content()
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Box einen `String` enthält.

```java, java-exec
record Box<T>(T content) {
}
var box2 = new Box<____>("hello");
box2.content()
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `getLeft` einen `Boolean` zurückgibt und kein `Integer`. Passe den Variablentyp an.

```java, java-exec
class Tuple<L, R> {
    L left;
    R right;
    Tuple(L left, R right) {
        this.left = left;
        this.right = right;
    }
    L getLeft() {
        return left;
    }
}
var boolAndChar = new Tuple<Boolean, Character>(true, 'a');
Integer first = boolAndChar.getLeft();
```

### 5. Prüfe deine Idee

Sage voraus, was beide Aufrufe zurückgeben, bevor du den Code ausführst.

```java, java-exec
class Tuple<L, R> {
    L left;
    R right;
    Tuple(L left, R right) {
        this.left = left;
        this.right = right;
    }
    L getLeft() {
        return left;
    }
    R getRight() {
        return right;
    }
}
var stringAndInt = new Tuple<String, Integer>("Hello", 2);
stringAndInt.getLeft()
```

```java, java-exec
class Tuple<L, R> {
    L left;
    R right;
    Tuple(L left, R right) {
        this.left = left;
        this.right = right;
    }
    L getLeft() {
        return left;
    }
    R getRight() {
        return right;
    }
}
var stringAndInt = new Tuple<String, Integer>("Hello", 2);
stringAndInt.getRight()
```
