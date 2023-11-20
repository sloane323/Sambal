import React, { useState } from 'react';
import Main from './Pages/Main';
import SideMain from './Component/Side/SideMain';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  const [selectedTab, setSelectedTab] = useState('home');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="All">
      <div className="cover">
        <SideMain activeTab={selectedTab} onTabClick={handleTabClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
