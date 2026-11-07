import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } =
    props.resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
