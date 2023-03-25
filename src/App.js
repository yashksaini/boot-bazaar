import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./partials/Navbar";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductsContextProvider from "./ProductsContext";
import Product from "./pages/Product";
import { useEffect, useState } from "react";

function App() {
  const [productCount, setProductCount] = useState(0);
  const [productStatus, setProductStatus] = useState("");
  const [refreshCart, setRefreshCart] = useState(false);

  const updateNavbar = () => {
    setRefreshCart((prev) => !prev);
  };
  const addToCart = (data) => {
    const cartData = JSON.parse(localStorage.getItem("bootCart")) ?? [];
    const productData = cartData.filter((item) => {
      return item.id === data.id && item.shoeSize === data.shoeSize;
    });
    if (productData.length === 0) {
      cartData.push(data);
      setProductStatus("Product added to cart");
    } else {
      const productIndex = cartData.findIndex((item) => {
        return item.id === data.id && item.shoeSize === data.shoeSize;
      });
      if (data.count + cartData[productIndex].count > 10) {
        cartData[productIndex].count = 10;
        setProductStatus("Max product limit reached");
      } else {
        cartData[productIndex].count += data.count;
        setProductStatus("Product already in cart");
      }
    }
    setTimeout(() => {
      setProductStatus("");
    }, 3000);
    let countProducts = 0;
    cartData.forEach((item) => {
      countProducts += parseInt(item.count);
    });
    setProductCount(countProducts);
    localStorage.setItem("bootCart", JSON.stringify(cartData));
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("bootCart")) ?? [];
    let countProducts = 0;
    cartData.forEach((item) => {
      countProducts += parseInt(item.count);
    });
    setProductCount(countProducts);
  }, [refreshCart]);
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Navbar productCount={productCount} />
        <Routes>
          <Route exact="true" path="/" element={<Home />}></Route>
          <Route exact="true" path="/shop" element={<Shop />}></Route>
          <Route
            path="shop/product/:id"
            element={
              <Product addToCart={addToCart} productStatus={productStatus} />
            }
          ></Route>
          <Route exact="true" path="/about" element={<About />}></Route>

          <Route
            exact="true"
            path="/cart"
            element={
              <Cart updateNavbar={updateNavbar} productCount={productCount} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
