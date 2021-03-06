// P5js function
const round = Math.round;
function random(min, max) {
  return Math.random() * (max - min) + min;
}


//SladderFakeNews
// Rasmus
class SladderFakeNews {
  constructor() {
    this.tag = 'Sladder';
    this.kendis = ["Bubber ", "Lars Løkke ", " Donald Trump ", "Søren Brostrøm ", "Peter Madsen ", "Knaldperlen ", "Morten Østergaard "]
    this.haendelse = ["slår op med ", "er forældrer til ", "bliver skilt med ", "stikker af med ", "lægger hånd på ", "skjulte sin affære med "]
    this.kendis2 = ["Mette Frederiksen ", "Caroline Wozniackis ", "Dronning Margrethes ", "Mads Mikkelsens ", "Mick Øgendahls ", "deres "]
    this.person = ["søster ", "barnebarn ", "tidligere partner ", "søn ", "bror ", "familie ", "bedste ven ", "forretningspartner ", "sugar daddy ", "barnepige "]


  }
  genererHeadline() {
    this.overskrift = "BREAKING: " + this.kendis[round(random(0, this.kendis.length - 1))] + this.haendelse[round(random(0, this.haendelse.length - 1))] + this.kendis2[round(random(0, this.kendis2.length - 1))] + this.person[round(random(0, this.person.length - 1))];
    return this.overskrift;
  }
}

// Erstat <Kategori> med den kategori i arbejder med
// For eksempel
// SladderFakeNews
// Tobias
class KlimaFakeNews {
  constructor() {
    this.tag = 'Klima';
  }
  genererHeadline() {
    const HOOKS = ['BREAKING:', 'NYT:', 'LÆS HER:', 'GODT AT VIDE:', 'KAN DET PASSE?', 'VIGTIGT:'];
    const INTROS = ['Kuldioxid', 'CO2', 'Brugen af fossile brændstoffer', 'Den globale opvarmning'];
    const MIDDLES = ['er', 'bliver ved med at være', 'skal nok blive', 'fortsætter med at være', 'stopper ikke med at være'];
    const OUTROS = ['slem', 'skrækkelig', 'alvorlig', 'utrolig', 'frygtelig', 'et stort problem', 'alt andet end pogchamp'];
    const ENDINGS = ['Og sådan er det.', '!!!', 'F', 'Og det er skidt', 'Buuhuu, livet er hårdt.', 'It really do be like that sometimes.']

    const HOOK = HOOKS[Math.floor(random(0, HOOKS.length))];
    const INTRO = INTROS[Math.floor(random(0, INTROS.length))];
    const MIDDLE = MIDDLES[Math.floor(random(0, MIDDLES.length))];
    const OUTRO = OUTROS[Math.floor(random(0, OUTROS.length))];
    const ENDING = ENDINGS[Math.floor(random(0, ENDINGS.length))];

    const HEADLINE = `${HOOK} ${INTRO} ${MIDDLE} ${OUTRO}. ${ENDING}`;

    return HEADLINE
  }
}

// Ludvig
class PolitikFakeNews {

  constructor() {
    this.tag = 'Dansk Politik';

    this.names = [
      "Uffe Elbæk",
      "Torsten Gejl",
      "Roger Matthisen",
      "Christian Poll",
      "Ulla Sandbæk",
      "Pernille Schnoor",
      "Rasmus Nordqvist",
      "Carolina Magdalene Maier",
      "René Gade",
      "Julius Grantzau",
      "Dansk Folkeparti",
      "Pia Adelsteen",
      "Karina Adsbøl",
      "Alex Ahrendtsen",
      "Liselott Blixt",
      "Henrik Urban Brodersen",
      "Bent Bøgsted",
      "René Christensen",
      "Kim Christiansen",
      "Jens Henrik Thulesen Dahl",
      "Kristian Thulesen Dahl",
      "Mette Hjermind Dencker",
      "Mikkel Dencker",
      "Søren Espersen",
      "Dennis Flydtkjær",
      "Marlene Harpsøe",
      "Martin Henriksen",
      "Pia Kjærsgaard",
      "Marie Krarup",
      "Merete Dea Larsen",
      "Christian Langballe",
      "Morten Marinus",
      "Karin Nødgaard",
      "Hans Kristian Bundgaard-Skibby",
      "Peter Skaarup",
      "Tilde Bork",
      "Susanne Eilersen",
      "Kenneth Kristensen Berth",
      "Ib Poulsen",
      "Lise Bech",
      "Pernille Bendixen",
      "Peter Kofod Poulsen",
      "Jan Rytkjær Callesen",
      "Dorthe Ullemose",
      "Karina Due",
      "Jan Erik Messmann",
      "Claus Kvist Hansen",
      "Jeppe Jakobsen",
      "Naser Khader",
      "Mette Abildgaard",
      "Brigitte Klintskov Jerkel",
      "Orla Østerby",
      "Merete Scheelsbeck",
      "Enhedslisten",
      "Stine Brix",
      "Henning Hyllested",
      "Christian Juhl",
      "Johanne Schmidt-Nielsen",
      "Pernille Skipper",
      "Finn Sørensen",
      "Nikolaj Villumsen",
      "Søren Bo Søndergaard",
      "Rune Lund",
      "Søren Egge Rasmussen",
      "Eva Flyvholm",
      "Pelle Dragsted",
      "Jakob Sølvhøj",
      "Øjvind Vilsholm",
      "Inuit Ataqatigiit",
      "Aaja Chemnitz Larsen",
      "Javnaðarflokkurin",
      "Sjúrður Skaale",
      "Simon Emil Ammitzbøll",
      "Mette Bock",
      "Villum Christensen",
      "Laura Lindahl",
      "Leif Mikkelsen",
      "Ole Birk Olesen",
      "Joachim B. Olsen",
      "Merete Riisager",
      "Anders Samuelsen",
      "Christina Egelund",
      "Henrik Dahl",
      "May-Britt Buch-Kattrup",
      "Carsten Bach ",
      "Marianne Jelved",
      "Martin Lidegaard",
      "Sofie Carsten Nielsen",
      "Lotte Rod",
      "Zenia Stampe",
      "Andreas Steenberg",
      "Morten Østergaard",
      "Ida Auken",
      "Yildiz Akdogan",
      "Trine Bramsen",
      "Kirsten Brosbøl",
      "Morten Bødskov",
      "Lennart Damsbo-Andersen",
      "Benny Engelbrecht",
      "Mette Frederiksen",
      "Mette Gjerskov",
      "Karin Gaardsted",
      "Ane Halsboe-Jørgensen",
      "Orla Hav",
      "Magnus Heunicke",
      "Nick Hækkerup",
      "Leif Lahn Jensen",
      "Mogens Jensen",
      "Thomas Jensen",
      "Jens Joel",
      "Jan Johansen",
      "Dan Jørgensen",
      "Karen Johanne Klint",
      "Simon Kollerup",
      "Henrik Dam Kristensen",
      "Rasmus Horn Langhoff",
      "Henrik Sass Larsen",
      "Bjarne Laustsen",
      "Annette Lind",
      "Mogens Lykketoft",
      "Flemming Møller Mortensen",
      "Maja Panduro",
      "Jesper Petersen",
      "Rasmus Prehn",
      "Troels Ravn",
      "Mette Reissmann",
      "Pernille Rosenkrantz-Theil",
      "Julie Skovsby",
      "Nicolai Wammen",
      "Astrid Krag",
      "Peter Hummelgaard",
      "Lea Wermelin",
      "Mattias Tesfaye",
      "Daniel Toft Jakobsen",
      "Christian Rabjerg Madsen",
      "Erik Christensen",
      "Kaare Dybvad",
      "Malou Lunderød",
      "Lars Aslan Rasmussen",
      "Pia Olsen Dyhr",
      "Karsten Hønge",
      "Holger K. Nielsen",
      "Lisbeth Bech Poulsen",
      "Jacob Mark",
      "Trine Torp",
      "Kirsten Normann Andersen",
      "Tjóðveldi",
      "Magni Arge",
      "Uden for folketingsgrupperne",
      "Lars Løkke Rasmussen",
      "Aleqa Hammond",
      "Hans Nicolai Andersen",
      "Erling Bonnesen",
      "Thomas Danielsen",
      "Louise Schack Elholm",
      "Karen Ellemann",
      "Jakob Ellemann-Jensen",
      "Claus Hjort Frederiksen",
      "Martin Geertsen",
      "Eva Kjer Hansen",
      "Jane Heitmann",
      "Preben Bang Henriksen",
      "Bertel Haarder",
      "Jacob Jensen",
      "Kristian Jensen",
      "Michael Aastrup Jensen",
      "Peter Juel Jensen",
      "Jan Ejnar Jørgensen",
      "Karsten Styrbæk Lauritzen",
      "Lars Christian Lilleholt",
      "Kristian Pihl Lorentzen",
      "Sophie Løhde",
      "Anni Holm Matthiesen",
      "Ellen Trane Nørby",
      "Torsten Schack Pedersen",
      "Troels Lund Poulsen",
      "Hans Christian Schmidt",
      "Inger Støjberg",
      "Marcus Knuth",
      "Søren Gade",
      "Carl Holst",
      "Britt Bager",
      "Mads Fuglede",
      "Carsten Kissmeyer"
    ]

    this.action = [
      "indfører lov om",
      "lukker munden om",
      "har ingen kommentar til",
      "snakker om",
      "laver lovforslag om",
      "beder folketinget om lov om",
      "stemmer nej på lov om",
      "stemmer ja på lov om",

    ]

    this.emne = [
      "placering af tuborg-parantes",
      "rygning",
      "kodeformatering",
      "fjernundervisning",
      "minkaflivning",
      "memes",
      "priser på bland selv slik i kvickly",
      "cigaretter",
      "among us memes",
      "skateboaring",
      "javascript libraries"
    ]
  }
  genererHeadline() {
    this.namesIndex = round(random(0, this.names.length - 1))
    this.actionIndex = round(random(0, this.action.length - 1))
    this.emneIndex = round(random(0, this.emne.length - 1))

    return this.names[this.namesIndex] + " " + this.action[this.actionIndex] + " " + this.emne[this.emneIndex];
  }

}

// Mathias
class verdensPolitikFakeNews {
  constructor() {
    this.tag = 'Verdens Politik';

    this.Personer1 = ["Trump", "Indisk Statsminister", "Boris Johnson", "Justin Trudeau", "ISIS"];
    this.Personer2 = [" Putin", " Obama", " Erdogan", " Hillary Clinton", " Joe Biden", " Bernie Sanders", " Mirsad"];
    this.Verber = [" dræber", " bombarderer", " indgår aftale med", " landsforviser", " afviser", " erfterlyser", " kysser", " krammer", " sover med", " lugter til"];
    this.Tidspunkt = [" efter møde", " efter konference", " under festival", " efter pressemøde", " efter ceremoni", "før møde", " før konference", " før festival", " før pressemøde", " før ceremoni"]
    this.Ugedag = [" mandag", " tirsdag", " onsdag", " torsdag", " fredag", " lørdag", " søndag"]
    this.Tidspunkt2 = [" morgen", " aften",]

    this.RandPers1 = round(random(0, 4))
    this.RandPers2 = round(random(0, 6))
    this.RandVerber = round(random(0, 9))
    this.RandTid = round(random(0, 4))
    this.RandUge = round(random(0, 6))
    this.RandTid2 = round(random(0, 1))
  }
  genererHeadline() {
    this.a = (this.Personer1[this.RandPers1] + this.Verber[this.RandVerber] + this.Personer2[this.RandPers2] + this.Tidspunkt[this.RandTid] + this.Ugedag[this.RandUge] + this.Tidspunkt2[this.RandTid2]);

    return this.a
  }
}

// Freja
class VejretFakeNews {

  constructor() {
    this.tag = 'Vejret';

    this.tider = ["I morgen", "I løbet af næste uge", "I overmorgen", "Idag", "Snart", "I løbet af de næste timer", "I aften"];

    this.hændelser = ["kommer der en tsunami", "springer Mount Everest i luften", "forsinder Afrika", "kommer en kæmpe meteor", "er der forudset et jordskælv over 9.0", "eksploderer solen", "bliver månen grøn", "lander mennesker på Mars"];

    this.begrundelser = ["som påvirker", "og det skyldes", "det er forsaget af", "påbegyndt af"];

    this.mennesker = ["Kim Kardashian", "Joe Biden", "Donald Trump", "den globale opvarmning", "langtidsholdbare produkter", "Michale Jackson", "Putin", "Kim jong Un"];

    this.space = " ";
    this.komma = ",";

    this.randomTal1 = Math.round(random(0, 6));
    this.randomTal2 = Math.round(random(0, 7));
    this.randomTal3 = Math.round(random(0, 3));
    this.randomTal4 = Math.round(random(0, 7));
  }

  genererHeadline() {
    this.a = ("BREAKING:" + this.space + this.tider[this.randomTal1] + this.space + this.hændelser[this.randomTal2] + this.komma + this.space + this.begrundelser[this.randomTal3] + this.space + this.mennesker[this.randomTal4]);
    return this.a
  }
}

