import { SWIGGY_API_URL } from "../utils/constants";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
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

  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

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
    return (
      <h1 className="flex-1 p-8 text-center text-2xl font-bold">
        Looks like you are offline! Please check your network.
      </h1>
    );
  }
  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-auto w-full max-w-[1440px] flex-1 px-[clamp(12px,3vw,32px)] pt-8 pb-12 max-md:px-3 max-md:pt-6 max-md:pb-8">
      <div className="mx-auto mb-[22px] w-full max-w-[1180px] rounded-[28px] border border-[#eef1f4] bg-white/85 px-[18px] pt-[18px] pb-3 shadow-[0_14px_34px_rgba(15,23,42,0.04)]">
        <div className="flex flex-wrap justify-center gap-3 px-0 pt-2 pb-[18px] max-md:flex-col max-md:items-center">
          <input
            className="w-[min(560px,80vw)] min-w-[min(220px,100%)] rounded-[14px] border border-slate-200 bg-white px-[18px] py-[14px] text-base outline-none shadow-[inset_0_1px_2px_rgba(15,23,42,0.04),0_6px_18px_rgba(15,23,42,0.03)] transition duration-200 focus:-translate-y-px focus:border-[#f28a45] focus:shadow-[0_0_0_4px_rgba(242,138,69,0.14)] max-md:w-[min(100%,420px)]"
            type="text"
            placeholder="Search restaurants, cuisines, or dishes"
            name="search-input"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="cursor-pointer rounded-full border-0 bg-gradient-to-br from-amber-500 to-[#ed6a36] px-5 py-3 font-bold text-white shadow-[0_5px_12px_rgba(237,106,54,0.2)] transition duration-200 hover:-translate-y-px hover:brightness-105 hover:shadow-[0_8px_16px_rgba(237,106,54,0.25)] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#ed6a3659] max-md:w-[min(100%,420px)] max-[480px]:px-[18px] max-[480px]:py-[11px] max-[480px]:text-[0.92rem]"
            type="button"
            onClick={() => search(searchInput)}>
            Search
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-[960px] flex-wrap items-center justify-center gap-3">
          <div className="flex flex-wrap justify-center gap-2.5">
            <button
              type="button"
              className="cursor-pointer rounded-full border-0 bg-gradient-to-br from-amber-500 to-[#ed6a36] px-5 py-3 font-bold text-white shadow-[0_5px_12px_rgba(237,106,54,0.2)] transition duration-200 hover:-translate-y-px hover:brightness-105 hover:shadow-[0_8px_16px_rgba(237,106,54,0.25)] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#ed6a3659] max-[480px]:px-[18px] max-[480px]:py-[11px] max-[480px]:text-[0.92rem]"
              onClick={() => {
                const filteredRes = listOfRestaurants.filter(sortByRating);
                setListOfFilteredRestaurants(filteredRes);
              }}>
              Top Rated
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full border-0 bg-gradient-to-br from-amber-500 to-[#ed6a36] px-5 py-3 font-bold text-white shadow-[0_5px_12px_rgba(237,106,54,0.2)] transition duration-200 hover:-translate-y-px hover:brightness-105 hover:shadow-[0_8px_16px_rgba(237,106,54,0.25)] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#ed6a3659] max-[480px]:px-[18px] max-[480px]:py-[11px] max-[480px]:text-[0.92rem]"
              onClick={() => {
                const filteredRes = listOfRestaurants.toSorted(sortByTime);
                setListOfFilteredRestaurants(filteredRes);
              }}>
              Fastest
            </button>
          </div>

          <label
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#dfe7ee] bg-slate-50 px-3 py-2 font-semibold text-[#3a4d5f]"
            htmlFor="preference">
            <input
              className="m-0 size-[15px] accent-[#1ea672]"
              type="checkbox"
              name="preference"
              checked={preference}
              onChange={(e) => {
                setPreference(e.target.checked);
              }}
            />
            <span>Veg only</span>
          </label>

          <label
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#dfe7ee] bg-slate-50 px-3 py-2 font-semibold text-[#3a4d5f]"
            htmlFor="openNow">
            <input
              className="m-0 size-[15px] accent-[#1ea672]"
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
            className="cursor-pointer rounded-full border-0 bg-gradient-to-br from-[#1f9d68] to-[#0e8a63] px-4 py-2.5 font-bold text-white shadow-[0_5px_12px_rgba(16,185,129,0.18)] transition duration-200 hover:-translate-y-px hover:brightness-105 hover:shadow-[0_8px_16px_rgba(237,106,54,0.25)] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#ed6a3659]"
            onClick={() => {
              clearFilters();
            }}>
            Clear Filters
          </button>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,250px),300px))] justify-center gap-[22px] px-0 py-2 max-md:grid-cols-[repeat(auto-fit,minmax(min(100%,220px),300px))] max-md:gap-4 max-[480px]:grid-cols-[minmax(0,1fr)]">
        {listOfFilteredRestaurants.map((res) => {
          return (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              {
                /* If the restaurant has costForTwo, add it */
                res.info.isOpen ? (
                  <RestaurantCardOpen resData={res} />
                ) : (
                  <RestaurantCard resData={res} />
                )
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
