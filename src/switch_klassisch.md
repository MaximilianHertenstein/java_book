# Klassisches Switch

## Motivation

Die Pfeilschreibweise mit `->` aus dem letzten Kapitel gibt es erst
seit Java 14. In älterem Code steht nach jedem `case` ein Doppelpunkt
statt eines Pfeils. Wer solchen Code liest, muss diese Form kennen.

```java, java-exec
void weekdayNameOld(int day) {
    switch (day) {
        case 1:
            IO.println("Montag");
            break;
        case 2:
            IO.println("Dienstag");
            break;
        case 3:
            IO.println("Mittwoch");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
```

```java, java-exec
weekdayNameOld(2)
```

Jeder Zweig endet mit `break`. Das ist der wichtigste Unterschied zur
Pfeilform.

## Fall-through ohne break

Fehlt das `break`, läuft die Ausführung einfach im nächsten `case`
weiter. Das nennt man Fall-through.

```java, java-exec
void weekdayNameFallthrough(int day) {
    switch (day) {
        case 1:
            IO.println("Montag");
        case 2:
            IO.println("Dienstag");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
```

```java, java-exec
weekdayNameFallthrough(1)
```

Bei `1` erscheinen zwei Zeilen: Nach `"Montag"` fehlt das `break`,
also läuft der `case 2` ebenfalls durch. Erst dessen `break` beendet
das `switch`. Fall-through ist fast immer ein Fehler. Deshalb gilt:
Jeder `case` endet mit `break`.

## Mehrere Werte pro Zweig

In der klassischen Form teilen sich mehrere Werte einen Zweig, indem
man die `case`-Zeilen stapelt:

```java, java-exec
void dayTypeOld(int day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            IO.println("Werktag");
            break;
        case 6:
        case 7:
            IO.println("Wochenende");
            break;
        default:
            IO.println("Unbekannter Tag");
            break;
    }
}
```

```java, java-exec
dayTypeOld(6)
```

Hier ist das Weiterlaufen Absicht: Die leeren `case`-Zeilen fallen
alle bis zum ersten Block mit Code durch.

## Rückgabe per Variable

Die klassische Form kann keinen Wert direkt zurückgeben. Stattdessen
wird eine Variable gesetzt und nach dem `switch` zurückgegeben:

```java, java-exec
String weekdayOld(int day) {
    String name;
    switch (day) {
        case 1:
            name = "Montag";
            break;
        case 2:
            name = "Dienstag";
            break;
        default:
            name = "Unbekannter Tag";
            break;
    }
    return name;
}
```

```java, java-exec
weekdayOld(2)
```

Als Faustregel: Neuen Code mit `->` schreiben, alten Code mit `:`
lesen können. Und in der klassischen Form hinter jeden `case` ein
`break`.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./switch_klassisch_aufgaben.md)
