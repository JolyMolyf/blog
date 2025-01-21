'use client';
import React from 'react';
import './Menubar.scss';
import Downloadicon from '../icons/Downloadicon';
import { useRouter } from 'next/navigation';

interface Props {}

const CV_URL = 'https://drive.google.com/file/d/1_TU8o4Tcz_CrxJbT_l5ZuO-7CBXgJ0Sf/view?usp=sharing';

const Menubar = () => {
    const router = useRouter();
    const handleCvDownload = (e:any) => {
        e.preventDefault();
        router.push(CV_URL)
    }
    return (

    <div className='menu'>
        <div className='menu-item font-bold flex flex-row justify-start' onClick={() => {router.push('/')}}>
            <p className='hover-underline-animation'>Joly.tech</p>
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