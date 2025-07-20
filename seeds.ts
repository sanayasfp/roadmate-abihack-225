"use client";

const tracks: [] = [];

const users = [
  {
    lastname: "Kouadio",
    firstname: "Alice",
    email: "kouadio.alice@gmail.com",
    gender: "F",
    about:
      "Salut, je suis Alice, étudiante en MIAGE a l'Université de Cocody. J'adore coder, et kiffe plus le frontend. Les couleurs ça me parle",
    password: "alice123",
    image: "https://placehold.co/100x100",
    interrests: ["Frontend", "UI/UX Design", "JavaScript", "React"],
    hobbies: ["Voyager", "Lire des livres", "Jouer aux jeux vidéo"],
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    lastname: "Diomande",
    firstname: "Brahima",
    email: "diomande.brahima@gmail.com",
    gender: "M",
    about:
      "Salut, je suis Brahima, étudiant en MIAGE a l'Université de Cocody. J'adore coder, et kiffe plus le backend. Les couleurs ça me parle",
    password: "brahima123",
    image: "https://placehold.co/100x100",
    interrests: ["Backend", "API Design", "JavaScript", "Node.js"],
    hobbies: [
      "Jouer au football",
      "Regarder des films",
      "Écouter de la musique",
    ],
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    lastname: "Traore",
    firstname: "Fatou",
    email: "traore.fatou@gmail.com",
    gender: "F",
    about:
      "Salut, je suis Fatou, étudiante en MIAGE a l'Université de Cocody. J'adore coder, et kiffe plus le design. Les couleurs ça me parle",
    password: "fatou123",
    image: "https://placehold.co/100x100",
    interrests: ["Design", "UI/UX", "JavaScript", "React"],
    hobbies: ["Dessiner", "Lire des romans", "Faire du shopping"],
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    lastname: "Kone",
    firstname: "Mamadou",
    email: "kone.mamadou@gmail.com",
    gender: "M",
    about:
      "Salut, je suis Mamadou, étudiant en MIAGE a l'Université de Cocody. J'adore coder, et kiffe plus le backend. Les couleurs ça me parle",
    password: "mamadou123",
    image: "https://placehold.co/100x100",
    interrests: ["Backend", "API Design", "JavaScript", "Node.js"],
    hobbies: [
      "Jouer au football",
      "Regarder des films",
      "Écouter de la musique",
    ],
    location: "Abidjan, Côte d'Ivoire",
  },
];

const companies = [
  {
    name: "Children Of Africa",
    description:
      "Children of Africa est une organisation non gouvernementale ivoirienne créée en 1998 par la Première Dame de Côte d'Ivoire, Madame Dominique Ouattara. Elle a pour mission de promouvoir les droits des enfants et des femmes en Afrique.",
    logo: "https://placehold.co/100x100",
    website: "https://childrenofafrica.org/",
    companyType: "ONG",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    name: "Côte d'Ivoire Telecom",
    description:
      "Côte d'Ivoire Telecom est le premier opérateur de télécommunications en Côte d'Ivoire. Il offre des services de téléphonie fixe, mobile et Internet.",
    logo: "https://placehold.co/100x100",
    website: "https://www.civtelecom.ci/",
    companyType: "Entreprise",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    name: "Orange Côte d'Ivoire",
    description:
      "Orange Côte d'Ivoire est une filiale du groupe Orange, un des leaders mondiaux des télécommunications. Elle offre des services de téléphonie mobile, Internet et télévision.",
    logo: "https://placehold.co/100x100",
    website: "https://www.orange.ci/",
    companyType: "Entreprise",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    name: "ENSEA",
    description:
      "L'École Nationale Supérieure de Statistique et d'Économie Appliquée (ENSEA) est une grande école ivoirienne spécialisée dans la formation en statistique, économie et informatique.",
    logo: "https://placehold.co/100x100",
    website: "https://www.ensea.ci/",
    companyType: "Établissement d'enseignement",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    name: "Université Félix Houphouët-Boigny",
    description:
      "L'Université Félix Houphouët-Boigny est la plus grande université de Côte d'Ivoire. Elle offre une large gamme de formations dans divers domaines.",
    logo: "https://placehold.co/100x100",
    website: "https://www.ufu.edu.ci/",
    companyType: "Établissement d'enseignement",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    name: "Lycée Classique d'Abidjan",
    description:
      "Le Lycée Classique d'Abidjan est un établissement d'enseignement secondaire réputé en Côte d'Ivoire, offrant une formation de qualité aux élèves.",
    logo: "https://placehold.co/100x100",
    website: "https://www.lyceclassiqueabidjan.ci/",
    companyType: "Établissement d'enseignement",
    location: "Abidjan, Côte d'Ivoire",
  },
];

const findCompanyIndexByName = (name: string) => {
  return companies.findIndex(
    (company) => company.name.toLowerCase() === name.toLowerCase()
  );
};

const projects = [
  {
    name: "Application de ticket de restaurant",
    owner: findCompanyIndexByName("Lycée Classique d'Abidjan"),
    ownerEntity: "companies",
    description:
      "Dans le cadre de la construction de sa nouvelle cantine dont la livraison est prévue pour le 18 Août 2026, la direction du Lycée Classique d'Abidjan souhaite mettre en place une application de ticket de restaurant pour faciliter la gestion des repas.",
    lengthInWeeks: 26,
    requirements: [
      "Permettre aux élèves de commander des repas en ligne",
      "Permettre aux cuisiniers de gérer les commandes",
      "Permettre aux élèves de payer en ligne",
      "Assurer la sécurité des données des commandes",
    ],
    image: "https://placehold.co/600x400",
    skills: [
      "Développement Front-End (HTML, CSS, JavaScript, Frameworks JS comme React/Vue/Angular)",
      "Développement Mobile (si application native: Swift/Kotlin, React Native/Flutter)",
      "Design UX/UI (expérience utilisateur, interfaces intuitives)",
      "Développement Back-End (Langages comme Python/Node.js/Java/PHP, Frameworks web)",
      "Gestion de Bases de Données (SQL: PostgreSQL/MySQL; NoSQL: MongoDB/Cassandra)",
      "Conception d'APIs RESTful",
      "Gestion de l'authentification et de l'autorisation",
      "Intégration de systèmes de paiement",
      "Sécurité des applications",
      "Tests (unitaires, d'intégration, fonctionnels)",
      "Déploiement et DevOps (CI/CD, Docker, Cloud Platforms comme AWS/Azure/GCP)",
      "Gestion de projet (Agile, Scrum)",
      "Communication et collaboration",
    ], // Filled by AI
    tags: ["Application Mobile", "Gestion de Tickets", "Restaurant"],
  },
  {
    name: "Application de gestion de bibliothèque",
    owner: findCompanyIndexByName("ENSEA"),
    ownerEntity: "companies",
    description:
      "L'ENSEA souhaite mettre en place une application de gestion de bibliothèque pour faciliter la gestion des livres et des emprunts.",
    lengthInWeeks: 24,
    requirements: [
      "Permettre aux bibliothécaires de gérer les livres",
      "Permettre aux étudiants de consulter les livres disponibles",
      "Permettre aux étudiants d'emprunter des livres en ligne",
      "Assurer la sécurité des données des emprunts",
    ],
    image: "https://placehold.co/600x400",
    skills: [
      "Développement Front-End (HTML, CSS, JavaScript)",
      "Design UX/UI",
      "Développement Back-End (Langages et Frameworks web)",
      "Conception et Gestion de Bases de Données relationnelles (SQL)",
      "Modélisation de données (livres, membres, emprunts)",
      "Fonctionnalités de recherche et de filtrage avancées",
      "Gestion des utilisateurs et des rôles",
      "Développement de rapports (ex: livres les plus empruntés)",
      "Sécurité des données",
      "Tests logiciels",
      "Gestion de projet",
    ], // Filled by AI
    tags: ["Application Web", "Gestion de Bibliothèque", "Livres"],
  },
  {
    name: "Application de gestion de projet",
    owner: findCompanyIndexByName("Côte d'Ivoire Telecom"),
    ownerEntity: "companies",
    description:
      "Côte d'Ivoire Telecom souhaite mettre en place une application de gestion de projet pour faciliter la gestion des projets en cours.",
    lengthInWeeks: 36,
    requirements: [
      "Permettre aux chefs de projet de créer des projets",
      "Permettre aux membres de l'équipe de suivre l'avancement des projets",
      "Permettre aux chefs de projet de gérer les tâches et les ressources",
      "Permettre aux chefs de projet de générer des rapports d'avancement",
    ],
    image: "https://placehold.co/600x400",
    skills: [
      "Développement Front-End (Interfaces interactives, visualisation de données, diagrammes de Gantt, tableaux Kanban)",
      "Design UX/UI (fluidité de l'interface, clarté visuelle)",
      "Développement Back-End (Gestion des tâches, projets, utilisateurs, permissions)",
      "Gestion de Bases de Données (modèles de données complexes)",
      "Développement d'APIs robustes",
      "Fonctionnalités de collaboration en temps réel (WebSockets)",
      "Système de notifications",
      "Gestion des droits d'accès et des rôles",
      "Rapports et tableaux de bord personnalisables",
      "Sécurité des applications",
      "Tests (performance, robustesse)",
      "Maîtrise des méthodologies de gestion de projet (Agile, Scrum, Kanban)",
      "Capacité à innover et proposer des solutions",
      "Déploiement et mise à l'échelle",
    ], // Filled by AI
    tags: ["Application Web", "Gestion de Projet", "Télécommunications"],
  },
  {
    name: "Application de gestion des ressources humaines",
    owner: findCompanyIndexByName("Orange Côte d'Ivoire"),
    ownerEntity: "companies",
    description:
      "Orange Côte d'Ivoire souhaite mettre en place une application de gestion des ressources humaines pour faciliter la gestion des employés.",
    lengthInWeeks: 40,
    requirements: [
      "Permettre aux RH de gérer les employés",
      "Permettre aux employés de consulter leurs informations",
      "Permettre aux managers de suivre les performances de leurs équipes",
      "Assurer la sécurité des données des employés",
    ],
    image: "https://placehold.co/600x400",
    skills: [
      "Développement Front-End (Interfaces claires et ergonomiques)",
      "Design UX/UI (pour différents profils: employés, managers, RH)",
      "Développement Back-End (Gestion des dossiers employés, paie, congés, évaluations, recrutement)",
      "Gestion de Bases de Données sécurisées et conformes",
      "Maîtrise des réglementations RH et de la protection des données (GDPR, etc.)",
      "Sécurité de l'information (gestion des données sensibles)",
      "Développement de modules spécifiques (ex: gestion des compétences, portail employés)",
      "Intégration avec d'autres systèmes (paie, comptabilité)",
      "Fonctionnalités de reporting et d'analyse RH",
      "Tests rigoureux (fonctionnels, de sécurité, de performance)",
      "Gestion de projet avec un focus sur la conformité légale et la confidentialité",
      "Communication avec les parties prenantes RH",
    ], // Filled by AI
    tags: ["Application Web", "Gestion des RH", "Télécommunications"],
  },
  {
    name: "Plateforme de Tracking de Mission",
    owner: findCompanyIndexByName("Children Of Africa"),
    ownerEntity: "companies",
    description:
      "children of Africa souhaite mettre en place une plateforme de tracking des missions pour faciliter la gestion des missions humanitaires.",
    requirements: [
      "Permettre aux admin de créer des missions",
      "Permettre aux missionnaires de faire des rapports de mission",
      "Permettre aux donateurs de suivre l'avancement des missions",
      "Permettre aux donateurs de faire des dons en ligne",
      "Permettre aux donateurs de suivre l'utilisation de leurs dons",
      "Avoir un dashboard pour les admin avec des statistiques sur les missions",
      "Avoir un dashboard pour les donateurs avec des statistiques sur les dons",
    ],
    lengthInWeeks: 64,
    image: "https://placehold.co/600x400",
    skills: [
      "Développement Front-End (Cartographie interactive, tableaux de bord de suivi en temps réel)",
      "Design UX/UI (visualisation claire des données de localisation et de statut)",
      "Développement Back-End (Traitement de données géospatiales, gestion des flux de données en temps réel)",
      "Gestion de Bases de Données (support géospatial comme PostGIS, MongoDB avec capacités géo)",
      "Intégration d'APIs de cartographie (Google Maps, OpenStreetMap)",
      "Développement d'APIs pour la réception de données de tracking (GPS, IoT)",
      "Traitement et stockage de données massives (Big Data si volume important)",
      "Système de notifications et d'alertes",
      "Analyse de données (historique des missions, optimisation des parcours)",
      "Sécurité des données de localisation",
      "Tests de performance et de résilience (gestion des pics de trafic)",
      "Déploiement et scalabilité (Cloud, microservices)",
      "Connaissances en systèmes d'information géographique (SIG)",
      "Gestion de projet complexe et interdisciplinaire",
    ], // Filled by AI
    tags: [
      "Application Web",
      "Gestion de Missions",
      "Humanitaire",
      "Dashboard",
      "Statistiques",
    ],
  },
];

type TableType<T extends Record<string, unknown>> = T[];

class Table<T extends Record<string, unknown>> {
  #tbName: string;
  protected rows: TableType<T> = [];

  constructor(tbName: string) {
    this.#tbName = tbName;

    try {
      if (typeof window !== "undefined") {
        const localStorage = window?.localStorage || {};
        const data = localStorage.getItem(`table_${tbName}`);
        this.rows = data ? JSON.parse(data) : [];
      }
    } catch (error) {
      console.error(`Error initializing table ${tbName}:`, error);
      this.rows = [];
    }
  }

  get tbName() {
    return this.#tbName;
  }

  static initTable<T extends Record<string, unknown>>(
    tbName: string,
    data: T[],
    force: boolean = false
  ) {
    const localStorage = window.localStorage;
    const tbInitKey = `table_${tbName}_initialized`;
    const isTableInitialized = localStorage.getItem(tbInitKey);

    // Initialize the table with the provided data
    if (!isTableInitialized || force) {
      localStorage.setItem(Table.getTableKey(tbName), JSON.stringify(data));
      localStorage.setItem(tbInitKey, "true");
      return [tbName, true];
    }

    return [tbName, false];
  }

  static getTableKey(tableName: string) {
    return `table_${tableName}`;
  }

  getRows() {
    return this.rows;
  }

  getRowById(id: number) {
    return this.getRows()[id] || null;
  }

  addRow(row: T) {
    this.rows.push(row);
    this.save();
  }

  save() {
    const localStorage = window.localStorage;
    localStorage.setItem(
      Table.getTableKey(this.tbName),
      JSON.stringify(this.rows)
    );
  }

  deleteRow(id: number) {
    this.rows = this.rows.filter((_, index) => index !== id);
    this.save();
  }

  updateRow(id: number, updatedRow: T) {
    if (id < 0 || id >= this.rows.length) {
      throw new Error("Invalid row ID");
    }
    this.rows[id] = {
      ...this.rows[id],
      ...updatedRow,
    };
    this.save();
  }
}

class UsersTable extends Table<(typeof users)[number]> {
  constructor() {
    super("users");
  }
}

class CompaniesTable extends Table<(typeof companies)[number]> {
  constructor() {
    super("companies");
  }
}

class ProjectsTable extends Table<(typeof projects)[number]> {
  constructor() {
    super("projects");
  }
}

class TracksTable extends Table<(typeof tracks)[number]> {
  constructor() {
    super("tracks");
  }
}

export function initDB(force = false) {
  const localStorage = window.localStorage;

  const result = [
    Table.initTable("users", users, force),
    Table.initTable("companies", companies, force),
    Table.initTable("projects", projects, force),
    Table.initTable("tracks", tracks, force),
  ];

  const failed = result.filter((r) => r[1] === false);
  if (failed.length > 0) {
    console.warn(
      `Failed to initialize the following tables: ${failed
        .map((r) => r[0])
        .join(", ")}`
    );
  } else {
    console.log("All tables initialized successfully.");
  }

  localStorage.setItem("db_initialized", `${failed.length === 0}`);
  return result;
}

export const db = {
  users: new UsersTable(),
  companies: new CompaniesTable(),
  projects: new ProjectsTable(),
  tracks: new TracksTable(),
  initDB,
};
