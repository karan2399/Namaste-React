import React from "react";
import { SWIGGY_ITEM_IMG_URL } from "../utils/constants";

const RestaurantMenuItem = ({ menuItem }) => {
  const price = menuItem.price ?? menuItem.defaultPrice;
  const vegClassifier = menuItem.itemAttribute?.vegClassifier?.toUpperCase();
  const foodType =
    menuItem.isVeg === 1 ||
    menuItem.isVeg === true ||
    vegClassifier === "VEG"
      ? "veg"
      : menuItem.isVeg === 0 ||
          menuItem.isVeg === false ||
          vegClassifier === "NONVEG"
        ? "non-veg"
        : null;

  return (
    <article className="menu-item">
      <div className="menu-item-details">
        <div className="menu-item-heading">
          {foodType && (
            <span
              className={`food-type-indicator food-type-indicator--${foodType}`}
              role="img"
              aria-label={foodType === "veg" ? "Vegetarian" : "Non-vegetarian"}
            >
              <span />
            </span>
          )}
          <h3>{menuItem.name}</h3>
        </div>
        {menuItem.category && (
          <p className="menu-item-category">{menuItem.category}</p>
        )}
        {price != null && (
          <p className="menu-item-price">₹{(price / 100).toFixed(0)}</p>
        )}
        {menuItem.description && (
          <p className="menu-item-description">{menuItem.description}</p>
        )}
      </div>
      {menuItem.imageId && (
        <img
          className="menu-item-image"
          src={SWIGGY_ITEM_IMG_URL + menuItem.imageId}
          alt={menuItem.name}
          loading="lazy"
        />
      )}
    </article>
  );
};

export default RestaurantMenuItem;
