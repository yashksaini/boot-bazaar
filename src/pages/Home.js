import React from "react";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import style from "./home.module.scss";
import ProductCard from "./partials/ProductCard";

const Home = () => {
  const products = [
    {
      title: "Blue sports shoes",
      id: 51,
      price: 1349,
      actualPrice: 1499,
      url: "images/products/1.png",
    },
    {
      title: "Brown Leather Shoes",
      id: 15,
      price: 2999,
      actualPrice: 4999,
      url: "images/products/2.png",
    },
    {
      title: "Brown cloth shoes",
      id: 39,
      price: 699,
      actualPrice: 999,
      url: "images/products/3.png",
    },
    {
      title: "Black no lace casual shoes",
      id: 12,
      price: 703,
      actualPrice: 799,
      url: "images/products/4.png",
    },
    {
      title: "Black fashion shoes",
      id: 44,
      price: 839,
      actualPrice: 1199,
      url: "images/products/5.png",
    },
    {
      title: "Black running shoes",
      id: 25,
      price: 1299,
      actualPrice: 1299,
      url: "images/products/6.png",
    },
  ];
  return (
    <>
      <div className={style.container}>
        <img src="images/home/home.png" alt="Shoes" />
        <h1>Step Into Style</h1>
        <p>
          From casual sneakers to dress shoes, we have a wide selection to fit
          every occasion and budget.
        </p>
        <Link to="/shop" className={style.shopBtn}>
          SHOP NOW
        </Link>
      </div>
      <div className={style.products}>
        <h2>Our Best Seller</h2>
        <p>
          Our best seller is the perfect combination of style and comfort. With
          a sleek design and durable materials, it's suitable for any occasion.
          Its popularity speaks for itself - grab one for yourself and see why
          it's a customer favourite.
        </p>
        <div className={style.allProducts}>
          {products.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
