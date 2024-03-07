import React from 'react'
import './featureCard.scss'

interface IProps {
    title: string;
    subTitle?: string;
    bottom?:string;  
}

const FeatureCard = (props:IProps) => {

    const { title, subTitle, bottom } = props;
 
    return (
        <div className='featureCard'>
            <div className='featureCard-wrapper'>
                <div className='featureCard-wrapper-title'>
                    <p className='text-white font-bold text-6xl'>{ title }</p>
                    <p className='inline-block text-xl'>{ subTitle }</p>
                </div>
                <p className='text-sm text-center'> { bottom } </p>
            </div>
        </div>
    )
}

export default FeatureCard