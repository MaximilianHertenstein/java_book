# Aufgaben: Ausgabe mit IO.println

## Quiz

### Quiz 1

{{#quiz ./quizzes/ausgabe_mit_print_01.toml}}

### Quiz 2

{{#quiz ./quizzes/ausgabe_mit_print_02.toml}}

### Quiz 3

{{#quiz ./quizzes/ausgabe_mit_print_03.toml}}

### Quiz 4

{{#quiz ./quizzes/ausgabe_mit_print_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
void greetEnglishPrint(String name) {
    IO.println("Hello " + name);
}
greetEnglishPrint("Mia")
```

### 2. Fehler finden und reparieren

Der Code erzeugt einen Fehler, weil eine `void`-Methode nichts zurückgibt. Ersetze `return` durch `IO.println` und entferne die fehlerhafte Verwendung des Ergebnisses.

```java, java-exec
void doublePrint(int x) {
    return 2 * x;
}
var result = doublePrint(4) + 1;
result
```

### 3. Verändere die Eingabe

Ändere den Namen im Methodenaufruf, sodass `"Hello Ben"` ausgegeben wird.

```java, java-exec
void greetEnglishPrint(String name) {
    IO.println("Hello " + name);
}
greetEnglishPrint("Mia")
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Methode den Text ausgibt, statt ihn zurückzugeben.

```java, java-exec
void showDouble(int x) {
    ____("Das Doppelte ist: " + (2 * x));
}
showDouble(5)
```

### 5. Prüfe deine Idee

Sage voraus, was ausgegeben wird und was zurückgegeben wird. Prüfe deine Vermutung danach.

```java, java-exec
String sayGoodbye() {
    IO.println("Goodbye");
    return "Hello";
}
sayGoodbye()
```
