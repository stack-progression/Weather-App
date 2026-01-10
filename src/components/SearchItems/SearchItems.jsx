import React, { useContext } from "react";
import "./SearchItems.css";
import { AppContext } from "../../context/AppContext";

const SearchItems = () => {
  
  const { setLocation, unice, deleteItem, setOpen } = useContext(AppContext);

  return (
    <div className="search-items">
      {unice.sort((a, b) => b.id - a.id).map((t) => {
        return <p className="search-items-text" onClick={() => (setLocation(t.text), setOpen(false))} onDoubleClick={() => deleteItem(t.id)} onTouchMove={() => deleteItem(t.id)} key={t.id}>{t.text}</p>;
      })}
    </div>
  );
};

export default SearchItems;
