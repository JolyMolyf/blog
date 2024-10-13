import moment from 'moment'
import React from 'react'

interface Props {
    startDate: Date;
    endDate?:Date;
}

const TimePeriodDisplay = (props:Props) => {
    const { startDate, endDate } = props;
  return (
    <div>
        <div className='timeline-header-item'>
            <p className="main-text ">{moment(startDate.toISOString()).format('MM-YYYY')}</p>
            <div className='separator'/>
            <p className="main-text ">{endDate ? moment(endDate?.toISOString()).format('MM-YYYY') : 'Now'}</p>
        </div>
    </div>
  )
}

export default TimePeriodDisplay