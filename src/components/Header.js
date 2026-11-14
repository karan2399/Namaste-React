import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router";
import useActiveStatus from "../utils/useActiveStatus";
import UserContext from "../utils/UserContext";
import ThemeContext from "../utils/ThemeContext";
import { useSelector } from "react-redux";

const navLinkClassName = ({ isActive }) =>
  `inline-flex min-h-10 items-center rounded-full px-[13px] py-[9px] transition-colors duration-200 hover:bg-[#fff3e8] hover:text-[#c94f1a] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#ed6a3659] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-orange-300 ${
    isActive
      ? "bg-[#fff3e8] font-extrabold text-[#c94f1a] dark:bg-slate-800 dark:text-orange-300"
      : ""
  } max-md:min-h-[38px] max-md:px-[11px] max-md:py-2 max-[480px]:min-h-9 max-[480px]:px-[9px] max-[480px]:py-[7px]`;

export const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const isOnline = useActiveStatus();

  //Use a Selector to read the store value
  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  // useContext Hook
  const user = useContext(UserContext);

  const { theme, setTheme } = useContext(ThemeContext);

  // useffect takes a Callback Function and Dependency array
  // Only callback fn is mandatory
  // If No dependency array, useEffect will be called on every render
  useEffect(() => {}, []);

  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-[18px] border-b border-slate-200/80 bg-white/90 px-[clamp(20px,5vw,72px)] py-3 shadow-[0_8px_28px_rgba(15,23,42,0.055)] backdrop-blur-2xl max-md:justify-center max-md:px-[18px] dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/20">
      <div className="flex items-center gap-[13px] text-[1.55rem] font-bold tracking-[-0.04em] text-[#e76f32] max-md:text-[1.4rem] max-[480px]:gap-2">
        <Link to="/">
          <img
            className="block size-[50px] rounded-full object-cover shadow-[0_3px_10px_rgba(15,23,42,0.14)] transition-transform duration-200 hover:rotate-[-5deg] hover:scale-[1.04] max-[480px]:size-12"
            src={LOGO_URL}
            alt="Foodology home"
          />
        </Link>
        <Link
          className="transition-colors duration-200 hover:text-[#c94f1a] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#ed6a3659] dark:hover:text-orange-300"
          to="/">
          Foodology
        </Link>
      </div>
      <div className="max-md:w-full">
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-1 p-0 text-[0.94rem] font-semibold text-gray-700 max-md:gap-[6px] max-md:text-[0.88rem] max-[480px]:gap-1 max-[480px]:text-[0.84rem] dark:text-slate-300">
          <li className="mr-1 inline-flex min-h-9 cursor-default items-center gap-2 rounded-full border border-[#e8edf1] bg-slate-50 px-3 text-[0.82rem] font-semibold text-[#536276] max-[480px]:mr-0 max-[480px]:gap-[7px] max-[480px]:px-[9px] max-[480px]:text-[0.76rem] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <span
              className={`size-2 rounded-full ${
                isOnline
                  ? "bg-[#20a36a] shadow-[0_0_0_3px_rgba(32,163,106,0.13)]"
                  : "bg-slate-400 shadow-[0_0_0_3px_rgba(148,163,184,0.15)]"
              }`}
            />
            <span>{isOnline ? "Online" : "Offline"}</span>
          </li>
          <li>
            <NavLink to="/" end className={navLinkClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClassName}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClassName}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/grocery" className={navLinkClassName}>
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={navLinkClassName}
              aria-label={`Cart, ${cartItems.length} ${
                cartItems.length === 1 ? "item" : "items"
              }`}>
              <span className="relative inline-flex">
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6" />
                  <circle cx="10" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 grid min-h-4 min-w-4 place-items-center rounded-full bg-orange-500 px-1 text-[10px] leading-none font-bold text-white ring-2 ring-white dark:ring-slate-900">
                    {cartItems.length}
                  </span>
                )}
              </span>
            </NavLink>
          </li>
          <li>
            {user.loggedInUser === "" && (
              <button
                type="button"
                className="rounded-full bg-gradient-to-br from-amber-500 to-[#ed6a36] px-4 py-2.5 text-sm font-bold text-white shadow-[0_5px_12px_rgba(237,106,54,0.2)] transition duration-200 hover:-translate-y-px hover:brightness-105 hover:shadow-[0_8px_16px_rgba(237,106,54,0.25)] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#ed6a3659]"
                onClick={() =>
                  setBtnText((prev) => {
                    if (prev === "Login") {
                      return "Logout";
                    }
                    return "Login";
                  })
                }>
                {btnText}
              </button>
            )}
          </li>
          <li className="inline-flex min-h-9 items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 py-1 pr-3 pl-1.5 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <span className="grid size-7 place-items-center rounded-full bg-orange-500 text-xs font-bold text-white">
              {user.loggedInUser?.charAt(0) || "G"}
            </span>
            <span>{user.loggedInUser || "Guest"}</span>
          </li>

          <li>
            <button
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-orange-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:hover:text-orange-300"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <span aria-hidden="true">{theme === "dark" ? "☾" : "☀"}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
