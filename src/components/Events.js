import React from 'react'
import poster from '../images/homepage/professional/2.jpg'


import '../style/events.css'

import EventTile from './events/EventTile'

export default function Events() {
  return (
    <div className='event-page'>
        <h1 className='events-title'> Corporate Recruiting Events </h1>
        <div className='events-container'>
            <EventTile 
                Time='2023-08-16T22:00:00'  // Example: August 16, 2023, 10:00 PM
                Image={poster} 
                Link='https://hariharanchidambaram.me' 
                Majors='CS, IOE, CE' 
                EdLvl='Junior'
                Industry='Big Tech, Consulting' 
                EmployType='Internship'
            />
            <EventTile 
                Time='2023-08-16T22:00:00'  // Example: August 16, 2023, 10:00 PM
                Image={poster} 
                Link='https://hariharanchidambaram.me' 
                Majors='CS, IOE, CE' 
                EdLvl='Junior'
                Industry='Big Tech, Consulting' 
                EmployType='Internship'
            />
            <EventTile 
                Time='2023-08-16T22:00:00'  // Example: August 16, 2023, 10:00 PM
                Image={poster} 
                Link='https://hariharanchidambaram.me' 
                Majors='CS, IOE, CE' 
                EdLvl='Junior'
                Industry='Big Tech, Consulting' 
                EmployType='Internship'
            />
            <EventTile 
                Time='2023-08-16T22:00:00'  // Example: August 16, 2023, 10:00 PM
                Image={poster} 
                Link='https://hariharanchidambaram.me' 
                Majors='CS, IOE, CE' 
                EdLvl='Junior'
                Industry='Big Tech, Consulting' 
                EmployType='Internship'
            />
            <EventTile 
                Time='2023-08-16T22:00:00'  // Example: August 16, 2023, 10:00 PM
                Image={poster} 
                Link='https://hariharanchidambaram.me' 
                Majors='CS, IOE, CE' 
                EdLvl='Junior'
                Industry='Big Tech, Consulting' 
                EmployType='Internship'
            />
            <EventTile 
                Time='2023-08-16T22:00:00'  // Example: August 16, 2023, 10:00 PM
                Image={poster} 
                Link='https://hariharanchidambaram.me' 
                Majors='CS, IOE, CE' 
                EdLvl='Junior'
                Industry='Big Tech, Consulting' 
                EmployType='Internship'
            />
        </div>
    </div>
        
  )
}
