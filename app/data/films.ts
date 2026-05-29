export interface Film {
  id: string;
  titolo: string;
  titoloOriginale: string;
  anno: number;
  durata: number;
  genere: string[];
  regia: string;
  cast: string[];
  sinossi: string;
  poster: string;
  voto: number;
  eta: string;
  lingua: string;
  sala: string;
  orari: { data: string; ora: string; tipo: string }[];
}

export const films: Film[] = [
  {
    id: "mission-impossible",
    titolo: "Mission: Impossible — The Final Reckoning",
    titoloOriginale: "Mission: Impossible — The Final Reckoning",
    anno: 2025,
    durata: 169,
    genere: ["Azione", "Thriller", "Spionaggio"],
    regia: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"],
    sinossi: "Ethan Hunt e la sua squadra si trovano di fronte alla minaccia più devastante della loro carriera: un'intelligenza artificiale fuori controllo che minaccia di riscrivere la realtà stessa. Un ultimo, impossibile incarico per salvare il mondo.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
    voto: 8.2,
    eta: "T",
    lingua: "Italiano",
    sala: "Modena 1",
    orari: [
      { data: "2025-05-29", ora: "16:30", tipo: "standard" },
      { data: "2025-05-29", ora: "19:45", tipo: "standard" },
      { data: "2025-05-30", ora: "17:00", tipo: "standard" },
      { data: "2025-05-30", ora: "20:15", tipo: "standard" },
    ]
  },
  {
    id: "sinners",
    titolo: "Sinners",
    titoloOriginale: "Sinners",
    anno: 2025,
    durata: 137,
    genere: ["Horror", "Drama", "Storico"],
    regia: "Ryan Coogler",
    cast: ["Michael B. Jordan", "Hailee Steinfeld", "Wunmi Mosaku"],
    sinossi: "Due fratelli gemelli tornano nella loro città natale del Mississippi degli anni '30 cercando di lasciare alle spalle i loro oscuri passati, ma scoprono che qualcosa di molto peggiore li attende.",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80",
    voto: 7.9,
    eta: "VM14",
    lingua: "Italiano",
    sala: "Modena 2",
    orari: [
      { data: "2025-05-29", ora: "17:30", tipo: "standard" },
      { data: "2025-05-29", ora: "21:00", tipo: "standard" },
      { data: "2025-05-30", ora: "18:00", tipo: "standard" },
    ]
  },
  {
    id: "thunderbolts",
    titolo: "Thunderbolts*",
    titoloOriginale: "Thunderbolts*",
    anno: 2025,
    durata: 127,
    genere: ["Azione", "Supereroi", "Avventura"],
    regia: "Jake Schreier",
    cast: ["Florence Pugh", "Sebastian Stan", "David Harbour", "Wyatt Russell"],
    sinossi: "Un gruppo di antieroi e villain vengono riuniti dal governo per una missione suicida. Ma sotto la superficie, ognuno di loro nasconde ferite profonde che li rendono pericolosi quanto la minaccia che devono affrontare.",
    poster: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80",
    voto: 7.4,
    eta: "T",
    lingua: "Italiano",
    sala: "Vittoria",
    orari: [
      { data: "2025-05-29", ora: "16:00", tipo: "standard" },
      { data: "2025-05-29", ora: "18:30", tipo: "standard" },
      { data: "2025-05-29", ora: "21:15", tipo: "standard" },
      { data: "2025-05-30", ora: "16:00", tipo: "standard" },
      { data: "2025-05-30", ora: "20:00", tipo: "standard" },
    ]
  },
  {
    id: "elio",
    titolo: "Elio",
    titoloOriginale: "Elio",
    anno: 2025,
    durata: 101,
    genere: ["Animazione", "Avventura", "Commedia"],
    regia: "Domee Shi",
    cast: ["Yonas Kibreab", "Zoe Saldaña", "Brad Garrett"],
    sinossi: "Un ragazzo solitario appassionato di fantascienza viene accidentalmente trasportato in una galassia lontana e scambiato per l'ambasciatore della Terra. Un'avventura cosmica piena di cuore e umorismo.",
    poster: "https://images.unsplash.com/photo-1446776709462-d6b525b1f9a2?w=400&q=80",
    voto: 7.6,
    eta: "T",
    lingua: "Italiano",
    sala: "Modena 1",
    orari: [
      { data: "2025-05-29", ora: "15:30", tipo: "standard" },
      { data: "2025-05-29", ora: "17:45", tipo: "standard" },
      { data: "2025-05-30", ora: "15:00", tipo: "standard" },
      { data: "2025-05-30", ora: "17:30", tipo: "standard" },
    ]
  },
  {
    id: "ballerina",
    titolo: "Ballerina",
    titoloOriginale: "Ballerina",
    anno: 2025,
    durata: 113,
    genere: ["Azione", "Thriller"],
    regia: "Len Wiseman",
    cast: ["Ana de Armas", "Keanu Reeves", "Ian McShane"],
    sinossi: "Una giovane assassina addestrata dalla stessa organizzazione di John Wick cerca vendetta per la morte della sua famiglia. Un capitolo brutale e spettacolare nell'universo di John Wick.",
    poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80",
    voto: 7.1,
    eta: "VM14",
    lingua: "Italiano",
    sala: "Roma",
    orari: [
      { data: "2025-05-29", ora: "18:00", tipo: "standard" },
      { data: "2025-05-29", ora: "20:30", tipo: "standard" },
      { data: "2025-05-30", ora: "19:00", tipo: "standard" },
      { data: "2025-05-30", ora: "21:15", tipo: "standard" },
    ]
  },
  {
    id: "lilo-stitch",
    titolo: "Lilo & Stitch",
    titoloOriginale: "Lilo & Stitch",
    anno: 2025,
    durata: 108,
    genere: ["Avventura", "Commedia", "Fantasy"],
    regia: "Dean Fleischer Camp",
    cast: ["Maia Kealoha", "Sydney Agudong", "Zach Galifianakis"],
    sinossi: "Il remake live-action del classico Disney racconta la storia di Lilo, una bambina solitaria delle Hawaii, e del suo strano amico alieno Stitch, una creatura geneticamente creata per distruggere.",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    voto: 7.0,
    eta: "T",
    lingua: "Italiano",
    sala: "Modena 2",
    orari: [
      { data: "2025-05-29", ora: "15:00", tipo: "standard" },
      { data: "2025-05-29", ora: "17:15", tipo: "standard" },
      { data: "2025-05-30", ora: "15:30", tipo: "standard" },
      { data: "2025-05-30", ora: "17:45", tipo: "standard" },
    ]
  }
];

export const sale = ["Tutti", "Modena 1", "Modena 2", "Vittoria", "Roma"];
export const generi = ["Tutti", "Azione", "Horror", "Animazione", "Thriller", "Drama"];
