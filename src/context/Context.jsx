import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

// useEffect,

const Context = ({ children }) => {
  const [location, setLocation] = useState(() => {
    return localStorage.getItem("location") || "bucuresti";
  });
  const [index, setIndex] = useState(() => {
    const savedIndex = localStorage.getItem("index");
    return savedIndex ? JSON.parse(savedIndex) : 0;
  });
  const [weather, setWeather] = useState(() => {
    const savedWeather = localStorage.getItem("weather");
    return savedWeather ? JSON.parse(savedWeather) : null;
  });
  const [weatherItems, setWeatherItems] = useState(() => {
    const savedWeatherItems = localStorage.getItem("weatherItems");
    return savedWeatherItems ? JSON.parse(savedWeatherItems) : [];
  });
  const [value, setValue] = useState(location);
  const [open, setOpen] = useState(false);
  const [chevron, setChevron] = useState(false);
  const [epoch, setEpoch] = useState(null);

  const [titleTemp, setTitleTemp] = useState(() => {
    const saveTitle = localStorage.getItem("titleTemp");
    return saveTitle ? JSON.parse(saveTitle) : true;
  });

  const currentLocation = weather?.location;
  const CurrentDay = weather?.forecast?.forecastday[index]?.day;
  const CurrentHour = weather?.forecast?.forecastday[index]?.hour;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=d7d99fc74250487abe9222616260901&q=${location}&days=14&aqi=yes&alerts=yes`
        );
        if (!res.ok) {
          throw new Error("problem in response"),
          alert("Locatia nu a fost gasita!");
        }
        const data = await res.json();
        setWeather(data);
        localStorage.setItem("weather", JSON.stringify(data));
        setWeatherItems((prev) => {
          const updated = [
            ...prev,
            { text: data?.location?.name, id: Date.now() },
          ];
          localStorage.setItem("weatherItems", JSON.stringify(updated));
          return updated;
        });
        localStorage.setItem("location", location)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [location]);

  useEffect(() => {
    localStorage.setItem("index", JSON.stringify(index))
  }, [index])

  useEffect(() => {
    localStorage.setItem("titleTemp", JSON.stringify(titleTemp))
  }, [titleTemp])

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

  const deleteItem = (id) => {
  setWeatherItems(prev => {
    const updated = prev.filter(item => item.id !== id);
    localStorage.setItem("weatherItems", JSON.stringify(updated));
    return updated;
  });
};

  const uv = (u) => {
    if (u <= 2) {
      return "Scazut";
    } else if (u > 2 && u <= 5) {
      return "Moderat";
    } else if (u > 5 && u <= 7) {
      return "Ridicat";
    } else if (u > 7 && u <= 10) {
      return "Foarte ridicat";
    } else if (u > 10) {
      return "Extrem";
    }
  };

  const AppValue = {
    uv,
    chevron,
    setChevron,
    titleTemp,
    setTitleTemp,
    index,
    setIndex,
    CurrentHour,
    CurrentDay,
    currentLocation,
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
