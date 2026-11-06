import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  // Local State Variable - useState (Hook)
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            setListOfRestaurants((prev) => {
              return prev.filter((res) => res.info.avgRating > 4);
            });
          }}>
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
