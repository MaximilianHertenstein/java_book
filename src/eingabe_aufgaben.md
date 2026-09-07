# Aufgaben: Eingabe

## Quiz

### Quiz 1

{{#quiz ./quizzes/eingabe_01.toml}}

### Quiz 2

{{#quiz ./quizzes/eingabe_02.toml}}

### Quiz 3

{{#quiz ./quizzes/eingabe_03.toml}}

### Quiz 4

{{#quiz ./quizzes/eingabe_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Führe den Code aus, gib einen Namen ein und überprüfe das Ergebnis.

```java, java-exec
String name = IO.readln("Wie heißt du? ");
"Hallo " + name
```

### 2. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil die Eingabe nie eingelesen wurde. Ergänze die fehlende Zeile mit `IO.readln()`.

```java, java-exec
void greetIo() {
    IO.println("Wie heißt du?");
    IO.println("Servus " + name);
}
greetIo()
```

### 3. Verändere die Eingabe

Ändere den Text, der vor der Eingabeaufforderung angezeigt wird.

```java, java-exec
void greetIo() {
    IO.println("Wie heißt du?");
    String name = IO.readln();
    IO.println("Servus " + name);
}
greetIo()
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Eingabe des Benutzers in `age` gespeichert wird.

```java, java-exec
String age = ____;
IO.println("Du bist " + age + " Jahre alt.");
```

### 5. Passe die Methode an

Passe die Methode so an, dass sie statt auf Bairisch auf Englisch grüßt (`"Hello"` statt `"Servus"`).

```java, java-exec
void greetBavarianIo() {
    IO.println("Wie heißt du? ");
    String name = IO.readln();
    IO.println("Servus " + name);
}
greetBavarianIo()
```
