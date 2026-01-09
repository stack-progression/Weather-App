import React from 'react'
import './Hour.css'

const Hour = (h) => {
  return (
    <div id={h.id} className='hour'>
      <p className='hour-text h'>{h.hour}</p>
      <img className='hour-img h' src={h.image} alt="icon weather" />
      <p className='hour-temp h' >{h.temp}°</p>
      <p className='hour-humidity h'><i className="fa-solid fa-droplet"></i>{h.humidity}%</p>
    </div>
  )
}

export default Hour
