import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
        <span>Foodology</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
