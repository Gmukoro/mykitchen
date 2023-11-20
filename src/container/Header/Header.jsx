import React from "react";
import { images } from "../../constants";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        🌟 Welcome to Mykitchen! 🌟
        <br /> Indulge in a culinary journey at our restaurant, where we blend
        the finest ingredients to create delectable dishes. Whether it's a
        casual meal or a special celebration, we promise an unforgettable dining
        experience. Explore our diverse menu and enjoy exceptional service in an
        inviting atmosphere. Thank you for choosing Mykitchen. Bon appétit!
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper-img">
      <img src={images.banga} alt="header img" />
    </div>
  </div>
);

export default Header;
