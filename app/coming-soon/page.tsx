"use client";

import React, { useState } from "react";
import { Header } from "../components/Header";
import CoLearningHeader from "../components/CoLearningHeader";
import TechOrientationForm from "../components/TechOrientationForm";
import { useRouter } from "next/navigation";
import ComingSoon from "../components/ComingSoon";

const ComingSoonPage = () => {
  const router = useRouter();
  const [featureName, setFeatureName] = useState("");
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("featureName")) {
      setFeatureName(query.get("featureName") as string);
    }
    if (query.get("description")) {
      setDescription(query.get("description") as string);
    }
  }, [description, featureName, router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="bg-gray-50 p-8 rounded-lg max-w-7xl mx-auto ">
          <div>
            <CoLearningHeader />
          </div>
          <div className="mt-8 text-gray-700 text-lg leading-relaxed mx-auto border-t border-gray-200 pt-6">
            <ComingSoon featureName={featureName} description={description} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComingSoonPage;
