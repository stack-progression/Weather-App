import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
 import MoreItem from "../MoreItem/MoreItem"

const SelectDayDetails = () => {

    const {CurrentDay, uv} = useContext(AppContext);

  return (
    <div className='more-details'>
      <MoreItem title={"🔆 Indice UV"} details={uv(CurrentDay?.uv)}/>
      <MoreItem title={"💧 Umiditate"} details={CurrentDay?.avghumidity + "%"}/>
      <MoreItem title={"💨 Vant"} details={CurrentDay?.maxwind_kph + " km/h"}/>
      <MoreItem title={"Temperatura medie"} details={CurrentDay?.avgtemp_c + "C°"}/>
      <MoreItem title={"Temperatura medie"} details={CurrentDay?.avgtemp_f + "F°"}/>
      <MoreItem title={"👁 Vizibilitate"} details={CurrentDay?.avgvis_km + "km"}/>
      <MoreItem title={"👁 Vizibilitate"} details={CurrentDay?.avgvis_miles + "mile"}/>
      <MoreItem title={"Temperatura maxima"} details={CurrentDay?.maxtemp_c + "C°"}/>
      <MoreItem title={"Temperatura maxima"} details={CurrentDay?.maxtemp_f + "F°"}/>
      <MoreItem title={"Viteza max a vantului"} details={CurrentDay?.maxwind_kph +  "km/h"}/>
      <MoreItem title={"Viteza max a vantului"} details={CurrentDay?.maxwind_mph + " mile/h"}/>
      <MoreItem title={"Temperatura maxima"} details={CurrentDay?.mintemp_c + "C°"}/>
      <MoreItem title={"Temperatura maxima"} details={CurrentDay?.mintemp_f + "F°"}/>
      <MoreItem title={"Centimetri de zapada"} details={CurrentDay?.totalsnow_cm + " cm"}/>
    </div>
  )
}

export default SelectDayDetails
