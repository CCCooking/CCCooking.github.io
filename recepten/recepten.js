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
    emoji: "🍝",
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
];
