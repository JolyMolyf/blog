'use client';
import './contactStyles.scss';
import React from 'react'

interface Props {}

const contactMethods = [
    {
        name: 'Call me',
        value: '+48664207663',
        icon: './icons/phone-solid.svg',
        description: 'Mon-Sat from 8am to 10pm',
        url: '/',
        action: () => {}
    },
    {
        name: 'Email me',
        value: 'vsevolod.doroszenko@gmail.com',
        icon: './icons/envelope-regular.svg',
        description: 'Any time',
        url: 'mailto:vsevolod.doroszenko@gmail.com',
        action: () => {}
    },
    {
        name: 'LinkedIn',
        value: '',
        icon: './icons/linkedin-in-brands-solid.svg',
        description: 'Any time',
        url: 'https://www.linkedin.com/in/vsevolod-doroshenko/',
        action: () => {}
    },
    {
        name: 'Instagram',
        value: '',
        icon: './icons/instagram-brands-solid.svg',
        description: 'Let`s get acquainted',
        url: 'https://www.instagram.com/joly_molyf/',
        action: () => {}
    },
    
]

const Contact = () => {

    const handleCardClick = (url:string) => {
        if (['https://www.instagram.com/joly_molyf/', 'https://www.linkedin.com/in/vsevolod-doroshenko/', 'mailto:vsevolod.doroszenko@gmail.com' ].includes(url)) {
            window.location.href = url
        }
       
    }

    return (
        <div className='max-w-[1200px] contact'>
            <div className='contact-header'>
                <img src='./icons/code-solid.svg'/>
                <p className='section-header'>Contact Me</p>
                <p className='main-text'>Would be glad to here back from you</p>
            </div>
            <div className='contact-methods'>
                {contactMethods.map((method, index) => {
                    return (
                        <div className='contact-methods-card' key={index} onClick={() => {handleCardClick(method.url)}}>
                            <div className='contact-methods-card-icon'>
                                <img src={method.icon}/>
                            </div>
                            <div className='contact-methods-card-body'>
                                <p className='highlighted-main-text bold'>{method.name}</p>
                                <p className='main-text-light'>{method.description}</p>
                                <p className='main-text-smaller bold'>{method.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact