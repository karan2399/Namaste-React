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
    <article className="flex min-w-0 items-center justify-between gap-5 rounded-[18px] border border-[#e9edf2] bg-white p-5 shadow-[0_5px_16px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#f2c7a8] hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)] max-[480px]:gap-3 max-[480px]:rounded-[15px] max-[480px]:p-[14px] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 dark:hover:border-slate-600">
      <div className="min-w-0">
        <div className="flex items-center gap-[9px]">
          {foodType && (
            <span
              className={`inline-flex size-[17px] flex-none items-center justify-center rounded-[3px] border-[1.5px] ${
                foodType === "veg" ? "text-[#168447]" : "text-[#c83e3e]"
              }`}
              role="img"
              aria-label={foodType === "veg" ? "Vegetarian" : "Non-vegetarian"}
            >
              <span className="size-[7px] rounded-full bg-current" />
            </span>
          )}
          <h3 className="m-0 text-[1.08rem] leading-[1.35] text-slate-800 max-[480px]:text-base dark:text-slate-100">
            {menuItem.name}
          </h3>
        </div>
        {menuItem.category && (
          <p className="mt-1 mb-0 text-[0.78rem] text-slate-400 dark:text-slate-500">
            {menuItem.category}
          </p>
        )}
        {price != null && (
          <p className="mt-[9px] mb-0 text-[0.96rem] font-extrabold text-[#344256] dark:text-slate-300">
            ₹{(price / 100).toFixed(0)}
          </p>
        )}
        {menuItem.description && (
          <p className="mt-2 max-w-[620px] mb-0 text-[0.9rem] leading-[1.55] text-[#718096] max-[480px]:text-[0.84rem] dark:text-slate-400">
            {menuItem.description}
          </p>
        )}
      </div>
      {menuItem.imageId && (
        <img
          className="size-[104px] flex-none rounded-[14px] bg-slate-100 object-cover max-[480px]:size-20 max-[480px]:rounded-xl dark:bg-slate-800"
          src={SWIGGY_ITEM_IMG_URL + menuItem.imageId}
          alt={menuItem.name}
          loading="lazy"
        />
      )}
    </article>
  );
};

export default RestaurantMenuItem;
