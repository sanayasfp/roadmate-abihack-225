"use client";
import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '73K+', label: 'Apprenants' },
  { value: '100K+', label: 'Mentors' },
  { value: '10K+', label: 'Projets disponibles' },
  { value: '1M+', label: 'développeurs formés' },
  { value: '90+', label: 'Top entreprises' },
  { value: '4M+', label: 'Organisations' },
];

const StatsSection: React.FC = () => {
  return (
    <div
      className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      id="stats"
      role="tabpanel"
      aria-labelledby="stats-tab"
    >
      <dl className="grid grid-cols-3 gap-8 p-4 mx-auto text-gray-900">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">{stat.value}</dt>
            <dd className="text-gray-500 dark:text-gray-400">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default StatsSection;
