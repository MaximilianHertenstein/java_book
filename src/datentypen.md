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
definiert. Z. B. können wir zwei Integer subtrahieren

```java, java-exec
5 - 3
```

Wir können aber **nicht** einen *String* und ein *Integer* subtrahieren.

```java, java-exec
5 - "3"
```

Die Fehlermeldung sagt aus, dass der *Operator* `-` nicht definiert ist,
wenn der linke *Operand* ein *Integer* und der rechte *Operand* ein
*String* ist.

## Typkonversion

Es kommt häufig vor, dass ein *Wert* einen *Typ* hat, mit dem eine
gewünschte *Operation* nicht durchgeführt werden kann. Um den *Typ*
eines *Werts* zu ändern, können die passenden Methoden genutzt werden.

```java, java-exec
Integer.parseInt("3")
```

Nach der Umwandlung können wir die Subtraktion durchführen.

```java, java-exec
5 - Integer.parseInt("3")
```

Ein *Integer* kann auch in einen *String* umgewandelt werden.

```java, java-exec
String.valueOf(3)
```

Fast jeder *Wert* kann in einen *String* umgewandelt werden. Aber
nicht jeder *String* kann zu einem *Integer* konvertiert werden.

```java, java-exec
Integer.parseInt("hello")
```


## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./datentypen_aufgaben.md)
