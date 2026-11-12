import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router";
import useActiveStatus from "../utils/useActiveStatus";

export const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const isOnline = useActiveStatus();

  // useffect takes a Callback Function and Dependency array
  // Only callback fn is mandatory
  // If No dependency array, useEffect will be called on every render
  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="Foodology home" />
        </Link>
        <Link className="brand-name" to="/">
          Foodology
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li className="status-item">
            <span
              className={`status-indicator ${isOnline ? "is-online" : "is-offline"}`}
            />
            <span>{isOnline ? "Online" : "Offline"}</span>
          </li>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }>
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }>
              Cart
            </NavLink>
          </li>
          <li>
            <button
              className="login-btn"
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
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
