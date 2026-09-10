# Characters

## Grundlagen

*Characters* bestehen im Gegensatz zu *Strings* nur aus einem einzelnen
Zeichen. Ein einzelnes Zeichen hat den *Typ* `char` und steht in
einfachen Anführungszeichen (im Gegensatz zu *Strings* in doppelten).

```java, java-exec
'a'
```

```java, java-exec
'!'
```

```java, java-exec
' '
```

Auch ein Leerzeichen ist also ein *Character*.

## Keine Addition von zwei Characters

Es ist **nicht** möglich, zwei *Character* zu addieren.

```java, java-exec
'a' + 'b'
```

Die Fehlermeldung sagt aus, dass der *Operator* `+` für zwei
*Character* nicht definiert ist.

## Character und String verbinden

Wir können aber einen *Character* mit einem *String* addieren.

```java, java-exec
"a" + 'b'
```

Das Ergebnis ist der *String* `"ab"`. Das muss schon aufgrund der Länge
so sein: Zwei Zeichen passen nicht in einen *Character*, also kommt ein
*String* heraus.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./characters_aufgaben.md)
