import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
const Navbar = (props) => {
  const [activeNav, setActiveNav] = useState(false);
  const { productCount } = props;
  const toggleNav = () => {
    setActiveNav((prev) => !prev);
  };

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src="./images/icon.png" alt="Logo" />
      </div>
      <div
        className={
          activeNav ? `${style.navs} ${style.activeNav}` : `${style.navs}`
        }
      >
        <NavLink to="/" activeclassname="active" onClick={toggleNav}>
          HOME
        </NavLink>
        <NavLink to="/shop" activeclassname="active" onClick={toggleNav}>
          SHOP
        </NavLink>
        <NavLink to="/about" activeclassname="active" onClick={toggleNav}>
          ABOUT
        </NavLink>
        <NavLink to="/cart" activeclassname="active" onClick={toggleNav}>
          <span className="material-symbols-outlined">shopping_cart</span>
          <div
            className={productCount === 0 ? `${style.hide}` : `${style.count}`}
          >
            {productCount > 9 ? "9+" : productCount}
          </div>
        </NavLink>
      </div>
      <div className={style.cartMenu}>
        <NavLink to="/cart" className={style.cart}>
          <span className="material-symbols-outlined">shopping_cart</span>
          <div
            className={
              productCount === 0 ? `${style.hide}` : `${style.cartCount}`
            }
          >
            {productCount > 9 ? "9+" : productCount}
          </div>
        </NavLink>
        <div
          className={activeNav ? ` ${style.close}` : `${style.menu}`}
          onClick={toggleNav}
        >
          <span className="material-symbols-outlined">menu</span>
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
