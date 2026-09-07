# Methoden mit mehreren Parametern

Methoden können auch mehrere oder gar keine *Parameter* haben. Die
*Parameter* stehen in den runden Klammern hinter dem Methodennamen.
Zwischen zwei *Parametern* schreibt man ein Komma.

```java, java-exec
int konstanteNull() {
    return 0;
}
int summeDerQuadrate(int pA, int pB) {
    return pA * pA + pB * pB;
}
```

Beim Aufruf der Methode muss dann die entsprechende Anzahl an
*Argumenten* in Klammern übergeben werden. Auch die *Argumente* werden
durch Kommas voneinander getrennt.

```java, java-exec
konstanteNull()
```
```java, java-exec

summeDerQuadrate(2, 3)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./methoden_mit_mehreren_parametern_aufgaben.md)
