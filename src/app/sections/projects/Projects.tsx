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

}

const projects:Array<IProject> = [
    { 
        title: 'Project for RICG sp. z.o.o', 
        role: 'Fullstack Javascript developer', 
        techSatck: [], 
        description: '', 
        coverImage: '', 
        url: ''
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