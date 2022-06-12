// import { useState, useEffect } from "react";
// import axios from "axios";

const CategoriesMore = () => {
  // const result = "https://fakestoreapi.com/products";
  // const [isMore, setIsMore] = useState(true);

  // const handleMore = () => {
  //   setIsMore(!isMore);
  // };

  return (
    <section id="categories">
      <div className="categories-list-wrapper">
        <div className="categories-list">
          <ul>
            <li>
              <button className="see-all-btn">LIHAT SEMUA</button>
            </li>
            <li className="list">
              <button>T-SHIRTS</button>
            </li>
            <li className="list">
              <button>JEANS</button>
            </li>
            <li className="list">
              <button>FLANNEL</button>
            </li>
            <li className="list">
              <button>HATS</button>
            </li>
            <li className="list">
              <button>JACKET</button>
            </li>
            <li className="list">
              <button>SHIRT</button>
            </li>
            <li className="list">
              <button>ACCESSORIES</button>
            </li>
            {/* <li className={isMore ? "listOff" : "list"}>
              <button>PANTS</button>
            </li>
            <li className={isMore ? "listOff" : "list"}>
              <button>SHOES</button>
            </li>
            <li className={isMore ? "listOff" : "list"}>
              <button>BAGS</button>
            </li>
            <li className={isMore ? "listOff" : "list"}>
              <button>SWEATER</button>
            </li>
            <li className={isMore ? "listOff" : "list"}>
              <button>SNEAKERS</button>
            </li>
            <li className={isMore ? "listOff" : "list"}>
              <button>LONG SLEEVES</button>
            </li>
            <li className="list">
              <button className="see-more" onClick={handleMore}>
                more
              </button>
            </li> */}
          </ul>
        </div>
        <button className="filter-btn">
          <img src="/icons/filter.svg" alt="" />
          Filter
        </button>
      </div>
    </section>
  );
};

export default CategoriesMore;
