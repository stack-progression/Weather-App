import React, { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { weather, titleTemp, setOpen, open, epoch, getDay, setChevron, currentLocation, CurrentDay} = useContext(AppContext);

  return (
    <div className="header">
      <button
        style={{ display: open >= true ? "none" : "flex" }}
        className="header-btn-bar btn-active"
        onClick={() => (setOpen(true), setChevron(true))}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="header-title">{currentLocation?.name}</h1>
      <p>{currentLocation?.country}</p>
      <p className="header-temp">{titleTemp === true ? weather?.current?.temp_c : CurrentDay?.avgtemp_c}°</p>
      <p className="header-temp-max-min">
        {CurrentDay?.maxtemp_c}° /{" "}
        {CurrentDay?.mintemp_c}° Se simte ca{" "}
        {CurrentDay?.avgtemp_c}°
      </p>
      <p className="header-day">{getDay(epoch)}</p>
    </div>
  );
};

export default Header;
