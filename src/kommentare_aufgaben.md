# Aufgaben: Kommentare

## Quiz

### Quiz 1

{{#quiz ./quizzes/kommentare_01.toml}}

### Quiz 2

{{#quiz ./quizzes/kommentare_02.toml}}

### Quiz 3

{{#quiz ./quizzes/kommentare_03.toml}}

### Quiz 4

{{#quiz ./quizzes/kommentare_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
// Diese Zeile berechnet das Doppelte von 4
var x = 2 * 4;
x
```

### 2. Ergänze die Lücke

Ergänze die fehlenden Zeichen am Anfang der ersten Zeile, damit sie zu einem Kommentar wird.

```java, java-exec
____ Diese Methode rechnet Fuß in Zoll um
int feetToInch(int lengthInFeet) {
    return 12 * lengthInFeet;
}
feetToInch(2)
```

### 3. Fehler finden und reparieren

Die erste Zeile erzeugt einen Fehler, weil sie weder gültiger Java-Code noch ein Kommentar ist. Repariere sie.

```java, java-exec
Diese Methode verdoppelt eine Zahl
int doppelt(int x) {
    return x + x;
}
doppelt(5)
```

### 4. Verändere die Eingabe

Ändere nur den Kommentar so, dass er die Berechnung noch genauer beschreibt (z. B. mit den konkreten Werten). Der berechnete Wert soll sich dabei nicht ändern.

```java, java-exec
// Berechnet die Fläche eines Rechtecks
var breite = 3;
var hoehe = 4;
breite * hoehe
```

### 5. Prüfe deine Idee

Sage voraus, welchen Wert `x` hat, und erkläre, warum der Kommentar keinen Einfluss auf das Ergebnis hat.

```java, java-exec
var x = 5; // x = 10
x
```
