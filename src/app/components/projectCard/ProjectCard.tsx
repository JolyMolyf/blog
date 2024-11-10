'use client';
import './projectCardStyles.scss';
import { useRouter } from 'next/navigation';
import { IProject } from '@/app/sections/projects/Projects';
import TechStackisplay from '../common/Timeline/techStackDisplay/TechStackDisplay';

interface Props {
    project: IProject;
}


const ProjectCard = (props:Props) => {
    const { project } = props;
    const router = useRouter();

    const handleCardClick = () => {
        router.push(project.url);
    }

    return (
        <div className='projectCard'>
            <img alt='project card background image' className='projectCard-background' src={project.coverImage}/>
            <div className='projectCard-icon'>
                <img src="./icons/hand-pointer-solid.svg"/>
            </div>
            <div className='projectCard-info' onClick={handleCardClick}>
                <div>
                    <p className='section-small-header projectCard-info-text'>{project.title}</p>
                    <p className='highlighted-main-text projectCard-info-text'>{project.role}</p>
                    <TechStackisplay stack={project.techSatck}/>
                    <p className='projectCard-info-text'> {project.description}</p>
                    <p className='section-small-header-violet projectCard-info-text'>Key Achievements:</p>
                    {project.bulletpoints.map((bulletPoint, index) => {
                        return (
                            <div className='projectCard-info-bullet' key={index} >
                                <img alt='click project card icon' src='./icons/fingerprint-solid.svg'/>
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