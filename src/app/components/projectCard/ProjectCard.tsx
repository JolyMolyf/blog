'use client';
import './projectCardStyles.scss';
import { useRouter } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';
import { IProject } from '@/app/sections/projects/Projects';
import TechStackisplay from '../common/Timeline/techStackDisplay/TechStackDisplay';

interface Props {
    project: IProject;
}


const ProjectCard = (props:Props) => {
    const { project } = props;
    const divAnimation = useAnimation();
    const imageAnimation = useAnimation()
    const router = useRouter();

    const handleCardClick = () => {
        router.push(project.url);
    }

    return (
        <div className='projectCard' 
        onClick={handleCardClick}
        onMouseLeave={() => {
            divAnimation.stop();
            imageAnimation.stop();
            divAnimation.start('initial');
            imageAnimation.start('initial');
        }}
        onMouseEnter={() => {
            divAnimation.stop();
            imageAnimation.stop()
            divAnimation.start('hover');
            imageAnimation.start('hover');
        }}
        >
            <img src={project.coverImage}/>
            <div className='projectCard-info'>
                <div>
                    <p className='section-small-header projectCard-info-text'>{project.title}</p>
                    <p className='highlighted-main-text projectCard-info-text'>{project.role}</p>
                    <TechStackisplay stack={project.techSatck}/>
                    <p className='projectCard-info-text'> {project.description}</p>
                    <p className='section-small-header-violet projectCard-info-text'>Key Achievements:</p>
                    {project.bulletpoints.map((bulletPoint, index) => {
                        return (
                            <div className='projectCard-info-bullet' key={index} >
                                <img src='./icons/fingerprint-solid.svg'/>
                                <p className='main-text projectCard-info-text'>
                                    {bulletPoint}
                                </p>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard