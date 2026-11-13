import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } =
    props.resData.info;
  return (
    <div className="w-full min-w-0 rounded-[20px] border border-[#edf0f3] bg-white p-3 text-slate-800 shadow-[0_6px_20px_rgba(15,23,42,0.055)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)] max-[480px]:p-2.5 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:shadow-black/20 dark:hover:shadow-black/40">
      <img
        className="mb-2.5 aspect-[1.45] w-full rounded-[14px] bg-slate-100 object-cover max-[480px]:aspect-[1.6] dark:bg-slate-800"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="mx-0.5 mt-0.5 mb-2 text-[1.18rem] leading-[1.35] tracking-[-0.02em] max-[480px]:text-[1.15rem]">
        {name}
      </h3>
      <h4 className="mx-0.5 my-[7px] text-[0.9rem] leading-[1.45] font-medium text-slate-500 dark:text-slate-400">
        {cuisines.join(", ")}
      </h4>
      <h4 className="mx-0.5 my-[7px] text-[0.9rem] leading-[1.45] font-medium text-slate-500 dark:text-slate-400">
        {avgRating} Stars
      </h4>
      <h4 className="mx-0.5 my-[7px] text-[0.9rem] leading-[1.45] font-medium text-slate-500 dark:text-slate-400">
        {sla.deliveryTime} Minutes
      </h4>
    </div>
  );
};

// Higher Order Component
// Input -> RestaurantCard
// Ouput -> RestaurantCard with costForTwo

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative transition-transform duration-200 hover:-translate-y-[5px] hover:cursor-pointer">
        <span className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-emerald-600 px-3 py-1.5 text-xs font-bold tracking-wide text-white shadow-md">
          <span
            className="size-1.5 rounded-full bg-white"
            aria-hidden="true"
          />
          Open
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
