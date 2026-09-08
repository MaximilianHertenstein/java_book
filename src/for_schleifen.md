# For-Schleifen

## Motivation

Mit einer `while`-Schleife können wir die Zahlen von \\(1\\) bis \\(5\\) folgendermaßen durchlaufen.

```java, java-exec
int i = 1;
while (i <= 5) {
    IO.println(i);
    i = i + 1;
}
```

Wenn wir die Zahlen von \\(3\\) bis \\(7\\) durchlaufen wollen, müssen wir den Code entsprechend anpassen.

```java, java-exec
int i = 3;
while (i <= 7) {
    IO.println(i);
    i = i + 1;
}
```

Es fällt auf, dass sich im Code außer dem konkreten Anfangs- und Endwert alles wiederholt.
Um diese Wiederholung zu vermeiden, kann man, wenn man in Einerschritten zählt, eine `for`-Schleife nutzen.

## Grundlagen

Das letzte Beispiel sieht mit einer `for`-Schleife folgendermaßen aus.

```java, java-exec
for (int i = 3; i < 8; i = i + 1) {
    IO.println(i);
}
```

- Hinter `for` steht in runden Klammern zuerst die Variable mit ihrem Startwert (hier: `int i = 3`).
- Danach folgt die Bedingung, die vor jedem Durchlauf geprüft wird (hier: `i < 8`, also wird bis `7` gezählt).
- Zuletzt steht die Erhöhung der Variablen (hier: `i = i + 1`).
- In geschweiften Klammern darunter stehen die Anweisungen, die bei jedem Schleifendurchlauf wiederholt werden sollen.
- Im Gegensatz zu `while`-Schleifen muss die Variable nicht im Schleifenkörper selbst erhöht werden.

## Noch einmal Akkumulator-Pattern

Oft will man über alle *Schleifendurchläufe* hinweg ein Ergebnis
aufsammeln. Hierfür legt man vor dem Durchlaufen der *Schleife* eine
zusätzliche *Variable* an. Diese Variable nennt man auch *Akkumulator*.
Diese *Variable* kann man nun bei jeder Wiederholung anpassen.

```java, java-exec
int sumValue = 0;
for (int i = 1; i < 4; i = i + 1) {
    sumValue = sumValue + i;
}
sumValue
```

Um genau zu sehen, was bei jedem Schritt passiert, kann man
`IO.println` nutzen.

```java, java-exec
int total = 0;
IO.println("total = " + total);
for (int i = 1; i < 4; i = i + 1) {
    IO.println("i = " + i + " total = " + total);
    total = total + i;
    IO.println("i = " + i + " total = " + total);
}
IO.println(total);
```

## Abbrechen mit break

Schleifen können mit `break`-Statements unterbrochen werden. Dabei wird
im Gegensatz zu `return` nicht die Methode abgebrochen, sondern nur die
Schleife.

```java, java-exec
import java.util.List;
record Subject(String name, int grade) {
}
record Student(List<Subject> subjects) {
    void hasUnderCourse() {
        boolean found = false;
        for (Subject subject : subjects) {
            IO.println("Prüfe: " + subject.name());
            if (subject.grade() < 5) {
                found = true;
                break;
            }
        }
        if (found) {
            IO.println("Hat einen Unterkurs");
        } else {
            IO.println("Hat keinen Unterkurs");
        }
    }
}
```

```java, java-exec
var fritz = new Student(List.of(new Subject("Deutsch", 7), new Subject("Mathe", 4), new Subject("GGK", 2)));
fritz.hasUnderCourse()
```

Sobald ein Fach mit weniger als 5 Punkten gefunden ist, bricht `break`
die Schleife ab. Die restlichen Fächer werden nicht mehr geprüft.

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./for_schleifen_aufgaben.md)
