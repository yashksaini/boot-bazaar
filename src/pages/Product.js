import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../partials/Footer";
import { ProductsContext } from "../ProductsContext";
import style from "./product.module.scss";
const Product = (props) => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { type } = useContext(ProductsContext);
  const [item, setItem] = useState();
  const [shoeSize, setShoeSize] = useState(9);
  const [productCount, setProductCount] = useState(1);
  const { addToCart, productStatus } = props;
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  useEffect(() => {
    let data = products.filter((product) => {
      return product.id === parseInt(id);
    });
    if (data.length > 0) {
      setItem(data[0]);
      setShoeSize(data[0]?.size[0]);
    }
  }, [id, products]);

  useEffect(() => {
    setMessage(productStatus);
    setTimeout(() => {
      setMessage("");
    }, 3000);
    setTimeout(() => {
      setDisableBtn(false);
    }, 4000);
  }, [productStatus, products]);

  return (
    <>
      <div className={style.product}>
        <div
          className={message.length > 0 ? `${style.message}` : `${style.hide}`}
        >
          <span className="material-symbols-outlined">check_circle</span>
          {productStatus}
        </div>
        <div className={style.container}>
          <Link to="/shop" className={style.back}>
            <span className="material-symbols-outlined">arrow_back</span>{" "}
            <span>Go to shop</span>
          </Link>
          <div className={style.imgBox}>
            <img
              src={
                "./images/product_images/" +
                item?.category +
                "/" +
                item?.productNo +
                ".png"
              }
              alt="Product"
            />
          </div>
          <div className={style.productDetails}>
            <p className={style.typeName}>
              {type[item?.category - 1]?.typeName}
            </p>
            <h1 className={style.title}>{item?.title}</h1>
            <div
              className={
                item?.discount > 0 ? `${style.discount}` : `${style.hide}`
              }
            >
              -{item?.discount}%
            </div>
            <p className={style.price}>
              <s className={item?.discount > 0 ? `` : `${style.hide}`}>
                ₹{item?.price}
              </s>{" "}
              ₹{parseInt(item?.price - (item?.price * item?.discount) / 100)}
              <span>+ free shipping</span>
            </p>
            {/* <p>
            You Save: ₹
            {item?.price -
              parseInt(item?.price - (item?.price * item?.discount) / 100)}
          </p> */}
            <div className={style.rating}>
              <div className={style.rateWidth}>
                <img src="./images/rating.png" alt="Rating" />
                <div style={{ width: item?.rating * 30 + "px" }}></div>
                <span className={style.whiteSlide}></span>
              </div>
              <strong>{item?.rating}</strong> <span>/5</span>
            </div>
            <p className={style.description}>
              Introducing our latest pair of shoes, perfect for any occasion!
              These stylish and comfortable shoes are made with high-quality
              materials that will keep your feet feeling great all day long. The
              classic design is versatile and can be dressed up or down, making
              them a great choice for both formal and casual events.
            </p>
            <div className={style.sizes}>
              {item?.size.map((size) => {
                return (
                  <span
                    className={size === shoeSize ? `${style.active}` : ""}
                    onClick={() => {
                      setShoeSize(size);
                    }}
                    key={size}
                  >
                    {size}
                  </span>
                );
              })}
            </div>
            <div className={style.count}>
              <button
                onClick={() => {
                  setProductCount((prev) => {
                    if (prev > 1) {
                      return prev - 1;
                    } else {
                      return 1;
                    }
                  });
                }}
              >
                -
              </button>
              <input
                min={1}
                max={10}
                type="number"
                disabled
                value={productCount}
              />
              <button
                onClick={() => {
                  setProductCount((prev) => {
                    if (prev < 10) {
                      return parseInt(prev) + parseInt(1);
                    } else {
                      return prev;
                    }
                  });
                }}
              >
                +
              </button>
            </div>
            <button
              className={style.addCart}
              disabled={disableBtn}
              onClick={() => {
                let data = {
                  count: productCount,
                  id: id,
                  shoeSize: shoeSize,
                };
                setDisableBtn(true);
                addToCart(data);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
