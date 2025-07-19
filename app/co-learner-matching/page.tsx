"use client";
import React, { useState } from "react";

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

  const [showSummary, setShowSummary] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    setShowSummary(true);
    // Scroll to top to show summary
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  if (showSummary) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8">
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

        <div className="flex gap-4 mt-8">
          <button
            onClick={resetForm}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
          >
            Recommencer le formulaire
          </button>
          <button
            onClick={() => window.print()}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200 font-semibold"
          >
            Imprimer le récapitulatif
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8">
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Décrivez ce qui vous passionne..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2. Si vous pouviez résoudre n&apos;importe quel problème dans le
                monde en utilisant la technologie, lequel choisiriez-vous et
                pourquoi ?
              </label>
              <textarea
                value={formData.problemToSolve}
                onChange={(e) =>
                  handleInputChange("problemToSolve", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Quel problème résoudriez-vous ?"
              />
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Comment avez-vous abordé cet apprentissage ?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                4. Préférez-vous travailler seul, en petite équipe, ou dans une
                grande structure ?
              </label>
              <select
                value={formData.workPreference}
                onChange={(e) =>
                  handleInputChange("workPreference", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionnez une option</option>
                <option value="seul">Travailler seul</option>
                <option value="petite-equipe">
                  En petite équipe (2-5 personnes)
                </option>
                <option value="grande-structure">
                  Dans une grande structure
                </option>
                <option value="mixte">Cela dépend du projet</option>
              </select>
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={2}
                placeholder="Mathématiques, sciences, littérature, arts..."
              />
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
                1. Lorsque vous utilisez des applications ou des sites web,
                qu&apos;est-ce qui retient le plus votre attention ?
              </label>
              <textarea
                value={formData.appAttention}
                onChange={(e) =>
                  handleInputChange("appAttention", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={2}
                placeholder="Simplicité, esthétique, rapidité, fonctionnalités..."
              />
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Choisissez votre rôle préféré</option>
                <option value="designer">
                  A. Concevoir l&apos;apparence et l&apos;interaction (Designer
                  UX/UI)
                </option>
                <option value="backend">
                  B. Écrire le code qui fait fonctionner le produit (Développeur
                  Backend)
                </option>
                <option value="qa">
                  C. Assurer que tout fonctionne sans bugs (Testeur QA, DevOps)
                </option>
                <option value="data">
                  D. Analyser les données d&apos;utilisation (Data Analyst)
                </option>
                <option value="security">
                  E. Protéger contre les menaces (Cybersécurité)
                </option>
                <option value="manager">
                  F. Gérer le projet et coordonner l&apos;équipe (Chef de
                  projet)
                </option>
                <option value="ai">
                  G. Créer des algorithmes intelligents (Développeur IA/ML)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                3. Êtes-vous plus attiré par les tâches créatives ou celles qui
                exigent de la rigueur ?
              </label>
              <select
                value={formData.creativityVsRigor}
                onChange={(e) =>
                  handleInputChange("creativityVsRigor", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Sélectionnez votre préférence</option>
                <option value="creativite">Créativité et innovation</option>
                <option value="rigueur">Rigueur et précision</option>
                <option value="equilibre">Un équilibre des deux</option>
              </select>
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={3}
                placeholder="Décrivez vos expériences, même minimes..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5. Qu&apos;est-ce qui vous frustre le plus lorsque vous utilisez
                la technologie ?
              </label>
              <textarea
                value={formData.techFrustration}
                onChange={(e) =>
                  handleInputChange("techFrustration", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={2}
                placeholder="Lenteur, bugs, complexité, manque d'intuitivité..."
              />
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
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows={3}
                placeholder="Décrivez votre approche..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2. Préférez-vous des projets avec des règles claires ou plus de
                liberté d&apos;exploration ?
              </label>
              <select
                value={formData.projectPreference}
                onChange={(e) =>
                  handleInputChange("projectPreference", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Choisissez votre préférence</option>
                <option value="structure">
                  Projets avec règles claires et étapes définies
                </option>
                <option value="exploration">
                  Projets ouverts avec liberté d&apos;explorer
                </option>
                <option value="mixte">
                  Un mélange des deux selon le contexte
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                3. Êtes-vous à l&apos;aise avec les chiffres, la logique et les
                raisonnements abstraits ?
              </label>
              <select
                value={formData.comfortWithLogic}
                onChange={(e) =>
                  handleInputChange("comfortWithLogic", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Évaluez votre niveau</option>
                <option value="tres-aise">Très à l&apos;aise</option>
                <option value="aise">À l&apos;aise</option>
                <option value="moyen">Niveau moyen</option>
                <option value="difficile">J&apos;ai des difficultés</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                4. Lorsque vous apprenez quelque chose de nouveau, vous préférez
                :
              </label>
              <select
                value={formData.learningStyle}
                onChange={(e) =>
                  handleInputChange("learningStyle", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">
                  Choisissez votre style d&apos;apprentissage
                </option>
                <option value="lecture">
                  A. Lire des livres et des articles
                </option>
                <option value="video">B. Regarder des tutoriels vidéo</option>
                <option value="pratique">
                  C. Pratiquer par vous-même avec des exercices
                </option>
                <option value="collaboration">
                  D. Collaborer et échanger avec d&apos;autres
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Voir mon récapitulatif
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechOrientationForm;
