import React from 'react'
import './timeline.scss'
import Downloadicon from '../icons/Downloadicon'
import CustomTimeLineItem from './CustomTimelineItem'

interface Props {}

const CustomTimeline = () => {
  return (
  <div>
        <div className="relative border-s border-gray-200 dark:border-gray-700">                  
        <CustomTimeLineItem title='Citi Bank' timePeriod='October 2021 - Now' isLatest={true}/>
        <CustomTimeLineItem title='CiGen' timePeriod='January 2021 - September 2021'/>
        <CustomTimeLineItem title='S&T' timePeriod='December 2019 - January 2021'/>
        </div>
    </div>)
}

export default CustomTimeline