# Schleifen mit `break` abbrechen

Mit `break` können wir eine Schleife vorzeitig beenden. Im Gegensatz zu
`return` wird dabei nicht die ganze Methode beendet.

```java, java-exec
import java.util.List;
```

```java, java-exec
record Subject(String name, int grade) {
}

record Student(List<Subject> subjects) {
    public void hasUnderCourse() {
        boolean found = false;
        for (var subject : subjects) {
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
var fritz = new Student(List.of(
    new Subject("Deutsch", 7),
    new Subject("Mathe", 4),
    new Subject("GGK", 2)
));
fritz.hasUnderCourse();
```
