import React, { useState } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <div className="Header">
        <h1>React Hooks</h1>
        <button type="button" onClick={handleClick}>{darkMode ? 'Dark' : 'Light'} Mode</button>
      </div>
    </div>
  )
}

export default Header
