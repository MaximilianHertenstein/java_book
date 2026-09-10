# Datentypen

## Einteilung von Werten in Datentypen

Wir haben mit *Integern* und *Strings* zwei verschiedene Arten von
*Werten* kennengelernt und gesehen, dass mit verschiedenen Arten von
*Werten* unterschiedliche *Operationen* durchgeführt werden können. Eine
solche Menge von *Werten*, die bestimmte *Operationen* unterstützt,
nennt man *(Daten-)Typ*. Die *Typen*, die wir in diesem Schuljahr
kennenlernen werden, sind in der folgenden Abbildung dargestellt.

![datentypen_grafik](datentypen_grafik.svg)

`String` steht für Zeichenkette, und `int` für *Integer*. Diese
*Typen* haben wir schon genutzt, um zu kennzeichnen, zu welchem Datentyp die
*Argumente* und der Rückgabewert einer Methode gehören. Die weiteren
*Typen* werden wir in den folgenden Kapiteln kennenlernen.

## Typfehler

*Operationen* sind immer nur für bestimmte Kombinationen von *Typen*
definiert. Z. B. können wir zwei Interger subtrahieren

```java, java-exec
5 - 3
```

Wir können aber **nicht** einen *String* und ein *Integer* subtrahieren.

```java, java-exec
1 - "2"
```

Die Fehlermeldung sagt aus, dass der *Operator* `-` nicht definiert ist,
wenn der linke *Operand* ein *Integer* und der rechte *Operand* ein
*String* ist.

## Automatische Umwandlung bei Strings

Mit `+` funktioniert das trotzdem: Steht ein *String* links oder rechts,
wird die andere Seite automatisch in einen *String*
umgewandelt.

```java, java-exec
"The value of number is: " + 3
```

Deshalb brauchen wir in Java keine Umwandlung, um eine Zahl in einen
Text einzubauen.

## int und Integer

Für ganze Zahlen haben wir bisher den *Typ* `int` verwendet. `int`
ist ein *primitiver Typ*: Die *Werte* sind direkt die Zahlen selbst.

Daneben gibt es die *Klasse* `Integer`. Sie steht für dieselben Zahlen,
bringt aber zusätzlich Hilfsmethoden mit. Eine davon brauchen wir gleich
für die Umwandlung von *Strings*.

## Statische Methoden mit Punkt aufrufen

Manche *Methoden* gehören nicht zu einem einzelnen *Wert*, sondern zu
einer *Klasse* als Ganzes. Solche *Methoden* nennt man *statisch*.
Man ruft sie mit dem Klassennamen auf, danach kommt ein Punkt und dann
der Methodenname:

`Klassenname.methodenname(...)`

`Integer.parseInt` ist so eine *statische Methode* der *Klasse*
`Integer`. Der Aufruf

```java, java-exec
Integer.parseInt("052")
```

bedeutet also: *Rufe die Methode `parseInt` der Klasse `Integer` mit
dem Argument `"052"` auf.*

## Typumwandlung von String nach Integer

Umgekehrt geht das nicht automatisch: Ein *String*, der eine Zahl
darstellt, kann mit `Integer.parseInt` in einen *Integer* umgewandelt
werden.

```java, java-exec
Integer.parseInt("052")
```

Aber natürlich kann nicht jeder *String* zu einem *Integer* konvertiert
werden.

```java, java-exec
Integer.parseInt("hello")
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./datentypen_aufgaben.md)
