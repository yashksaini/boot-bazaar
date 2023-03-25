/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import style from "./productcard.module.scss";
const ItemCard = (props) => {
  const { id, productNo, title, category, price, discount } = props.item;
  return (
    <Link to={"product/" + id} className={style.card} key={id}>
      <div className={discount > 0 ? `${style.discount}` : `${style.hide}`}>
        {discount}%
      </div>
      <div className={style.imgBox}>
        <img src={`images/product_images/${category}/${productNo}.png`} />
      </div>
      <h3>{title}</h3>
      <div className={style.footer}>
        <span>
          <s className={discount > 0 ? `` : `${style.hide}`}>₹{price}</s> &nbsp;
          ₹{parseInt(price - (price * discount) / 100)}
        </span>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default ItemCard;
