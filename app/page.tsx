"use client";

import { db } from "@/seeds";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
// import { LandingProjects } from "./components/LandingProjects";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    // Initialize the database
    db.initDB();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        {/* <LandingProjects /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
