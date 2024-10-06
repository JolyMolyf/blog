import React from 'react'
import Downloadicon from '../icons/Downloadicon'
import { ITimeLineItem } from './CustomTimeline';
import moment from 'moment';
import CalendarIcon from './CalendarIcon';

interface IProps {
    timeLineItem: ITimeLineItem
}

const CustomTimeLineItem = (props:IProps) => {
    const {timeLineItem } = props;
    return (
    <div>
        <div className="mb-10 ms-6">            
            <CalendarIcon/>
            <div className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {timeLineItem.companyName}
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{moment(timeLineItem.startDate.toISOString()).format('MM-YYYY')}</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
            </p>

            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <Downloadicon/>
                Download ZIP
            </a>
        </div>
    </div>)
}

export default CustomTimeLineItem