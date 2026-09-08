# Nullwerte

Beim Programmieren kommt es oft vor, dass man einen Wert (noch) nicht
zur Verfügung hat. Solche nicht vorhandenen Werte stellt man mit dem
Wert `null` dar.

```java, java-exec
null
```

In der folgenden Zelle wird die Variable `userInputInThisRound`
angelegt.

```java, java-exec
char userInputInThisRound = 'w';
```

Der Typ der Variable `userInputInThisRound` ist `char`. Da `null` kein
`char` ist, können wir den Wert von `userInputInThisRound` nicht auf
`null` setzen.

```java, java-exec
userInputInThisRound = null;
```

Objekttypen wie `Character` kennen dieses Problem nicht: Jedes Objekt
kann in Java auch `null` sein. Ein Fragezeichen wie in manchen anderen
Sprachen braucht es dafür nicht.

```java, java-exec
Character maybeUserInputInThisRound = 'w';
maybeUserInputInThisRound = null;
```

## Mit Nullwerten arbeiten

Mit Variablen, die `null` sein können, kann nicht ohne weiteres
gearbeitet werden. Z. B. lässt sich für ein Zeichen prüfen, ob es eine
Ziffer darstellt.

```java, java-exec
Character.isDigit('w')
```

Mit dem Wert `null` ist ein Methodenaufruf aber nicht möglich. Er
bricht mit einer `NullPointerException` ab.

```java, java-exec
Character nothing = null;
nothing.equals('w')
```

Da die Variable `maybeUserInputInThisRound` den Wert `null` haben kann
(und im Moment auch hat), führt auch hier der Aufruf zum selben Fehler.

```java, java-exec
maybeUserInputInThisRound.equals('w')
```

Bei der Arbeit mit solchen Variablen ist es nötig, mit `if` zu prüfen,
ob der Wert `null` ist.

```java, java-exec
boolean isDigitOrFalse(Character maybeChar) {
    if (maybeChar != null) {
        return Character.isDigit(maybeChar);
    }
    return false;
}
```

Nach der Prüfung ist der Wert in den geschweiften Klammern garantiert
nicht `null`. Deshalb ist dort der Aufruf möglich.

```java, java-exec
isDigitOrFalse('w')
```

## Aufgaben

[Zu den Aufgaben zu diesem Kapitel](./nullwerte_aufgaben.md)
