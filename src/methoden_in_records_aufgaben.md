# Aufgaben: Methoden in Records

## Quiz

### Quiz 1

{{#quiz ./quizzes/methoden_in_records_01.toml}}

### Quiz 2

{{#quiz ./quizzes/methoden_in_records_02.toml}}

### Quiz 3

{{#quiz ./quizzes/methoden_in_records_03.toml}}

### Quiz 4

{{#quiz ./quizzes/methoden_in_records_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
record Article(String name, int price) {
    boolean enoughMoney(int myMoney) {
        return price() < myMoney;
    }
}
var banana = new Article("Banane", 5);
banana.enoughMoney(4)
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass `true` zurückgegeben wird.

```java, java-exec
record Article(String name, int price) {
    boolean enoughMoney(int myMoney) {
        return price() < myMoney;
    }
}
var banana = new Article("Banane", 5);
banana.enoughMoney(4)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Methode am Objekt aufgerufen wird.

```java, java-exec
record Article(String name, int price) {
    boolean enoughMoney(int myMoney) {
        return price() < myMoney;
    }
}
var banana = new Article("Banane", 5);
____.enoughMoney(6)
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil `enoughMoney` jetzt eine Methode am Objekt ist und kein freies `article`-Argument mehr nimmt. Repariere den Aufruf.

```java, java-exec
record Article(String name, int price) {
    boolean enoughMoney(int myMoney) {
        return price() < myMoney;
    }
}
var banana = new Article("Banane", 5);
enoughMoney(banana, 6)
```

### 5. Prüfe deine Idee

Sage voraus, welcher Artikel zurückgegeben wird, bevor du den Code ausführst.

```java, java-exec
record Article(String name, int price) {
    Article cheaperArticle(Article other) {
        if (price() < other.price()) {
            return this;
        } else {
            return other;
        }
    }
}
var strawberry = new Article("Erdbeere", 2);
var kiwi = new Article("Kiwi", 4);
strawberry.cheaperArticle(kiwi)
```
