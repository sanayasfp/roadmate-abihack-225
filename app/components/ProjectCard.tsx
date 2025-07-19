// components/JobCard.tsx

import React from 'react';

export interface Project {
  id: string;
  company: string;
  batch: string;
  description: string;
  position: string;
  type: string;
  location: string;
  stack: string;
  datePosted: string;
  logoUrl: string;
  applyLink: string;
}

const ProjectCard: React.FC<{ Project: Project }> = ({ Project }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg hover:shadow transition bg-white dark:bg-gray-800">
      <div className="flex items-start space-x-4">
        <img src={Project.logoUrl} alt={Project.company} className="w-10 h-10 rounded" />
        <div>
          <div className="text-sm text-gray-800 dark:text-white font-semibold">
            {Project.company} ({Project.batch}) • <span className="text-gray-500">{Project.description}</span>{' '}
            <span className="text-sm text-gray-400">({Project.datePosted})</span>
          </div>
          <a href={Project.applyLink} className="block text-blue-700 font-medium hover:underline">
            {Project.position}
          </a>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {Project.type} • {Project.location} • {Project.stack}
          </div>
        </div>
      </div>
      <a
        href={Project.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded"
      >
        Apply
      </a>
    </div>
  );
};

export default ProjectCard;
