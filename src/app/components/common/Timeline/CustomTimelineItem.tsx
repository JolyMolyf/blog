'use client'
import React, { useState } from 'react'
import { ITimeLineItem } from '@/app/sections/experience/Experience';
import CalendarIcon from './CalendarIcon';
import './timeline.scss';
import TimePeriodDisplay from './TimePeriodDisplay';
import LocationDisplay from './LocationDisplay';
import Button from '../button/Button';
import TechStackisplay from './techStackDisplay/TechStackDisplay';
import { Reveal } from '../../animation/Reveal';

interface IProps {
    timeLineItem: ITimeLineItem
}

const CustomTimeLineItem = (props:IProps) => {
    const { timeLineItem } = props;
    const [ isCollapsed, setIsCollapsed ] = useState(true);

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <Reveal direction='right' delay={0.5}>
                <div className="mb-10 ms-6">            
                    <div className='timeline-header'>
                        <CalendarIcon/>
                        <div className='timeline-header-wrapper'>
                            <p className="section-medium-header timeline-header-wrapper-item">{timeLineItem.companyName}</p>
                            <p className='timeline-header-wrapper-item section-small-header'>Project "{timeLineItem.projectName}"</p>
                            <TimePeriodDisplay className='timeline-header-wrapper-item' startDate={timeLineItem.startDate} endDate={timeLineItem.endDate}/>
                            <LocationDisplay className='timeline-header-wrapper-item' location={timeLineItem.location}/>
                        </div>
                        <div className='timeline-header-wrapper'>
                            <TechStackisplay stack={timeLineItem.techStack}/>
                        </div>
                        <div className='timeline-header-wrapper'>
                            <p className='section-small-header-violet timeline-header-wrapper-item'>{timeLineItem.role}</p>
                        </div>
                        
                    </div>
                    <div className='timeline-achievements' style={{height: isCollapsed ? 0 : ''}}>
                        {timeLineItem.bulletPoints.map((bulletPoint, index) => {
                            return (
                                <div className='timeline-achievements-item' key={index} >
                                    <img alt='click icon' src='./icons/fingerprint-solid.svg'/>
                                    <p className='main-text'>
                                        {bulletPoint}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    { timeLineItem.bulletPoints.length > 0 && (
                        <div className='timeline-actions'>
                            <Button label={ isCollapsed ? 'Achievements' : 'Collapse' } icon={isCollapsed ? './icons/chevron-down-solid.svg' : './icons/chevron-up-solid.svg'} onClick={handleClick}/>
                        </div>
                    ) }
                   
                </div>
            </Reveal>
        </div>
    )
}

export default CustomTimeLineItem