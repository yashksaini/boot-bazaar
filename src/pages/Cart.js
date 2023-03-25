import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext";
import CartCard from "./partials/CartCard";
import style from "./cart.module.scss";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const { updateNavbar, productCount } = props;
  const { products } = useContext(ProductsContext);
  const [productData, setProductData] = useState([]);
  const [refreshCart, setRefreshCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState({
    price: 0,
    discount: 0,
    amount: 0,
  });

  const updateCart = () => {
    setRefreshCart((prev) => !prev);
    updateNavbar();
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bootCart")) ?? [];

    let cartProducts = [];
    data.forEach((item) => {
      const data = products[parseInt(item.id) - 1];
      const finalData = { ...data, shoeSize: item.shoeSize, count: item.count };
      cartProducts.push(finalData);
    });
    let price = 0;
    let discount = 0;
    cartProducts.forEach((item) => {
      price += parseInt(item.price * item.count);
      discount += parseInt(
        Math.round((item.price * item.discount * item.count) / 100)
      );
    });
    let finalPriceData = {
      price: price,
      discount: discount,
      amount: price - discount,
    };
    setTotalPrice(finalPriceData);

    setProductData(cartProducts);
  }, [refreshCart, products]);

  return (
    <>
      <div className={style.container}>
        <div className={style.cartProducts}>
          <h1 className={style.heading}>Shopping Cart</h1>
          <p className={style.subHeading}>All added products appear below.</p>
          <div>
            {productData.map((item, index) => {
              return (
                <CartCard
                  item={item}
                  key={index}
                  id={index}
                  updateCart={updateCart}
                />
              );
            })}
          </div>
          <div
            className={
              productCount < 1 ? `${style.emptyCart}` : `${style.hide}`
            }
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <h1>Your cart is currently Empty</h1>
            <Link to="/shop">SHOP NOW</Link>
          </div>
        </div>
        <div
          className={productCount > 0 ? `${style.subTotal}` : `${style.hide}`}
        >
          <h1 className={style.heading}>Shopping Cart</h1>
          <p className={style.subHeading}>All added products appear below.</p>
          <h2>
            Subtotal
            <span>
              ({productCount} Item{productCount > 1 ? "s" : ""})
            </span>
          </h2>
          <p className={style.productsPrice}>
            <span>Price:</span>
            <span>₹ {totalPrice.price}</span>{" "}
          </p>
          <p className={style.productsDiscount}>
            <span>Discount: </span>
            <span>- ₹ {totalPrice.discount}</span>
          </p>
          <p className={style.productsAmount}>
            <span>Total:</span>
            <span>₹ {totalPrice.amount}</span>
          </p>
          <button className={style.checkout}>Checkout</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
