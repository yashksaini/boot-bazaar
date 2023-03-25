/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import style from "./productcard.module.scss";
const ProductCard = (props) => {
  const { title, url, id, price, actualPrice } = props.product;
  return (
    <div className={style.card} key={id}>
      <div className={style.imgBox}>
        <img src={url} />
      </div>
      <h3>{title}</h3>
      <div className={style.footer}>
        <span>
          <s className={price === actualPrice ? `${style.hide}` : ""}>
            ₹{actualPrice}
          </s>{" "}
          ₹{price}
        </span>
        <Link to={"/shop/product/" + id}>Shop Now</Link>
      </div>
    </div>
  );
};

export default ProductCard;
