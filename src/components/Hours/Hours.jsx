import React, { useContext } from "react";
import "./Hours.css";
import { AppContext } from "../../context/AppContext";
import Hour from "../Hour/Hour";

const Hours = () => {
  const { CurrentDay, CurrentHour, getHour } = useContext(AppContext);

  return (
    <div className="hours">
      <h2 className="hours-title">
        Maxime de {CurrentDay?.maxtemp_c}° si minime
        de {CurrentDay?.mintemp_c}°
      </h2>
      <hr className="hours-hr" />
      <div className="hours-hour">
        {CurrentHour?.map((h, index) => {
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
