import React from "react";
import "./RootLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

const RootLayout = () => {


  return (
    <div className="root-layout">
      <div className="root-search">
        <Search />
      </div>
      <div className="header-outlet">
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
};

export default RootLayout;
