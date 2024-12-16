'use client';
import FeatureCard from '@/app/components/featureCard/FeatureCard';
import React from 'react';
import './header.scss';
import { skillSet } from '@/app/utils/consts/skillSet';
import Menubar from '@/app/components/common/menubar/Menubar';
import { Reveal } from '@/app/components/animation/Reveal';

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header-left-wrapper'>
                <Reveal direction='right'>
                    <div className='header-left-wrapper-title'>
                        <Reveal direction="top" delay={0.5}><p className='text-4xl font-light mb-[0px]'>Hello, I am</p></Reveal>
                        <p className='section-biggest-violet-text bold'>Vsevolod</p>
                        <p className='text-s font-light'>Javascript developer</p>
                    </div>
                </Reveal>
                <Reveal direction='bottom' delay={0.5}>
                    <div>
                        <div>
                            <p className='main-text'>
                                I am a <span className='text-mainViolet'> Javascript developer with 5 years </span> of comercial experience, specializing in React and TypeScript. 
                                For last 3 years I have been working on fintech solutions for one of the biggest banks in the world.  I hold a Bachelors degree in Software Engineering, 
                                which has given me a strong foundation in technical expertise and user experience design. 
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
            <Reveal direction='left'>
                <div className='header-right-wrapper'>
                    { skillSet.map((skill, index) => {
                        return (
                            <FeatureCard key={index} skill={skill}/>
                        )
                    }) }
                </div>
            </Reveal>
        </div>
  </>
  )
}

export default Header