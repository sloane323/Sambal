import React, { useState } from 'react';
import style from "./Contact.module.css";

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

    // You can customize the email body and subject
    const subject = 'Message from your website';
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.location.href = `mailto:${formData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="App">
      <h1>Make Order From Us</h1>
      
      <div className={style.whatsapp}> 
        <h3>WhatsApp</h3>
        <span> +60 017 000 0000 </span> <br />
        <button onClick={handleWhatsAppClick}>Chat Now</button>
      </div>

      <div className={style.email}> 
        <h3>Get in touch</h3>
        <form>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} /> <br />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} /> <br />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
          <div style={{ color: 'red' }}>{validationErrors.email}</div> <br />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange}></textarea> <br />
          <button type="button" onClick={handleSendEmailClick}>Send</button>
        </form>
      </div>

      <div> 
        {/* Placeholder for icons */}
        <span>Icon 1</span>
        <span>Icon 2</span>
        <span>Icon 3</span>
        <span>Icon 4</span>
        <span>Icon 5</span>
      </div>
    </div>
  );
}
