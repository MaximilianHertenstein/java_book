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
for (int i = 0; i < word.length(); i = i + 1) {
    IO.println(word.charAt(i));
}
```

### 2. Verändere die Eingabe

Ändere nur den String, sodass genau vier Buchstaben ausgegeben werden.

```java, java-exec
String word = "cat";
for (int i = 0; i < word.length(); i = i + 1) {
    IO.println(word.charAt(i));
}
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass `reversed` am Ende den umgekehrten String enthält.

```java, java-exec
String word = "python";
String reversed = "";
for (int i = 0; i < word.length(); i = i + 1) {
    reversed = ____;
}
reversed
```

### 4. Fehler finden und reparieren

Ergänze die fehlende Initialisierung von `letterCount` (als Zähler, der bei `0` beginnt).

```java, java-exec
String word = "hello";
for (int i = 0; i < word.length(); i = i + 1) {
    letterCount = letterCount + 1;
}
letterCount
```

### 5. Prüfe deine Idee

Sage voraus, was in jeder Zeile ausgegeben wird, bevor du den Code ausführst.

```java, java-exec
String greeting = "hi";
String weirdGreeting = "";
for (int i = 0; i < greeting.length(); i = i + 1) {
    weirdGreeting = greeting.charAt(i) + weirdGreeting;
    IO.println(weirdGreeting);
}
```
