"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Container } from "./Container";

interface ComingSoonProps {
  featureName: string;
  description: string; // markdown content
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  featureName,
  description,
}) => {
  return (
    <Container>
      <div className="max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-4">
          {featureName} – Coming Soon
        </h1>
        <p className="mb-6">
          {"Nous travaillons dur sur cette fonctionnalité. Restez à l'écoute !"}
        </p>
        <div className="prose prose-invert text-left mx-auto mb-6">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        <Link
          href="/co-learner-matching"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 17l4-4-4-4m8 8V7"
            />
          </svg>
          Essayer le flow exemple
        </Link>
      </div>
    </Container>
  );
};

export default ComingSoon;
