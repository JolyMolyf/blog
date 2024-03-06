import React from 'react'

interface Props {}

const Header = () => {
  return <div className='max-w-[1200px] m-auto flex flex-row'>
    <div className='left-wrapper max-w-[45%] mt-[20vh]'>
        <div className='mb-[8vh]'>
            <p className='text-4xl font-light mb-[0px]'>Hello, I am</p>
            <p className='text-mainViolet text-[64px] font-bold'>Seabstian</p>
            <p className='text-xs'>Javascript developer</p>
        </div>
        <div>
            <div>
                Sr. <p className='inline-block text-mainViolet'>Software Engineer</p> currently working as Tech Lead of the Doc Squad at Algolia. 
                I mostly do front-end development, and I am a Vue.js and CSS nerd. I can't shut up about 
                test-driven development and utility-first CSS. I also share what | learn on my blog frontstufrio, 
                or at meetups and conferences.
            </div>
        </div>
    </div>
    <div className='right-wrapper'>

    </div>
  </div>
}

export default Header