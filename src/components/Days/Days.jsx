import React, { useContext } from 'react'
import './Days.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import DayItem from '../DayItem/DayItem'

const Days = ({weather}) => {

  const { getDay} = useContext(AppContext);

  return (
    <div className='days'>
      
      {
        weather?.forecast?.forecastday?.map((day, index) => {
          return(
            <Link to={`${index}`} key={index}>
            <DayItem dayOfWeek={getDay(day?.date_epoch)} humidity={day?.day?.avghumidity} image={day?.day?.condition?.icon} maxtemp={day?.day?.maxtemp_c} mintemp={day?.day?.mintemp_c} epoch={day?.date_epoch}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Days
