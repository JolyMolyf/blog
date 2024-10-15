import React from 'react'
import TechStackPill from './techStackPill';

interface Props {
  stack: Array<string>
}

const TechStackisplay = (props:Props) => {
  const { stack } = props;
  return (
    <div className='techStackDisplay'>
      { stack.map((technology:string, index:number) => {
        return (
          <div key={index}>
            <TechStackPill techName={technology}/>
          </div>
        )
      }) }
    </div>
  )
}

export default TechStackisplay