import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import style from "./Product.module.css";
import Modal from 'react-modal';
import Cart from './Cart.svg'; 
import AddCart from './AddCart.svg';

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
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    const productId = sambalInfo.id;

    // Toggle sessionStorage value
    const cartItems = JSON.parse(sessionStorage.getItem('cartItemsById')) || {};
    cartItems[productId] = !cartItems[productId];
    sessionStorage.setItem('cartItemsById', JSON.stringify(cartItems));

    // Update state
    setIsInCart(!isInCart);
  };

  const handleCheckout = () => {
    // When Checkout button is clicked, navigate to the '/shop' route
    navigate('/shop');
  };

  useEffect(() => {
    // Set initial state from sessionStorage on initial render
    const productId = sambalInfo.id;
    const cartItems = JSON.parse(sessionStorage.getItem('cartItemsById')) || {};
    setIsInCart(cartItems[productId] || false);
  }, [sambalInfo.id]);

  return (
    <div className={style.All}>
      <div>
        {/* Clickable product box */}
        <div className={style.conbox}>
          <div>
            <img src={isInCart ? Cart : AddCart} onClick={isInCart ? handleCheckout : handleAddToCart} />
          </div>
          <div>
            <div className={style.imgbox} onClick={handleModalOpen} style={{ backgroundImage: `url(${sambalInfo.image})` }}></div>
            <div className={style.titlename} onClick={handleModalOpen}>{sambalInfo.name} <br /> RM {sambalInfo.price}</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        style={modalStyle}
        contentLabel="Product Details Modal"
      >
        <div className={style.modalAll}>
          <div className={style.imgbox2} style={{ backgroundImage: `url(${sambalInfo.image})` }}></div>
          <h2>{sambalInfo.name} </h2>
          <div>{sambalInfo.description} <br />
            <span>Ingredients : {sambalInfo.ingredients.join(', ')} </span></div>
          <br />
          <div>Origin : {sambalInfo.origin}</div>
          <div>Spicy : {sambalInfo.spicy} </div>
          <div>Calories : {sambalInfo.CALORIES}</div>
        </div>
        <button onClick={isInCart ? handleCheckout : handleAddToCart}>
          {isInCart ? 'Checkout' : 'Add to Cart'}
        </button>
        <button className={style.closeButton} onClick={handleModalClose}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Product;
