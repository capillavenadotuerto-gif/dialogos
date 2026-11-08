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
    de: 'Kannst du mich so nennen?',
    es: '¿Puedes tú a mí así llamar?',
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
]
