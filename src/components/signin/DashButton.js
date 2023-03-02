import React from 'react'

const handleClick = (link) =>
{
    window.open(link)
};


export default function DashButton({link , text}) {

  return (
  
    <button onClick ={() => handleClick(link)}>
        {text}
    </button>
  )
}
