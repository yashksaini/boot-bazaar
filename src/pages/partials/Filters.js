import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext";
import style from "./filter.module.scss";
const Filters = (props) => {
  const { applyFilters } = props;
  const { type } = useContext(ProductsContext);
  const colors = ["Black", "Brown", "Blue", "White", "Green", "Red", "Pink"];
  const sizes = [6, 7, 8, 9, 10, 11];
  const discounts = [5, 25, 50, 75];
  //   const ratings = [4, 3, 2];
  const initialData = {
    category: [],
    colors: [],
    sizes: [],
    discount: 0,
    // ratings: 0,
  };
  const [filters, setFilters] = useState(initialData);
  const toggleCategory = (id) => {
    let arr = updateArray(filters.category, id);
    setFilters({ ...filters, category: arr });
  };
  const toggleColors = (color) => {
    let arr = updateArray(filters.colors, color);
    setFilters({ ...filters, colors: arr });
  };
  const toggleSizes = (size) => {
    let arr = updateArray(filters.sizes, size);
    setFilters({ ...filters, sizes: arr });
  };
  const updateArray = (arr, value) => {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    } else {
      arr.splice(arr.indexOf(value), 1);
    }
    return arr;
  };
  useEffect(() => {
    applyFilters(filters);
  }, [filters]);
  return (
    <div className={style.allFilters}>
      {/* Filter for category */}
      <div className={style.filter}>
        <div className={style.filterTitle}>Category</div>
        <div className={style.filterData}>
          {type.map((typeData, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  toggleCategory(typeData.id);
                }}
                className={
                  filters.category.indexOf(typeData.id) !== -1
                    ? `${style.active}`
                    : ""
                }
              >
                <span
                  className={
                    filters.category.indexOf(typeData.id) !== -1
                      ? `${style.hide}`
                      : "material-symbols-outlined"
                  }
                >
                  check_box_outline_blank
                </span>
                <span
                  className={
                    filters.category.indexOf(typeData.id) === -1
                      ? `${style.hide}`
                      : "material-symbols-outlined"
                  }
                >
                  select_check_box
                </span>

                {typeData.typeName}
              </div>
            );
          })}
        </div>
      </div>
      {/* Filter for Colors */}
      <div className={style.filter}>
        <div className={style.filterTitle}>Color</div>
        <div className={style.filterData1}>
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  toggleColors(color);
                }}
                className={
                  filters.colors.indexOf(color) !== -1 ? `${style.active}` : ""
                }
              >
                <span>{color}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Size */}
      <div className={style.filter}>
        <div className={style.filterTitle}>Size</div>
        <div className={style.filterData2}>
          {sizes.map((size, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  toggleSizes(size);
                }}
                className={
                  filters.sizes.indexOf(size) !== -1 ? `${style.active}` : ""
                }
              >
                <span>{size}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Discounts */}
      <div className={style.filter}>
        <div className={style.filterTitle}>Discounts</div>
        <div className={style.filterData}>
          {discounts.map((discount, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setFilters({ ...filters, discount: discount });
                }}
                className={
                  filters.discount === discount ? `${style.active}` : ""
                }
              >
                <span
                  className={
                    filters.discount === discount
                      ? "material-symbols-outlined"
                      : `${style.hide}`
                  }
                >
                  task_alt
                </span>
                <span
                  className={
                    filters.discount !== discount
                      ? "material-symbols-outlined"
                      : `${style.hide}`
                  }
                >
                  radio_button_unchecked
                </span>
                <span>{discount}% Off or more</span>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={style.clear}
        onClick={() => {
          setFilters(initialData);
        }}
      >
        Clear
      </button>
      {/* Rating */}
      {/* <div className={style.filter}>
        <div className={style.filterTitle}>Ratings</div>
        <div className={style.filterData}>
          {ratings.map((rating, index) => {
            return (
              <div key={index}>
                <input type="radio" id={"idr" + index} name="rating" />
                <label htmlFor={"idr" + index}>{rating} & Up</label>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Filters;
