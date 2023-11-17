// Product.jsx
import React, { useState } from 'react';
import Star from "./Star.svg";
import StarO from "./StarO.svg";
import style from "./Product.module.css";
import detail from "./ShowDetail.svg";
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';

const modalStyle = {
  content: {
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    padding:0,
  },
};

export default function Product({ sambalInfo }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStarClick = () => {
    setIsClicked(!isClicked);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.All}>
      <div className={`${style.starwarp} ${isClicked ? style.clickedStarwarp : ''}`} onClick={handleStarClick}>
        {isClicked ? (
          <img src={StarO} alt="StarO" />
        ) : (
          <img src={Star} alt="Star" />
        )}
      </div>
      <div className={style.imgbox} style={{ backgroundImage: `url(${sambalInfo.image})` }}></div>
      <h2>{sambalInfo.name}</h2>
      <div className={style.detailbox} onClick={handleModalOpen}>
        <img src={detail} alt="Star" />
      </div>

      {/* 모달 */}
      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          style={modalStyle}
          contentLabel="Product Detail Modal"
        >
        <div className={style.modalAll}>
        <div className={style.btnwrap} ><button onClick={handleModalClose}>Close</button> </div> 
  
        <img
    src={sambalInfo.image}
    alt={sambalInfo.name}
    style={{
      maxWidth: '100%', // 이미지의 최대 너비
      maxHeight: '100%', // 이미지의 최대 높이
      width: 'auto', // 자동으로 너비 조절
      height: 'auto', // 자동으로 높이 조절
    }}
  />
          <div className={style.modalText}> 
            <h2>{sambalInfo.name}</h2> 
            <span> {sambalInfo.description} </span>
            <div>  {sambalInfo.SERVINGS} </div>
          </div>
         

          </div> 
        </Modal>
      </CSSTransition>
    </div>
  );
}
