import React, { useState, useEffect } from 'react';
import './style/events.css';

export default function EventTile({ Time, Image, Link, Majors, EdLvl, Industry, EmployType }) {
    const [countdown, setCountdown] = useState('');

    const handleClick = () => {
        window.open(Link);
    }

    useEffect(() => {
        const eventTime = new Date(Time).getTime();
        
        const updateCountdown = () => {
            const currentTime = new Date().getTime();
            const timeDifference = eventTime - currentTime;

            if (timeDifference <= 0) {
                setCountdown('Event has passed');
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        };

        const intervalId = setInterval(updateCountdown, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [Time]);

    return (
        <div className='event-container'>
            
            <h1 className='events-time'>{countdown}</h1>

            <img className='event-image' src={Image} alt='events'/>

            <button className='events-button-box' onClick={handleClick}>
                Register
            </button>
            <div className='events-description-box'>
                <div className='major-box'>
                    <h1 className='major-title'>Majors: </h1>
                    <h1 className='majors'>{Majors}</h1>
                </div>
                <div className='major-box'>
                    <h1 className='major-title'>Education Level:</h1>
                    <h1 className='majors'>{EdLvl}</h1>
                </div>
                <div className='major-box'>
                    <h1 className='major-title'>Industry:</h1>
                    <h1 className='majors'>{Industry}</h1>
                </div>
                <div className='major-box'>
                    <h1 className='major-title'>Employment Tag:</h1>
                    <h1 className='majors'>{EmployType}</h1>
                </div>
            </div>
        </div>
    )
}
