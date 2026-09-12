# ArrayList-Methoden

```java, java-exec
import java.util.ArrayList;
```

Wir können einer `ArrayList` nach dem Erzeugen Elemente hinzufügen.

```java, java-exec
var xs = new ArrayList<Integer>();
xs
```

```java, java-exec
xs.add(5);
xs.add(6);
xs.add(7);
xs
```

Mit `addAll` können wir mehrere Elemente aus einer anderen Liste
hinzufügen.

```java, java-exec
var ys = new ArrayList<Integer>();
ys.add(8);
ys.add(9);
xs.addAll(ys);
xs
```

## Elemente lesen

Mit `get` greifen wir über den Index auf ein Element zu. Der erste Index
ist `0`.

```java, java-exec
xs.get(0)
```

Mit `contains` prüfen wir, ob ein Element in der Liste enthalten ist.

```java, java-exec
xs.contains(6)
```

Mit `subList` können wir einen Ausschnitt der Liste auswählen. Der
Endindex gehört nicht mehr zum Ausschnitt.

```java, java-exec
xs.subList(1, 4)
```

## Elemente ändern

Mit `set` ersetzen wir ein Element. Der Methode übergeben wir den Index
und das neue Element.

```java, java-exec
xs.set(0, 9);
xs
```

Mit `remove` entfernen wir das Element am angegebenen Index.

```java, java-exec
xs.remove(1);
xs
```
