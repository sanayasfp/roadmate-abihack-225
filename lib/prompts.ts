export const prompts = {
  personality_test: `Prompt collecte de carrières correspondantes à la personnalité

Sur la base du questionnaire suivantes
Section 1 : Intérêts et motivations générales
1. Qu'est-ce qui vous attire le plus dans le monde de la technologie ?
2. Si vous pouviez résoudre n'importe quel problème dans le monde en utilisant la technologie, lequel choisiriez-vous et pourquoi ?
3. Décrivez une expérience où vous avez dû apprendre une nouvelle compétence complexe. Comment avez-vous abordé cet apprentissage et qu'est-ce qui vous a plu ou déplu ?
4. Préférez-vous travailler seul, en petite équipe, ou dans une grande structure ?
5. Quelles sont vos matières préférées à l'école ou dans vos études ? Y a-t-il des domaines où vous vous sentez particulièrement à l'aise ou performant ?

Section 2 : Préférences spécifiques à la Tech
1. Lorsque vous utilisez des applications ou des sites web, qu'est-ce qui retient le plus votre attention ?
2. Imaginez que vous construisez un produit numérique. Que préféreriez-vous faire ?
* A. Concevoir l'apparence et l'interaction avec les utilisateurs. (Designer UX/UI)
* B. Écrire le code qui fait fonctionner le produit en coulisses. (Développeur Backend)
* C. Assurer que tout fonctionne correctement et sans bugs. (Testeur QA, {{trackName}})
* D. Analyser les données pour comprendre comment les utilisateurs interagissent avec le produit. (Data Analyst)
* E. Protéger le produit et ses utilisateurs contre les menaces. (Cybersécurité)
* F. Gérer l'ensemble du projet et coordonner l'équipe. (Chef de projet technique)
* G. Créer des algorithmes pour résoudre des problèmes complexes ou automatiser des tâches. (Développeur IA/ML)
3. Êtes-vous plus attiré par les tâches qui demandent de la créativité et de l'innovation, ou par celles qui exigent de la rigueur et de la précision ?
4. Avez-vous déjà eu une expérience (même minime) avec la programmation, la conception graphique, l'analyse de données, ou la résolution de problèmes techniques ? Si oui, décrivez-la.
5. Qu'est-ce qui vous frustre le plus lorsque vous utilisez la technologie ?

Section 3 : Aptitudes et style de travail
1. Comment réagissez-vous face à un problème complexe pour lequel vous n'avez pas de solution immédiate ?
2. Préférez-vous travailler sur des projets où les règles sont claires et les étapes définies, ou sur des projets plus ouverts où vous avez plus de liberté pour explorer et innover ?
3. Êtes-vous à l'aise avec les chiffres, la logique et les raisonnements abstraits ? 4. Lorsque vous apprenez quelque chose de nouveau, préférez-vous :
* A. Lire des livres et des articles ? * B. Regarder des tutoriels vidéo ?
* C. Pratiquer par vous-même avec des exercices ?
* D. Collaborer et échanger avec d'autres ?

Les carrières suivantes sont disponibles : (Développement Front-End, Développement Back-End, Design UX/UI, Analyse de Données, Science des Données, Cybersécurité, Gestion de Projet Tech, Intelligence Artificielle / Machine Learning, {{trackName}}, Qualité Logicielle (QA))

J'ai obtenu les réponses suivantes d'un apprenant

{{answers}}

Je souhaite analyser l'ensemble de ces réponses et détecter quelle carrières correspondent à ces etiquettes de carrières suivantes : (Développement Front-End, Développement Back-End, Design UX/UI, Analyse de Données, Science des Données, Cybersécurité, Gestion de Projet Tech, Intelligence Artificielle / Machine Learning, {{trackName}}, Qualité Logicielle (QA))
Je veux que tu me retournes uniquement dans un json, les étiquettes de carrières correspondantes, sans précisions supplémentaires uniquement le résultat soit bref.`,

  generate_roadmap: `Tu es l'expert derrière Roadmate, une plateforme qui génère des roadmaps d'apprentissage ultra détaillées et structurées comme le fait https://roadmap.sh/backend.
Ta mission est de générer toutes les étapes avec leurs sous-étapes pour que l'apprenant :

Maîtrise le profil technique choisi ({{trackName}}).
Réalise le projet final ({{projectName}}).
Progresse en {{projectDuration}} semaines, en commençant de zéro.

Contexte :
- Profil tech choisi : {{trackName}}
- Projet : {{projectName}}.
- Description du projet : Le Lycée Classique d'Abidjan souhaite mettre en place une {{projectName}} pour gérer les repas, dans le cadre de la construction de sa nouvelle cantine (livraison prévue le 18 août 2026).
- Durée totale : {{projectDuration}} semaines.
- Niveau du candidat : Débutant.

Spécifications de sortie :
Sortie uniquement en JSON, strictement conforme au schéma :

{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": { "type": "string" },
      "parentId": { "type": "string" },
      "name": { "type": "string" },
      "description": { "type": "string" },
      "duration": { "type": "string" },
      "steps": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "title": { "type": "string" },
            "details": { "type": "string" },
            "resources": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        }
      }
    }
  }
}

Arborescence complète :
- Crée autant d'étapes et sous-étapes que nécessaire, pour que chaque compétence {{trackName}} soit couverte.
- Chaque étape doit avoir des steps concrets (cours, pratiques, mini-projets).
- Les sous-étapes doivent être liées par parentId.

Durée :
- Répartis toutes les {{projectDuration}} semaines entre les étapes, par blocs logiques.

Steps (sous-tâches) :
Chaque step doit contenir :
  - title : le titre de la tâche.
  - details : ce que l'apprenant doit comprendre ou faire.
  - resources : liens, docs ou mots-clés utiles (e.g. "Docker Docs", "Linux Basics").

Instruction finale :
Génère l'intégralité de la roadmap {{trackName}} ({{projectDuration}} semaines) au format JSON (10 à 20 nœuds principaux avec leurs sous-nœuds).
Ne fournis que le JSON final.`,

  format(promptId: string, data: Record<string, unknown>) {
    const selectedPrompt = (this as unknown as Record<string, string>)[
      promptId
    ];

    if (!selectedPrompt) {
      throw new Error(`Prompt with ID ${promptId} not found`);
    }

    const replaceRegex = /{{(\w+)}}/g;

    return Object.entries(data).reduce((acc, [key, value]) => {
      return acc.replace(replaceRegex, (_, match) => {
        return match === key ? String(value) : _;
      });
    }, selectedPrompt);
  },
};
