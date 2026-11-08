import { useEffect, useState } from "react";
import { SWIGGY_RES_IMG_URL, SWIGGY_RESTAURANT_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaruantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const resData = await fetch(
      SWIGGY_RESTAURANT_API + "restaurantId=" + 37680,
    );
    const jsonData = await resData.json();

    setResInfo(jsonData.data);
    console.log(jsonData.data.cards[2]?.card?.card?.info);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="me nu">
      <img src={SWIGGY_RES_IMG_URL + cloudinaryImageId} alt="" />
      <h1>{name}</h1>
      {/* <h2>{cuisines.join(",")}</h2> */}
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>

      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaruantMenu;
