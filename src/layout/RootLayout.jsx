import React from "react";
import "./RootLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import { useLoaderData } from "react-router-dom";

const RootLayout = () => {

  const weather = useLoaderData();
  console.log(weather)

  return (
    <div className="root-layout">
      <div className="root-search">
        <Search />
      </div>
      <div className="header-outlet">
        <Header weather={weather}/>
        <Outlet context={{weather}}/>
      </div>
    </div>
  );
};

export default RootLayout;
