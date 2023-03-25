import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsContext";
import Filters from "./partials/Filters";
import ItemCard from "./partials/ItemCard";
import style from "./shop.module.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  const [showFilter, setShowFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [filterProducts, setFilterProducts] = useState(products);
  const [pageData, setPageData] = useState(filterProducts);
  // Total Pages for the given number of products
  const [totalPages, setTotalPages] = useState(1);
  // It stores data in forms of pages in 2D array
  const [sectionData, setSectionData] = useState(filterProducts);

  const initialData = {
    category: [],
    colors: [],
    sizes: [],
    discount: 0,
    // ratings: 0,
    change: false,
    search: "",
    sort: "",
  };
  const [extraFilters, setExtraFilters] = useState(initialData);

  // It calculate the actual value of item
  const getActualValue = (item) => {
    return item.price - (item.price * item.discount) / 100;
  };

  const applyFilters = (data) => {
    setExtraFilters({ ...extraFilters, ...data });
  };

  const searchSize = (item) => {
    let found = false;
    item.size.forEach((size) => {
      if (extraFilters.sizes.includes(size)) {
        found = true;
      }
    });
    return found;
  };

  useEffect(() => {
    setPage(1);
    let filteredData = products;
    // Filter for category
    if (extraFilters.category.length > 0) {
      filteredData = products.filter((item) => {
        return extraFilters.category.includes(item.category);
      });
    }
    // Filter for shoe color
    if (extraFilters.colors.length > 0) {
      filteredData = filteredData.filter((item) => {
        return extraFilters.colors.includes(item.color);
      });
    }
    // Filter for shoe size
    if (extraFilters.sizes.length > 0) {
      filteredData = filteredData.filter((item) => {
        return searchSize(item);
      });
    }
    // Filter for discount
    if (extraFilters.discount > 0) {
      filteredData = filteredData.filter((item) => {
        return item.discount >= extraFilters.discount;
      });
    }

    // For searching item by title
    let sortData = filteredData.filter((item) => {
      return (
        item.title.toUpperCase().indexOf(extraFilters.search.toUpperCase()) > -1
      );
    });

    // Sort items in ascending order of actual price (after removal of discount)
    if (extraFilters.sort === "asc") {
      sortData.sort((a, b) => {
        return getActualValue(a) - getActualValue(b);
      });
    } else if (extraFilters.sort === "des") {
      sortData.sort((a, b) => {
        return getActualValue(b) - getActualValue(a);
      });
    }
    setFilterProducts(sortData);
    // eslint-disable-next-line
  }, [extraFilters, products]);

  // This is called whenever the page is changed
  useEffect(() => {
    let arr = [];
    let tempArr = [];
    for (let i = 0; i < filterProducts.length; i++) {
      tempArr.push(filterProducts[i]);
      if ((i + 1) % 9 === 0) {
        arr.push(tempArr);
        tempArr = [];
      }
      if (i + 1 === filterProducts.length) {
        if (tempArr.length > 0) arr.push(tempArr);
        tempArr = [];
      }
    }
    setTotalPages(arr.length);
    setPageData(arr[page - 1]);
    setSectionData(arr);
  }, [filterProducts, page]);

  return (
    <div className={style.shopBox}>
      <div
        className={
          showFilter
            ? `${style.filterBox} ${style.filterTop}`
            : `${style.filterBox}`
        }
      >
        <div
          className={style.closeFilter}
          onClick={() => {
            setShowFilter((prev) => !prev);
          }}
        >
          <span className="material-symbols-outlined">close</span>
        </div>

        <Filters applyFilters={applyFilters} />
      </div>
      <div className={style.productsBox}>
        <div className={style.topBar}>
          <div className={style.searchBox}>
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search product here.."
              onChange={(e) => {
                setExtraFilters({ ...extraFilters, search: e.target.value });
              }}
            />
          </div>
          <div className={style.filters}>
            <button
              onClick={() => {
                setShowFilter((prev) => !prev);
              }}
            >
              <span className="material-symbols-outlined">filter_list</span>
              Filters
            </button>
            <select
              onChange={(e) => {
                setExtraFilters({ ...extraFilters, sort: e.target.value });
              }}
            >
              <option value="">Sort by: Default</option>
              <option value="asc">Price: Low to High</option>
              <option value="des">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className={style.found}>
          <strong>{filterProducts.length}</strong> product found.
        </div>
        <div className={style.pageInfo}>
          Page {page} of {sectionData.length}
        </div>
        <div className={style.allProducts}>
          {pageData?.map((item, index) => {
            return <ItemCard key={index} item={item} />;
          })}
        </div>
        <div className={style.pageInfo}>
          Page {page} of {sectionData.length}
        </div>
        <div className={style.pageBar}>
          <div
            className={style.arrow}
            onClick={() => {
              let pageNo = page;
              if (pageNo > 1) {
                pageNo--;
              }
              setPage(pageNo);
            }}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </div>
          <div className={style.pages}>
            {sectionData.map((item, index) => {
              return (
                <div
                  className={page === index + 1 ? `${style.active}` : ``}
                  onClick={() => {
                    setPage(index + 1);
                  }}
                  key={index}
                >
                  {index + 1}
                  <span className={style.totalCount}>
                    /{sectionData.length}
                  </span>
                </div>
              );
            })}
          </div>
          <div
            className={style.arrow}
            onClick={() => {
              let pageNo = page;
              if (pageNo < totalPages) {
                pageNo++;
              }
              setPage(pageNo);
            }}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
