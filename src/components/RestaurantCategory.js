import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ catData, showItems, setShowIndex }) => {
  return (
    <section className="mx-auto my-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-left text-base font-bold text-slate-800 transition hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-orange-500 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        type="button"
        aria-expanded={showItems}
        onClick={() => setShowIndex()}>
        <span>
          {catData.title}
          <span className="ml-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            {catData.itemCards.length} items
          </span>
        </span>
        <span
          className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-lg text-orange-600 shadow-sm dark:bg-slate-900 dark:text-orange-300"
          aria-hidden="true">
          {showItems ? "−" : "+"}
        </span>
      </button>
      {showItems && (
        <div className="border-t border-slate-100 dark:border-slate-800">
          <RestaurantItemList items={catData.itemCards} />
        </div>
      )}
    </section>
  );
};

export default RestaurantCategory;
