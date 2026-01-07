import React from 'react'
import Hours from "../components/Hours/Hours"
import Days from '../components/Days/Days'
import { useOutletContext } from 'react-router-dom'

const Weather = () => {

  const {weather} = useOutletContext()

  return (
    <div>
      <Hours weather={weather}/>
      <Days weather={weather}/>
    </div>
  )
}

export default Weather
