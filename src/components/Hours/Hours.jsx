import React, { useContext } from "react";
import "./Hours.css";
import { AppContext } from "../../context/AppContext";
import Hour from "../Hour/Hour";

const Hours = ({weather}) => {
  const { getHour } = useContext(AppContext);

  return (
    <div className="hours">
      <h2 className="hours-title">
        Maxime de {weather?.forecast?.forecastday[0]?.day?.maxtemp_c}° si minime
        de {weather?.forecast?.forecastday[0]?.day?.mintemp_c}°
      </h2>
      <hr className="hours-hr" />
      <div className="hours-hour">
        {weather?.forecast?.forecastday[0]?.hour.map((h, index) => {
          return (
            <Hour
              key={index}
              id={index}
              hour={getHour(h?.time_epoch)}
              image={h?.condition?.icon}
              temp={h?.temp_c}
              humidity={h?.humidity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hours;
