import FeatureCard from '@/app/components/featureCard/FeatureCard';
import React from 'react';
import './header.scss';
import { skillSet } from '@/app/utils/consts/skillSet';
import Menubar from '@/app/components/common/menubar/Menubar';

interface Props {}

const Header = () => {
  return (
    <>
        <Menubar/>
        <div className='header'>
            <div className='header-left-wrapper'>
                <div className='header-left-wrapper-title'>
                    <p className='text-4xl font-light mb-[0px]'>Hello, I am</p>
                    <p className='section-biggest-violet-text bold'>Seabstian</p>
                    <p className='text-s font-light'>Javascript developer</p>
                </div>
                <div>
                    <div>
                        <p className='main-text'>
                            I am a <span className='text-mainViolet'> Javascript developer with 5 years </span> of comercial experience, specializing in React and TypeScript. 
                            For last 3 years I have been working on fintech solutions for one of the biggest banks in the world.  I hold a Bachelors degree in Software Engineering, 
                            which has given me a strong foundation in technical expertise and user experience design. 
                        </p>
                    </div>
                </div>
            </div>
            <div className='header-right-wrapper'>
                { skillSet.map((skill, index) => {
                    return (
                        <FeatureCard skill={skill} index={index}/>
                    )
                }) }
            </div>
        </div>
        <div className='header-scroll'>
            <p className='highlighted-main-text-smaller'>Scroll down</p>
            <img src='./icons/angles-down-solid.svg'/>
        </div>
  </>
  )
}

export default Header