import React, { useEffect, useRef, useState } from 'react';
import Product from '../Component/Product';
import sambalData from '../Data.json';
import style from './Home.module.css';
import Backin from "./Backin.svg";
import Modal from 'react-modal';

// Set the app element for React Modal
Modal.setAppElement('#root');

export default function Home() {
  const sambalInfo = sambalData[0]; // Change the index as needed
  const homeRef = useRef(null);
  const textRef = useRef(null);

  const handleScroll = () => {
    if (homeRef.current && textRef.current) {
      const scrollPercentage = (homeRef.current.scrollTop / (homeRef.current.scrollHeight - homeRef.current.clientHeight)) * 100;
      console.log('Home component height:', homeRef.current.clientHeight);
      console.log('Text element height:', textRef.current.clientHeight);
      console.log('Scroll percentage:', scrollPercentage.toFixed(2) + '%');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current && textRef.current) {
        const scrollPercentage = (homeRef.current.scrollTop / (homeRef.current.scrollHeight - homeRef.current.clientHeight)) * 100;
        console.log('Home component height:', homeRef.current.clientHeight);
        console.log('Text element height:', textRef.current.clientHeight);
        console.log('Scroll percentage:', scrollPercentage.toFixed(2) + '%');
      }
    };
  
    if (homeRef.current) {
      homeRef.current.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      if (homeRef.current) {
        homeRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [homeRef, textRef]);


  return (
    <div className="App" ref={homeRef}>
      <div className={style.title}>
        <img src={Backin} alt="Backin" />
        <div className={style.text}>
          <h1>Pick Your Sambal</h1>
          <div ref={textRef}>Indonesian Chile Paste</div>
        </div>

      </div>

      <div className={style.ProductBox}>
        <div>
          {sambalData.map((sambalInfo) => (
            <Product key={sambalInfo.id} sambalInfo={sambalInfo} className={style.prodductbox} />
          ))}
        </div>

        <div>
          <div className={style.stick}></div>
          <div className={style.stickM}></div>
        </div>
      </div>


    </div>
  );
}
