import React, { useContext, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Weather from "./page/Weather";
import WeatherDay from "./page/WeatherDay";
import { AppContext } from "./context/AppContext";

const App = () => {

  const {weather} = useContext(AppContext);

  useEffect(() => {
    if(!weather){
    return <div>Se incarca...</div>
  }
  }, [weather]);
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Weather />} />
        <Route path=":id" element={<WeatherDay />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
