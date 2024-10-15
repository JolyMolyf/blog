import React from 'react'
import './techStackPillStyles.scss';

interface Props {
    techName: string;
}

const TechStackPill = (props:Props) => {
    const { techName } = props;
  return (
    <div className='techStackPill'>
        <p className='main-text-higlight'>{techName}</p>
    </div>
  )
}

export default TechStackPill