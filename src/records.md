# Records

## Motivation

Wenn wir die Namen und Preise der Artikel in einem Supermarkt speichern
wollen, brauchen wir pro Artikel \\(2\\) Werte.

```java, java-exec
String nameOfFirstArticle = "Apfel";
int priceOfFirstArticle = 3;
String nameOfSecondArticle = "Banane";
int priceOfSecondArticle = 2;
```

Es gibt **keine** Verbindung zwischen den Werten, die einen Artikel
darstellen.

Deshalb müssen einer Methode, die mit beiden Eigenschaften eines
Artikels arbeitet, immer zwei Argumente übergeben werden.

```java, java-exec
String showArticle(String name, int price) {
    return "Die Bezeichnung des Artikels ist " + name + " und der Preis beträgt " + price + " Euro!";
}
```

```java, java-exec
showArticle(nameOfFirstArticle, priceOfFirstArticle)
```

Die Methode `showArticle` hat keine Möglichkeit zu überprüfen, ob die
beiden Werte zusammen gehören. Deshalb wird beim folgenden Aufruf keine
Fehlermeldung angezeigt, obwohl Name und Preis von verschiedenen
Artikeln stammen.

```java, java-exec
showArticle(nameOfFirstArticle, priceOfSecondArticle)
```

Da *Name* und *Preis* eines Artikels zusammen gehören, wäre es
sinnvoller, einen Artikel mit **nur einem** Wert darzustellen.

## Records

Mit dem Schlüsselwort `record` kann ein neuer Datentyp erstellt werden.
Da sich die Eigenschaften eines Artikels nachträglich nicht ändern
müssen, reicht ein *Record*. Eine `class` wäre nur nötig, wenn
Veränderlichkeit gebraucht würde.

```java, java-exec
record Article(String name, int price) {
}
```

1. Hinter dem Schlüsselwort `record` steht der Name des neuen Datentyps
   (hier: `Article`).
2. In den Klammern hinter dem Namen steht, aus welchen Werten sich ein
   Artikel zusammensetzt.
    1. Die erste Komponente eines `Article` ist ein `String` und heißt
       `name`.
    2. Die zweite Komponente eines `Article` ist ein `Integer` und heißt
       `price`.

## Werte von selbst definierten Datentypen erzeugen

Wenn wir in der Zeile, mit der wir den Datentyp definiert haben, das
Schlüsselwort `record` und die geschweiften Klammern weglassen, erhalten
wir die folgende Zeile:

`Article(String name, int price)`

Dabei handelt es sich fast um einen Methodenkopf ohne Rückgabetyp. Eine
solche Methode heißt *Konstruktor* und gibt beim Aufruf einen Wert des
Datentyps zurück. Den Konstruktor müssen wir aber nicht selbst
implementieren, er wird bei der Definition des Records erzeugt. Wie jede
Methode rufen wir diesen auf, indem wir konkrete Werte für die Parameter
übergeben. Davor steht zusätzlich `new`.

```java, java-exec
new Article("Apfel", 3)
```

Der Rückgabewert ist ein `Article`, dessen Eigenschaften den übergebenen
Werten entsprechen. Werte, die zu einem Record gehören, nennt man
*Objekte* oder *Instanzen* des Records.

## Arbeiten mit Objekten

Mit Objekten können wir alles machen, was wir mit den Werten von
vordefinierten Datentypen machen können. Wir können diese in Variablen
speichern.

```java, java-exec
var firstApple = new Article("Apfel", 3);
var secondApple = new Article("Apfel", 3);
var banana = new Article("Banane", 2);
```

Wir können zwei Werte, die denselben Typ haben, miteinander vergleichen.
Da es sich um Objekte handelt, nehmen wir dafür `equals`.

```java, java-exec
firstApple.equals(secondApple)
```
```java, java-exec
secondApple.equals(banana)
```

Vorsicht: Der *Operator* `==` vergleicht bei Objekten nur, ob es
dasselbe Objekt ist, nicht ob die Inhalte gleich sind.

```java, java-exec
firstApple == secondApple
```

Wir können Werte, die denselben Typ haben, in Listen speichern.

```java, java-exec
import java.util.List;
List.of(firstApple, secondApple, banana)
```

## Zugriff auf Komponenten

Indem man hinter ein Objekt den Namen einer Komponente mit runden
Klammern schreibt, kann man auf diese Komponente zugreifen.

```java, java-exec
banana.price()
```
```java, java-exec
firstApple.name()
```

## Zusammengesetzte Datentypen mit Methoden bearbeiten

Wie Werte mit vordefinierten Datentypen können Objekte Argumente von
Methoden sein. Damit lässt sich die Methode aus dem Eingangsbeispiel
vereinfachen. Ein Verwechseln wie oben ist jetzt unmöglich, weil Name
und Preis immer gemeinsam übergeben werden.

```java, java-exec
String showArticle(Article article) {
    return "Die Bezeichnung des Artikels ist " + article.name() + " und der Preis beträgt " + article.price() + " Euro!";
}
```

```java, java-exec
showArticle(firstApple)
```

Objekte können auch Rückgabewerte von Methoden sein.

```java, java-exec
Article combineArticles(Article firstArticle, Article secondArticle) {
    return new Article(firstArticle.name() + " und " + secondArticle.name(), firstArticle.price() + secondArticle.price());
}
```

```java, java-exec
combineArticles(firstApple, banana)
```

## Nicht alle Werte sind Objekte

Im Gegensatz zu manchen anderen Sprachen sind in Java nicht alle Werte
Objekte. Die einfachen Typen (`int`, `char`, `boolean`, `double`) kennen
keine Punktnotation. `String`, `List` und `Record` dagegen schon, wie
man an ihren Methoden sieht.

```java, java-exec
"hello".length()
```
```java, java-exec
List.of(1, 3, 5).size()
```
```java, java-exec
(int) 'a'
```
```java, java-exec
Integer.signum(-3)
```

## Veränderlich geht nur mit class

*Records* sind unveränderlich: `apple.price = 4;` erzeugt einen Fehler.
Wer andere Werte will, erzeugt einen neuen *Record*. Erst wenn sich der
Wert selbst ändern muss, nimmt man eine `class`.

```java, java-exec
class CartPosition {
    int amount;
}
var pos = new CartPosition();
pos.amount = 3;
pos.amount
```

Als Faustregel: `record`, solange nichts geändert werden muss. `class`
nur, wenn Mutability nötig ist.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./records_aufgaben.md)
