# Aufgaben: Iteration über Strings

## Quiz

### Quiz 1

{{#quiz ./quizzes/iteration_ueber_strings_01.toml}}

### Quiz 2

{{#quiz ./quizzes/iteration_ueber_strings_02.toml}}

### Quiz 3

{{#quiz ./quizzes/iteration_ueber_strings_03.toml}}

### Quiz 4

{{#quiz ./quizzes/iteration_ueber_strings_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
String word = "cat";
for (char c : word.toCharArray()) {
    IO.println(c);
}
```

### 2. Verändere die Eingabe

Ändere nur den String, sodass genau vier Buchstaben ausgegeben werden.

```java, java-exec
String word = "cat";
for (char c : word.toCharArray()) {
    IO.println(c);
}
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `reversed` am Ende den umgekehrten String enthält.

```java, java-exec
String word = "python";
String reversed = "";
for (char c : word.toCharArray()) {
    reversed = ____;
}
reversed
```

### 4. Fehler finden und reparieren

Ergänze die fehlende Initialisierung von `letterCount` (als Zähler, der bei `0` beginnt).

```java, java-exec
String word = "hello";
for (char c : word.toCharArray()) {
    letterCount = letterCount + 1;
}
letterCount
```

### 5. Prüfe deine Idee

Sage voraus, was in jeder Zeile ausgegeben wird, bevor du den Code ausführst.

```java, java-exec
String greeting = "hi";
String weirdGreeting = "";
for (char c : greeting.toCharArray()) {
    weirdGreeting = c + weirdGreeting;
    IO.println(weirdGreeting);
}
```
