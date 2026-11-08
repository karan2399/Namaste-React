import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router";

export const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  // useffect takes a Callback Function and Dependency array
  // Only callback fn is mandatory
  // If No dependency array, useEffect will be called on every render
  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img className="logo" src={LOGO_URL} alt="" />{" "}
        </Link>

        <span>
          {" "}
          <Link to="/"> Foodology </Link>
        </span>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> Cart </Link>
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
