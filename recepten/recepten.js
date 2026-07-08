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
    id: "Ragumettagliatelle",
    titel: "Ragu met tagliatelle",
    foto: "images/ragu.png",
    beschrijving: "Een Italiaanse stoofpot met spiering, pancetta, witte wijn en selder",
    type: "avondeten",
    dieet: [],
    tijd: "lang",
    tijdLabel: "2u30min",
    porties: 4,
    ingredienten: [
      { naam: "Spiering",             hoeveelheid: 200, eenheid: "g" },
      { naam: "Bloem",                hoeveelheid: 0.5, eenheid: "el" },
      { naam: "Pancetta",             hoeveelheid: 35, eenheid: "g" },
      { naam: "Ui",                   hoeveelheid: 0.5, eenheid: "stuk" },
      { naam: "Knoflook",             hoeveelheid: 0.75,   eenheid: "teen" },
      { naam: "Selder (Wit of groen)", hoeveelheid: 0.5, eenheid: "stuk"},
      { naam: "Wittewijn",            hoeveelheid: 0.625,   eenheid: "dl" },
      { naam: "Kippenbouillon",       hoeveelheid: 1, eenheid: "dl" },
      { naam: "Peterselie",           hoeveelheid: 0.25, eenheid: "potje" },
      { naam: "Parmezaan",            hoeveelheid: 25,  eenheid: "g" },
      { naam: "Tagliatelle",          hoeveelheid: 125,  eenheid: "g" },
    ],
    stappen: [
      "Laat de oven voorverwarmen tot 160 °C.",
      "Snijd de spiering in blokjes en kruid met peper en zout. Kleur het vlees in olijfolie en boter.",
      "Snijd de pancetta in blokjes en doe ze erbij. Schep het gebakken vlees daarna uit de pot.",
      "Snijd de uien, de selder en de look grof en stoof ze aan.",
      "Strooi wat bloem over de groenten en laat even stoven. Voeg het vlees terug toe.",
      "Schenk de witte wijn erbij en laat even inkoken. Voeg daarna de kippenbouillon toe.",
      "Kruid met peper en zout. Laat de pot 2u garen in de oven.",
      "Kook de tagliatelle in gezouten water gaar.",
      "Haal de pot uit de oven en meng de gekookte past mee in de pot",
      "serveer met parmezaan en peterselie."
    ],
    
  },
    {
    id: "Stoofvlees",
    titel: "Stoofvlees",
    foto: "images/stoofvlees.png",
    beschrijving: "Belgische stoofvlees met friet",
    type: "avondeten",
    dieet: [],
    tijd: "lang",
    tijdLabel: "3u",
    porties: 4,
    ingredienten: [
      { naam: "Stoofvlees (rundsvlees)",             hoeveelheid: 250, eenheid: "g" },
      { naam: "St bernardus abt 12",                hoeveelheid: 0.5, eenheid: "flesjes" },
      { naam: "Kruidentuiltje",             hoeveelheid: 0.25, eenheid: "stuk" },
      { naam: "Ui",                   hoeveelheid: 0.5, eenheid: "stuk" },
      { naam: "Kruidnagel",             hoeveelheid: 0.25,   eenheid: "stuk" },
      { naam: "Luikse appel-perenstroop", hoeveelheid: 0.5, eenheid: "el"},
      { naam: "Boterham",            hoeveelheid: 0.25,   eenheid: "stuk" },
      { naam: "Mosterd",       hoeveelheid: 0.5, eenheid: "el" },
    ],
    stappen: [
      "Snij de uien in stukken (moet niet fijn).",
      "Zet stoofpot op vuur met klontje boter en voeg de uien er aan toe (moeten niet bruin zien).",
      "Bak het vlees in aparte pan tot ze goudbruin zien. Tijdens het bakken kruiden met peper en zout.",
      "Doe de stukjes vlees in de stoofpot met uien.",
      "Hou de braadpan met aanbaksels bij en schenk daarin het bier. (even schuren aan onderkant pan zodat aanbaksels los komen).",
      "Zodra het bier kookt, giet je het in de stoofpot.",
      "Voeg het kruidentuiltje toe.",
      "Voeg de kruidnagel toe en de Loonse (of Luikse) appel-perenstroop.",
      "Smeer mosterd op de boterham. Leg de boterham in de pot, met de besmeerde zijde naar onder.",
      "Laat de stoofpot op een zachtvuur met deksel voor 2u30. Laatste halfuur deksel er af.",
      "Af en toe roeren.",

    ],
    
  },
    {
    id: "Macaronimetkaasenhesp",
    titel: "Macaroni met kaas en hesp",
    foto: "images/fotocomingsoon.png",
    beschrijving: "Snel gerecht doorheen de week. Vult goed",
    type: "avondeten",
    dieet: [],
    tijd: "snel",
    tijdLabel: "30min",
    porties: 4,
    ingredienten: [
      { naam: "Boter",             hoeveelheid: 21.25, eenheid: "g" },
      { naam: "Vloeiende bloem",                hoeveelheid: 16.67, eenheid: "g" },
      { naam: "Melk",             hoeveelheid: 0.2, eenheid: "l" },
      { naam: "Gekookte hesp",                   hoeveelheid: 2-4, eenheid: "sneedjes" },
      { naam: "macaroni",             hoeveelheid: 150,   eenheid: "g" },
      { naam: "Gruyère kaas",       hoeveelheid: 37.5, eenheid: "g" }
    ],
    stappen: [
      "Hesp in stukjes snijden (vierkant).",
      "Boter laten smelten in pot en van het vuur halen nadien.",
      "VLoeiende bloem toevoegen en goed roeren.",
      "Melk toevoegen en goed roeren.",
      "Verder de pot aan de kook brengen op zacht vuur al roerend.",
      "Water opzetten voor macaroni.",
      "Macaroni koken.",
      "Wanneer saus kookt van het vuur halen",
      "Gruyère toevoegen en goed roeren.",
      "Hesp toevoegen en goed roeren.",
      "Voeg nog een beetje nootmuskaat toe"
    ],
    
  },  
];
