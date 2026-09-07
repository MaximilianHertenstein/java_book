# Records

Alle ausführbaren Java-Blöcke laufen über Jupyter mit dem jjava-Kernel
(**Java 25**).
([![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MaximilianHertenstein/java_book/main)).
Der erste Start dauert 1–3 Minuten (Binder baut die Umgebung). Dafür gehen
moderne Features: Records, `IO.println` / `IO.readln`, Pattern Matching, …

Schreibweise: `` ```java, java-exec `` (Aliase `jupyter` / `thebe` gehen auch).
Mit der Maus über den Block fahren → rechts oben erscheint ▶ (wie beim
mdBook-Playground) → klicken. Es gibt bewusst nur **Run**, kein
Restart/Restart-all.

## Hello World

```java, java-exec
IO.println("Hallo aus Jupyter (Java 25)!");
```

## Record + IO.println (Java 25)

```java, java-exec
record Punkt(int x, int y) {}
var p = new Punkt(3, 4);
IO.println(p);
IO.println("x = " + p.x());
```

## IO.readln mit Eingabe

```java, java-exec
String name = IO.readln("Wie heißt du? ");
IO.println("Hallo, " + name + "!");
```

> Falls im eingebetteten Block kein Eingabedialog erscheint: dieselbe Zelle
> läuft im vollen Binder-Lab (Badge oben klicken), dort funktionieren
> Tastatureingaben immer.

## Hinweise

- Überall läuft **Java 25** (`IO.*`, Records, …).
- `System.in` / `Scanner(System.in)` geht nur in diesen Jupyter-Blöcken.
