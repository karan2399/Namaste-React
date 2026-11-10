import { useEffect, useState } from "react";
import { SWIGGY_RES_IMG_URL, SWIGGY_RESTAURANT_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantMenuItem from "./RestaurantMenuItem";
import { useParams } from "react-router";

const RestaruantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const resData = await fetch(
      SWIGGY_RESTAURANT_API + "restaurantId=" + resId,
    );
    const jsonData = await resData.json();

    setResInfo(jsonData.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-copy">
          <p className="menu-eyebrow">Restaurant</p>
          <h1>{name}</h1>
          <div className="menu-meta">
            <span className="menu-rating">★ {avgRating}</span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
        {cloudinaryImageId && (
          <img
            className="menu-hero-image"
            src={SWIGGY_RES_IMG_URL + cloudinaryImageId}
            alt={name}
          />
        )}
      </section>

      <section className="menu-section">
        <div className="menu-section-heading">
          <p className="menu-eyebrow">Made fresh for you</p>
          <h2>Our Menu</h2>
        </div>
        <div className="menu-items">
          {itemCards.map((item) => (
            <RestaurantMenuItem
              menuItem={item.card.info}
              key={item.card.info.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaruantMenu;
