"use client";
import React, { useState } from "react";
import { X, MapPin, Mail, UserPlus, Heart, Target } from "lucide-react";
import { User } from "@/seeds";
import { useRouter } from "next/navigation";


const nextSteps = `Absolument ! Voici la version française de la section "Next Steps", adaptée pour être affichée après le flow de démonstration qui s'arrête à l'envoi d'invitations à des co-apprenants.

---

# Roadmate : Le chemin à parcourir – Notre vision pour l'avenir

Vous venez de voir un aperçu de la puissance de Roadmate : personnaliser votre parcours d'apprentissage et vous connecter à une communauté. Notre démo s'est conclue par l'envoi d'une invitation à des co-apprenants, soulignant notre engagement envers l'apprentissage collaboratif et social.

Mais ce n'est que le début. Le projet de hackathon que vous avez vu est une puissante preuve de concept démontrant le potentiel transformateur de l'IA dans l'apprentissage personnalisé. Bien que notre démo initiale illustre un flux de travail essentiel, ce n'est que la première étape de notre ambitieux voyage pour redéfinir l'éducation en ligne.

La vision ultime de **Roadmate** est d'être le compagnon d'apprentissage IA indispensable qui ne se contente pas de vous guider, mais vous comprend véritablement, vous propulsant de la curiosité à la maîtrise, et de l'apprentissage à la **préparation à l'emploi**.

Voici un aperçu détaillé des prochaines étapes passionnantes que nous envisageons pour Roadmate, transformant notre "époque" en un écosystème d'apprentissage complet et dynamique :

---

## 1. Personnalisation approfondie et feuilles de route hyper-adaptatives

Notre force principale réside dans la personnalisation. Le futur Roadmate portera cela au niveau supérieur :

*   **Profilage cognitif avancé :** Au-delà de simples questionnaires, nous intégrerons des évaluations plus sophistiquées pour comprendre les forces, les faiblesses cognitives et les parcours d'apprentissage préférés d'un apprenant (par exemple, analytique vs holistique, séquentiel vs aléatoire).
*   **Adaptation en temps réel :** La feuille de route ne sera pas seulement personnalisée au début ; elle s'ajustera dynamiquement en fonction des progrès de l'apprenant, des défis rencontrés, du temps passé sur les sujets et même des performances aux exercices. Si vous excellez, elle accélère ; si vous avez des difficultés, elle propose des explications alternatives ou plus de pratique.
*   **Suggestions de styles d'apprentissage basées sur l'IA :** Roadmate recommandera intelligemment les types de ressources optimaux (par exemple, "Ce concept pourrait être mieux compris grâce à un exercice pratique pour votre profil", ou "Essayez un explicateur visuel ici") en tirant parti de l'IA pour prédire ce qui vous convient le mieux.

## 2. Contenu plus riche, multimodal et interactif

Au-delà du texte et des liens, Roadmate offrira une expérience d'apprentissage immersive :

*   **Explications visuelles et vidéo générées par l'IA :** En utilisant une IA média avancée (comme Google Veo, une fois largement disponible), Roadmate générera de courtes explications animées ou des clips narrés, ludiques et culturellement pertinents, pour démystifier des concepts complexes.
*   **Laboratoires interactifs et environnements de codage :** L'intégration avec des outils comme Project IDX permettra le codage en ligne, des exercices interactifs et des environnements bac à sable où les apprenants pourront immédiatement appliquer ce qu'ils apprennent sans configurations locales complexes.
*   **Contenu contribué par la communauté :** Un système robuste permettra aux apprenants experts ou aux mentors de contribuer des tutoriels de haute qualité, des études de cas et des solutions de projets, enrichissant le pool de connaissances et favorisant une communauté de partage des savoirs.

## 3. Une place de marché de projets florissante et une simulation client authentique

Notre modèle d'apprentissage par projets est central. Nous allons le transformer en un écosystème complet :

*   **Place de marché de projets complète :** Des tiers – ONG, startups, petites entreprises, même d'autres apprenants – pourront publier des projets réels ou réalistes, agissant comme des "clients" avec de véritables exigences et des délais.
*   **Assistance IA pour la définition de projets :** Roadmate utilisera l'IA pour aider les clients à articuler les exigences des projets et assister les apprenants à décomposer des projets complexes en jalons gérables et alignés sur les compétences.
*   **Cycles de feedback automatisés et par les pairs :** Mise en œuvre d'outils de linter/revue de code basés sur l'IA (le cas échéant) et facilitation de processus structurés de révision par les pairs pour fournir un feedback continu et exploitable sur les livrables du projet.

## 4. Écosystème robuste de collaboration par les pairs et de mentorat

Lutter contre l'isolement est essentiel. Roadmate favorisera un véritable apprentissage collaboratif :

*   **Appariement intelligent des pairs/équipes :** Implémentation d'un algorithme d'appariement sophistiqué pour jumeler des apprenants sur des parcours complémentaires (par exemple, Backend + Frontend) ou pour le travail collaboratif sur des projets, simulant les dynamiques d'équipe du monde réel (contrôle de version, contrats d'API, habitudes agiles).
*   **Mentorat structuré :** Développement d'un système complet permettant aux mentors humains d'offrir des "heures de bureau", des séances de coaching individuelles ou des révisions de jalons, déclenchées par la demande de l'apprenant ou les besoins identifiés par l'IA.
*   **Espaces de travail collaboratifs :** Intégration d'outils pour le codage partagé, la documentation et la communication directement au sein de la plateforme pour faciliter un travail d'équipe fluide sur les projets.

## 5. Résultats, incitations et parcours directs vers l'employabilité

Roadmate vise des résultats tangibles. Nous connecterons l'apprentissage directement aux opportunités de carrière :

*   **Badges de compétences et certifications :** Offre de badges de compétences vérifiables et de certificats d'achèvement liés à la maîtrise de projets, reconnus par les partenaires industriels.
*   **Parcours de stages et de placement d'emplois :** Partenariat avec des organisations et des entreprises pour offrir un accès direct à des stages, des entretiens d'embauche ou des viviers de talents spécifiques après la réussite des feuilles de route et des projets pertinents.
*   **Génération dynamique de portfolios :** Génération automatique de portfolios professionnels basés sur les projets achevés et les compétences acquises, présentant les capacités d'un apprenant aux employeurs potentiels.

## 6. Impact plus large et évolutivité en Afrique (et au-delà)

Notre vision à long terme étend l'impact de Roadmate :

*   **Expansion multi-domaines :** Bien que commençant par la technologie, le cadre adaptatif de Roadmate peut s'étendre à d'autres professions en demande en Afrique, telles que la technologie de la santé, l'agri-tech, la science des données, les opérations d'IA, et plus encore.
*   **Hyper-localisation :** Développement d'un support multilingue, de contenus culturellement pertinents et d'adaptations de l'interface utilisateur/UX pour répondre aux besoins et contextes diversifiés des différentes régions africaines.
*   **Partenariats et croissance de l'écosystème :** Collaboration avec des institutions éducatives, des ONG et des programmes gouvernementaux pour intégrer Roadmate dans les initiatives nationales de perfectionnement des compétences et les stratégies plus larges de développement des talents.

---

**Roadmate est plus qu'une simple plateforme ; c'est un mouvement vers un avenir où l'apprentissage est personnel, pratique, collaboratif et directement lié aux opportunités. Nous construisons la boussole sur mesure pour le parcours unique de chaque apprenant vers la maîtrise.**`;

const UsersInvitation: React.FC<{ Users: User[] }> = ({ Users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invitedUser, setInvitedUser] = useState<User | null>(
    {} as unknown as User
  );

  const router = useRouter();

  // Données d'exemple basées sur votre structure
  //   const users = [
  //     {
  //       lastname: "Kouadio",
  //       firstname: "Alice",
  //       email: "kouadio.alice@gmail.com",
  //       gender: "F",
  //       about:
  //         "Salut, je suis Alice, étudiante en MIAGE a l'Université de Cocody. J'adore coder, et kiffe plus le frontend. Les couleurs ça me parle",
  //       password: "alice123",
  //       image: "https://placehold.co/100x100",
  //       interrests: ["Frontend", "UI/UX Design", "JavaScript", "React"],
  //       hobbies: ["Voyager", "Lire des livres", "Jouer aux jeux vidéo"],
  //       location: "Abidjan, Côte d'Ivoire",
  //     },
  //     {
  //       lastname: "Traore",
  //       firstname: "Koffi",
  //       email: "traore.koffi@gmail.com",
  //       gender: "M",
  //       about:
  //         "Développeur fullstack passionné par les nouvelles technologies. J'aime créer des solutions innovantes et collaborer en équipe.",
  //       image: "https://placehold.co/100x100",
  //       interrests: ["Backend", "Node.js", "MongoDB", "API"],
  //       hobbies: ["Football", "Musique", "Cuisine"],
  //       location: "Abidjan, Côte d'Ivoire",
  //     },
  //     {
  //       lastname: "Bamba",
  //       firstname: "Fatou",
  //       email: "bamba.fatou@gmail.com",
  //       gender: "F",
  //       about:
  //         "Designer UX/UI avec une passion pour l'expérience utilisateur. Je transforme les idées en interfaces belles et intuitives.",
  //       image: "https://placehold.co/100x100",
  //       interrests: ["Design", "Figma", "Prototypage", "UX Research"],
  //       hobbies: ["Art", "Photographie", "Danse"],
  //       location: "Yamoussoukro, Côte d'Ivoire",
  //     },
  //   ];

  const handleInvite = (user: User) => {
    setInvitedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInvitedUser(null);
  };

  const completeCoursesAndDiscoverNextSteps = () => {
    router.push(`coming-soon?featureName=${encodeURIComponent("Next Steps")}&description=${encodeURIComponent(nextSteps)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Découvrez les Apprenants
          </h1>
          <p className="text-xl text-gray-600">
            Connectez-vous avec des développeurs talentueux de votre région
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Users.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Header avec image et info de base */}
              <div className="relative bg-gradient-to-r from-slate-600 to-slate-800 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.image}
                    alt={`${user.firstname} ${user.lastname}`}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">
                      {user.firstname} {user.lastname}
                    </h2>
                    <div className="flex items-center space-x-2 mt-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm opacity-90">{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm opacity-90">
                        {user.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu principal */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    À propos
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {user.about}
                  </p>
                </div>

                {/* Intérêts */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-indigo-500" />
                    Compétences
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {user.interrests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hobbies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-pink-500" />
                    Passions
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {user.hobbies.map((hobby, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton d'invitation */}
                <button
                  onClick={() => handleInvite(user)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Inviter à me rejoindre</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal d'invitation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Invitation envoyée
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-xl font-semibold text-green-600 mb-2">
                Apprenant invité
              </p>
              {invitedUser && (
                <p className="text-gray-600">
                  {invitedUser["firstname"]} {invitedUser["lastname"]} a été
                  invité(e) à vous rejoindre !
                </p>
              )}
            </div>

            <button
              onClick={completeCoursesAndDiscoverNextSteps}
              className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Parfait !
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersInvitation;
