import React from 'react'

interface Props {
    techName: string;
}

const TechStackPill = (props:Props) => {
    const { techName } = props;
  return (
    <div>
        {techName}
    </div>
  )
}

export default TechStackPill