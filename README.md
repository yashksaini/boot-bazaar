# Boot Bazaar

## Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Used For](#used-for)
- [Improvements](#improvements)
- [Problems Faced](#problems-faced)
- [Links](#links)
- [Getting Started](#getting-started)

## Introduction
Boot Bazaar is a front-end e-commerce application built using React and CSS. It offers a seamless shopping experience, featuring an array of stylish footwear. Explore an assortment of shoes that cater to diverse preferences.

## Demo



https://github.com/yashksaini/boot-bazaar/assets/101442489/d20780b6-194d-4564-9978-f35ae5d9c92a


## About the Project
Boot Bazaar is a dynamic online destination for shoe enthusiasts. Crafted with React and CSS, it delivers an immersive shopping journey that seamlessly blends style and technology. With an extensive collection of shoes ranging from sports to fashion, Boot Bazaar caters to a wide audience.

The application presents a user-friendly interface divided into five distinct pages. The Home Page welcomes visitors with a curated selection of top products, inviting them to explore further. The About Page elaborates on the myriad features and benefits of the footwear collection, engaging potential customers.

The Shop Page showcases a comprehensive array of products, employing pagination for ease of navigation. A smart search bar and sorting filters empower users to locate products efficiently. The Filter Bar refines options by category, color, size, and discount percentage, refining the shopping experience.

The Product Page provides in-depth details about each item, allowing users to make informed decisions. Adding products to the cart is a breeze, involving size selection and quantity specification. Lastly, the Cart Page displays selected items and facilitates quantity adjustments or removals. Through local storage, product data is retained during the session.

## Technologies Used
- React
- SCSS
- Local Storage

## Features
- Vast assortment of footwear catering to various tastes.
- Seamless and engaging user experience.
- Responsive design for optimal viewing across devices.
- Top product showcase on the Home Page.
- Detailed product information, including category and color.
- Efficient pagination for browsing the product catalog.
- Dynamic search bar for quick product discovery.
- Sorting options based on price and default order.
- Comprehensive filtering with category, color, size, and discount percentage.
- Engaging About Page highlighting product features.
- Intuitive product page layout with essential details.
- Effortless addition of products to the shopping cart.
- Easy size selection and quantity specification during checkout.
- Cart Page for reviewing and managing selected items.
- Local storage implementation for retaining cart data.
- Appealing and user-friendly UI design.
- Clear Call to Action (CTA) buttons for seamless navigation.
- Regular updates and feature enhancements.
- Interactive footer with essential contact and information links.
- Efficient state management for seamless data handling.
- Comprehensive testing for ensuring application robustness.

## Used For
- Online shoe shopping
- Product discovery
- Adding products to the cart
- Filtering and sorting products

## Improvements
- Implement user reviews and ratings
- Introduce a wishlist functionality
- Enhance accessibility for differently-abled users
- Expand product categories for a diverse collection

## Problems Faced
- **Problem:** Implementing responsive design for various devices.
  - **Solution:** Utilized CSS media queries to adapt layout and styling based on screen size, ensuring a consistent experience across devices.
- **Problem:** Managing and retaining cart data between sessions.
  - **Solution:** Implemented local storage to store and retrieve cart items, enabling users to continue their shopping seamlessly.
- **Problem:** Props Drilling and Component Nesting
  - **Solution:** When dealing with deeply nested components, passing props down the component tree (props drilling) can become unwieldy and lead to prop-related bugs. Implementing prop drilling solutions like Context or using state management libraries can help mitigate this challenge.
- **Problem:** Lifecycle Management and Hooks
  - **Solution:** The introduction of Hooks simplified many aspects of component logic, but understanding their nuances, managing their order, and knowing when to use useEffect, useState, useContext, etc., can be tricky. Hooks-related bugs and ensuring correct cleanup in useEffect can pose challenges.

## Links
- Live Application: [Boot Bazaar](https://boot-bazaar.netlify.app/)
- GitHub Repository: [Boot Bazaar Repository](https://github.com/yashksaini/boot-bazaar)

## Getting Started
To clone and run this project locally, follow these steps:
1. Clone the repository: `git clone https://github.com/yashksaini/boot-bazaar.git`
2. Navigate to the project directory: `cd boot-bazaar`
3. Install dependencies: `npm install`
4. Run the application: `npm start`
