# Aufgaben: Variablen in Methoden

## Quiz

### Quiz 1

{{#quiz ./quizzes/variablen_in_methoden_01.toml}}

### Quiz 2

{{#quiz ./quizzes/variablen_in_methoden_02.toml}}

### Quiz 3

{{#quiz ./quizzes/variablen_in_methoden_03.toml}}

### Quiz 4

{{#quiz ./quizzes/variablen_in_methoden_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
int skaliert(int x) {
    var faktor = 3;
    return faktor * x;
}
skaliert(4)
```

### 2. Prüfe deine Idee

Führe den Code aus und erkläre, warum die letzte Zeile einen Fehler erzeugt.

```java, java-exec
int skaliert(int x) {
    var faktor = 3;
    return faktor * x;
}
skaliert(4)
faktor
```

### 3. Verändere die Eingabe

Ändere nur den Wert von `faktor` im Methodenkörper, sodass `skaliert(4)` den Wert `20` ergibt.

```java, java-exec
int skaliert(int x) {
    var faktor = 3;
    return faktor * x;
}
skaliert(4)
```

### 4. Fehler finden und reparieren

Sage zuerst voraus, welchen Wert `x` in der letzten Zeile hat. Führe den Code danach aus, um deine Vermutung zu prüfen.

```java, java-exec
var x = 3;
int shadow(int a) {
    var x = 4;
    return x * a;
}
shadow(2)
x
```

### 5. Ergänze die Lücke

Ergänze die Lücke im Methodenkörper, sodass die lokale Variable `haelfte` die Hälfte von `x` speichert und zurückgegeben wird.

```java, java-exec
int haelfteVon(int x) {
    var haelfte = ____;
    return haelfte;
}
haelfteVon(10)
```
