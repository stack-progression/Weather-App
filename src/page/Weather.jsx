import React from 'react'
import Hours from "../components/Hours/Hours"
import Days from '../components/Days/Days'
import MoreDetails from '../components/MoreDetails/MoreDetails'

const Weather = () => {


  return (
    <div>
      <Hours/>
      <Days/>
      <hr className='hours-hr' style={{height: "3px"}}/>
      <MoreDetails />
    </div>
  )
}

export default Weather
