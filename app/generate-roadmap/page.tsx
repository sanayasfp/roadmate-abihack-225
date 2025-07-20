"use client";
import { db, Project } from "@/seeds";
import React, { useState } from "react";
import { Header } from "../components/Header";
import { generateRoadmap } from "@/actions";
import { RawRoadmapItem, RoadmapViewer } from "../components/RoadmapViewer";

export default function GenerateRoadmap() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [roadmap, setRoadmap] = useState<RawRoadmapItem[] | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      db.initDB();
      setIsLoading(true);
      setMessage("Chargement du projet et du parcours sélectionnés...");

      const project = localStorage.getItem("techOrientationSelectedProject");
      const track = localStorage.getItem("techOrientationSelectedTrack");

      if (!project || !track) {
        setError(
          "Aucun projet ou parcours sélectionné. Veuillez sélectionner un projet et un parcours."
        );
        setIsLoading(false);
        return;
      }

      const parsedProject = JSON.parse(project) as Project;
      const parsedTrack = JSON.parse(track) as string;

      console.log("Selected Project:", parsedProject);
      console.log("Selected Track:", parsedTrack, typeof parsedTrack);

      setSelectedProject(parsedProject);
      setSelectedTrack(parsedTrack);

      console.log("Selected Project:", selectedProject);
      console.log("Selected Track:", selectedTrack);

      setMessage("Génération de la roadmap en cours...");
      const response = await generateRoadmap({
        projectName: parsedProject?.name,
        trackName: parsedTrack,
        projectDescription: parsedProject?.description,
        projectSkills: parsedProject?.skills,
        projectDuration: parsedProject?.lengthInWeeks,
      }) as RawRoadmapItem[] | null;
      setRoadmap(response);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="bg-gray-50 p-8 rounded-lg max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
              {/* Loader (spinner) */}
              <div className="w-10 h-10 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
              {/* Message */}
              <p className="mt-4 text-gray-600 font-medium">{message}</p>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : roadmap ? (
            <RoadmapViewer data={roadmap} />
            // <div className="text-center">
            //   <h2 className="text-2xl font-bold mb-4">Roadmap pour vous</h2>
            //   <pre className="bg-white p-4 rounded-lg shadow-md">
            //     {JSON.stringify(roadmap, null, 2)}
            //   </pre>
            // </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
