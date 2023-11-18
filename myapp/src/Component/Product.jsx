// Product.jsx
import React, { useState, useEffect } from 'react';
import Star from "./Star.svg";
import StarO from "./StarO.svg";
import style from "./Product.module.css";
import Modal from 'react-modal';

const modalStyle = {
  content: {
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    padding: 0,
  },
};

const Product = ({ sambalInfo, updateShopDisplay }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedStars = JSON.parse(sessionStorage.getItem('clickedStars')) || {};
    setIsClicked(storedStars[sambalInfo.id] || false);
  }, [sambalInfo.id]);

  const handleStarClick = () => {
    const updatedStars = JSON.parse(sessionStorage.getItem('clickedStars')) || {};
    updatedStars[sambalInfo.id] = !isClicked;
    sessionStorage.setItem('clickedStars', JSON.stringify(updatedStars));
    setIsClicked(!isClicked);
    updateShopDisplay();
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.All}>
      <div>
        {/* Clickable star */}
        <div className={`${style.starwarp} ${isClicked ? style.clickedStarwarp : ''}`} onClick={handleStarClick}>
          {isClicked ? (
            <img src={StarO} alt="StarO" />
          ) : (
            <img src={Star} alt="Star" />
          )}
        </div>

        {/* Clickable product box */}
        <div className={style.conbox} onClick={handleModalOpen}>
          <div className={style.imgbox} style={{ backgroundImage: `url(${sambalInfo.image})` }}></div>
          <div className={style.titlename}>{sambalInfo.name}</div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        style={modalStyle}
        contentLabel="Product Details Modal"
      >
        <div>
          <h2>{sambalInfo.name} Details</h2>
          <div>Other details about the product can go here...</div>
          {/* Add more details as needed */}
          <button onClick={handleModalClose}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default Product;
