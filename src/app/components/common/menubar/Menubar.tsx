import React from 'react'
import './Menubar.scss';
import Downloadicon from '../icons/Downloadicon'

interface Props {}

const Menubar = () => {
  return (
    <div className='menu'>
        <div className='menu-item font-bold flex flex-row justify-start'>
          <p className='hover-underline-animation'>Seb.tech</p>
        </div>
        <div className='menu-item menu-item-clickable flex flex-row items-center'>
          <p className='mx-2 hover-underline-animation'>CV</p>
          <Downloadicon/>
        </div>
        <div className='menu-item menu-item-clickable flex flex-row'>
          <p className='hover-underline-animation'>Blog</p>
        </div>     
    </div>
  )
}

export default Menubar