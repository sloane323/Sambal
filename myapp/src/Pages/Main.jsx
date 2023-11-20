import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // Import Outlet and useNavigate
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';

export default function Main({ selectedTab }) {
  const navigate = useNavigate(); // Get the navigate function

  // Function to navigate to the selected tab
  const handleNavigation = (tab) => {
    navigate(tab);
  };

  // Render the selected content based on the tab
  let content;
  switch (selectedTab) {
    case 'home':
      content = <Home />;
      break;
    case 'shop':
      content = <Shop />;
      break;
    case 'contact':
      content = <Contact />;
      break;
    default:
      content = null;
  }

  return (
    <div className="MainpWrap">
      <div>
        {/* Render the selected content */}
        {content}
      </div>
      <Outlet /> {/* Render nested routes */}
    </div>
  );
}