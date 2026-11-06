import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "./data";

// Header
// Logo
// Nav Items

// Body
// Search
// RestaurantContaienr
// RestaurantCard
// Image
// Name of the restaurant
// Ratings
// Cusine
// ETA

// Footer
// Copyright
//    Links

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/2a/95/da/2a95da1778f095412a3e93e38cfab5b2.jpg"
          alt=""
        />
        <span>Foodology</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {resData.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } =
    props.resData.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Res Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div>Copyright 2026 | Foodology</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// Render heading to the root.
root.render(<AppLayout />);
