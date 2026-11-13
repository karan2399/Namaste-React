import { SWIGGY_RES_IMG_URL, SWIGGY_RESTAURANT_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantMenuItem from "./RestaurantMenuItem";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaruantMenu = () => {
  const { resId } = useParams();

  // Custom Hook to optimize the code. API fetching seperate from component.
  // How to get data, is not this component's concern, so it must be seperated. Single Responsibility Principle.
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="mx-auto mt-9 mb-16 w-[calc(100%_-_2rem)] max-w-[960px] flex-1 max-md:mt-6 max-[480px]:mt-[18px] max-[480px]:mb-9 max-[480px]:w-[calc(100%_-_24px)]">
      <section className="flex items-center justify-between gap-6 overflow-hidden rounded-[28px] border border-[#f1e5d9] bg-[radial-gradient(ellipse_at_90%_15%,rgba(255,215,170,0.5),transparent_38%),linear-gradient(135deg,#fffaf5,#fff)] p-[clamp(24px,5vw,48px)] shadow-[0_16px_40px_rgba(89,55,27,0.08)] max-[480px]:gap-3 max-[480px]:rounded-[22px] max-[480px]:p-5">
        <div className="min-w-0">
          <p className="mb-2 text-[0.76rem] font-extrabold tracking-[0.14em] text-[#dc6b32] uppercase">
            Restaurant
          </p>
          <h1 className="m-0 text-[clamp(1.8rem,5vw,3rem)] leading-[1.1] tracking-[-0.045em] text-[#18212b]">
            {name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-2.5 text-[0.95rem] text-slate-500 max-[480px]:mt-[14px] max-[480px]:gap-2 max-[480px]:text-[0.84rem]">
            <span className="rounded-full bg-green-50 px-[11px] py-1.5 font-extrabold text-green-800">
              ★ {avgRating}
            </span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
        {cloudinaryImageId && (
          <img
            className="w-[clamp(120px,24vw,210px)] flex-none rotate-2 aspect-square rounded-3xl border-[5px] border-white/90 object-cover shadow-[0_12px_28px_rgba(15,23,42,0.16)] max-[480px]:w-[88px] max-[480px]:rounded-2xl max-[480px]:border-[3px]"
            src={SWIGGY_RES_IMG_URL + cloudinaryImageId}
            alt={name}
          />
        )}
      </section>

      <section className="mt-[42px] max-md:mt-8">
        <div className="mb-[18px] ml-1">
          <p className="mb-2 text-[0.76rem] font-extrabold tracking-[0.14em] text-[#dc6b32] uppercase">
            Made fresh for you
          </p>
          <h2 className="m-0 text-[clamp(1.5rem,4vw,2rem)] tracking-[-0.035em] text-[#18212b]">
            Our Menu
          </h2>
        </div>
        {/* <div className="grid gap-[14px]">
          {itemCards.map((item) => (
            <RestaurantMenuItem
              menuItem={item.card.info}
              key={item.card.info.id}
            />
          ))}
        </div> */}
        {/* Categories Accordian */}

        {categories.map((cat) => {
          return (
            <RestaurantCategory
              key={cat.card?.card?.categoryId}
              catData={cat.card.card}
            />
          );
        })}
      </section>
    </div>
  );
};

export default RestaruantMenu;
