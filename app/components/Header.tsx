import { Container } from "./Container";
import { Logo } from "./Logo";
import Link from "next/link";
import React from "react";
import { db } from "@/seeds";

const parcours = `
# 🚀 Découvre nos parcours Tech

Notre section **Parcours** te propose différents chemins dans les domaines technologiques les plus recherchés.  
Chaque parcours est associé à une **roadmap générique** inspirée des standards de l’industrie (comme [roadmap.sh](https://roadmap.sh)), mais ce n’est que la base.

## ✨ Une roadmap qui s’adapte à toi
Lorsque tu choisis un parcours :
- La roadmap est **personnalisée** en fonction de **ton profil**, de **tes projets**, et de **tes co-apprenants**.  
- L’IA sélectionne les **meilleures ressources** (articles, vidéos, exercices) adaptées à **ton style d’apprentissage**.  
- Tu as la possibilité de **collaborer** avec d’autres apprenants sur des projets concrets, comme dans un vrai environnement professionnel.

## 🧩 Exemples de parcours
- **Développement Front-End** : HTML, CSS, JavaScript, frameworks modernes (React, Vue, etc.).
- **Développement Back-End** : API, bases de données, microservices.
- **UX/UI Design** : principes de design, outils (Figma, Adobe XD), expérience utilisateur.
- **Data Science & Analyse** : Python, statistiques, machine learning.
- **DevOps** : CI/CD, conteneurisation, Kubernetes, monitoring.

---

> **Prochainement** : Les roadmaps seront enrichies de **projets réels** soumis par des entreprises, ONG ou communautés, afin de te préparer aux vrais défis du marché.
`;

const projets = `
# 🛠️ Explore les Projets

La page **Projets** te connecte à des défis réels, proposés par des **organisations**, des **communautés**, ou d’autres **apprenants**.  
Ces projets te permettent d’appliquer directement ce que tu apprends, tout en développant des **compétences pratiques** et en collaborant comme dans un environnement professionnel.

## 🌟 Pourquoi choisir un projet ?
- **Apprentissage concret** : Tu ne te contentes pas de suivre des cours, tu construis quelque chose de tangible.  
- **Collaboration** : Travaille avec des **co-apprenants** qui complètent tes compétences (ex. un front-end et un back-end).  
- **Encadrement optionnel** : Des **mentors** peuvent intervenir pour guider les équipes sur demande.  
- **Portefeuille de projets** : Chaque projet complété enrichit ton portfolio avec des réalisations **crédibles** et **impactantes**.

## 🧩 Types de projets
- **Projets proposés par des tiers** : Entreprises, ONG, ou particuliers à la recherche de solutions innovantes.  
- **Projets personnels** : Soumets **ton idée** et trouve d’autres apprenants pour t’accompagner.  
- **Projets avec récompenses** : Certains projets incluent un système d’intéressement (récompenses, primes ou partenariats).

## 🚀 Comment ça marche ?
1. **Choisis un projet** dans la liste.  
2. **L’IA adapte ta roadmap** en fonction des compétences nécessaires pour le projet.  
3. **Travaille en solo ou en équipe**, avec la possibilité de trouver des co-apprenants.  
4. **Obtiens un certificat** validant ton apprentissage à la fin du projet.

---

> **Prochainement** : Un système de **classement**, de **feedback** et de **recommandations personnalisées** sera ajouté pour rendre ton apprentissage encore plus dynamique.
`;

const menus = [
  {
    name: "Parcours",
    href: `/coming-soon?featureName=Parcours&description=${encodeURIComponent(
      parcours
    )}`,
  },
  {
    name: "Projets",
    href: `/coming-soon?featureName=Projets&description=${encodeURIComponent(
      projets
    )}`,
  },
  {
    name: "Trouver un Co-apprenant",
    href: "/co-learner-matching",
  },
];

export function Header() {
  React.useEffect(() => {
    // Initialize the database
    db.initDB();
  }, []);

  return (
    <header className="bg-slate-900 text-white py-5">
      <Container className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-8 mr-2" />
              {/* <span className="text-xl font-bold">Roadmate</span> */}
            </Link>
          </div>
          <nav className="space-x-4">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="hover:text-orange-500"
              >
                {menu.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm hover:text-orange-500">
            Connexion
          </Link>
          <Link
            href="/register"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition"
          >
            {"S'inscrire"}
          </Link>
        </div>
      </Container>
    </header>
  );
}
