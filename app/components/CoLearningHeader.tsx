"use client";
import React from "react";
import Link from "next/link";
import StatsSection from "./StatsSection";
import { Container } from "./Container";

const CoLearningHeader: React.FC = () => {
  return (
    <section className="p-1 max-w-full mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0">
        <Container>
            <div className="space-y-4 max-w-xl px-4 md:px-0 mt-4">
                <h1 className="text-4xl font-semibold text-black md:mt-6">
                Découvre ta voie dans la <span className="text-orange-600">tech</span>.
                </h1>
                <p>
                Passe un test de personnalité pour mieux te connaître, trouve des
                co-apprenants qui te ressemblent, et explore les carrières tech faites
                pour toi.
                </p>
            </div>
    </Container>
  </section>
  );
};

export default CoLearningHeader;
