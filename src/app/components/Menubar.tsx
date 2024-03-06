import React from 'react'

interface Props {}

const Menubar = () => {
  return (
    <div className='header flex flex-row justify-between max-w-[1200px] m-auto my-5 text-mainViolet cursor-pointer text-lg'>
      <div className='header-right'>
        <div className='header-item font-bold flex flex-row justify-start'>
          <p className='text-mainViolet'>Seb.tech</p>
        </div>
      </div>
      <div className='header-left flex flex-row justify-between'>
        <div className='header-item mx-10 flex flex-row'>
          <p className='hover-underline-animation'>CV</p>
        </div>
        <div className='header-item mx-10 flex flex-row'>
          <p className='hover-underline-animation'>Blog</p>
        </div>
        <div className='header-item mx-10 flex flex-row'>
          <p className='hover-underline-animation'>Log in</p>
        </div>
      </div>
      
     
    </div>
  )
}

export default Menubar