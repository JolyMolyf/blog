import ProjectCard from '@/app/components/projectCard/ProjectCard';
import React from 'react'

interface Props {}

export interface IProject {
  title: string;
  description: string;
  role: string;
  techSatck: Array<string>;
  coverImage: string;
  url: string;
  bulletpoints: Array<string>;
}

const projects:Array<IProject> = [
    { 
        title: 'Project for RICG sp. z.o.o', 
        role: 'Fullstack Javascript Developer', 
        techSatck: ['React', 'TypeScript', 'Redux', 'Stripe', 'Strapi', 'Scss', 'Amazon S3'], 
        description: 'Developed from scratch online e-commerce and e-learning platform', 
        coverImage: './images/project_image.png', 
        url: 'https://szkolenia.ricg.eu/',
        bulletpoints: [
          'Integrated Stripe to enable all popular payment methods such as BLIK, Apple/Google pay, Przelewy24.',
          'Used AWS S3 bucket with presigned access URLs to protect the author`s content (lectures) from being easily stolen after being displayed in the in-built video player.',
          'Integrated Google OAuth to enable users to easily create accounts on the platform.',
          'Optimized build to achieve 38% better performance for end users.'
        ]
    }
]

const Projects = () => {
  return <div className='projects'>
    <p className='section-header'>Projects</p>
    {projects.map((project, index: number) => {
        return (
            <div key={index}>
                <ProjectCard project={project}/>
            </div>
        )
    })}
  </div>
}

export default Projects