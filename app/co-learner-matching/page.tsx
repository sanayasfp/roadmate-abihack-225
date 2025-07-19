"use client";
import React, { useState } from "react";
import { Header } from "../components/Header";
import CoLearningHeader from "../components/CoLearningHeader";
import TechOrientationForm from "../components/TechOrientationForm";


const CoLearningMatching = () => {


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="bg-gray-50 p-8 rounded-lg max-w-7xl mx-auto ">
          <div>
            <CoLearningHeader />
          </div>
          <div className="mt-8 text-gray-700 text-lg leading-relaxed mx-auto border-t border-gray-200 pt-6">
            <TechOrientationForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoLearningMatching;
