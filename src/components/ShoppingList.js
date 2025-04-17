import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
    
  }
    const itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;
      
      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
         {/* <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul> */}
      <Filter onCategoryChange={onCategoryChange} itemsToDisplay={itemsToDisplay} Item={Item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

export default ShoppingList;
