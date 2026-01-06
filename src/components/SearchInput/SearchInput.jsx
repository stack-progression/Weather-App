import React, { useContext } from 'react'
import './SearchInput.css'
import { AppContext } from '../../context/AppContext'

const SearchInput = () => {

  const { value, setValue, setLocation, location, } = useContext(AppContext);

  return (
    <div className='search-input'>
      <input
      type="text"
      className='search-input-inp'
      defaultValue={location}
      onChange={(e) => setValue(e.target.value)}
      />
      <button className='search-input-button' onClick={() => (setLocation(value))}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default SearchInput;
