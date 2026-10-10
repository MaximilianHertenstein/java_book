# Rekursive Funktionen

## Grundlagen

Eine rekursive Funktion ist eine Funktion, die sich selbst aufruft. Die Funktion `countDown` ist ein Beispiel hierfür.
Sie soll für eine natürliche Zahl `n` die Zahlen von `n` bis `0` in absteigender Reihenfolge ausgeben.


- Wenn `n == 0` gilt, wird nur `0` angezeigt.
- Sonst wird zuerst `n` angezeigt und anschließend werden alle Zahlen von `n - 1` bis `0` angezeigt.



```java, java-exec
void countDown(int n) {
    if (n == 0){
        IO.println(0);
    }
    else {
        IO.println(n);
        countDown(n - 1);
    }
}
```


```java, java-exec
countDown(10)
```


- Beim Aufruf von `countDown(10)` gilt `n = 10`. Es wird also `10` angezeigt.
Danach wird `countDown(9)` aufgerufen.
- Beim Aufruf von `countDown(9)` gilt `n = 9`. Es wird also `9` angezeigt.
Danach wird `countDown(8)` aufgerufen.
- \\(\dots\\)
- Beim Aufruf von `countDown(0)` gilt `n = 0`. Es wird also `0` angezeigt. Danach wird nichts mehr angezeigt.


Wir können `println` nutzen, um genau anzuzeigen, mit welchen Werten die Funktion aufgerufen wird.




```java, java-exec
void countDownVerbose(int n) {
    IO.println("Starte countDownVerbose(" + n + ")");
    if (n == 0){
        IO.println(0);
    }
    else {
        IO.println(n);
        countDownVerbose(n - 1);
    }
    IO.println("Beende countDownVerbose(" + n + ")");
}
```

```java, java-exec
countDownVerbose(10)
```


Dabei sieht man, dass gleichzeitig mehrere Aufrufe von `countDownVerbose` aktiv sind. Der Wert von `n` ist aber bei jedem Aufruf ein anderer. Erst wenn `countDownVerbose(0)` beendet ist, kann auch `countDownVerbose(1)` weiter ausgeführt und beendet werden, denn dieser Aufruf wartet auf das Ende von `countDownVerbose(0)`. Danach werden die übrigen Aufrufe der Reihe nach beendet.


## Beispiel mit Rückgabewert



Die Fakultät einer natürlichen Zahl \\(n\\) ist das Produkt aller natürlichen Zahlen von \\(n\\) bis \\(1\\). Zum Beispiel gilt:


\\[ \operatorname{fakultät}(5) = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 \\]

Das können wir folgendermaßen umschreiben:

\\[ \operatorname{fakultät}(5) = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 5 \cdot (4 \cdot 3 \cdot 2 \cdot 1) = 5 \cdot \operatorname{fakultät}(4) \\]

Es reicht also, die Fakultät von \\(0\\) als \\(1\\) zu definieren und die Fakultät einer beliebigen natürlichen Zahl \\(n\\) über die Fakultät ihres Vorgängers festzulegen.



\\[
\begin{align*}
\operatorname{fakultät}(0) &= 1,\\\\
\operatorname{fakultät}(n) &= n \cdot (n-1) \cdot (n-2) \cdots 1\\\\
&= n \cdot \operatorname{fakultät}(n - 1).
\end{align*}

\\]

Das können wir folgendermaßen programmieren:


```java, java-exec
public static int factorial(int x) {
    if (x == 0) {
        return 1;
    }
    return x * factorial(x - 1);    
}
```

```java, java-exec
factorial(3)
```



Auch in die Methode *factorial* können wir *println*-Anweisungen einbauen, um beim Aufruf zu sehen, was gerade passiert.


```java, java-exec
public static int factorial(int x) {
    IO.println("Start des Aufrufs von factorial mit x = " + x);
    if (x = 1) {
        IO.println("Ende des Aufrufs von factorial mit x = " + x + " mit Ergebnis = 1");
        return 1;
    }
    int result =  x * factorial(x - 1);
    IO.println("Ende des Aufrufs von factorial mit x = " + x + " mit Ergebnis = " + result);
    return result;
}
```
Auch diese Methode rufen wir folgendermaßen auf:



```java, java-exec
factorial(2)
```



Bei der dritten Ausgabe sind drei Aufrufe von *factorial* gleichzeitig aktiv. Bei der vierten Ausgabe wird der innerste Aufruf beendet. Dadurch kann der nächstäußere Aufruf sein Ergebnis berechnen und bei der fünften Ausgabe ausgeben.
