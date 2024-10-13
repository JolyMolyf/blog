import React from 'react'

interface Props {
    location: string;
}

const LocationDisplay = (props: Props) => {
    const { location } = props;
    
    return  (
        <div className='timeline-header-item'>
        <img src='./icons/location-dot-solid.svg'></img>
        <p className=''>{location}</p>
        </div>
    )
}

export default LocationDisplay