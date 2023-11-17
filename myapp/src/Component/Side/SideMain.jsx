// SideMain.js
import React, { useState } from 'react';
import style from "./SideMain.module.css"
import MenuSvg from './menu.svg'; // SVG 파일을 불러옴

export default function SideMain({ onTabClick }) {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    onTabClick(tab);
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={style.sidemain}>

        <div className={style.roundwhwrap} > 
        <img src={MenuSvg} alt="Menu" /> {/* SVG 이미지를 렌더링 */}
        </div>


        <div
          className={style.roundor}
          style={{
            top: activeTab === 'home' ? '8em' : activeTab === 'shop' ? '15em' : '23em',
            transition: 'top 0.3s ease-in-out' // 부드러운 움직임을 위한 transition 속성 추가
          }}
        >
          <div className={style.roundwh}></div>
        </div>
        <h2 onClick={() => handleTabClick('home')}>HOME</h2>
        <h2 onClick={() => handleTabClick('shop')}>SHOP</h2>
        <h2 onClick={() => handleTabClick('contact')}>CONTACT</h2>
      </div>
    </div>
  );
}
