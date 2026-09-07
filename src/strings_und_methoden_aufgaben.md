# Aufgaben: Strings und Methoden

## Quiz

### Quiz 1

{{#quiz ./quizzes/strings_und_methoden_01.toml}}

### Quiz 2

{{#quiz ./quizzes/strings_und_methoden_02.toml}}

### Quiz 3

{{#quiz ./quizzes/strings_und_methoden_03.toml}}

### Quiz 4

{{#quiz ./quizzes/strings_und_methoden_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
String greetBavarian(String name) {
    return "Servus " + name;
}
greetBavarian("Luis")
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass die Methode `"Servus Mia"` zurückgibt.

```java, java-exec
String greetBavarian(String name) {
    return "Servus " + name;
}
greetBavarian("Luis")
```

### 3. Fehler finden und reparieren

Die Methode gibt immer `"Servus name"` zurück, statt den übergebenen Namen zu verwenden. Repariere den Fehler.

```java, java-exec
String greetBavarianWrong(String name) {
    return "Servus " + "name";
}
greetBavarianWrong("Ada")
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Methode `"Hello Grace"` zurückgibt.

```java, java-exec
String greetEnglish(String name) {
    return ____;
}
greetEnglish("Grace")
```

### 5. Passe die Methode an

Passe die Methode so an, dass sie statt mit `"Servus"` mit `"Hallo"` grüßt.

```java, java-exec
String greetBavarian(String name) {
    return "Servus " + name;
}
greetBavarian("Luis")
```
