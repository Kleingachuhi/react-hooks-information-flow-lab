import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
    const [isDark, setDark] = useState('Light');
      const [isClassName, setClassName] =useState("App light")
      
  function onDarkModeClick() {
    setDark((prevDark) =>
     prevDark === "Light" ? "Dark" : "Light" )

    setClassName((prevClass) => 
    prevClass === "App light" ? "App dark" : "App light"
    )

}

  return (
    <div 
    className={isClassName}
    // + (isDark? "dark" : "light")}
    >
      <header>
        <h2>Shopster</h2>
      <Header onDarkModeClick={onDarkModeClick} isDark={isDark}/>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;