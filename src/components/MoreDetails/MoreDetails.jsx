import React, { useContext } from 'react'
import "./MoreDetails.css"
import MoreItem from '../MoreItem/MoreItem'
import { AppContext } from '../../context/AppContext'

const MoreDetails = () => {

    const {weather, uv} = useContext(AppContext);

    const day = weather?.current

  return (
    <div className='more-details'>
      <MoreItem title={"🔆 Indice UV"} details={uv(day?.uv)}/>
      <MoreItem title={"💧 Umiditate"} details={day?.humidity + "%"}/>
      <MoreItem title={"💨 Vant"} details={day?.wind_kph + " km/h"}/>
      <MoreItem title={"💦 Punct de roua"} details={day?.dewpoint_c + "°"}/>
      <MoreItem title={"⏲ Presiune"} details={day?.pressure_mb + " mb"}/>
      <MoreItem title={"👁 Vizibilitate"} details={day?.vis_km + " km"}/>
    </div>
  )
}

export default MoreDetails
