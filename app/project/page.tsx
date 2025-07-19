// app/jobs/page.tsx or pages/jobs.tsx (selon ton routing)

'use client';
import React from 'react';
import ProjectCard, { Project } from '../components/ProjectCard';
import { Header } from '../components/Header';

const mockProjects: Project[] = [
  {
    id: '1',
    company: 'Lamar Health',
    batch: 'W21',
    description: 'Scaling Intelligence for Healthcare Automations',
    position: 'Full stack engineer for special project 2–3 months - opportunity for longer',
    type: 'Contract',
    location: 'San Mateo, CA, US / Remote (US)',
    stack: 'Full stack',
    datePosted: '8 days ago',
    logoUrl: '/logos/lamar.png',
    applyLink: '#',
  },
  {
    id: '2',
    company: 'Medplum',
    batch: 'S22',
    description: 'API first electronic health record (EHR) that is open source',
    position: 'Founding Engineer (Fullstack)',
    type: 'Full-time',
    location: 'San Francisco, CA, US',
    stack: 'Full stack',
    datePosted: '8 days ago',
    logoUrl: '/logos/medplum.png',
    applyLink: '#',
  },
  {
    id: '3',
    company: 'Medplum',
    batch: 'S22',
    description: 'API first electronic health record (EHR) that is open source',
    position: 'Founding Engineer (Fullstack)',
    type: 'Full-time',
    location: 'San Francisco, CA, US',
    stack: 'Full stack',
    datePosted: '4 days ago',
    logoUrl: '/logos/medplum.png',
    applyLink: '#',
  },
  {
    id: '4',
    company: 'Ziina',
    batch: 'W21',
    description: 'A digital wallet for the Middle East & North Africa',
    position: 'Senior Backend Engineer',
    type: 'Full-time',
    location: 'Dubai',
    stack: 'Backend',
    datePosted: '7 days ago',
    logoUrl: '/logos/ziina.png',
    applyLink: '#',
  },
  {
    id: '5',
    company: 'Porter',
    batch: 'S20',
    description: 'Easiest way to deploy on AWS/GCP/Azure',
    position: 'Full Stack Engineer',
    type: 'Full-time',
    location: 'New York City',
    stack: 'Full stack',
    datePosted: '2 days ago',
    logoUrl: '/logos/porter.png',
    applyLink: '#',
  },
];

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Software Engineer projects added recently
      </h1>
      <div className="space-y-4">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} Project={project} />
        ))}
      </div>
    </div>
          </main>
        </div>
    
  );
};

export default ProjectPage;
