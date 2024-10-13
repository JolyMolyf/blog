import './button.scss';
import React from 'react';

interface Props {
    label: string;
    icon?: string;
    onClick: () => void;
}

const Button = (props: Props) => {
    const { label, icon, onClick } = props;

    const handleClick = () => {
        onClick();
    }

    return (
        <div className='button' onClick={handleClick}>
            <p className='main-text-higlight'>{ label }</p>
            <img src={icon}/>
        </div>
    ); 
}

export default Button