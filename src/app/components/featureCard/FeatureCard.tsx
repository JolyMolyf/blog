import React from 'react'
import './featureCard.scss'
import { ISkillSetItem } from '@/app/utils/consts/skillSet';

interface IProps {
    skill: ISkillSetItem;
}

const FeatureCard = (props:IProps) => {

    const { skill } = props;
 
    return (
        <div className='featureCard'>
            <div className='featureCard-wrapper'>
                <div className='featureCard-wrapper-title'>
                    <p className='text-white font-bold'>{ skill.title }</p>
                    <p className='inline-block text-xl'>{ skill?.subTitle }</p>
                </div>
                <p className='text-sm text-center'> { skill?.description } </p>
            </div>
        </div>
)
}

export default FeatureCard