"use client";
import { generateRoadmap, personalityTest } from "@/actions";
import { cn } from "@/lib/utils";
import { db, Project } from "@/seeds";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

interface Track {
  track: string;
  description: string;
  matchRank: number;
}

const TechOrientationForm = () => {
  const [formData, setFormData] = useState({
    // Section 1
    techAttraction: "",
    problemToSolve: "",
    learningExperience: "",
    workPreference: "",
    favoriteSubjects: "",

    // Section 2
    appAttention: "",
    productRole: "",
    creativityVsRigor: "",
    techExperience: "",
    techFrustration: "",

    // Section 3
    problemSolving: "",
    projectPreference: "",
    comfortWithLogic: "",
    learningStyle: "",
  });

  const router = useRouter();

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const setFormError = (key: string, message: string) => {
    setFormErrors((prev) => ({
      ...prev,
      [key]: message,
    }));
  };

  const resetFormError = (field: string) => {
    setFormError(field, "");
  };

  const [showSummary, setShowSummary] = useState(false);
  const steps = ["personalityTest", "trackSelection", "projectSelection"];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [isMatching, setIsMatching] = useState(false);
  const [matchedTracks, setMatchedTracks] = useState<Track[]>([]);
  const [matchedProjects, setMatchedProjects] = useState<Project[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    if (value.trim()) {
      resetFormError(field);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    // setShowSummary(true);
    // // Scroll to top to show summary
    // window.scrollTo({ top: 0, behavior: "smooth" });

    try {
      setIsMatching(true);
      let hasError = false;

      Object.entries(formData).forEach(([key, value]) => {
        if (!value) {
          setFormError(key, "Ce champ est requis");
          hasError = true;
        }
      });

      if (hasError) {
        setIsMatching(false);
        return;
      }

      // setShowSummary(true);
      const sectionFormData = {
        "1.1": formData.techAttraction,
        "1.2": formData.problemToSolve,
        "1.3": formData.learningExperience,
        "1.4": formData.workPreference,
        "1.5": formData.favoriteSubjects,
        "2.1": formData.appAttention,
        "2.2": formData.productRole,
        "2.3": formData.creativityVsRigor,
        "2.4": formData.techExperience,
        "2.5": formData.techFrustration,
        "3.1": formData.problemSolving,
        "3.2": formData.projectPreference,
        "3.3": formData.comfortWithLogic,
        "3.4": formData.learningStyle,
      };

      const result = await personalityTest(sectionFormData);
      // const result = [
      //   {
      //     description:
      //       "Strong interest in user interface, demonstrated HTML/CSS experience, and preference for clear, easy-to-use interfaces.",
      //     matchRank: 5,
      //     track: "Développement Front-End",
      //   },
      //   {
      //     description:
      //       "Explicitly chose Data Analyst as preferred role, demonstrated experience with data manipulation (Excel), and comfort with numbers and logic.",
      //     matchRank: 5,
      //     track: "Analyse de Données",
      //   },
      //   {
      //     description:
      //       "Strong emphasis on user interface aesthetics and usability, a key aspect of UX/UI design.",
      //     matchRank: 4,
      //     track: "Design UX/UI",
      //   },
      //   {
      //     description:
      //       "Strong frustration with bugs and a preference for rigor and precision align well with quality assurance principles.",
      //     matchRank: 4,
      //     track: "Qualité Logicielle (QA)",
      //   },
      //   {
      //     description:
      //       "Strong foundation in data analysis and comfort with logic and numbers, indicating potential for more advanced data science roles.",
      //     matchRank: 4,
      //     track: "Science des Données",
      //   },
      //   {
      //     description:
      //       "Interest in how applications function under the hood and preference for rigor, but not a primary choice in specific tech preferences.",
      //     matchRank: 3,
      //     track: "Développement Back-End",
      //   },
      //   {
      //     description:
      //       "Interest in automation and comfort with logic/numbers, but did not explicitly choose AI/ML as a primary preference.",
      //     matchRank: 3,
      //     track: "Intelligence Artificielle / Machine Learning",
      //   },
      //   {
      //     description:
      //       "Limited indicators for project management, no clear preference for coordination or leadership.",
      //     matchRank: 2,
      //     track: "Gestion de Projet Tech",
      //   },
      //   {
      //     description:
      //       "Limited alignment, did not choose the option related to ensuring system functionality or preventing bugs as a primary role.",
      //     matchRank: 2,
      //     track: "DevOps",
      //   },
      //   {
      //     description:
      //       "No specific indicators for cybersecurity interest or aptitude were identified.",
      //     matchRank: 1,
      //     track: "Cybersécurité",
      //   },
      // ];

      console.log("AI response:", result);

      localStorage.setItem(
        "techOrientationFormData",
        JSON.stringify({ formData, expiredIn: Date.now() + 2 * 60 * 60 * 1000 })
      );
      localStorage.setItem(
        "techOrientationFormResult",
        JSON.stringify({ result, expiredIn: Date.now() + 2 * 60 * 60 * 1000 })
      );
      setMatchedTracks(result.sort((a, b) => b.matchRank - a.matchRank)); // Sort by matchRank ascending

      // Redirect to the summary page
      setCurrentStep("trackSelection");
      // setShowSummary(true);
    } catch {
      // setShowSummary(false);
    } finally {
      setIsMatching(false);
    }
  };

  const handleTrackSelect = () => {
    if (selectedTrack) {
      localStorage.setItem(
        "techOrientationSelectedTrack",
        JSON.stringify(selectedTrack)
      );

      const tracks = db.tracks.getRows();
      console.log("All tracks:", tracks);
      const trackSkills = tracks
        .filter((track) => {
          return track.name.toLowerCase().includes(selectedTrack.toLowerCase());
        })
        .flatMap((track) => track.skills);

      const projects = db.projects.getRows();
      console.log("All projects:", projects);
      const trackProjects = projects
        .filter((project) => {
          const skills = project.skills || [];
          const skillsMatchCount = skills.filter((skill) =>
            skill.toLowerCase().includes(selectedTrack.toLowerCase())
          ).length;
          return skillsMatchCount > 0;
        })
        .map((project) => {
          const skills = project.skills || [];
          let rank = 0;

          trackSkills.forEach((skill) => {
            rank += skills.filter((s) =>
              s.toLowerCase().includes(skill.toLowerCase())
            ).length;
          });

          return {
            ...project,
            rank,
          };
        })
        .sort((a, b) => b.rank - a.rank);

      console.log("Filtered projects:", trackProjects);

      setMatchedProjects(trackProjects);

      localStorage.setItem(
        "techOrientationTrackProjects",
        JSON.stringify(trackProjects)
      );

      setCurrentStep("projectSelection");
      console.log("Selected track:", selectedTrack);
    }
  };

  const handleProjectSelect = async () => {
    setSelectedProject(selectedProject);
    localStorage.setItem(
      "techOrientationSelectedProject",
      JSON.stringify(selectedProject)
    );

    router.push("generate-roadmap");
  };

  const resetForm = () => {
    setFormData({
      techAttraction: "",
      problemToSolve: "",
      learningExperience: "",
      workPreference: "",
      favoriteSubjects: "",
      appAttention: "",
      productRole: "",
      creativityVsRigor: "",
      techExperience: "",
      techFrustration: "",
      problemSolving: "",
      projectPreference: "",
      comfortWithLogic: "",
      learningStyle: "",
    });
    setShowSummary(false);
  };

  React.useEffect(() => {
    const localStorageData = localStorage.getItem("techOrientationFormData");
    if (localStorageData) {
      try {
        const parsedData = JSON.parse(localStorageData);
        const isExpired = Date.now() > parsedData.expiredIn;
        if (isExpired) {
          localStorage.removeItem("techOrientationFormData");
          return;
        }
        setFormData(parsedData.formData);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  if (showSummary) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 rounded-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Récapitulatif de votre profil
          </h1>
          <p className="text-blue-100">
            Voici un résumé complet de vos réponses
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Section 1 : Intérêts et motivations générales
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Ce qui vous attire dans la technologie :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.techAttraction || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Problème à résoudre avec la technologie :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.problemToSolve || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {"Expérience d'apprentissage complexe :"}
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.learningExperience || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Préférence de travail :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.workPreference || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Matières préférées :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.favoriteSubjects || "Non renseigné"}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Section 2 : Préférences spécifiques à la Tech
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Ce qui retient votre attention dans les apps :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.appAttention || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {"Rôle préféré dans la création d'un produit :"}
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.productRole || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Préférence créativité vs rigueur :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.creativityVsRigor || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Expérience technique :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.techExperience || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Frustrations avec la technologie :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.techFrustration || "Non renseigné"}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Section 3 : Aptitudes et style de travail
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Réaction face aux problèmes complexes :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.problemSolving || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Préférence de projets :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.projectPreference || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Confort avec la logique :
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.comfortWithLogic || "Non renseigné"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {"Style d'apprentissage :"}
                </h3>
                <p className="text-gray-700 bg-white p-3 rounded mt-2">
                  {formData.learningStyle || "Non renseigné"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8 px-5">
          {/* <button
            onClick={resetForm}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
          >
            Recommencer le formulaire
          </button> */}
          {/* <button
            onClick={() => window.print()}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200 font-semibold"
          >
            Imprimer le récapitulatif
          </button> */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isMatching}
            className={cn(
              "bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-orange-500 hover:to-orange-600 cursor-pointer transform hover:scale-105 transition-all duration-200 shadow-lg",
              isMatching && "opacity-50 cursor-not-allowed"
            )}
          >
            {isMatching ? "Matching..." : "Matcher avec un Co-apprenant"}
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === "personalityTest") {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {"Formulaire d'Orientation Technologique"}
          </h1>
          <p className="text-blue-100">
            Découvrez votre profil tech idéal en répondant à ces questions
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Section 1 : Intérêts et motivations générales
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1. Qu&apos;est-ce qui vous attire le plus dans le monde de la
                  technologie ?
                </label>
                <textarea
                  value={formData.techAttraction}
                  onChange={(e) =>
                    handleInputChange("techAttraction", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    formErrors.techAttraction ? "border-red-500" : ""
                  )}
                  rows={3}
                  placeholder="Décrivez ce qui vous passionne..."
                />
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.techAttraction}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. Si vous pouviez résoudre n&apos;importe quel problème dans
                  le monde en utilisant la technologie, lequel choisiriez-vous
                  et pourquoi ?
                </label>
                <textarea
                  value={formData.problemToSolve}
                  onChange={(e) =>
                    handleInputChange("problemToSolve", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    formErrors.problemToSolve ? "border-red-500" : ""
                  )}
                  rows={3}
                  placeholder="Quel problème résoudriez-vous ?"
                />
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.problemToSolve}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  3. Décrivez une expérience où vous avez dû apprendre une
                  nouvelle compétence complexe.
                </label>
                <textarea
                  value={formData.learningExperience}
                  onChange={(e) =>
                    handleInputChange("learningExperience", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    formErrors.learningExperience ? "border-red-500" : ""
                  )}
                  rows={3}
                  placeholder="Comment avez-vous abordé cet apprentissage ?"
                />
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.learningExperience}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  4. Préférez-vous travailler seul, en petite équipe, ou dans
                  une grande structure ?
                </label>
                <select
                  value={formData.workPreference}
                  onChange={(e) =>
                    handleInputChange("workPreference", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    formErrors.workPreference ? "border-red-500" : ""
                  )}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="Travailler seul">Travailler seul</option>
                  <option value={"En petite équipe (2-5 personnes)"}>
                    En petite équipe (2-5 personnes)
                  </option>
                  <option value="Dans une grande structure">
                    Dans une grande structure
                  </option>
                  <option value="mixte">Cela dépend du projet</option>
                </select>
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.workPreference}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  5. Quelles sont vos matières préférées à l&apos;école ou dans
                  vos études ?
                </label>
                <textarea
                  value={formData.favoriteSubjects}
                  onChange={(e) =>
                    handleInputChange("favoriteSubjects", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    formErrors.favoriteSubjects ? "border-red-500" : ""
                  )}
                  rows={2}
                  placeholder="Mathématiques, sciences, littérature, arts..."
                />
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.favoriteSubjects}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Section 2 : Préférences spécifiques à la Tech
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {
                    "1. Lorsque vous utilisez des applications ou des sites web, qu'est-ce qui retient le plus votre attention ?"
                  }
                </label>
                <textarea
                  value={formData.appAttention}
                  onChange={(e) =>
                    handleInputChange("appAttention", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",
                    formErrors.appAttention ? "border-red-500" : ""
                  )}
                  rows={2}
                  placeholder="Simplicité, esthétique, rapidité, fonctionnalités..."
                />
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.appAttention}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. Imaginez que vous construisez un produit numérique. Que
                  préféreriez-vous faire ?
                </label>
                <select
                  value={formData.productRole}
                  onChange={(e) =>
                    handleInputChange("productRole", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",
                    formErrors.productRole ? "border-red-500" : ""
                  )}
                >
                  <option value="">Choisissez votre rôle préféré</option>
                  <option
                    value={
                      "A. Concevoir l'apparence et l'interaction (Designer UX/UI)"
                    }
                  >
                    {
                      "A. Concevoir l'apparence et l'interaction (Designer UX/UI)"
                    }
                  </option>
                  <option
                    value={
                      "B. Écrire le code qui fait fonctionner le produit (Développeur Backend)"
                    }
                  >
                    {
                      "B. Écrire le code qui fait fonctionner le produit (Développeur Backend)"
                    }
                  </option>
                  <option
                    value={
                      "C. Assurer que tout fonctionne sans bugs (Testeur QA, DevOps)"
                    }
                  >
                    {
                      "C. Assurer que tout fonctionne sans bugs (Testeur QA, DevOps)"
                    }
                  </option>
                  <option
                    value={
                      "D. Analyser les données d'utilisation (Data Analyst)"
                    }
                  >
                    {"D. Analyser les données d'utilisation (Data Analyst)"}
                  </option>
                  <option value="E. Protéger contre les menaces (Cybersécurité)">
                    E. Protéger contre les menaces (Cybersécurité)
                  </option>
                  <option
                    value={
                      "F. Gérer le projet et coordonner l'équipe (Chef de projet)"
                    }
                  >
                    {
                      "F. Gérer le projet et coordonner l'équipe (Chef de projet)"
                    }
                  </option>
                  <option value="G. Créer des algorithmes intelligents (Développeur IA/ML)">
                    G. Créer des algorithmes intelligents (Développeur IA/ML)
                  </option>
                </select>
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.productRole}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  3. Êtes-vous plus attiré par les tâches créatives ou celles
                  qui exigent de la rigueur ?
                </label>
                <select
                  value={formData.creativityVsRigor}
                  onChange={(e) =>
                    handleInputChange("creativityVsRigor", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",
                    formErrors.creativityVsRigor ? "border-red-500" : ""
                  )}
                >
                  <option value="">Sélectionnez votre préférence</option>
                  <option value="Créativité et innovation">
                    Créativité et innovation
                  </option>
                  <option value="Rigueur et précision">
                    Rigueur et précision
                  </option>
                  <option value="Un équilibre des deux">
                    Un équilibre des deux
                  </option>
                </select>
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.creativityVsRigor}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  4. Avez-vous déjà eu une expérience avec la programmation, la
                  conception, l&apos;analyse de données ou la résolution de
                  problèmes techniques ?
                </label>
                <textarea
                  value={formData.techExperience}
                  onChange={(e) =>
                    handleInputChange("techExperience", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",
                    formErrors.techExperience ? "border-red-500" : ""
                  )}
                  rows={3}
                  placeholder="Décrivez vos expériences, même minimes..."
                />
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.techExperience}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  5. Qu&apos;est-ce qui vous frustre le plus lorsque vous
                  utilisez la technologie ?
                </label>
                <textarea
                  value={formData.techFrustration}
                  onChange={(e) =>
                    handleInputChange("techFrustration", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent",
                    formErrors.techFrustration ? "border-red-500" : ""
                  )}
                  rows={2}
                  placeholder="Lenteur, bugs, complexité, manque d'intuitivité..."
                />
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.techFrustration}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">
              Section 3 : Aptitudes et style de travail
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1. Comment réagissez-vous face à un problème complexe sans
                  solution immédiate ?
                </label>
                <textarea
                  value={formData.problemSolving}
                  onChange={(e) =>
                    handleInputChange("problemSolving", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                    formErrors.problemSolving ? "border-red-500" : ""
                  )}
                  rows={3}
                  placeholder="Décrivez votre approche..."
                />
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.problemSolving}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. Préférez-vous des projets avec des règles claires ou plus
                  de liberté d&apos;exploration ?
                </label>
                <select
                  value={formData.projectPreference}
                  onChange={(e) =>
                    handleInputChange("projectPreference", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                    formErrors.projectPreference ? "border-red-500" : ""
                  )}
                >
                  <option value="">Choisissez votre préférence</option>
                  <option
                    value={"Projets avec règles claires et étapes définies"}
                  >
                    Projets avec règles claires et étapes définies
                  </option>
                  <option value={"Projets ouverts avec liberté d'explorer"}>
                    {"Projets ouverts avec liberté d'explorer"}
                  </option>
                  <option value={"Un mélange des deux selon le contexte"}>
                    Un mélange des deux selon le contexte
                  </option>
                </select>
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.projectPreference}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  3. Êtes-vous à l&apos;aise avec les chiffres, la logique et
                  les raisonnements abstraits ?
                </label>
                <select
                  value={formData.comfortWithLogic}
                  onChange={(e) =>
                    handleInputChange("comfortWithLogic", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                    formErrors.comfortWithLogic ? "border-red-500" : ""
                  )}
                >
                  <option value="">Évaluez votre niveau</option>
                  <option value={"Très à l'aise"}>{"Très à l'aise"}</option>
                  <option value={"À l'aise"}>{"À l'aise"}</option>
                  <option value={"Niveau moyen"}>{"Niveau moyen"}</option>
                  <option value={"J'ai des difficultés"}>
                    {"J'ai des difficultés"}
                  </option>
                </select>
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.comfortWithLogic}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  4. Lorsque vous apprenez quelque chose de nouveau, vous
                  préférez :
                </label>
                <select
                  value={formData.learningStyle}
                  onChange={(e) =>
                    handleInputChange("learningStyle", e.target.value)
                  }
                  className={cn(
                    "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                    formErrors.learningStyle ? "border-red-500" : ""
                  )}
                >
                  <option value="">
                    Choisissez votre style d&apos;apprentissage
                  </option>
                  <option value={"A. Lire des livres et des articles"}>
                    A. Lire des livres et des articles
                  </option>
                  <option value={"B. Regarder des tutoriels vidéo"}>
                    B. Regarder des tutoriels vidéo
                  </option>
                  <option
                    value={"C. Pratiquer par vous-même avec des exercices"}
                  >
                    C. Pratiquer par vous-même avec des exercices
                  </option>
                  <option value={"D. Collaborer et échanger avec d'autres"}>
                    {"D. Collaborer et échanger avec d'autres"}
                  </option>
                </select>
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.learningStyle}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start pt-6 px-5">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isMatching}
              className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-orange-500 hover:to-orange-600 cursor-pointer transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {isMatching ? "Matching..." : "Matcher avec un Co-apprenant"}
            </button>
          </div>
        </div>
      </div>
    );
  } else if (currentStep === "trackSelection") {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 rounded-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Ces parcours sont faits pour toi !
          </h1>
          <p className="text-blue-100">
            Choisis le parcours qui te correspond le mieux
          </p>
        </div>

        {/* Tracks grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {matchedTracks.length === 0 && (
            <p className="col-span-full text-center text-gray-600">
              Aucun parcours détecté. Veuillez revenir en arrière et réessayer.
            </p>
          )}

          {matchedTracks.map((meta) => {
            const isSelected = selectedTrack === meta.track;
            return (
              <label
                key={meta.track}
                className={cn(
                  "group relative cursor-pointer rounded-xl border-2 p-5 transition-all",
                  "bg-white shadow hover:shadow-lg hover:-translate-y-0.5",
                  isSelected
                    ? "border-orange-500 ring-4 ring-orange-500/20"
                    : "border-transparent"
                )}
              >
                {/* Visually hidden radio for accessibility */}
                <input
                  type="radio"
                  name="track"
                  value={meta.track}
                  checked={isSelected}
                  onChange={() => setSelectedTrack(meta.track)}
                  className="sr-only"
                />

                <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600">
                  {meta.track}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{meta.description}</p>

                <span className="absolute -top-3 -left-3 rounded-full bg-slate-800 text-white text-xs px-2 py-0.5">
                  {meta.matchRank ==
                  Math.max(...matchedTracks.map((b) => b.matchRank))
                    ? `Meilleur match ${meta.matchRank}/${Math.max(
                        ...matchedTracks.map((b) => b.matchRank)
                      )}`
                    : `Match ${meta.matchRank}/${Math.max(
                        ...matchedTracks.map((b) => b.matchRank)
                      )}`}
                </span>

                {isSelected && (
                  <span
                    aria-hidden
                    className="absolute top-3 right-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold"
                  >
                    ✓
                  </span>
                )}
              </label>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-10 flex gap-4">
          <button
            type="button"
            onClick={() => setCurrentStep("personalityTest")}
            className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            ← Modifier mes réponses
          </button>

          <button
            type="button"
            disabled={!selectedTrack}
            onClick={handleTrackSelect}
            className={cn(
              "px-6 py-3 rounded-lg font-semibold text-white transition-all shadow",
              selectedTrack
                ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105"
                : "bg-slate-400 cursor-not-allowed opacity-70"
            )}
          >
            Continuer
          </button>
        </div>
      </div>
    );
  } else if (currentStep === "projectSelection") {
    return (
      <div>
        <div className="flex flex-col gap-4">
          {matchedProjects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-between border rounded-lg p-4 hover:shadow-md cursor-pointer",
                selectedProject?.name === project.name
                  ? "border-orange-500 ring-4 ring-orange-500/20"
                  : "border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center"></div>
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.description.length > 90
                      ? project.description.slice(0, 90) + "..."
                      : project.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Durée: {project.lengthInWeeks} semaines
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded cursor-pointer transition-all duration-200"
                onClick={() => setSelectedProject(project)}
              >
                Sélectionner
              </button>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-10 flex gap-4">
          <button
            type="button"
            onClick={() => setCurrentStep("trackSelection")}
            className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            ← Modifier mes réponses
          </button>

          <button
            type="button"
            disabled={!selectedProject}
            onClick={() => handleProjectSelect()}
            className={cn(
              "px-6 py-3 rounded-lg font-semibold text-white transition-all shadow",
              selectedProject
                ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105"
                : "bg-slate-400 cursor-not-allowed opacity-70"
            )}
          >
            Générer la roadmap
          </button>
        </div>
      </div>
    );
  }
};

export default TechOrientationForm;
