import CustomTimeline from '@/app/components/common/Timeline/CustomTimeline'
import React from 'react';

interface IProps {}

const Experience = () => {
  return (
    <div className='max-w-[1200px]'>
      <p className='text-6xl font-bold'>Experience</p>
      <CustomTimeline/>
    </div>
  )
}

export default Experience