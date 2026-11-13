import { SWIGGY_ITEM_IMG_URL } from "../utils/constants";

const RestaurantItemList = ({ items }) => {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6">
      <ul className="m-0 grid list-none gap-4 p-0">
        {items.map((item) => (
          <li
            className="grid grid-cols-[minmax(0,1fr)_6rem] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md sm:p-6 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600"
            key={item.card.info.id}>
            <div className="min-w-0">
              <div className="text-base leading-snug font-semibold text-slate-800 sm:text-lg dark:text-slate-100">
                {item.card.info.name}
              </div>
              <div className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.card.info.description}
              </div>
              <div className="mt-4 inline-flex rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                ₹{item.card.info.price / 100}
              </div>
            </div>
            <div className="relative h-24 w-24">
              <img
                className="h-24 w-24 rounded-xl bg-slate-100 object-cover dark:bg-slate-800"
                src={SWIGGY_ITEM_IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
              <button
                className="absolute right-1 bottom-1 left-1 cursor-pointer rounded-lg border border-orange-200 bg-white px-3 py-2 text-sm font-bold text-orange-600 shadow-sm transition hover:border-orange-500 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:border-slate-600 dark:bg-slate-800 dark:text-orange-300 dark:hover:bg-slate-700"
                type="button">
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantItemList;
