'use client';
import './projectCardStyles.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';
import { IProject } from '@/app/sections/projects/Projects';
import TechStackisplay from '../common/Timeline/techStackDisplay/TechStackDisplay';

interface Props {
    project: IProject;
}

const divVariants = {
    hover: {
       opacity: '100%',
       display: 'block',
       left: '51px',
      },
    initial: {
        opacity: '0',
        display: 'none',
         left: '-600px'
    }
}

const imageVariants = {
    hover: {
        filter: 'brightness(40%)',
       },
     initial: {
        filter: 'brightness(98%)',
     }
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
            divAnimation.start('initial');
            imageAnimation.start('initial');
        }}
        onMouseEnter={() => {
            divAnimation.start('hover');
            imageAnimation.start('hover');
        }}
        >
            <motion.img animate={imageAnimation} variants={imageVariants} src={project.coverImage}/>
            <motion.div transition={{ type:'spring', stiffness:60, ease: 'easeInOut', duration: 0.3}} variants={divVariants} className='projectCard-info' animate={divAnimation}>
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
                
            </motion.div>
        </div>
    )
}

export default ProjectCard