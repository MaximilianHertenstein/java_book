# Aufgaben: Records

## Quiz

### Quiz 1

{{#quiz ./quizzes/records_01.toml}}

### Quiz 2

{{#quiz ./quizzes/records_02.toml}}

### Quiz 3

{{#quiz ./quizzes/records_03.toml}}

### Quiz 4

{{#quiz ./quizzes/records_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
record Article(String name, int price) {
}
String showArticle(Article article) {
    return "Die Bezeichnung des Artikels ist " + article.name() + " und der Preis beträgt " + article.price() + " Euro!";
}
var apple = new Article("Apfel", 3);
showArticle(apple)
```

### 2. Verändere die Eingabe

Ändere nur die Erzeugung, sodass der Preis im Ergebnis `5` beträgt.

```java, java-exec
record Article(String name, int price) {
}
String showArticle(Article article) {
    return "Die Bezeichnung des Artikels ist " + article.name() + " und der Preis beträgt " + article.price() + " Euro!";
}
var apple = new Article("Apfel", 3);
showArticle(apple)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `totalPrice` die Summe beider Preise enthält.

```java, java-exec
record Article(String name, int price) {
}
var apple = new Article("Apfel", 3);
var banana = new Article("Banane", 2);
int totalPrice = ____;
totalPrice
```

### 4. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil *Records* unveränderlich sind. Erzeuge stattdessen einen neuen *Article* mit Preis `4`.

```java, java-exec
record Article(String name, int price) {
}
var apple = new Article("Apfel", 3);
apple.price = 4;
```

### 5. Prüfe deine Idee

Sage voraus, was beide Ausdrücke ergeben, und erkläre den Unterschied.

```java, java-exec
record Article(String name, int price) {
}
var a = new Article("Apfel", 3);
var b = new Article("Apfel", 3);
a == b
```

```java, java-exec
record Article(String name, int price) {
}
var a = new Article("Apfel", 3);
var b = new Article("Apfel", 3);
a.equals(b)
```
