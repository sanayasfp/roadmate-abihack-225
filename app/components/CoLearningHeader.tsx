"use client";
import React from "react";
import { Container } from "./Container";

const CoLearningHeader: React.FC = () => {
  return (
    <section className="p-1 max-w-full mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0">
      <Container>
        <div className="space-y-4 px-4 md:px-0 mt-4">
          <h1 className="text-3xl font-semibold text-black mb-2 leading-snug">
            <span className="text-orange-600">Roadmate</span>{" "}
            {"te connecte à ceux qui partagent tes ambitions"}
          </h1>
          <ul className="list-disc pl-10 text-gray-700 space-y-2">
            <li>Découvre ton profil tech et tes forces uniques.</li>
            <li>{"Associe-toi à d'autres apprenants pour créer ensemble."}</li>
            <li>Explore des projets concrets qui boostent ta carrière.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default CoLearningHeader;
