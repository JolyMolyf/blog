import React from 'react'
import Downloadicon from '../icons/Downloadicon'
import { ITimeLineItem } from './CustomTimeline';
import moment from 'moment';
import CalendarIcon from './CalendarIcon';
import './timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <div className="text-lg font-semibold timeline-header-item">
                        {timeLineItem.companyName}
                    </div>
                    <div className='timeline-header-item'>
                        <p className="block text-sm font-normal leading-none">{moment(timeLineItem.startDate.toISOString()).format('MM-YYYY')}</p>
                        <div className='separator'/>
                        <p className="block text-sm font-normal leading-none">{timeLineItem?.endDate ? moment(timeLineItem?.endDate?.toISOString()).format('MM-YYYY') : 'Now'}</p>
                    </div>
                    <p className='timeline-header-item highlighted-main-text'>{timeLineItem.role}</p>
                    <div className='timeline-header-item'>
                        <img src='./icons/location-dot-solid.svg'></img>
                        <p className=''>{timeLineItem.location}</p>
                    </div>
                </div>
                <div className='timeline-achievements'>
                    {timeLineItem.bulletPoints.map((bulletPoint, index) => {
                        return (
                            <div className='timeline-achievements-item' key={index}>
                                <img src='./icons/fingerprint-solid.svg'/>
                                <p className=''>
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