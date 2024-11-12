import { Reveal } from '@/app/components/animation/Reveal';
import '../../components/common/Timeline/timeline.scss';
import './experienceStyles.scss';
import CustomTimeLineItem from '@/app/components/common/Timeline/CustomTimelineItem';
import React from 'react';

interface IProps {}

export interface ITimeLineItem {
    companyName: string;
    projectName: string;
    location: string;
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
      role: 'Javascript Developer',
      location: 'Poland',
      description: 'Developed equity pre trade platform for in-house use of CITI bank traders and sales',
      bulletPoints: ['Expanded Market Data Capacity: Successfully increased the number of supported quotes with live market data updates from approximately 10,000 to 140,000, significantly enhancing system scalability.',
        'Delivered Key Functionalities: Led the delivery of four major epics that introduced crucial features, including automated quote pricing, streamlining processes and improving efficiency.',
        'Optimized Data Processing: Optimized the data conversion process, reducing market data parsing time from 2800ms to 600ms, resulting in a 78% performance improvement.',
        'Release Management: Effectively prepared scope and release candidate versions, ensuring timely and quality releases.',
        'Knowledge Sharing: Supervised and onboarded 6 new team members, conducting 2-3 knowledge-sharing sessions per month to foster continuous learning and development.'
      ],
      techStack: ['React', 'Typescript', 'Redux', 'Rxjs', 'Styled Components', 'RTL', 'Jest'],
      startDate: new Date('01-09-2021')
    },
    {
      companyName: 'Cigen',
      projectName: 'Caroi',
      location: 'Remote',
      role: 'Javascript Developer',
      description: 'Developed equity pre trade platform for in-house use of CITI bank traders and sales',
      bulletPoints: ['Expanded Market Data Capacity: Successfully increased the number of supported quotes with live market data updates from approximately 10,000 to 140,000, significantly enhancing system scalability.',
        'Delivered Key Functionalities: Led the delivery of four major epics that introduced crucial features, including automated quote pricing, streamlining processes and improving efficiency.',
        'Optimized Data Processing: Optimized the data conversion process, reducing market data parsing time from 2800ms to 600ms, resulting in a 78% performance improvement.',
        'Release Management: Effectively prepared scope and release candidate versions, ensuring timely and quality releases.',
        'Knowledge Sharing: Supervised and onboarded 6 new team members, conducting 2-3 knowledge-sharing sessions per month to foster continuous learning and development.'
      ],
      techStack: ['React', 'Typescript', 'Redux', 'Rxjs'],
      startDate: new Date('06-02-2021'),
      endDate: new Date('09-01-2021')
    },
    {
      companyName: 'Cigen',
      projectName: 'House shield',
      location: 'Remote',
      role: 'Junior Javascript Developer',
      description: 'Developed equity pre trade platform for in-house use of CITI bank traders and sales',
      bulletPoints: ['Expanded Market Data Capacity: Successfully increased the number of supported quotes with live market data updates from approximately 10,000 to 140,000, significantly enhancing system scalability.',
        'Delivered Key Functionalities: Led the delivery of four major epics that introduced crucial features, including automated quote pricing, streamlining processes and improving efficiency.',
        'Optimized Data Processing: Optimized the data conversion process, reducing market data parsing time from 2800ms to 600ms, resulting in a 78% performance improvement.',
        'Release Management: Effectively prepared scope and release candidate versions, ensuring timely and quality releases.',
        'Knowledge Sharing: Supervised and onboarded 6 new team members, conducting 2-3 knowledge-sharing sessions per month to foster continuous learning and development.'
      ],
      techStack: ['React', 'Typescript', 'Redux', 'Rxjs'],
      startDate: new Date('02-12-2020'),
      endDate: new Date('06-01-2021')
    },
    {
      companyName: 'S&T',
      projectName: 'Mobile Network Support',
      location: 'Kyiv',
      role: 'Intern',
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

const Experience = () => {
  return (
    <div className='experience max-w-[1200px]'>
      <Reveal direction='bottom'>
          <p className='section-header'>Experience</p>
        </Reveal>
        <Reveal direction='top' delay={0.5}>
            <div className='m-auto flex flex-row justify-between'>
                <div className="timeline relative border-s border-gray-200 dark:border-gray-700">       
                {experieceDate.map((timeLineItem, index) => {
                    return(
                        <div key={index}>
                            <CustomTimeLineItem timeLineItem={timeLineItem} />
                        </div>
                    )
                })}           
                </div>
            </div>
        </Reveal>
    </div>
  )
}

export default Experience