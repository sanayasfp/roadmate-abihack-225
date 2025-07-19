"use client";
import React from "react";
import Link from "next/link";
import StatsSection from "./StatsSection";

const CoLearningHeader: React.FC = () => {
  return (
    <section className="bg-[#f9f8f3] p-1 rounded-lg shadow-md max-w-full mx-auto flex flex-col md:flex-row  justify-between space-y-6 md:space-y-0">
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

      <div className="flex flex-col items-center md:items-end space-y-2">
        <StatsSection />
      </div>
    </section>
  );
};

export default CoLearningHeader;
