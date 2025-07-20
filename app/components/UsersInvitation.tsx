"use client";
import React, { useState } from "react";
import { X, MapPin, Mail, UserPlus, Heart, Target } from "lucide-react";
import { User } from "@/seeds";
import { useRouter } from "next/navigation";

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
    router.push("coming-soon");
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
