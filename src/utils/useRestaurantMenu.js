import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_API } from "./constants";

const useRestaurantMenu = (resId) => {
  if (!resId) return;
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_API + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
