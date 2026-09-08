# Aufgaben: Strings als Buchstaben-Container

## Quiz

### Quiz 1

{{#quiz ./quizzes/strings_als_container_01.toml}}

### Quiz 2

{{#quiz ./quizzes/strings_als_container_02.toml}}

### Quiz 3

{{#quiz ./quizzes/strings_als_container_03.toml}}

### Quiz 4

{{#quiz ./quizzes/strings_als_container_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
"python".charAt(2)
```

### 2. Verändere die Eingabe

Ändere nur den Index, sodass der letzte Buchstabe von `"python"` ausgegeben wird.

```java, java-exec
"python".charAt(2)
```

### 3. Fehler finden und reparieren

Der Code erzeugt einen Fehler. Ändere den Index, sodass ein gültiger Buchstabe ausgegeben wird.

```java, java-exec
"cat".charAt(3)
```

### 4. Ergänze die Lücke

Ergänze die Lücke, sodass die Schleife alle Buchstaben von `word` einzeln ausgibt.

```java, java-exec
String word = "code";
for (int i = 0; i < ____; i = i + 1) {
    IO.println(word.charAt(i));
}
```

### 5. Prüfe deine Idee

Sage voraus, welchen Buchstaben der Ausdruck ergibt, bevor du ihn ausführst.

```java, java-exec
("good" + "bye").charAt(3 + 2)
```
