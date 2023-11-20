import React, { useEffect, useRef, useState } from 'react';
import Product from '../Component/Product';
import sambalData from '../Data.json';
import style from './Home.module.css';
import Backin from "./Backin.svg";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Home() {
  const sambalInfo = sambalData[0]; // Change the index as needed
  return (
    <div className="App" >
      <div className={style.title}>
        <img src={Backin} alt="Backin" />
        <div className={style.text}>
          <h1>Pick Your Sambal</h1>
          <div>Indonesian Chile Paste</div>
        </div>
    <br />
      </div>

      <div className={style.ProductBox}>
        <div>
          {sambalData.map((sambalInfo) => (
            <Product key={sambalInfo.id} sambalInfo={sambalInfo} className={style.prodductbox} />
          ))}
        </div>


      </div>


    </div>
  );
}
