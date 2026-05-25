// ============================================================
// RECEPTEN.JS — Voeg hier al jouw recepten toe!
// ============================================================
//
// Elk recept heeft deze velden:
//   id         : unieke naam, zelfde als de bestandsnaam in /recepten/
//   titel      : naam van het recept
//   emoji      : emoji als je geen foto hebt
//   foto       : pad naar foto (bijv. "images/pasta.jpg") of null
//   beschrijving: korte omschrijving (1-2 zinnen)
//   type       : "ontbijt" | "lunch" | "avondeten" | "dessert" | "snack"
//   dieet      : array, bijv. ["vegetarisch"] of ["vegan","glutenvrij"] of []
//   tijd       : "snel" (<30min) | "medium" (30-60min) | "lang" (>60min)
//   tijdLabel  : leesbaar, bijv. "25 min"
//   porties    : standaard aantal personen
//   ingredienten: array van { naam, hoeveelheid, eenheid }
//                 hoeveelheid is PER PERSOON (wordt automatisch vermenigvuldigd)
//   stappen    : array van strings (elke stap = 1 string)
//   tips       : optionele tip/opmerking (string of null)
// ============================================================

const recepten = [
  {
    id: "spaghetti-bolognese",
    titel: "Spaghetti Bolognese",
    emoji: "🍝",
    foto: null,
    beschrijving: "Een klassieke Italiaanse bolognese met rijke tomatensaus en gehakt. Comfort food op zijn best.",
    type: "avondeten",
    dieet: [],
    tijd: "medium",
    tijdLabel: "45 min",
    porties: 4,
    ingredienten: [
      { naam: "Spaghetti",            hoeveelheid: 100, eenheid: "g" },
      { naam: "Rundergehakt",         hoeveelheid: 125, eenheid: "g" },
      { naam: "Gepelde tomaten",      hoeveelheid: 100, eenheid: "g" },
      { naam: "Ui",                   hoeveelheid: 0.5, eenheid: "stuk" },
      { naam: "Knoflook",             hoeveelheid: 1,   eenheid: "teen" },
      { naam: "Tomatenpuree",         hoeveelheid: 1,   eenheid: "el" },
      { naam: "Olijfolie",            hoeveelheid: 0.5, eenheid: "el" },
      { naam: "Italiaanse kruiden",   hoeveelheid: 0.5, eenheid: "tl" },
      { naam: "Parmezaan",            hoeveelheid: 15,  eenheid: "g" },
    ],
    stappen: [
      "Snipper de ui fijn en pers de knoflook. Verhit olijfolie in een ruime pan op middelhoog vuur.",
      "Fruit de ui 5 minuten glazig. Voeg de knoflook toe en bak nog 1 minuut mee.",
      "Voeg het gehakt toe en bak rul. Breek eventuele klontjes op met een houten lepel.",
      "Roer de tomatenpuree erdoor en bak 2 minuten mee op hoog vuur.",
      "Voeg de gepelde tomaten toe, plet ze grof. Breng op smaak met Italiaanse kruiden, peper en zout.",
      "Laat de saus 20–25 minuten zachtjes pruttelen op laag vuur. Roer af en toe.",
      "Kook intussen de spaghetti gaar volgens de verpakking. Giet af en bewaar een scheut kookwater.",
      "Meng de spaghetti door de saus. Voeg een scheutje kookwater toe als de saus te droog is.",
      "Serveer met versgeraspte parmezaan."
    ],
    tips: "De saus wordt nóg lekkerder als je hem 's ochtends maakt en 's avonds opwarmt. Voeg een scheutje rode wijn toe bij stap 4 voor extra diepte."
  },
  {
    id: "avocado-toast",
    titel: "Avocado Toast",
    emoji: "🥑",
    foto: null,
    beschrijving: "Knapperig zuurdesembrood met smeuïge avocado, citroen en chilivlokken. Klaar in 10 minuten.",
    type: "ontbijt",
    dieet: ["vegetarisch", "vegan"],
    tijd: "snel",
    tijdLabel: "10 min",
    porties: 2,
    ingredienten: [
      { naam: "Snee zuurdesembrood", hoeveelheid: 1,   eenheid: "stuk" },
      { naam: "Avocado",             hoeveelheid: 0.5, eenheid: "stuk" },
      { naam: "Citroensap",          hoeveelheid: 0.5, eenheid: "el" },
      { naam: "Chilivlokken",        hoeveelheid: 1,   eenheid: "snufje" },
      { naam: "Zeezoutvlokken",      hoeveelheid: 1,   eenheid: "snufje" },
      { naam: "Olijfolie",           hoeveelheid: 0.5, eenheid: "tl" },
    ],
    stappen: [
      "Rooster het brood in de broodrooster of in een droge koekenpan tot goudbruin en krokant.",
      "Halveer de avocado, verwijder de pit en schep het vruchtvlees in een kom.",
      "Plet de avocado met een vork. Voeg citroensap, een snufje zout en peper toe. Meng goed.",
      "Smeer het avocadomengsel royaal op het geroosterde brood.",
      "Bestrooi met chilivlokken, zeezoutvlokken en een drupje olijfolie."
    ],
    tips: "Lekker met een gepocheerd eitje bovenop, of wat radijsschijfjes voor een frisse bite."
  },
  {
    id: "pompoensoep",
    titel: "Romige Pompoensoep",
    emoji: "🎃",
    foto: null,
    beschrijving: "Fluweelzachte soep van geroosterde pompoen met kokosmelk en gember. Warm en troostend.",
    type: "lunch",
    dieet: ["vegetarisch", "vegan", "glutenvrij"],
    tijd: "medium",
    tijdLabel: "50 min",
    porties: 4,
    ingredienten: [
      { naam: "Butternut pompoen",  hoeveelheid: 250,  eenheid: "g" },
      { naam: "Kokosmelk",          hoeveelheid: 60,   eenheid: "ml" },
      { naam: "Groentebouillon",    hoeveelheid: 200,  eenheid: "ml" },
      { naam: "Ui",                 hoeveelheid: 0.5,  eenheid: "stuk" },
      { naam: "Verse gember",       hoeveelheid: 0.5,  eenheid: "cm" },
      { naam: "Knoflook",           hoeveelheid: 1,    eenheid: "teen" },
      { naam: "Kurkuma",            hoeveelheid: 0.25, eenheid: "tl" },
      { naam: "Kokosnolie",         hoeveelheid: 0.5,  eenheid: "el" },
    ],
    stappen: [
      "Verwarm de oven voor op 200°C. Schil de pompoen, snijd in blokken van ca. 3 cm.",
      "Verdeel de pompoenblokken op een bakplaat, besprenkel met olijfolie en een snufje zout. Rooster 25 minuten tot zacht en licht gekaramelliseerd.",
      "Verhit intussen kokosnolie in een soeppan. Fruit de gesnipperde ui 5 minuten zacht.",
      "Voeg knoflook en geraspte gember toe, bak 2 minuten. Roer kurkuma erdoor.",
      "Voeg de geroosterde pompoen en bouillon toe. Breng aan de kook en laat 10 minuten sudderen.",
      "Mix de soep glad met een staafmixer. Voeg de kokosmelk toe en verwarm zachtjes.",
      "Proef en breng op smaak met zout, peper en eventueel een scheutje citroensap.",
      "Serveer met een swirl kokosmelk en wat geroosterde pompoenpitten."
    ],
    tips: "Je kan de pompoen een dag van tevoren roosteren. De soep is ook heerlijk ingevroren."
  },
  {
    id: "chocolade-brownie",
    titel: "Chocolade Brownies",
    emoji: "🍫",
    foto: null,
    beschrijving: "Smeuïge, fudgy brownies met een knapperig korstje. Het perfecte chocoladedessert.",
    type: "dessert",
    dieet: ["vegetarisch"],
    tijd: "medium",
    tijdLabel: "40 min",
    porties: 12,
    ingredienten: [
      { naam: "Pure chocolade (70%)", hoeveelheid: 15,   eenheid: "g" },
      { naam: "Boter",                hoeveelheid: 12,   eenheid: "g" },
      { naam: "Suiker",               hoeveelheid: 14,   eenheid: "g" },
      { naam: "Ei",                   hoeveelheid: 0.25, eenheid: "stuk" },
      { naam: "Bloem",                hoeveelheid: 7,    eenheid: "g" },
      { naam: "Cacaopoeder",          hoeveelheid: 3,    eenheid: "g" },
      { naam: "Snufje zout",          hoeveelheid: 1,    eenheid: "snufje" },
    ],
    stappen: [
      "Verwarm de oven voor op 175°C. Bekleed een vierkante bakvorm (20×20 cm) met bakpapier.",
      "Smelt de chocolade en boter au bain-marie of in de magnetron (30 seconden tegelijk). Laat iets afkoelen.",
      "Klop de eieren met de suiker 3–4 minuten luchtig met een mixer.",
      "Roer het chocolademengsel door het eiermengsel.",
      "Zeef bloem, cacao en zout boven het beslag. Spatel voorzichtig onder — niet te lang roeren!",
      "Giet in de bakvorm en bak 22–25 minuten. De bovenkant moet droog zijn maar het midden mag nog iets trillen.",
      "Laat volledig afkoelen in de vorm voordat je snijdt — dit is cruciaal voor fudgy brownies!"
    ],
    tips: "Voor extra fudgy brownies haal je ze 2 minuten vroeger uit de oven. Bewaar afgedekt op kamertemperatuur, ze worden de tweede dag nóg lekkerder."
  },
];
