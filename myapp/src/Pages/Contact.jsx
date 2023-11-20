import React, { useState } from 'react';
import style from "./Contact.module.css";
import Backin from "./Backin.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error when the user starts typing
    setValidationErrors({
      ...validationErrors,
      [name]: '',
    });
  };

  const handleWhatsAppClick = () => {
    // You can replace the number with the actual WhatsApp number
    const phoneNumber = '+600170000000';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleSendEmailClick = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.email || !emailRegex.test(formData.email)) {
      setValidationErrors({
        ...validationErrors,
        email: 'Invalid email address',
      });
      return;
    }
  
    // Simulate sending email (replace this with actual email sending logic)
    // For now, just show an alert
    alert("Email Sent!");
  
    // Clear the form data after sending the email
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  
    // You can also clear the validation errors if needed
    setValidationErrors({});
  };
  

  return (
    <div className="App">
 <div className={style.title}>
        <img src={Backin} alt="Backin" />
        <div className={style.text}>
          <h1>Get in Touch Contact Us</h1>
          <div>
        Wholesale Inquiry and Customer Center</div>
        </div>
    <br />
      </div>
      
      <div className={style.whatsapp}> 
        <h3>WhatsApp</h3>
        <span> +60 017 000 0000 </span> <br />
        <button onClick={handleWhatsAppClick}>Chat Now</button>
      </div>

     <div className={style.email}> 
     <h3>  Get in touch </h3>
        <form>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} /> <br />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} /> <br />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
          <div style={{ color: 'red' }}>{validationErrors.email}</div> <br />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange}></textarea> <br />
          <button type="button" onClick={handleSendEmailClick}>Send</button>
        </form>
      </div>

    </div>
  );
}
