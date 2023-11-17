import React, { useEffect, useRef } from 'react';
import Product from '../Component/Product';
import sambalData from '../Data.json';
import style from './Home.module.css';

export default function Home() {
  const sambalInfo = sambalData[0]; // Change the index as needed
  const stickMRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickM = stickMRef.current;

      if (stickM) {
        const scrollPercentage = (window.scrollY || window.pageYOffset) / (document.body.scrollHeight - window.innerHeight);

        // Calculate the position of stickM based on scroll percentage
        const stickMTop = scrollPercentage * (window.innerHeight - stickM.clientHeight);

        // Update stickM position
        stickM.style.top = `${stickMTop}px`;
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <h1>Pick Your Sambal</h1>
      <p>Indonesian Chile Paste</p>
      <div className={style.ProductBox}>
        <div>
          {sambalData.map((sambalInfo) => (
            <Product key={sambalInfo.id} sambalInfo={sambalInfo} className={style.prodductbox} />
          ))}
        </div>

        <div className={style.stickM} ref={stickMRef}></div>
      </div>
    </div>
  );
}
