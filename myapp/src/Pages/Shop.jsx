// Shop.jsx
import React, { useState, useEffect } from 'react';
import Product from '../Component/Product';
import sambalData from '../Data.json';
import style from "./Shop.module.css";
import Backin from "./Backin.svg";


const Shop = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    updateShopDisplay();
  }, []);

  const updateShopDisplay = () => {
    const clickedStars = JSON.parse(sessionStorage.getItem('clickedStars')) || {};
    const displayed = sambalData.filter(product => clickedStars[product.id]);
    setDisplayedProducts(displayed);
  };

  return (
    <div className={style.title}>
        <img src={Backin} alt="Backin" />
        <div className={style.text}>
          <h1>Shop Your Sambal</h1>
          <div>Easy and Quick Payment</div>
        </div>

        <div className={style.ProductBox}>
        {displayedProducts.map(product => (
        <Product key={product.id} sambalInfo={product} updateShopDisplay={updateShopDisplay} />
      ))} 
        <div>
          <div className={style.stick}></div>
          <div className={style.stickM}></div>
        </div>


    </div>    </div>
  );
};

export default Shop;
