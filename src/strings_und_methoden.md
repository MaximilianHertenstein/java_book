# Strings und Methoden

## Motivation

Wir wollen eine Methode `greetBavarian` schreiben, der ein Name einer
Benutzerin als *String* übergeben wird und die diese Benutzerin mit
`"Servus"` begrüßt.

```java, java-exec
greetBavarian("Ada")
```

![funktionsaufruf_strings_grafik_ada](funktionsaufruf_strings_grafik_ada.svg)
```java, java-exec
greetBavarian("Grace")
```

![funktionsaufruf_strings_grafik_grace](funktionsaufruf_strings_grafik_grace.svg)

Beim Lesen der beiden Methodenaufrufe wird deutlich, dass der Methode
immer genau ein *String* als *Argument* übergeben wird. Sie muss also
einen *Parameter* mit dem Typ *String* (`String`) haben. Wir sehen auch,
dass sie immer einen *String* zurückgibt. Mit diesen Informationen können
wir bereits den *Methodenkopf* und den Anfang des *Methodenkörpers*
schreiben.

```java, java-exec
String greetBavarian(String name) {
    return ____;
}
```

Wir kennzeichnen mit `String` vor einem *Parameter*, dass für diesen
ein *String* übergeben werden soll. Mit `String` vor dem Methodennamen
wird ausgedrückt, dass der *Rückgabewert* der Methode
ein *String* ist.

Im zweiten Schritt überlegen wir uns, wie aus dem *Argument* mithilfe
von *String-Operationen* der *Rückgabewert* berechnet wird. Dies ist für
das erste Beispiel oben folgendermaßen möglich:

```java, java-exec
"Servus " + "Ada"
```

Im zweiten Fall kann man folgendermaßen rechnen:

```java, java-exec
"Servus " + "Grace"
```

Beide Rechnungen beginnen mit dem *String* `"Servus "`. Dieser
kann also genau so in dem *Ausdruck* hinter `return` verwendet werden.
Bei beiden Rechnungen taucht anschließend der *Operator* `+` auf. Auch
dieser muss also in dem *Ausdruck* hinter `return` verwendet werden.

Ab jetzt unterscheiden sich die beiden Rechnungen. Um das Ergebnis von
`greetBavarian("Ada")` zu berechnen, müssen wir mit `"Ada"` addieren.
Bei der Berechnung des *Rückgabewerts* von `greetBavarian("Grace")`
müssen wir stattdessen mit `"Grace"` addieren. Es handelt sich **nicht**
beide Male um denselben *Wert*. Die Gemeinsamkeit ist aber, dass es sich
beide Male um das übergebene *Argument* handelt. Wir verwenden also an
dieser Stelle den *Parameter* `name`. Die vollständige Methode sieht
dann folgendermaßen aus:

```java, java-exec
String greetBavarian(String name) {
    return "Servus " + name;
}
```

## Grundlagen

Um `"Servus"` stehen Anführungszeichen aber nicht um `name` und
`greetBavarian`. Der Grund dafür ist, dass `"Servus "` ein
*String* ist. Dieser soll genau so im Ergebnis auftauchen. Egal
mit welchen *Argumenten* die Methode aufgerufen wird, wollen wir, dass
das Ergebnis mit `"Servus"` beginnt.

`name` ist jedoch kein *String*, sondern der Name eines *Parameters*. Im
Ergebnis soll `name` **nicht** auftauchen. Stattdessen soll `name` durch
den *Wert* des *Arguments* ersetzt werden. Beim ersten Methodenaufruf
ist das `"Ada"` und beim zweiten `"Grace"`.

Besonders deutlich wird das, wenn wir uns die *Variablenbelegung* beim
Methodenaufruf `greetBavarian("Ada")` anschauen.

<div class="center">

| Name   |    Wert |
|:-------|--------:|
| `name` | `"Ada"` |

</div>

Der *Parameter* `name` hat hier den Wert `"Ada"`. Bei der Auswertung des
*Methodenkörpers* wird dieser *Parameter* durch seinen *Wert* ersetzt.
Wird die Methode mit anderen *Argumenten* aufgerufen, werden die
*Parameter* auch andere *Werte* ersetzt. Im Gegensatz dazu bleibt der
*String* `"Servus "` immer gleich.

## Fehler beim Verwechseln von String und Parameternamen

Den Unterschied kann man sich auch klarmachen, wenn man `name` im
*Methodenkörper* auch als *String* schreibt.

```java, java-exec
String greetBavarianWrong(String name) {
    return "Servus " + "name";
}
```

```java, java-exec
greetBavarianWrong("Ada")
greetBavarianWrong("Grace")
```

`"name"` ist ein *String*. Dieser taucht also unabhängig vom
übergebenen Argument genau so im Ergebnis auf.

Auch der Methodenname `greetBavarian` ist ein Name, der benötigt wird,
wenn die Methode aufgerufen wird. Die Methode ist aber **nicht** der
*String* `"greetBavarian"`. Deshalb muss ihr Name auch nicht zwischen
Anführungszeichen geschrieben werden.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./strings_und_methoden_aufgaben.md)
