import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Weather from "./page/Weather";
import WeatherDay from "./page/WeatherDay";

const App = () => {
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
