import React, { useContext } from "react";
import Hours from "../components/Hours/Hours";
import Days from "../components/Days/Days";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const WeatherDay = () => {
  const navigate = useNavigate();
  const { weather, setEpoch, setIndex, setTitleTemp, chevron } =
    useContext(AppContext);

  console.log(chevron);

  return (
    <div>
      <button
        style={{ display: chevron === true ? "none" : "flex" }}
        className="weather-day-back-btn"
        onClick={() => (
          setTitleTemp(true),
          setIndex(0),
          setEpoch(weather?.forecast?.forecastday[0]?.date_epoch),
          navigate("/"),
          window.scrollTo(0, 0)
        )}
      >
        ❮
      </button>
      <Hours />
    </div>
  );
};

export default WeatherDay;
