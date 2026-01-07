import React, { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../context/AppContext";

const Header = ({weather}) => {
  const { setOpen, open, epoch, getDay} = useContext(AppContext);

  return (
    <div className="header">
      <button
        style={{ display: open >= true ? "none" : "flex" }}
        className="header-btn-bar"
        onClick={() => setOpen(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="header-title">{weather?.location?.name}</h1>
      <p>{weather?.location?.country}</p>
      <p className="header-temp">{weather?.current?.temp_c}°</p>
      <p className="header-temp-max-min">
        {weather?.forecast?.forecastday[0]?.day?.maxtemp_c}° /{" "}
        {weather?.forecast?.forecastday[0]?.day?.mintemp_c}° Se simte ca{" "}
        {weather?.forecast?.forecastday[0]?.day?.avgtemp_c}°
      </p>
      <p className="header-day">{getDay(epoch)}</p>
    </div>
  );
};

export default Header;
