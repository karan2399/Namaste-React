import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import RestaurantItemList from "./RestaurantItemList";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <main className="mx-auto w-[calc(100%_-_2rem)] max-w-5xl flex-1 py-10 sm:py-14">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.16em] text-orange-600 uppercase dark:text-orange-300">
            Foodology
          </p>
          <h1 className="m-0 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
            Your cart
          </h1>
          <p className="mt-2 mb-0 text-slate-600 dark:text-slate-400">
            Review your picks before you dig in.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-800 dark:border-slate-700 dark:bg-slate-800 dark:text-orange-200">
            <span className="grid size-7 place-items-center rounded-full bg-white text-orange-600 dark:bg-slate-900 dark:text-orange-300">
              {cart.length}
            </span>
            {cart.length === 1 ? "item" : "items"}
          </span>
          {cart.length > 0 && (
            <button
              className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-rose-900 dark:hover:bg-rose-950/40 dark:hover:text-rose-300"
              onClick={emptyCart}
              type="button">
              Clear cart
            </button>
          )}
        </div>
      </header>

      {cart.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <span
            className="mx-auto grid size-16 place-items-center rounded-2xl bg-orange-50 text-3xl dark:bg-slate-800"
            aria-hidden="true">
            🛍️
          </span>
          <h2 className="mt-5 mb-0 text-xl font-bold text-slate-900 dark:text-slate-100">
            Your cart is empty
          </h2>
          <p className="mt-2 mb-0 text-slate-600 dark:text-slate-400">
            Find something delicious and add it to your cart.
          </p>
          <Link
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-500 to-[#ed6a36] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            to="/">
            Browse restaurants
          </Link>
        </section>
      ) : (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <RestaurantItemList items={cart} />
        </section>
      )}
    </main>
  );
};

export default Cart;
