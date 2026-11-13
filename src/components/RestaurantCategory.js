import React, { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ catData }) => {
  const [showItems, setShowItems] = useState(false);
  const handleAccordianClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="flex">
      {/* Header */}

      <div className="w-6/12 mx-auto my-4 cursor-pointer font-bold text-lg bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between"
          onClick={() => handleAccordianClick()}>
          <span>
            {catData.title} ({catData.itemCards.length})
          </span>
          {showItems && <span>-</span>}
          {!showItems && <span>+</span>}
        </div>

        {showItems && <RestaurantItemList items={catData.itemCards} />}
      </div>

      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
