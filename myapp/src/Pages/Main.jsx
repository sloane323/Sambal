// Main.js
import React from 'react';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';

export default function Main({ selectedTab }) {
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
      {content}
    </div>
  );
}
