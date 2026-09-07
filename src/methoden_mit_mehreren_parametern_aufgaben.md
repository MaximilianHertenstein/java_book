# Aufgaben: Methoden mit mehreren Parametern

## Quiz

### Quiz 1

{{#quiz ./quizzes/methoden_mit_mehreren_parametern_01.toml}}

### Quiz 2

{{#quiz ./quizzes/methoden_mit_mehreren_parametern_02.toml}}

### Quiz 3

{{#quiz ./quizzes/methoden_mit_mehreren_parametern_03.toml}}

### Quiz 4

{{#quiz ./quizzes/methoden_mit_mehreren_parametern_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
int rechteckFlaeche(int breite, int hoehe) {
    return breite * hoehe;
}
rechteckFlaeche(3, 4)
```

### 2. Verändere die Eingabe

Ändere nur eines der beiden Argumente, sodass der Aufruf den Wert `20` ergibt.

```java, java-exec
int rechteckFlaeche(int breite, int hoehe) {
    return breite * hoehe;
}
rechteckFlaeche(3, 4)
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die Methode die Summe von drei Zahlen berechnet.

```java, java-exec
int summeVonDrei(int a, int b, int c) {
    return ____;
}
summeVonDrei(1, 2, 3)
```

### 4. Fehler finden und reparieren

Zwischen den Parametern fehlt ein Komma. Ergänze es.

```java, java-exec
int summeDerQuadrate(int pA int pB) {
    return pA * pA + pB * pB;
}
summeDerQuadrate(2, 3)
```

### 5. Passe die Methode an

Passe die Methode so an, dass sie keinen Parameter hat und immer den Wert `1` zurückgibt.

```java, java-exec
int konstanteNull() {
    return 0;
}
konstanteNull()
```
