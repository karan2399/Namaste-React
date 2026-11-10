import { SWIGGY_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  // Local State Variable - useState (Hook)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    [],
  );

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const jsonData = await data.json();
    setListOfRestaurants(
      // Optional Chaining
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setListOfFilteredRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const search = (searchtext) => {
    setListOfFilteredRestaurants(listOfRestaurants);
    if (searchtext !== "") {
      const filteredRes = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchtext.toLowerCase()),
      );
      setListOfFilteredRestaurants(filteredRes);
    }
  };
  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          name="search-input"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button onClick={() => search(searchInput)}>Search</button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            const filteredRes = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfFilteredRestaurants(filteredRes);
          }}>
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {listOfFilteredRestaurants.map((res) => {
          return (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
