import moment from 'moment';
import React from 'react';
import './timeDisplayStyles.scss';

interface Props {
    startDate: Date;
    endDate?:Date;
    className?:string;
}

const TimePeriodDisplay = (props:Props) => {
    const { startDate, endDate, className } = props;
  return (
    <div>
        <div className={`timePeriodDisplay ${className}`}>
            <p className="main-text ">{moment(startDate.toISOString()).format('MM-YYYY')}</p>
            <div className='separator'/>
            <p className="main-text ">{endDate ? moment(endDate?.toISOString()).format('MM-YYYY') : 'Now'}</p>
        </div>
    </div>
  )
}

export default TimePeriodDisplay