import React from 'react'
import "./MoreItem.css"

const MoreItem = (i) => {
  return (
    <div className='more-item'>
      <p className='more-item-title'>{i.title}</p>
      <p className='more-item-details'>{i.details}</p>
    </div>
  )
}

export default MoreItem
