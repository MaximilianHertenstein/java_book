# Ganzzahlige Division

Java unterstützt auch die ganzzahlige Division. Wenn beide Seiten einer
Division *Integer* sind, wird das Ergebnis abgeschnitten. Diese kennst
du vielleicht noch aus der Grundschule.

```java, java-exec
30 / 6
```
```java, java-exec
14 / 5
```

Die Zahlen vor und nach dem *Operator* `/` nennt man Dividend und
Divisor. Das Ergebnis ist der Quotient. Der Quotient ist die größte
ganze Zahl, mit der man den Divisor multiplizieren kann, um eine Zahl zu
erhalten, die nicht größer als der Dividend ist. Der *Operator* `%`
(*modulo*) berechnet, was man zu dem Produkt von Quotient und Divisor
hinzufügen muss, um den Dividenden zu erhalten.

```java, java-exec
14 % 5
```

Es gilt also

```java, java-exec
(14 / 5) * 5 + (14 % 5)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./ganzzahlige_division_aufgaben.md)
