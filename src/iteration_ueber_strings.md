# Iteration über Strings

## Grundlagen

Strings bestehen aus einzelnen Zeichen vom *Typ* `char` (siehe
letztes Kapitel). Mit einer `for`-Schleife können wir die
Zeichen eines *Strings* nacheinander durchlaufen. Dafür macht
`toCharArray()` aus dem *String* ein Zeichen-Array, das die Schleife
Zeichen für Zeichen durchläuft.

```java, java-exec
String greeting = "hello";
for (char c : greeting.toCharArray()) {
    IO.println(c);
}
```

- Bei jedem Durchlauf enthält `c` das nächste Zeichen in `"hello"`.
  - Beim ersten Durchlauf ist `c` also `'h'`.
  - Beim zweiten Durchlauf ist `c` `'e'`.
  - \\(\vdots\\)

- Im Schleifenkörper steht, was bei jedem Durchlauf mit dem Zeichen
  passieren soll (hier: ausgeben).

## Akkumulator-Pattern

Ein einzelnes Zeichen (`char`) lässt sich wie ein *String* mit `+`
verbinden. D.h. wir können mit Zeichen die *String-Addition*
durchführen.

```java, java-exec
String greeting = "hello";
String weirdGreeting = "";
for (char c : greeting.toCharArray()) {
    weirdGreeting = c + weirdGreeting;
}
weirdGreeting
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./iteration_ueber_strings_aufgaben.md)
