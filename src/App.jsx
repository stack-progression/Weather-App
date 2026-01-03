import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { location, weather, getDay, getHour, getTempHour } =
    useContext(AppContext);

  console.log(location);
  console.log(weather);

  if (!weather) return <div>Loading...</div>;

  return (
    <div>
      <h1>{weather.location.name}</h1>

      <p>
        {
          weather?.forecast?.forecastday[0]?.hour[
            getTempHour(weather?.forecast?.forecastday[0]?.hour[0]?.time_epoch)
          ]?.temp_c
        }
      </p>

      <p>
        {weather?.forecast?.forecastday[0]?.day?.maxtemp_c}° /{" "}
        {weather?.forecast?.forecastday[0]?.day?.mintemp_c}° Se simte ca{" "}
        {weather?.forecast?.forecastday[0]?.day?.avgtemp_c}°
      </p>

      {weather?.forecast?.forecastday[0]?.hour?.map((hour, index) => {
        return (
          <div key={index}>
            <p>{getHour(hour.time_epoch)}</p>
            <img src={hour.condition.icon} alt="" />
            <p>grade: {hour.temp_c}°</p>
            <p>umiditate: {hour.humidity}%</p>
          </div>
        );
      })}

      <p>urmatoarele zile</p>
      {weather?.forecast?.forecastday?.map((day, index) => {
        return (
          <div key={index}>
            <div>
              <p>{getDay(day.date_epoch)}</p>
            </div>
            <p>Sanse de ploaie {day.day.daily_chance_of_rain}%</p>
            <img src={day.day.condition.icon} alt="" />
            <p>maxtemp_c: {day.day.maxtemp_c}°</p>
            <p>mintemp_c: {day.day.mintemp_c}°</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
