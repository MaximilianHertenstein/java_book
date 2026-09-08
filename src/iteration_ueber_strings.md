# Iteration über Strings

## Grundlagen

Strings bestehen aus einzelnen Zeichen. Ein einzelnes Zeichen hat den
*Typ* `char` und steht in einfachen Anführungszeichen (im Gegensatz zu
*Strings* in doppelten). Mit der Methode `charAt` können wir die
Zeichen eines *Strings* nacheinander durchlaufen.

```java, java-exec
String greeting = "hello";
for (int i = 0; i < greeting.length(); i = i + 1) {
    IO.println(greeting.charAt(i));
}
```

- In der ersten Zeile wird festgelegt, dass die *Zählervariable* `i`
  die Positionen in `"hello"` durchläuft.
  - Beim ersten Durchlauf hat `i` den Wert `0`, also wird
    `greeting.charAt(0)` ausgegeben: `'h'`.
  - Beim zweiten Durchlauf hat `i` den Wert `1`, also wird
    `greeting.charAt(1)` ausgegeben: `'e'`.
  - \\(\vdots\\)

- Darunter steht, dass bei jedem Schleifendurchlauf das Zeichen an der
  aktuellen Position ausgegeben werden soll.

## Akkumulator-Pattern

Ein einzelnes Zeichen (`char`) lässt sich wie ein *String* mit `+`
verbinden. D.h. wir können mit Zeichen die *String-Addition*
durchführen.

```java, java-exec
String greeting = "hello";
String weirdGreeting = "";
for (int i = 0; i < greeting.length(); i = i + 1) {
    weirdGreeting = greeting.charAt(i) + weirdGreeting;
}
weirdGreeting
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./iteration_ueber_strings_aufgaben.md)
