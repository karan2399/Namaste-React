import { SWIGGY_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useActiveStatus from "../utils/useActiveStatus";

const Body = () => {
  // Local State Variable - useState (Hook)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    [],
  );

  const [searchInput, setSearchInput] = useState("");
  const [preference, setPreference] = useState(false);
  const [openNow, setOpenNow] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredRes = listOfFilteredRestaurants.filter((res) => {
      return res.info.veg;
    });
    setListOfFilteredRestaurants(filteredRes);
  }, [preference]);

  useEffect(() => {
    const filteredRes = listOfFilteredRestaurants.filter((res) => {
      return res.info.isOpen;
    });
    setListOfFilteredRestaurants(filteredRes);
  }, [openNow]);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();

      // Dynamically find the card that contains the restaurants array
      const restaurantCard = jsonData?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      setListOfRestaurants(restaurants);
      setListOfFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch Swiggy data:", error);
    }
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

  // Sort Functions
  const sortByTime = (a, b) =>
    a.info.sla.deliveryTime - b.info.sla.deliveryTime;

  const sortByRating = (res) => res.info.avgRating >= 4.5;

  function clearFilters() {
    setPreference(false);
    setOpenNow(false);
    setListOfFilteredRestaurants(listOfRestaurants);
  }

  const activeStatus = useActiveStatus();

  if (activeStatus === false) {
    return <h1>Looks like you are offline! Please check your network.</h1>;
  }
  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-panel">
        <div className="search">
          <input
            type="text"
            placeholder="Search restaurants, cuisines, or dishes"
            name="search-input"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button type="button" onClick={() => search(searchInput)}>
            Search
          </button>
        </div>

        <div className="filter">
          <div className="filter-group">
            <button
              type="button"
              className="filter-btn"
              onClick={() => {
                const filteredRes = listOfRestaurants.filter(sortByRating);
                setListOfFilteredRestaurants(filteredRes);
              }}>
              Top Rated
            </button>
            <button
              type="button"
              className="filter-btn"
              onClick={() => {
                const filteredRes = listOfRestaurants.toSorted(sortByTime);
                setListOfFilteredRestaurants(filteredRes);
              }}>
              Fastest
            </button>
          </div>

          <label className="veg-toggle" htmlFor="preference">
            <input
              type="checkbox"
              name="preference"
              checked={preference}
              onChange={(e) => {
                setPreference(e.target.checked);
              }}
            />
            <span>Veg only</span>
          </label>

          <label className="openNow-toggle" htmlFor="openNow">
            <input
              type="checkbox"
              name="openNow"
              checked={openNow}
              onChange={(e) => {
                setOpenNow(e.target.checked);
              }}
            />
            <span>Open Now Only</span>
          </label>

          <button
            type="button"
            className="filter-btn-clear"
            onClick={() => {
              clearFilters();
            }}>
            Clear Filters
          </button>
        </div>
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
