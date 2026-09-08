# Aufgaben: Default-Parameter

## Quiz

### Quiz 1

{{#quiz ./quizzes/default_parameter_01.toml}}

### Quiz 2

{{#quiz ./quizzes/default_parameter_02.toml}}

### Quiz 3

{{#quiz ./quizzes/default_parameter_03.toml}}

### Quiz 4

{{#quiz ./quizzes/default_parameter_04.toml}}

## Übungen

Bearbeite die folgenden Aufgaben in den ausführbaren Java-Blöcken.

### 1. Vorhersage → Ausführen

Schreibe zuerst das Ergebnis auf. Führe dann den Code aus und überprüfe deine Vermutung.

```java, java-exec
String greet(String name) {
    return "Hallo " + name;
}
String greet() {
    return greet("Benutzerin");
}
greet()
```

### 2. Verändere die Eingabe

Ändere nur das Argument, sodass `"Hallo Lisa"` zurückgegeben wird.

```java, java-exec
String greet(String name) {
    return "Hallo " + name;
}
String greet() {
    return greet("Benutzerin");
}
greet()
```

### 3. Ergänze die Lücke

Ergänze die Lücke, sodass die parameterlose Variante den Standardwert verwendet.

```java, java-exec
String greet(String name) {
    return "Hallo " + name;
}
String greet() {
    return ____;
}
greet()
```

### 4. Fehler finden und reparieren

Der Code bricht mit einem Fehler ab, weil sich `greet()` endlos selbst aufruft. Rufe stattdessen die Variante mit Parameter auf.

```java, java-exec
String greet(String name) {
    return "Hallo " + name;
}
String greet() {
    return greet();
}
greet()
```

### 5. Prüfe deine Idee

Sage voraus, was beide Aufrufe zurückgeben, bevor du den Code ausführst.

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
greet("Lisa")
```

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
greet("Benutzerin", true)
```
