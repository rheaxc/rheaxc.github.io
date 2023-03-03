import React from 'react'
import './style/dashbutton.css'

const handleClick = (link) =>
{
    window.open(link)
};


export default function DashButton({link , text}) {

  return (
  
    <button className= 'dashbutton' onClick ={() => handleClick(link)}>
        {text}
    </button>
  )
}
