# Aufgaben: Typ und Inferenz

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Welchen Wert hat `punkte` am Ende? Schreibe zuerst deine Vermutung auf und überprüfe sie danach.

```java, java-exec
var punkte = 50;
punkte = 60;
punkte
```

### 2. Mit oder ohne Typ?

Schreibe die Initialisierung einmal mit `int` und einmal mit `var`. Beide Blöcke müssen denselben Wert anzeigen.

```java, java-exec
int anzahl = 3;
anzahl
```

```java, java-exec
var anzahl = 3;
anzahl
```

### 3. Fehler finden und reparieren

Der folgende Code erzeugt einen Fehler, weil kein Anfangswert dabeisteht. Ergänze einen Anfangswert, sodass der Block den Wert `0` anzeigt.

```java, java-exec
var ergebnis;
ergebnis
```

### 4. Fehler finden und reparieren (fester Typ)

Der folgende Code erzeugt einen Fehler, weil einer `int`-*Variablen* ein *String* zugewiesen wird. Ändere die Zuweisung, sodass der Block den Wert `100` anzeigt.

```java, java-exec
var punkte = 50;
punkte = "viel";
punkte
```
