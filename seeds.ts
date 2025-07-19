export const tracks = [];

export const users = [
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

export const companies = [
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
  }
];

export const findCompanyIndexByName = (name: string) => {
  return companies.findIndex((company) => company.name.toLowerCase() === name.toLowerCase());
};


export const projects = [
  {
    name: "Application de ticket de restaurant",
    owner: findCompanyIndexByName("Lycée Classique d'Abidjan"),
    ownerEntity: "companies",
    description: "Dans le cadre de la construction de ça nouvelle quantine dont la livraison est prévue pour le 18 Aout 2026, la direction du Lycée Classique d'Abidjan souhaite mettre en place une application de ticket de restaurant pour faciliter la gestion des repas.",
    lengthInWeeks: 26,
    requirements: [
      "Permettre aux élèves de commander des repas en ligne",
      "Permettre aux cuisiniers de gérer les commandes",
      "Permettre aux élèves de payer en ligne",
      "Assurer la sécurité des données des commandes",
    ],
    image: "https://placehold.co/600x400",
    skills: [], // Filled by AI
    tags: ["Application Mobile", "Gestion de Tickets", "Restaurant"],
  },
  {
    name: "Application de gestion de bibliothèque",
    owner: findCompanyIndexByName("ENSEA"),
    ownerEntity: "companies",
    description: "L'ENSEA souhaite mettre en place une application de gestion de bibliothèque pour faciliter la gestion des livres et des emprunts.",
    lengthInWeeks: 24,
    requirements: [
      "Permettre aux bibliothécaires de gérer les livres",
      "Permettre aux étudiants de consulter les livres disponibles",
      "Permettre aux étudiants d'emprunter des livres en ligne",
      "Assurer la sécurité des données des emprunts",
    ],
    image: "https://placehold.co/600x400",
    skills: [], // Filled by AI
    tags: ["Application Web", "Gestion de Bibliothèque", "Livres"],
  },
  {
    name: "Application de gestion de projet",
    owner: findCompanyIndexByName("Côte d'Ivoire Telecom"),
    ownerEntity: "companies",
    description: "Côte d'Ivoire Telecom souhaite mettre en place une application de gestion de projet pour faciliter la gestion des projets en cours.",
    lengthInWeeks: 36,
    requirements: [
      "Permettre aux chefs de projet de créer des projets",
      "Permettre aux membres de l'équipe de suivre l'avancement des projets",
      "Permettre aux chefs de projet de gérer les tâches et les ressources",
      "Permettre aux chefs de projet de générer des rapports d'avancement",
    ],
    image: "https://placehold.co/600x400",
    skills: [], // Filled by AI
    tags: ["Application Web", "Gestion de Projet", "Télécommunications"],
  },
  {
    name: "Application de gestion des ressources humaines",
    owner: findCompanyIndexByName("Orange Côte d'Ivoire"),
    ownerEntity: "companies",
    description: "Orange Côte d'Ivoire souhaite mettre en place une application de gestion des ressources humaines pour faciliter la gestion des employés.",
    lengthInWeeks: 40,
    requirements: [
      "Permettre aux RH de gérer les employés",
      "Permettre aux employés de consulter leurs informations",
      "Permettre aux managers de suivre les performances de leurs équipes",
      "Assurer la sécurité des données des employés",
    ],
    image: "https://placehold.co/600x400",
    skills: [], // Filled by AI
    tags: ["Application Web", "Gestion des RH", "Télécommunications"],
  },
  {
    name: "Plateforme de Tracking de Mission",
    owner: findCompanyIndexByName("Children Of Africa"),
    ownerEntity: "companies",
    description: "children of Africa souhaite mettre en place une plateforme de tracking des missions pour faciliter la gestion des missions humanitaires.",
    requirements: [
      "Permettre aux admin de créer des missions",
      "Permettre aux missionaires de faire des rapports de mission",
      "Permettre aux donateurs de suivre l'avancement des missions",
      "Permettre aux donateurs de faire des dons en ligne",
      "Permettre aux donateurs de suivre l'utilisation de leurs dons",
      "Avoir un dashboard pour les admin avec des statistiques sur les missions",
      "Avoir un dashboard pour les donateurs avec des statistiques sur les dons",
    ],
    lengthInWeeks: 64,
    image: "https://placehold.co/600x400",
    skills: [], // Filled by AI
    tags: ["Application Web", "Gestion de Missions", "Humanitaire", "Dashboard", "Statistiques"],
  }
];
