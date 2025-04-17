import React, { useState } from 'react'

function Header({onDarkModeClick, isDark}) {
    // const [isDark, setDark] = useState('Light');
    // const [isClassName, setClassName] =useState("App light")
    
    // function onDarkModeClick() {
    //     setDark((prevDark) =>
    //      prevDark === "Light" ? "Dark" : "Light" )

    //     setClassName((prevClass) => 
    //     prevClass === "App light" ? "App dark" : "App light"
    //     )

    // }
  return (
    <div>
      <header>
        <button onClick={() => onDarkModeClick()}>
          {isDark ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  )
}

export default Header