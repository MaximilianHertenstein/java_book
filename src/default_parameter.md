# Default-Parameter

Die folgende Methode erzeugt einen String, mit dem die Benutzerin an
der Konsole begrüßt wird.

```java, java-exec
String greet(String name) {
    return "Hallo " + name;
}
```

```java, java-exec
greet("Anna")
```

Wenn der Name der Benutzerin nicht bekannt ist, kann die Methode
folgendermaßen aufgerufen werden.

```java, java-exec
greet("Benutzerin")
```

Schöner wäre es, wenn der Aufruf ganz ohne Argument funktionieren
würde. In manchen Sprachen geht das mit einem Default-Parameter direkt
in der Methodendefinition. In Java gibt es das nicht. Stattdessen
definieren wir eine zweite Methode mit demselben Namen und ohne
Parameter. Diese ruft die erste Methode mit dem Standardwert auf.

```java, java-exec
String greet() {
    return greet("Benutzerin");
}
```

Dieser wird verwendet, wenn für den Parameter kein Argument übergeben
wurde.

```java, java-exec
greet()
```

## Mehrere Standardwerte

Auch für mehrere Parameter lässt sich so arbeiten. Die parameterlose
Variante ruft die ausführliche Variante mit Standardwerten auf.

```java, java-exec
String greet(String name, boolean friendly) {
    if (friendly) {
        return "Hallo liebe " + name;
    } else {
        return "Hallo " + name;
    }
}
String greet(String name) {
    return greet(name, false);
}
String greet() {
    return greet("Benutzerin", false);
}
```

```java, java-exec
greet()
```

Es ist jetzt möglich, nur für die ersten Parameter Werte zu übergeben.

```java, java-exec
greet("Lisa")
```

Wer beim ersten Parameter den Standardwert verwenden, beim zweiten aber
einen anderen Wert nutzen will, muss in Java trotzdem beide Argumente
hinschreiben. Benannte Argumente wie in manchen anderen Sprachen gibt es
in Java nicht. Da die Varianten schnell viele werden, sparsam verwenden.

```java, java-exec
greet("Benutzerin", true)
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./default_parameter_aufgaben.md)
