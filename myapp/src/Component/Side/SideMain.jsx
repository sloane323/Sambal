import React from 'react';
import { Link } from 'react-router-dom'; // Add this import statement
import style from "./SideMain.module.css";
import MenuSvg from './menu.svg';

export default function SideMain({ activeTab, onTabClick }) {
  return (
    <div>
      <div className={style.sidemain}>
        <div className={style.roundwhwrap}>
          <img src={MenuSvg} alt="Menu" />
        </div>

        <div
          className={style.roundor}
          style={{
            top: activeTab === 'home' ? '7em' : activeTab === 'shop' ? '14em' : '23em',
            transition: 'top 0.3s ease-in-out'
          }}
        >
          <div className={style.roundwh}></div>
        </div>

        <Link to="/"> {/* Specify the route path */}
          <h2
            className={activeTab === 'home' ? style.active : ''}
            onClick={() => onTabClick('home')}
          >
            HOME
          </h2>
        </Link>

        <Link to="/shop"> {/* Specify the route path */}
          <h2
            className={activeTab === 'shop' ? style.active : ''}
            onClick={() => onTabClick('shop')}
          >
            SHOP
          </h2>
        </Link>

        <Link to="/contact"> {/* Specify the route path */}
          <h2
            className={activeTab === 'contact' ? style.active : ''}
            onClick={() => onTabClick('contact')}
          >
            CONTACT
          </h2>
        </Link>
        
      </div>
    </div>
  );
}
