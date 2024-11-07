'use client';
import React from 'react';
import './Menubar.scss';
import Downloadicon from '../icons/Downloadicon';
import { useRouter } from 'next/navigation';

interface Props {}

const Menubar = () => {
    const router = useRouter();
    const handleCvDownload = () => {
        router.push('https://drive.google.com/file/d/1-VpEKM5NdTDnMAAlxDrikMgyFfJgHSHx/view?usp=sharing')
    }
    return (

    <div className='menu' onClick={() => {router.push('/')}}>
        <div className='menu-item font-bold flex flex-row justify-start'>
            <p className='hover-underline-animation'>Seb.tech</p>
        </div>
        <div className='menu-item menu-item-clickable flex flex-row items-center' onClick={handleCvDownload}>
            <p className='mx-2 hover-underline-animation'>CV</p>
            <Downloadicon/>
        </div>
        <div className='menu-item menu-item-clickable flex flex-row' onClick={() => {router.push('/blog')}}>
            <p className='hover-underline-animation'>Blog</p>
        </div>     
    </div>
)
}

export default Menubar