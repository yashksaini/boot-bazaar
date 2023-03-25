import React from "react";
import Footer from "../partials/Footer";
import style from "./about.module.scss";
const About = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.topBanner}>
          <h1>know us more</h1>
          <h2>About Us</h2>
          <div className={style.imgBox}>
            <img src="./images/about-us/about-us.png" alt="Banner" />
          </div>
        </div>
        <div className={style.qualities}>
          <div className={style.card}>
            <h1>01.</h1>
            <h2>Research</h2>
            <p>
              Research can lead to the creation of better shoe products that
              meet the needs.
            </p>
          </div>
          <div className={style.card}>
            <h1>02.</h1>
            <h2>Idea & Concept</h2>
            <p>
              {" "}
              The concept of shoes has evolved over time to meet changing
              fashion trends & needs.
            </p>
          </div>
          <div className={style.card}>
            <h1>03.</h1>
            <h2>Design & Production</h2>
            <p>
              Quality control is important at every step to ensure the final
              product meets the design .
            </p>
          </div>
          <div className={style.card}>
            <h1>04.</h1>
            <h2>Sales & Support​</h2>
            <p>
              Customer support is important about sizing, fit, returns, or
              defects in the product.
            </p>
          </div>
        </div>
        <div className={style.features}>
          <div className={style.featureCard}>
            <img src="./images/about-us/comfort.png" alt="Comfort" />
            <h1>Comfort</h1>
            <p>
              One of the most important qualities of a good shoe is comfort.
              Shoes should fit well, provide adequate support and cushioning,
              and be breathable to prevent sweating and odors.
            </p>
          </div>
          <div className={style.featureCard}>
            <img src="./images/about-us/durability.png" alt="Durability" />
            <h1>Durability</h1>
            <p>
              Another key quality of a good shoe is durability. High-quality
              shoes should be made from durable materials that can withstand
              everyday wear and tear, as well as exposure to weather .
            </p>
          </div>
          <div className={style.featureCard}>
            <img src="./images/about-us/style.png" alt="Style" />
            <h1>Style</h1>
            <p>
              While comfort and durability are important, many people also value
              the appearance of their shoes. Good shoe products should be
              stylish and allowing them to be worn with a variety of outfits.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
