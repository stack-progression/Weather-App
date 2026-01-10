import React, { useContext, useEffect } from 'react'
import './SearchInput.css'
import { AppContext } from '../../context/AppContext'

const SearchInput = () => {

  const { value, setValue, setLocation, setOpen, open } = useContext(AppContext);

  useEffect(() => {
      if (window.innerWidth >= 1300) {
        setOpen(true)
      }
    }, [open]);

  return (
    <div className='search-input'>
      <input
      type="text"
      className='search-input-inp'
      placeholder='Cauta locatie...'
      onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-input-button btn-active" onClick={() => (setLocation(value), setOpen(false))}><i className="btn-active fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default SearchInput;
