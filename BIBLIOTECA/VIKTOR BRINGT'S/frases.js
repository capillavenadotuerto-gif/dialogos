const frases = [
  {
    de: 'In Deutschland gibt es ein Rechtsfahrgebot.',
    es: 'En Alemania da ello un mandato de conducir por la derecha.',
  },
  {
    de: 'Wenn du schon mit 40 fahren willst, dann fahr rüber.',
    es: 'Si tú ya con 40 conducir quieres, entonces conduce al otro lado.',
  },
  {
    de: 'Ich weiß, aber da vorne ist ein Lkw.',
    es: 'Yo sé, pero ahí delante está un camión.',
  },
  {
    de: 'Viktor keucht auf.',
    es: 'Viktor jadea de golpe.',
  },
  {
    de: 'Vorsicht, da ist ein BMW!',
    es: '¡Cuidado, ahí está un BMW!',
  },
  {
    de: 'Mein Gott, ja, ich weiß.',
    es: 'Mi Dios, sí, yo sé.',
  },
  {
    de: 'Du hast mich erschreckt.',
    es: 'Tú has a mí asustado.',
  },
  {
    de: 'Würdest du mich nicht unterbrechen...',
    es: 'Si tú a mí no interrumpieras...',
  },
  {
    de: 'Ziel erreicht.',
    es: 'Destino alcanzado.',
  },
  {
    de: 'Hier, nimm den.',
    es: 'Aquí, toma ese.',
  },
  {
    de: 'Die Kiste ist kein E-Auto.',
    es: 'La caja es ningún coche eléctrico.',
  },
  {
    de: 'Doch.',
    es: 'Que sí.',
  },
  {
    de: 'Nee.',
    es: 'No.',
  },
  {
    de: 'Michael, doch. Jetzt nimm den Parkplatz.',
    es: 'Michael, que sí. Ahora toma el aparcamiento.',
  },
  {
    de: 'Mhm, alles klar.',
    es: 'Mhm, todo claro.',
  },
  {
    de: 'Hallo, wir werden hier abgeschleppt.',
    es: 'Hola, nosotros somos aquí remolcados.',
  },
  {
    de: 'Tss, erste Lieferung.',
    es: 'Tss, primera entrega.',
  },
  {
    de: 'Und, bist du aufgeregt?',
    es: 'Y, ¿estás tú nervioso?',
  },
  {
    de: 'Ja, mega.',
    es: 'Sí, mega.',
  },
  {
    de: 'Brauchst du nicht.',
    es: 'Necesitas tú no.',
  },
  {
    de: 'Halt dich einfach an deinen alten Herrn.',
    es: 'Sujétate simplemente a tu viejo señor.',
  },
  {
    de: 'Schau zu und lerne.',
    es: 'Mira y aprende.',
  },
  {
    de: 'Mhm.',
    es: 'Mhm.',
  },
  {
    de: 'So.',
    es: 'Así.',
  },
  {
    de: 'Was habe ich dir beigebracht?',
    es: '¿Qué he yo a ti enseñado?',
  },
  {
    de: 'Iss keinen gelben Schnee?',
    es: '¿Come ninguna amarilla nieve?',
  },
  {
    de: 'Schuhe, Small Talk, Sondergarantie.',
    es: 'Zapatos, pequeña charla, garantía especial.',
  },
  {
    de: 'So.',
    es: 'Así.',
  },
  {
    de: 'Wichtig. Ohne Sondergarantie gehen wir da nicht raus, Michael.',
    es: 'Importante. Sin garantía especial vamos nosotros ahí no fuera, Michael.',
  },
  {
    de: 'Kannst du mich nicht so nennen?',
    es: '¿Puedes tú a mí no así llamar?',
  },
  {
    de: 'Das ist aber zufällig dein Name.',
    es: 'Eso es pero casualmente tu nombre.',
  },
  {
    de: 'Ja, aber alle sagen Mika.',
    es: 'Sí, pero todos dicen Mika.',
  },
  {
    de: 'Was sagen die? Mika?',
    es: '¿Qué dicen esos? ¿Mika?',
  },
  {
    de: 'Ja. Mi-ka',
    es: 'Sí. Mi-ka',
  },
  {
    de: 'Nee.',
    es: 'No.',
  },
  {
    de: 'Doch.',
    es: 'Que sí.',
  },
  {
    de: 'Nee.',
    es: 'No.',
  },
  {
    de: 'Das passt nicht zu dir. Von mir aus...',
    es: 'Eso encaja no a ti. De mí desde...',
  },
  {
    de: '"Mike" finde ich gut.',
    es: '"Mike" encuentro yo bueno.',
  },
  {
    de: 'Oder Micky oder so.',
    es: 'O Micky o así.',
  },
  {
    de: 'Aber auf gar keinen Fall Mika.',
    es: 'Pero en absolutamente ningún caso Mika.',
  },
  {
    de: 'Und das entscheidest du jetzt?',
    es: '¿Y eso decides tú ahora?',
  },
  {
    de: 'Michael. Wir haben den Namen nicht umsonst ausgesucht.',
    es: 'Michael. Nosotros hemos el nombre no en vano elegido.',
  },
  {
    de: 'Das ist nicht irgendein Name.',
    es: 'Eso es no cualquier nombre.',
  },
  {
    de: 'Das ist der Name des wohl größten Rennfahrers aller Zeiten.',
    es: 'Eso es el nombre del acaso más grande piloto de carreras de todos tiempos.',
  },
  {
    de: 'Und das ist nicht Mika Häkkinen, sondern?',
    es: '¿Y eso es no Mika Häkkinen, sino?',
  },
  {
    de: 'Michael Schumacher.',
    es: 'Michael Schumacher.',
  },
  {
    de: 'Michael Schumacher ist das, Mann.',
    es: 'Michael Schumacher es eso, hombre.',
  },
  {
    de: 'Kenne ich nicht.',
    es: 'Conozco yo no.',
  },
  {
    de: 'Mhm.',
    es: 'Mhm.',
  },
  {
    de: 'Ja?',
    es: '¿Sí?',
  },
  {
    de: '"Viktor bringt\'s", wegen dem Fernseher.',
    es: '"Viktor trae ello", por el televisor.',
  },
  {
    de: 'Dachgeschoss.',
    es: 'Planta de tejado.',
  },
  {
    de: 'Die haben sicher einen Lift.',
    es: 'Esos tienen seguramente un ascensor.',
  },
  {
    de: 'Toller Lift.',
    es: 'Estupendo ascensor.',
  },
  {
    de: 'Du kennst Michael Schumacher nicht?',
    es: '¿Tú conoces Michael Schumacher no?',
  },
  {
    de: 'Michael Schumacher ist der größte Formel-1-Pilot aller Zeiten, ja?',
    es: 'Michael Schumacher es el más grande piloto de Fórmula 1 de todos tiempos, ¿sí?',
  },
  {
    de: 'Der ist siebenmal Weltmeister geworden.',
    es: 'Ese es siete veces campeón del mundo devenido.',
  },
  {
    de: 'Das hat vor ihm noch nie einer geschafft.',
    es: 'Eso ha antes de él todavía nunca uno logrado.',
  },
  {
    de: 'Und weißt du, wie der Sohn von dem heißt?',
    es: '¿Y sabes tú, cómo el hijo de ese se llama?',
  },
  {
    de: 'Michael Ballack?',
    es: '¿Michael Ballack?',
  },
  {
    de: 'Mick Schumacher.',
    es: 'Mick Schumacher.',
  },
  {
    de: 'Ah.',
    es: 'Ah.',
  },
  {
    de: 'Mick.',
    es: 'Mick.',
  },
  {
    de: 'Das ist ein ordentlicher Name.',
    es: 'Eso es un decente nombre.',
  },
  {
    de: '[Klingeln]',
    es: '[Timbrazo]',
  },
  {
    de: 'Guten Tag. Kommst du?',
    es: 'Buen día. ¿Vienes tú?',
  },
  {
    de: '67 Minuten zu spät.',
    es: '67 minutos demasiado tarde.',
  },
  {
    de: 'Ja, der Berliner Verkehr, Sie verstehen.',
    es: 'Sí, el berlinés tráfico, usted entiende.',
  },
  {
    de: 'Nein, das verstehe ich leider nicht.',
    es: 'No, eso entiendo yo lamentablemente no.',
  },
  {
    de: 'Hätten Sie gesagt "Bitte verzeihen Sie", hätte ich Sie verstanden.',
    es: 'Hubiera usted dicho "Por favor perdone usted", hubiera yo a usted entendido.',
  },
  {
    de: 'Aber das Pochen auf das Verständnis anderer, das will ich gar nicht verstehen, verstehen Sie?',
    es: 'Pero el insistir en la comprensión de otros, eso quiero yo en absoluto no entender, ¿entiende usted?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Schuhe bitte ausziehen.',
    es: 'Zapatos por favor quitar.',
  },
  {
    de: 'Das geht leider nicht.',
    es: 'Eso va lamentablemente no.',
  },
  {
    de: 'Laut Arbeitsschutzgesetz müssen wir Arbeitsschuhe der Sicherheitsklasse 2 tragen.',
    es: 'Según ley de protección laboral debemos nosotros zapatos de trabajo de la clase de seguridad 2 llevar.',
  },
  {
    de: 'Das sind halt keine Socken.',
    es: 'Eso son sin más ningunos calcetines.',
  },
  {
    de: 'Verstehen Sie?',
    es: '¿Entiende usted?',
  },
  {
    de: '[drollige Musik]',
    es: '[graciosa música]',
  },
  {
    de: 'Na ja, das ist ja schon ganz schön, äh... geräumig hier.',
    es: 'Bueno sí, eso es sí ya bastante, eh... espacioso aquí.',
  },
  {
    de: 'Waren mal drei Wohnungen. Ich habe die Wände rausnehmen lassen und die Decken.',
    es: 'Eran una vez tres viviendas. Yo he las paredes sacar dejado y los techos.',
  },
  {
    de: 'Ich brauche einfach Luft.',
    es: 'Yo necesito simplemente aire.',
  },
  {
    de: 'Hier passt ein Fußballplatz rein.',
    es: 'Aquí cabe un campo de fútbol dentro.',
  },
  {
    de: 'Mhm, inklusive Fantribüne.',
    es: 'Mhm, incluida tribuna de aficionados.',
  },
  {
    de: 'Wie bitte?',
    es: '¿Cómo por favor?',
  },
  {
    de: 'So viel zum Thema Wohnungsnot.',
    es: 'Así mucho al tema escasez de vivienda.',
  },
  {
    de: 'Hier könnten 20 Student*innen wohnen.',
    es: 'Aquí podrían 20 estudiantes vivir.',
  },
  {
    de: 'Schuhe, Small Talk, Sondergarantie.',
    es: 'Zapatos, pequeña charla, garantía especial.',
  },
  {
    de: 'Ach so, \'tschuldigung.',
    es: 'Ah así, disculpa.',
  },
  {
    de: 'Ähm, könnte ich vielleicht, wenn es keine Umstände macht, ein Glas Wasser haben, bitte?',
    es: 'Ehm, ¿podría yo quizás, si ello ningunas molestias hace, un vaso agua tener, por favor?',
  },
  {
    de: 'Mit oder ohne?',
    es: '¿Con o sin?',
  },
  {
    de: 'Mit ohne.',
    es: 'Con sin.',
  },
  {
    de: 'Wie bitte?',
    es: '¿Cómo por favor?',
  },
  {
    de: 'Ohne.',
    es: 'Sin.',
  },
  {
    de: 'Rosenquarz oder Amethyst?',
    es: '¿Cuarzo rosa o amatista?',
  },
  {
    de: 'Äh... Rosenquarz?',
    es: 'Eh... ¿Cuarzo rosa?',
  },
  {
    de: 'Und für Sie?',
    es: '¿Y para usted?',
  },
  {
    de: 'Ich trinke nicht im Dienst.',
    es: 'Yo bebo no en el servicio.',
  },
  {
    de: 'Hm, das sollten Sie aber.',
    es: 'Hm, eso debería usted pero.',
  },
  {
    de: 'Unser Körper besteht zu 85 Prozent aus Wasser.',
    es: 'Nuestro cuerpo consiste a 85 por ciento de agua.',
  },
  {
    de: 'Und Wassermangel führt zu fehlender Konzentration.',
    es: 'Y falta de agua lleva a faltante concentración.',
  },
  {
    de: 'Und fehlende Konzentration führt zu Fehlern.',
    es: 'Y faltante concentración lleva a errores.',
  },
  {
    de: 'Ich will nicht, dass Sie bei mir Fehler machen.',
    es: 'Yo quiero no, que usted en mi casa errores haga.',
  },
  {
    de: 'Wollen Sie bei mir Fehler machen?',
    es: '¿Quiere usted en mi casa errores hacer?',
  },
  {
    de: 'Ich mache keine Fehler, ich bin ein Profi.',
    es: 'Yo hago ningunos errores, yo soy un profesional.',
  },
  {
    de: 'Von Wasser kriege ich einen Blubberbauch.',
    es: 'De agua obtengo yo una barriga burbujeante.',
  },
  {
    de: 'Ich mag kein Wasser.',
    es: 'Yo aprecio ninguna agua.',
  },
  {
    de: 'Blödsinn.',
    es: 'Tontería.',
  },
  {
    de: '[drollige Musik läuft weiter]',
    es: '[graciosa música continúa]',
  },
  {
    de: '[Steinchen klimpern]',
    es: '[piedrecitas tintinean]',
  },
  {
    de: 'Haben Sie die Bücher alle gelesen?',
    es: '¿Ha usted los libros todos leído?',
  },
  {
    de: 'Nein, natürlich nicht.',
    es: 'No, naturalmente no.',
  },
  {
    de: 'Ein Raum ohne Bücher ist wie ein Gemälde ohne Farbe.',
    es: 'Una habitación sin libros es como una pintura sin color.',
  },
  {
    de: 'Ah, verstehe. Das ist wie bei meinem Kumpel Torsten und seinem Alfa.',
    es: 'Ah, entiendo. Eso es como en mi colega Torsten y su Alfa.',
  },
  {
    de: 'Pardon?',
    es: '¿Perdón?',
  },
  {
    de: 'Der hat so einen alten 156er.',
    es: 'Ese tiene así un viejo 156.',
  },
  {
    de: 'Die Bremsklötze hat er sich rot lackieren lassen, obwohl das Ding nur 120 PS hat.',
    es: 'Las pastillas de freno se ha él rojo pintar dejado, aunque la cosa solo 120 CV tiene.',
  },
  {
    de: 'Aber sieht halt geil aus.',
    es: 'Pero se ve sin más genial.',
  },
  {
    de: 'Krass, ist das ein originaler Brockhaus?',
    es: 'Bestial, ¿es eso un original Brockhaus?',
  },
  {
    de: 'Oh Gott.',
    es: 'Oh Dios.',
  },
  {
    de: 'Bitte gleich wieder zurückstellen.',
    es: 'Por favor enseguida otra vez atrás poner.',
  },
  {
    de: 'Das ist eine Erstausgabe, 1796.',
    es: 'Eso es una primera edición, 1796.',
  },
  {
    de: '\'tschuldigung.',
    es: 'Disculpa.',
  },
  {
    de: '1796?',
    es: '¿1796?',
  },
  {
    de: 'Das ist unglaublich, oder?',
    es: 'Eso es increíble, ¿o?',
  },
  {
    de: 'Dann ist ja nix mehr aktuell.',
    es: 'Entonces es sí nada más actual.',
  },
  {
    de: 'Ach bitte, "aktuell".',
    es: 'Ah por favor, "actual".',
  },
  {
    de: 'Aktualität ist ein Synonym für die Artenlosigkeit einer reizüberfluteten Gesellschaft, die versucht, sich im Konsum von Nichtigkeiten von ihrer Bedeutungslosigkeit abzulenken.',
    es: 'Actualidad es un sinónimo para la carencia de especies de una sobreinundada de estímulos sociedad, que intenta, se en el consumo de nimiedades de su insignificancia distraer.',
  },
  {
    de: 'Klar. \'tschuldigung, ich bin bei "reizüberflutet" ausgestiegen.',
    es: 'Claro. Disculpa, yo soy en "sobreinundada de estímulos" bajado.',
  },
  {
    de: 'Aber ich bin auch mehr ein Praktiker.',
    es: 'Pero yo soy también más un práctico.',
  },
  {
    de: 'Ich denke mit den Händen.',
    es: 'Yo pienso con las manos.',
  },
  {
    de: 'Das taten die Neandertaler auch und sind ausgestorben.',
    es: 'Eso hicieron los neandertales también y son extinguidos.',
  },
  {
    de: 'Die waren vielleicht nicht so geschickt.',
    es: 'Esos eran quizás no tan hábiles.',
  },
  {
    de: 'Man muss auch geschickt sein.',
    es: 'Uno debe también hábil ser.',
  },
  {
    de: 'Stopp.',
    es: 'Alto.',
  },
  {
    de: '\'tschuldigung.',
    es: 'Disculpa.',
  },
  {
    de: 'Ich hätte die krasseste Höhle gehabt, damals. Das ist sicher.',
    es: 'Yo hubiera la más bestial cueva tenido, entonces. Eso es seguro.',
  },
  {
    de: 'Nur ging die Steinzeit nicht zu Ende, weil die Steine ausgingen.',
    es: 'Solo fue la Edad de Piedra no a fin, porque las piedras se acabaron.',
  },
  {
    de: 'Nein, weil der Mensch sich zum Denker weiterentwickelt hat.',
    es: 'No, porque el humano se a pensador más desarrollado ha.',
  },
  {
    de: 'Ja, aber das mit dem Denken ist so ein bisschen wie mit Schaukeln, ne?',
    es: 'Sí, pero eso con el pensar es así un poquito como con columpiarse, ¿no?',
  },
  {
    de: 'Also, man bewegt sich die ganze Zeit, aber man kommt nicht voran.',
    es: 'Así pues, uno se mueve todo el tiempo, pero uno viene no adelante.',
  },
  {
    de: 'Apropos voran. Ich will nicht den ganzen Tag auf Sie warten.',
    es: 'A propósito adelante. Yo quiero no todo el día a usted esperar.',
  },
  {
    de: 'Da haben wir es wieder.',
    es: 'Ahí tenemos nosotros ello otra vez.',
  },
  {
    de: 'Das ist der Unterschied.',
    es: 'Eso es la diferencia.',
  },
  {
    de: 'Denker warten, Praktiker machen.',
    es: 'Pensadores esperan, prácticos hacen.',
  },
  {
    de: 'Hallo.',
    es: 'Hola.',
  },
  {
    de: 'Pack schon mal die Hilti aus, bitte.',
    es: 'Desempaqueta ya una vez la Hilti, por favor.',
  },
  {
    de: 'So, ansetzen, anbohren, absaugen, würde ich sagen.',
    es: 'Así, colocar, empezar a taladrar, aspirar, diría yo.',
  },
  {
    de: 'Raketenwissenschaft, hm?',
    es: 'Ciencia de cohetes, ¿hm?',
  },
  {
    de: 'Genau.',
    es: 'Exacto.',
  },
  {
    de: 'Mach das Ding an, Michael.',
    es: 'Enciende la cosa, Michael.',
  },
  {
    de: 'Ich sagte, du sollst mich bitte nicht so nennen.',
    es: 'Yo dije, tú debes a mí por favor no así llamar.',
  },
  {
    de: 'Geht das wieder los?',
    es: '¿Empieza eso otra vez?',
  },
  {
    de: 'Das sind zwei Silben. Alle sagen Mika.',
    es: 'Eso son dos sílabas. Todos dicen Mika.',
  },
  {
    de: 'Aber ich sage dir, mein Sohn heißt nicht Mika. \'tschuldigung.',
    es: 'Pero yo digo a ti, mi hijo se llama no Mika. Disculpa.',
  },
  {
    de: 'Bis jetzt war es dir nicht so wichtig, einen Sohn zu haben.',
    es: 'Hasta ahora era ello a ti no tan importante, un hijo tener.',
  },
  {
    de: 'Du bist der, der nach München gegangen ist.',
    es: 'Tú eres ese, que a Múnich ido es.',
  },
  {
    de: 'Hä, ich war vier.',
    es: 'Eh, yo era cuatro.',
  },
  {
    de: 'Eben.',
    es: 'Justamente.',
  },
  {
    de: 'Ja, du hast uns verlassen.',
    es: 'Sí, tú has a nosotros abandonado.',
  },
  {
    de: 'Das war... komplizierter gewesen.',
    es: 'Eso era... más complicado sido.',
  },
  {
    de: 'Okay, sehr interessant, Ihre Familiengeschichte.',
    es: 'Okay, muy interesante, su historia familiar.',
  },
  {
    de: 'Aber können Sie jetzt bohren?',
    es: '¿Pero puede usted ahora taladrar?',
  },
  {
    de: 'Ja, ja.',
    es: 'Sí, sí.',
  },
  {
    de: '\'tschuldigung.',
    es: 'Disculpa.',
  },
  {
    de: 'Ich bin doch nicht nach jemandem benannt, der im Kreis fährt?',
    es: '¿Yo soy pues no según alguien nombrado, que en el círculo conduce?',
  },
  {
    de: 'Die Formel 1 ist viel mehr als das.',
    es: 'La Fórmula 1 es mucho más que eso.',
  },
  {
    de: 'Stimmt, ein krasser Umweltsünder.',
    es: 'Cierto, un bestial pecador medioambiental.',
  },
  {
    de: 'Die haben das ABS erfunden.',
    es: 'Esos han el ABS inventado.',
  },
  {
    de: 'Das rettet täglich Menschenleben.',
    es: 'Eso salva diariamente vidas humanas.',
  },
  {
    de: 'Mama hätte doch nie zugelassen, dass ich nach einem Rennfahrer benannt werde.',
    es: 'Mamá hubiera pues nunca permitido, que yo según un piloto de carreras nombrado sea.',
  },
  {
    de: 'Deine Mutter ist eine... eine Träumerin, verstehst du?',
    es: 'Tu madre es una... una soñadora, ¿entiendes tú?',
  },
  {
    de: 'Und auf der Welt gibt es Träumer und Macher.',
    es: 'Y en el mundo da ello soñadores y hacedores.',
  },
  {
    de: 'So wie Michael Schu-Macher.',
    es: 'Así como Michael Schu-Macher.',
  },
  {
    de: 'Und jetzt mach, bitte.',
    es: 'Y ahora haz, por favor.',
  },
  {
    de: 'Haben Sie Kinder?',
    es: '¿Tiene usted niños?',
  },
  {
    de: 'Nein, natürlich nicht.',
    es: 'No, naturalmente no.',
  },
  {
    de: 'Alles richtig gemacht.',
    es: 'Todo correcto hecho.',
  },
  {
    de: 'Dein Ernst?',
    es: '¿Tu seriedad?',
  },
  {
    de: 'So habe ich das nicht gemeint.',
    es: 'Así he yo eso no querido decir.',
  },
  {
    de: 'Wir haben hier noch ein großes Loch zu bohren, mein Freund.',
    es: 'Nosotros tenemos aquí todavía un gran agujero que taladrar, mi amigo.',
  },
  {
    de: '"Wir haben hier noch ein großes Loch zu bohren."',
    es: '"Nosotros tenemos aquí todavía un gran agujero que taladrar."',
  },
  {
    de: 'Das ist sein erster Tag heute.',
    es: 'Eso es su primer día hoy.',
  },
  {
    de: 'Manchmal ist er ein bisschen sensibel.',
    es: 'A veces es él un poquito sensible.',
  },
  {
    de: 'Ich muss mal ganz kurz...',
    es: 'Yo debo una vez totalmente breve...',
  },
  {
    de: 'Das war früher schon so gewesen.',
    es: 'Eso era antes ya así sido.',
  },
  {
    de: 'Mit zwei hatte der das schon.',
    es: 'Con dos tenía ese eso ya.',
  },
  {
    de: 'Das ist ein Kreuz mit den Kindern.',
    es: 'Eso es una cruz con los niños.',
  },
  {
    de: 'Michael!',
    es: '¡Michael!',
  },
  {
    de: 'Macht der jetzt Pause?',
    es: '¿Hace ese ahora pausa?',
  },
  {
    de: 'Der macht doch jetzt nicht Pause?',
    es: '¿Ese hace pues ahora no pausa?',
  },
  {
    de: 'Wirklich eine wunderschöne Aussicht, die Sie hier haben.',
    es: 'Realmente una preciosa vista, que usted aquí tiene.',
  },
  {
    de: 'Wow.',
    es: 'Wow.',
  },
  {
    de: 'Manchmal stehe ich so da und denke: Ja, das Leben ist doch schön.',
    es: 'A veces estoy yo así ahí y pienso: Sí, la vida es pues bonita.',
  },
  {
    de: 'Sie denken viel, kann das sein?',
    es: 'Usted piensa mucho, ¿puede eso ser?',
  },
  {
    de: 'Sie denken wenig, kann das sein?',
    es: 'Usted piensa poco, ¿puede eso ser?',
  },
  {
    de: 'Ich fühle mich gut.',
    es: 'Yo me siento bien.',
  },
  {
    de: 'Das ist ja das Problem.',
    es: 'Eso es sí el problema.',
  },
  {
    de: 'Der Mensch denkt, er denkt, dabei fühlt er nur.',
    es: 'El humano piensa, él piensa, mientras siente él solo.',
  },
  {
    de: 'Das glaube ich jetzt nicht.',
    es: 'Eso creo yo ahora no.',
  },
  {
    de: 'Glauben hat auch wirklich gar nichts mit denken zu tun.',
    es: 'Creer tiene también realmente en absoluto nada con pensar que hacer.',
  },
  {
    de: 'Ihr Leben ist ganz schön anstrengend, hm?',
    es: 'Su vida es bastante agotadora, ¿hm?',
  },
  {
    de: 'Wem sagen Sie das?',
    es: '¿A quién dice usted eso?',
  },
  {
    de: 'Wir haben uns seit Jahren nicht gesehen.',
    es: 'Nosotros nos hemos desde años no visto.',
  },
  {
    de: 'Ich finde ihn ganz süß.',
    es: 'Yo encuentro a él totalmente dulce.',
  },
  {
    de: 'Süß?',
    es: '¿Dulce?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Knackig süß.',
    es: 'Crujientemente dulce.',
  },
  {
    de: 'Ja, wie nur so 20-Jährige so knackig sein können.',
    es: 'Sí, como solo así veinteañeros así crujientes ser pueden.',
  },
  {
    de: 'Gut, aber Anfang-40-Jährige sind ja auch noch knackig.',
    es: 'Bien, pero principios de cuarentañeros son sí también todavía crujientes.',
  },
  {
    de: 'Und halt megaerfahren.',
    es: 'Y sin más megaexperimentados.',
  },
  {
    de: 'Ähm, jetzt auch nicht... zu übertrieben erfahren.',
    es: 'Ehm, ahora también no... demasiado exageradamente experimentado.',
  },
  {
    de: 'Sondern eher so... respektvoll erfahren.',
    es: 'Sino más bien así... respetuosamente experimentado.',
  },
  {
    de: 'Mhm.',
    es: 'Mhm.',
  },
  {
    de: 'Anfang 40?',
    es: '¿Principios 40?',
  },
  {
    de: 'Wollen Sie ein bisschen Gras?',
    es: '¿Quiere usted un poquito hierba?',
  },
  {
    de: 'Habe ich hier immer vor meinem Mann versteckt. Ex-Mann.',
    es: 'He yo aquí siempre ante mi marido escondido. Ex marido.',
  },
  {
    de: 'Also das hätte ich Ihnen jetzt gar nicht zugetraut.',
    es: 'Así pues eso hubiera yo a usted ahora en absoluto no creído capaz.',
  },
  {
    de: 'Mann oder Gras?',
    es: '¿Marido o hierba?',
  },
  {
    de: 'Nee, hier das mit dem Gras.',
    es: 'No, aquí eso con la hierba.',
  },
  {
    de: '[er räuspert sich]',
    es: '[él se carraspea]',
  },
  {
    de: 'Auf keinen Fall.',
    es: 'En ningún caso.',
  },
  {
    de: 'Können Sie dann keine Löcher mehr bohren?',
    es: '¿Puede usted entonces ningunos agujeros más taladrar?',
  },
  {
    de: 'Ich kann immer bohren.',
    es: 'Yo puedo siempre taladrar.',
  },
  {
    de: 'Blind bohre ich Ihnen die schönsten Löcher.',
    es: 'Ciego taladro yo a usted los más bonitos agujeros.',
  },
  {
    de: 'Kunstwerke sind das. Aber sicher.',
    es: 'Obras de arte son eso. Pero seguro.',
  },
  {
    de: 'Nichts ist sicher.',
    es: 'Nada es seguro.',
  },
  {
    de: 'Sicher, aber das schon.',
    es: 'Seguro, pero eso ya.',
  },
  {
    de: 'Sagen Sie, was machen Sie eigentlich?',
    es: 'Diga usted, ¿qué hace usted en realidad?',
  },
  {
    de: 'Ich sitze hier und rauche Gras.',
    es: 'Yo estoy sentada aquí y fumo hierba.',
  },
  {
    de: 'Das ist schon klar. Ich meinte beruflich.',
    es: 'Eso es ya claro. Yo quería decir profesionalmente.',
  },
  {
    de: 'Ich bin Neurowissenschaftlerin.',
    es: 'Yo soy neurocientífica.',
  },
  {
    de: 'Aha.',
    es: 'Ajá.',
  },
  {
    de: 'Hirnforschung. Ich bin Hirnforscherin.',
    es: 'Investigación del cerebro. Yo soy investigadora del cerebro.',
  },
  {
    de: 'Ah, was Sie nicht sagen.',
    es: 'Ah, qué usted no dice.',
  },
  {
    de: 'Doch.',
    es: 'Que sí.',
  },
  {
    de: 'Das ist interessant. Stimmt es, dass wir nur zehn Prozent unseres Gehirns nutzen?',
    es: 'Eso es interesante. ¿Es cierto ello, que nosotros solo diez por ciento de nuestro cerebro usamos?',
  },
  {
    de: 'Nein. Bei den meisten setzt das Gehirn ganz aus, wenn sie was sagen.',
    es: 'No. En los más se interrumpe el cerebro totalmente, cuando ellos algo dicen.',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Alter Neurowissenschaftler-Joke.',
    es: 'Viejo chiste de neurocientíficos.',
  },
  {
    de: 'Ach, der.',
    es: 'Ah, ese.',
  },
  {
    de: 'Klar, sehr lustig.',
    es: 'Claro, muy divertido.',
  },
  {
    de: 'Humor hat ja was mit Intelligenz zu tun.',
    es: 'Humor tiene sí algo con inteligencia que hacer.',
  },
  {
    de: 'Sie sind auch anstrengend, hm?',
    es: 'Usted es también agotador, ¿hm?',
  },
  {
    de: 'Nein, ich nicht.',
    es: 'No, yo no.',
  },
  {
    de: 'Kommunikation ist anstrengend.',
    es: 'Comunicación es agotadora.',
  },
  {
    de: 'Weil sie nicht funktioniert.',
    es: 'Porque ella no funciona.',
  },
  {
    de: 'Wie?',
    es: '¿Cómo?',
  },
  {
    de: 'Sehen Sie?',
    es: '¿Ve usted?',
  },
  {
    de: 'Nee.',
    es: 'No.',
  },
  {
    de: 'Dass sie nicht funktioniert.',
    es: 'Que ella no funciona.',
  },
  {
    de: 'Verstehe ich nicht.',
    es: 'Entiendo yo no.',
  },
  {
    de: 'Jetzt haben Sie es verstanden.',
    es: 'Ahora ha usted ello entendido.',
  },
  {
    de: 'Sehen Sie, jedes Gehirn ist ein abgeschlossenes System.',
    es: 'Ve usted, cada cerebro es un cerrado sistema.',
  },
  {
    de: 'Ich spreche von einem Stuhl. Sie denken an einen Stuhl, ich denke an einen Stuhl.',
    es: 'Yo hablo de una silla. Usted piensa en una silla, yo pienso en una silla.',
  },
  {
    de: 'Aber der Stuhl in Ihren Gedanken sieht völlig anders aus als der in meinen Gedanken.',
    es: 'Pero la silla en sus pensamientos se ve completamente distinto que esa en mis pensamientos.',
  },
  {
    de: 'Also, mein Stuhl hat vier Beine, Ihrer nicht?',
    es: 'Así pues, mi silla tiene cuatro patas, ¿la suya no?',
  },
  {
    de: 'Ihr Stuhl ist wahrscheinlich ein gewöhnlicher Frankfurter.',
    es: 'Su silla es probablemente una corriente Frankfurter.',
  },
  {
    de: 'Meiner ist ein Thonet 16, Buchenholz, mit einer wunderschönen, altersbedingten Patina.',
    es: 'La mía es una Thonet 16, madera de haya, con una preciosa, condicionada por la edad pátina.',
  },
  {
    de: 'Aha.',
    es: 'Ajá.',
  },
  {
    de: 'Wir sprechen beide über einen Stuhl.',
    es: 'Nosotros hablamos ambos sobre una silla.',
  },
  {
    de: 'Und wir denken, wir sind einer Meinung.',
    es: 'Y nosotros pensamos, nosotros somos de una opinión.',
  },
  {
    de: 'Aber das ist gar nicht so.',
    es: 'Pero eso es en absoluto no así.',
  },
  {
    de: '"Verstehen" ist ein Missverständnis, das nicht auffällt.',
    es: '"Entender" es un malentendido, que no llama la atención.',
  },
  {
    de: 'Dann ist meine ganze Ehe ein Missverständnis gewesen.',
    es: 'Entonces es mi entero matrimonio un malentendido sido.',
  },
  {
    de: 'Sie leben getrennt?',
    es: '¿Usted vive separada?',
  },
  {
    de: 'Ja, das kann man so sagen.',
    es: 'Sí, eso puede uno así decir.',
  },
  {
    de: 'Sie wissen, wie das ist.',
    es: 'Usted sabe, cómo eso es.',
  },
  {
    de: 'Einige Dinge passen nicht zusammen.',
    es: 'Algunas cosas encajan no juntas.',
  },
  {
    de: 'Das ist wie ein Torx-Bit auf einer Kreuzschraube.',
    es: 'Eso es como una punta Torx sobre un tornillo de cruz.',
  },
  {
    de: 'Oder ein Beuys neben einem Warhol.',
    es: 'O un Beuys junto a un Warhol.',
  },
  {
    de: 'Oder so.',
    es: 'O así.',
  },
  {
    de: 'Sagen Sie...',
    es: 'Diga usted...',
  },
  {
    de: 'Haben Sie schon mal über eine Sondergarantie für das Gerät nachgedacht?',
    es: '¿Ha usted ya una vez sobre una garantía especial para el aparato reflexionado?',
  },
  {
    de: 'Was ist das für eine Party hier?',
    es: '¿Qué es eso para una fiesta aquí?',
  },
  {
    de: 'Kann ich einen Zug?',
    es: '¿Puedo yo una calada?',
  },
  {
    de: 'Sag mal, Michael, spinnst du?',
    es: 'Di una vez, Michael, ¿desvarías tú?',
  },
  {
    de: 'Ich bitte Sie.',
    es: 'Yo pido a usted.',
  },
  {
    de: 'Spaß.',
    es: 'Broma.',
  },
  {
    de: 'Das wird nix.',
    es: 'Eso deviene nada.',
  },
  {
    de: 'Ist Pfusch?',
    es: '¿Es chapuza?',
  },
  {
    de: 'Pfusch.',
    es: 'Chapuza.',
  },
  {
    de: 'Frage: Soll der Fernseher wirklich an diese Wand?',
    es: 'Pregunta: ¿Debe el televisor realmente a esta pared?',
  },
  {
    de: 'Sehen Sie hier irgendwo ein TV-Board?',
    es: '¿Ve usted aquí en algún sitio un mueble de televisión?',
  },
  {
    de: 'Nein.',
    es: 'No.',
  },
  {
    de: 'Ganz genau, weil die hässlich sind.',
    es: 'Totalmente exacto, porque esos feos son.',
  },
  {
    de: 'Und jetzt bohren Sie bitte.',
    es: 'Y ahora taladre usted por favor.',
  },
  {
    de: 'Die Wand ist Pfusch.',
    es: 'La pared es chapuza.',
  },
  {
    de: 'Die Wand hat ein Vermögen gekostet.',
    es: 'La pared ha una fortuna costado.',
  },
  {
    de: 'Mag sein, aber das ändert nicht.',
    es: 'Puede ser, pero eso cambia no.',
  },
  {
    de: 'Die Wand ist Pfusch, butterweich.',
    es: 'La pared es chapuza, blanda como mantequilla.',
  },
  {
    de: 'Der Fernseher kommt an die Wand, Ende.',
    es: 'El televisor viene a la pared, fin.',
  },
  {
    de: 'Brauchen Sie einen Fernseher?',
    es: '¿Necesita usted un televisor?',
  },
  {
    de: 'Man kann heute doch alles...',
    es: 'Uno puede hoy pues todo...',
  },
  {
    de: 'Michael, natürlich braucht Frau Dr. Benning einen neuen Fernseher.',
    es: 'Michael, naturalmente necesita señora Dra. Benning un nuevo televisor.',
  },
  {
    de: 'Mit Sondergarantie.',
    es: 'Con garantía especial.',
  },
  {
    de: 'Ich dachte, Sie sind Profi.',
    es: 'Yo pensé, usted es profesional.',
  },
  {
    de: 'Ja, genau das bin ich auch, und als eben dieser sage ich Ihnen, diese Wand ist Pfusch.',
    es: 'Sí, exacto eso soy yo también, y como justamente este digo yo a usted, esta pared es chapuza.',
  },
  {
    de: 'Sind Sie ein Macher oder nicht?',
    es: '¿Es usted un hacedor o no?',
  },
  {
    de: 'Machen Sie doch endlich mal.',
    es: 'Haga usted pues finalmente una vez.',
  },
  {
    de: 'Ob ich ein Macher bin...',
    es: 'Si yo un hacedor soy...',
  },
  {
    de: 'Ja gut, dann mach mal.',
    es: 'Sí bien, entonces haz una vez.',
  },
  {
    de: 'Hier, nimm, mach das Ding an.',
    es: 'Aquí, toma, enciende la cosa.',
  },
  {
    de: 'Ob ich ein Macher bin...',
    es: 'Si yo un hacedor soy...',
  },
  {
    de: 'Mach das Ding an.',
    es: 'Enciende la cosa.',
  },
  {
    de: '[Bohrmaschine surrt]',
    es: '[taladradora zumba]',
  },
  {
    de: 'Du bist zu dicht.',
    es: 'Tú estás demasiado pegado.',
  },
  {
    de: 'Was?',
    es: '¿Qué?',
  },
  {
    de: 'Zu nah.',
    es: 'Demasiado cerca.',
  },
  {
    de: 'Wie bitte?',
    es: '¿Cómo por favor?',
  },
  {
    de: 'Du bist zu nah. Du bist zu nah.',
    es: 'Tú estás demasiado cerca. Tú estás demasiado cerca.',
  },
  {
    de: '[Staubsauger bläst]',
    es: '[aspirador sopla]',
  },
  {
    de: '[Gebläse klingt ab]',
    es: '[soplador se desvanece]',
  },
  {
    de: 'Es ist zu nah.',
    es: 'Ello está demasiado cerca.',
  },
  {
    de: 'Ja, ich habe es verstanden.',
    es: 'Sí, yo he ello entendido.',
  },
  {
    de: 'Natürlich. Männer in Ihrer Generation haben immer Probleme mit Nähe.',
    es: 'Naturalmente. Hombres en su generación tienen siempre problemas con cercanía.',
  },
  {
    de: 'Da sind die jüngeren schon viel weiter.',
    es: 'Ahí están los más jóvenes ya mucho más lejos.',
  },
  {
    de: 'Definitiv.',
    es: 'Definitivamente.',
  },
  {
    de: 'Habe ich nicht. Aber kommt er noch näher, ist er ein Zäpfchen.',
    es: 'Tengo yo no. Pero viene él todavía más cerca, es él un supositorio.',
  },
  {
    de: 'Okay, dann lass mich bohren.',
    es: 'Okay, entonces deja a mí taladrar.',
  },
  {
    de: 'Du? An deinem ersten Tag?',
    es: '¿Tú? ¿En tu primer día?',
  },
  {
    de: 'Ja, warum nicht?',
    es: 'Sí, ¿por qué no?',
  },
  {
    de: 'Ja, er sieht doch ziemlich stark aus.',
    es: 'Sí, él se ve pues bastante fuerte.',
  },
  {
    de: 'Danke.',
    es: 'Gracias.',
  },
  {
    de: 'Er? Ja, gut.',
    es: '¿Él? Sí, bien.',
  },
  {
    de: 'Aber da braucht man auch ein bisschen Erfahrung, und Köpfchen auch.',
    es: 'Pero ahí necesita uno también un poquito experiencia, y cabecita también.',
  },
  {
    de: 'Jetzt auf einmal braucht man Köpfchen?',
    es: '¿Ahora de una vez necesita uno cabecita?',
  },
  {
    de: 'Leute, das hier ist eine eins a butterweiche Pseudo-Pfuschwand, okay?',
    es: 'Gente, eso aquí es una uno a blanda como mantequilla pseudopared de chapuza, ¿okay?',
  },
  {
    de: 'Und das hier, dieses Baby, hat eine Leerlaufschlagzahl von 4500 Umdrehungen.',
    es: 'Y eso aquí, este bebé, tiene un número de golpes en vacío de 4500 revoluciones.',
  },
  {
    de: 'Muss ich mehr sagen?',
    es: '¿Debo yo más decir?',
  },
  {
    de: 'Das Gehirn lernt nur, wenn man sich aus seiner Komfortzone herausbegibt.',
    es: 'El cerebro aprende solo, si uno se de su zona de confort sale.',
  },
  {
    de: 'Frau Dr. Benning.',
    es: 'Señora Dra. Benning.',
  },
  {
    de: 'Es ist doch so: Im Leben gibt es Bohrer, und es gibt Sauger.',
    es: 'Ello es pues así: En la vida da ello taladros, y ello da aspiradores.',
  },
  {
    de: 'Und das ist auch gut so, weil sonst gibt es Chaos in der Welt.',
    es: 'Y eso es también bueno así, porque si no da ello caos en el mundo.',
  },
  {
    de: 'Man bohrt oder saugt.',
    es: 'Uno taladra o aspira.',
  },
  {
    de: 'So hat jeder seinen Platz.',
    es: 'Así tiene cada uno su sitio.',
  },
  {
    de: 'Dieser junge Mann ist definitiv ein Sauger.',
    es: 'Este joven hombre es definitivamente un aspirador.',
  },
  {
    de: 'Äh, ich bin was?',
    es: 'Eh, ¿yo soy qué?',
  },
  {
    de: 'Du bist ein Sauger.',
    es: 'Tú eres un aspirador.',
  },
  {
    de: 'Und was bin ich?',
    es: '¿Y qué soy yo?',
  },
  {
    de: 'Anstrengend.',
    es: 'Agotadora.',
  },
  {
    de: 'Nein, Sauger oder Bohrer?',
    es: 'No, ¿aspirador o taladro?',
  },
  {
    de: 'Hm?',
    es: '¿Hm?',
  },
  {
    de: 'Sie sind...',
    es: 'Usted es...',
  },
  {
    de: 'Sie sind...',
    es: 'Usted es...',
  },
  {
    de: 'Hm?',
    es: '¿Hm?',
  },
  {
    de: 'Sie sind ein Bohrer.',
    es: 'Usted es un taladro.',
  },
  {
    de: 'Ha!',
    es: '¡Ja!',
  },
  {
    de: 'Sie? Und warum ich nicht?',
    es: '¿Ella? ¿Y por qué yo no?',
  },
  {
    de: 'Du willst doch gar nicht bohren.',
    es: 'Tú quieres pues en absoluto no taladrar.',
  },
  {
    de: 'Woher willst du denn wissen, was ich will?',
    es: '¿De dónde quieres tú entonces saber, qué yo quiero?',
  },
  {
    de: 'Weil ich dein Vater bin.',
    es: 'Porque yo tu padre soy.',
  },
  {
    de: 'Wie heißt meine Freundin?',
    es: '¿Cómo se llama mi novia?',
  },
  {
    de: 'Du hast eine Freundin?',
    es: '¿Tú tienes una novia?',
  },
  {
    de: 'Das ist nichts Ernstes, oder?',
    es: 'Eso es nada serio, ¿o?',
  },
  {
    de: 'Du weißt nichts über mich.',
    es: 'Tú sabes nada sobre mí.',
  },
  {
    de: 'Du stehst auf Frauen?',
    es: '¿Tú estás sobre mujeres?',
  },
  {
    de: 'Hä?',
    es: '¿Eh?',
  },
  {
    de: 'Hä?',
    es: '¿Eh?',
  },
  {
    de: 'Ich dachte nur, wegen den Fingernägeln und so.',
    es: 'Yo pensé solo, por las uñas y así.',
  },
  {
    de: 'Ich bin da total offen, wirklich.',
    es: 'Yo soy ahí totalmente abierto, realmente.',
  },
  {
    de: 'So offen nun auch nicht.',
    es: 'Así de abierto ahora también no.',
  },
  {
    de: 'Ich stehe auf Frauen, auch auf reifere.',
    es: 'Yo estoy sobre mujeres, también sobre más maduras.',
  },
  {
    de: 'Reifere?',
    es: '¿Más maduras?',
  },
  {
    de: 'Na ja.',
    es: 'Bueno sí.',
  },
  {
    de: 'Warte mal, du denkst, ich bin schwul?',
    es: 'Espera una vez, ¿tú piensas, yo soy gay?',
  },
  {
    de: 'Der ist doch nicht schwul.',
    es: 'Ese es pues no gay.',
  },
  {
    de: 'Du bist nicht schwul, oder?',
    es: 'Tú eres no gay, ¿o?',
  },
  {
    de: 'Nee, ich bin nicht schwul.',
    es: 'No, yo soy no gay.',
  },
  {
    de: 'Aber bi vielleicht.',
    es: 'Pero bi quizás.',
  },
  {
    de: 'Ist das dein Ernst jetzt?',
    es: '¿Es eso tu seriedad ahora?',
  },
  {
    de: 'Ich habe ja nix gegen Schwule.',
    es: 'Yo tengo sí nada contra gais.',
  },
  {
    de: 'Ich mag Schwule, auch als Menschen.',
    es: 'Yo aprecio gais, también como humanos.',
  },
  {
    de: 'Kommst du eigentlich klar?',
    es: '¿Vienes tú en realidad claro?',
  },
  {
    de: 'Okay, Moment.',
    es: 'Okay, momento.',
  },
  {
    de: 'Jetzt lassen Sie mal Ihren nichtschwulen, sehr knackigen Sohn, der auch Frauen um die 30 eine Chance geben sollte, in Ruhe bohren.',
    es: 'Ahora deje usted una vez a su no gay, muy crujiente hijo, que también a mujeres alrededor de los 30 una oportunidad dar debería, en paz taladrar.',
  },
  {
    de: '"Um die 30"?',
    es: '¿"Alrededor de los 30"?',
  },
  {
    de: 'Ganz genau.',
    es: 'Totalmente exacto.',
  },
  {
    de: 'Na gut, auf Ihre Verantwortung.',
    es: 'Bueno bien, sobre su responsabilidad.',
  },
  {
    de: 'Dann nimm das Ding, Michael.',
    es: 'Entonces toma la cosa, Michael.',
  },
  {
    de: 'Ja, danke.',
    es: 'Sí, gracias.',
  },
  {
    de: 'Okay, ich glaube an dich, Michael.',
    es: 'Okay, yo creo en ti, Michael.',
  },
  {
    de: 'Mika.',
    es: 'Mika.',
  },
  {
    de: 'Was auch immer.',
    es: 'Qué también siempre.',
  },
  {
    de: 'Gib Druck.',
    es: 'Da presión.',
  },
  {
    de: '[sie schreit auf]',
    es: '[ella grita de golpe]',
  },
  {
    de: 'Schöne Badewanne.',
    es: 'Bonita bañera.',
  },
  {
    de: 'Das ist kein Loch, das ist ein Krater.',
    es: 'Eso es ningún agujero, eso es un cráter.',
  },
  {
    de: 'Ich sauge das mal schnell weg.',
    es: 'Yo aspiro eso una vez rápido fuera.',
  },
  {
    de: 'Ich sagte doch, die Wand ist Pfusch.',
    es: 'Yo dije pues, la pared es chapuza.',
  },
  {
    de: 'Die Wand ist von einem Stararchitekten.',
    es: 'La pared es de un arquitecto estrella.',
  },
  {
    de: 'Ja, aber Sie haben ihn bohren lassen, als Sauger.',
    es: 'Sí, pero usted ha a él taladrar dejado, como aspirador.',
  },
  {
    de: 'Er sollte kleine Löcher bohren, nicht die Wand sprengen.',
    es: 'Él debía pequeños agujeros taladrar, no la pared volar.',
  },
  {
    de: 'Wie war das mit der Kommunikation, die nicht funktioniert?',
    es: '¿Cómo era eso con la comunicación, que no funciona?',
  },
  {
    de: 'Wenn Sie an ein Loch denken und er an ein Loch denkt, dann was? Da.',
    es: 'Si usted en un agujero piensa y él en un agujero piensa, ¿entonces qué? Ahí.',
  },
  {
    de: 'Aber vielleicht probieren wir es dann doch mal mit einem TV-Board?',
    es: '¿Pero quizás probamos nosotros ello entonces pues una vez con un mueble de televisión?',
  },
  {
    de: 'Im Baumarkt gibt es wunderschöne.',
    es: 'En la tienda de bricolaje da ello preciosos.',
  },
  {
    de: 'Im Baumarkt?',
    es: '¿En la tienda de bricolaje?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Oh, was mache ich denn jetzt?',
    es: 'Oh, ¿qué hago yo entonces ahora?',
  },
  {
    de: 'Es ist...',
    es: 'Ello es...',
  },
  {
    de: 'Sie haben doch gesagt, Sie brauchen viel Luft, oder?',
    es: 'Usted ha pues dicho, usted necesita mucho aire, ¿o?',
  },
  {
    de: 'Also vielleicht... Vielleicht können Sie die Wand auch einfach rausnehmen?',
    es: 'Así pues quizás... ¿Quizás puede usted la pared también simplemente sacar?',
  },
  {
    de: 'Entschuldigung, wie soll denn das aussehen? Das sieht doch...',
    es: 'Disculpa, ¿cómo debe entonces eso verse? Eso se ve pues...',
  },
  {
    de: 'Michael, schön aus dem Kreuz.',
    es: 'Michael, bonito desde los riñones.',
  },
  {
    de: 'Hopp.',
    es: 'Hop.',
  },
  {
    de: 'Ha! Nicht tragend.',
    es: '¡Ja! No portante.',
  },
  {
    de: 'So, jetzt kann er erst mal nicht mehr runterfallen.',
    es: 'Así, ahora puede él primero una vez no más caer abajo.',
  },
  {
    de: 'Aber nicht den Kamin anmachen, sonst wird das Ding zu heiß.',
    es: 'Pero no la chimenea encender, si no deviene la cosa demasiado caliente.',
  },
  {
    de: 'Und mein Innenarchitekt springt schreiend aus dem Fenster.',
    es: 'Y mi interiorista salta gritando de la ventana.',
  },
  {
    de: 'Ihre Probleme möchte ich haben.',
    es: 'Sus problemas querría yo tener.',
  },
  {
    de: 'Das möchten Sie nicht.',
    es: 'Eso querría usted no.',
  },
  {
    de: 'Ach, Frau Dr.',
    es: 'Ah, señora Dra.',
  },
  {
    de: 'Mein Vater hat immer gesagt, bei kleinen Problemen hilft der Fachmann.',
    es: 'Mi padre ha siempre dicho, en pequeños problemas ayuda el experto.',
  },
  {
    de: 'Bei großen Problemen hilft der Flachmann.',
    es: 'En grandes problemas ayuda la petaca.',
  },
  {
    de: 'Äh... Oh.',
    es: 'Eh... Oh.',
  },
  {
    de: 'Oh, oh, das hätte ich nicht gemacht.',
    es: 'Oh, oh, eso hubiera yo no hecho.',
  },
  {
    de: 'Der ist gut, wa?',
    es: 'Ese es bueno, ¿qué?',
  },
  {
    de: '[sie schreit auf]',
    es: '[ella grita de golpe]',
  },
  {
    de: 'Ah, meine Augen.',
    es: 'Ah, mis ojos.',
  },
  {
    de: 'Das ist normal, geht gleich vorbei.',
    es: 'Eso es normal, pasa enseguida.',
  },
  {
    de: 'In Indien leiten sie damit Kuhgeburten ein.',
    es: 'En India inducen ellos con eso partos de vaca.',
  },
  {
    de: 'Haha. Das ist Wolfgangs Selbstgebrannter.',
    es: 'Jaja. Eso es de Wolfgang destilado casero.',
  },
  {
    de: 'Frau Dr., wie viele Finger sehen Sie?',
    es: 'Señora Dra., ¿cuántos dedos ve usted?',
  },
  {
    de: 'Vier.',
    es: 'Cuatro.',
  },
  {
    de: 'Sind es immer noch vier?',
    es: '¿Son ello siempre todavía cuatro?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Dann ist alles gut.',
    es: 'Entonces es todo bueno.',
  },
  {
    de: '[Stimmengewirr im TV]',
    es: '[barullo de voces en la televisión]',
  },
  {
    de: '[sie kreischt]',
    es: '[ella chilla]',
  },
  {
    de: 'Was jetzt?',
    es: '¿Qué ahora?',
  },
  {
    de: 'Wo ist Arte? Arte ist weg.',
    es: '¿Dónde está Arte? Arte está ido.',
  },
  {
    de: 'Hä?',
    es: '¿Eh?',
  },
  {
    de: 'Arte ist so ein Sender mit Anspruch.',
    es: 'Arte es así un canal con exigencia.',
  },
  {
    de: 'Kennst du eh nicht.',
    es: 'Conoces tú de todos modos no.',
  },
  {
    de: 'Lesen die da Bücher vor, oder wie?',
    es: '¿Leen en voz alta esos ahí libros, o cómo?',
  },
  {
    de: 'Nein, ist viel besser.',
    es: 'No, es mucho mejor.',
  },
  {
    de: 'Die reden über Bücher.',
    es: 'Esos hablan sobre libros.',
  },
  {
    de: 'Wollen die keine Zuschauer?',
    es: '¿Quieren esos ningunos espectadores?',
  },
  {
    de: 'Die sind anspruchsvoll, so wie ich.',
    es: 'Esos son exigentes, así como yo.',
  },
  {
    de: 'Sind Sie deshalb alleine?',
    es: '¿Está usted por eso sola?',
  },
  {
    de: 'Ein Ring knechtet. Das wusste Frodo schon.',
    es: 'Un anillo esclaviza. Eso sabía Frodo ya.',
  },
  {
    de: 'So was schauen Sie dann wieder?',
    es: '¿Así algo mira usted entonces otra vez?',
  },
  {
    de: 'Da gab\'s erst die Bücher, dann die Filme.',
    es: 'Ahí daba ello primero los libros, entonces las películas.',
  },
  {
    de: 'Nein.',
    es: 'No.',
  },
  {
    de: 'Ist das dein Ernst?',
    es: '¿Es eso tu seriedad?',
  },
  {
    de: 'So, Sender gefunden.',
    es: 'Así, canal encontrado.',
  },
  {
    de: 'Arte, auf Platz 993.',
    es: 'Arte, en sitio 993.',
  },
  {
    de: 'Genau, wo es hingehört. Bitte schön.',
    es: 'Exacto, donde ello pertenece. Por favor bonito.',
  },
  {
    de: 'Soll ich jetzt immer 992-mal drücken, bevor ich zu Arte komme?',
    es: '¿Debo yo ahora siempre 992 veces pulsar, antes de que yo a Arte venga?',
  },
  {
    de: 'Sie sind alleine, Sie haben Zeit.',
    es: 'Usted está sola, usted tiene tiempo.',
  },
  {
    de: 'Ich kann Ihnen Arte auf die Eins legen.',
    es: 'Yo puedo a usted Arte sobre el uno poner.',
  },
  {
    de: 'Das würdest du für mich tun?',
    es: '¿Eso harías tú para mí?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Das geht nicht.',
    es: 'Eso va no.',
  },
  {
    de: 'Wieso?',
    es: '¿Por qué?',
  },
  {
    de: 'ARD ist die Eins. Das heißt ja auch "Das Erste", nicht "Das Achte".',
    es: 'ARD es el uno. Eso se llama sí también "El Primero", no "El Octavo".',
  },
  {
    de: 'Bei mir Arte das Erste und 3sat das Zweite.',
    es: 'En mi casa Arte el primero y 3sat el segundo.',
  },
  {
    de: 'Darum sind Sie auch alleine.',
    es: 'Por eso está usted también sola.',
  },
  {
    de: 'Ich weiß auch, warum Sie es sind.',
    es: 'Yo sé también, por qué usted ello está.',
  },
  {
    de: 'Ah ja?',
    es: '¿Ah sí?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Ah ja?',
    es: '¿Ah sí?',
  },
  {
    de: 'Oh ja.',
    es: 'Oh sí.',
  },
  {
    de: 'Okay, also Arte auf die Eins, ja?',
    es: 'Okay, así pues Arte sobre el uno, ¿sí?',
  },
  {
    de: 'Gerne.',
    es: 'Con gusto.',
  },
  {
    de: 'Dann müssen Sie erst mal hier drei nach rechts.',
    es: 'Entonces debe usted primero una vez aquí tres a la derecha.',
  },
  {
    de: 'Und dann können Sie hier auf "Menü" klicken.',
    es: 'Y entonces puede usted aquí sobre "Menú" clicar.',
  },
  {
    de: '[sanfte Musik]',
    es: '[suave música]',
  },
  {
    de: 'Ja, gut.',
    es: 'Sí, bien.',
  },
  {
    de: 'Ich glaube, ich muss meinem Vater kurz helfen.',
    es: 'Yo creo, yo debo a mi padre brevemente ayudar.',
  },
  {
    de: 'Mhm.',
    es: 'Mhm.',
  },
  {
    de: 'Was machst du?',
    es: '¿Qué haces tú?',
  },
  {
    de: 'Sch.',
    es: 'Sch.',
  },
  {
    de: 'Was?',
    es: '¿Qué?',
  },
  {
    de: '[sanfte Musik läuft weiter]',
    es: '[suave música continúa]',
  },
  {
    de: 'Und?',
    es: '¿Y?',
  },
  {
    de: 'Was?',
    es: '¿Qué?',
  },
  {
    de: 'Merkst du?',
    es: '¿Notas tú?',
  },
  {
    de: 'Was denn?',
    es: '¿Qué entonces?',
  },
  {
    de: 'Hä, was willst du?',
    es: 'Eh, ¿qué quieres tú?',
  },
  {
    de: 'Die steht auf mich.',
    es: 'Esa está sobre mí.',
  },
  {
    de: 'Auf dich?',
    es: '¿Sobre ti?',
  },
  {
    de: 'Na klar. Hast du nicht gemerkt?',
    es: 'Bueno claro. ¿Has tú no notado?',
  },
  {
    de: 'Sie hat dich angeschrien, mehrmals.',
    es: 'Ella ha a ti gritado, varias veces.',
  },
  {
    de: 'Eben.',
    es: 'Justamente.',
  },
  {
    de: 'Und warum? Weil ich ihr wichtig bin.',
    es: '¿Y por qué? Porque yo a ella importante soy.',
  },
  {
    de: 'Einen toten Gaul schreist du nicht an, verstehst du?',
    es: 'A un muerto penco gritas tú no, ¿entiendes tú?',
  },
  {
    de: 'Nicht so wirklich.',
    es: 'No así realmente.',
  },
  {
    de: 'Das ist alles Taktik, okay?',
    es: 'Eso es todo táctica, ¿okay?',
  },
  {
    de: 'Frauen wollen geneckt werden.',
    es: 'Mujeres quieren chinchadas ser.',
  },
  {
    de: 'War schon als Kind so.',
    es: 'Era ya como niño así.',
  },
  {
    de: 'Also, die Frauen, die ich kenne, wollen eher respektiert werden.',
    es: 'Así pues, las mujeres, que yo conozco, quieren más bien respetadas ser.',
  },
  {
    de: 'Vertrau mir einfach mal.',
    es: 'Confía en mí simplemente una vez.',
  },
  {
    de: 'Ich habe auch Erfahrung.',
    es: 'Yo tengo también experiencia.',
  },
  {
    de: 'Du kannst noch was lernen.',
    es: 'Tú puedes todavía algo aprender.',
  },
  {
    de: 'Ja, bei Mama hat es ja nicht so funktioniert.',
    es: 'Sí, en mamá ha ello sí no así funcionado.',
  },
  {
    de: 'Äh...',
    es: 'Eh...',
  },
  {
    de: 'Puh, deine Mutter war nach dem dritten Date schon schwanger.',
    es: 'Uf, tu madre estaba después de la tercera cita ya embarazada.',
  },
  {
    de: 'Echt?',
    es: '¿De verdad?',
  },
  {
    de: 'Stell dir mal vor, wie das ist.',
    es: 'Imagínate una vez, cómo eso es.',
  },
  {
    de: 'Wenn du da auf einmal mit 24 stehst mit so einem kleinen Krakeeler auf dem Arm, hallo?',
    es: 'Si tú ahí de una vez con 24 estás con así un pequeño berreador sobre el brazo, ¿hola?',
  },
  {
    de: '24?',
    es: '¿24?',
  },
  {
    de: 'Mhm.',
    es: 'Mhm.',
  },
  {
    de: 'Krass, das ist so alt, wie ich jetzt bin.',
    es: 'Bestial, eso es así de viejo, como yo ahora soy.',
  },
  {
    de: 'Das...',
    es: 'Eso...',
  },
  {
    de: 'Das war...',
    es: 'Eso era...',
  },
  {
    de: 'Das ging halt wahnsinnig schnell alles damals, weißt du?',
    es: 'Eso fue sin más locamente rápido todo entonces, ¿sabes tú?',
  },
  {
    de: 'Das war wie... Wie im freien Fall.',
    es: 'Eso era como... Como en la libre caída.',
  },
  {
    de: 'Wenn du so fällst.',
    es: 'Cuando tú así caes.',
  },
  {
    de: 'Alles klar.',
    es: 'Todo claro.',
  },
  {
    de: 'So habe ich das nicht gemeint.',
    es: 'Así he yo eso no querido decir.',
  },
  {
    de: 'Das war auch schön.',
    es: 'Eso era también bonito.',
  },
  {
    de: 'Fallen ist ja auch wie Fliegen, ne? So.',
    es: 'Caer es sí también como volar, ¿no? Así.',
  },
  {
    de: 'Kurz bevor du aufschlägst.',
    es: 'Brevemente antes de que tú impactes.',
  },
  {
    de: 'Alles klar.',
    es: 'Todo claro.',
  },
  {
    de: 'Aber du lernst jetzt ja vom Meister höchstpersönlich.',
    es: 'Pero tú aprendes ahora sí del maestro en persona.',
  },
  {
    de: 'Was ist unser allerwichtigstes Ziel?',
    es: '¿Qué es nuestro el más importante de todos objetivo?',
  },
  {
    de: 'Och komm.',
    es: 'Oh ven.',
  },
  {
    de: 'Eine Sondergarantie verkaufen.',
    es: 'Una garantía especial vender.',
  },
  {
    de: 'So.',
    es: 'Así.',
  },
  {
    de: 'Ist alles in Ordnung?',
    es: '¿Es todo en orden?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Also, ich gehe jetzt gleich wieder rein und richte ihr die Sender ein.',
    es: 'Así pues, yo voy ahora enseguida otra vez adentro y configuro a ella los canales.',
  },
  {
    de: 'Dann wird sie mich lieben. Deshalb habe ich mich so gewehrt, verstehst du?',
    es: 'Entonces va ella a mí a amar. Por eso me he yo así defendido, ¿entiendes tú?',
  },
  {
    de: 'Nee, verstehe ich nicht so wirklich.',
    es: 'No, entiendo yo no así realmente.',
  },
  {
    de: 'Du fragst mich dann einfach: "Chef, was ist eigentlich..."',
    es: 'Tú preguntas a mí entonces simplemente: "Jefe, qué es en realidad..."',
  },
  {
    de: 'Ich sage nicht "Chef". Auf keinen Fall.',
    es: 'Yo digo no "Jefe". En ningún caso.',
  },
  {
    de: 'Ich bin ja der Chef.',
    es: 'Yo soy sí el jefe.',
  },
  {
    de: 'Ja, mache ich aber nicht.',
    es: 'Sí, hago yo pero no.',
  },
  {
    de: 'Ich habe dir den Job gegeben.',
    es: 'Yo he a ti el trabajo dado.',
  },
  {
    de: 'Hä?',
    es: '¿Eh?',
  },
  {
    de: 'Du hast mir den Job gegeben, weil du deinen Führerschein verloren hast und einen Fahrer brauchst.',
    es: 'Tú has a mí el trabajo dado, porque tú tu carné de conducir perdido has y un conductor necesitas.',
  },
  {
    de: 'Sind Sie jetzt fertig?',
    es: '¿Está usted ahora listo?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Gleich.',
    es: 'Enseguida.',
  },
  {
    de: 'Egal, du sagst: "Was ist eigentlich, wenn der Fernseher umfällt?"',
    es: 'Igual, tú dices: "¿Qué es en realidad, si el televisor se cae?"',
  },
  {
    de: 'Umfällt?',
    es: '¿Se cae?',
  },
  {
    de: 'Umfällt.',
    es: 'Se cae.',
  },
  {
    de: 'Was ist das für eine beschissene Idee?',
    es: '¿Qué es eso para una de mierda idea?',
  },
  {
    de: '[TV-Sprecher spricht undeutlich]',
    es: '[locutor de televisión habla indistintamente]',
  },
  {
    de: 'So.',
    es: 'Así.',
  },
  {
    de: 'Also, wenn Sie wollen, könnte ich Ihnen Arte ganz fachmännisch auf die Eins legen.',
    es: 'Así pues, si usted quiere, podría yo a usted Arte totalmente como experto sobre el uno poner.',
  },
  {
    de: 'Ist schon passiert.',
    es: 'Es ya pasado.',
  },
  {
    de: '[Mika schnaubt leise]',
    es: '[Mika resopla bajito]',
  },
  {
    de: 'Wie jetzt?',
    es: '¿Cómo ahora?',
  },
  {
    de: 'Ganz einfach.',
    es: 'Totalmente sencillo.',
  },
  {
    de: 'Erst auf Rot, dann den Sender wählen, dann auf Gelb und auf den Programmplatz ziehen.',
    es: 'Primero sobre rojo, entonces el canal elegir, entonces sobre amarillo y sobre el sitio de programa arrastrar.',
  },
  {
    de: 'Bäm. Komfortzone.',
    es: 'Bam. Zona de confort.',
  },
  {
    de: 'Ja. Klar.',
    es: 'Sí. Claro.',
  },
  {
    de: 'Jetzt?',
    es: '¿Ahora?',
  },
  {
    de: 'Äh, ja, ich... habe mich nur gefragt...',
    es: 'Eh, sí, yo... me he solo preguntado...',
  },
  {
    de: 'Was hast du dich denn gefragt, Michael?',
    es: '¿Qué te has tú entonces preguntado, Michael?',
  },
  {
    de: 'Ja, was ist eigentlich, wenn der Fernseher mal... umfällt?',
    es: 'Sí, ¿qué es en realidad, si el televisor una vez... se cae?',
  },
  {
    de: 'Umfällt?',
    es: '¿Se cae?',
  },
  {
    de: 'Umfällt.',
    es: 'Se cae.',
  },
  {
    de: 'Haben Sie einen Fehler gemacht?',
    es: '¿Ha usted un error hecho?',
  },
  {
    de: 'Haben Sie gepfuscht?',
    es: '¿Ha usted chapuceado?',
  },
  {
    de: 'Gott bewahre, nein.',
    es: 'Dios guarde, no.',
  },
  {
    de: 'Auf keinen Fall, nur...',
    es: 'En ningún caso, solo...',
  },
  {
    de: 'Was er meinte, rein angenommen, wenn jetzt zum Beispiel, sagen wir mal, eine Katze jetzt ganz frech hier einfach durchs Fenster rein und dann, zack, das Ding umwerfen würde...',
    es: 'Lo que él quería decir, puramente supuesto, si ahora por ejemplo, digamos nosotros una vez, una gata ahora totalmente descarada aquí simplemente por la ventana adentro y entonces, zas, la cosa derribar haría...',
  },
  {
    de: 'Eine Katze?',
    es: '¿Una gata?',
  },
  {
    de: 'Das ist alles schon vorgekommen.',
    es: 'Eso es todo ya ocurrido.',
  },
  {
    de: 'Hier, im Dachgeschoss?',
    es: '¿Aquí, en la planta de tejado?',
  },
  {
    de: 'Die klettern wie die Weltmeister.',
    es: 'Esas trepan como los campeones del mundo.',
  },
  {
    de: 'Ja, oder vielleicht eine Taube.',
    es: 'Sí, o quizás una paloma.',
  },
  {
    de: 'Taube ist gut.',
    es: 'Paloma es bueno.',
  },
  {
    de: 'Die fliegt dann hier durchs Fenster ganz frech hier rein und fliegt voll gegen den Fernseher.',
    es: 'Esa vuela entonces aquí por la ventana totalmente descarada aquí adentro y vuela lleno contra el televisor.',
  },
  {
    de: 'Zack, rein.',
    es: 'Zas, adentro.',
  },
  {
    de: 'Sind Sie fertig mit dem Aufbau?',
    es: '¿Está usted listo con el montaje?',
  },
  {
    de: 'Fertig?',
    es: '¿Listo?',
  },
  {
    de: 'Mit dem Aufbau.',
    es: 'Con el montaje.',
  },
  {
    de: 'Mit dem Aufbau.',
    es: 'Con el montaje.',
  },
  {
    de: 'Mit dem Aufbau sind wir fertig.',
    es: 'Con el montaje estamos nosotros listos.',
  },
  {
    de: 'Dann packe ich schon mal meinen Kram.',
    es: 'Entonces empaqueto yo ya una vez mis trastos.',
  },
  {
    de: 'Schöne Bücher sind das.',
    es: 'Bonitos libros son eso.',
  },
  {
    de: 'Noch mal wegen so einer Sondergarantie.',
    es: 'Todavía una vez por así una garantía especial.',
  },
  {
    de: 'Das ist schon eigentlich ganz schlau.',
    es: 'Eso es ya en realidad totalmente astuto.',
  },
  {
    de: 'Weil wenn der Fernseher, sagen wir jetzt mal in ein paar Wochen, einfach so, also versehentlich, ganz von selbst umfällt...',
    es: 'Porque si el televisor, digamos nosotros ahora una vez en un par semanas, simplemente así, así pues sin querer, totalmente de sí mismo se cae...',
  },
  {
    de: 'Versehentlich?',
    es: '¿Sin querer?',
  },
  {
    de: 'Ja, ja, ja, versehentlich.',
    es: 'Sí, sí, sí, sin querer.',
  },
  {
    de: 'Also, ich meine, das kann ja passieren, ne?',
    es: 'Así pues, yo quiero decir, eso puede sí pasar, ¿no?',
  },
  {
    de: 'Und dann zahlt nämlich die Versicherung trotzdem den vollen Betrag.',
    es: 'Y entonces paga es decir el seguro a pesar de ello el lleno importe.',
  },
  {
    de: 'Und in ein paar Wochen, wissen Sie ja, kriegen Sie ja für das gleiche Geld schon wieder einen viel größeren Fernseher.',
    es: 'Y en un par semanas, sabe usted sí, obtiene usted sí por el mismo dinero ya otra vez un mucho más grande televisor.',
  },
  {
    de: 'Das geht ja alles ratzfatz, zack, zack.',
    es: 'Eso va sí todo en un plis plas, zas, zas.',
  },
  {
    de: 'Hier in unserer kapitalistischen Welt, wo jeden Tag größer und absurder...',
    es: 'Aquí en nuestro capitalista mundo, donde cada día más grande y más absurdo...',
  },
  {
    de: 'Nee, nicht absurder. Besser.',
    es: 'No, no más absurdo. Mejor.',
  },
  {
    de: '...besser wird.',
    es: '...mejor deviene.',
  },
  {
    de: 'Das ist schon schlau.',
    es: 'Eso es ya astuto.',
  },
  {
    de: 'Größer?',
    es: '¿Más grande?',
  },
  {
    de: 'Für eine größere Wand?',
    es: '¿Para una más grande pared?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Äh, hier, übrigens.',
    es: 'Eh, aquí, por cierto.',
  },
  {
    de: 'Unglaublich. Das ist...',
    es: 'Increíble. Eso es...',
  },
  {
    de: 'Die einen reden, die anderen machen, ne?',
    es: 'Los unos hablan, los otros hacen, ¿no?',
  },
  {
    de: '[abfallender Brummton]',
    es: '[descendente tono grave]',
  },
  {
    de: 'Ach du Scheiße.',
    es: 'Ah tú mierda.',
  },
  {
    de: 'Bierchen?',
    es: '¿Cervecita?',
  },
  {
    de: 'Du trinkst Bier?',
    es: '¿Tú bebes cerveza?',
  },
  {
    de: 'Ja, safe.',
    es: 'Sí, safe.',
  },
  {
    de: 'Ach so, wegen München und so...',
    es: 'Ah así, por Múnich y así...',
  },
  {
    de: 'Ey, ich hasse München, ne? Immer schon.',
    es: 'Ey, yo odio Múnich, ¿no? Siempre ya.',
  },
  {
    de: 'Wirklich?',
    es: '¿Realmente?',
  },
  {
    de: 'Ja.',
    es: 'Sí.',
  },
  {
    de: 'Bayern auch?',
    es: '¿Baviera también?',
  },
  {
    de: 'Hä? München ist in Bayern.',
    es: '¿Eh? Múnich está en Baviera.',
  },
  {
    de: 'Ich meinte den Klub.',
    es: 'Yo quería decir el club.',
  },
  {
    de: 'Ich bin wirklich nach einem Rennfahrer benannt?',
    es: '¿Yo soy realmente según un piloto de carreras nombrado?',
  },
  {
    de: 'Wenn Sie mehr über Ihre Lieferung erfahren wollen, sagen Sie "drei".',
    es: 'Si usted más sobre su entrega enterarse quiere, diga usted "tres".',
  },
  {
    de: 'Drei.',
    es: 'Tres.',
  },
  {
    de: 'Ich habe Sie nicht verstanden.',
    es: 'Yo he a usted no entendido.',
  },
  {
    de: 'Drei.',
    es: 'Tres.',
  },
  {
    de: 'Zwei.',
    es: 'Dos.',
  },
  {
    de: 'Sie möchten die Lieferung stornieren.',
    es: 'Usted querría la entrega anular.',
  },
  {
    de: 'Abbruch. Abbruch.',
    es: 'Interrupción. Interrupción.',
  },
  {
    de: 'Sie werden mit dem nächsten Mitarbeiter verbunden. Bitte warten Sie.',
    es: 'Usted es con el siguiente empleado conectado. Por favor espere usted.',
  },
  {
    de: 'Nicht schon wieder diese Warteschleife.',
    es: 'No ya otra vez esta cola de espera.',
  },
  {
    de: 'Bitte warten Sie.',
    es: 'Por favor espere usted.',
  },
  {
    de: '[seichte Warteschleifenmusik]',
    es: '[superficial música de cola de espera]',
  },
  {
    de: 'Bitte warten Sie.',
    es: 'Por favor espere usted.',
  },
  {
    de: 'Bitte warten...',
    es: 'Por favor esperar...',
  },
  {
    de: 'Das ist Folter!',
    es: '¡Eso es tortura!',
  },
  {
    de: 'Und das ist laut UN-Resolution 217a vom 10.12.48 verboten!',
    es: '¡Y eso es según resolución de la ONU 217a del 10.12.48 prohibido!',
  },
  {
    de: 'Verboten!',
    es: '¡Prohibido!',
  },
  {
    de: 'Bitte warten Sie.',
    es: 'Por favor espere usted.',
  },
  {
    de: 'Aber spätestens bei der Lieferung werde ich einen von euch erwischen.',
    es: 'Pero a más tardar en la entrega voy yo a uno de vosotros a pillar.',
  },
  {
    de: '[gurgelndes Knurren]',
    es: '[gorgoteante gruñido]',
  },
  {
    de: 'Nicht wahr, Hektor?',
    es: '¿No verdad, Hektor?',
  },
  {
    de: '[er knurrt]',
    es: '[él gruñe]',
  },
  {
    de: '[coole Rock-Pop-Musik]',
    es: '[molona música rock-pop]',
  },
]
