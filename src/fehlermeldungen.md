
# Fehlermeldungen

## Fehler sind Objekte

Fehler sind in Java Klassen und wir können mit einem Konstruktor
Objekte von diesen Klassen erzeugen.

```java, java-exec
new ArithmeticException("/ by zero")
```

Fehler können mit `throw` geworfen werden. Dies führt dazu, dass die Fehlermeldung beim Programmierer
ankommt.

```java, java-exec
throw new ArithmeticException("/ by zero")
```

Fehlermeldungen können genutzt werden, um anzuzeigen, dass
eine Methode mit einem ungültigen Wert aufgerufen wurde.

```java, java-exec
boolean allowedToDrinkBeer(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
    return age >= 16;
}
```

```java, java-exec
allowedToDrinkBeer(17)
```
