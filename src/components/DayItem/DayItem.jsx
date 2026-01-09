import React, { useContext } from "react";
import "./DayItem.css";
import { AppContext } from "../../context/AppContext";

const DayItem = (item) => {

  const {setEpoch} = useContext(AppContext);

  return (
    <div onClick={() => {setEpoch(item.epoch)}} className="dayItem">
      <p className="dayItem-day-off-week">{item.dayOfWeek}</p>
      <div className="dayItem-humidity-icon">
        <p className="dayItem-humidity">
          <i className="fa-solid fa-droplet"></i>
          {item.humidity}%
        </p>
        <img className="dayItem-image" src={item.image} alt="icon weather" />
      </div>
      <div className="dayItem-min-max">
        <p>{item.maxtemp}°</p>
        <p>{item.mintemp}°</p>
      </div>
    </div>
  );
};

export default DayItem;
