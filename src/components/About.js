import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="about-page">
        <section className="about-hero">
          <div className="about-copy">
            <p className="about-eyebrow">About us</p>
            <h1>We turn hungry moments into memorable food discoveries.</h1>
            <p>
              Foodology is built for people who love exploring neighborhood
              favorites, hidden cafés, and quick comfort bites — all in one
              place.
            </p>
            <div className="about-badges">
              <span>Curated picks</span>
              <span>Fast search</span>
              <span>Local favorites</span>
            </div>
          </div>

          <div className="about-visual">
            <UserClass name={"Karan Patel (Class based component)"} />
          </div>
        </section>

        <section className="about-grid">
          <div className="about-card">
            <h3>Our mission</h3>
            <p>
              Help food lovers discover amazing restaurants with clean UX and
              thoughtful details.
            </p>
          </div>
          <div className="about-card">
            <h3>Why it exists</h3>
            <p>
              From busy workdays to weekend cravings, the app makes every dining
              decision easier and more delightful.
            </p>
          </div>
          <div className="about-card">
            <h3>Built with love</h3>
            <p>
              Thoughtful interfaces, smooth navigation, and quality restaurant
              data designed around real cravings.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
