import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mx-auto mt-8 mb-16 w-[calc(100%_-_2rem)] max-w-[1180px]">
        <section className="grid grid-cols-[1.3fr_0.9fr] items-center gap-7 rounded-[32px] border border-[#f1e5d9] bg-[radial-gradient(circle_at_top_right,rgba(255,209,153,0.46),transparent_26%),linear-gradient(135deg,#fffaf5,#fff)] p-[clamp(24px,4vw,48px)] shadow-[0_18px_48px_rgba(120,72,23,0.08)] dark:border-slate-700 dark:bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_26%),linear-gradient(135deg,#1e293b,#0f172a)] dark:shadow-black/30 max-md:grid-cols-1">
          <div className="min-w-0">
            <p className="mb-3 text-[0.76rem] font-extrabold tracking-[0.18em] text-[#d96a2d] uppercase dark:text-orange-300">
              About us
            </p>
            <p className="mt-5 mb-0 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/80 py-2 pr-4 pl-2 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <span className="grid size-7 place-items-center rounded-full bg-orange-100 text-xs font-bold text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                <UserContext.Consumer>
                  {({ loggedInUser }) => loggedInUser?.charAt(0) || "G"}
                </UserContext.Consumer>
              </span>
              <span className="font-medium">Logged in as</span>
              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <span className="font-bold text-slate-800 dark:text-slate-100">
                    {loggedInUser || "Guest"}
                  </span>
                )}
              </UserContext.Consumer>
            </p>
            <h1 className="m-0 text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] tracking-[-0.05em] text-[#17212b] dark:text-slate-100">
              We turn hungry moments into memorable food discoveries.
            </h1>
            <p className="mt-[18px] max-w-[620px] text-[1.05rem] leading-[1.7] text-[#536276] dark:text-slate-300">
              Foodology is built for people who love exploring neighborhood
              favorites, hidden cafés, and quick comfort bites — all in one
              place.
            </p>
            <div className="mt-[22px] flex flex-wrap gap-2.5">
              <span className="inline-flex items-center rounded-full border border-[#fde3c6] bg-white/80 px-[14px] py-[9px] text-[0.86rem] font-bold text-[#8a4c1d] dark:border-slate-700 dark:bg-slate-800 dark:text-orange-200">
                Curated picks
              </span>
              <span className="inline-flex items-center rounded-full border border-[#fde3c6] bg-white/80 px-[14px] py-[9px] text-[0.86rem] font-bold text-[#8a4c1d] dark:border-slate-700 dark:bg-slate-800 dark:text-orange-200">
                Fast search
              </span>
              <span className="inline-flex items-center rounded-full border border-[#fde3c6] bg-white/80 px-[14px] py-[9px] text-[0.86rem] font-bold text-[#8a4c1d] dark:border-slate-700 dark:bg-slate-800 dark:text-orange-200">
                Local favorites
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <UserClass name={"Karan Patel (Class based component)"} />
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <p className="mb-2 text-xs font-extrabold tracking-[0.16em] text-orange-600 uppercase dark:text-orange-300">
              Behind the app
            </p>
            <h2 className="m-0 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              React concepts in practice
            </h2>
            <p className="mt-2 mb-0 max-w-2xl text-slate-600 dark:text-slate-400">
              A few of the concepts I’m learning, with examples of where they
              show up in Foodology.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                State & effects
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Local state drives search, filters, and interactive controls;
                effects load data and initialize the profile.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Body
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  AppLayout
                </code>
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                Context
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Shared user and theme values are provided near the app root and
                read by components that need them.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  AppLayout
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Header
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Body
                </code>
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                Custom hooks
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Reusable hooks keep network-status and restaurant-menu fetching
                logic separate from the UI.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  useActiveStatus
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  useRestaurantMenu
                </code>
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                Routing & lazy loading
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Nested routes render through an outlet, while the Grocery page
                is loaded on demand.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  App.js
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Grocery
                </code>
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                Component composition
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                A higher-order component adds an “Open” badge around restaurant
                cards when appropriate.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  withOpenLabel
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  RestaurantCard
                </code>
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                Class components
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                The About page and developer profile demonstrate class-based
                components and lifecycle methods.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  About
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  UserClass
                </code>
              </p>
            </article>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="mb-2 text-xs font-extrabold tracking-[0.16em] text-orange-600 uppercase dark:text-orange-300">
              Recently added
            </p>
            <h2 className="m-0 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Redux in the cart
            </h2>
            <p className="mt-2 mb-0 max-w-2xl text-slate-600 dark:text-slate-400">
              Today’s practice uses Redux Toolkit to keep cart actions and
              shared cart data in one place.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                Store & slice
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                The Redux store holds cart items, and the cart slice defines
                how that shared state can change.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  appStore
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  cartSlice
                </code>
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                Dispatching actions
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Menu buttons dispatch add and remove actions, while the cart
                page can clear the list.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  RestaurantItemList
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Cart
                </code>
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="m-0 text-base font-bold text-slate-900 dark:text-slate-100">
                Selecting shared state
              </h3>
              <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                The header badge and cart page read the same store, so the item
                count stays in sync.
              </p>
              <p className="m-0 flex flex-wrap gap-2">
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  useSelector
                </code>
                <code className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Header
                </code>
              </p>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
