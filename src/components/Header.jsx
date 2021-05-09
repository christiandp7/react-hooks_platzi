import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const color = useContext(ThemeContext)
  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <div className="Header">
        <h1 style={{color}}>React Hooks</h1>
        <button type="button" onClick={handleClick}>{darkMode ? 'Dark' : 'Light'} Mode</button>
      </div>
    </div>
  )
}

export default Header
