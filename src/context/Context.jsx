import React, {  useState } from "react";
import { AppContext } from "./AppContext";

// useEffect,

const Context = ({ children }) => {
  const [location, setLocation] = useState("bucuresti");
  const [weather, setWeather] = useState(null);
  const [value, setValue] = useState(location);
  const [open, setOpen] = useState(false);
  const [weatherItems, setWeatherItems] = useState([]);
  const [epoch, setEpoch] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://api.weatherapi.com/v1/forecast.json?key=d7a21304535c41b7a07211753252712&q=${location}&days=14&aqi=yes&alerts=yes`
  //       );
  //       if (!res.ok) {
  //         throw new Error("problem in response");
  //       }
  //       const data = await res.json();
  //       setWeather(data);
  //       setWeatherItems([
  //         ...weatherItems,
  //         { text: data?.location?.name, id: Date.now() },
  //       ]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [location]);

  const getDay = (day) => {
    if (!day) return "";
    const date = new Date(day * 1000);
    const dayOfWeek = date.getDay();
    const daysOfWeek = [
      "Duminică",
      "Luni",
      "Marți",
      "Miercuri",
      "Joi",
      "Vineri",
      "Sâmbătă",
    ];
    return daysOfWeek[dayOfWeek] || "";
  };

  const getHour = (h) => {
    const date = new Date(h * 1000);
    const hour = date.getHours();
    const hourDay = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ];
    return hourDay[hour];
  };

  const getTempHour = (t) => {
    const date = new Date(t * 1000);
    const hour = date.getHours();
    return hour;
  };

  const unice = Object.values(
    weatherItems.reduce((acc, item) => {
      acc[item.text] = item;
      return acc;
    }, {})
  );

  const deleteItem = (e) => {
    setWeatherItems(unice.filter((t) => t.id !== e));
  };

  const AppValue = {
    epoch,
    setEpoch,
    unice,
    value,
    setValue,
    location,
    setLocation,
    weather,
    setWeather,
    getDay,
    getHour,
    getTempHour,
    open,
    setOpen,
    weatherItems,
    setWeatherItems,
    deleteItem,
  };

  return <AppContext.Provider value={AppValue}>{children}</AppContext.Provider>;
};

export default Context;

//sa reusesc sa preiau numele obiectului din weather fara sa am delay si sa fac cumva sa sterg textele nedorite
