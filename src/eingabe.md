# Eingabe


## Motivation

Die Methoden, die wir bisher geschrieben haben, haben wir im Code die
notwendigen Argumente übergeben. Im folgenden Beispiel wird der String
`"Wie heißt du? "` an die Methode `greetBavarianPrint` übergeben.

```java, java-exec
void greetBavarianPrint(String name) {
    IO.println("Servus " + name);
}
greetBavarianPrint("Ada")
```

Wenn eine andere Person begrüßt werden soll, muss `Ada` durch einen
anderen Namen ersetzt werden. Dafür muss man schon einiges über
Programmierung wissen.

Schöner und nutzerfreundlicher wäre es natürlich, wenn der Benutzer nach
seinem Namen gefragt wird. In diesem Kapitel lernst du, wie das
funktioniert.

## Einlesen von Eingaben mit `IO.readln`

Mit der Methode `IO.readln` können Benutzereingaben eingelesen werden.
Bei der Ausführung wird auf die Eingabe des Benutzers gewartet. Er muss
dann etwas eingeben und dies mit Enter bestätigen. Die Eingabe wird als
*String* zurückgegeben.

```java, java-exec
IO.readln()
```

**Beispiel**: Eingabe von *Grace*
![funktionsaufruf_input](funktionsaufruf_input_ohne_parameter.svg)

Es ist oft sinnvoll, diesen *Rückgabewert* in einer *Variablen* zu
speichern, um ihn später verwenden zu können. Da die Eingabe immer ein
*String* ist, steht bei der *Initialisierung* der *Typ* `String` dabei.

```java, java-exec
String name = IO.readln("Wie heißt du? ");
```
```java, java-exec
name
```

## Kombination von Ein- und Ausgabe

Wir können nun interaktive Programme schreiben, in denen wir Eingabe,
Verarbeitung und Ausgabe kombinieren.

```java, java-exec
void greetBavarianIo() {
    IO.println("Wie heißt du? ");
    String name = IO.readln();
    IO.println("Servus " + name);
}
```

```java, java-exec
greetBavarianIo()
```


![funktionsaufruf_greet_bavarian_io](funktionsaufruf_greet_bavarian_io.svg)








Die Methoden `IO.println` und `IO.readln` sorgen dafür, dass auch, wenn die
Methode in einem Skript aufgerufen wird, etwas zu sehen ist.



Das Programm kannst du im folgenden Block testen:
```java, java-exec
String name = IO.readln("Wie heißt du? ");
IO.println("Servus " + name);
```

Der Benutzer des Programms muss das Programm nur starten, um mit ihm zu
interagieren. Er muss selbst aber nichts über Programmierung wissen.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./eingabe_aufgaben.md)
