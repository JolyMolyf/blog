import React from 'react'
import Downloadicon from '../icons/Downloadicon'
import { ITimeLineItem } from './CustomTimeline';
import moment from 'moment';
import CalendarIcon from './CalendarIcon';
import './timeline.scss';
import TimePeriodDisplay from './TimePeriodDisplay';
import LocationDisplay from './LocationDisplay';

interface IProps {
    timeLineItem: ITimeLineItem
}

const CustomTimeLineItem = (props:IProps) => {
    const {timeLineItem } = props;


    return (
        <div>
            <div className="mb-10 ms-6">            
                <div className='timeline-header'>
                    <CalendarIcon/>
                    <p className="section-medium-header font-semibold timeline-header-item">{timeLineItem.companyName}</p>
                    <p className='section-small-header'>Project {timeLineItem.projectName}</p>
                    <p className='timeline-header-item highlighted-main-text'>{timeLineItem.role}</p>
                    <TimePeriodDisplay startDate={timeLineItem.startDate} endDate={timeLineItem.endDate}/>
                   <LocationDisplay location={timeLineItem.location}/>
                </div>
                <div className='timeline-achievements'>
                    {timeLineItem.bulletPoints.map((bulletPoint, index) => {
                        return (
                            <div className='timeline-achievements-item' key={index}>
                                <img src='./icons/fingerprint-solid.svg'/>
                                <p className='main-text'>
                                    {bulletPoint}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CustomTimeLineItem