import React from "react";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
        <div className={style.logo}>
          <img src="./images/icon.png" alt="logo" />
          <p>
            From casual sneakers to dress shoes, we have a wide selection to fit
            every occasion and budget.
          </p>
        </div>
        <div className={style.box}>
          <h4>Categories</h4>
          <Link to="/shop">Casual Shoes</Link>
          <Link to="/shop">Leather Shoes</Link>
          <Link to="/shop">Running Shoes</Link>
          <Link to="/shop">Floaters and Sandals</Link>
          <Link to="/shop">Sports Shoes</Link>
        </div>
        <div className={style.box}>
          <h4>About</h4>
          <Link to="/about">Board of Directors</Link>
          <Link to="/about">Company Profile</Link>
          <Link to="/about">Comfort Shoes</Link>
          <Link to="/about">Durable Shoes</Link>
          <Link to="/about">Style in Shoes</Link>
        </div>
        <div className={style.box}>
          <h4>Useful Links</h4>
          <Link to="/">Home Page</Link>
          <Link to="/about">About Page</Link>
          <Link to="/shop">Shop Page</Link>
          <Link to="/cart">Cart Page</Link>
        </div>
        <div className={style.box}>
          <h4>Follow Us</h4>
          <Link to="#">Facebook</Link>
          <Link to="#">Twitter</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">YouTube</Link>
          <Link to="#">LinkedIn</Link>
        </div>
      </div>
      <div className={style.copywrite}>
        <p>Copyright © Boot Bazaar 2023</p>
        <p>Developed by ~ Yash Kumar Saini</p>
      </div>
    </footer>
  );
};

export default Footer;
