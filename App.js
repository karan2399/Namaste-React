import React from "react";
import ReactDOM from "react-dom/client";

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
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}>
      <img
        className="res-logo"
        src="https://i.pinimg.com/736x/d7/2f/ea/d72fea62923a6ce30b284b8ee156bb24.jpg"
        alt="Res Logo"
      />
      <h3>The Healthy Planet</h3>
      <h4>Bowls | Burritos | Salads | Wraps</h4>
      <h4>4.3 Stars</h4>
      <h4>38 Minutes</h4>
    </div>
  );
};

const Footer = () => {
  return <div className="footer">Copyright 2026 | Foodology</div>;
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
