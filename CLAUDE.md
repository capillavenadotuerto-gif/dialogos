# Web de diálogos en alemán

Web estática en HTML, CSS y JavaScript, sin frameworks ni dependencias. La página de inicio lista los diálogos y cada uno abre su propia página, donde cada frase se muestra en alemán, con su traducción debajo y una separación antes de la siguiente, sin indicar quién la dice.

Cada diálogo tiene una carpeta en `BIBLIOTECA/` con su `source.txt` y su `frases.js`, y el nombre de la carpeta es su título. `BIBLIOTECA/biblioteca.js` lista las carpetas que aparecen en la página de inicio. Para crear un diálogo nuevo basta con crear su `frases.js` y añadir el nombre de la carpeta a esa lista.

## Traducciones

Las traducciones son lo más literalmente fieles posible al alemán y respetan toda la estructura que se pueda, aunque el resultado suene raro en español. No se usan traducciones más entendibles ni la forma en que se diría en español.

1. Mantener el orden de las palabras del alemán, incluidos el verbo en segunda posición, el participio o el infinitivo al final y el verbo al final de las subordinadas.

2. Traducir cada pieza por su significado propio, también las partículas, los artículos y los pronombres que en español se omitirían.

3. Traducir cada palabra del alemán siempre por la misma palabra en español mientras tenga el mismo significado.

4. Añadir solo lo imprescindible cuando el español no permita la correspondencia exacta, por ejemplo el «se» de un verbo pronominal.

## Incorporación de frases

Escribo las frases de cada diálogo en el `source.txt` de su carpeta, una por línea. Cada vez que se lea el archivo se hace el proceso completo sin esperar a que lo pida: añadir a la app las líneas nuevas que haya, borrar las ya añadidas y dejar siempre las tres últimas.

1. Comparar las primeras líneas de `source.txt` con las últimas frases de `frases.js`, donde pueden estar corregidas, y no volver a añadir las que ya estén. Son las tres líneas que quedaron la vez anterior.

2. Corregir los errores ortográficos de cada frase. No puedo escribir la ß con mi teclado y pongo `ss` en su lugar (`weiss`), así que hay que cambiarla por ß donde corresponda. Si la línea trae una etiqueta de quién habla (`[Kundin]`), se quita.

3. Añadir las frases nuevas al final de `frases.js`, en el orden de `source.txt` y con su traducción. Cada frase se añade también a la sección Diálogos de la web de `AL`, como indica la sección Diálogos de su `CLAUDE.md`.

4. Borrar de `source.txt` las frases ya añadidas, dejando siempre las tres últimas tal como las escribí, porque me sirven de referencia para saber por dónde voy de la copia.

5. Volver a leer `source.txt` justo antes de borrar, porque puedo haber escrito más líneas mientras tanto, y añadir también esas. Nunca borrar una línea que no esté ya en la app.

6. No añadir la última línea si no tiene signo de puntuación final ni salto de línea, porque todavía la estoy escribiendo. Se queda en el archivo para la siguiente lectura.
