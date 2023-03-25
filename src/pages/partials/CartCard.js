import React from "react";
import { Link } from "react-router-dom";
import style from "./../cart.module.scss";
const CartCard = (props) => {
  const { item, id, updateCart } = props;
  return (
    <div className={style.card}>
      <div className={style.imgBox}>
        <img
          src={
            "./images/product_images/" +
            item.category +
            "/" +
            item.productNo +
            ".png"
          }
          alt="Shoe"
        />
        <div className={style.productNumber}>{id + 1}</div>
      </div>

      <div className={style.productDetails}>
        <div className={style.details}>
          <Link to={"/shop/product/" + item.id} target="_blank">
            <h2>{item.title}</h2>
          </Link>
          <h3>
            Size <span>{item.shoeSize}</span>
          </h3>
          <div className={style.footer}>
            <div className={style.count}>
              <button
                onClick={() => {
                  const data =
                    JSON.parse(localStorage.getItem("bootCart")) ?? [];
                  let itemCount = data[id].count;
                  if (itemCount > 2) {
                    itemCount--;
                  } else {
                    itemCount = 1;
                  }
                  data[id].count = itemCount;
                  localStorage.setItem("bootCart", JSON.stringify(data));
                  updateCart();
                }}
              >
                -
              </button>
              <input disabled value={item.count} />
              <button
                onClick={() => {
                  const data =
                    JSON.parse(localStorage.getItem("bootCart")) ?? [];
                  let itemCount = data[id].count;
                  if (itemCount < 10) {
                    itemCount++;
                  } else {
                    itemCount = 10;
                  }
                  data[id].count = itemCount;
                  localStorage.setItem("bootCart", JSON.stringify(data));
                  updateCart();
                }}
              >
                +
              </button>
            </div>
            <button
              className={style.remove}
              onClick={() => {
                const data = JSON.parse(localStorage.getItem("bootCart")) ?? [];
                data.splice(id, 1);
                localStorage.setItem("bootCart", JSON.stringify(data));
                updateCart();
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className={style.price}>
          <h4>
            ₹{parseInt(item?.price - (item?.price * item?.discount) / 100)}
            <s
              className={
                item?.discount > 0 ? `${style.discount}` : `${style.hide}`
              }
            >
              ₹{item?.price}
            </s>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
