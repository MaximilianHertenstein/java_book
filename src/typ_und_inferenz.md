# Typ und Inferenz

## Motivation

Du kennst jetzt die *Typen* `int` und `String` und weißt, dass
*Operationen* nur für bestimmte Kombinationen von *Typen* definiert
sind. In diesem Kapitel schauen wir uns an, was das für *Variablen*
bedeutet und wie uns *Inferenz* Schreibarbeit abnimmt.

## Jede Variable hat einen Typ

Ein *Typ* legt fest, welche Art von *Werten* in einer *Variablen*
gespeichert werden darf. Die wichtigsten *Typen* für den Anfang sind
`int` für ganze Zahlen und `String` für Texte.

Bei der *Initialisierung* (Erstellung) einer *Variablen* muss der *Typ*
dabeistehen.

```java, java-exec
int punkte = 50;
```

```java, java-exec
String name = "Ada";
```

Auf der linken Seite des *Zuweisungsoperators* (`=`) steht zuerst der
*Typ* und danach der Name der *Variablen*. Auf der rechten Seite steht
ein *Ausdruck*. Der *Wert* des *Ausdrucks* muss zu dem angegebenen *Typ*
passen.

## Typerschließung mit `var`

Statt den *Typ* hinzuschreiben, können wir ihn mit dem Schlüsselwort
`var` vom Anfangswert erschließen lassen. Das nennt man *Inferenz*.

```java, java-exec
var punkte = 50;
```

```java, java-exec
var name = "Ada";
```

Bei `var punkte = 50;` erkennt die Umgebung: Der Anfangswert `50` ist
ein `int`, also bekommt `punkte` den *Typ* `int`. Das Ergebnis ist
genauso, als hätten wir `int` hingeschrieben.

`var` braucht immer einen Anfangswert. Ohne ihn kann nichts erschlossen
werden.

```java, java-exec
var fehler;
```

## Ändern ohne Typ

Einer bestehenden *Variablen* weisen wir einen neuen *Wert* zu, indem
wir nur ihren Namen hinschreiben. Weder der *Typ* noch `var` stehen
dann dabei.

```java, java-exec
punkte = 60;
```

```java, java-exec
punkte
```

## Der Typ steht fest

Der *Typ* einer *Variablen* wird bei der *Initialisierung* festgelegt
und ändert sich danach nicht mehr. Ein *Wert* mit einem anderen *Typ*
kann nicht zugewiesen werden.

```java, java-exec
punkte = "viel";
```

Die Fehlermeldung sagt aus, dass ein *String* nicht in einer
*int*-*Variablen* gespeichert werden kann. Auch mit `var` erstellte
*Variablen* haben einen festen *Typ*: Bei `var punkte = 50;` wurde `int`
erschlossen, also gilt dort dasselbe.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./typ_und_inferenz_aufgaben.md)
