import React from 'react';
import './locationDisplayStyles.scss';

interface Props {
    location: string;
    className?: string;
}

const LocationDisplay = (props: Props) => {
    const { location, className } = props;
    
    return  (
        <div className={`locationDisplay ${className}`}>
            <img src='./icons/location-dot-solid.svg'></img>
            <p className=''>{location}</p>
        </div>
    )
}

export default LocationDisplay