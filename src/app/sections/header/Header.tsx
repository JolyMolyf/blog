import FeatureCard from '@/app/components/featureCard/FeatureCard';
import React from 'react';
import './header.scss';

interface Props {}

const Header = () => {
  return <div className='header max-w-[1200px] m-auto flex flex-row justify-between'>
    <div className='header-left-wrapper max-w-[45%] mt-[25vh]'>
        <div className='mb-[8vh]'>
            <p className='text-4xl font-light mb-[0px]'>Hello, I am</p>
            <p className='text-mainViolet text-[64px] font-bold'>Seabstian</p>
            <p className='text-xs'>Javascript developer</p>
        </div>
        <div>
            <div>
                Sr. <p className='inline-block text-mainViolet'>Software Engineer</p> currently working as Tech Lead of the Doc Squad at Algolia. 
                I mostly do front-end development, and I am a Vue.js and CSS nerd. I ca not shut up about 
                test-driven development and utility-first CSS. I also share what | learn on my blog frontstufrio, 
                or at meetups and conferences.
            </div>
        </div>
    </div>
    <div className='header-right-wrapper mt-[10vh]'>
      <FeatureCard title='JS'/>
      <FeatureCard title='UI'/>
      <FeatureCard title='UX'/>
      <FeatureCard title='4' subTitle='Years' bottom='experience' />
      <FeatureCard title='10+' bottom='Projects'/>
      <FeatureCard title='DB'/>
    </div>
  </div>
}

export default Header