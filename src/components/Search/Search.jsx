import React, { useContext, useEffect } from "react";
import "./Search.css";
import SearchInput from "../SearchInput/SearchInput";
import SearchItems from "../SearchItems/SearchItems";
import { AppContext } from "../../context/AppContext";

const Search = () => {
  const { open, setOpen } = useContext(AppContext);

  useEffect(() => {
    if (window.innerWidth >= 1300) {
      setOpen(true);
    }
  }, [window.innerWidth]);

  return (
    <div
      className="search active"
      style={{ display: open === true ? "flex" : "none" }}
    >
      <div className="close-btn-input">
        <button
          style={{ display: window.innerWidth >= 1300 ? "none" : "flex" }}
          className="search-close-btn"
          onClick={() => setOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <SearchInput />
      </div>
      <SearchItems />
    </div>
  );
};

export default Search;
