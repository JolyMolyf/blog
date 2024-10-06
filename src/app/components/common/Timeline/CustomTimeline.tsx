import React from 'react'
import './timeline.scss'
import CustomTimeLineItem from './CustomTimelineItem'

interface Props {}

export interface ITimeLineItem {
  companyName: string;
  projectName: string;
  role: string;
  description: string;
  bulletPoints: Array<string>; 
  techStack: Array<string>;
  startDate: Date;
  endDate?: Date;

}

const experieceDate:Array<ITimeLineItem> = [
  {
    companyName: 'GFT',
    projectName: 'Taurus',
    role: 'React Developer',
    description: 'Developed equity pre trade platform for in-house use of CITI bank traders and sales',
    bulletPoints: ['Expanded Market Data Capacity: Successfully increased the number of supported quotes with live market data updates from approximately 10,000 to 140,000, significantly enhancing system scalability.',
      'Delivered Key Functionalities: Led the delivery of four major epics that introduced crucial features, including automated quote pricing, streamlining processes and improving efficiency.',
      'Optimized Data Processing: Optimized the data conversion process, reducing market data parsing time from 2800ms to 600ms, resulting in a 78% performance improvement.',
      'Release Management: Effectively prepared scope and release candidate versions, ensuring timely and quality releases.',
      'Knowledge Sharing: Supervised and onboarded 6 new team members, conducting 2-3 knowledge-sharing sessions per month to foster continuous learning and development.'
    ],
    techStack: ['React', 'Typescript', 'Redux', 'Rxjs'],
    startDate: new Date('01-09-2021')
  },
  {
    companyName: 'Cigen',
    projectName: 'House shield',
    role: 'Junior Javascript Develoepr',
    description: 'Developed equity pre trade platform for in-house use of CITI bank traders and sales',
    bulletPoints: ['Expanded Market Data Capacity: Successfully increased the number of supported quotes with live market data updates from approximately 10,000 to 140,000, significantly enhancing system scalability.',
      'Delivered Key Functionalities: Led the delivery of four major epics that introduced crucial features, including automated quote pricing, streamlining processes and improving efficiency.',
      'Optimized Data Processing: Optimized the data conversion process, reducing market data parsing time from 2800ms to 600ms, resulting in a 78% performance improvement.',
      'Release Management: Effectively prepared scope and release candidate versions, ensuring timely and quality releases.',
      'Knowledge Sharing: Supervised and onboarded 6 new team members, conducting 2-3 knowledge-sharing sessions per month to foster continuous learning and development.'
    ],
    techStack: ['React', 'Typescript', 'Redux', 'Rxjs'],
    startDate: new Date('02-12-2020')
  },
  {
    companyName: 'Cigen',
    projectName: 'Caroi',
    role: 'Junior Javascript Develoepr',
    description: 'Developed equity pre trade platform for in-house use of CITI bank traders and sales',
    bulletPoints: ['Expanded Market Data Capacity: Successfully increased the number of supported quotes with live market data updates from approximately 10,000 to 140,000, significantly enhancing system scalability.',
      'Delivered Key Functionalities: Led the delivery of four major epics that introduced crucial features, including automated quote pricing, streamlining processes and improving efficiency.',
      'Optimized Data Processing: Optimized the data conversion process, reducing market data parsing time from 2800ms to 600ms, resulting in a 78% performance improvement.',
      'Release Management: Effectively prepared scope and release candidate versions, ensuring timely and quality releases.',
      'Knowledge Sharing: Supervised and onboarded 6 new team members, conducting 2-3 knowledge-sharing sessions per month to foster continuous learning and development.'
    ],
    techStack: ['React', 'Typescript', 'Redux', 'Rxjs'],
    startDate: new Date('01-06-2021')
  }
]

const CustomTimeline = () => {
  return (
    <div className='m-auto flex flex-row justify-between'>
            <div className="relative border-s border-gray-200 dark:border-gray-700">       
            {experieceDate.map((timeLineItem, index) => {
                return(
                    <div key={index}>
                        <CustomTimeLineItem timeLineItem={timeLineItem} />
                    </div>
                )
            })}           
        </div>
    </div>
  )
}

export default CustomTimeline